import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  signal,
  TemplateRef,
} from '@angular/core';

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

  hasDemonstration = signal(false);
  hasNotes = signal(false);

  ngAfterContentInit() {
    this.hasDemonstration.set(!!this.demonstrationRef);
    this.hasNotes.set(!!this.notesRef);
  }
}
