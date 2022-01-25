import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useDropzone } from 'react-dropzone';
import {
  IoAdd,
  IoAlertCircle,
  IoCheckmarkCircle,
  IoImages,
  IoRemove,
  IoStorefront,
} from 'react-icons/io5';

import { useAuth } from 'auth';
import {
  Card,
  CardCSS,
  FieldGroup,
  GridImage,
  Help,
  ImageGrid,
  ImageRemove,
  ImageWrapper,
  Input,
  Label,
  LabelCSS,
  Warning,
  WarningText,
} from 'ui';

import { Button } from '../../../components';
import { useUser } from '../../../hooks';
import { createCompany, getAllCategories, updateCompany, uploadImages, getImageUrl } from '../../../lib';

import removeImage from './removeImage';
import {
  FormCSS,
  ImageUpload,
  LogoInputCSS,
  LogoImage,
  LogoUpload,
} from './stitch';
import { Heading, Icon } from '../stitch';
import { SubmitProps } from './types';
import { Company } from 'types';
import validation from './validation';

export default function Submit({
  company
}: { 
  company? :Company & Partial<{ categoryId: number; notes: string }>
}) {
  const [categories, setCategories] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [logoErrors, setLogoErrors] = useState([]);
  const [imageErrors, setImageErrors] = useState([]);

  const onRejected = ({ fileRejections, setErrors }) => {
    const errors = [
      ...new Set(
        fileRejections.map((rejection) =>
          rejection.errors.map((error) => error.message),
        ),
      ),
    ];

    setErrors(errors[0]);
  };

  const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } =
    useDropzone({
      accept: ['image/png', 'image/jpeg', 'image/svg+xml'],
      maxFiles: 1,
      maxSize: 4000000,
      onDrop: (acceptedFiles) => {
        const newFile = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );

        setLogoFile(newFile[0]);
      },
      onDropAccepted: () => setLogoErrors([]),
      onDropRejected: (fileRejections) => {
        onRejected({ fileRejections, setErrors: setLogoErrors });
      },
      onFileDialogCancel: () => 'void',
    });

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      accept: ['image/jpeg', 'image/png'],
      maxFiles: 12,
      maxSize: 8000000,
      onDrop: useCallback(
        (acceptedFiles) => {
          const newFiles = acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          );

          setImageFiles(
            [
              ...imageFiles,
              ...newFiles.filter((newImage) => {
                const index = imageFiles.findIndex(
                  (currentImage) =>
                    currentImage.lastModified === newImage.lastModified &&
                    currentImage.name === newImage.name &&
                    currentImage.size === newImage.size &&
                    currentImage.type === newImage.type,
                );
                return index === -1;
              }),
            ].slice(0, 12),
          );
        },
        [imageFiles],
      ),
      onDropAccepted: () => setImageErrors([]),
      onDropRejected: (fileRejections) => {
        onRejected({ fileRejections, setErrors: setImageErrors });
      },
    });

  const { user } = useAuth();
  const {
    user: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUser(user.id);

  useEffect(() => {
    setIsCategoryLoading(true);
    getAllCategories()
      .then((response) => response)
      .then((data) => {
        setCategories(data);
        setIsCategoryLoading(false);
      });
  }, []);

  useEffect(() => {
    if (company && company.images){
      const files = [];
      
      company.images.map((image: string) => {
        const urlToFile = (url: string) => {
           
          const file = {
            name: image,
            preview: url
          };

          files.push(file);
        };

        getImageUrl({
          bucket: 'companies',
          path: `${company.uuid}/images/${image}`,
          setUrl: urlToFile,
        });
      });

      setImageFiles(files);
    }
  }, [company]);

  useEffect(() => {
    if (company && company.logo){
      const urlToFile = (url: string) => {
      
        const file = {
          name: company.logo,
          preview: url
        };

      setLogoFile(file);
    }

      getImageUrl({
        bucket: 'companies',
        path: `${company.uuid}/logo/${company.logo}`,
        setUrl: urlToFile
      });
    }
  }, [company]);

  if (isUserError) return <div />;
  if (isUserLoading) return <div />;

  if (isError)
    return (
      <Card className={FormCSS()}>
        <IoAlertCircle className={Icon({ variant: 'error' })} />
        <Heading>It looks like something went wrong.</Heading>
        <p>
          It looks like something went wrong, try submitting the form again or{' '}
          <Link href="/contact">
            <a>contact us</a>
          </Link>{' '}
          if the problem occurs again.
        </p>
      </Card>
    );

  if (isSubmitted)
    return (
      <Card className={FormCSS()}>
        <IoCheckmarkCircle className={Icon({ variant: 'success' })} />
        <Heading>Your submission was successful!</Heading>
        <p>
          We&apos;ll review your submission within the next 48 hours so your
          business can be listed! You can check the progress of your submission
          on your{' '}
          <Link href="/account">
            <a>account</a>
          </Link>
          .
        </p>
      </Card>
    );

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        logo: [],
        name: company?.name ?? '',
        description: company?.description ?? '',
        category: company?.categoryId ?? 0,
        images: [],
        website: company?.website ?? '',
        gab: company?.gab ?? '',
        email: company?.email ?? '',
        phone: company?.phone ?? '',
        notes: company?.notes ?? '',
      }}
      validationSchema={validation(logoFile, imageFiles)}
      onSubmit={async (values: SubmitProps, { setSubmitting }) => {
        setSubmitting(true);

        const {
          category,
          description,
          email,
          gab,
          name,
          notes,
          phone,
          website,
        } = values;

        const logoFileName = logoFile.name ?? uuidv4();
        const imageFilesNames = imageFiles.map((image) =>  image.name ?? uuidv4());

        try {
          // Upload errors (but still works somehow) if image is not an instance of File
          setLogoFile(await getFileFromImage(logoFile, logoFileName));
          setImageFiles(await Promise.all(imageFiles.map(async (image, idx) => {
            return await getFileFromImage(image, imageFilesNames[idx])
          })))

          if(company){
            await updateCompany({
              uuid: company.uuid,
              categoryId: Number(category),
              description,
              email,
              gab,
              imageFilesNames,
              logoFileName,
              name,
              notes,
              phone: phone.replace(/\D/g, ''),
              userId: Number(userData.id),
              website,
            }).then((company) => {
              saveImages(company, logoFile, logoFileName, imageFiles, imageFilesNames);
            });
          }
          else{
            await createCompany({
              categoryId: Number(category),
              description,
              email,
              gab,
              imageFilesNames,
              logoFileName,
              name,
              notes,
              phone: phone.replace(/\D/g, ''),
              userId: Number(userData.id),
              website,
            }).then((company) => {
              saveImages(company, logoFile, logoFileName, imageFiles, imageFilesNames);
            });
          }
        } catch (error) {
          console.error('Error submitting form:', error.message);

          setIsError(true);
          setSubmitting(false);

          return;
        }
        setIsSubmitted(true);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className={`${CardCSS()} ${FormCSS()}`}>
          <h2>Submit your business</h2>

          <div>
            <section>
              <Label
                htmlFor="logo"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                <div className={LogoInputCSS()} {...getLogoRootProps()}>
                  <input
                    name="logo"
                    {...formik.getFieldProps('logo')}
                    {...getLogoInputProps()}
                  />
                  <LogoUpload>
                    {logoFile ? (
                      <LogoImage
                        key={logoFile.name}
                        alt={logoFile.name}
                        layout="fill"
                        objectFit="cover"
                        src={logoFile.preview}
                      />
                    ) : (
                      <IoStorefront />
                    )}
                  </LogoUpload>
                </div>
                <span>Logo</span>
                {formik.touched.logo && formik.errors.logo && (
                  <Warning aria-live="polite">{formik.errors.logo}</Warning>
                )}
                {logoErrors &&
                  logoErrors.map((error) => (
                    <Warning key={error} aria-live="polite">
                      {logoErrors}
                    </Warning>
                  ))}
              </Label>
            </section>
          </div>

          <FieldGroup>
            <Input.Textbox
              label="Name"
              name="name"
              placeholder="Your business"
              type="text"
            />

            <Input.Select label="Category" name="category">
              {categories.map(({ id, name }) => (
                <Input.Option key={id} value={id}>
                  {name}
                </Input.Option>
              ))}
            </Input.Select>
          </FieldGroup>

          <Input.Textarea
            help={
              <DescriptionHelp
                length={formik.getFieldProps('description').value.length}
              />
            }
            label="Description"
            name="description"
            placeholder="A brief description of what you do"
          />

          <div className={LabelCSS()}>
            <div>
              <span>Images</span>
              <Help>Optional (12 max.)</Help>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {imageFiles.length !== 0 && (
                <ImageGrid>
                  {imageFiles.map((file) => (
                    <ImageWrapper key={file.name}>
                      <ImageRemove
                        onClick={() =>
                          removeImage({
                            image: file,
                            files: imageFiles,
                            setFiles: setImageFiles,
                          })
                        }
                      >
                        <IoRemove />
                        Remove
                      </ImageRemove>
                      <GridImage
                        key={file.name}
                        alt={file.name}
                        layout="fill"
                        objectFit="cover"
                        src={file.preview}
                      />
                    </ImageWrapper>
                  ))}
                  {imageFiles.length < 12 && (
                    <div {...getImageRootProps()}>
                      <input
                        name="images"
                        {...formik.getFieldProps('images')}
                        {...getImageInputProps()}
                      />
                      <ImageUpload>
                        <IoAdd />
                      </ImageUpload>
                      {formik.touched.images && formik.errors.images && (
                        <Warning aria-live="polite">
                          {formik.errors.images}
                        </Warning>
                      )}
                      {formik.touched.images &&
                        imageErrors &&
                        imageErrors.map((error) => (
                          <Warning key={error} aria-live="polite">
                            {error}
                          </Warning>
                        ))}
                    </div>
                  )}
                </ImageGrid>
              )}

              {imageFiles.length === 0 && (
                <div {...getImageRootProps()}>
                  <input
                    name="images"
                    {...formik.getFieldProps('images')}
                    {...getImageInputProps()}
                  />
                  <ImageUpload>
                    <IoImages />
                    <p>Click or drag and drop to add images</p>
                  </ImageUpload>
                  {formik.touched.images && formik.errors.images && (
                    <Warning aria-live="polite">{formik.errors.images}</Warning>
                  )}
                </div>
              )}
            </div>
          </div>

          <FieldGroup>
            <Input.Textbox
              label="Website"
              name="website"
              placeholder="https://example.com"
              type="text"
            />

            <Input.Textbox
              help="Optional"
              label="Gab"
              name="gab"
              placeholder="Username"
              type="text"
            />

            <Input.Textbox
              help="Optional"
              label="Public Email"
              name="email"
              placeholder="email@example.com"
              type="email"
            />

            <Input.Number
              format="(###) ###-####"
              help="Optional"
              label="Public Phone"
              name="phone"
              placeholder="(000) 000-0000"
            />
          </FieldGroup>

          <Input.Textarea
            help="Optional"
            label="Notes"
            name="notes"
            placeholder="Anything else you'd like to let us know? (ex. if your category wasn't available)"
          />

          <Button disabled={formik.isSubmitting} type="submit" full>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

function saveImages(company:Company, logoFile: File, logoFileName: string, imageFiles: File[], imageFileNames: string[]){
  uploadImages({
    bucket: 'companies',
    path: `${company.uuid}/logo`,
    files: [logoFile],
    names: [logoFileName],
  });
  uploadImages({
    bucket: 'companies',
    path: `${company.uuid}/images`,
    files: imageFiles,
    names: imageFileNames,
  });
}

async function getFileFromImage(image: { preview : string }, name: string){
    if (image instanceof File) {
      return image;
    }
  
    return await getFileFromUrl(image.preview, name);
}

async function getFileFromUrl(url, name, defaultType = 'image/jpeg'){
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], name, {
    type: data.type || defaultType,
  });
}

function DescriptionHelp({ length }: { length: number }) {
  if (length > 512 - 32 && length <= 512) return <span>{length}/512</span>;

  if (length > 512) return <WarningText>{length}/512</WarningText>;

  return <span />;
}


