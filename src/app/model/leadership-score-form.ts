import {EvaluationScoreForm} from './evaluation-score-form';

export class LeadershipScoreForm extends EvaluationScoreForm {
  /**
   * 政治方向
   */
  politicsQuality1: number;
  /**
   * 党建工作
   */
  politicsQuality2: number;
  /**
   * 社会责任
   */
  politicsQuality3: number;
  /**
   * 经济效益
   */
  operatePerformance1: number;
  /**
   * 可持续发展
   */
  operatePerformance2: number;
  /**
   * 创新成效
   */
  operatePerformance3: number;
  /**
   * 科学管理
   */
  operatePerformance4: number;
  /**
   * 发扬民主
   */
  teamwork1: number;
  /**
   * 整体合力
   */
  teamwork2: number;
  /**
   * 运行机制
   */
  teamwork3: number;
  /**
   * 联系群众
   */
  styleAndImage1: number;
  /**
   * 选人用人
   */
  styleAndImage2: number;
  /**
   * 廉洁自律
   */
  styleAndImage3: number;

  constructor() {
    super();
  }
}
