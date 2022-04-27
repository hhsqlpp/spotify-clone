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
exports.TrackSevice = void 0;
const album_schema_1 = require("./../album/schemas/album.schema");
const file_service_1 = require("./../file/file.service");
const comment_schema_1 = require("./schemas/comment.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const track_schema_1 = require("./schemas/track.schema");
const mongoose_2 = require("mongoose");
let TrackSevice = class TrackSevice {
    constructor(trackModel, commentModel, fileService, albumModel) {
        this.trackModel = trackModel;
        this.commentModel = commentModel;
        this.fileService = fileService;
        this.albumModel = albumModel;
    }
    async create(dto, picture, audio) {
        const audioPath = this.fileService.createFile(file_service_1.FileType.AUDIO, audio);
        const imagePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const album = await this.albumModel.findById(dto.album_id);
        const track = await this.trackModel.create(Object.assign(Object.assign({}, dto), { listens: 0, picture: imagePath, audio: audioPath, album_name: album.name }));
        if (album) {
            album.tracks.push(track);
            album.save();
        }
        return track;
    }
    async getAll(count = 100, offset = 0) {
        const tracks = await this.trackModel
            .find({})
            .skip(Number(offset))
            .limit(Number(count));
        return tracks;
    }
    async getOne(id) {
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }
    async delete(id) {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }
    async addComment(dto) {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create(Object.assign({}, dto));
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }
    async listen(id) {
        const track = await this.trackModel.findById(id);
        track.listens += 1;
        track.save();
    }
    async search(query) {
        const tracks = await this.trackModel.find({
            name: { $regex: new RegExp(query, 'i') },
        });
        return tracks;
    }
};
TrackSevice = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(track_schema_1.Track.name)),
    __param(1, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __param(3, (0, mongoose_1.InjectModel)(album_schema_1.Album.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        file_service_1.FileService,
        mongoose_2.Model])
], TrackSevice);
exports.TrackSevice = TrackSevice;
//# sourceMappingURL=track.service.js.map