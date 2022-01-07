export async function getAllCategories() {
  try {
    const categories = await fetch(`/api/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await categories.json();

    return data;
  } catch (error) {
    console.error('Error getting all categories:', error.message);
  }
}
