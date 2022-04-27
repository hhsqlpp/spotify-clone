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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const album_service_1 = require("./album.service");
const create_album_dto_1 = require("./dto/create-album.dto");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    getAlbums() {
        return this.albumService.getAlbums();
    }
    createAlbum(dto, files) {
        return this.albumService.createAlbum(dto, files.picture[0]);
    }
    getAlbum(id) {
        return this.albumService.getAlbum(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "getAlbums", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'picture', maxCount: 1 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_album_dto_1.CreateAlbumDto, Object]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "createAlbum", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlbumController.prototype, "getAlbum", null);
AlbumController = __decorate([
    (0, common_1.Controller)('/albums'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map