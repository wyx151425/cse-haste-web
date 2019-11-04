import {HasteEntity} from './haste-entity';
import {EvaluationGroup} from './evaluation-group';

export class EvaluationPlan extends HasteEntity {
  /**
   * 名称
   */
  name: string;
  /**
   * 类型
   */
  type: number;
  /**
   * 启动时间
   */
  startAt: string;
  /**
   * 完成时间
   */
  completeAt: string;
  /**
   * 进展情况
   */
  stage: number;
  /**
   * 考核评价工作组
   */
  evaluationGroups: Array<EvaluationGroup>;

  constructor() {
    super();
  }
}
