import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BoardDndComponent } from "./board-dnd/board-dnd.component";
import { SimpleDivComponent } from "./simple-div/simple-div.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardDndListComponent } from './board-dnd-list/board-dnd-list.component';
import { IssueCardComponent } from './issue-card/issue-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoardDndComponent,
    SimpleDivComponent,
    BoardDndListComponent,
    IssueCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
