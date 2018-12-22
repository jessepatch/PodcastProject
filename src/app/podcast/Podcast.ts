
export class Podcast {

    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    //
    artistName: string;
    //
    collectionName: string;
    //
    trackName: string;
    collectionCensoredName: string;
    collectionViewUrl: string;
    //
    feedUrl: string;
    trackViewUrl: string;
    //
    artworkUrl130: string;
    //
    artworkUrl160: string;
    //
    artworkUrl100: string;
    trackPrice: string;
    trackRentalPrice: string;
    collectionHdPrice: string;
    trackHdPrice: string;
    trackHeRentalPrice: string;
    //Most recent episode release date
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    trackCount: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    contentAdvisoryRating: string;
    //
    artworkUrl600: string;
    genreIds: string[];
    genres: string[];

    public toString(): string {
        return this.collectionName;
    }


}

export class PodcastAPI {
    resultCount: number;
    results: Podcast[];
}