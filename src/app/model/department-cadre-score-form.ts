import {EvaluationScoreForm} from './evaluation-score-form';

export class DepartmentCadreScoreForm extends EvaluationScoreForm {
  /**
   * 政治表现
   */
  politicsPerformance: number;
  /**
   * 能力素质
   */
  abilityAndQuality: number;
  /**
   * 工作业绩
   */
  workPerformance: number;
  /**
   * 廉洁从业和“一岗双责”
   */
  integrity: number;

  constructor() {
    super();
  }
}
