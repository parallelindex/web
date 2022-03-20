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
    const createResponse = await fetch(`/api/company`, {
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

    if (!createResponse.ok){
      const error: Error = await createResponse.json();
      error.message = 'Status ' + createResponse.status + '; ' + error.message;
      
      throw error;
    }

    const data = await createResponse.json();

    return data;
  } catch (error) {
    console.error('Error creating company:', error.message);
    throw error;
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
    const updateResponse = await fetch(`/api/company/${uuid}`, {
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

    if (!updateResponse.ok){
      const error: Error = await updateResponse.json();
      error.message = 'Status ' + updateResponse.status + '; ' + error.message;
      
      throw error;
    }

    const data = await updateResponse.json();

    return data;
  } catch (error) {
    console.error( 'Error updating company:', error.message);
    throw error;
  }
}

export async function deleteCompany({
  uuid
}: {
  uuid: string
}) {
  try {
    const response = await fetch(`/api/company/${uuid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.ok;
  } catch (error) {
    console.error('Error updating company:', error.message);
    throw error;
  }
}

export async function softDeleteCompany({
  uuid
}: {
  uuid: string
}) {
  try {
    const response = await fetch(`/api/company/${uuid}/soft`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (error) {
    console.error('Error updating company:', error.message);
    throw error;
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
    throw error;
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
    throw error;
  }
}

