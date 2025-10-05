import axios from 'axios';
import { localQuotes, Quote } from '../data/localQuotes';

export async function fetchQuote(): Promise<Quote> {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const { content, author } = response.data;
    return { text: content, author };
  } catch (error) {
    // Fallback to local quotes if API fails
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    return localQuotes[randomIndex];
  }
}
