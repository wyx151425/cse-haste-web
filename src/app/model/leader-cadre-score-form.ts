import {EvaluationScoreForm} from './evaluation-score-form';

export class LeaderCadreScoreForm extends EvaluationScoreForm {
  /**
   * 政治忠诚
   */
  politicsPerformance1: number;
  /**
   * 政治定力
   */
  politicsPerformance2: number;
  /**
   * 政治担当
   */
  politicsPerformance3: number;
  /**
   * 政治能力
   */
  politicsPerformance4: number;
  /**
   * 政治自律
   */
  politicsPerformance5: number;
  /**
   * 推动执行能力
   */
  abilityAndQuality1: number;
  /**
   * 学习创新能力
   */
  abilityAndQuality2: number;
  /**
   * 团队建设能力
   */
  abilityAndQuality3: number;
  /**
   * 职业操守
   */
  abilityAndQuality4: number;
  /**
   * 履职绩效
   */
  workPerformance1: number;
  /**
   * 协同成效
   */
  workPerformance2: number;
  /**
   * 作风建设
   */
  integrity1: number;
  /**
   * 廉洁自律
   */
  integrity2: number;
  /**
   * 一岗双责
   */
  integrity3: number;

  constructor() {
    super();
  }
}
