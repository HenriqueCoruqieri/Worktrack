/**
 * Converte uma string em um slug amigável para URL.
 * Ex: "João Silva" -> "joao-silva"
 * @param {string} text
 * @returns {string}
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD") // Normaliza caracteres para separar acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/[^\w-]+/g, "") // Remove todos os caracteres não-palavra
    .replace(/--+/g, "-"); // Substitui múltiplos hífens por um único
};
