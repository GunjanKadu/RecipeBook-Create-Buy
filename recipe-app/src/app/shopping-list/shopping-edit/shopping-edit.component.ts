import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { Ingredient } from "../../shared/ingredients.model";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}
  @ViewChild("nameInput", { static: false }) name: ElementRef;
  @ViewChild("amountInput", { static: false }) amount: ElementRef;

  @Output() ingredients = new EventEmitter<Ingredient>();

  onAdd() {
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredients.emit(newIngredient);
  }
  ngOnInit() {}
}
