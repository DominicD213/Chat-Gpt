import React from 'react'
import './gbt3.css'
import {Feature} from "../../components/"

const Gbt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="gpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is Gpt3" text="GPT-3 (Generative Pre-trained Transformer 3) is a language generation model developed by OpenAI. It is the third iteration of the GPT series of models and is considered to be one of the most advanced language models to date, with a capacity to generate human-like text, perform language translation, question answering, summarization, and several other natural language processing tasks. It was trained on a massive corpus of text data and can generate coherent and context-aware responses to prompts, making it a powerful tool for various NLP applications."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are endless!</h1>
          <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='A chatbot is an artificial intelligence program designed to simulate conversation with human users, typically through messaging applications, websites, or mobile apps.'/>
        <Feature title='Knowledgebase' text='GPT-3 has a vast knowledge base, derived from its training on a massive corpus of text data, allowing it to generate context-aware responses and perform various natural language processing tasks such as question answering, summarization, and text generation.'/>
        <Feature title='Education' text="From GPT-3, we can learn about advanced natural language processing techniques, including the ability to generate human-like text, perform language translation, answer questions, summarize text, and perform various other language-related tasks,"/>
      </div>
    </div>
  )
}

export default Gbt3