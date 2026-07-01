
import{ BaseComponent } from "./BaseComponent.js";
import { expect, test } from '@playwright/test';

export class TagFeedTab extends BaseComponent{
 constructor(page, userId = 0) {
    super(page, userId);
 }
}