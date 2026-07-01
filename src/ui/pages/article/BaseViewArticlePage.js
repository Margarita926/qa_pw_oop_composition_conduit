import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
    this.articleContentBlock = new ArticleContentBlock(this.page, this.userId);
  }

}