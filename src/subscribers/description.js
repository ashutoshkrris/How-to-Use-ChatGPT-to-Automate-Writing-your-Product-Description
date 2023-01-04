import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your API key
});

class DescriptionSubscriber {
  constructor({ productService, eventBusService }) {
    this.productService_ = productService;
    eventBusService.subscribe("product.created", this.handleDescription);
  }
  handleDescription = async (data) => {
    let productDescription = "";

    const product = await this.productService_.retrieve(data.id);
    if (product.description == null) {
      try {
        const productName = product.title;
        const productFeatures = [product.subtitle, product.material];
        const prompt = `Write a product description for ${productName}, which has the following features: ${productFeatures.join(
          ", "
        )}.`;

        productDescription = await this.prepareDescription(prompt);
      } catch (error) {
        let errorMessage =
          "Something went wrong while generating the product description.";
        const response = error.response;

        if (response.status === 500) {
          errorMessage = errorMessage + " " + "Check your server code";
        }

        console.log(errorMessage);
        return;
      }

      product.description = productDescription;
      this.productService_.update(product.id, product);
    }
  };

  prepareDescription = async (
    prompt,
    model = "text-davinci-003",
    temperature = 0.7,
    maxTokens = 256,
    topP = 1,
    frequencyPenalty = 0,
    presencePenalty = 0
  ) => {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model,
      prompt,
      temperature,
      max_tokens: maxTokens,
      top_p: topP,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
    });

    return response.data.choices[0].text.trim();
  };
}

export default DescriptionSubscriber;
