import {Evaluatee} from './evaluatee';
import {EvaluationScoreForm} from './evaluation-score-form';

export class ProfessionalScoreForm extends EvaluationScoreForm {
  /**
   * 受评者
   */
  evaluateeId: number;
  evaluateeName: string;
  evaluatee: Evaluatee;
  /**
   * 价值观
   */
  moral1: number;
  /**
   * 认同感
   */
  moral2: number;
  /**
   * 诚信正直
   */
  quality1: number;
  /**
   * 责任心
   */
  quality2: number;
  /**
   * 进取心
   */
  quality3: number;
  /**
   * 团队建设
   */
  ability1: number;
  /**
   * 高效执行
   */
  ability2: number;
  /**
   * 学习创新
   */
  ability3: number;
  /**
   * 履职绩效
   */
  performance1: number;
  /**
   * 问题解决
   */
  performance2: number;
  /**
   * 协调成效
   */
  performance3: number;

  constructor() {
    super();
  }
}
