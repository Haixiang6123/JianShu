const Mock = require('mockjs');
const Random = Mock.Random;

export const chat = [{
  path: '/chat',
  type: 'get',
  data() {
    let result = {
      type: 'success',
    };

    let data = [];

    // 自动生成作者信息
    for (let i = 1; i <= 9; i++) {
      let chat = {
        avatar: `/static/image/jian-re-writer/writer-${Random.natural(1,17)}.jpg`,
        name: Random.cname(),
        passage: Random.ctitle(),
        datetime: Random.datetime('MM.dd HH:mm'),
        at: Random.cname(),
        chat: Random.cparagraph()
      }
      
        data.push(chat);
    }

    result.data = data;

    return result;
  }
}]
