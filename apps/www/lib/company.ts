export async function createCompany({
  categoryId,
  description,
  email,
  gab,
  imageFilesNames,
  logoFileName,
  name,
  notes,
  phone,
  userId,
  website,
}: {
  categoryId: number;
  description: string;
  email?: string;
  gab?: string;
  imageFilesNames?: string[];
  logoFileName: string;
  name: string;
  notes?: string;
  phone?: string;
  userId: number;
  website: string;
}) {
  try {
    const newCompany = await fetch(`/api/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryId,
        description,
        email,
        gab,
        images: imageFilesNames,
        logo: logoFileName,
        name: name,
        notes,
        phone: phone.replace(/\D/g, ''),
        userId,
        website,
      }),
    });

    const data = await newCompany.json();

    return data;
  } catch (error) {
    console.error('Error creating company:', error.message);
  }
}

export async function updateCompany({
  uuid,
  categoryId,
  description,
  email,
  gab,
  imageFilesNames,
  logoFileName,
  name,
  notes,
  phone,
  userId,
  website,
}: {
  uuid: string;
  categoryId: number;
  description: string;
  email?: string;
  gab?: string;
  imageFilesNames?: string[];
  logoFileName: string;
  name: string;
  notes?: string;
  phone?: string;
  userId: number;
  website: string;
}) {
  try {
    const updatedCompany = await fetch(`/api/company/${uuid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryId,
        description,
        email,
        gab,
        images: imageFilesNames,
        logo: logoFileName,
        name: name,
        notes,
        phone: phone.replace(/\D/g, ''),
        userId,
        website,
      }),
    });

    const data = await updatedCompany.json();

    return data;
  } catch (error) {
    console.error('Error updating company:', error.message);
  }
}

export async function getAllCompanies() {
  try {
    const allCompanies = await fetch(`/api/company`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await allCompanies.json();

    return data;
  } catch (error) {
    console.error('Error getting all companies:', error.message);
  }
}

export async function getCompany(uuid: string) {
  try {
    const company = await fetch(`/api/company/${uuid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await company.json();
    return data;
  } catch (error) {
    console.error('Error getting company:', error.message);
  }
}

