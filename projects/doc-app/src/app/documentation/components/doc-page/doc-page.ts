import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DocProperty {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface DocSlot {
  name: string;
  description: string;
}

@Component({
  selector: 'doc-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doc-page.html',
  styleUrls: ['./doc-page.css'],
})
export class DocPageComponent implements AfterContentInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() usage: string = '';
  @Input() properties: DocProperty[] = [];
  @Input() slots: DocSlot[] = [];

  @ContentChild('demonstration') demonstrationRef: TemplateRef<any> | undefined;
  @ContentChild('notes') notesRef: TemplateRef<any> | undefined;

  hasDemonstration: boolean = false;
  hasNotes: boolean = false;

  ngAfterContentInit() {
    this.hasDemonstration = !!this.demonstrationRef;
    this.hasNotes = !!this.notesRef;
  }
}
