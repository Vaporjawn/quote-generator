import axios from 'axios';
import { localQuotes, Quote } from '../data/localQuotes';

/**
 * Fetches a random quote from the quotable.io API.
 * Falls back to a local quote if the API request fails.
 * @returns {Promise<Quote>} A quote object with text and author.
 */
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
