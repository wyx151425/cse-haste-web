import {EvaluationPlan} from './evaluation-plan';
import {HasteEntity} from './haste-entity';
import {Evaluatee} from './evaluatee';
import {Evaluator} from './evaluator';

export class EvaluationGroup extends HasteEntity {
  /**
   * 名称
   */
  name: string;
  /**
   * 完成标志
   */
  complete: boolean;
  completeAt: string;
  /**
   * 评分表类型
   */
  evaluationScoreFormType: number;
  /**
   * 考核评价计划
   */
  evaluationPlanId: number;
  evaluationPlanName: string;
  evaluationPlan: EvaluationPlan;
  /**
   * 评价者
   */
  evaluators: Array<Evaluator>;
  /**
   * 受评者
   */
  evaluatees: Array<Evaluatee>;

  constructor() {
    super();
  }
}
