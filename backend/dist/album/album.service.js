"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const album_schema_1 = require("./schemas/album.schema");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../file/file.service");
let AlbumService = class AlbumService {
    constructor(albumModel, fileService) {
        this.albumModel = albumModel;
        this.fileService = fileService;
    }
    async getAlbums() {
        const albums = await this.albumModel.find();
        return albums;
    }
    async createAlbum(dto, image) {
        const imagePath = this.fileService.createFile(file_service_1.FileType.IMAGE, image);
        const album = this.albumModel.create(Object.assign(Object.assign({}, dto), { listens: 0, picture: imagePath }));
        return album;
    }
    async getAlbum(id) {
        const album = await this.albumModel.findById(id).populate('tracks');
        return album;
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(album_schema_1.Album.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map