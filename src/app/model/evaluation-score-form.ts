import {HasteEntity} from './haste-entity';
import {Evaluator} from './evaluator';
import {EvaluationGroup} from './evaluation-group';
import {Evaluatee} from './evaluatee';

export class EvaluationScoreForm extends HasteEntity {
  /**
   * 完成标志
   */
  /**
   * 类型
   */
  type: number;
  /**
   * 完成标志
   */
  complete: boolean;
  completeAt: string;
  /**
   * 受评者
   */
  evaluateeId: number;
  evaluateeName: string;
  evaluatee: Evaluatee;
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
