
export const fileToJSON = async (file: File): Promise<string | null> => {
  const result = await file.text();
  if(!result) return null
  return JSON.parse(result)
}