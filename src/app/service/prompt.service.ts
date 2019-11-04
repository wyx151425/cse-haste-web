import { Injectable } from '@angular/core';
import {Prompt} from '../model/dto/prompt';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  public static STATUS_ERROR = 0;
  public static STATUS_SUCCESS = 1;
  public static STATUS_WARNING = 2;
  public static STATUS_INFO = 3;

  public prompts: Array<Prompt>;
  private index: number;

  constructor() {
    this.prompts = [];
    this.index = 0;
  }

  public pushError(message: string): void {
    this.push(PromptService.STATUS_ERROR, message);
  }

  public pushSuccess(message: string): void {
    this.push(PromptService.STATUS_SUCCESS, message);
  }

  public pushWarning(message: string): void {
    this.push(PromptService.STATUS_WARNING, message);
  }

  public pushInfo(message: string): void {
    this.push(PromptService.STATUS_INFO, message);
  }

  private push(status: number, message: string): void {
    this.index++;
    const prompt: Prompt = new Prompt(this.index, status, message);
    this.prompts.push(prompt);
    setTimeout(() => {
      const i = this.prompts.indexOf(prompt);
      this.prompts.splice(i, 1);
    }, 5000);
  }
}
