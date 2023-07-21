import { Routes, RouterModule} from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: "", component: PostListComponent
    },
    {
        path: "create", component: PostCreateComponent
    },
    {
        path: "edit/:postId", component: PostCreateComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "signup", component: SignupComponent
    }
]

@NgModule({
    imports: [
        // BrowserModule, 
        RouterModule.forRoot(routes),
        // FormsModule
      ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}