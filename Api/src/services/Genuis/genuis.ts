import axios from 'axios';
import { checkOptions, getTitle } from "./utils/index.ts";
import { extractLyrics } from './utils/extractLyrics.ts';


const url = process

interface SearchOptions {
    apiKey: string;
    title: string;
    artist: string;
    optimizeQuery?: boolean;
    authHeader?: boolean;
}

interface SongDetails {
    id: number;
    title: string;
    url: string;
    lyrics: string;
    albumArt: string;
}

/**
 * Search for a song on Genius.
 * @param options Search options.
 * @returns Promise resolving to an object with search results or null if no results found.
 */
export async function searchSong(options: SearchOptions): Promise<{ id: number; title: string; albumArt: string; url: string }[] | null> {
    try {
        checkOptions(options);
        let { apiKey, title, artist, optimizeQuery = false, authHeader = false } = options;
        const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
        const reqUrl = `${url}search?q=${encodeURIComponent(song)}`;
        const headers = authHeader ? { Authorization: 'Bearer ' + apiKey } : {};
        let { data } = await axios.get(
            authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
            { headers }
        );
        if (data.response.hits.length === 0) return null;
        const results = data.response.hits.map((val: any) => {
            const { full_title, song_art_image_url, id, url } = val.result;
            return { id, title: full_title, albumArt: song_art_image_url, url };
        });
        return results;
    } catch (e) {
        throw e;
    }
}

/**
 * Get lyrics for a song from Genius.
 * @param options Options for getting lyrics.
 * @returns Promise resolving to the lyrics of the song or null if not found.
 */
export async function getLyrics(options: SearchOptions): Promise<string | null> {
    try {
        checkOptions(options);
        let results = await searchSong(options);
        if (!results) return null;
        let lyrics = await extractLyrics(results[0].url);
        return lyrics;
    } catch (e) {
        throw e;
    }
}

/**
 * Get song details including lyrics and album art from Genius.
 * @param options Options for getting song details.
 * @returns Promise resolving to an object with song details or null if not found.
 */
export async function getSongDetails(options: SearchOptions): Promise<SongDetails | null> {
    try {
        checkOptions(options);
        let results = await searchSong(options);
        if (!results) return null;
        let lyrics = await extractLyrics(results[0].url);
        return {
            id: results[0].id,
            title: results[0].title,
            url: results[0].url,
            lyrics,
            albumArt: results[0].albumArt
        };
    } catch (e) {
        throw e;
    }
}

/**
 * Get song details by ID from Genius.
 * @param id ID of the song.
 * @param apiKey Genius API key.
 * @returns Promise resolving to an object with song details or null if not found.
 */
export async function getSongById(id: number | string, apiKey: string): Promise<SongDetails | null> {
    if (!id) throw 'No id was provided';
    if (!apiKey) throw 'No apiKey was provided';
    try {
        let {
            data: {
                response: { song }
            }
        } = await axios.get(`${url}songs/${id}?access_token=${apiKey}`);
        let lyrics = await extractLyrics(song.url);
        return {
            id: song.id,
            title: song.full_title,
            url: song.url,
            lyrics,
            albumArt: song.song_art_image_url
        };
    } catch (e) {
        throw e;
    }
}
