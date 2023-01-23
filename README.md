# How to Use ChatGPT to Automate Writing your Product Description

This repository is the codebase of tutorial [How to Use ChatGPT to Automate Writing your Product Description](https://medusajs.com/blog/chatgpt-medusa/).

[Medusa Documentation](https://docs.medusajs.com/) | [Medusa Website](https://medusajs.com/) | [Medusa Repository](https://github.com/medusajs/medusa)

## Medusa Version

This tutorial uses Medusa v1.7.2 It is not guaranteed that it will work with future releases.

## Prerequisites

- [Node.js at least v14](https://docs.medusajs.com/tutorial/set-up-your-development-environment#nodejs)
- [Git](https://docs.medusajs.com/tutorial/set-up-your-development-environment/#git)
- [Medusa CLI](https://docs.medusajs.com/tutorial/set-up-your-development-environment#medusa-cli)
- [Redis](https://docs.medusajs.com/tutorial/set-up-your-development-environment/#redis)
- [OpenAI API Key](https://openai.com/api/)

## How to Install

1. Clone this repository:

    ```bash
    git clone https://github.com/ashutoshkrris/How-to-Use-ChatGPT-to-Automate-Writing-your-Product-Description.git my-medusa-store
    ```

2. Change directory and install dependencies:

    ```bash
    cd my-medusa-store
    npm install
    ```

3. Run the following command to create a `.env` file:
    ```bash
    mv .env.template .env
    ```

4. Add your OpenAI API Key in the `.env` file. 

5. Start Server:

    ```bash
    medusa develop
    ```

## Other Resources
- [OpenAI API](https://openai.com/api/)
- [Demo Video](https://youtu.be/yQURzUCKVvI)
