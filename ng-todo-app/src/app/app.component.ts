import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo App';
  public todoName = '';
  public todoForm: FormControl = new FormControl([''], [Validators.minLength(5)]);

  public onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoName = this.todoForm.value;
      if (this.todoName.trim().length < 5) {
        this.todoForm.setErrors({invalidWhiteSpace: true});
      } else {
        this.todoForm.reset();
      }
    }
  }
}
