import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock';
import { ArticleContentBlock } from '../../components/ArticleContentBlock';
import { ArticleFeedItem } from '../../components/ArticleFeedItem';


export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(
      page,
      userId,
    );
    this.articleContentBlock = new ArticleContentBlock(page, userId);
    this.articleFeedItem = new ArticleFeedItem(page, userId);

  }

  
}
