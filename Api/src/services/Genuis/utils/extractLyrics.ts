import axios, { AxiosResponse } from 'axios';
import cheerio from 'cheerio';

/**
 * @param {string} url - Genius URL
 */
export default async function fetchLyrics(url: string): Promise<string | null> {
    try {
        const response: AxiosResponse = await axios.get(url);
        const $ = cheerio.load(response.data);
        let lyrics: string = $('div[class="lyrics"]').text().trim();
        if (!lyrics) {
            lyrics = '';
            $('div[class^="Lyrics__Container"]').each((i, elem) => {
                if ($(elem).text().length !== 0) {
                    let snippet: string = $(elem)
                        .html()
                        .replace(/<br>/g, '\n')
                        .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
                    lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
                }
            });
        }
        if (!lyrics) return null;
        return lyrics.trim();
    } catch (e) {
        throw e;
    }
}
