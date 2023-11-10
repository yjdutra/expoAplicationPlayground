// withAndroidMainActivityAttributes.js
const { withAndroidManifest } = require("@expo/config-plugins");

function addAttributesToMainActivity(androidManifest, attributes) {
  const { manifest } = androidManifest;

  // Verificar se existe a estrutura esperada
  if (
    !Array.isArray(manifest["application"]) ||
    !manifest["application"][0] ||
    !Array.isArray(manifest["application"][0]["activity"]) ||
    !manifest["application"][0]["activity"][0] ||
    !Array.isArray(manifest["application"][0]["activity"][0]["intent-filter"]) ||
    !manifest["application"][0]["activity"][0]["intent-filter"][0] ||
    !Array.isArray(manifest["application"][0]["activity"][0]["intent-filter"][0]["category"])
  ) {
    console.warn("Estrutura inválida no AndroidManifest.xml");
    return androidManifest;
  }

  const category = manifest["application"][0]["activity"][0]["intent-filter"][0]["category"];
  const newCategories = attributes.map((attribute) => ({ $: attribute }));

  // Adicionar novos elementos ao array "category"
  category.push(...newCategories);

  // Log do array "category" após a adição de atributos
  console.log('Category Array após adição de atributos:', category);

  return androidManifest;
}

const withAndroidMainActivityAttributes = (config, { attributes }) => {
  return withAndroidManifest(config, (config) => {
    config.modResults = addAttributesToMainActivity(config.modResults, attributes);
    return config;
  });
};

module.exports = withAndroidMainActivityAttributes;
