import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Services
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { Items } from '../../interfaces/youtube.interfaces';
import { LoadingController, Loading } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loader    : Loading;
  categories: Items[] = [];
  videos    : Items[] = [];

  constructor(
    public navCtrl: NavController,
    private youtubeProvider: YoutubeProvider,
    public loadingCtrl: LoadingController,
    public youtube: YoutubeVideoPlayer
  ) {
    // Fetch asynchronously all categories first
    this.youtubeProvider.fetchCategories()
    .then(data => {
      if (data) {
        this.categories = data.items;
      }
    });

    // Fetch tranding videos
    this.searchTrandingVideos();
  }

  searchVideos(categoryId: number) {
    this.presentLoading();
    this.youtubeProvider.searchVideos(categoryId)
    .then(data => {
      if (data) {
        this.videos = data.items;
        this.loader.dismiss();
      }
    });
  }

  searchTrandingVideos() {
    this.presentLoading();
    this.youtubeProvider.searchTrandingVideos()
    .then(data => {
      if (data) {
        this.videos = data.items;
        this.loader.dismiss();
      }
    });
  }

  private presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

}
