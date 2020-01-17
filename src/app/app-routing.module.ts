import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ResetComponent} from "./reset/reset.component";
import {HomeComponent} from "./home/home.component";
import {ProfilComponent} from "./profil/profil.component";
import {DiscussionShortcutComponent} from "./discussion-shortcut/discussion-shortcut.component";
import {EditComponent} from "./edit/edit.component";
import {EditFormComponent} from "./edit-form/edit-form.component";
import {PremiumComponent} from "./premium/premium.component";
import {PublicityPageComponent} from "./publicity-page/publicity-page.component";
import {PostManagementComponent} from "./post-management/post-management.component";
import {SellManagementComponent} from "./sell-management/sell-management.component";
import {AlertManagementComponent} from "./alert-management/alert-management.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {NotificationComponent} from "./notification/notification.component";
import {WorldComponent} from "./world/world.component";
import {MessageComponent} from "./message/message.component";
import {MobileInboxComponent} from "./mobile-inbox/mobile-inbox.component";
import {MessageWebComponent} from "./message-web/message-web.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {MobilePostFormComponent} from "./mobile-post-form/mobile-post-form.component";
import {MobileSellFormComponent} from "./mobile-sell-form/mobile-sell-form.component";
import {MobileAlertFormComponent} from "./mobile-alert-form/mobile-alert-form.component";
import {BuySpaceComponent} from "./buy-space/buy-space.component";
import {MbPpAdFormComponent} from "./mb-pp-ad-form/mb-pp-ad-form.component";
import {MbPpSellFormComponent} from "./mb-pp-sell-form/mb-pp-sell-form.component";
import {MbPpAlertFormComponent} from "./mb-pp-alert-form/mb-pp-alert-form.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'discussionShortcut', component: DiscussionShortcutComponent },
  { path: 'edit', component: EditComponent },
  { path: 'editForm', component: EditFormComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'publicity', component: PublicityPageComponent },
  { path: 'post', component: PostManagementComponent },
  { path: 'sell', component: SellManagementComponent },
  { path: 'alert', component: AlertManagementComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'world', component: WorldComponent },
  { path: 'chats', component: MessageComponent },
  { path: 'inbox', component: MobileInboxComponent },
  { path: 'amsterne', component: MessageWebComponent },
  { path: 'search', component: SearchUserComponent },
  { path: 'post-form', component: MobilePostFormComponent },
  { path: 'sell-form', component: MobileSellFormComponent },
  { path: 'alert-form', component: MobileAlertFormComponent },
  { path: 'buy', component: BuySpaceComponent },
  { path: 'premium-ad-form', component: MbPpAdFormComponent },
  { path: 'premium-sell-form', component: MbPpSellFormComponent },
  { path: 'premium-alert-form', component: MbPpAlertFormComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootingComponents = [LoginComponent, ResetComponent, HomeComponent, ProfilComponent, DiscussionShortcutComponent, EditFormComponent, PremiumComponent, PublicityPageComponent, PostManagementComponent, SellManagementComponent, AlertManagementComponent, DeliveryComponent]
