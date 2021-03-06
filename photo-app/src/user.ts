import { Album } from "./album";

export class User {
    private album: Album[];

    constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
        this.album = [];
    }

    addAlbum(album: Album) {
        this.album.push(album);
    }

    removeAlbum(album: Album): Album | undefined {
        // Buscar el Album
        const index = this.album.findIndex( a => a.id === album.id );

        // guardar el objeto album
        let deleteAlbum;
        if (index >= 0) {
            deleteAlbum = this.album[index];
            this.album.splice(index, 1);
        }

        return deleteAlbum;
    }

}
