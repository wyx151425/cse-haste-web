import {HasteEntity} from './haste-entity';
import {Evaluator} from './evaluator';
import {EvaluationGroup} from './evaluation-group';

export class EvaluationScoreForm extends HasteEntity {
  /**
   * 完成标志
   */
  complete: boolean;
  /**
   * 评价者
   */
  evaluatorId: number;
  evaluatorName: string;
  evaluator: Evaluator;
  /**
   * 考核评价工作组
   */
  evaluationGroupId: number;
  evaluationGroupName: string;
  evaluationGroup: EvaluationGroup;

  constructor() {
    super();
  }
}
