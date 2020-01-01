import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDatabase, HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatCardModule, MatFormFieldModule  ,MatInputModule  ,MatButtonModule ,MatTreeModule , MatIconModule , MatProgressBarModule, MatStepperModule} from '@angular/material';
import { ResetComponent } from './reset/reset.component';
import { TopTenProductsComponent } from './top-ten-products/top-ten-products.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ProfilComponent } from './profil/profil.component';
import { DiscussionShortcutComponent } from './discussion-shortcut/discussion-shortcut.component';
import { EditComponent } from './edit/edit.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BlockingComponent } from './blocking/blocking.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { BlockingModalComponent } from './blocking-modal/blocking-modal.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';
import { EditAlertsComponent } from './edit-alerts/edit-alerts.component';
import { EditStoriesComponent } from './edit-stories/edit-stories.component';
import { NewsFilComponent } from './news-fil/news-fil.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { HomeLeftComponent } from './home-left/home-left.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { SellModalComponent } from './sell-modal/sell-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PostOptionDropdownComponent } from './post-option-dropdown/post-option-dropdown.component';
import { SellOptionDropdownComponent } from './sell-option-dropdown/sell-option-dropdown.component';
import { AlertOptionDropdownComponent } from './alert-option-dropdown/alert-option-dropdown.component';
import { PostPublicationComponent } from './post-publication/post-publication.component';
import { SellPublicationComponent } from './sell-publication/sell-publication.component';
import { AlertPublicationComponent } from './alert-publication/alert-publication.component';
import { PremiumComponent } from './premium/premium.component';
import { NavbarPrComponent } from './navbar-pr/navbar-pr.component';
import { InfoPrComponent } from './info-pr/info-pr.component';
import { FormPrComponent } from './form-pr/form-pr.component';
import { PublicityPageComponent } from './publicity-page/publicity-page.component';
import { NavPublicityComponent } from './nav-publicity/nav-publicity.component';
import { PubPremiumComponent } from './pub-premium/pub-premium.component';
import { PublicitySponsoringComponent } from './publicity-sponsoring/publicity-sponsoring.component';
import { GetPremiumComponent } from './get-premium/get-premium.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { AdPublicityModalComponent } from './ad-publicity-modal/ad-publicity-modal.component';
import { SellPublicityModalComponent } from './sell-publicity-modal/sell-publicity-modal.component';
import { AlertPublicityModalComponent } from './alert-publicity-modal/alert-publicity-modal.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { SellManagementComponent } from './sell-management/sell-management.component';
import { AlertManagementComponent } from './alert-management/alert-management.component';
import { ImgCManagementComponent } from './img-c-management/img-c-management.component';
import { CommentsManagementComponent } from './comments-management/comments-management.component';
import { CommentsAManagementComponent } from './comments-a-management/comments-a-management.component';
import { CommentsSManagementComponent } from './comments-s-management/comments-s-management.component';
import { CpCommentComponent } from './cp-comment/cp-comment.component';
import { CsCommentComponent } from './cs-comment/cs-comment.component';
import { CaCommentComponent } from './ca-comment/ca-comment.component';
import { CsSalesComponent } from './cs-sales/cs-sales.component';
import { CaAnswersComponent } from './ca-answers/ca-answers.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { SmsListComponent } from './sms-list/sms-list.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryNavComponent } from './delivery-nav/delivery-nav.component';
import { DeliveryDocumentationComponent } from './delivery-documentation/delivery-documentation.component';
import { DeliveryFollowComponent } from './delivery-follow/delivery-follow.component';
import { DeliveryMakeComponent } from './delivery-make/delivery-make.component';
import { DeliveryWorkComponent } from './delivery-work/delivery-work.component';
import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';
import { ProfilPostComponent } from './profil-post/profil-post.component';
import { ProfilSalesComponent } from './profil-sales/profil-sales.component';
import { ProfilPurchasesComponent } from './profil-purchases/profil-purchases.component';
import { ProfilAlertsComponent } from './profil-alerts/profil-alerts.component';
import { ProfilRelationshipsComponent } from './profil-relationships/profil-relationships.component';
import { ProfilRelationshipsOptionComponent } from './profil-relationships-option/profil-relationships-option.component';
import { EditPostOptionComponent } from './edit-post-option/edit-post-option.component';
import { ProfilPersoAffichageComponent } from './profil-perso-affichage/profil-perso-affichage.component';
import { ProfilPersoComponent } from './profil-perso/profil-perso.component';
import { EditNavComponent } from './edit-nav/edit-nav.component';
import { EditPublicitiesComponent } from './edit-publicities/edit-publicities.component';
import { EditDeliveriesComponent } from './edit-deliveries/edit-deliveries.component';
import { EditAmonakComponent } from './edit-amonak/edit-amonak.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { EditPubPremiumComponent } from './edit-pub-premium/edit-pub-premium.component';
import { EditPubSponsoringComponent } from './edit-pub-sponsoring/edit-pub-sponsoring.component';
import { PostPremiumComponent } from './post-premium/post-premium.component';
import { PostPublicityComponent } from './post-publicity/post-publicity.component';
import { SellPublicityComponent } from './sell-publicity/sell-publicity.component';
import { AlertPublicityComponent } from './alert-publicity/alert-publicity.component';
import { SponsoringPublicationComponent } from './sponsoring-publication/sponsoring-publication.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { WindowNotificationsComponent } from './window-notifications/window-notifications.component';
import { WindowMessagesComponent } from './window-messages/window-messages.component';
import { WindowMoreComponent } from './window-more/window-more.component';
import { WindowWorldComponent } from './window-world/window-world.component';
import { WindowPublishComponent } from './window-publish/window-publish.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { MoreAvatarDropdownComponent } from './more-avatar-dropdown/more-avatar-dropdown.component';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { WorldComponent } from './world/world.component';
import { WorldNavigationComponent } from './world-navigation/world-navigation.component';
import { WorldBodyComponent } from './world-body/world-body.component';
import { MobileInboxComponent } from './mobile-inbox/mobile-inbox.component';
import { MessageWebComponent } from './message-web/message-web.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { MobileNavbarBottomComponent } from './mobile-navbar-bottom/mobile-navbar-bottom.component';
import { MobilePostFormComponent } from './mobile-post-form/mobile-post-form.component';
import { MobileSellFormComponent } from './mobile-sell-form/mobile-sell-form.component';
import { MobileAlertFormComponent } from './mobile-alert-form/mobile-alert-form.component';
import { MobilePublicationsModalComponent } from './mobile-publications-modal/mobile-publications-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ResetComponent,
    TopTenProductsComponent,
    HomeFooterComponent,
    ProfilComponent,
    DiscussionShortcutComponent,
    EditComponent,
    EditFormComponent,
    BlockingComponent,
    CategoriesComponent,
    EditPublicationComponent,
    BlockingModalComponent,
    EditPostsComponent,
    EditSalesComponent,
    EditAlertsComponent,
    EditStoriesComponent,
    NewsFilComponent,
    HomeRightComponent,
    HomeLeftComponent,
    LoginFooterComponent,
    PostModalComponent,
    SellModalComponent,
    AlertModalComponent,
    PostOptionDropdownComponent,
    SellOptionDropdownComponent,
    AlertOptionDropdownComponent,
    PostPublicationComponent,
    SellPublicationComponent,
    AlertPublicationComponent,
    PremiumComponent,
    NavbarPrComponent,
    InfoPrComponent,
    FormPrComponent,
    PublicityPageComponent,
    NavPublicityComponent,
    PubPremiumComponent,
    PublicitySponsoringComponent,
    GetPremiumComponent,
    DefaultNavbarComponent,
    AdPublicityModalComponent,
    SellPublicityModalComponent,
    AlertPublicityModalComponent,
    PostManagementComponent,
    SellManagementComponent,
    AlertManagementComponent,
    ImgCManagementComponent,
    CommentsManagementComponent,
    CommentsAManagementComponent,
    CommentsSManagementComponent,
    CpCommentComponent,
    CsCommentComponent,
    CaCommentComponent,
    CsSalesComponent,
    CaAnswersComponent,
    BuyFormComponent,
    SmsListComponent,
    DeliveryComponent,
    DeliveryNavComponent,
    DeliveryDocumentationComponent,
    DeliveryFollowComponent,
    DeliveryMakeComponent,
    DeliveryWorkComponent,
    DeliveryContactComponent,
    ProfilPostComponent,
    ProfilSalesComponent,
    ProfilPurchasesComponent,
    ProfilAlertsComponent,
    ProfilRelationshipsComponent,
    ProfilRelationshipsOptionComponent,
    EditPostOptionComponent,
    ProfilPersoAffichageComponent,
    ProfilPersoComponent,
    EditNavComponent,
    EditPublicitiesComponent,
    EditDeliveriesComponent,
    EditAmonakComponent,
    EditDocumentComponent,
    EditPubPremiumComponent,
    EditPubSponsoringComponent,
    PostPremiumComponent,
    PostPublicityComponent,
    SellPublicityComponent,
    AlertPublicityComponent,
    SponsoringPublicationComponent,
    EditContactComponent,
    WindowNotificationsComponent,
    WindowMessagesComponent,
    WindowMoreComponent,
    WindowWorldComponent,
    WindowPublishComponent,
    MobileNavbarComponent,
    MoreAvatarDropdownComponent,
    NotificationComponent,
    MessageComponent,
    WorldComponent,
    WorldNavigationComponent,
    WorldBodyComponent,
    MobileInboxComponent,
    MessageWebComponent,
    SearchUserComponent,
    MobileNavbarBottomComponent,
    MobilePostFormComponent,
    MobileSellFormComponent,
    MobileAlertFormComponent,
    MobilePublicationsModalComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [DynamicDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
