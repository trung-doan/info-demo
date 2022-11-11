export async function getData() {
  try {
    const response = await fetch("https://trung-doan.github.io/info-demo/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
