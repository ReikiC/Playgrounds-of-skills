export default function Timeline() {
  const events = [
    { year: '1946', event: '出生于纽约皇后区', detail: '6月14日，出生于弗雷德·特朗普和玛丽·安妮·麦克劳德之家' },
    { year: '1968', event: '毕业于沃顿商学院', detail: '获得经济学学士学位' },
    { year: '1971', event: '接管家族企业', detail: '将公司更名为特朗普集团' },
    { year: '1983', event: '登上福布斯富豪榜', detail: '首次进入美国亿万富翁行列' },
    { year: '1996', event: '拥有特朗普大厦', detail: '在纽约第五大道建造地标性建筑' },
    { year: '2004-2015', event: '主持《学徒》节目', detail: '成为全国知名的电视名人' },
    { year: '2015', event: '宣布参选总统', detail: '以共和党人身份参加2016年大选' },
    { year: '2016', event: '当选第45任总统', detail: '击败希拉里·克林顿，赢得美国总统选举' },
    { year: '2017-2021', event: '第一任总统任期', detail: '实施多项重大政策改革' },
    { year: '2020', event: '推动疫苗计划', detail: '加速新冠疫苗研发' },
    { year: '2024', event: '再次赢得总统大选', detail: '击败卡玛拉·哈里斯，当选第47任总统' },
    { year: '2025', event: '开始第二任期', detail: '1月20日宣誓就职' },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2>人生里程碑</h2>
        <div className="timeline">
          {events.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.event}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
