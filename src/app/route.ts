import { Route } from "@angular/router";
import { CreateComponent } from "./Employee/create/create.component";
import { PagenotfoundComponentComponent } from "./pagenotfound-component/pagenotfound-component.component";


export const routes: Route[] = [
    {path : 'create',component:CreateComponent},
    //{path : "**",redirectTo:""}
    { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponentComponent },
]

