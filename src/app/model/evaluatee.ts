import {EvaluationPlan} from './evaluation-plan';
import {EvaluationGroup} from './evaluation-group';
import {HasteEntity} from './haste-entity';
import {User} from './user';

export class Evaluatee extends HasteEntity {
  /**
   * 关联用户
   */
  userId: number;
  userName: string;
  user: User;
  /**
   * 考核评价计划
   */
  evaluationPlanId: number;
  evaluationPlanName: string;
  evaluationPlan: EvaluationPlan;
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
