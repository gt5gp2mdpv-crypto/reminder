// ═══════════════════════════════════════════════════════════════
//  External vocabulary data sets (プリセット単語帳)
//  Loaded on first run into IndexedDB
// ═══════════════════════════════════════════════════════════════
//
//  Format: CSV with columns: 番号,単語,意味
//  Headers are skipped during parsing.
//
//  Data sets:
//    teppeki  – 鉄壁
//    target   – ターゲット1900
//    leap     – Leap
//    system   – システム英単語
//    passtan  – パス単準１級
//    tangoou  – 単語王2202
// ═══════════════════════════════════════════════════════════════

const VOCAB_DATA_SETS = [
  {
    id: 'teppeki',
    name: '鉄壁',
    csv: `番号,英単語,意味
1,vital,(～にとって)非常に重要な(to, for～)； 生命の
2,vivid,生き生きとした, 鮮やかな
3,revive,～を生き返らせる, 生き返る
4,essential,(～にとって)重要な, 必要不可欠な(to, for～)； 本質的な
5,indispensable,(～にとって)重要な, 必要不可欠な(to, for～)
6,crucial,決定的な, 極めて重要な
7,significance,重要性
8,consequence,結果, 重要さ
9,matter,事柄, 問題； 重要である
10,count,～を数える； 重要である
11,make a difference,重要である
12,trivial,ささいな, ありふれた
13,trifle,ささいな事, くだらない事
14,common,共通の, よくある, 一般的な, ありふれた
15,ordinary,普通の, 通常の, ありふれた
16,familiar,(～に)よく知られた(to～)； (～に)精通している(with～)； 親しい
17,emphasize,～を強調する
18,stress,～を強調する； ストレス, 重点, 強調
19,neglect,～を(うっかり)怠る, ～を無視する
20,ignore,～を無視する, ～を知らないふりをする
21,eminent,著名な
22,prominent,目立った； 有名な
23,primary,第1の, 主要な
24,tiny,ちっぽけな
25,slight,わずかな, 取るに足らない
26,character,性格, 人格, 特徴, 登場人物, 文字
27,feature,(目立った)特徴, 顔立ち； ～を特集する, 呼び物にする
28,trait,特徴, 特色
29,typical,典型的な, (～)らしい(of～)
30,unique,(～に)特有の(to～), 独自の； 唯一の
31,peculiar,(～に)特有の(to～)； 風変わりな
32,particular,特定の, 特別の
33,general,全般的な, 一般的な
34,specify,～を特定する
35,distinguish,～を(…と)区別する, 見分ける(from…)
36,define,～を定義する, 明確にする
37,vague,曖昧な, 漠然とした
38,obscure,不明瞭な, ぼやけた； 世に知られていない
39,ambiguous,曖昧な, どちらともとれる
40,obvious,明白な
41,evident,明白な
42,apparent,見たところの, 明白な
43,respect,尊敬, 尊重, (in)点, 事項； ～を尊敬する, 尊重する
44,aspect,(in)側面, 様相, 点
45,detail,(in)詳細
46,precise,正確な
47,accurate,正確な
48,structure,構造, 構成, 骨格
49,construct,～を建設する, 組み立てる
50,destroy,～を破壊する, 滅ぼす
51,architecture,建築, 建築学
52,constitute,～を構成する, 占める； 設立する
53,institute,～(法律・制度)を制定する； 協会, 研究所
54,substitute,～を(…の代わりに)代用する(for…)； 代用品, 代理人
55,stable,安定した
56,establish,～を設立する, 確立する
57,subject,科目, 主題, 家来, 臣民； 患者, 被験者； (～に)従属している, かかりやすい(to～)
58,subdue,～を征服する, 支配する, 抑える
59,submit,（～に)服従する, 身を任せる(to～)； ～を服従させる, を提出する
60,substance,物質、実体
61,fundamental,根本的な, 基礎的な, 重要な
62,fund,資金, 基金
63,found,～を設立する
64,foundation,基盤, 基礎, 土台
65,profound,深い, 深遠な
66,base,土台、基礎
67,basis,基礎
68,ground,運動場, 地面, 根拠, 理由
69,superficial,うわべの
70,shallow,浅い； 浅はかな, うわべの
71,superb,すばらしい, 見事な
72,supervise,～を監視する, 指揮する
73,superstition,迷信
74,core,中心, 核心； (果物の)芯
75,surface,表面, 表層
76,internal,内面の, 内側の
77,external,外側の
78,concentrate,(～に)集中する(on～)； ～を(…に)集中させる(on…)
79,focus,(～に)集中する, 重点を置く(on～)； 焦点
80,compose,～を構成する； 作曲・作文する
81,consist,(～から)成る(of～), (～の中に)ある, 存在する(in～)
82,organize,～を組織する
83,element,要素, 元素
84,component,構成要素, 部分
85,complex,複雑な, 複合の
86,complicated,複雑な
87,reveal,～を明らかにする, 暴露する
88,conceal,～を隠す
89,expose,～をさらす
90,impose,～を(…に)課す, 押しつける(on[upon]…)
91,divide,～を分割する
92,diffuse,～をまき散らす, 分散する； 拡散する
93,scatter,～をまき散らす
94,spread,広がる, 普及する
95,bend,～を曲げる
96,incline,～を傾ける, (…したい)気持ちにさせる(to do)
97,lean,(～に)寄りかかる, もたれる(on[against]～)
98,erect,～を直立させる, 建てる； 直立した
99,emit,～を放出する, 排出する
100,absorb,～を吸収する
101,attract,～を惹(引)き付ける, 魅了する
102,extract,～を抜き出す, 抽出する
103,aim,目標, 目的； (～を)狙う, 目標とする(at～)
104,penetrate,～を貫通する, ～に浸透する； 貫通する（through～）
105,thrust,～を(ぐいっと)押し付ける, 突っ込む, 突き刺す
106,insert,～を挿入する
107,grasp,～を掴む, 握る； 理解する
108,grab,～を掴む
109,seize,～を掴む, (感情などが)を襲う； 押収する
110,drag,～を引きずる
111,cling,（～に)しがみつく, 固執する(to～)
112,stick,棒； (～に)くっつく, 固執する(to～)
113,attach,～をくっつける； 愛着を持たせる
114,imitate,～を真似る
115,fold,～を折り畳む
116,tear,～を引き裂く
117,mold,～をかたどる, 形成する
118,distort,～を歪める
119,expand,～を拡大する； 拡大する； 膨張する
120,shrink,縮む
121,swell,膨らむ
122,assemble,～を集める, 組み立てる
123,collect,～を集める； 徴収する
124,cram,～を詰め込む
125,rotate,～を回転する； 回転する
126,twist,～をひねる
127,upset,～をひっくり返す, 動揺させる, 怒らせる； 動揺した, 怒った
128,stir,～をかき回す； 騒乱
129,explode,爆発する
130,burst,爆発する
131,melt,溶ける； ～を溶かす
132,leak,漏れる； ～を漏らす
133,string,ひも, 糸
134,restrict,～を(…に)制限する(to…)
135,strict,厳しい； 厳密な
136,distress,苦悩, 貧困
137,strain,緊張, 重圧, 品種, 血統
138,restrain,～を抑制する
139,tense,緊張した, ぴんと張った
140,extend,～を伸ばす, 延長する
141,intense,激しい
142,force,力, 勢力； 軍事力； ～に(…することを)強制する(to do)
143,compel,～に(…することを)強いる(to do)
144,oblige,～に(…することを)義務づける, 余儀なくさせる(to do)
145,voluntary,自発的な
146,spontaneous,自発的な, 自然発生的な
147,free,自由な； 無料の； 暇な
148,liberty,自由
149,release,～を解放する
150,capture,～を捕らえる
151,prohibit,～を禁じる； ～に(…するのを)禁じる(from doing)
152,forbid,～を禁じる
153,ban,～を(公的に)禁止する
154,permit,～を許す, ～に(…するのを)許可する(to do)
155,allow,～が(…するのを)許す(to do)
156,forgive,～(過ちを犯した人)を許す
157,overlook,～を大目に見る, 許す, ～を見落とす
158,generous,寛容な, 気前のよい
159,tolerate,～を許容する, 容認する
160,prevent,～を防ぐ； ～が(…するのを)妨げる(from doing)
161,avoid,～(望ましくないもの)を避ける, (するの)を回避する(doing)
162,hinder,～を妨げる； ～が(…するのを)妨げる(from doing)
163,refrain,(～するのを)差し控える, 遠慮する(from doing)
164,interrupt,～を中断する, 邪魔する
165,disrupt,～を乱す, 混乱する
166,disturb,～を妨げる, 悩ませる
167,interfere,(～を)邪魔する, (に)干渉する(with～)
168,cease,～をやめる, しなくなる(to do, doing)
169,halt,～を停止する； 停止
170,deprive,～から(…を)奪う(of…)
171,rob,～から(…を)奪う, 強奪する(of…)
172,strip,から(…を)はぎ取る, 除去する(of…)
173,remove,を(…から)除去する, 取り除く(from…)
174,eliminate,～を取り除く, 削除する
175,get rid of,～を取り除く, 処分する
176,dispose of,～を処理する, 取り除く
177,do away with,～を捨てる, 廃止する
178,discard,～を捨てる
179,abandon,～を捨てる
180,desert,～を捨てる, 見捨てる； 砂漠
181,provide,～を(あらかじめ)供給する, 与える
182,supply,～(足りない物)を供給する； 供給
183,offer,～を(…に)提供する, 申し出る(to…)； 提供, 申し出
184,furnish,～に(…[家具など]を)備え付ける(with…)
185,equip,～に(…を)装備する(with…)
186,promote,～を促進する； 昇進させる
187,enhance,～を高める, 強化する
188,accelerate,～を加速する, 促進する
189,boost,～を促進する, 高める
190,urge,～に(…するよう)せき立てる(to do)； 衝動, 欲望
191,encourage,～を(…するよう)励ます, 促進する(to do)
192,project,企画, 事業； ～を見積もる； 投影する
193,enterprise,企て, 事業, 企業
194,scheme,計画, 枠組み, 制度
195,attempt,試み, 企画； ～を(しようと)試みる(to do)
196,purpose,目的
197,intention,意図
198,destination,目的地, 行き先
199,ideal,理想； 形理想的な
200,practical,実用的な, 現実的な
201,real,本当の, 本物の, 現実の
202,fantasy,空想
203,fancy,空想； ～を想像する； 高級な, 手の込んだ
204,illusion,幻想、錯覚
205,imagine,～を想像する
206,task,仕事, 任務
207,undertake,～を引き受ける
208,cage,檻, かご
209,embark,(～に)船出する, 着手する(on～)
210,hesitate,(～するのを)ためらう, 躊躇する(to do)
211,pursue,～を追い求める
212,seek,～を探し求める
213,strive,(～を得ようと)努力する, 奮闘する(for～)
214,assign,～を(…に)割り当てる, 課す(to…)
215,in charge of,～を担当して, の責任者で
216,responsible,(～に対して)責任のある(for～)
217,execute,～を実行する, 果たす～を処刑する
218,perform,～を実行する, 果たす, ～を演じる, 上演する
219,performance,実行, 業績, 演技, 演奏
220,obstacle,障害, 障害物
221,adverse,逆境の, 不利な
222,hardship,苦難, 苦労
223,burden,重荷, 負担
224,overcome,～を乗り越える, 克服する
225,cope with,～に取り組む, 対処する
226,tackle,～に取り組む, 立ち向かう
227,talent,才能
228,gift,贈り物, (生まれつきの)才能
229,ability,能力
230,skill,技術, 能力
231,capable,(～の, する)能力がある(of～, of doing)
232,capacity,(潜在的な)能力, 受け入れる能力
233,potential,潜在能力, 可能性； 形潜在的に可能な
234,effort,努力
235,struggle,奮闘, 努力； 奮闘する, 努力する
236,endeavor,努力, 試み； 努力する, 試みる
237,persist,ねばる, しつこく主張する(in～)
238,persevere,ねばる
239,efficient,効率的な
240,fulfill,～(義務・約束)を果たす, 実行する
241,attain,～を達成する, 到達する
242,achieve,～を達成する
243,accomplish,～を成し遂げる, 完成する
244,obtain,～を手に入れる
245,gain,～を得る, ～を増す； 利益, 増加
246,acquire,～を獲得する, 身につける, 習得する
247,complete,～を完了する, 完全にする； 完全な, 完成した
248,temporary,一時的な, 仮の
249,contemporary,同時代の, 現代の
250,permanent,不変の, 永続する
251,eternal,永久の, 永遠の
252,rare,稀な, めったにない
253,once in a while,たまに
254,occasion,(on)機会, 場合, 出来事
255,now and then,時々
256,frequency,頻度, 頻繁； 周波数
257,constant,絶え間ない, 一定の
258,perpetual,絶え間ない, 永久の
259,at the moment,今のところは
260,at present,今のところは
261,for the time being,ここしばらくは
262,rapid,急速な
263,immediate,即座の； 直接の
264,prompt,即座の, 素早い； ～を(…するよう)促す, 刺激する(to do)
265,abruptly,不意に, 突然
266,period,期間； 時代； 時限
267,age,年齢, 時代
268,era,時代
269,epoch,新時代, 時代の幕開け
270,phase,局面, 面, 段階
271,decade,10年間
272,annual,毎年の, 年に1回の
273,anniversary,記念日
274,interval,(時間・空間の)間隔
275,origin,起源, 出生
276,initial,最初の
277,former,以前の, 前者の
278,previous,前の
279,precede,～より先行する
280,posterior,(～より)後の(to～)
281,prior,（～より）前の（to～）
282,advance,前進する, 進歩する； 進歩
283,simultaneous,同時の, 同時に起こる
284,coincide,(～と)同時に起こる, 一致する(with～)
285,prolong,～(時間)を延長する
286,postpone,～(予定)を(…まで)延期する(till[until]…)
287,delay,～を遅らせる； 遅延
288,punctual,時間に正確な
289,current,今の； 流通している； 流れ
290,out of date,時代遅れの
291,up to date,最新の
292,ancient,古代の, 大昔の
293,ancestor,先祖
294,primitive,原始的な, 未開の, 野蛮な
295,economy,経済
296,finance,財政, 資金, 融資
297,recede,後退する
298,recession,不景気, 不況
299,currency,通貨, 普及
300,stock,在庫, 株, 株式
301,fortune,富, 財産, 運
302,wealth,富
303,well off,裕福な, 暮らし向きがいい
304,poverty,貧困
305,property,財産, 所有物, 特性
306,asset,財産
307,estate,(主に土地の)財産
308,invest,～を投資する
309,entrepreneur,起業家
310,capital,資本, 首都, 大文字
311,interest,興味, 利子, 利益
312,profit,利益
313,benefit,恩恵, 利益； ～の利益となる； 利益を得る
314,budget,予算, 家計
315,purchase,～を購入する
316,afford,(〈経済的・時間的に〉～する)余裕がある(to do)
317,available,入手できる, 利用できる, 手があいている
318,debt,借金
319,owe,～を(…に)借りている, 恩恵がある(to…)
320,bankrupt,破産した
321,save,～を貯める, 節約する； 省く, ～を救う
322,spare,～をとっておく； なしですます； 節約する； 予備の
323,deposit,貯金； 埋蔵金； ～を貯める
324,withdraw,～を引き出す, 引っ込める； 引き下がる, 退く
325,extravagant,金遣いの荒い, 過度の, 法外な
326,income,収入
327,outcome,結果
328,revenue,歳入, 収入
329,cost,費用
330,expense,出費
331,fee,(専門家への)謝礼； 料金
332,fare,(乗り物の)運賃
333,area,地域, 領域
334,region,地域, 地方
335,district,地区, 区域
336,quarter,4ぶんの1, 地域, 界隈
337,local,地域の, 地元の； 地元の人
338,globe,地球, 地球儀
339,urban,都市の、都会の
340,rural,田舎の
341,suburb,郊外
342,border,境界, 国境
343,boundary,境界(線)、限界
344,territory,領土, なわばり
345,invade,～に侵入する, 侵略する
346,intrude,(～に)侵入する(into, on～)
347,occupy,～を占領する, 占める
348,migrate,移動する、移住する
349,immigrate,移住する
350,emigrate,(国外へ)移住する
351,settle,定住する； ～を落ち着かせる, 解決する
352,frontier,辺境, 最先端
353,pioneer,開拓者, 先駆者； ～を開拓する
354,explore,～を探索する
355,include,～を含む
356,contain,～を含む
357,exclude,～を(…から)除外する(from…)
358,isolate,～を隔離する
359,enclose,～を囲む, 同封する
360,disclose,～を開示する, 暴く
361,surround,～を取り囲む
362,install,～を設置する
363,introduce,～を紹介する, ～を(初めて)導入する
364,locate,～(の位置)を突き止める, 見つける, ～を(ある場所に)置く
365,spot,場所； ～(の位置)を突き止める, 見つける
366,search,(…を求めて)～の中を探す(for…)； 探求, 探索
367,approach,～に接近する, 話しかける
368,remote,遠方の； へんぴな, 人里離れた
369,apart,(～から)離れて(from～)
370,aside,脇に
371,replace,～にとって代わる； ～を(…と)置き換える(with…)
372,site,用地､現場、サイト
373,realm,領域, 領土, 王国
374,domain,領域, 領地
375,range,範囲
376,scope,(活動などの)範囲, 領域； 機会
377,category,範疇, 種類
378,genre,（芸術・文学の）ジャンル、酒類
379,margin,余白、余裕、利ざや
380,emerge,現れる, 出現する
381,arise,(～から)生じる(from～)
382,stem,(～から)生じる(from～)； 茎
383,branch,枝； 支店, 支社, 部門
384,derive,(～に)由来する(from～)； (…から)～を引き出す(from…)
385,generate,～を発生させる, 生み出す
386,flourish,繁栄する
387,bloom,(花が)咲く； 栄える； 開花
388,prosper,繁栄する
389,thrive,繁栄する
390,prevail,普及する, 主流となる
391,glory,栄光
392,victory,勝利
393,triumph,勝利, 大成功； 勝利する
394,fame,名声
395,prestige,声, 威信
396,fade,衰退する, 次第に消える
397,decline,衰退する； ～(招待・申し出)を断る
398,corrupt,頽廃した, 腐敗した； ～を堕落させる
399,decay,腐る, 腐敗する； 腐敗, 衰退
400,rot,腐る, 腐敗する
401,bribe,賄賂
402,fraud,詐欺、不正行為
403,perish,消滅する, 死ぬ
404,vanish,消滅する, 消える
405,ruin,破壊, 廃墟； ～を破壊させる, 台無しにする
406,collapse,崩壊する, 崩れる
407,extinguish,～(火)を消す； を絶滅させる
408,catastrophe,破滅, 大惨事
409,survive,～を生き残る
410,regard,～を(…と)みなす(as…), ～を尊重する, に敬意を払う； 尊敬, 敬意, 点
411,account,説明, 報告, 口座, 勘定, 重要性； (～[理由]を)説明する(for～)； (～[割合]を)占める(for～)
412,concern,～に関係する, ～を心配させる； 関係, 心配, 懸念, 関心
413,anxious,(～を)心配している(about～), (～を)切望している(for～, to do)
414,attend,～に出席する； (～を)注意して聞く(to～), (～に)付き添う, 看護する(on～)
415,apply,～を(…に)適用する, 応用する(to…)； (～に)応募する, 志願する(for～)
416,reflect,～を反射する, 反映する； (～を)熟考する(on～)
417,wait,(～を)待つ(for～), (～に)仕える, 給仕する(on[upon]～)
418,due,しかるべき, 正当な, (提出・支払い)期限の, 到着予定の
419,odd,奇妙な, 半端な, 奇数の
420,odds,見込み, 勝算
421,issue,(争点となる)問題, (雑誌などの)号； ～を発行する, 発布する
422,term,用語, 期間, 関係, 折り合い
423,figure,姿, 形, 図, 人物, 数字； 考える
424,state,州, 国家, (一時的な)状態； ～を述べる
425,bear,～を住む, ～に耐える
426,case,場合, 事件, 訴訟(the), 実情, 事実, 本当, (病気の)症例
427,mean,～を意味する, ～しようと(意図)する； 形卑劣な, 意地悪な
428,means,手段, 方法, 財産
429,represent,～を代表する, ～を象徴する, ～を表す
430,assume,～を想定する, 思いこむ, ～(責任, 任務)を引き受ける
431,possess,～を所有する, ～に取り憑く
432,observe,～を観察する, ～(法・規則)を守る
433,swallow,飲み込む、鵜呑みにする、信じる； ツバメ
434,company,会社, 一緒にいること, 仲間
435,firm,固い, 確固たる； 会社, 企業
436,enter,～に入る
437,receive,～を受け取る
438,accept,～を受け入れる
439,refuse,～を拒否する； ～しようとしない(to do)
440,reject,～を拒絶する, はねつける
441,deny,～を否定する
442,appear,現れる, のように見える
443,exist,存在する, 生存する
444,expect,～を予想する； 期待する
445,except,～を除いて, 以外は
446,improve,～を改良する, 改善する； 改善する, 良くなる
447,solve,～を解く, 解決する
448,suppose,(…だと)思う(that…)； ～を想定する
449,suggest,～を提案する； (…ということを)暗に示す(that…)
450,propose,～を提案する
451,pretend,(～する)ふりをする(to do)
452,doubt,疑い、～を疑う
453,belong,(～に)属する, (～の)所有である(to～)
454,fail,(～に)失敗する(in～)； (～)しない, できない(to do)
455,enable,～に(…するのを)可能にさせる(to do)
456,prefer,～をより好む
457,marry,～と結婚する
458,regret,～を後悔する
459,satisfy,～を満足させる
460,disappoint,～をがっかりさせる
461,bore,～を退屈させる
462,amaze,～をびっくりさせる
463,astonish,～をびっくりさせる
464,frighten,～を怖がらせる, おびえさせる
465,scare,～を怖がらせる
466,cause,原因； ～を引き起こす
467,factor,要因, 要素
468,result,結果； 結果として生ずる
469,lead,～を(…へ)導く(to…)； (～を)引き起こす(to～)
470,favor,好意, 親切な行為； ～を好む
471,harm,害, 損害； ～を害する
472,risk,危険, リスク； ～を危険にさらす
473,board,板, 委員会； ～(乗り物)に搭乗する
474,rise,上がる, 増える； 上昇
475,raise,～を上げる； 増やす, ～(子供・家畜)を育てる
476,lie,横たわる； 存在する
477,lay,～を横たえる； 置く
478,exhibit,～を展示する, 示す； 展示品
479,convenient,便利な； 都合のよい
480,comfort,快適さ； ～を慰める, 元気づける
481,correct,正しい； ～(謝り・欠点)を訂正する, 正す
482,salary,給料
483,reputation,評判, うわさ
484,rumor,うわさ, 風説
485,duty,義務
486,opportunity,機会
487,idle,何もしていない； 無用の； 何もしないでいる
488,calm,冷静な, 落ち着いた； ～を落ち着かせる
489,curious,好奇心のある； 好奇心をそそる, 奇妙な
490,cruel,残酷な
491,official,公式の； 公務員, 役人
492,relate,～を(…に)関連づける(to…)～を話す
493,absolute,絶対的な, 完全な
494,relevant,(～と)関連がある(to～), 適切な
495,mutual,相互の
496,associate,～を(…と)関連づける(with…)； 連想する
497,conflict,争い, 衝突； 対立する, 衝突する
498,collision,衝突
499,friction,摩擦, 不和
500,confront,～に直面する
501,oppose,～に反対する
502,object,物体, 対象, 目的； (～に)反対する(to～)
503,contrary,(～と)反対の(to～)
504,contrast,対照
505,contradict,～を否定する, に反論する, と矛盾する
506,approve,～に賛成する, を認める； (～に)賛成する, 認める(of～)
507,consent,(～に)同意する(to～)； 同意
508,correspond,(～と)一致する, 合致する(with～)； (～に)対応する(to～)
509,accord,(～と)一致する, 調和する(with～)
510,conform,(～に)従う, 順応する, 一致する(to～)
511,compatible,(～と)両立可能な, 矛盾しない(with～)
512,compare,～を(…と)比較する(with, to…)
513,confuse,～を(…と)混同する(with…)； を混乱させる
514,equal,(～と)等しい, 匹敵する, するだけの能力がある(to～)； ～に等しい
515,equivalent,(～と)同等の(to～)； 同等のもの
516,counterpart,相当するもの・人
517,resemble,～に似ている
518,diverse,多様な
519,differ,(～と)(…の点で)異なる(from～)(in…)
520,vary,異なる, 変わる
521,linguistic,言語の
522,literary,文学の
523,literal,文字通りの, 字義通りの
524,literate,読み書きができる, 教養のある
525,letter,手紙, 文字
526,dialogue,対話
527,monologue,独白
528,logic,論理, 論理学
529,apology,謝罪
530,eloquent,雄弁な
531,biology,生物学
532,psychology,心理学
533,analogy,類推
534,verb,動詞
535,adjective,形容詞
536,proverb,ことわざ
537,oral,口頭の, 口の
538,utter,～(言葉)を発する； 形完全な, 全くの
539,refer,(～に)言及する； (を)参照する； (を)指す(to～)
540,consult,～に相談する； (辞書など)を参照する
541,look up,～(単語など)を調べる
542,mention,～に言及する, を口にする； 言及
543,imply,～を暗に意味する, 含意する
544,infer,～を推察する
545,interpret,～を解釈する； 通訳する
546,describe,～を描写する, 説明する
547,subscribe,(～を)定期購読する(to～)
548,prescribe,～(薬)を処方する； 指示する
549,manuscript,原稿
550,criticize,～を批判する
551,critical,決定的な, 批評の
552,crisis,危機
553,opinion,意見
554,remark,意見, 論評； (意見を)述べる
555,comment,意見, 論評； (意見を)述べる
556,prose,散文
557,verse,韻文, 詩
558,poetry,詩
559,document,文書, 書類
560,narrative,語り, 物語； 物語の
561,plot,筋書き； 策略、陰謀
562,quote,～を引用する
563,rhetoric,修辞学, 美辞麗句
564,metaphor,比喩, 隠喩
565,irony,皮肉
566,paradox,逆説, 矛盾
567,dialect,方言
568,accent,訛り, 方言
569,pronounce,～を発音する
570,tongue,舌, 言語, 言葉
571,text,文章； メール； メールを送る； ～にメールを送る
572,context,文脈, 前後関係, 状況
573,grammar,文法
574,vocabulary,語彙, ボキャブラリー
575,research,研究, 調査
576,investigate,～を調査する, 研究する
577,survey,～を見渡す； 調査する； 調査, 概観, 測量
578,inquire,(～について)尋ねる(about～)； (～を)調査する(into～)
579,theory,理論, 学説
580,method,(体系的な)方法
581,hypothesis,仮説、前提
582,experiment,実験
583,detect,～を検出する, 見つける
584,thesis,学位論文
585,statistics,統計
586,analyze,～を分析する
587,laboratory,研究室
588,conclude,(…と)結論を下す(that…)
589,prove,～を証明する； (～であると)分かる, 判明する(to be～)
590,demonstrate,～を実証する, 実演する
591,illustrate,～を例証する, 図で説明する
592,estimate,～を見積もる； 見積もり
593,expert,専門家； (～に)熟達した(at, in～)
594,scholar,学者, 奨学生
595,academic,学問の, 大学の
596,specialize,(～を)専攻する, 専門にする(in～)
597,geography,地理学
598,geology,地質学
599,geometry,幾何学
600,arithmetic,算数
601,astronomy,天文学
602,astrology,占星術
603,botany,植物学
604,anthropology,人類学
605,discuss,～を話し合う, 議論する
606,agree,(～に)(with)賛成する, (to)同意する, 一致する
607,argue,～を主張する, 論じる； 言い争う
608,maintain,～を維持する, 主張する
609,assert,～を主張する, 言い張る
610,claim,要求する、主張する； 要求、主張
611,insist,要求する、主張する
612,exclaim,～と叫ぶ
613,proclaim,～を宣言する
614,declare,宣言する
615,announce,～を告知する
616,exaggerate,～を誇張する, 大げさに言う
617,boast,(of)自慢する, 鼻にかける
618,controversy,論争, 議論
619,dispute,議論、議論する； ～を議論する, 討論する
620,debate,討論
621,conference,会議
622,negotiate,交渉する
623,complain,(～について)不満を述べる
624,grumble,不満を言う
625,quarrel,口論, 口喧嘩； 口論する
626,reconcile,～を和解させる, 仲直りさせる； 和解する
627,convince,～に確信させる、納得させる
628,persuade,～に説得する
629,talk～into doing,～に説得する
630,advantage,有利な点, 好都合
631,right,権利
632,privilege,特権
633,entitle,～に資格/権利を与える
634,qualify,～に資格を与える
635,require,～を要求する, 必要とする
636,call for,～を要求する, 必要とする
637,desire,欲望, 願望
638,demand,要求； ～を要求する
639,perspective,展望, ものの見方
640,inspect,～を詳しく調べる, 検査する
641,prospect,見通し、展望
642,retrospect,追想、回想
643,suspect,～を疑う, に気付く, 容疑者
644,speculate,～を推測する、熟考する
645,spectacle,見世物, 光景, 眼鏡
646,conspicuous,目立つ
647,proceed,進む、さらに続けて～する
648,exceed,～を越える、優る
649,concede,～を認める、譲歩する
650,succeed,成功する、～の後を継ぐ、～に次いで起こる
651,predict,～を予言する、予測する
652,indicate,示す、指示する
653,dictate,書き取らせる、命令する
654,dedicate,捧げる
655,admit,～を（しぶしぶ）認める（that…）； （人[の入場・入学]）を受け入れる
656,commit,～（罪）を犯す、～に取り組む、～を約束する、～を明言する
657,omit,省く
658,dismiss,～を解散する、解雇する； ～を退ける、却下する
659,transmit,送る、伝える
660,mission,使命、任務
661,transfer,～を移動する； 乗り換える、転勤（校）する； 移動、乗り換え、転勤（校）
662,transport,～を輸送する； 輸送、交通手段
663,transform,～を変形する、変化させる
664,translate,～を（…に）翻訳する（into）
665,transplant,～を移植する； 移植
666,transparent,透明な
667,transition,移り変わり、過渡期
668,distribute,分配する
669,contribute,貢献する
670,attribute,原因を帰す、属性、性質
671,assure,保証する、確信させる
672,reassure,安心させる
673,ensure,保証する、確保する
674,insurance,保険
675,influence,（～に対する）影響（on～）； ～に影響を及ぼす
676,impact,（～に対する）影響、衝撃（on～）
677,affect,～に（直接）影響・効果を及ぼす
678,effect,効果、影響
679,affection,愛情
680,dominant,支配的な、より優位にたつ
681,rule,～を支配する； 規則
682,regulate,規制する
683,control,～を抑制する、支配する、制御する； 抑制、支配、制御
684,bind,拘束する
685,authority,権威、権力、権限； 当局
686,author,著者
687,exert,～（力など）を行使する、働かせる
688,exercise,練習； 運動； ～（力など）を行使する
689,obey,従う
690,resist,～に抵抗する
691,protest,抗議（する）
692,rebel,反逆者、反逆する
693,conquer,征服する
694,win,勝つ； ～（試合など）に勝つ； を獲得する
695,defeat,～をうち巻かす； 敗北
696,beat,～を（繰り返し）叩く、うち負かす
697,lose,負ける； ～を失う； （試合など）に負ける
698,surrender,降伏する
699,yield,屈する、産出する
700,depend,（～に）依存する； よる、左右される（on～）
701,independent,（～から）独立している（of～）
702,rely,（～に）頼る、（を）あてにする（on[upon]～）
703,count on,～をあてにする、頼りにする
704,trust,～を信用する； 信用
705,compete,競争する
706,press,押す； 強く求める； 新聞・雑誌、報道
707,impress,印象づける、感動させる
708,express,表に出す、表現する
709,oppress,圧迫する、虐げる
710,suppress,抑える、抑圧する
711,threat,脅し、脅威
712,menace,脅威
713,tame,飼いならす； 飼いならされた
714,superior,～より優れている(to)
715,inferior,～より劣っている(to)
716,surpass,～より優れる、～を越える
717,excel,優れる
718,perceive,知覚する、感じ取る； 認識する
719,conceive,考えだす、考案する； 心に抱く
720,deceive,だます
721,sense,感覚； 判断力、思慮； 意味； ～に感づく
722,sensitive,敏感な(to～)
723,sensible,分別のある、賢明な
724,sensation,感覚； 物議、騒動
725,visual,視覚の
726,visible,目に見える
727,revise,改訂する、修正する
728,devise,考案する
729,sight,視覚：視力； 光景； 名所
730,stare,（じろじろ）見つめる(at～）
731,gaze,（うっとりして・ぼーっと）見つめる(at～)
732,glance,（意識的に）ちらりと見る(at～)
733,glimpse,（偶然）ちらりと見る、垣間見る
734,audible,聞こえる
735,audience,聴衆、観客
736,scent,香り
737,odor,におい
738,flavor,味
739,arouse,～（感情など）を呼び起こす、刺激する
740,evoke,～（感情など）を呼び起こす、呼び覚ます
741,provoke,～（反応など）を引き起こす
742,stimulate,～を刺激する； 促進する
743,instinct,本能
744,impulse,衝動(to do)
745,embarrass,恥ずかしい思いをさせる、当惑させる
746,shame,恥； 残念なこと
747,nerve,神経
748,emotion,感情
749,passion,情熱
750,compassion,同情、あわれみ
751,passive,受け身の、受動的な
752,temper,機嫌； 平常心
753,delight,喜び、楽しみ
754,rejoice,喜ぶ
755,gratify,喜ばせる
756,anger,怒り
757,rage,怒り、熱狂
758,fury,怒り
759,resent,憤慨する、腹を立てる
760,annoy,怒らせる、むっとさせる
761,irritate,苛立たせる
762,frustrate,イライラさせる、失望させる
763,sorrow,悲しみ
764,grief,悲しみ
765,lament,悲しみ嘆く
766,mourn,悲しみ嘆く
767,despair,絶望
768,devastate,打ちのめす
769,entertain,楽しませる； 心に抱く、考慮する
770,amuse,面白がらせる
771,virtue,美徳、長所
772,virtual,仮想の； 事実上の
773,vice,悪、悪徳； 副～、代理の
774,evil,邪悪な
775,sin,罪
776,crime,犯罪
777,ethics,倫理
778,moral,道徳上の、精神的な
779,confess,告白する、認める
780,punish,罰する(for…)
781,penalty,刑罰
782,murder,殺人（する）
783,victim,犠牲者、被害者
784,offend,怒らせる
785,defend,防御する、弁護する
786,motive,動機
787,witness,証人、目撃者； 目撃する
788,arrest,逮捕する：逮捕
789,detain,拘留する
790,accuse,非難する、告訴する
791,blame,責任があるとする； せいにする
792,fault,過失、責任； 欠陥
793,condemn,責める、刑を宣告する
794,court,法廷、裁判所； 宮廷
795,courtesy,礼儀、作法
796,trial,裁判、公判
797,justice,構成、正義； 裁判
798,judge,判断する； 裁判官
799,jury,陪審員団
800,testify,証言する
801,guilty,有罪の
802,innocent,無罪の、無邪気な
803,sentence,判決（を下す）
804,prison,刑務所
805,deter,抑止する
806,violence,暴力
807,aggressive,攻撃的な
808,legal,合法の、法律の
809,violate,違反する、犯す、侵害する
810,unite,結びつける
811,unity,結束、統一
812,uniform,一様な、均一の
813,universal,普遍的な
814,union,組合
815,reunion,再開、同窓会
816,sole,唯一の
817,solitude,孤独
818,console,慰める
819,monotonous,単調な
820,monopoly,独占、専売
821,combine,結合させる
822,dual,２つの、二重の
823,duplicate,複製する
824,numerous,無数の
825,innumerable,無数の
826,infinite,無限の
827,quantity,量
828,quality,質、品質、性質
829,volume,容積、量、かさ； (大型の)本、(本の)１巻； 多量の、かさばった
830,amount,量、総計、総額； ～に達する、結局～になる(to)
831,sum,合計、要約する
832,total,完全な； 合計の：合計
833,vast,莫大な、広大な
834,huge,巨大な、でっかい
835,enormous,非常に大きい、莫大な
836,immense,巨大な、膨大な
837,abundant,豊富な
838,ample,十分な、たっぷりの
839,affluent,富裕な
840,sufficient,十分な
841,adequate,十分な
842,major,主要な、専攻する
843,minor,重要でない、小さい； 年少の
844,maximum,最大
845,minimum,最小
846,magnificent,壮大な
847,diminish,減らす、小さくする
848,utmost,最大の
849,increase,増える； ～を増やす； 増加
850,decrease,減る； 減らす； 減少
851,reduce,～を減らす、削減する
852,accumulate,蓄積する
853,add,加える
854,subtract,引く
855,multiply,掛ける
856,multitude,多数
857,calculate,計算する
858,average,平均の、普通の； 平均
859,altogether,全部で； 全く、完全に
860,overall,全体の、全般の； 概して
861,approximately,おおよそ
862,rational,合理的な
863,reason,理由、根拠； 理性； 論理的に考える
864,beast,獣、動物
865,brute,獣、動物
866,notion,概念、観念
867,abstract,抽象的な
868,concrete,具体的な
869,stereotype,固定観念、ステレオタイプ
870,prejudice,先入観、偏見
871,bias,偏見
872,view,眺め、景色； 意見； みなす、考える
873,review,見直す、批評
874,viewpoint,観点、見地
875,standpoint,立場、観点
876,outlook,見解、見方、見通し
877,optimistic,楽観的な
878,pessimistic,悲観的な
879,aware,意識している
880,alert,警戒している； 警報
881,conscious,意識している
882,conscience,良心、善悪の判断力
883,recognize,識別する、それと分かる； 認める
884,cognition,認識
885,knowledge,知識
886,acknowledge,認める
887,identify,身元を特定する、同一視する
888,intellect,知性
889,intelligence,知性； 諜報
890,intelligible,理解可能な、判読可能な
891,wisdom,賢明さ、知恵
892,bright,明るい、頭のいい
893,brilliant,頭のいい、輝かしい
894,smart,利口な
895,wit,機転、知力
896,insight,洞察力
897,philosophy,哲学、考え方
898,comprehend,理解する、含む
899,consider,考慮する； みなす
900,contemplation,熟考、沈思
901,meditate,瞑想する、深く考える
902,recollect,思い出す
903,recall,思い出す
904,inform,知らせる
905,remind,思い出させる(of, that)
906,infant,幼児
907,toddler,幼児
908,adolescent,思春期の、十代の； 十代の若者
909,juvenile,少年少女の
910,adult,大人； 大人の
911,elderly,年配の、お年寄りの
912,mature,成熟した； 成熟する
913,pregnant,妊娠している
914,maternity,母性
915,birthrate,出生率
916,abortion,妊娠中絶
917,divorce,離婚
918,celebrate,祝う
919,career,職歴、キャリア
920,background,背景； 経歴、生い立ち
921,status,社会的地位
922,resign,(途中で)辞職する； 断念する
923,retire,定年で退職する
924,quit,やめる、中止する
925,farewell,お別れ
926,pension,年金
927,funeral,葬式
928,tomb,墓石、墓
929,bury,埋める、埋葬する
930,coffin,棺桶
931,corpse,死体
932,mortal,死ぬ運命にある
933,inherit,相続する
934,heir,相続人、跡取り
935,heritage,遺産
936,legacy,遺産、遺物
937,offspring,子、子孫
938,inevitable,避けられない、必然的な
939,fate,運命、宿命
940,individual,個人； 個人の、個々の
941,personal,個人的な
942,private,個人的な
943,self,自己
944,fellow,人、奴； 仲間、自分と同じ場にいる
945,male,男性の； 男性
946,female,女性の； 女性
947,masculine,男の、男らしい
948,feminine,女の、女らしい
949,gender,ジェンダー
950,sibling,兄弟
951,spouse,配偶者
952,society,社会； 社交
953,community,地域社会、共同体
954,communicate,(～と)意志の疎通をする(with)
955,acquainted,知り合いである
956,intimate,親しい、親密な
957,hostile,敵意のある
958,hospitality,歓待、もてなし
959,sympathy,同情
960,empathy,共感、感情移入
961,pity,あわれむ、残念なこと
962,mercy,慈悲、あわれみ
963,envy,うらやむ、ねたみ； うらやむ
964,jealous,嫉妬した
965,contempt,軽蔑
966,scorn,軽蔑
967,despise,軽蔑する
968,look down on,軽蔑する
969,disgust,嫌悪、むかつせる
970,hatred,憎悪
971,insult,侮辱（する）
972,humiliate,屈辱を与える
973,curse,呪う、ののしる
974,endure,耐える、我慢する
975,durable,耐久性のある
976,put up with,耐える、我慢する
977,compromise,妥協（する）
978,praise,賞賛； ほめる
979,award,賞； 賞を与える
980,reward,報酬
981,compliment,お世辞（を言う）
982,flatter,おだてる
983,spoil,甘やかす、台無しにする
984,congratulate,祝う、お祝いを述べる
985,grateful,感謝している、ありがたく思う
986,appreciate,正しく評価する； 感謝する； 鑑賞する
987,gratitude,感謝
988,admire,感心する、賞賛する
989,esteem,尊敬する、尊重する
990,adore,崇拝する、敬愛する
991,dignity,威厳
992,cooperate,協力する
993,loyal,忠実な
994,betray,裏切る； 暴露する
995,make fun of,からかう
996,tease,いじめる、からかう
997,bully,いじめる
998,bother,悩ます、迷惑をかける
999,nuisance,迷惑行為、迷惑な人
1000,value,価値； 価値観； ～を重んじる
1001,worth,～の価値のある； 価値
1002,deserve,～に値する
1003,cherish,～を大事にする
1004,treasure,～を大事にする、宝
1005,evaluate,～を評価する
1006,measure,～を測定する； (測定の)基準、手段、程度
1007,assess,～を査定する
1008,standard,基準、標準、水準
1009,norm,基準、規範
1010,criterion,基準、指標
1011,test,テスト、判断基準
1012,class,クラス、授業； 階級； 分類
1013,sort,種類； ～を分類する
1014,alter,～を変える
1015,alternative,(取りうる)選択肢、(～の)代案(to～)； 代わりの
1016,option,選択肢
1017,adopt,～(政策など)を採用する、～を養子にする
1018,decide,～を決定する
1019,determine,～を決定する
1020,resolve,～を決意する、～を解決する
1021,event,(重要な)出来事、事件
1022,incident,(付随する)出来事、事件
1023,accident,(偶然の)事故、事件； 偶然
1024,affair,出来事、事件； 関心事； 情事
1025,occur,起こる； (～に)思い浮かぶ(to～)
1026,take place,(予定されていたことが)起こる、行われる
1027,situation,(物・人が置かれている)状況
1028,condition,状況、体調 ； 条件； ～を条件づける、制約する
1029,circumstance,状況、環境
1030,participate,参加する(in～)
1031,take part,参加する(in～)
1032,involve,～を(必然的に)含む、関与させる、巻き込む、伴う、必要とする、もたらす
1033,entail,～を伴う、必要とする； を含意する
1034,engage,～を従事させる； (～に)従事する(in～)
1035,indulge,～を没頭させる、甘やかす (～に)没頭する、耽る(in～)
1036,devote,～(金・時間・労力)を(…に)捧げる、割く
1037,act,行動する； 行動； 法令
1038,enact,～(法律)を制定する
1039,behave,行動する、ふるまう
1040,conduct,～(研究・実験・業務など)を行う； 行為
1041,attitude,態度、考え方
1042,politics,政治、政治学
1043,principle,主義、原理、信条
1044,conserve,～を保存する、守る
1045,progress,進歩 進歩する
1046,radical,徹底的な、根本的な； 急進的な、過激な
1047,reform,改革
1048,regime,政治体制
1049,democracy,民主主義
1050,republic,共和国
1051,monarchy,君主政治
1052,aristocracy,貴族階級、貴族社会
1053,bureaucracy,官僚、官僚主義
1054,ideology,イデオロギー、思考傾向
1055,communism,共産主義
1056,socialism,社会主義
1057,nationalism,国家主義
1058,patriotism,愛国主義
1059,govern,統治する； 決定する、左右する
1060,reign,統治、治世； 君臨する
1061,tyranny,専制政治、暴政
1062,administer,～を管理する、運営する
1063,policy,政策、方針
1064,welfare,福祉； 幸福
1065,ministry,省庁
1066,minister,大臣； 牧師
1067,diplomat,外交官
1068,embassy,大使館
1069,ambassador,大使
1070,treaty,条約
1071,legislate,法律を制定する
1072,congress,国会、議会； 会議
1073,Senate,上院
1074,parliament,国会
1075,Diet,国会、議会
1076,council,議会； 評議会、審議会
1077,federal,(米国)連邦の
1078,bill,請求書； 紙幣； 法案
1079,abolish,～を廃止する
1080,elect,～を選出する
1081,vote,(～に)投票する(for～)； 投票
1082,poll,投票； 世論調査
1083,run for,～に出馬する
1084,mayor,市長
1085,governor,知事
1086,industry,産業、工業； 勤勉
1087,sector,部門
1088,agriculture,農業
1089,cultivate,～を耕す； ～(才能など)を磨く・養う
1090,culture,文化； 教養； 栽培
1091,crop,作物、収穫
1092,harvest,収穫、収穫高； ～を収穫する
1093,soil,土、土壌
1094,fertile,肥沃な
1095,barren,不毛な
1096,irrigation,灌漑
1097,grain,穀物
1098,wheat,小麦
1099,weed,雑草
1100,seed,種
1101,sow,～(種)をまく
1102,plow,鍬； ～を耕す
1103,peasant,小作農、農夫
1104,feed,～に餌・食物を与える
1105,breed,～を繁殖させる；品種、血統
1106,cattle,(集合的に)牛
1107,herd,(牛などの)群れ
1108,flock,(動物の)群れ、群れる
1109,ranch,牧場
1110,media,メディア、媒体
1111,mass,集団、大衆、多数
1112,broadcast,～を放送する； 放送
1113,journalism,ジャーナリズム、報道
1114,article,記事、論文； (一つの)品物； 冠詞
1115,headline,見出し
1116,Internet,インターネット
1117,advertisement,広告
1118,publish,～を出版する、公表する
1119,edit,～を編集する
1120,compile,～を編集する、１つに集める
1121,cartoon,漫画、アニメ
1122,manufacture,製造、生産； ～を製造する
1123,produce,～を生産する、生み出す
1124,create,～を創造する、生み出す
1125,consume,～を消費する
1126,trade,貿易、取引； 商賣； 職業
1127,deal,取引； 量
1128,commerce,通商、貿易
1129,merchant,商人
1130,commodity,商品； 日用品
1131,retail,小売りの
1132,import,～を輸入する； 輸入(品)
1133,export,～を輸出する； 輸出(品)
1134,employ,～を雇う； ～を用いる
1135,labor,労働
1136,manage,～を経営する； なんとかしてやり遂げる
1137,contract,契約； ～を契約する； ～(病気)にかかる、収縮する
1138,agent,代理店、代理人、行為者
1139,medicine,薬； 医学
1140,pharmacy,薬局
1141,surgery,外科手術
1142,vein,血管、静脈
1143,artery,動脈
1144,physical,身体の； 物理的な
1145,disease,病気
1146,symptom,兆候、症状
1147,ache,(ずきずき)痛む
1148,acute,鋭い、激しい
1149,sore,(喉、筋肉などがヒリヒリ)痛い
1150,dizzy,めまいがする
1151,cough,咳をする； 咳
1152,fever,熱
1153,paralyze,～麻痺させる
1154,patient,患者； 我慢強い
1155,ambulance,救急車
1156,diagnose,～を診断する
1157,cure,～(病気)を直す、治療する； 治療法
1158,heal,～(けが)を治す； (傷が)治る
1159,treat,～を扱う、に接する； ～を治療する； ～に(…を)おごる(to …)
1160,recover,(～から)回復する(from～)； ～を取り戻す
1161,operate,作動・作用する； (～に)手術する(on～)； ～を操作する
1162,go through,～を経験する
1163,cancer,癌
1164,tumor,腫瘍
1165,diabetes,糖尿病
1166,stroke,脳卒中
1167,virus,ウイルス
1168,germ,ばい菌、細菌
1169,infect,～に感染させる
1170,epidemic,伝染病
1171,plague,疫病； 災難
1172,vaccine,ワクチン
1173,defect,欠陥、欠点、障害
1174,immune,(～に対して)免疫のある(to～)
1175,allergy,アレルギー
1176,gene,遺伝子
1177,cell,細胞
1178,organism,生物
1179,clone,クローン； ～のクローンを作る
1180,anatomy,解剖学
1181,chemistry,科学
1182,toxic,有毒な
1183,solid,固体の、固い、堅固な； 立体の； 中身の詰まった
1184,liquid,液体の
1185,vapor,蒸気、気体
1186,hydrogen,水素
1187,oxygen,酸素
1188,atom,原子
1189,nuclear,核の、原子力の
1190,molecule,分子
1191,radiation,放射能、放射
1192,religion,宗教 信仰
1193,faith,信頼、信仰、信念
1194,worship,崇拝； ～を崇拝する
1195,doctrine,教養、学説
1196,confidence,信頼、自信
1197,credit,信用、称賛、評判、功績
1198,incredible,信じられない
1199,Buddhism,仏教
1200,Muslim,イスラム教徒、イスラム教の
1201,Christianity,キリスト教
1202,Catholic,カトリックの、カトリック教徒
1203,Protestant,プロテスタントの； 新教徒
1204,priest,牧師、司祭
1205,clergy,聖職者
1206,preach,説く、説教する
1207,pilgrim,巡礼者
1208,divine,神の、神々しい
1209,sacred,神聖な
1210,sacrifice,犠牲にする； 犠牲； 生け贄
1211,saint,聖人； 聖人のような人
1212,holy,神聖な
1213,shrine,神社
1214,temple,寺院、神殿
1215,ritual,儀式
1216,ceremony,儀式、式典
1217,swear,誓う； ののしる
1218,bless,祝福する
1219,enchant,魔法をかける； 魅了する
1220,witch,魔女
1221,spell,呪文
1222,haunt,出没する
1223,race,人種； 競争
1224,discriminate,差別する、区別する
1225,tribe,部族
1226,ethnic,民族的な
1227,nationality,国籍
1228,native,出生地の、原住民の
1229,tradition,伝統
1230,custom,慣習
1231,accustomed,慣れている
1232,convention,慣習、因習、しきたり； 大会
1233,hierarchy,階級制、上下関係
1234,folk,民衆、民族
1235,myth,神話； 俗説
1236,legend,伝説
1237,tragedy,悲劇、惨劇
1238,environment,環境
1239,species,(生物の)種； 人類
1240,evolve,進化する、発展する
1241,ecology,生態(系)、自然環境、環境保護
1242,nature,自然； 本質； 性質
1243,inherent,(～に)本来備わっている(in～)
1244,artificial,人工の
1245,preserve,～を保護する、保存する
1246,develop,～を発達する、開発する； 発症する； 発達する、発育する
1247,sustain,～を支える、維持する
1248,atmosphere,大気； 雰囲気
1249,pollute,～を汚染する
1250,waste,無駄、浪費； 廃棄 ～を浪費する
1251,garbage,ゴミ
1252,trash,ゴミ； ～を捨てる
1253,rubbish,ゴミ、くだらないこと
1254,litter,散らかす、ゴミ
1255,landscape,風景
1256,resource,資源、財源
1257,fossil,化石
1258,fuel,燃料
1259,petroleum,石油
1260,exhaust,～を使い果たす、疲れさせる
1261,global warming,地球温暖化
1262,greenhouse effect,温室効果
1263,carbon dioxide,二酸化炭素
1264,tropical rain forest,熱帯雨林
1265,acid rain,酸性雨
1266,ozone layer,オゾン層
1267,climate,気候
1268,temperature,温度、気温
1269,humid,湿った
1270,moist,湿った
1271,phenomenon,現象
1272,drought,干ばつ
1273,disaster,災害、惨事
1274,hemisphere,半球
1275,continent,大陸
1276,Arctic,北極地方
1277,pole,極
1278,latitude,緯度
1279,longitude,経度
1280,altitude,高度
1281,equator,赤道
1282,nod,うなずく
1283,bow,おじぎする； おじぎ
1284,sigh,ため息をつく； ため息
1285,rub,～をこする
1286,yell,(～に向かって)叫ぶ(at～)
1287,leap,跳ぶ 跳躍、飛躍
1288,fix,～を固定する； ～を修理する
1289,pour,～を注ぐ； 流れ込む
1290,dip,～を(軽く)浸す
1291,soak,～を浸す、びしょ濡れになる
1292,sip,～を一口飲む
1293,cast,～を投げる、投げかける
1294,shed,～を流す、こぼす
1295,spur,～に拍車をかける、駆り立てる
1296,blur,～をぼやけさせる； ぼやける
1297,cite,～を引用する
1298,rear,～を育てる
1299,beg,～を懇願する、請う
1300,bet,～を賭ける； きっと…だと思う
1301,sue,～を告訴する
1302,dread,～を恐れる； 恐怖
1303,vow,～を誓う； 誓い
1304,chill,～を冷やす、に寒気を感じさせる； 寒気、冷たさ
1305,staff,社員、職員
1306,stuff,もの； ～を詰め込む
1307,crash,衝突する ★ぶつかって壊れる
1308,clash,衝突する、衝突 ★「カチン」とぶつかる
1309,crush,～を潰す ★「ぐしゃっ」と潰す
1310,flesh,肉
1311,glow,輝く； 輝き
1312,load,荷物、負担； ～に(荷物を)積む
1313,pray,祈る
1314,prey,獲物、餌食； 捕食する
1315,flee,逃げる； ～から逃げる
1316,dose,(薬の１回の)服用量
1317,role,役割
1318,roll,転がる； ～を転がす、巻く
1319,tale,話、物語
1320,awe,畏敬、畏怖； 畏怖させる
1321,feat,偉業、離れ業
1322,deed,行動、行為
1323,clue,手掛かり、鍵
1324,path,小道、道筋
1325,aisle,通路
1326,ray,光線、放射線
1327,lump,(小さな)かたまり
1328,bulk,容積、かさ； 巨大なもの
1329,pile,(綺麗に積み重なった)山
1330,heap,(雑然と積み重なった)山
1331,mess,混雑、乱雑
1332,fuss,大騒ぎ
1333,mere,単なる、ほんの
1334,dull,退屈な； 頭の鈍い
1335,ripe,熟した、成熟した
1336,bare,裸の、むき出しの； 最低限の、ギリギリの
1337,raw,生の、加工していない
1338,net,正味の、掛け値なしの
1339,gross,総計の
1340,dim,薄暗い、ぼんやりとした
1341,deaf,耳が聞こえない
1342,dumb,口がきけない； 馬鹿な
1343,weird,変な、奇妙な
1344,sake,ため、目的
1345,vain,無駄な、虚しい
1346,dawn,夜明け； 始まり 夜が明ける
1347,tend,(～する)傾向がある(to do)
1348,trend,傾向、風潮
1349,apt,～しがちである(to do)
1350,liable,(～)しがちである(to do)； (～に対して)法的責任がある(for～)
1351,prone,(～)しがちである(to do)、(を)こうむりがちである(to～)
1352,susceptible,(～の)影響を受けやすい、(を)こうむりがちである(to～)
1353,likely,(～)しそうである(to do)
1354,probable,じゅうぶんありえる
1355,possibly,ことによると； いったい； 絶対に(…ない)
1356,be about to do,今にも～しそうである
1357,on the verge of,今にも～しそうである
1358,on the brink of,今にも～しそうである
1359,eager,(～することを)熱望している、しきりに～したがっている(to do, for ～)
1360,willing,（～することを）いとわない、快く～する(to do)
1361,reluctant,(～する)気が進まない
1362,enthusiastic,(～に対し)熱意がある、熱心な(about)
1363,keen,(～に)熱心な(on[upon]～)； 鋭い
1364,intent,(～に)熱心な、一生懸命の(on[upon])
1365,earnest,まじめな、真剣な
1366,aspire,(～することを)熱望する(to do, for)
1367,yearn,(～することを)熱望する(to do, for)
1368,long for,～を待ち望む； 懐かしく思う
1369,tempt,～を(…するよう)誘惑する(to do, into doing)
1370,fascinate,～を魅了する
1371,appeal,魅力、人気； 訴え、要請； (～に)訴える、要請する(to～)
1372,charm,魅力； 呪文
1373,respond,(～に)反応する、返事をする(to)
1374,react,(～に)反応する(to)
1375,interact,(～と)相互作用する、交流し合う(with)
1376,adjust,(～に)順応する、適応する(to～)； ～を(…に)適合させる(to…)
1377,adapt,(～に)順応する、適応する(to～)； ～を(…に)適合させる(to…)
1378,shift,変化、移行； シフト、交代勤務期間； 移る、変わる
1379,fit,合う、はまる； ～に(サイズが)合う； 健康な、体調がよい
1380,suit,～に似合う； (都合が)合う
1381,match,～と(組み合わせが)合う； に匹敵する
1382,go with,～と(組み合わせが)合う； ～に同意する、を受け入れる
1383,diet,食事、食習慣
1384,obese,肥満した
1385,weight,重さ、体重
1386,nutrition,栄養
1387,nourish,～に栄養を与える、養育する； 育む
1388,nurture,～を養育する、育てる； 育む、促進する
1389,foster,～を養育する； 育む、促進する
1390,feast,ご馳走
1391,appetite,食欲
1392,starve,飢える、空腹である
1393,hunger,空腹
1394,thirst,喉の渇き
1395,greed,貪欲
1396,famine,飢饉
1397,ingredient,食材、成分
1398,digest,～を消化する
1399,beverage,飲料
1400,habitat,生息地
1401,dwell,住む、宿る
1402,residence,住居、居住
1403,accommodate,～を宿泊させる、収容する； 順応させる
1404,refuge,避難、避難所
1405,shelter,避難所、住まい； ～を保護する、住まわせる
1406,clothes,衣服
1407,fabric,布地
1408,thread,糸
1409,weave,～を織る
1410,wear,～を着ている； をすり減らす
1411,disguise,～を変装する、隠す； 変装、隠蔽
1412,naked,裸の、むき出しの
1413,fashion,流行； 方法、やり方
1414,household,家庭の 家事
1415,domestic,家庭内の； 国内の
1416,routine,日常の、おきまりの 日課
1417,chore,雑用
1418,commute,通勤・通学する
1419,grocery,食料雑貨品
1420,greet,～に挨拶する、を出迎える
1421,souvenir,（主に自分のための）お土産、記念品
1422,degree,程度； 学位
1423,extent,程度、範囲
1424,scale,規模、程度
1425,moderate,適度の、控えめな； 穏やかな
1426,temperate,適度の、節度のある； 穏やかな
1427,proper,適度の、適切な
1428,appropriate,適切な
1429,extreme,極端な 極端、極限
1430,tremendous,凄まじい、莫大な
1431,excess,超過、過剰な
1432,extra,余分な、臨時の
1433,gradual,徐々の
1434,steady,安定した、着実な
1435,sharply,急速に
1436,steep,(勾配が)急な、険しい
1437,marked,著しい、顕著な
1438,partly,部分的に、一部には
1439,entire,全体の
1440,fully,全く、完全に
1441,thorough,完全な、徹底的な
1442,ultimate,究極の、最終の
1443,terminal,終点の、最終の
1444,eventually,結局は、ゆくゆくは
1445,end up,結局～になる（doing）
1446,in the long run,長い目で見れば、結局は
1447,for good,永遠に
1448,rate,(at)割合、速度； ～を評価する
1449,proportion,割合、比率
1450,ratio,比率
1451,fraction,一部分
1452,portion,一部分
1453,fragment,断片、破片
1454,segment,(区分された)部分
1455,cluster,群れ、集まり
1456,partial,部分的な； 偏った、不公平な
1457,all in all,全般的に見て、概して
1458,on the whole,概して、全般的に
1459,by and large,概して、全般的に
1460,at large,全体の； 逃走中で
1461,at length,長々と、詳細にわたって； ついには
1462,lack,～を欠く； 欠如
1463,devoid,(～が)欠けている(of)
1464,run out of,～を切らす、使い果たす
1465,short of,～が不足している
1466,deficit,不足、赤字
1467,scarce,不十分な、乏しい
1468,vacant,空いている
1469,for want of,～がないので、不足して
1470,dense,密集した、密度の濃い
1471,convey,～(情報・意味など)を伝える； 運搬する
1472,impart,～を(…に)与える、伝える(to …)
1473,donate,～を(…に)寄付する、贈与する(to …)
1474,endow,～に与える、授ける
1475,distract,～をそらす、の気をそらす
1476,evade,～を避ける、回避する
1477,divert,～をそらす
1478,convert,～を転換する、改宗・転向させる
1479,expel,～を追い出す
1480,repel,～を追い払う、退ける
1481,disperse,～を散らす
1482,circulate,循環する； ～を循環させる； 流通させる
1483,encounter,～(人・問題など)に出くわす、遭遇する； 遭遇
1484,bump into,～にばったりと出会う
1485,come across,～に偶然出会う、を偶然見つける
1486,trace,～をたどる； 遡る； 痕迹
1487,overwhelm,～を圧倒する、打ちのめす
1488,overtake,～に追いつく、を追い越す； (災難などが)を襲う
1489,undergo,～(悪いこと・辛いこと・変化)を経験する
1490,descend,下りる； 由来する
1491,ascend,上る
1492,plunge,落ちる、飛び込む
1493,embrace,～を抱く； (思想など)を信奉する、採用する
1494,embody,～を具体化する
1495,render,～を(…)にする ★第五文型(SVOC)で用いる
1496,modify,～を修正する、変更する
1497,restore,～を復元する、回復する
1498,relieve,～を解放する； 安心させる
1499,retreat,退却する； 退却
1500,retrieve,～を回収する、取り戻す
1501,resume,～を再開する； 再開する； 履歴書、要約
1502,dissolve,溶解する； ～を解散する
1503,erase,～を消す、消去する
1504,delete,～を消す、消去する
1505,wipe out,～を消し去る、絶滅させる
1506,suspend,～を宙吊りにする； を(いったん)中止する、中断する
1507,choke,～を窒息させる、詰まらせる； 窒息させる
1508,suffocate,～を窒息させる
1509,squeeze,～を絞る、絞り出す
1510,spill,～をこぼす
1511,make up,(～を)埋め合せる、取り戻す(for)； (～と)仲直りする； ～(話)をでっち上げる； 化粧する
1512,compensate,(～を)埋め合わせをする、補償する(for)
1513,make out,～を理解する、判読する
1514,make for,～へ向かう； ～(の実現)に役立つ、～を可能にする
1515,turn out,～であることが分かる、判読する
1516,turn up,現れる、登場する
1517,turn down,～(誘い・要求)を断る； の音量を下げる
1518,turn to,～に頼る
1519,take in,～を取り入れる； 理解する； を騙す
1520,take on,～(意味・重要性)を帯びる； (仕事)を引き受ける
1521,take after,～に似る
1522,take up,～を占める； を取り上げる
1523,take over,～(仕事)を引き継ぐ
1524,take to,～が好きになる、習慣になる
1525,put out,～を消す
1526,to put it … / put …,…言うと
1527,do,間に合う、良い
1528,make do with,～で間に合わせる
1529,give away,～を(ただで)譲る、(秘密・気持ち)を明かす
1530,give way,(～)に屈する、取って代わられる(to)
1531,give in,(～)に屈する(to)
1532,give off,～(光・熱・期待)を発する
1533,come up with,～を思いつく
1534,come about,生じる、起こる
1535,come into being,生じる
1536,come to,意識を戻す； (全部で)～になる
1537,come in handy,便利である、役に立つ
1538,Come on.,おいおい、冗談だろ
1539,go on to do,さらに続けて～する
1540,go off,爆発する
1541,Go ahead.,どうぞ
1542,bring about,～を引き起こす、もたらす
1543,bring oneself to do,～する気になる
1544,bring A home to B,AをBに分からせる、実感させる
1545,get at,～を言おうとする
1546,get by,なんとかやりくりする
1547,get ～ across,～を伝える、分かってもらう
1548,get away with,（罰を受けずに・ばれずに）逃げおおせる
1549,let go of,～を手放す
1550,let ～ in,～を中に入れる
1551,let alone ＝ still less,ましてや?ない
1552,pull up [over],車をを止める
1553,make it,(約束・予定通り)やり遂げる、都合がつく、間に合う
1554,That's it,もう終わりだ； まさにそれだ、その通りだ
1555,That is that,それでおしまいだ、それだけのこと
1556,make ～ of A,Aを～と評価する、判断する
1557,make the most of,～を最大限利用する
1558,make the best of,～をできる限り利用する
1559,make sure,確実に～する； ～を確かめる
1560,make ends meet,やりくりする、帳尻を合わせる
1561,make believe,～のふりをする、真似をする
1562,make a scene,ひと騒ぎする、醜態を晒す
1563,think much of,～を高く評価する
1564,think better of,～を考え直す、見直す
1565,think twice,よく考える
1566,on second thought,考え直して、やっぱり
1567,show off,～を見せびらかせる、誇示する
1568,show up,現れる、登場する
1569,see to,～に対処する、の世話をする、を手配する
1570,see through,～（嘘など）を見抜く； ～を最後までやり通す； (人)を最後まで助ける
1571,in the way of A / in A's way,Aの邪魔になって
1572,make one's way,前進する
1573,find one's way,たどり着く、入ってくる
1574,go out of one's way to do,わざわざ～する
1575,by way of,～を経由して、～によって
1576,have a way of doing,～する癖がある、傾向がある
1577,under way,進行中で
1578,true for [of],～に当てはまる
1579,hold true [good],当てはまる、通用する
1580,true to life,実物そっくり
1581,give rise to,～を生じる、引き起こす
1582,give birth to,～を産む； 生じる、引き起こす
1583,put an end to,～を終わらせる
1584,take turns,交替する、順番にやる
1585,in turn,それが今度は
1586,in return,(～の)お返しに(for)
1587,out of the question,論外である、話にならない
1588,in question,問題になっている、当の
1589,on end,続けて
1590,in a row,続けて
1591,so far,これ(それ)までのところは
1592,go so far as to do,～までする
1593,up to,(最大で)～まで； ～次第で； ～(良くないこと)に従事して、～を企んで
1594,leave behind,～を置き忘れる、残していく
1595,leave out,～を省く、除外する、のけ者にする
1596,rule out,～を除外する
1597,back and forth,行ったり来たり
1598,upside down,上下逆さまに
1599,inside out,裏返しに
1600,vice versa,その逆、逆もまた同様
1601,other way around,あべこべ、逆
1602,this and that,あれこれ、様々なこと
1603,for the good of,～のために、利益となるように
1604,as good as,～も同然
1605,get the better of,～に勝る、打ち勝つ
1606,know better,～するほど馬鹿ではない、もっと分別がある
1607,to the best of my knowledge,私の知る限りでは
1608,to say the least,控えめに言っても
1609,take ～ for granted,当然とみなす
1610,take one's word for it,～の言うことを信じる
1611,take it easy,気楽にやる
1612,keep up with,～に遅れずについていく
1613,catch up with,～に追いつく
1614,fall behind,遅れる
1615,keep [stay] in touch with,～と連絡を取り合う
1616,look into,調べる、検討する
1617,look over,～にざっと目を通す
1618,look on [upon],～を（…と）みなす(as)
1619,pass on [down],～を（…に）手渡す、伝える(to)
1620,pass for [as],～として（世間に）通る、通用する
1621,pass out,気絶する
1622,pass away,亡くなる
1623,reach (out) for,～に手を伸ばす
1624,set out [off],(～へ)出発する(for)
1625,set ～ free,～を解放する
1626,work out,～を解く、考え出す； うまくいく； トレーニングをする
1627,work on,～(仕事)に取り組む
1628,pick up,～を拾う、取り上げる； ～を車に乗せる、車で迎える； ～を買う； ～(言語・知識など)を身に付ける
1629,part with,～を手放す、と別れる
1630,live on,～に頼って生きる； を主食とする
1631,fall back on,～に頼る、を最後の拠り所とする
1632,rest on,～に頼る； に基づく
1633,cut down on,～を減らす、削減する
1634,point,要点、言いたいこと
1635,to the point,的を射ている
1636,make a point of doing,必ず～することにしている； ～を重視する
1637,keep an eye on,～を見張る
1638,have an eye for,～を見る目がある、鑑賞眼がある
1639,turn a deaf ear to,～を聞こうとしない
1640,make a face,顔をしかめる
1641,remain to do,まだ～していない
1642,have [be] yet to do,まだ～していない
1643,on behalf of,～に代わって、を代表して
1644,second to none,誰にも負けない
1645,once and for all,これを最後に、きっぱりと
1646,for once,今回だけは、１回でいいから
1647,at stake,危険にさらされて； 問題となって
1648,in the wake of,～の後に続いて
1649,Beats me.,分からない
1650,Serves you right.,ざまあみろ、当然の報いだ
1651,Give me a break.,よしてくれ
1652,call it a day,今日はもう終わり
1653,mental,頭の、知力の； 精神の、心の
1654,spirit,精神(力)； 気分； 霊魂
1655,soul,魂、精神； 人
1656,material,素材、原料； 題材； 教材； 物質的な
1657,sane,正気の
1658,abuse,乱用、虐待； ～を乱用する、虐待する
1659,addict,～を中毒にさせる； 麻薬中毒者
1660,injure,～に怪我をさせる
1661,wound,～を負傷させる
1662,bleed,出血する
1663,scratch,引っかき傷、かすり傷、～を引っかく
1664,bruise,あざ、打撲傷 ～に打撲を負わせる
1665,suffer,（～で）苦しむ、悩む（from）
1666,torture,拷問； ～を拷問する、ひどく苦しめる
1667,torment,苦痛； ～を苦しめる
1668,vigor,活力
1669,feeble,弱々しい
1670,pale,(顔が)青白い、血色が悪い； (色が)淡い
1671,fatigue,(極度の)疲労
1672,weary,(～)に疲れている、飽き飽きしている(of)
1673,tedious,退屈な
1674,dreary,退屈な； ものわびしい
1675,thumb,親指
1676,palm,手のひら
1677,wrist,手首
1678,fist,握りこぶし
1679,elbow,ひじ
1680,muscle,筋肉
1681,thigh,大股
1682,knee,膝
1683,heel,かかと
1684,ankle,足首
1685,toe,足の指、つま先
1686,to one's feet,立って、立った状態で
1687,chest,胸； タンス
1688,limb,手足、四肢
1689,forehead,ひたい
1690,eyebrow,眉毛
1691,eyelid,まぶた
1692,eyelash,まつげ
1693,beard,あごひげ
1694,jaw,あご
1695,chin,あご(の先端)
1696,cheek,頬
1697,tremble,(恐怖・興奮で)震える； 震動する
1698,shiver,(寒さで)震える
1699,wander,(目的もなく)さまよう、歩き回る
1700,roam,歩き回る、徘徊する； ～を徘徊する
1701,stroll,(ぶらぶら)歩く
1702,stride,ひとまたぎ； 進歩； 大股で歩く
1703,stumble,つまずく； (～に)偶然でくわす(on[upon])
1704,creep,這う、こっそり進む
1705,linger,(立ち去らずに)ぐずぐずする、残存する
1706,sniff,くんくん嗅ぐ； ～のにおいを嗅ぐ
1707,sneeze,くしゃみをする
1708,snore,いびきをかく
1709,sneer,(～を)あざ笑う、鼻で笑う(at)
1710,shrug,肩をすくめる
1711,clear one's throat,咳払いする
1712,frown,しかめ面をする； しかめ面
1713,grimace,しかめ面をする； しかめ面
1714,blink,まばたきをする； まばたき
1715,yawn,あくびをする
1716,mutter,つぶやく
1717,murmur,つぶやく
1718,mumble,つぶやく
1719,whisper,ささやく
1720,shriek,金切り声を上げる、叫ぶ
1721,sob,すすり泣く
1722,genuine,本物の、純粋の、心からの
1723,authentic,本物の、本場の
1724,fake,偽物の
1725,FALSE,(わざと)間違った、偽の
1726,sincere,心からの、誠実な
1727,sheer,全くの
1728,elaborate,手の込んだ、精巧な
1729,intricate,複雑な、込み入った
1730,exquisite,精緻な、素晴らしい
1731,sophisticated,洗練された； 精巧な
1732,proficient,熟達した
1733,negative,否定の、否定的な、消極的な、マイナスの
1734,affirmative,肯定の、積極的な
1735,positive,積極的な、プラスの； 確信している
1736,vertical,垂直の、縦の
1737,horizontal,水平の
1738,parallel,(～と)平行の、類似した(to～)； 類似(物)、匹敵するもの
1739,indifferent,(～に対して)無関心な(to)
1740,infamous,悪名高い、評判が悪い
1741,notorious,悪名高い、評判が悪い
1742,uneasy,落ち着かない、不安な
1743,awkward,落ち着かない、気まずい、不器用な、ぎこちない
1744,clumsy,不器用な、ぎこちない
1745,restless,落ち着きがない、せわしない
1746,relentless,執拗な、情け容赦のない
1747,ruthless,情け容赦のない、冷酷な
1748,reckless,向こう見ずな
1749,stupid,ばかな、愚かな
1750,silly,ばかな
1751,absurd,ばかげた、理に適わない
1752,ridiculous,ばかばかしい
1753,fragile,壊れやすい、もろい
1754,vulnerable,（～に対して）傷つきやすい、弱い(to)
1755,delicate,繊細な、微細な、優美な、臆病な
1756,stiff,堅い、凝っている； 堅苦しい
1757,rigid,堅い； 厳格な、融通が利かない
1758,flexible,曲がりやすい、柔軟性のある
1759,arrogant,傲慢な
1760,humble,謙虚な、つつましい； 質素な
1761,stubborn,頑固な
1762,obstinate,頑固な
1763,fierce,激しい
1764,harsh,厳しい
1765,stern,厳格な、険しい
1766,brave,勇敢な
1767,bold,大胆な
1768,timid,臆病な
1769,deliberate,意図的な、故意の； 慎重な
1770,discreet,慎重な
1771,prudent,慎重な
1772,subtle,微妙な、かすかな
1773,drastic,劇的な、徹底的な
1774,integral,必要不可欠な； 完全な
1775,decent,まともな、きちんとした、上品な
1776,neat,こぎれいな、すばらしい
1777,tidy,きちんとした、こぎれいな
1778,crude,生の、天然の、粗野な
1779,valid,有効な、正当な
1780,initiative,主導権、率先
1781,security,安全性
1782,merit,長所、利点
1783,access,交通の便、入手、利用
1784,technique,(専門的な)技術
1785,horror,恐怖
1786,terror,恐怖
1787,symbol,象徴
1788,barrier,障壁、障害
1789,gap,隔たり、差
1790,dilemma,ジレンマ、板挾み、難題
1791,stretch,～を伸ばす； 伸びる、広がる
1792,elite,エリート、精鋭； エリートの
1793,series,連続
1794,serial,連続した
1795,cereal,穀物、穀物加工食品
1796,irregular,不規則な
1797,item,品目、項目
1798,relax,～をくつろがせる； くつろぐ
1799,mood,気分、雰囲気
1800,tight,きつい
1801,severe,厳しい
1802,puzzle,～を戸惑わせる
1803,pause,一時休止； 一時休止する
1804,reverse,～を逆にする、に逆行する； 逆の； 逆
1805,pose,姿勢 ポーズをとる； ～(問題・質問)を提起する
1806,random,無作為の、でたらめな
1807,bitter,苦い、つらい
1808,float,(水中・空中に)浮く； ～を浮かべる
1809,recipe,レシピ、調理法； 秘訣
1810,luxury,贅沢、贅沢品
1811,charity,慈悲、慈善
1812,athlete,運動選手
1813,laundry,洗濯物
1814,label,～に(…という)レッテルを貼る(as)
1815,loose,ゆるんだ、だらしない
1816,humor,ユーモア； 機嫌
1817,image,イメージ、画像、映像
1818,amateur,アマチュア、素人
1819,thrill,～をわくわくさせる； 興奮
1820,theme,テーマ、主題
1821,leisure,余暇
1822,alcohol,アルコール、酒
1823,vitamin,ビタミン
1824,liver,肝臓
1825,kidney,腎臓
1826,chaos,混沌、無秩序
1827,connect,～を繋げる
1828,appoint,～を指名する、指定する
1829,guarantee,～を保障(保証)する
1830,aesthetic,美的な、美学の
1831,celebrity,有名人
1832,animate,～を活気づける、に生命を与える
1833,department,部署、部門、省
1834,depart,出発する
1835,casual,何気ない、偶然の； 略式の
1836,challenge,(やりがいのある)難題、課題； 挑戦； ～に挑む、挑戦する； ～に異議を唱える
1837,naive,世間知らずの、うぶな
1838,alien,異質な、外国の 外国人
1839,resort,(～[手段]に)訴える(to～) 行楽地
1840,web,クモの巣； (インターネット上の)ネットワーク、ウェブ
1841,faint,かすかな、ぼんやりした 失神する
1842,interview,インタビュー、面接
1843,bond,きづな、結束
1844,tissue,(細胞の)組織 ； (ガーゼなどの)布、繊維
1845,campaign,選挙活動、政治活動、軍事行動、促進販売
1846,boss,上司
1847,cafeteria,社員食堂、学食
1848,companion,仲間、旅の連れ
1849,mode,様式、方式、形態
1850,mineral,鉱物
1851,foul,（臭いなどが）不快な、汚い； 反則の； 反則
1852,educate,～を教育する
1853,discipline,しつけ、規律 ～をしつける、訓練する
1854,instruct,Aに～するように指示する
1855,enlighten,～を啓蒙・啓発する、に知らせる
1856,illuminate,～を照らす； (問題)を明らかにする
1857,inspire,～を（…するよう）奮起させる、の創作意欲をかき立てる(to do)
1858,incentive,動機付け、やる気を出させるもの
1859,enroll,～を登録する、入学・入会させる； 入学する
1860,register,～を登録する、記録する； 書留にする； 登録する
1861,sign up,（～に）登録する(for)
1862,tuition,授業料
1863,tutor,家庭教師、個人電話； ～を(個人的に)教える
1864,faculty,(大学の)学部； (身体・精神の)能力
1865,facility,施設、設備； 能力、容易さ
1866,sophomore,(高校・大学の)二年生
1867,semester,(二学期制の)学期
1868,curriculum,カリキュラム、教科課程
1869,diploma,(大学の)学位
1870,grade,等級、学生； 評価、成績
1871,mark,成績； 印、指標； ～を印す
1872,rank,等級、階級 位置する； ～を位置づける
1873,profession,(知的・専門的な)職業
1874,vocation,天職
1875,candidate,志願者、候補者
1876,colleague,同僚
1877,technology,科学技術
1878,innovation,革新、革新技術
1879,novel,小説 斬新な、新奇な
1880,patent,特許； ～の特許をとる
1881,breakthrough,大躍進
1882,exploit,～を開発・利用する； 搾取する
1883,tool,道具、工具
1884,implement,道具、用具； ～を実行する
1885,instrument,器具； 楽器
1886,machinery,機械類
1887,appliance,電気製品
1888,apparatus,装置・器具(一式)
1889,gadget,機械器具
1890,function,機能、働き； 機能する
1891,electric,電気の
1892,electronic,電子の
1893,vehicle,乗り物； 伝達手段、媒体、原動力
1894,automobile,自動車
1895,wheel,車輪； (車の)ハンドル
1896,pedestrian,歩行者
1897,pave,～を舗装する
1898,manual,手動の、手作業の マニュアル、説明書
1899,automatic,自動の
1900,cover,～を覆う； ～の範囲にわたる； ～を報道する
1901,fine,すばらしい； 細かい； 罰金； ～に罰金を科す
1902,leave,～を出発する； ～を残す； 休暇； 許可
1903,meet,～に会う； ～(要求・必要)を満たす
1904,strike,～を打つ； ～に(…という)印象を与える(as)； ストライキ
1905,run,走る； ～を経営する
1906,coin,硬貨； ～(新語)を作り出す
1907,room,部屋； 空間； 余地、可能性
1908,story,物語； ～階建て
1909,manner,方法、やり方； (-s)礼儀作法、行儀
1910,address,住所； ～に差し向ける； 取り組む； 話しかける
1911,check,～を確かめる； ～を抑制する； 検査：抑制、阻止； 小切手
1912,forward,前方へ； ～(手紙・メール)を転送する
1913,chance,機会； 可能性、見込み； 偶然
1914,air,空気、空； 外見、態度、雰囲気
1915,lot,大量のもの； 区画、用地； 分け前、宿命
1916,change,～を変える； 変化； 釣り銭、小銭
1917,second,二番目の、秒、(-s)おかわり
1918,still,まだ； それでも； 静止した
1919,cross,～を横切る； 機嫌の悪い
1920,will,意志； 遺言
1921,sound,音、～のように聞こえる、思える； 健全な； ぐっすりと、無事に
1922,fast,速い； 固定した； 速く； しっかりと、ぐっすりと、断食、断食する
1923,life,人生； 生活； 生命、人名； （美術での）実物、本物
1924,art,芸術； 技術； 人文学
1925,service,奉仕、給仕、設備、公共事業、勤務、礼拝、兵役
1926,order,命令、注文； 順序、秩序； ～を命じる、注文する
1927,practice,練習、実践； 慣習、慣行
1928,minute,極めて小さい、微細な
1929,excuse,言い訳、理由
1930,wind,～を巻きつける、巻く
1931,grind,～を（粉に）挽く、すりつぶす
1932,command,命令； (言語を)自由に使う能力； ～を見晴らす
1933,charge,～を(…で)非難する； 告発する(with…)； ～に料金を課す； ～に責任を課す； ～を充電する； 非難； 料金； 責任
1934,history,歴史、歴史学； 経歴
1935,dinosaur,恐竜
1936,ape,サル、類人猿
1937,primate,霊長類の動物
1938,mammal,哺乳類
1939,upright,直立した 直立して
1940,archaeology,考古学
1941,civilization,文明
1942,civil,市民の
1943,medieval,中世の
1944,feudal,封建制の
1945,Renaissance,(the)ルネサンス
1946,revolution,革命、改革
1947,empire,帝国
1948,imperial,帝国の
1949,colony,植民地、集落
1950,slave,奴隷； (～に)とらわれている人(to～)
1951,modern,現代の
1952,metropolis,大都市
1953,bustle,喧噪
1954,skyscraper,超高層ビル
1955,military,軍事の
1956,army,陸軍、軍隊
1957,arms,武器、軍備
1958,navy,海軍
1959,navigation,航海
1960,soldier,軍人、兵士
1961,troop,軍隊、兵士
1962,hostage,捕虜
1963,weapon,武器
1964,sword,剣
1965,strategy,戦略、方策
1966,tactics,戦術
1967,neutral,中立の、どっちつかずの
1968,ally,同盟国、味方； 同盟する
1969,rally,集会； 再結集する
1970,assault,～を襲撃する； 襲撃
1971,raid,急襲
1972,assassination,暗殺
1973,thus,それ故に； このように
1974,hence,それ故に； 後に
1975,nevertheless,それにもかかわらず
1976,nonetheless,それにもかかわらず
1977,notwithstanding,それにもかかわらず
1978,all the same,それでもやはり、それにもかかわらず
1979,despite,～にもかかわらず
1980,besides,それに加えて、さらに； ～に加えて
1981,moreover,さらに
1982,furthermore,さらに
1983,whereas,(～である)その一方で
1984,on the other hand,その一方で
1985,meanwhile,その間に
1986,in the meantime,その間に
1987,that is (to say),すなわち、つまり
1988,namely,すなわち、つまり
1989,in short,手短に言うと、つまりは
1990,say,例えば
1991,for instance,例えば
1992,indeed,確かに、本当に
1993,somewhat,いくぶん、やや
1994,somehow,どういうわけか； 何らかの方法で
1995,otherwise,さもなければ； その他の点で； 違ったふうに、別のやり方で
1996,given,～仮定すると、があれば、を考慮すると； 特定の、任意の
1997,rightly,正当に、当然のことながら
1998,justly,正当に、当然のことながら
1999,mistakenly,間違って
2000,reportedly,報じられるところでは
2001,presumably,おそらく、たぶん
2002,seemingly,見たところでは
2003,as a matter of fact,実は
2004,for that matter,さらに言えば
2005,thereby,それによって
2006,whatsoever,全く、少しでも
2007,beneath,～の下に
2008,premise,前提、仮定
2009,entity,存在物、統一体
2010,discourse,論文、講演、言説
2011,transcend,～を越える、超越する
2012,ascribe,(…に)～の原因を帰す(to…)
2013,intrinsic,本来備わっている
2014,articulate,～を(はっきり)言う、発音する； ～をつなぐ
2015,formula,公式； 決まり切ったやり方； 製法
2016,contend,…と主張する(that…)； (～と)争う、(に)対処する(with～)
2017,advocate,～(主義・理論)を提唱する、主張する； 提唱者
2018,delegation,代表派遣、使節
2019,sanction,制裁； 是認、許可
2020,pledge,約束、誓約； ～を約束する、誓約する(to do, that…)
2021,agenda,協議事項、議題
2022,amend,～を修正する、改正する
2023,subsidy,補助金、助成金
2024,intuition,直感
2025,discern,～を見分ける、識別する
2026,skeptical,懐疑的な
2027,benign,良性の、害のない； 有益な
2028,malicious,悪意的な
2029,hypocrisy,偽善
2030,undermine,～を阻害する、弱体化する
2031,impair,～を弱める、損なう
2032,deteriorate,悪化する
2033,trigger,～を引き起こす、引き金となる； 引き金
2034,induce,～を誘発する、を(…)する気にさせる(to do)
2035,deduce,～(結論)を導き出す、推論する
2036,intrigue,～の興味をそそる； 陰謀
2037,momentum,力、勢い、運動量
2038,velocity,速度
2039,chronic,長期的な、慢性的な
2040,lapse,(時間の)経過； (ちょっとした)誤り
2041,gravity,重力； 重大さ
2042,orbit,軌道 ～の軌道を回る
2043,axis,軸
2044,fluid,流動体； 流動性の
2045,resilient,弾力性のある； 回復力のある、立ち直りの早い
2046,erode,腐食する； ～を腐食する、侵食する
2047,erupt,噴火する
2048,assimilate,～を同化する； 消化・吸収する； 同化する
2049,adhere,(～に)くっつく、(を)固守する(to～)
2050,exile,(祖国からの)追放、亡命； ～を追放する
2051,probe,探査； 探査機 ～を厳密に調べる
2052,scrutinize,～を綿密に調べる
2053,verify,～を(正しいと)証明する、確かめる
2054,census,国勢調査
2055,censorship,検閲
2056,index,指標、指針、指数； 見出し
2057,defy,～を拒む、に反抗する
2058,comply,～(規則・命令・基準)に従う、合致する(with ～)
2059,synthesize,～を総合する、合成する、合成して作り出す
2060,coordinate,～を同調して動かす、調整する
2061,subordinate,従属している、下位の； 二次的な 従属するもの、下位のもの ～を従属させる
2062,incorporate,～を(…に)組み込む(into…)
2063,comprise,～を構成する； ～からなる
2064,manipulate,～を操作する、あやつる
2065,tangible,触れることができる； 明白な、具体的な
2066,designate,～を指名する、指定する
2067,depict,～を描く
2068,ingenious,創意工夫に富んだ
2069,ingenuous,純真な、無邪気な
2070,proximity,(～に)近いこと(to)
2071,dismay,～を動揺させる； 動揺
2072,appall,～をぎょっとさせる
2073,stun,～をびっくりさせる、茫然とさせる
2074,marvel,(～に)驚く、驚き(at～)； 驚き
2075,perplex,～を当惑させる
2076,bewilder,～を当惑させる
2077,astound,～をびっくりさせる
2078,startle,～をびっくりさせる
2079,anticipate,～を予期する
2080,apprehension,懸念、不安
2081,deplore,～を嘆く
2082,agony,苦悩、苦痛
2083,inflict,～(苦痛・打撃)を与える
2084,afflict,～を苦しめる
2085,ambivalent,矛盾する、相反する、どちらか決めかねて
2086,arbitrary,任意の、独断的な、恣意的な、気まぐれな
2087,unanimous,満場一致の
2088,consensus,意見の一致、合意
2089,ponder,～をじっくり考える
2090,reckon,～を推定する、と考える
2091,soar,急上昇する、高く舞い上がる
2092,roar,鳴り響く、吠える
2093,peer,仲間、同等の人
2094,reap,～を収穫する； (報酬・利益)を手に入れる
2095,curb,～を抑制する、(歩道の)縁石
2096,carve,～を彫る、作る
2097,cue,合図、指図
2098,queue,行列
2099,slap,～をぴしゃりと叩く
2100,clap,～(手)を叩く
2101,hatch,(卵が)かえる、孵化する
2102,wreck,～を大破させる、台なしにする； 難破、（破損した）残骸
2103,drain,下水、排水； ～の排水をする、を消耗する
2104,sewage,下水
2105,sew,～を縫う
2106,sober,しらふの； ありのままの
2107,kin,血縁、親族
2108,merge,合併する
2109,riot,暴動、反乱
2110,galaxy,銀河、星雲
2111,cosmos,宇宙
2112,cosmic,宇宙の
2113,celestial,天体の
2114,comet,彗星
2115,particle,粒子
2116,debris,残骸、ゴミ
2117,psychiatric,精神医学の
2118,contaminate,～を汚染する
2119,specimen,標本、見本
2120,indigenous,原住民の、その土地固有の
2121,province,州、省； (-s)地方
2122,peril,危険
2123,hazard,危険、危険要素
2124,plausible,もっともらしい、まことしやかな
2125,preliminary,予備の、事前の
2126,anonymous,匿名の
2127,obsolete,すたれた、時代遅れの
2128,innate,生まれつき持っている； 固有の
2129,subsequent,その後の
2130,alleviate,～を軽くする、軽減する
2131,mandatory,強制的な、必須の
2132,imperative,必須の、急務の
2133,advent,出現、到来
2134,heredity,遺伝
2135,coherent,首尾一貫した
2136,legitimate,正当な、合法的な
2137,certificate,証明書、免許
2138,autonomy,自治、自立、自主性
2139,withstand,～に耐える
2140,supplement,～を補う； 補うもの、栄養補助食品
2141,dispose,(～する)気にさせる(to do)； ～を配置する
2142,humane,思いやりのある、人道的な
2143,personnel,(会社等の)人員部； 全職員
2144,maxim,格言、原理
2145,questionnaire,アンケート調査
2146,manifest,～を(言動で)明らかに示す； 明白な
2147,connotation,言外の意味, 含蓄
2148,dogma,教義、定説； 独断
2149,prophet,予言者
2150,symmetry,左右対称、対称
2151,rectangular,長方形の
2152,diameter,直径
2153,soothe,～をなだめる、和らげる
2154,wither,しおれる、弱まる
2155,surge,急増、急騰 急増する、急騰する
2156,proliferate,急増する、繁殖する
2157,fetch,～を取ってくる, 連れてくる
2158,immerse,～を浸す； 没頭させる
2159,hamper,～を妨げる
2160,forge,～を偽造する
2161,token,しるし
2162,mock,～をあざ笑う； 模擬の、偽の
2163,toll,損害、死傷者； 通行料、通話料
2164,doom,運命, 宿命； ～を運命づける
2165,flaw,ひび、欠陥
2166,cater,(食事などを)まかなう、(要求に)応じる
2167,edible,食べられる
2168,delinquent,非行の
2169,gigantic,巨大な、大きな
2170,static,静止した、動きのない
2171,antique,古い、骨董の
2172,transact,～(業務・取引)を処理する、行う
2173,ornament,装飾
2174,corridor,廊下
2175,warrant,～を保証する； 正当化する
 2176,mischief,いたずら、悪さ`},

  {
    id: 'leap',
    name: 'Leap',
    csv: `番号,単語,意味
1,agree,[自] ①賛成する ②（主語の中で）意見が一致する ③（with ～）（気候，食べ物が）（～に）合う
2,oppose,[他] ～に反対する
3,advise,[他] ～に忠告する
4,tip,[名] ①助言，ヒント ②チップ ③（足や山などの）先，先端（いずれも〈可算〉）
5,discuss,[他] ①～について話し合う，議論する ②～を話題に出す
6,blame,[他] ～に責任があるとする
7,argue,[他] ①（that SV）～と主張する [自] ②（with ～）（～と）言い争う
8,claim,[他] ①（that SV）～と主張する ②～を要求する，主張する [名] ③主張，要求
9,complain,[自] ①文句を言う，苦情を言う ②（of ～）（病気などを）訴える
10,offer,[他] ①～を申し出る [名] ②申し出 ③値引き
11,suggest,[他] ①～を示唆する ②～を提案する
12,recommend,[他] ～を推薦する，勧める
13,grateful,[形] 感謝している
14,apologize,[自] （to ～）（～に）謝る
15,excuse,[名] ①言い訳 [他] ②～を許す ③（A from B）（B からA）を免除する
16,celebrate,[他] ①（特別な日、出来事）を祝う ②（儀式など）を挙行する，執り行う
17,congratulate,[他] （人）を祝う，～にお祝いを述べる
18,admire,[他] ～を称賛する，～に感心する
19,impress,[他] ～に感銘を与える，～を感心させる
20,award,[名] ①賞 [他] ②～を授与する
21,explain,[他] ～を説明する
22,describe,[他] ～を説明する
23,communicate,[自] ①（with ～）（～と）意思の疎通をはかる [他] ②～を伝える
24,express,[他] ①（意見，気持ち）を表現する [名] ②急行（列車，バス）
25,promise,[名] ①約束 [他] ②～を約束する
26,information,[名] 情報〈不可算〉
27,technology,[名] （科学）技術
28,research,[名] ①（学術）研究 [他] ②～を研究する
29,material,[名] ①材料，生地 ②資料，教材 [形] ③物質的な ④重大な
30,artificial,[形] 人工的な
31,electric,[形] 電気の，電動の
32,invent,[他] ①～を発明する ②（話など）をでっち上げる
33,discover,[他] ①～を発見する ②（that SV）～を知る，～に気がつく ③（知るという意味で）～に出会う
34,develop,[自] ①発達する [他] ②～を発達させる ③～を開発する ④（話，考え）を発展させる ⑤（病気）にかかる
35,skill,[名] 技術，力
36,ability,[名] 能力
37,talent,[名] 才能
38,effort,[名] 努力
39,practice,[名] ①練習 ②実践 ③慣習 [他] ④～を練習する ⑤～を実践する
40,achieve,[他] ～を達成する
41,manage,[他] ①（to do）何とかして～する ②～を経営する，管理する
42,improve,[他] ①～を改善する，磨く [自] ②よくなる
43,produce,[他] ①～を生産する，産出する ②（見せるために）～を取り出す [名] ③農作物〈不可算〉
44,create,[他] ①～を創造する ②～を引き起こす
45,establish,[他] ①～を確立する，定着させる ②～を設立する
46,form,[他] ①～を形成する [名] ②形態 ③書式
47,save,[他] ①（時間，手間）を省く ②～を貯金する ③（命など）を救う [前] ④～を除いて（＝except）
48,medicine,[名] ①（for ～）（～の）薬 ②医学（＝medical science）
49,patient,[名] ①患者 [形] ②忍耐強い
50,condition,[名] ①状態，容態 ②（通例 ―s）（周囲の）状況，条件
51,medical,[形] ①医療の ②医学の
52,stress,[名] ①ストレス ②（on ～）（～に対する）強調 [他] ③～を強調する
53,suffer,[自] ①（from ～）（病気などで）苦しむ [他] ②（苦痛，損害）を経験する
54,exercise,[名] ①運動 ②（―s）練習 [自] ③運動する [他] ④～を行使する
55,breathe,[自] 呼吸する，息をする
56,thirsty,[形] ①のどが渇いた ②（for ～）（～を）切望して
57,physical,[形] ①身体的な ②物理的な
58,fever,[名] ①（体温の）熱 ②熱狂
59,strength,[名] ①（physical ―）体力 ②力
60,tear,[名] ①（通例 ―s）涙〈可算〉 [他] ②（up）～を引き裂く
61,taste,[自] ①～の味がする [他] ②～の味をみる [名] ③味 ④好み
62,rule,[名] ①規則 [他] ②～を支配する
63,role,[名] 役割
64,habit,[名] 習慣，癖
65,custom,[名] ①習慣 ②（―s）税関、関税
66,tradition,[名] 伝統
67,society,[名] ①社会〈不可算〉 ②（ある具体的な）社会〈可算〉 ③（one's ―）～と同席すること ④協会
68,law,[名] ①（the ―）（集合的に）法律，国法 ②（個々の）法律 ③（科学などの）法則
69,ancestor,[名] 祖先
70,population,[名] ①人口，個体数 ②（一定の地域に住む）住民
71,native,[形] ①母国の，その土地の [名] ②（ある土地の）生まれの人
72,abroad,[副] 海外へ，海外で
73,local,[形] ①その土地の，地元の ②地方の [名] ③地元の人
74,survey,[名] ①調査〈可算〉 [他] ②～を調査する
75,value,[名] ①価値 ②（―s）価値観 ③お買い得品〈不可算〉 [他] ④～を重んじる
76,treasure,[名] ①財宝，宝 ②大事な物［人］ [他] ③（思い出など）を大事にする
77,fashion,[名] ①流行 ②流儀，やり方 [他] ③（手などで）～を作る
78,public,[名] ①（the ―）大衆 [形] ②公共の，公の
79,evidence,[名] 証拠〈不可算〉
80,vote,[名] ①投票（数)[自] ②投票する
81,government,[名] 政府
82,nation,[名] ①国家 ②（the ―)国民
83,capital,[名] ①首都 ②資本 [形] ③重大な，死に値する
84,state,[名] ①州 ②状態 ③国家 [他] ④（意見，情報）を述べる
85,political,[形] 政治的な，政治の
86,price,[名] ①価格 ②（―s）物価 ③代償
87,sum,[名] ①（修飾語を伴って）金額 ②合計 ③（簡単な）計算 [他] ④（up）～を要約する
88,budget,[名] ①予算 [形] ②安い
89,fee,[名] ①（会費，遊園地などの）料金 ②（専門職への）謝礼
90,fare,[名] 運賃
91,bill,[名] ①勘定 ②請求書 ③〈米〉紙幣 ④法案
92,trade,[名] ①貿易 ②（the ～ trade）～業 ③商売 [他] ④～を交換する
93,wealth,[名] ①富，財産〈不可算〉 ②（a ― of ～）豊富な～
94,economy,[名] ①経済 ②節約
95,cost,[他] ①（費用）を要する，～がかかる ②～を犠牲にする [名] ③費用，犠牲
96,company,[名] ①会社 ②（one's ―）一緒にいること ③仲間 ④来客
97,task,[名] 仕事〈可算〉
98,earn,[他] ①（金）を稼ぐ，もうける ②（評判など）を得る
99,hurt,[自] ①（身体の部位が）痛む [他] ②（身体，感情）を傷つける
100,injure,[他] ①～を痛める ②～をけがさせる
101,damage,[他] ①～に損害を与える [名] ②損害，被害〈不可算〉 ③（―s）賠償金
102,destroy,[他] ①～を（完全に）破壊する ②～を殺す，全滅させる
103,ruin,[他] ①～を台無しにする ②～を破滅させる [名] ③（―s）廃墟，荒廃
104,danger,[名] 危険
105,neighbor,[名] ①近所の人 ②（a next-door ―）隣の人
106,audience,[名] 聴衆，観客
107,crowd,[名] 群衆
108,author,[名] ①著者 ②（主に文学作品の）作家
109,staff,[名] （集合的に）職員，従業員
110,clerk,[名] ①〈米〉店員 ②事務員，社員
111,customer,[名] 客
112,passenger,[名] 乗客
113,elderly,[形] ①年配の ②（the ―）（総称的に）年配の人々
114,female,[形] ①女性の ②（動物）雌の [名] ③女性，雌
115,head,[自] ①向かう [他] ②～を率いる
116,follow,[他] ①～の後について行く，～に続く ②（忠告，方針など）に従う
117,wander,[自] 歩き回る，さまよう
118,travel,[自] ①旅行する，移動する ②（光，音などが）進む
119,pass,[他] ①～を通り過ぎる ②～を抜く ③（試験）に受かる ④（（人）A）（人）に（A を）渡す [自] ⑤（時が）過ぎる [名] ⑥通行証
120,likely,[形] ①（to do）～しそうだ，可能性が高い [副] ②おそらく
121,natural,[形] ①当然の ②自然の ③生まれながらの
122,certain,[形] ①確かな ②（名詞の前で）ある～
123,probably,[副] おそらく
124,face,[他] ①～に直面する ②〈方向〉～向きである [名] ③顔，体面、文字盤
125,avoid,[他] ～を避ける
126,solve,[他] ～を解決する
127,trouble,[名] ①問題，ごたごた（通例〈不可算〉)[他] ②～を困らせる
128,issue,[名] ①問題 ②（雑誌の）号 [他] ③（切手など）を発行する
129,cheer,[他] ①（on）～に声援を送る ②（up）～を励ます [名] ③声援，励まし ④（―s）乾杯
130,encourage,[他] ①（A to do）（A）に（～するよう）促す，奨励する ②～を励ます
131,support,[他] ①～を支持する ②（家族など）を養う ③（理論など）を立証する [名] ④支持，支援<不可算>
132,prevent,[他] ①（A from B）（AがBするの）を妨げる ②～を予防する
133,deny,[他] ①～を否定する ②〈SVO1O2〉（O1）に（O2を）与えない
134,enable,[他] （A to do）（A）に［が］（～することを）可能にする
135,succeed,[自] ①（in ～）（～に）成功する ②（to ～）（家業などを）継ぐ
136,miss,[他] ①～を逃す ②～を休む ③～を恋しく思う
137,fail,[自] ①（in［at］～）（～に）失敗する ②（to do）～できない [他] ③（試験）に落ちる ④（人）に役に立たない
138,mistake,[名] ①間違い [他] ②（A for B）（A）を（B と）間違える
139,check,[他] ①～を調べる ②～を阻止する [名] ③小切手 ④勘定書 ⑤検査，点検 ⑥抑制
140,hide,[他] ①～を隠す [自] ②隠れる
141,draw,[他] ①（線で絵など）を描く ②（注意）を引く ③～を引っ張る，集める
142,join,[他] ①（クラブ，団体など）に加わる ②～をつなぐ ③（食事などを）～とともにする [自] ④（議論，活動などに）参加する
143,throw,[他] ①～を投げる ②（away［out］）～を捨てる ③（パーティなど）を催す [名] ④投げること
144,operate,[他] ①（機械など）を操作する [自] ②手術する ③（機械などが）作動する，（組織が）運営される
145,repair,[他] ①～を修理する ②～を修復する [名] ③修理，修復
146,sew,[他] ①～を縫う ②（on）（ボタンなど）を縫いつける
147,raise,[他] ①～を上げる ②（子ども，作物）を育てる ③（お金，資金）を集める ④（問題）を提起する [名]⑤賃上げ，昇給
148,serve,[他] ①（飲食物）を出す ②～に役立つ [自] ③役立つ
149,pour,[他] ①～を注ぐ [自] ②降りそそぐ
150,spill,[他] ①～をこぼす [名] ②（石油などの）流出
151,pretend,[自] （to do / that SV）（～する/ ～である）ふりをする
152,behave,[自] ふるまう
153,bear,[他] ①（can ―）～に耐える ②～を持つ、運ぶ ③～を産む
154,explore,[他] ①～を探検する，（街など）を探索する ②（問題など）を探る
155,happen,[自] ①（to ～）（～に）起こる ②（to do）偶然～する
156,appear,[自] ①現れる ②（to be ～）～のように思える
157,remain,[自] ①～のままでいる ②残る
158,survive,[自] ①生き残る [他] ②～から生き延びる，～の後も存続する
159,belong,[自] （to ～）（～に）所属している
160,represent,[他] ①～を代表する ②（記号などが）を表す ③～を表現する
161,base,[他] ①～の基礎を置く [名] ②基礎（の部分），基盤 ③基地
162,include,[他] ～を含む
163,contain,[他] ①～を含む ②（主に否定で）～を抑える
164,own,[形] （所有格の後で）①自分自身の ②（名詞的に）自分自身のもの [他] ③～を所有している
165,share,[他] ①～を共有する ②（考えなど）を（人に）伝える [名] ③共有 ④分け前
166,collect,[他] ①（同種の物）を集める ②～を徴収する，回収する
167,gather,[他] ①～を集める [自] ②集まる
168,history,[名] ①歴史 ②履歴，前歴，病歴
169,subject,[名] ①科目 ②話題 ③被験者 [形] ④（be ― to ～）～を受けやすい
170,education,[名] 教育
171,knowledge,[名] 知識，知っていること
172,uniform,[名] ①制服 [形] ②同一の，一定の
173,grade,[名] ①（小，中，高の）学年 ②等級 ③成績
174,senior,[名] ①（高校，大学の）最上級生 [形] ②高齢者の ③（地位が）上位の
175,graduate,[自] （from ～）（～を）卒業する
176,decide,[他] ①（to do）（～すること）を決定する，決心する [自] ②（on ～）（～を）決める
177,judge,[他] ①～を判断する [名] ②裁判官，審判（員）
178,quit,[他] ～を（完全に）やめる
179,retire,[自] （from ～）（～を）引退する，退職する
180,review,[名] ①再検討 ②（新聞などの）批評 ③復習
181,choose,[他] ①～を選ぶ [自] ②選ぶ
182,imagine,[他] ～を想像する
183,guess,[他] ①～を推測する [名] ②推測
184,expect,[他] ①～を予期する ②（A of［from］ B）（B にA）を期待する ③（be ―ing）（～を）身ごもっている（※③は[自]も可）
185,predict,[他] ～を予測する
186,remember,[他] ①（doing）（過去にしたこと）を覚えている ②（to do）（～すること）を覚えている ③（me to ～）（～に）よろしく伝える
187,remind,[他] ①（A of B）（A）に（B のことを）思い出させる ②（（人）to do）（人）に～するように念を押す
188,realize,[他] ①～を（はっきり）理解する ②（夢，計画など）を実現する
189,appreciate,[他] ①～を（正しく）理解する ②～のよさがわかる ③～に感謝する
190,accept,[他] ～を受け入れる
191,consider,[他] ①～をよく考える，考慮する ②（人の気持ち）を思いやる ③（A （to be［as］)B)（A）を（B と）みなす
192,mind,[自] ①気にする [名] ②精神，頭脳 ③（才能，知性のある）人
193,wonder,[他] ①（wh―節 / if SV）～かなと思う [自] ②（at ～）（～に）驚く
194,seem,[自] ～のように思われる
195,compare,"[他] ①（A with［to, and］ B）（A）を（B と）比較する ②（A to B）（A）を（B に）例える [自] ③（with［to］～）（～に）匹敵する"
196,concentrate,[自] ①（on ～）（～に）集中する [他] ②（A on B）（A）を（B に）集中させる
197,focus,[自] ①（on ～）（～に）焦点を当てる，力を注ぐ [名] ②焦点
198,allow,[他] ①（人が）～を許可する ②（物が）～を可能にする
199,admit,[他] ①～を認める ②～の入場［入学］を許可する
200,ground,[名] ①地面 ②根拠
201,pollution,[名] 汚染，公害〈不可算〉
202,sight,[名] ①光景 ②視力
203,view,[名] ①眺め，景色〈可算〉 ②見解，見方 [他] ③（A as B）（A）を（B と）みなす
204,landscape,[名] ①風景 ②（the ―）（政治，社会の）情勢
205,nature,[名] ①（無冠詞）自然 ②（しばしばthe ― of ～)（～の）性質
206,seed,[名] ①種 ②シード選手
207,plant,[名] ①植物 ②（大規模な）工場、発電所 [他] ③～を植える
208,bloom,[自] ①（花が）咲く [名] ②開花
209,harvest,[名] ①収穫 [他] ②～を収穫する ③（臓器，体液など）を摘出する
210,insect,[名] 昆虫
211,earthquake,[名] 地震
212,temperature,[名] ①温度，気温 ②体温
213,degree,[名] ①（温度などの）度 ②程度 ③学位
214,flood,[名] ①洪水 <可算>[他] ②～を水浸しにする
215,freeze,[自] ①凍る，凍りつく [他] ②～を凍らせる
216,reflect,[他] ①～を反射する ②～を反映する [自] ③（on ～）（～を）熟考する
217,polite,[形] （人，言動が）礼儀正しい
218,rude,[形] （言葉、行為が）無礼な，不作法な
219,lonely,[形] 孤独な
220,lazy,[形] ①（やる気がなく）怠惰な，いい加減な ②（名詞の前で）くつろいだ
221,strict,[形] 厳しい
222,ugly,[形] 醜い
223,intelligent,[形] 知的な，賢い
224,silly,[形] ばかな
225,nervous,[形] ①あがって，落ち着かない ②神経質な，臆病な ③（身体の）神経の
226,awake,[形] 目を覚まして
227,alone,[副] ①1人で [形] ②（名詞＋alone）～だけ
228,attitude,[名] 態度，姿勢
229,character,[名] ①性格，特徴 ②登場人物 ③文字
230,characteristic,[名] ①特徴〈可算〉 [形] ②特有の，特徴的な
231,feature,[名] ①特徴 ②特集記事 [他] ③～を特集する
232,detail,[名] ①詳細 ②（建物などの）細部
233,advantage,[名] （over ～）（～に対する）利点
234,fault,[名] ①（ちょっとした）欠点，不具合〈可算〉 ②（one's ―）責任〈不可算〉 ③断層
235,quality,[名] ①質〈不可算〉 ②（通例―s）（人間の）資質
236,correct,[形] ①正確な，正しい [他] ②～を訂正する，矯正する
237,ideal,[形] ①理想的な，申し分のない [名] ②理想，理想的な姿
238,fair,[形] ①公正な，公平な [名] ②品評会，見本市
239,appropriate,[形] 適切な
240,famous,[形] ①（for one's ～）（～で）有名な ②（as ～）（～として）有名な
241,elementary,[形] 初歩的な，基本の
242,major,[形] ①主要な [自] ②（in ～）（～を）専攻する [名] ③専攻
243,matter,[自] ①重要である [名] ②（修飾語を伴い）物質 <不可算>③（―s）事態，状況
244,bright,[形] ①明るい ②（主に子どもや若者が）賢い
245,brilliant,[形] ①輝いている ②すばらしい
246,lively,[形] 生き生きとした
247,comfortable,[形] ①（物が）快適な ②（人が）心地よい
248,pleasant,[形] （人にとって）楽しい，心地よい
249,convenient,[形] ①都合がよい ②近くて便利がよい
250,FALSE,[形] ①誤った ②偽の
251,terrible,[形] ①ひどい ②苦手で
252,awful,[形] ひどい，不快な
253,thin,[形] ①薄い ②（病的に）やせた ③（毛が）薄い
254,tight,[形] ①引き締まった，きつい ②厳しい
255,loose,[形] ①ゆるい ②解き放たれた
256,raw,[形] 生の，加工されていない
257,empty,[形] ①空の，中身のない [他] ②～を空にする
258,smooth,[形] ①滑らかな ②順調な [他] ③（服のしわ）をのばす，（髪）をなでつける
259,direct,[形] ①直接的な [他] ②～を指揮［監督，演出］する ③（注意など）を向ける ④～に道を教える
260,familiar,[形] ①知られた ②（人が）（よく）知っている
261,similar,[形] （to ～）（～に）似た
262,differ,[自] 異なる
263,vary,[自] さまざまだ，変わる
264,specific,[形] ①特定の ②明確な，具体的な
265,common,[形] ①普及した，普通の ②（主に名詞の前で）共通の
266,unusual,[形] 珍しい
267,add,[他] ①～を加える [自] ②（to ～）（～を）増やす
268,increase,[自] ①増える [他] ②～を増やす [名] ③（in ～）（～の）増加
269,reduce,[他] ①～を減らす ②（A to B)A をB にする
270,divide,[他] ①～を分割する ②（by ～）（～によって）（数字）を割る
271,count,[他] ①～を数える [自]②数える ③重要である ④（on ～）（～を）（全面的に）当てにする
272,weigh,[自] ①～の重さがある [他] ②～の重さを量る ③～を（比較）検討する
273,quarter,[名] ①④分の①，15分，25セント ②（都市のある特定な）地域
274,lot,[名] ①（a ― of ～）多くの～ ②（副詞的に）（a ―）とても ③（one's）（～の）状況，運命 ④（何らかの目的を持つ）土地
275,pile,[名] ①積み重ね，山 ②多量 [他] ③～を積み重ねる
276,rate,[名] ①割合，速さ ②（ホテルなどの一定の）料金 [他] ③～を評価する
277,figure,[名] ①数字 ②人物 ③スタイル，体つき ④図 [自] ⑤目立つ
278,lack,[名] ①（（a）― of ～）（～の）不足 [他] ②～を欠いている
279,extra,[形] ①余分な，追加の，臨時の [名] ②余分な［追加された］もの
280,ready,[形] ①用意ができている ②（be ～ to do）進んで～する
281,prepare,[他] ①～の準備をする，用意をする [自] ②準備をする，用意をする [形] ③（be ―d to do）（～する）準備ができている
282,adjust,[自] ①（to ～）（～に）慣れる [他] ②～を調整する
283,apply,[自] ①（to ～）（～に）当てはまる ②（for ～）（～に）申し込む [他] ③～を当てはめる，応用する ④（薬，口紅など）を塗る
284,suit,[他] ①（人）に適している，好都合だ ②（服装，色が人）に似合う [名] ③訴訟（＝lawsuit)④スーツ
285,case,[名] ①場合 ②（the ―）事実 ③（犯罪）事件 ④症例 ⑤（make a ―）主張（する）
286,scene,[名] ①（劇，小説などの）場面 ②（事故）現場 ③（the ～ scene）～（業）界
287,chance,[名] ①（to do）（～する）機会 ②（of ～ / that SV）（～の/ ～する）可能性
288,opportunity,[名] （よい）機会，好機
289,experience,[名] ①経験 ②（個々の）体験 [他] ③～を経験する
290,time,[名] ①（漠然とした）時間 ②（ある長さの）時間 ③回数 ④倍 ⑤（―s）情勢，時代 ⑥（接続詞的に（the)next ―）次に～するとき
291,spring,[名] ①春 ②泉，温泉 [自] ③飛び出る，突然出現する
292,minute,[名] ①（時間の）分 ②（a ―）ちょっとの間 ③（―s）議事録 [形] ④とても小さい，細かい [接] ⑤（the ―）～するとすぐに
293,age,[名] ①年齢 ②時代 ③（―s）長い間 [自] ④高齢化する
294,generation,[名] ①世代 ②生み出すこと ③発電
295,anniversary,[名] 記念日
296,recently,[副] 最近，近ごろ
297,used,[助] ①（to ～）以前は～だった，よく～したものだ [形] ②（be ― to doing）（～することに）慣れている ③中古の
298,early,[副] ①（時間，時期が）早く，初期に ②（予定より）早く [形] ③早い，初期の
299,first,[形] ①第①の ②（for the ― time）初めて [副] ③初めて ④（文頭で）まず第①に（＝firstly)[名]⑤（at ―）最初のうちは
300,latest,[形] （the ―）最新の
301,modern,[形] ①現代の ②近代的な
302,ancient,[形] ①古代の ②古びた
303,spend,[他] ①（時間）を費やす ②（お金）を使う
304,delay,[他] ①～を遅らせる [名] ②遅延，延期
305,borrow,[他] ～を借りる
306,lend,[他] ①（無償で）～を貸す ②（銀行が利子をつけて）を貸す
307,rent,[他] ①～を借りる ②（A to B）（A）を（B に）賃貸しする [名] ③家賃，賃貸料，使用料
308,provide,[他] （A with B）（AにB）を供給する，与える
309,board,[名] ①（細長い）板 ②（幹部などによる）委員会 [他] ③～に乗る
310,garbage,[名] ごみ〈不可算〉
311,item,[名] ①品物 ②（集合名詞を数えるときに用いる）...点、個 ③（リストなどの）項目
312,wheel,[名] ①車輪 ②（the ―）ハンドル [他] ③（車輪のついたもの）を動かす
313,note,[名] ①メモ ②〈英〉紙幣 [他] ③（that SV）（～ということ）を指摘する ④～に注意を払う
314,present,[名] ①プレゼント ②現在 [形] ③現在の ④出席して，存在して [他] ⑤～を贈る，提示する
315,bargain,[名] ①買い得品<可算> [自] （商談などで）交渉する
316,stuff,[名] ①（漠然とした）もの [他] ②～を詰める
317,string,[名] ①ひも ②（a ― of ～）一連の～ ③（ギターなどの）弦
318,leisure,[名] ①余暇 ②（形容詞的に）余暇の
319,diet,[名] ①食事 ②規定食 ③（D―)（日本の）国会
320,furniture,[名] 家具〈不可算〉
321,refrigerator,[名] 冷蔵庫
322,traffic,[名] 交通（量）〈不可算〉
323,sell,[他] ①～を売る [自] ②売れる
324,pay,[他] ①（A for B)（B の代金としてA）を支払う [自] ②（for A)（A の代金を）支払う ③（仕事などが）割に合う [名] ④給料
325,wear,[他] ①～を身につけている ②～をすり減らす [自] ③すり減る
326,clothes,[名] 服〈複数扱い〉
327,marry,[他] ①～と結婚する [形] ②（―ied）結婚している
328,greet,[他] ～に挨拶する，出迎える
329,order,[他] ①～を注文する ②（医者や上官などが）～に命令する [名] ③注文 ④命令 ⑤順序 ⑥秩序
330,room,[名] ①部屋 ②余地，空間〈不可算〉
331,story,[名] 階
332,site,[名] ①用地 ②現場，場所 ③（史跡などの）跡
333,yard,[名] ①（主に〈米〉）庭 ②ヤード（＝約0.9 m）
334,bottom,[名] ①底 ②一番下，最下位 ③尻
335,line,[名] ①列 ②行，線 ③電話回線 ④セリフ [自] ⑤（―up）並ぶ
336,row,[名] ①列 [他] ②（ボート）をこぐ
337,background,[名] ①背景 ②経歴，生い立ち
338,direction,[名] ①方向，方角 ②（―s）道順 ③指示
339,culture,[名] ①文化 ②培養，養殖 ③教養 [他] ④～を耕す，栽培［養殖］する
340,art,[名] ①芸術 ②（何かを行う）技術 ③（liberal ―s）一般教養
341,cartoon,[名] 漫画
342,novel,[名] ①小説 [形] ②斬新な
343,instrument,[名] ①楽器 ②器具
344,tune,[名] ①曲 [自] ②（番組に）チャンネルを合わせる [他] ③～の調子を合わせる
345,sentence,[名] ①（ ①つ①つの）文 ②判決 [他] ③（A to B）（A）を（B）の刑にする
346,article,[名] ①記事 ②品物 ③冠詞 ④条項
347,passage,[名] ①（文章などの）一節 ②（時の）経過，移動
348,vocabulary,[名] 語彙
349,rumor,[名] うわさ
350,spell,[他] ①～をつづる [名] ②呪文 ③（天気などのある一続きの）期間
351,pronounce,[他] ①（単語など）を発音する ②（判決など）を宣告する，～と断言する
352,sign,[名] ①兆候，印 ②標識，看板，掲示 [他] ③～を署名する
353,mean,[他] ①～を意味する ②（to do）～するつもりだ [形] ③意地悪な
354,publish,[他] ①～を出版する ②（公式に結果など）を発表する
355,display,[他] ①～を展示する ②（実力など）を発揮する ③～を誇示する [名] ④展示，表現，誇示
356,trust,[他] ①～を信頼する [名] ②信頼，信用
357,depend,[自] ①（物，事が主語）（on ～）（～）次第である ②（人が主語）（on ～）（～に）頼っている
358,rely,[自] （on ～）（～に）頼る
359,pray,[自] 祈る
360,beg,[他] ①～を嘆願する [自] ②求める
361,prefer,[他] （A to B)（B よりA）を好む
362,weep,[自] しくしく泣く
363,hate,[他] ～を嫌う
364,worry,[自] ①心配をする [名] ②心配（事）
365,anxious,[形] ①（about ～）（～を）心配して ②（to do / for ～）（～を）切望して
366,satisfy,[他] ①～を満足させる ②（必要性，空腹など）を満たす
367,annoy,[他] ～を苛立たせる
368,bother,[他] ①～に面倒をかける ②（to do）わざわざ～する [名] ③面倒なもの
369,disturb,[他] ①（うるさくして）～に迷惑をかける ②（平和など）を乱す
370,frighten,[他] ～を怯えさせる
371,regret,[他] ①～を後悔する ②（to do）残念ながら～しないといけない [名] ③後悔
372,favor,[名] ①親切な行為 ②支持
373,interest,[名] ①関心 ②（―s）利益 ③（銀行などの）利子
374,pity,[名] ①残念なこと〈可算〉 ②哀れみ〈不可算〉
375,due,[形] ①（due to （名詞））（名詞）が原因で ②締め切りの ③到着［出産］予定の
376,reason,[名] ①理由 ②理性 [他] ③～を推理する [自] ④思考する，判断する
377,result,[名] ①結果 [自] ②（in ～）結果として（～に）なる ③（from ～）（～の）結果として生じる
378,effect,[名] 効果，影響，結果
379,influence,[名] ①影響（力)[他] ②～に影響を与える
380,end,[自]（end up doing）結局～することになる [名] ②端、終わり ③（最終的な）目的
381,cause,[他] ①～を引き起こす [名] ②原因
382,affect,[他] （直接的に）～に影響を与える，作用する
383,way,[名] ①方法 ②（in ～ way）（～の）点（で)③道 [副] ④はるかに
384,manner,[名] ①方法 ②流儀，態度 ③（―s）マナー
385,purpose,[名] 目的
386,sake,[名] ①（for ～）ため ②日本酒
387,right,[副] ①（場所や時の副詞（句）を修飾して）ちょうど [形] ②正しい，適切な ③右の [名] ④（to ～）（～の）権利
388,complete,[形] ①完全な [他] ②～を完成させる
389,hardly,[副] ①（程度）ほとんど～ない ②（― ever）めったに～ない
390,almost,[副] ほとんど
391,partly,[副] ある程度，部分的に
392,indeed,[副] ①（強調として）実際に，本当に ②（but を伴って）確かに～
393,even,[副] ①さえも ②（比較級の前で）さらに [形] ③偶数の ④均一の ⑤（数字が）ちょうどの
394,exactly,[副] ①正確に ②〈会話で〉そのとおり
395,gradually,[副] 徐々に
396,therefore,[副] それゆえに
397,instead,[副] ①代わりに ②（of ～）（～の）代わりに
398,until,[前] ①～まで（ずっと)[接] ②～まで（ずっと）
399,besides,[前] ①～に加えて [副] ②おまけに
400,except,[前] ①～を除いて ②（for ～）（～を）除いて
401,debate,[名] ①討論 [他] ②～を討論する
402,criticize,[他] ～を批判する
403,accuse,[他] ①～を非難する ②～を告訴する
404,insist,[自] ①（on ～）（～と）言い張る，（強く）主張する [他] ②～と主張する、を求める
405,object,[自] ①（to ～）（～に）反対する [名] ②物 ③目的 ④（嘲笑，欲望などの）対象
406,protest,[自] ①（against ～）（～に対して）抗議する [名] ②抗議
407,controversial,[形] 論争を招く，物議をかもす
408,bound,[形] ①（to do）きっと～（する，～する［である］に違いない)②（for ～）～行きで
409,bet,[他] ①（that SV）きっと～だと思う ②～を賭ける
410,demand,[他] ①～を（強く）要求する [名] ②（for ～）（～への）要求，需要
411,desire,[名] ①願望 [他] ②～を強く望む
412,praise,[他] ①（A for B）（A）を（B のことで）褒める，称える [名] ②賞賛
413,honor,[名] ①名誉，栄誉 [他] ②～を敬う
414,chat,[自] ①おしゃべりする [名] ②おしゃべり
415,refer,[自] （to ～）①（人が主語）（～に）言及する，参照する ②（物が主語）（～を）示す
416,mention,[他] ～について述べる，言及する
417,convey,[他] ①～を伝える ②（乗客，音，病気など）を運ぶ
418,demonstrate,[他] ～を（はっきり）示す，実演する
419,emphasize,[他] ～を強調する
420,exaggerate,[他] ①～を誇張する [自] ②誇張する，大げさに言う
421,reply,[自] ①（to ～）（～に）返事をする，答える [名] ②返事，答え
422,respond,[自] ①（to ～）（手紙や問いなどに）返答する ②（to ～）（～に）対応する，反応する
423,whisper,[自] ①ささやく [名] ②ささやき（声）
424,remark,[名] ①発言 [他] ②～と発言する
425,observe,[他] ①～を観察する ②（that SV）（気づいたことを）～と述べる ③（規則など）を遵守する ④（記念日など）を祝う
426,theory,[名] ①理論 ②（学）説
427,analysis,[名] 分析
428,phenomenon,[名] ①現象 ②特異なもの，天才（①②ともに<可算>）
429,device,[名] 装置<可算>
430,experiment,[名] ①実験 [自] ②実験する
431,chemical,[名] ①（通例 ―s）化学物質 [形] ②化学の
432,fuel,[名] ①燃料 [他] ②（感情など）を大きくする
433,nuclear,[形] 原子力の，核の
434,statistics,[名] ①統計（値）〈複数扱い〉 ②統計学〈不可算〉
435,pursue,[他] ①～を追求する，続ける ②～を追跡する
436,accomplish,[他] ～をやり遂げる
437,overcome,[他] ～を克服する
438,fulfill,[他] ①（義務，願望など）を果たす ②（必要など）を満たす
439,devote,[他] （A to B)（A）を（B に）ささげる
440,strive,[自] 努力する
441,aim,[自] ①狙う [他] ②（―ed at ～）～向けだ [名] ③狙い，目的
442,challenge,[名] ①難問，課題<可算> [他] ②～に異議を唱える
443,trial,[名] ①試み ②裁判 ③試練
444,dizzy,[形] めまいがして
445,appetite,[名] 食欲
446,starve,[自] ①餓死する ②（be ―ing）とてもお腹が空いている
447,mental,[形] ①精神の ②知力の
448,rest,[名] ①休憩 ②（the ―）残り [自] ③（横になったりして）休む ④（on ～）（～）次第だ [他] ⑤～を休ませる
449,surgery,[名] ①手術 ②外科（①②ともに〈不可算〉)
450,disease,[名] 病気
451,stomachache,[名] 腹痛
452,symptom,[名] ①（通例 ―s）症状 ②兆候
453,cancer,[名] ①がん ②（C―）かに座
454,ambulance,[名] 救急車
455,recover,[自] ①（from ～）（～から）回復する [他] ②（盗品など）を取り戻す
456,sore,[形] ①（のどや筋肉が）痛い ②（話題など）触れてほしくない，心が痛む
457,swell,[自] ①（手足などが）腫れる ②（風船，費用などが）膨らむ
458,cough,[自] ①咳をする [名] ②咳〈可算〉
459,bleed,[自] 出血する
460,faint,[形] ①（色，光などが）かすかな [自] ②気絶する [名] ③気絶
461,exhaust,[他] ①～を疲れ果てさせる ②～を使い果たす [名] ③排出，排気ガス
462,cure,[他] ①～を治療する [名] ②治療法
463,disabled,[形] ①障がいのある [名] ②（the ―）（集合的に）障がいのある人
464,stiff,[形] ①（筋肉などが）凝った，（動かすと）痛い ②堅い
465,muscle,[名] 筋肉
466,tongue,[名] ①舌 ②言語，言葉 ③（have a ～ tongue）話し方
467,sense,[名] ①感覚 ②分別 ③（言葉の）意味 [他] ④（何となく）～を感じる
468,sweat,[名] ①汗（通例〈不可算〉)[自] ②汗をかく
469,gender,[名] 性，性別
470,nationality,[名] 国籍
471,citizen,[名] ①市民 ②国民
472,civil,[形] ①（一般）市民の ②国内の ③礼儀正しい
473,racial,[形] 人種の，民族の
474,rural,[形] 田舎の
475,domestic,[形] ①国内の ②家庭内の
476,global,[形] （全）世界的な
477,suburb,[名] （通例the ―s）郊外
478,border,[名] ①国境（地帯），境界 [他] ②～を縁取る
479,burden,[名] 重荷，負担
480,impact,[名] ①（on ～）（～への）影響 ②（物体間の）衝撃 [自] ③（on ～）（～に）影響を及ぼす
481,status,[名] ①地位 ②（特定の時点の）状況
482,equal,[形] ①（to ～）（～に）等しい，平等な [他]②～に等しい
483,relationship,[名] ①関係 ②親密な関係 （①②ともに〈可算〉）
484,reputation,[名] （人，物の）評判〈可算〉
485,trend,[名] ①（世の中の）風潮，傾向 ②流行
486,service,[名] ①（政府あるいは企業による）事業，制度 ②（電車，バスの）便 ③サービス，接客〈不可算〉
487,religion,[名] 宗教
488,moral,[形] ①道徳的な [名] ②（物語の）教訓 ③（―s）道徳
489,standard,[名] ①基準，水準 [形] ②標準の
490,prosperity,[名] 繁栄
491,crisis,[名] 危機
492,prejudice,[名] ①偏見，先入観 [他] ②～に偏見をもたせる
493,discrimination,[名] ①差別 ②識別（①②ともに<不可算>）
494,charity,[名] ①慈善（事業）〈不可算〉 ②慈善団体〈可算〉 ③（形容詞的に）慈善のための
495,benefit,[名] ①恩恵 ②（―s）手当 [自] ③（from ～）（～から）恩恵を得る [他] ④～に恩恵を与える
496,welfare,[名] ①福祉 ②（健康なども含めた）幸福 ③生活保護（①②③いずれも<不可算>）
497,community,[名] （地域）社会，共同体（の人々）<可算>
498,individual,[名] ①個人，個体 [形] ②個人の，個々の
499,official,[名] ①役人，役員 [形] ②公式の
500,immigrant,[名] （外国からの）移民
501,volunteer,[名] ①ボランティア [自] ②（to do）（～することを）自発的に申し出る
502,interact,[自] （with～）（～と）交流する、相互作用する
503,contribute,[自] （to ～）①（～に）貢献する ②（～の）一因となる [他] ③（A to B）（A）を（B に）寄付する，提供する
504,abolish,[他] ～を廃止する
505,impose,[他] （A on B）（A）を（B に）課す，押しつける
506,access,[名] ①利用する権利 ②（場所への）接近方法
507,duty,[名] ①義務 ②関税
508,responsible,[形] ①（人が主語）責任がある ②（物が主語）原因となっている
509,policy,[名] ①政策 ②方針 ③保険契約，約款
510,elect,[他] ～を（選挙で）選ぶ
511,industry,[名] ①工業 ②（the ～ industry）産業，業界 ③勤勉
512,income,[名] 収入
513,profit,[名] 利益，利潤
514,tax,[名] 税金（〈米〉→〈可算〉 〈英〉→〈不可算〉）
515,expense,[名] ①費用，経費 ②（at the ― of ～）（～を）犠牲（にして）
516,debt,[名] 借金
517,deposit,[名] ①預金 ②頭金，保証金 ③埋蔵物 、堆積物 [他] ④～を預ける
518,charge,[名] ①料金 ②（主にin ―）責任，管理 ③（against ～）（～に対する）非難，告訴 [他] ④～を請求する ⑤～を告訴する ⑥～を充電する
519,wage,[名] ①賃金<可算> [他] ②（闘争，運動など）を行う
520,recession,[名] 不況，不景気
521,consume,[他] ～を消費する
522,waste,[他] ①～を浪費する [名] ②浪費，無駄 ③廃棄物〈不可算〉
523,invest,[他] ①（A in B）（A）を（B に）投資する ②（A with B）（A）に（B を）与える
524,import,[他] ①～を輸入する [名] ②輸入，輸入品
525,financial,[形] 財政的な，金銭的な
526,hire,[他] ①～を（一時的に）雇う ②（金を払って短期間）～を借りる
527,employ,[他] ①（人）を雇う ②（物，事）を用いる
528,resign,[自] ①（as ～）（～を）辞職する [他] ②（地位など）を辞める
529,qualify,[自] ①（for ～）（～の）資格がある ②（as ～）（～としての）資格を得る [他] ③～に資格を与える
530,assign,[他] ①～を割り当てる ②～を配属する
531,occupation,[名] ①職業〈可算〉 ②占有，占領〈不可算〉
532,career,[名] ①職業 ②経歴
533,profession,[名] ①（専門的な）職業 ②（the ―）同業者集団
534,unemployment,[名] ①失業 ②失業率（＝― rate），失業者数 （①②ともに〈不可算〉）
535,document,[名] ①書類，資料 [他] ②～を記録する
536,department,[名] ①（組織の）部門，課 ②（大学の）学科 ③（米国などの）省
537,branch,[名] ①支店，支局 ②（学問の）部門 ③枝
538,retail,[名] ①小売り〈不可算〉 [自] ②小売りされている
539,colleague,[名] （from ～）（～の）同僚
540,system,[名] ①制度，組織 ②体系 （①②ともに〈可算〉）
541,structure,[名] 構造
542,architecture,[名] 建築（様式）〈不可算〉
543,construction,[名] 建設〈不可算〉
544,function,[名] ①機能 [自] ②機能する
545,surface,[名] ①表面<可算> [自] ②表面化する
546,aspect,[名] 側面<可算>
547,edge,[名] ①端 ②（ナイフなどの）刃 ③優位
548,makeup,[名] ①（物の）構成、構造 ②（人の）資質 ③化粧 ④（― exam）追試験
549,consist,[自] ①（of ～）（～で）構成されている ②（in ～）（～に）ある
550,compose,[他] ①～を構成する，組み立てる ②～を作曲［作文］する ③～を落ち着かせる
551,attach,[他] ①～をくっつける，添付する ②～に愛着を持たせる
552,connect,[他] ①～をつなげる ②～を関連づける [自] ③つながる
553,relate,[他] ①（A to B）（A）を（B に）関連づける ②～を（順序立てて）話す [自] ③（to ～）（～に）理解を示す
554,associate,[他] ①（A with B）（A）を（B と）関連づける，（A）から（B を）連想する [自] ②（with ～)（～と）付き合う [名] ③同僚，共同経営者
555,stick,[他] ①～を貼り付ける ②（舌や脚）を出す [自] ③（to）（主義などを）守る，固執する
556,thief,[名] 泥棒
557,crime,[名] 犯罪
558,motive,[名] 動機
559,punish,[他] （（人）for ～）（人）を（～の理由で）罰する
560,violate,[他] ①（法律など）に違反する ②（権利など）を侵害する
561,legal,[形] ①合法の ②法律の，法的な
562,enemy,[名] ①敵<可算> ②（形容詞的に）敵の
563,conflict,[名] ①対立，紛争 ②葛藤 [自] ③（with ～）（～と）矛盾する
564,compete,[自] ①競争する ②（in ～）（競技などに）参加する
565,defeat,[他] ①（相手）を打ち負かす [名] ②敗北
566,victim,[名] 犠牲者
567,obstacle,[名]（to ～）（～に対する）障害〈可算〉
568,harm,[名] ①害〈不可算〉 [他] ②～に害を与える
569,invade,[他] ①（プライバシーなど）を侵害する ②（国など）に侵入する，～を侵略する
570,endanger,[他] ～を危険にさらす
571,interrupt,[他] ①～を中断する ②～を遮る [自] ③人の話を遮る
572,spoil,[他] ①～を台無しにする ②（子ども）を甘やかす
573,spectator,[名] 観客〈可算〉
574,relative,[名] ①（家族も含めて）親戚 [形] ②相対的な
575,departure,[名] ①出発 ②逸脱
576,destination,[名] ①目的地 ②（tourist ―）観光地，旅行先（①②ともに<可算>）
577,transportation,[名] 交通機関〈不可算〉
578,vehicle,[名] ①（エンジンの付いた）車両 ②（思想，意見の）伝達手段
579,baggage,[名]（旅行時の）手荷物<不可算>
580,via,[前] ①～経由で ②～によって
581,lead,[自] ①（to ～）（～に）至る [他] ②（a ～ life）（～な生活）を送る ③（A to do）A に～させる [名] ④鉛，（シャーペンなどの）芯
582,rise,[自] ①上がる，昇る [名] ②上昇
583,flow,[自] ①流れる [名] ②流れ
584,burst,[自] ①破裂する，爆発する ②（慣用句で）突然～し始める
585,melt,[自] ①（固体が）溶ける [他] ②～を溶かす
586,commute,[自] ①通勤[通学]する [名] ②通勤[通学]（距離）
587,accompany,[他] ①（人が主語）～と一緒に行く ②（物が主語）～に伴う
588,emit,[他]（ガス、熱、光など）を排出する
589,progress,[名] ①進歩，前進 〈不可算〉 [自] ②進歩する，進む
590,advance,[名] ①進歩，前進 〈可算〉 [自] ②（軍隊などが）前進する，進歩する [形] ③事前の
591,deal,[自] ①（with～）（～を）扱う [名] ②取り引き
592,handle,[他] ①～を扱う ②（手で）～を扱う，触れる [名] ③取っ手
593,treat,[他] ①（副詞を伴って）～を扱う ②（病人，病気）を治療する ③（A to B)（A)に（Bを）おごる [名] ④楽しみ
594,clue,[名] （to ～）（～の）手がかり
595,restrict,[他] ～を制限する
596,limit,[他] ①（数量，範囲）を制限する [名] ②制限
597,forbid,[他] ～を禁じる
598,ban,[名] ①禁止〈可算〉 [他] ②～を禁止する
599,refuse,[他] ①（to do）～するのを拒む ②～を断る
600,reject,[他] ①～を拒絶する ②（人）を拒む、除け者にする
601,persuade,[他] （A to do）（A）を説得して～させる
602,convince,[他] ①（A of B）（A）に（Bを）確信させる，（A that SV）（A）に（～を）確信させる ②（A to do）（A）を説得して～させる
603,inspire,[他] ①～を奮起させる，かき立てる ②（作品）に創作のヒントを与える
604,discourage,[他] ～のやる気をなくさせる，落胆させる
605,promote,[他] ①～を促進する ②（be［get］―d to ～）（～に）出世［昇進］する
606,boost,[他] ～を促進させる，増大させる
607,expand,[自] ①拡大する，膨張する [他] ②～を拡大する，膨張させる
608,extend,[他] ①～を延長する，広げる [自] ②伸びる，広がる
609,broaden,[他] ①～を広げる [自] ②広がる
610,spread,[他] ①～を広げる [自] ②広がる [名] ③広がり
611,tie,[他] ①（荷物など）を縛る ②（ひも，ネクタイなど）を結ぶ [名] ③ネクタイ（＝necktie)④（家族などの）きずな
612,fasten,[他] ①～を固定する ②（ボタンなど）をかける，留める
613,fix,[他] ①～を固定する ②～を修理する ③（主に 〈米〉）（食事，飲み物）を作る
614,install,[他] ①（機械など）を設置する ②～をインストールする
615,resist,[他] ①～を我慢する ②～に抵抗する
616,obey,[他] ～に従う
617,engage,[自] ①（in ～）（活動に）従事する ②（with ～）（理解のために、人や考えに）関与する [他] ③（関心、注意など）を引く
618,bump,[自] （into ～）①（～に）ぶつかる ②（～に）偶然出会う
619,bend,[自] ①身をかがめる [他] ②～を曲げる [名] ③（道の）カーブ
620,hug,[他] ①（人）を （愛情こめて）抱きしめる [名] ②抱擁
621,stare,[自] ①（at ～）（～を）じっと見つめる [名] ②凝視
622,gaze,[自] ①（at［on］～）（～を）見つめる [名] ②視線，凝視
623,glance,[自] ①ちらりと見る [名] ②ちらりと見ること
624,glimpse,[他] ①～がちらりと見える [名] ②ちらりと見えること
625,stretch,[他] ①（手足や体）を伸ばす，広げる [自] ②伸びる，広がる [名] ③（ひと続きの）広がり
626,stumble,[自] ①つまずく ②（across［into］～）（～に）偶然出会う
627,press,[他] ①～を（強く）押す ②～を押しつける，勧める [名] ③（the ―）報道機関，出版
628,drag,[他] ～を（ずるずると）引きずる
629,lean,[自] ①（against［on］～）（～に）寄りかかる ②（forward）身を乗り出す [形] ③（健康的に）痩せている
630,scratch,[他] ①～をひっかく，かく [名] ②ひっかき傷
631,bow,[自] ①おじぎする [名] ②おじぎ
632,nod,[自] ①うなずく ②（off）うたた寝する [名] ③うなずき，会釈
633,sigh,[自] ①ため息をつく [名] ②ため息
634,yawn,[自] ①あくびをする [名] ②あくび
635,sneeze,[自] くしゃみをする
636,bury,[他] ①～を埋める ②～を埋葬する
637,perform,[他] ①～を遂行する ②～を演じる，演奏する [自] ③（副詞を伴い）やる
638,adopt,[他] ①～を採用する ②～を養子にする、（動物など）を引き取る
639,escape,[自] ①（from ～）（～から）逃れる [他] ②～を避ける [名] ③逃亡
640,scatter,[他] ①～をまき散らす [自] ②（群衆などが）散る
641,fold,[他] ①～を折る ②（up）～を折りたたむ ③（腕）を組む [自] ④折りたためる
642,hang,[他] ①～を掛ける ②～を絞首刑にする [自] ③ぶら下がる
643,release,[他] ①～を解放する ②（映画など）を発表する，出す ③（ガスなど）を放出する [名] ④解放，発売
644,strike,[他] ①～を打つ ②（災害が）～を襲う ③（考えが人）に思い浮かぶ ④（A as B）（A）に（B という）印象を与える [名] ⑤ストライキ
645,beat,[他] ①～を打つ ②～に勝つ
646,protect,[他] ～を守る，保護する
647,twist,[他] ①～を（ねじ）曲げる ②（体の一部）をひねる，捻挫する
648,skip,[他] ～をサボる，抜かす
649,expose,[他] ①～をさらす ②（秘密，犯罪など）を暴露する
650,stir,[他] ①（液体など）を混ぜる ②（―up ）（感情など）を呼び覚ます
651,shake,[他] ①～を振る ②～を揺さぶる [自] ③（恐怖，寒さで）震える
652,polish,[他] ～を磨く
653,attend,[他] ①～に出席する，通う [自] ②（to ～）（～に）注意を向ける ③（to ～）（～を）世話する
654,imitate,[他] ～をまねる
655,conduct,[他] ①～を行う ②（電気，熱）を伝える [名] ③行為
656,struggle,[自] ①苦闘する，もがく [名] ②苦闘，もがくこと〈可算〉
657,burn,[自] ①焼ける [他] ②～を燃やす
658,cheat,[自] ①ごまかす [他] ②～をだます
659,participate,[自] （in ～）（～に）参加する
660,exist,[自] 存在する
661,arise,[自] 生じる
662,occur,[自] ①生じる ②（to （人））（考えなどが（人）に）思いつく
663,involve,[他] ①（be ―d in ～）（事件などに）巻き込まれる ②（be ―d in ～）（子育てなどに）参加する ③～を伴う
664,require,[他] ～を必要とする
665,counterpart,[名] （to ～）（～に）対応する［（～と）同等の］人［物，事］
666,advent,[名] ①到来 ②（the A―）キリストの降臨
667,maintain,[他] ①～を維持する ②（that SV）（～）を（強く）主張する
668,last,[自] ①（時間的に）続く ②（服などが）長持ちする [形] （the last ～）③この前の～，最後の～ ④もっとも～でない [名] ⑤（at ―）ついに
669,persist,[自] ①持続する，残る ②（in［with］～）（～を）貫く，（～に）固執する
670,examine,[他] ①～を調査する ②～を検査する
671,gain,[他] ①～を増す ②～を得る [名] ③利益，増加
672,obtain,[他] （資格，許可，情報など）を得る
673,acquire,[他] ①～を習得する ②～を獲得する ③～を買収する
674,search,[他] ①（A for B)（B（物）を求めてA（場所））を捜す [名] ②捜索，調査
675,logical,[形] 論理的な
676,scholarship,[名] ①奨学金〈可算〉 ②学問、（人文科学の）学識〈不可算〉
677,instruction,[名] （通例―s）指示
678,determine,[他] ①～を決める，～に大きく影響する ②（be ―d to do）～することを決意している ③（原因など）を特定する
679,conclude,[他] ①（that SV）～と結論を下す
680,distinguish,[他] ～を区別する
681,classify,[他] ～を分類する
682,estimate,[他] ①～を推定する，見積もる [名] ②（for ～）（～の）見積もり
683,organize,[他] ①（考えなど）をまとめる ②～を組織化する，取りまとめる
684,recognize,[他] ①（知り合いなど）が誰だかわかる ②（that SV）～を認識する
685,suppose,[他] ①（be ―d to do）～することになっている ②～と思う，仮定する
686,assume,[他] ①～と思い込む，決めつける ②～を引き受ける
687,care,[自] ①（否定文で）気にする ②世話をする [名] ③世話，心配
688,approve,[自] ①（of ～）（～を）認める，承認する [他] ②～を承認する
689,notice,[他] ①～に気がついている [名] ②通知，掲示，注意
690,aware,[形] 気づいている
691,conscious,[形] ①意識している，気づいている ②意識がある
692,concerned,[形] ①（with［about］～）（～に）関心を持っている，重視している ②（with ～）（～を）扱っている ③（about［for］～）（～を）懸念している
693,regard,[他] ①（A as B）（A）を（B と）みなす ②（副詞を伴い）～を評価する [名] ③（in ―）点 ④（―s）よろしくという挨拶
694,commit,[他] ①（oneself to ～ / be ―ed to ～）～に専念する ②（A to B)（A）を（B に）委ねる，充てる ③（犯罪など）を犯す
695,doubt,[他] ①～を疑う ②（that SV）～とは思わない [名] ③疑い
696,memorize,[他] ～を暗記する
697,forgive,[他] （人，過ち）を許す
698,grant,[他] ①（take ～ for granted）～を当然のことと思う ②（権利など）を与える [名] ③交付，補助金
699,recall,[他] ①～を思い出す ②（商品）を回収する，リコールする
700,outlook,[名] ①（人生，世界などに対する）考え方 ②（経済，天候などの）見通し
701,perspective,[名] ①（経験などで得られる）視点〈可算〉 ②（大局的な）見方，遠近法〈不可算〉
702,abandon,[他] ～を捨てる，放棄する
703,eliminate,[他] ①（不要な人，物，事）を排除する ②（be ―d）敗退する
704,rid,[他] （get ― of ～）①（不要品）を処分する ②～を取り除く
705,remove,[他] ①～を取り除く，取り去る ②（衣服）を脱ぐ
706,resource,[名] ①（―s）（石油などの）資源，（人，国の）財産 ②（―s）（困難に立ち向かう）力量 ③（万一の頼みの）手段
707,conservation,[名] ①保護 ②保存
708,preserve,[他] ①（自然など）を保護する ②（景観，平和，食品など）を保つ
709,disaster,[名] ①災害 ②大失敗
710,planet,[名] ①惑星 ②（the ―）地球
711,environment,[名] 環境，周囲（の状況）
712,horizon,[名] ①水平線，地平線 ②（―s）視野
713,layer,[名] （大気や地面などの）層 <可算>
714,agriculture,[名] 農業〈不可算〉
715,crop,[名] ①作物 ②収穫（高)[自] ③（up）生じる
716,soil,[名] 土，土壌
717,weed,[名] ①雑草，海草 [他] ②～の雑草を抜く
718,pollen,[名] 花粉
719,drown,[自] 溺れ死ぬ
720,leak,[自] ①漏れる [他] ②～を漏らす [名] ③漏れ
721,climate,[名] ①気候 ②（政治，経済，文化の）状況
722,atmosphere,[名] ①（the ―）大気 ②雰囲気 ③（the（Earth's）―）大気圏
723,forecast,[名] ①予報 [他] ②～を予報する
724,humid,[形] 湿気が多い
725,tropical,[形] 熱帯の
726,solar,[形] 太陽の
727,species,[名] 種〈単複同形〉
728,pesticide,[名] （虫や小動物などの）殺虫剤、駆除剤
729,extinct,[形] 絶滅した
730,feed,[他] ①～にえさを与える ②（子どもなど）を養う [自] ③（on ～）（～を）常食とする
731,energetic,[形] （人，運動などが）活発な
732,greedy,[形] 貪欲な
733,brave,[形] 勇敢な
734,generous,[形] 気前のよい
735,intellectual,[形] 知的な
736,curious,[形] ①（人が主語）好奇心が強い ②（物が主語）奇妙な，好奇心をそそる
737,imaginative,[形] 想像力豊かな
738,afford,[他] ①（can ―）～する余裕がある ②（SVO1O2）（O1に）O2を与える
739,eager,[形] 熱心な
740,selfish,[形] 利己的な，自分勝手な
741,aggressive,[形] ①攻撃的な ②積極的な
742,cruel,[形] 残酷な
743,addicted,[形] ～の中毒になっている
744,stubborn,[形] 頑固な
745,bold,[形] 大胆な
746,guilty,[形] ①申し訳なく思う，罪の意識がある ②（of ～）（～の）罪を犯した
747,innocent,[形] ①（of ～）（～に関して）無実の ②無邪気な
748,sincere,[形] ①（心から）誠実な ②（言動が）心からの，偽りのない
749,modest,[形] ①（人が）謙虚な ②（物が）大きくない，高くない
750,stupid,[形] ばかな
751,indifferent,[形] 無関心で
752,punctual,[形] （約束などの）時間を守る
753,coward,[名] 臆病者
754,precise,[形] 正確な，精密な
755,accurate,[形] 正確な
756,proper,[形] 適切な
757,tidy,[形] ①（主に〈英〉）きちんとした，整然とした [他] ②～を整頓する
758,efficient,[形] ①能率的な，無駄がない ②（人が）有能な
759,reasonable,[形] ①理にかなった ②（値段が）手ごろな
760,significant,[形] ①重要な、有意な ②（数量，増減などが）かなりの
761,precious,[形] ①（時間や命などが）貴重な ②（宝石などが）高価な
762,essential,[形] ①不可欠な [名] ②（―s）不可欠なもの
763,fundamental,[形] ①根本的な，基本的な [名] ②（―s）基本事項
764,outweigh,[他] （価値・重要性・影響力で）～に勝る
765,critical,[形] ①重大な，危機的な状況の ②批判的な
766,serious,[形] ①深刻な ②（人が）真剣な，本気の
767,complex,[形] ①複雑な [名] ②複合体（の建物)③強迫観念
768,complicated,[形] 複雑な、ややこしい
769,delicate,[形] ①繊細な，微妙な ②（人が）虚弱な
770,plain,[形] ①明白な，わかりやすい ②質素な [名] ③平野，原野
771,obvious,[形] 明白な
772,remarkable,[形] 注目すべき，すばらしい
773,outstanding,[形] 傑出した，目立った
774,various,[形] さまざまな
775,diversity,[名] 多様性
776,sort,[名] ①種（類)②（副詞的に）（― of）多少 [他] ③～を分類する
777,marvelous,[形] 驚くべき、素晴らしい
778,active,[形] 積極的な，活発な
779,positive,[形] ①前向きな，積極的な ②確信している
780,pure,[形] ①純粋な ②（水，空気が）澄んだ
781,steady,[形] 着実な，一定の
782,flexible,[形] 柔軟な，融通のきく
783,ripe,[形] 熟した
784,stable,[形] ①安定した [名] ②馬小屋，きゅう舎
785,negative,[形] 否定的な，否定の
786,vague,[形] 曖昧な，漠然とした
787,weird,[形] 変な
788,rough,[形] ①（表面が）粗い ②おおざっぱな ③（海，天候などが）荒れている
789,severe,[形] ①（天候，批判，罰則などが）厳しい ②（けが，問題などが）ひどい
790,passive,[形] 受動的な，消極的な
791,vain,[形] ①（in ―）無駄に ②（努力などが）無駄な ③うぬぼれの強い
792,fake,[形] ①偽の，偽造の [名]②偽造品
793,risky,[形] 危険な，危うい
794,odd,[形] ①奇妙な ②奇数の ③半端な，雑多な [名] ④〈英〉（the ―s）可能性
795,ignorant,[形] 無知の
796,contrast,[名] ①対比 [他] ②～を対比する [自]③対照をなす
797,valid,[形] ①（理由，主張などが）妥当な，正当な ②（切符などが）有効な
798,rare,[形] 珍しい
799,casual,[形] ①気楽な ②ふとした，何気ない
800,available,[形] ①手に入る，利用できる ②（人の予定が）空いている
801,practical,[形] ①（人，知識が）現実的な，実際の ②（発明，道具などが）実用的な，実践的な
802,abstract,[形] ①抽象的な [名] ②（論文などの）要旨
803,brand-new,[形] 新品の，真新しい
804,secondhand,[形] ①中古の ②間接的な
805,rapid,[形] ①急速な [名] ②（―s）急流
806,urgent,[形] 緊急の，差し迫った
807,shallow,[形] ①浅い ②（人，言動などが）浅はかな
808,sharp,[形] ①（変化，方向転換などが）急激な ②（言葉が）きつい ③（刃物，感覚，人などが）鋭い [副] ④（時刻が）きっちりで
809,calm,[形] ①落ち着いた [自] ②落ち着く [他] ③～を落ち着かせる
810,naked,[形] （人が）裸の，むき出しの
811,independent,[形] ①独立した，無所属の [名] ②無所属の人
812,tense,[形] ①張り詰めた ②（人が）緊張した [名] ③時制
813,narrow,[形] ①狭い [他] ②～を狭くする，細める
814,vacant,[形] 空いている，使用されていない
815,vivid,[形] ①（記憶，描写などが）鮮明な ②（色が）鮮明な
816,awkward,[形] ①ぎこちない ②気まずい ③扱いにくい
817,objective,[形] ①客観的な [名] ②目標
818,manual,[形] ①手を使う，身体を使う ②手動の [名] ③手引き書
819,alike,[形] ①似ている [副] ②（A and B ―）（A もB も）同様に
820,alien,[形] ①異質な ②外国（人）の、地球圏外の
821,tend,[自] （to do）～する傾向にある
822,deserve,[他] ～に値する
823,fragment,[名] 破片〈可算〉
824,range,[名] ①範囲 [自] ②（from A to B）（A からB の）範囲に及ぶ
825,scale,[名] ①規模 ②（―s）体重計 ③うろこ
826,unique,[形] ①（to ～）（～に）特有の，独自の ②独特の
827,particular,[形] ①ある特定の，特有の ②（about ～）（～の）好みがうるさい [名] ③（in ―）特に（＝particularly）
828,typical,[形] 典型的な
829,general,[形] ①一般的な，全体の [名] ②大将，将軍
830,ordinary,[形] 平凡な，ふつうの
831,account,[自] （for ～）①（割合を）占める ②（～の原因を）説明する [名] ③説明 ④口座
832,calculate,[他] ～を計算する
833,measure,[他] ①～を測る [自] ②～の寸法がある [名] ③（―s）手段
834,decline,[自] ①減る，衰退する [他] ②～を断る [名] ③衰退，減少
835,split,[他] ①～を割る ②～を分裂させる [自] ③分裂する [名] ④分裂，裂け目，割れ目
836,volume,[名] ①容積，体積 ②ボリューム，音量 ③（全集などの）1巻
837,proportion,[名] ①比率 ②部分 ③（―s）規模，大きさ
838,dozen,[名] ①ダース ②（―s of ～）数十の～
839,amount,[名] ①量 [自] （to ～）②（合計が）～に達する ③結局～になる
840,mass,[名] ①大量 ②（the ―es）大衆 ③かたまり ④質量 ⑤（M―）ミサ
841,shortage,[名] 不足〈可算〉
842,enormous,[形] 莫大な，巨大な
843,spare,[形] ①余分な，予備の [他] ②（時間やお金，労力）を割く ③～を惜しむ
844,arrange,[他] ①～を手配する、～の段取りをつける ②～を整理する
845,adapt,[自] ①適応する [他] ②～を適応させる
846,match,[他] ①～と調和する ②～に匹敵する [名] ③釣り合う人［物］，好敵手
847,fit,[他] ①（サイズが人）に合う [形] ②健康な ③（to do）（～するのに）適した
848,emergency,[名] ①緊急事態 ②（形容詞的に）緊急の
849,occasion,[名] ①場合 ②行事，祝い事
850,accidental,[形] 偶然の、偶発的な
851,current,[形] ①最新の，今の ②流通して [名] ③流れ，風潮
852,temporary,[形] 一時的な
853,permanent,[形] 永久的な
854,previous,[形] （時間，順序で）前の，以前の
855,former,[名] ①（the ―）前者 [形] ②元の、前の、旧
856,contemporary,[形] ①現代の ②同時代の [名] ③同時代の人
857,lately,[副] 最近
858,immediately,[副] ①すぐに ②直接に
859,deadline,[名]（for ～）（～の）締め切り <可算>
860,decade,[名] 10年
861,supply,[他] ①～を供給する [名] ②供給
862,replace,[他] ①～に取って代わる ②（A with B）（A）を（B に）取り替える
863,exchange,[他] ①～を交換する [名] ②交換
864,substitute,[他] ①（A for B)（B の）代わりに（A）を用いる [自] ②（for ～）（～の）代わりになる，代わりをする [形] ③代わりの [名] ④（for ～）（～の）代用品，代理人
865,submit,[他] ①（願書，辞表など）を提出する [自] ②（to ～）（～に）服従する
866,alternative,[名] ①（to ～）（～の）代わりのもの ②選択肢 [形] ③代わりの、既存のものとは違う
867,deliver,[他] ①～を配達する ②（演説など）をする
868,enclose,[他] ①～を同封する ②～を囲む，閉じ込める
869,envelope,[名] 封筒
870,trick,[名] ①（悪意のない）いたずら ②（巧妙な）手口，策略 ③芸，手品 ④（of ～）秘けつ [他] ⑤～をだます
871,load,[名] ①荷（物）〈可算〉 [他] ②（A with B）（A）に（B を）積む
872,content,[名] ①中身，内容 [形] ②（with ～）（～に）満足して
873,household,[名] ①（集合的に）所帯，家庭〈可算〉 [形] ②家庭の
874,good,[名] ①（―s）商品 ②利益 [形] ③（a ― many ～）かなりの
875,luxury,[名] ①高級（品），ぜいたく品 ②（形容詞的に）豪華な，ぜいたくな
876,credit,[名] ①（― card）クレジットカード ②功績，手柄 ③（大学の）単位 [他] ④～の功績を認める
877,questionnaire,[名] アンケート
878,reservation,[名] ①予約 ②慎重な姿勢
879,fuss,[名] 大騒ぎ
880,reward,[名] ①報酬，褒美 ，懸賞金 [他] ②～に褒美を与える，報いる
881,farewell,[名] 別れ（のあいさつ）
882,reception,[名] ①もてなし，歓迎会 ②（ホテルの）フロント ③受信状況
883,portion,[名] ①（食事の）1盛り ②（食堂などでの）1人前 ③一部
884,laundry,[名] ①〈米〉洗濯 ②〈米〉洗濯物 ③クリーニング店（＝a cleaner's）
885,nap,[名] ①昼寝，仮眠 [自] ②昼寝をする，仮眠をとる
886,wake,[自] ①目が覚める [他] ②（眠っている人）を起こす
887,vending machine,[名] 自動販売機
888,grocery,[名] ①食料雑貨店 ②（―ies）食料雑貨類
889,appointment,[名] ①（病院などの）予約，（面会の）約束 ②（役職などの）任命，指名
890,consult,[他] ①～に相談する ②（辞書）を引く [自] ③（with ～）（～に）相談する
891,register,[他] ①～を登録する，記録する [自] ②（for ～）（授業などに）登録する ③（ホテルなどで）記帳する [名] ④登録（票），登録簿
892,dye,[他] ①～を染める [名] ②染料
893,subscribe,[自] ①（to ～）（～を）定期購読する，加入している ②（主に否定文で）（to ～）（考えなどを）支持する
894,guarantee,[他] ①～を保証する [名] ②保証（期間）
895,wipe,[他] ①～を拭く ②～を一掃する，壊滅させる
896,sweep,[他] ①（床，地面）を掃く ②（風，波などが）～を押し流す
897,transfer,[自] ①（電車などを）乗り換える ②転勤［転校，移籍］する [他] ③（物，活動拠点など）を移す，～を転勤［転属］させる ④（銀行で）～を振り込む
898,divorce,[自] ①離婚する [他] ②～と離婚する [名] ③離婚
899,fate,[名] 運命，宿命
900,destiny,[名] 運命
901,flavor,[名] 風味，味〈可算〉
902,perfume,[名] ①香り ②香水
903,ingredient,[名] ①（料理などの）材料 ②（何かを達成するための）要因 ③成分
904,bitter,[形] ①苦い，つらい ②憤慨して
905,aisle,[名] 通路
906,track,[名] ①足跡，小道 ②（鉄道の）線路，プラットホーム [他] ③～を追跡する
907,district,[名] 地区
908,facility,[名] ①施設，設備 ②能力，器用さ
909,height,[名] ①高さ ②高い所 ③最盛期
910,distant,[形] 遠い
911,locate,[他] ①（be ―d）～に位置している，ある ②～の場所を見つける
912,occupy,[他] ～を占める
913,surround,[他] ～を取り囲む，包囲する
914,classical,[形] ①（音楽，バレエ，ダンスなどで）クラシックの ②古典的な
915,civilization,[名] 文明
916,heritage,[名] 遺産
917,script,[名] ①台本，脚本 ②（ある言語の）文字 ③（手書きの）文字
918,tale,[名] 話
919,literature,[名] ①文学 ②文献 （①②ともに〈不可算〉）
920,tragedy,[名] 悲劇〈可算〉
921,poetry,[名] 詩〈不可算〉
922,biography,[名] 伝記
923,term,[名] ①用語，言葉 ②（long［short］などを伴い）期間，学期，任期 ③（be on ～ ―s）（～の）間柄（である)④（―s）（契約などの）条件
924,proverb,[名] 諺
925,dialect,[名] 方言
926,fluent,[形] 流暢な
927,translate,[他] ①～を翻訳する [自] ②（into ～）（結果として）～に変わる
928,define,[他] ①～を定義する ②～を規定する
929,interpret,[他] ①～を解釈する ②～を通訳する [自] ③通訳する
930,quote,[他] ①～を引用する ②～に価格を提示する [名] ③引用文 ④提示価格，見積り
931,literally,[副] 文字どおりに
932,indicate,[他] ①（データなどが）～を示す ②～を指し示す
933,reveal,[他] ～を明らかにする，暴露する
934,announce,[他] ～を発表する
935,broadcast,[他] ①～を放送する [名] ②（１回の）放送
936,prove,[他] ①～を証明する ②（to be ～）～だとわかる
937,advertise,[他] ～を宣伝する
938,clarify,[他] ～を明らかにする
939,seek,[他] ①～を求める ②（to do）～しようと努める
940,entertain,[他] ①～を楽しませる ②～をもてなす
941,amuse,[他] ～を楽しませる
942,attract,[他] ～を引きつける，魅了する
943,fascinate,[他] ～を魅了する，～にとても興味をもたせる
944,absorb,[他] ①（be ―ed in ～）～に没頭する ②～を吸収する
945,fond,[他] ①（be ― of～）（～が）好きだ ②懐かしい
946,scare,[他] ～をおびえさせる
947,alarm,[他] ①～をぎょっとさせる [名] ②恐怖，不安
948,amaze,[他] ～を驚かせる
949,irritate,[他] （長期にわたって）～をいらいらさせる
950,upset,[他] ①～を動揺させる ②（均衡など）を乱す [形] ③動揺して，腹を立てて
951,puzzle,[他] ①～を当惑させる [名] ②難問，パズル
952,confuse,[他] ①～を混乱させる，困惑させる ②（A with［and］ B)（A）を（Bと）混同する
953,bore,[他] ～をうんざりさせる，退屈させる
954,frustrate,[他] ①～を欲求不満にさせる ②（計画など）を挫折させる
955,disappoint,[他] ～を失望させる
956,embarrass,[他] ～に恥ずかしい思いをさせる，困惑させる
957,ashamed,[形] 恥ずかしい
958,uneasy,[形] 不安な，胸騒ぎがする
959,hesitate,[自] ためらう
960,reluctant,[形] （to do）（～するのは）気が進まない
961,tremble,[自] 震える
962,boast,[自] ①自慢する [他] ②（場所や組織が）～を誇りにしている
963,jealous,[形] （of ～）（～に）嫉妬した
964,envy,[他] ①～を羨ましく思う [名] ②羨望
965,yell,[自] ①叫ぶ，大声をあげる [名] ②叫び，わめき声
966,respect,[他] ①（人）を尊敬する ②（物）を尊重する [名] ③（for ～）（～に対する）尊敬，尊重 ④（in ―）点
967,despair,[名] 絶望
968,emotion,[名] （特に強い）感情〈可算〉
969,sympathy,[名] ①同情 ②共感
970,shame,[名] ①残念なこと ②恥
971,confidence,[名] ①自信 ②（in ～）（～に対する）信頼
972,courage,[名] 勇気
973,passion,[名] 情熱
974,sorrow,[名] 悲しみ
975,ignore,[他] （人，物）を無視する
976,offend,[他] （人，物が）～を怒らせる，～の気分を害する
977,depress,[他] ～を憂うつにさせる，落ち込ませる
978,owe,[他] （A to B)①（A）は（B の）おかげだ ②（A）を（Bに）借りている
979,fear,[名] ①恐怖 [他] ②～を恐れる ③～を心配する
980,method,[名] 方法
981,medium,[名] ①（情報伝達）手段，媒体，メディア [形] ②中間の
982,means,[名] ①手段〈単複同形〉 ②（特定な表現で）財産，収入
983,extent,[名] 程度
984,extremely,[副] 極度に，非常に
985,total,[形] ①全体の ②（a ―）まったくの [名] ③合計
986,largely,[副] ①大部分は ②主に
987,moderate,[形] 適度な，節度のある
988,somewhat,[副] いくぶん
989,subtle,[形] かすかな
990,possibly,[副] ①ひょっとすると ②（cannot ―）どうしても（～できない）
991,eventually,[副] 最終的に，ついに
992,necessarily,[副] （not ―）必ずしも（～ない）
993,frankly,[副] 率直に
994,ironically,[副] 皮肉なことに
995,moreover,[副] その上
996,otherwise,[副] ①さもなければ ②ほかの点では ③ほかの方法で
997,regardless,[副] （of ～）（～とは）無関係に
998,worth,[前] ①～の価値がある ②（― doing）（～する）価値がある [名] ③価値，（～）相当
999,according to,[前] ①（調査，人の話など）によれば ②（能力など）に応じて
1000,despite,[前] ～にもかかわらず
1001,propose,[他] ①～を提案する [自] ②（to ～）（～に）結婚を申し込む
1002,dismiss,[他] ①（意見や考えなど）を退ける ②～を解雇する
1003,bless,[他] ～を祝福する
1004,glory,[名] 栄光
1005,compliment,[名] ①褒め言葉，賛辞 [他] ②～を褒める
1006,feast,[名] ①宴会，祝宴 ②とても楽しいこと，喜ばせるもの
1007,declare,[他] ①～を宣言する ②（税関や税務署で）～を申告する
1008,highlight,[他] ①～を強調する [名] ②呼び物，目玉商品，ハイライト
1009,imply,[他] ～をほのめかす，（暗に）～を意味する
1010,recite,[他] ～を暗唱する
1011,ray,[名] ①光線 ②放射線 ③（a ― of）一縷の，わずかな
1012,radiation,[名] 放射線
1013,laboratory,[名] 研究室，研究所
1014,oxygen,[名] 酸素
1015,molecule,[名] 分子
1016,compound,[名] ①化合物 [形] ②複合的な
1017,tissue,[名] ①組織 ②ティッシュペーパー
1018,cell,[名] ①細胞 ②電池 ③独房 （①②③いずれも〈可算〉)
1019,gene,[名] 遺伝子〈可算〉
1020,substance,[名] ①物質 ②本質，根拠 <不可算>
1021,solid,[形] ①固体の ②ぎっしり詰まった [名] ③固体
1022,satellite,[名] ①（月などの）衛星 ②人工衛星
1023,orbit,[名] ①軌道 [他] ②（惑星などが）～を周回する
1024,launch,[他] ①（ロケットなど）を打ち上げる ②（運動，事業など）を始める [名] ③打ち上げ，開始，発売
1025,attempt,[名] ①試み [他] ②（to do）（～しようと）試みる
1026,capacity,[名] ①能力 ②容量，収容力
1027,capable,[形] ①（of ～）（～する）力がある ②有能な
1028,attain,[他] ①（人が主語）～を達成する ②（物，人が主語）～に到達する
1029,desperate,[形] ①必死の ②（状況が）絶望的な
1030,dedicate,[他] （A to B）（A）を（B に）捧げる
1031,pain,[名] ①苦痛 ②（―s）苦労
1032,strain,[名] ①（心身の）負担，無理 [他] ②（目や筋肉など）を痛める
1033,remedy,[名] ①治療法，治療薬 ②改善策，対策（①②いずれも〈可算〉）
1034,pharmacy,[名] （調剤）薬局
1035,physician,[名] ①〈米〉医師 ②〈英〉内科医
1036,disorder,[名] （心身の）不調
1037,pregnant,[形] 妊娠した
1038,clinical,[形] 臨床の
1039,heal,[他] ①～を治す [自] ②治る
1040,infect,[他] （人，動物，地域）に感染させる，伝染する
1041,ankle,[名] 足首
1042,thumb,[名] 親指
1043,forehead,[名] 額，おでこ
1044,chin,[名] 下あご，あごの先端
1045,chest,[名] ①胸（部)②（大きな木の）箱，密閉容器
1046,breast,[名] （主に女性の）胸，乳房
1047,lung,[名] 肺〈可算〉
1048,organ,[名] ①臓器，(動植物の)器官 ②(楽器)オルガン（①②ともに<可算>）
1049,vision,[名] ①視力，視野 ②未来像 ③未来を見通す力，先見の明
1050,skeleton,[名] 骸骨，骨格
1051,sensation,[名] ①感覚 ②（説明し難い）感情
1052,code,[名] ①（服装などの）規定 ②暗号
1053,agenda,[名] 議題，協議事項
1054,liberty,[名] 自由
1055,committee,[名] 委員会
1056,humanity,[名] ①（集合的に）人類 ②（the ―ies）人文科学 ③人間性
1057,mankind,[名] （集合的に）人類
1058,authority,[名] ①権威 ②権力 ③（―ies）当局
1059,justice,[名] 正義
1060,insurance,[名] 保険〈不可算〉
1061,hardship,[名] （主に経済的）苦難
1062,poverty,[名] 貧困〈不可算〉
1063,chaos,[名] 大混乱，混沌〈不可算〉
1064,isolation,[名] 孤立，分離，孤独感
1065,region,[名] 地域
1066,proof,[名] ①証拠，証明〈不可算〉 [形] ②（複合語で）～を防ぐ，～に耐える
1067,warranty,[名] 保証
1068,principle,[名] ①原理，原則 ②主義，信念
1069,origin,[名] 起源
1070,setting,[名] ①環境，状況 ②（小説，劇，機械などの）設定，舞台（①②ともに<可算>）
1071,mission,[名] ①任務，使命 ②使節団 ③（主にキリスト教の）布教（団）
1072,project,[名] ①計画，企画 [他] ②（予算など）を見積もる ③～を投影する
1073,monument,[名] 記念碑，遺跡，史跡
1074,revolution,[名] 革命
1075,contract,[名] ①契約 [他] ②～を契約する ③（病気）に感染する
1076,infrastructure,[名] インフラ、基本的施設
1077,negotiate,[自] ①（with ～）（～と）交渉する [他] ②（交渉の上で，条件など）を取り決める
1078,cooperate,[自] （with ～）（～と）協力する，（in ～）（～を）協力する
1079,restore,[他] ①（治安など）を回復する ②（古い建物，絵など）を修復する
1080,found,[他] ～を創立する
1081,conservative,[形] 保守的な
1082,affair,[名] ①（―s）情勢 ②（スキャンダラスな）事件 ③情事，浮気
1083,agency,[名] ①（政府）機関 ②代理店
1084,council,[名] 議会
1085,kingdom,[名] ①（the ～ kingdom）～界，社会 ②王国
1086,republic,[名] 共和国
1087,empire,[名] 帝国
1088,aid,[名] 援助，救援物資〈不可算〉
1089,reform,[名] 改革
1090,minister,[名] ①大臣 ②牧師
1091,parliament,[名] 議会
1092,territory,[名] ①領土 ②（動物などの）縄張り，（学問などの）領域
1093,poll,[名] ①（政治関連の）世論調査 ②投票 [他] ③（票）を得る
1094,fortune,[名] ①財産 ②運
1095,property,[名] ①（主に集合的）財産，資産 ②（物質の）特性 ③（建物を含む）所有地
1096,fund,[名] ①（―s）資金 ②基金 [他] ③～に資金を出す
1097,stock,[名] ①株（式)②在庫品，蓄え
1098,labor,[名] ①労働 ②（集合的に）労働者 ③努力，陣痛
1099,overwork,[自] ①働きすぎる [他] ②～を働かせすぎる，酷使する [名] ③過労
1100,firm,[名] ①会社 [形] ②（土台，信念などが）固い ③（体が）引き締まった
1101,union,[名] ①労働組合 ②合併 ③連邦
1102,administration,[名] ①経営，運営 ②行政 ③政権 （①②は〈不可算〉）
1103,secretary,[名] ①秘書 ②（米国の各省の）長官，事務局長
1104,editor,[名] （新聞，雑誌などの）編集長，（書籍の）編集者
1105,client,[名] ①依頼人 ②（サービス業の）取引先
1106,recruit,[他] ①（団体・組織が）～を新規採用する [名] ②新兵，新人
1107,basis,[名] ①基礎，根拠 ②（on a ～ basis）（～を）基準（として）
1108,element,[名] ①（最も重要な）要素，（化学の）元素 ②（the ―s）自然の力，悪天候 ③（an ― of ～）少しの～
1109,constitute,[他] ①（主語が複数）～を構成する ②（主語が単数）～である
1110,unify,[他] ～を統一する
1111,combine,[他] ①（A with B)（A）を（B と）結びつける，同時に行う [自] ②結びつく
1112,unite,[自] ①団結する [他] ②～を団結させる
1113,link,[名] ①関連、つながり [他] ②（A to B）（A）を（Bに）関連づける
1114,relevant,[形] 関連のある，重要な
1115,murder,[名] ①殺人 ②（形容詞的に）殺人の [他] ③（計画的に）～を殺す
1116,arrest,[他] ①～を逮捕する [名] ②逮捕，（医学用語）停止
1117,prison,[名] 刑務所
1118,vice,[名] ①（売春，麻薬などの）犯罪〈不可算〉 ②悪徳 [形] ③副～
1119,witness,[名] ①目撃者，証人 ②証言 [他] ③～を目撃する
1120,bullet,[名] 弾丸
1121,sword,[名] 剣
1122,wound,[名] ①傷 [他] ②～を傷つける
1123,triumph,[名] ①勝利 [自] ②勝利する
1124,military,[形] 軍事的な
1125,strategy,[名] 戦略
1126,conquer,[他] ①（国や地域）を征服する ②（病気や恐怖など）を克服する
1127,defend,[他] （A from B）（B からA）を守る
1128,dominate,[他] ～を支配する
1129,rob,[他] ①（銀行など）を襲う ②（A of B）（A）から（B を）奪う
1130,deprive,[他] （A of B)（A）から（B を）奪う
1131,devastate,[他] ①（町など）を壊滅させる ②（人）を打ちのめす
1132,crash,[自] ①激突する ②（飛行機が）墜落する [名] ③激突，墜落
1133,hazard,[名] 危険（になり得るもの）<可算>
1134,debris,[名] 破片，残骸
1135,orphan,[名] 孤児
1136,slave,[名] ①奴隷 ②（to ～）（比喩的に）（～の）奴隷
1137,acquaintance,[名] ①知人 ②面識，（ちょっとした）知識
1138,merchant,[名] 商人
1139,resident,[名] ①住人，居住者 ②滞在者 [形] ③住んでいる
1140,crew,[名] ①（集合的に）乗組員 ②（取材などの）チーム
1141,chase,[他] ①～を追いかける [名] ②追跡
1142,proceed,[自] ①（順を追って）進む ②（to do）（さらに続けて）～する
1143,fade,[自] （色，記憶などが）薄れる
1144,dissolve,[自] ①溶ける [他] ②～を溶かす ③（議会など）を解散する
1145,float,[自] ①浮かぶ [他] ②～を浮かべる
1146,sink,[自] ①沈む [他] ②～を沈める [名] ③（台所の）流し
1147,bounce,[自] ①（ボールなどが）跳ねる [他] ②（宛先不明で）～を返送する
1148,transform,[他] ①～を（大幅に）変える [自] ②（大幅に）変形する，変身する
1149,shift,[名] ①（考え方の）転換 ②（勤務の）交替
1150,modify,[他] ～を修正する
1151,revise,[他] （制度，予測，論文など）を修正する，改正する
1152,enhance,[他] ～を向上させる
1153,lower,[他] ～を下げる
1154,voyage,[名] 航海，船旅
1155,confirm,[他] ①～を確認する ②～を裏付ける
1156,ensure,[他] ～を確実にする
1157,address,[他] ①～に取り組む ②～に呼びかける [名] ③演説 ④住所
1158,approach,[名] ①（to ～）（～への）取り組み方，接近 [他] ②～に取り組む，接近する
1159,resolve,[他] ①～を解決する ②（to do）（～する）決心をする
1160,settle,[他] ①（紛争など）を解決する ②～を置く，据える [自] ③定住する ④（on ～）（～を）決める
1161,enrich,[他] ～を豊かにする
1162,warn,[他] ①～に警告する [自] ②（of[against]～）（～に対して）警告する
1163,force,[他] ①～に強いる [名] ②力，武力
1164,appeal,[自] ①（to ～）（～に）訴える [名] ②魅力，人気 ③（for ～）（～に対する）訴え
1165,applause,[名] 拍手〈不可算〉
1166,leap,[自] ①跳ぶ [名] ②躍進，急増
1167,grab,[他] ①（ぐいっと）～をつかむ ②（急いで食事，睡眠）をとる
1168,seize,[他] ①～をつかむ ②（麻薬など）を押収する，（犯人）を捕らえる
1169,cast,[他] ①～を投げる ②（光など）を投げかける ③～に役を与える
1170,stun,[他] ①～を気絶させる ②～をぼう然とさせる
1171,illuminate,[他] ①～を照らす ②（問題など）を解明する
1172,uncover,[他] ～を明らかにする，暴く
1173,mend,[他] ～を修繕する
1174,react,[自] （to ～）（～に）反応する
1175,endure,[他] （長期にわたり）～に耐える
1176,bind,[他] ～を結びつける，縛る
1177,encounter,[他] ①～に偶然出会う ②（問題，反対など）に遭う [名] ③出会い
1178,trace,[他] ①～を捜し出す ②～の追跡調査をする [名] ③（微妙な）跡
1179,undergo,[他] ～を経験する
1180,seal,[他] ①～を密封する [名] ②（personal ―）印鑑，ハンコ
1181,incorporate,[他] ～を取り入れる
1182,emerge,[自] ①（隠れていたものが）現れる ②（国家などが）台頭する
1183,unfold,[自] ①展開する，はっきりしてくる [他] ②～を広げる
1184,derive,[自] ①（from ～）（～に）由来する [他] ②～を引き出す，得る
1185,generate,[他] （電気，利益など）を生み出す
1186,possess,[他] ～を所有している
1187,retain,[他] ～を保持する
1188,secure,[他] ①（場所，地位，契約など）を確保する [形] ②安全で，守られて
1189,capture,[他] ①～を捕らえる [名] ②捕獲，（敵地の）攻略
1190,monitor,[他] ①～を監視する [名] ②（コンピュータの）画面
1191,investigate,[他] ①（研究班などが）～を調査する ②（警察が）～を捜査する
1192,detect,[他] ～を探知する，（病気など）を発見する，（うそなど）を見抜く
1193,inquiry,[名] ①（into ～）（～の）調査 ②質問，問い合わせ
1194,specialize,[自] （in ～)①〈英〉（～を）専攻する ②（～を）専門にする
1195,semester,[名] （米，日本などの２学期制の）学期
1196,biology,[名] 生物学
1197,ecology,[名] 生態（学）
1198,philosophy,[名] ①（学問としての）哲学〈不可算〉 ②人生哲学，考え方〈可算〉
1199,geography,[名] 地理（学）
1200,institution,[名] ①（大学，病院などの）機関 ②（結婚などの）制度
1201,faculty,[名] ①（生まれ持った）能力 ②（大学の）学部 ③（大学の）全教員
1202,intermediate,[形] ①（授業・教材が）中級の ②中間の
1203,notion,[名] 考え
1204,concept,[名] 概念，考え
1205,meditation,[名] ①瞑想 ②熟考
1206,insight,[名] ①（into ～）（～に対する）洞察（力)②見識
1207,caution,[名] ①用心 ②警告 [他] ③～に注意［警告］を与える
1208,will,[名] ①意志 ②遺書
1209,option,[名] 選択肢，選択（の自由）
1210,prospect,[名] 見通し
1211,cherish,[他] ～を大切にする，胸に抱く
1212,intend,[他] （to do）～するつもりだ
1213,suspect,[他] ①（that SV）～ではないかと思う ②～に嫌疑をかける [名] ③容疑者
1214,identify,[他] ①～を特定する，《生物》～を同定する ②（A with B）（A）を（B と）同一視する [自] ③（with ～）（～と）一体感をもつ，（～に）なりきる
1215,permit,[他] ①～を許可する [名] ②許可証
1216,acknowledge,[他] ～を認める
1217,perceive,[他] ①（A as B）（A）を（B だと）認識する ②～を知覚する
1218,evaluate,[他] ～を（正しく）評価する
1219,cultivate,[他] ①～を耕す ②～を育む ③～を磨く
1220,shade,[名] ①日陰，（絵画，写真の）陰の部分，ブラインド ②（ーs）（意味などの）わずかな違い
1221,breeze,[名] そよ風
1222,desert,[名] ①砂漠 [他] ②～を見捨てる
1223,fog,[名] 霧
1224,moisture,[名] 湿気，水分
1225,damp,[形] 湿った，じめじめした
1226,path,[名] （小）道
1227,trail,[名] ①山道 ②跡 ③（a ― of destruction）（破壊の）爪跡
1228,stream,[名] ①小川 ②（a ― of ～）（～の）流れ
1229,tide,[名] ①潮（の干満），潮流 ②時流
1230,reef,[名] （岩や砂の）礁
1231,habitat,[名] 生息地
1232,volcano,[名] 火山
1233,mine,[名] ①鉱山 ②地雷（＝landmine）
1234,swallow,[名] ①ツバメ [他] ②～を飲み込む
1235,web,[名] ①（クモの）巣 ②インターネット（www＝the World Wide Web）
1236,mosquito,[名] 蚊
1237,cattle,[名] ウシ
1238,kitten,[名] 子ネコ
1239,organism,[名] 生物
1240,wildlife,[名] 野生生物
1241,beast,[名] 野獣
1242,ape,[名] 類人猿
1243,flock,[名] ①（鳥，羊の）群れ [自] ②群れる
1244,vein,[名] 静脈
1245,breed,[自] ①繁殖する [他] ②～を繁殖させる ③～を引き起こす [名] ④品種，血統
1246,reproduce,[自] ①繁殖する [他] ②～を繁殖させる ③（音，絵など）を再現する
1247,talkative,[形] おしゃべりの
1248,earnest,[形] ①真面目な [名] ②（in ―）真面目（に）
1249,diligent,[形] 勤勉な
1250,principal,[形] ①主要な [名] ②〈米〉校長
1251,prime,[形] ①（目標，容疑者などが）最重要な [名] ②素数
1252,definite,[形] 明確な
1253,evident,[形] 明らかな
1254,prominent,[形] ①（物が）目立った ②（人が）著名な，重要な
1255,marked,[形] （名詞の前で）際立った，著しい
1256,grace,[名] ①優美さ ②（say ―）（食事の前後の）感謝の祈り（をささげる）
1257,charm,[名] ①魅力 ②（a good ― luck ―）お守り，まじない
1258,fancy,[形] ①高級な [他] ②〈英〉～が欲しい，～したい ③～と思う
1259,rational,[形] 理性的な
1260,magnificent,[形] 壮大な，素晴らしい
1261,superior,[形] ①（be ― to ～）（～）より優れている [名] ②上役，上司
1262,loyal,[形] （to ～）（～に）忠実な
1263,horrible,[形] （物，天気などが）とてもひどい，ぞっとする
1264,miserable,[形] 悲惨な，とても不幸な
1265,dull,[形] ①退屈な ②切れ味が悪い ③（人，感覚などが）鈍い
1266,nasty,[形] （人，物，発言などが）不快な
1267,insane,[形] 正気でない
1268,ridiculous,[形] ばかげた
1269,rotten,[形] 腐った
1270,notorious,[形] （for ～）（～で）悪名高い
1271,evil,[形] ①（道徳的に）悪い [名] ②悪
1272,mess,[名] ①乱雑 [自] ②（with ～）（～を）からかう，ちょっかいを出す
1273,vast,[形] ①（地域，土地が）広大な ②（数量が）莫大な
1274,huge,[形] 巨大な
1275,tiny,[形] とても小さな
1276,sphere,[名] ①球体 ②領域，範囲
1277,strip,[名] ①細長い一片 [他] ②（罰として）～から奪う [自] ③裸になる
1278,vessel,[名] ①（血液などを通す）管 ②（大型の）船
1279,internal,[形] ①内部の，体内の ②国内の
1280,mobile,[形] ①流動的な [名] ②携帯電話
1281,steep,[形] ①（坂などが）険しい ②（増減が）急な，（価格などが）異常に高い
1282,intense,[形] （感情，競争などが）強烈な
1283,inevitable,[形] 避けられない，必然的な
1284,neutral,[形] ①中立の [名] ②中立
1285,brief,[形] ①手短な，簡潔な [名] ②要約
1286,bare,[形] ①むき出しの ②最低限の
1287,mutual,[形] ①（感情，行為が）相互の ②（友だち，趣味などが）共通の
1288,potential,[形] ①潜在的な [名] ②潜在能力，可能性〈不可算〉
1289,tough,[形] ①たくましい，頑強な ②骨の折れる，厳しい
1290,conventional,[形] 従来の，慣習的な
1291,supreme,[形] 最高の
1292,resemble,[他] ～に似ている
1293,contrary,[名] ①（on the ―）それどころか [副] ②（― to A）（A とは）反対に [形] ③（（名詞)to the ―）それとは反対の～
1294,category,[名] 範疇
1295,scope,[名] 範囲
1296,given,[形] ①（時間，量などが）定められた [前] ②～を考慮すると
1297,peculiar,[形] ①（to ～）（～に）固有の ②独特な，変な
1298,sufficient,[形] 十分な
1299,numerous,[形] 多くの
1300,substantial,[形] ①かなりの，たくさんの ②内容のある，重要な
1301,unit,[名] 単位
1302,diameter,[名] 直径
1303,arithmetic,[名] 算術
1304,quantity,[名] 量
1305,deficiency,[名] 欠乏，不足
1306,maximum,[名] 最大限
1307,bunch,[名] (花や鍵などの)束，(ブドウなどの)房
1308,lessen,[他] ～を減らす
1309,era,[名] 時代
1310,session,[名] ①（活動の）期間 ②（議会などの）会期 ③（ある活動の）集まり
1311,pause,[名] ①休止 [自] ②休止する
1312,annual,[形] ①年に1度の ②1年間の（予算，収入など）
1313,eternal,[形] （命や若さなど）永遠の
1314,initial,[形] ①最初の [名] ②頭文字，イニシャル
1315,prior,[形] ①（to ～）～より前の ②（時間・順序が）前の
1316,subsequent,[形] （to ～）（～に）続いて起こる
1317,meanwhile,[副] ①その間 ②（対比を示して）その一方で
1318,routine,[名] ①決まりきった仕事 [形] ②日常の
1319,souvenir,[名] 土産，記念品
1320,brick,[名] ①れんが ②〈英〉（おもちゃの）積み木
1321,pole,[名] ①棒，さお，柱 ②（天体，地球の）極
1322,mischief,[名] いたずら〈不可算〉
1323,superstition,[名] 迷信
1324,storage,[名] 貯蔵，保管〈不可算〉
1325,shelter,[名] ①避難（所)②住居
1326,garment,[名] 衣類
1327,canal,[名] 運河
1328,cabinet,[名] ①戸棚 ②（the C―）内閣
1329,incident,[名] （主に不快な）出来事
1330,circumstance,[名] （通例 ―s）状況，事情
1331,fetch,[他] （主に〈英〉）～を取って来る
1332,distribute,[他] ①～を分配する，配る ②（be ―d）分布している
1333,purchase,[他] ①～を購入する [名] ②購入（品）
1334,statue,[名] 像
1335,sculpture,[名] 彫刻
1336,myth,[名] ①（俗説という意味での）神話 ②（古代の）神話
1337,craft,[名] ①工芸（品)②（職人の）技術 ③船，乗り物（単複同形）
1338,journal,[名] ①雑誌，専門誌 ②（公的な）日誌，日記
1339,encyclopedia,[名] 百科事典
1340,heaven,[名] ①天国 ②（the ―s）空
1341,funeral,[名] 葬式
1342,soul,[名] ①魂 ②（慣用句あるいは否定文で）人
1343,priest,[名] 神父，僧侶，牧師，聖職者
1344,faith,[名] ①（主に宗教上の）信仰 ②信頼
1345,sacred,[形] 神聖な
1346,divine,[形] 神の
1347,Muslim,[名] イスラム教徒
1348,context,[名] ①文脈 ②状況
1349,singular,[形] ①単数の ②（褒めて）比類なき ③奇妙な
1350,command,[名] ①言語を操る力 ②命令 [他] ③～を集める ④～を見渡せる
1351,instance,[名] 例
1352,dialogue,[名] ①（本，劇，映画の中の）会話 ②対談，対話
1353,usage,[名] 語法
1354,vowel,[名] 母音
1355,pronoun,[名] 代名詞
1356,accent,[名] ①訛 ②アクセント
1357,outline,[動] ～の要点を述べる，～の輪郭を描く
1358,remote,[形] ①（地理的に）辺鄙な ②（時間，関係などが）遠い
1359,ambition,[名] （強い）願望，野望
1360,temper,[名] ①気性 ②（熟語で）平静（な気分）
1361,affection,[名] 愛情
1362,enthusiasm,[名] 情熱，熱意
1363,rage,[名] ①激怒 [自] ②（戦争，病気が）激しく続く，猛威をふるう
1364,incredible,[形] 信じられない
1365,chuckle,[自] ①くすくす笑う [名] ②くすくす笑うこと
1366,dare,[他] ①（to do）思い切って～する [助] ②（do）思い切って～する
1367,scream,[自] ①悲鳴を上げる [名] ②悲鳴
1368,soothe,[他] ①（人）をなだめる ②（痛みなど）をやわらげる
1369,tempt,[他] ～を誘惑する
1370,scold,[他] ～を叱る
1371,oppress,[他] ～を圧迫する，虐げる
1372,threaten,[他] ①～を脅かす ②（to do）～すると脅す ③～の恐れがある
1373,mourn,[他] ～を嘆く，悼む
1374,sacrifice,[他] ①～を犠牲にする [名] ②犠牲
1375,curse,[名] ①災いの元 ②呪い [他] ③～を呪う，ののしる
1376,stem,[自] ①（from ～）（～が）原因である [名] ②茎，幹，ワイングラスの脚
1377,trigger,[他] ①～のきっかけになる，～を誘発する [名] ②（銃の）引き金
1378,consequence,[名] ①結果 ②（of ―)重要性
1379,process,[名] ①過程 [他] ②～を加工する，処理する
1380,resort,[自] ①（to ～）（～に）訴える [名] ②行楽地 ③手段
1381,formula,[名] ①方法 ②秘けつ ③（数学，化学などの）式，公式
1382,procedure,[名] 手続き，手順
1383,extraordinary,[形] ①並外れた ②臨時の（会議など)③特命の（大使など）
1384,absolute,[形] 絶対的な
1385,overwhelming,[形] 圧倒的な
1386,altogether,[副] ①完全に ②全部で
1387,entire,[形] すべての
1388,tremendous,[形] すさまじい
1389,sheer,[形] ①（数量やサイズを強調して）とてつもない～の ②まったくの
1390,partial,[形] ①部分的な ②不公平な ③（to ～）（～が）大好きで
1391,barely,[副] ①かろうじて ②ほとんど～ない
1392,approximately,[副] （数量が）おおよそ，約
1393,frequently,[副] 頻繁に
1394,apparently,[副] ①見たところでは ②<口語>どうやら～らしい
1395,merely,[副] ①（主に名詞の前で）～にすぎない ②（動詞などの前で）単に
1396,nevertheless,[副] それにもかかわらず
1397,somehow,[副] ①何らかの方法で ②何らかの理由で，どういうわけか
1398,thus,[副] ①それゆえ（に)②このように
1399,afterward(s),[副] ①（文頭で）その後 ②（～afterward）～の後
1400,on behalf of ～,[熟] ①～を代表して ②～のため
1401,assert,[他] ～と断定する，～を主張する
1402,defy,[他] ①～に逆らう ②～を拒む
1403,condemn,[他] ①～を非難する ②～に (刑の)宣告をする ③～を強いる
1404,cite,[他] ～を引き合いに出す，引用する
1405,illustrate,[他] ①(例で)～を説明する，例証する ②～に挿絵を入れる，～を図解する
1406,refute,[他] ～を論駁する，～に反論する
1407,sue,[他] ～を訴える
1408,articulate,[他] ①(考えなど)をはっきり述べる [形] ②考えを明確に表現できる
1409,version,[名] ①(個人的な)解釈，意見 ②(製品などの)～版
1410,advocate,[名] ①提唱者，支持者 [他] ②～を主張する，支持する
1411,breakthrough,[名] 飛躍的進歩，大発見
1412,evolution,[名] 進化
1413,innovation,[名] 革新
1414,probe,[名] ①探査機 [他] ②～を調査する
1415,fluid,[名] ①流体 [形] ②流動的な，なめらかな
1416,particle,[名] ①粒子 ②(not a ― of A)(Aの)かけら (もない)
1417,gravity,[名] ①重力 ②重大さ
1418,hypothesis,[名] 仮説
1419,specimen,[名] ①標本 ②サンプル
1420,microbe,[名] 微生物
1421,poison,[名] 毒
1422,acid,[形] ①酸性の ②辛辣な
1423,toxic,[形] 有害な，有毒な
1424,endeavor,[名] ①努力，試み [他] ②～を (懸命に)努力する，試みる
1425,doom,[他] (be ―ed to ～)～の運命にある
1426,manufacture,[他] ①～を製造する [名] ②製造，製品
1427,yield,[他] ①～を産出する [自] ②(to ～)(～に)屈する [名] ③産出量
1428,duplicate,[他] ①～を複製する [名] ②複製品 [形] ③複製の
1429,assemble,[他] ①～を組み立てる [自] ②集まる
1430,mold,[他] ①～を (型に入れて)作る ②(人格，意見など)を形成する
1431,coin,[他] ①～を作り出す [名] ②硬貨
1432,therapy,[名] 治療 (法)
1433,injection,[名] 注射
1434,dose,[名] (１回分の)服用量
1435,sanitation,[名] 衛生
1436,germ,[名] 細菌，ばい菌〈可算〉
1437,tumor,[名] 腫瘍〈可算〉
1438,stroke,[名] (脳)卒中，(強い)発作
1439,agony,[名] 苦痛
1440,plague,[名] ①(大規模な)疫病，伝染病，災害 [他] ②～を苦しめる
1441,fatigue,[名] (ひどい)疲労〈不可算〉
1442,diagnosis,[名] 診断
1443,mortality,[名] ①(― rate)死亡率 ②死すべき運命
1444,nursing,[名] 看護
1445,chronic,[形] 慢性の
1446,immune,[形] 免疫の (ある)
1447,terminal,[形] ①(病気が)末期の [名] ②終着 [始発] 駅 (の建物)，ターミナルビル
1448,sound,[形] ①(身体・精神が)健全な ②(土台・理解などが)堅実な
1449,respiratory,[形] 呼吸の
1450,choke,[自] ①(on ～)(～で)息が詰まる，窒息する [他] ②～を窒息させる
1451,paralyze,[他] ～を麻痺させる
1452,prescribe,[他] ①(薬など)を処方する ②(行為など)を指示する
1453,digest,[他] ①～を消化する ②～を理解する [名] ③要約
1454,weary,[形] ①(極度に)疲れている ②うんざり [飽き飽き] している
1455,nourish,[他] ①～に栄養を与える ②(考えなど)を抱く
1456,appalling,[形] ぞっとするような
1457,flesh,[名] (人､動物の皮､骨に対する)肉
1458,limb,[名] 手足 (の①本)
1459,erect,[形] ①直立した [他] ②～を建てる
1460,spinal,[形] 脊椎の
1461,suck,[他] ～を吸う
1462,shrug,[他] ①(肩)をすくめる [自] ②肩をすくめる
1463,compensate,[他] (A for B)(A)に (Bを)補償する
1464,abuse,[名] ①虐待 ②乱用 [他] ③～を悪用する
1465,bias,[名] 偏見
1466,prestige,[名] 名声，威信
1467,privilege,[名] 特権
1468,feat,[名] 偉業
1469,dignity,[名] 威厳
1470,virtue,[名] ①美徳 ②(人，物の個々の)長所 ③(by ― of ～)～のために
1471,aristocracy,[名] (通例 the～)貴族 (階級，社会)
1472,rebel,[名] ①反逆者 [自] ②(against ～)(～に)反逆する，反抗する
1473,scheme,[名] ①〈英〉計画 ②陰謀
1474,convention,[名] ①会議，大会 ②慣習 ③条約
1475,conference,[名] (on ～)(～に関する)会議
1476,consent,[名] ①合意 [自] ②(to ～)(～に)合意する
1477,initiative,[名] ①新構想，新計画 ②主導権
1478,province,[名] ①(カナダなどの)州，(中国の)省 ②(the ―s)地方
1479,colony,[名] ①植民地 ②(アリなどの)群落
1480,frontier,[名] ①辺境，(主に〈英〉)国境 ②(the ―s)最前線
1481,treaty,[名] 条約
1482,tribe,[名] 部族，種族
1483,pension,[名] 年金〈可算〉
1484,stake,[名] ①(have a ― in ～)(～に)利害関係 (を持つ)②(at ―)危険 ③(―s)賭け金，配当金
1485,coverage,[名] ①報道 ②(保険の)補償 (範囲)
1486,obligation,[名] ①(社会に対する)責務 ②(個人に対する)恩義
1487,hygiene,[名] 衛生 (状態)，衛生学
1488,supervisor,[名] (人・活動などの)監督者
1489,norm,[名] ①(the ―)普通のこと ②(―s)規範
1490,patent,[名] ①特許 (権)[他] ②～の特許をとる [形] ③明白な，見えすいた
1491,primitive,[形] 原始的な，未開の
1492,ethnic,[形] 民族の，民族的な
1493,anonymous,[形] 匿名の
1494,metropolitan,[形] 大都市の
1495,entitled,[形] ①(to ～)(～の)権利がある ②～と題された
1496,demographic,[形] ①人口統計上の [名] ②(―群の人々から成る)年齢層
1497,donate,[他] ①～を寄付する ②(臓器など)を提供する
1498,flourish,[自] 栄える
1499,conform,[自] (to ～)(～に)合わせる
1500,comply,[自] (with ～)(～に)従う， 遵守する
1501,legislation,[名] (集合的に)法律〈不可算〉
1502,testimony,[名] (法廷などでの)証言
1503,jury,[名] 陪審 (員団)
1504,legitimate,[形] ①正当な ②合法の
1505,enforce,[他] ①～を施行する ②～を強制する
1506,regime,[名] 政権，政治体制
1507,bureaucracy,[名] ①官僚制度，官僚主義 ②(集合的に)官僚
1508,corruption,[名] 腐敗，汚職
1509,tyranny,[名] ①圧政，専制政治 ②暴虐 (な行為)
1510,sanction,[名] ①(―s)制裁 ②(公的な)認可
1511,candidate,[名] (for ～)(～の)候補 (者)，(～になりそうな)人 [物]
1512,senator,[名] 〈米〉(しばしば S―)上院議員
1513,ambassador,[名] 大使
1514,diplomat,[名] 外交官
1515,refugee,[名] 難民
1516,ally,[名] ①同盟国，協力者 [自] ②(with ～)(～と)提携する
1517,reign,[名] ①(君主などの)統治 (期間)[自] ②君臨する
1518,federal,[形] 連邦の
1519,communist,[形] ①共産主義(者)の [名] ②共産主義者
1520,municipal,[形] 市(営)の，地方自治の
1521,estate,[名] ①(全)財産 ②地所
1522,asset,[名] 財産，資産
1523,revenue,[名] (国などの)歳入，(事業などの)収益
1524,deficit,[名] (会社，国の)赤字
1525,commerce,[名] 商業
1526,output,[名] ①生産高 ②(エンジン，発電機などの)出力
1527,subsidy,[名] 補助金
1528,transaction,[名] 取り引き
1529,bankrupt,[形] 倒産した，破産した
1530,monetary,[形] ①貨幣の ②金銭的な
1531,corporation,[名] 企業，法人
1532,enterprise,[名] ①企業 ②(冒険的な)事業
1533,venture,[名] ①(ベンチャー)事業 [自] ②危険を冒して行く
1534,headquarters,[名] 本社，本部
1535,personnel,[名] ①(官庁，会社などの)全職員〈複数扱い〉 ②人事
1536,entrepreneur,[名] 起業家
1537,predecessor,[名] 前任者，以前あったもの
1538,toil,[自] ①(長時間)骨折って働く [名] ②骨の折れる仕事
1539,undertake,[他] (仕事など)を引き受ける，始める
1540,merge,[自] ①合併する [他] ②～を合併させる
1541,comprise,[他] ①～から成る ②(割合)を占める
1542,component,[名] 構成要素，成分，(車などの)部品
1543,framework,[名] ①枠組 ②骨組み
1544,prototype,[名] ①(of [for] ～)(～の)原型 ②試作品 ③典型
1545,dimension,[名] ①(問題などの)側面，要因，次元 ②(―s)寸法，大きさ
1546,margin,[名] ①余白，欄外 ②(票などの)差 ③端
1547,excel,[自] (in [at] ～)( ～において)優れている
1548,contradict,[他] ①～と矛盾する ②～に反論する
1549,consensus,[名] (意見や証言などの)合意，総意
1550,converse,[名] ①正反対 [形] ②正反対の [自] ③(with ～)(～と)会話する
1551,inequality,[名] 不平等
1552,equivalent,[形] ①等しい [名] ②同等のもの
1553,compatible,[形] (with ～)(～と)適合する，互換性がある
1554,identical,[形] 同一の，うり二つの
1555,correspond,[自] ①(to [with] ～)(～と)一致する ②(with ～)(～と)(メールや手紙で)やりとりをする
1556,random,[形] 無作為の，でたらめの
1557,warrior,[名] 戦士
1558,assault,[名] 襲撃，暴行
1559,troop,[名] (―s)軍隊
1560,shield,[名] (against ～)(～に対する)盾、防御物
1561,torture,[名] ①拷問 ②辛いこと [他] ③～を拷問にかける
1562,dispute,[名] ①論争，紛争 [他] ②～に異議を唱える
1563,combat,[名] ①戦闘 [他] ②～と戦う
1564,tactics,[名] 戦術
1565,quarrel,[自] ①(with ～)(～と)口論する [名] ②口論
1566,contend,[自] ①（with ～）（～と）戦う [他] ②（that SV）（～と）（強く）主張する
1567,slaughter,[他] ～を虐殺する，（食肉用に）殺す
1568,suppress,[他] ①（反乱，暴動）を鎮圧する ②（笑い，怒り）を抑える
1569,surrender,[自] ①（to ～）（～に）降伏する [他] ②～を引き渡す
1570,hostile,[形] ①敵意のある ②敵の ③（環境などが）厳しい
1571,wreck,[名] ①（乗り物，家の）残骸 ②（健康を損ね）ボロボロの人
1572,toll,[名] ①犠牲[死者]者（数），被害 ②（高速道路などの）通行料 ③通話料
1573,disrupt,[他] （活動の進行など）をかき乱す
1574,interfere,[自] （with ～）（～を）邪魔する，干渉する
1575,confront,[他] ①（困難などが人）に立ちふさがる ②（人が困難など）に直面する，立ち向かう
1576,explode,[自] ①爆発する ②爆発的に増加する
1577,collide,[自] （with ～）（～と）衝突する
1578,nephew,[名] 甥
1579,infant,[名] （主に歩く前の）幼児
1580,spouse,[名] 配偶者
1581,heir,[名] 相続人，後継者
1582,folk,[名] ①人々 [形] ②民間（起源）の
1583,peer,[名] ①（―s）同等の人，同輩 [自] ②（よく見えなくて）じっと見る
1584,recipient,[名] 受け取る人，被移植者
1585,navigate,[自] ①（旅などで）進路を決める [他] ②～を克服して進む，～を航行する
1586,flee,[自] 逃亡する
1587,retreat,[自] ①退く [名] ②撤退，退却
1588,crawl,[自] 這って進む，（渋滞などで）這うように進む
1589,hover,[自] ①（鳥などが）空中にとどまる ②うろつく，さまよう
1590,drift,[自] 漂う
1591,alter,[他] ～を変える
1592,convert,[他] ①（A into B）（A）を（B に）転換する ②～を改宗させる
1593,overtake,[他] ～を追い越す
1594,dispatch,[他]（使者・軍隊など）を派遣する，（物資など）を送る
1595,shrink,[自] ①縮む ②（数量が）減る [他] ③～を縮ませる，減らす
1596,wither,[自] しおれる，しぼむ
1597,descend,[自] 降下する
1598,accelerate,[他] ～を加速する
1599,fluctuate,[自] （数値，物価が）変動する
1600,distort,[他] ～を歪める
1601,crack,[自] ①割れる，砕ける ②（パンと）音を出す [他] ③～を割る，砕く [名] ④割れ目
1602,transition,[名] 移り変わり，推移
1603,game-changer,[名] 革命的なこと[人・物]
1604,reinforce,[他] ～を補強する
1605,foster,[他] ①（才能など）を育成する ②～の里親になる [形] ③里親の
1606,breakdown,[名] ①崩壊 ②故障 ③衰弱
1607,collapse,[自] ①崩壊する，倒れる [名] ②崩壊，倒れること
1608,render,[他] ①（SVOC）（O）を（C）にする ②（援助など）を与える
1609,impair,[他] （人間の機能など）を低下させる，損なう
1610,undermine,[他] ～を弱める，揺るがす
1611,cope,[自] （with～）（～に）対処する
1612,tackle,[他] ～に取り組む
1613,demolish,[他]（建物など）を取り壊す
1614,confine,[他] ①～を閉じ込める ②（活動など）を制限する
1615,designate,[他] （通例，受け身で）～を指定する
1616,regulate,[他] ①（主に規則によって）～を規制する ②（機器など）を調整する
1617,refrain,[自] （from ～）（～を）控える
1618,prohibit,[他] ～を禁じる
1619,halt,[他] ①～を止める [自] ②止まる [名] ③停止
1620,constraint,[名] 制約
1621,stimulate,[他] ～を刺激する
1622,animate,[他] ①～を活気づける ②～をアニメ化する
1623,spur,[他] ①～を駆り立てる，促す [名] ②拍車，刺激，動機
1624,urge,[他] ①～をせき立てる，～に強く勧める [名] ②（何かがしたい）衝動
1625,compel,[他] （A to do）（A）に（～することを）強制する
1626,blur,[他] ①～をぼやかす [自] ②ぼやける
1627,divert,[他] ①（川など）の方向を変える ②（注意など）をそらす
1628,reverse,[他] ①～を逆転する，覆す [名] ②逆 [形] ③逆の
1629,overshadow,[他] ～の影を薄くさせる
1630,worsen,[他] ～を悪化させる
1631,jeopardize,[他]（生命，経歴，制度など）を危険にさらす
1632,supplement,[他] ①（栄養，収入など）を補う [名] ②補充，栄養補助食品 ③付録
1633,pose,[他] ～をもたらす
1634,induce,[他] ①～を引き起こす ②((人)to do)(人)に～するよう説得する
1635,betray,[他] ①～を裏切る ②～を漏らす，（うっかり）さらけ出す
1636,bully,[他] ①～をいじめる [名] ②いじめっ子
1637,disregard,[他] ～を無視する
1638,squeeze,[他] ①（果汁など）を搾る ②（手，指で）～を強く押す
1639,rub,[他] ①～をこする [自] ②(against ～)( ～に)こすりつける
1640,smash,[他] ～を粉砕する
1641,insert,[他] ①～を差し込む ②（語句など）を書き込む
1642,detach,[他] （A from B)（A）を（B から）切り離す
1643,withdraw,[他] ①～を引っ込める ②（預金など）を引き出す [自] ③退く
1644,compile,[他] ～をまとめる，(辞書などを)編纂する
1645,browse,[自] ①拾い読みする [他] ②～を拾い読みする
1646,manipulate,[他] ～を操作する
1647,implement,[他] ①(契約，計画など)を実行する [名] ②(単純な)道具
1648,execute,[他] ①～を遂行する，実行する ②～を処刑する
1649,host,[他] ①(大会など)を主催する [名] ②(a ― of)多くの ③(客を接待する)主人(*女性も含む)，主催者，開催地，≪生物≫宿主
1650,mount,[他] ①～を据え付ける ②(馬，自転車)に乗る [自] ③増加する
1651,discharge,[他] ①～を排出する ②(職務，任地などから)～を解放する
1652,drain,[他] ①～の水を抜く ②～の水分を切る [自] ③(液体が)流出する，乾く
1653,soak,[他] ①～を浸す ②(up)(日光，考えなど)を吸収する
1654,dip,[他] ①～を（ちょっと）つける，浸す ②～を少し下げる
1655,suspend,[他] ①～を吊るす ②～を中断する ③～を停職［停学］にする
1656,extract,[他] ①～を取り出す，抽出する [名] ②抽出したもの，抜粋
1657,slap,[他] ～を平手打ちする
1658,embrace,[他] ①～を抱擁する ②(思想など)を受け入れる
1659,embark,[自] (on ～)(～に)着手する，乗り込む
1660,intervene,[自] (in ～)( ～に)介入する
1661,penetrate,[他] ①～に入り込む ②～を貫通する [自] ③貫通する，入る
1662,intrude,[自] (on～)(～に)立ち入る
1663,utilize,[他] ～を利用する
1664,embed,[他] (in...)(...に)～を埋め込む
1665,allocate,[他] ～を割り当てる
1666,coordinate,[他] (活動など)をうまく調整する
1667,blink,[自] まばたきする
1668,spin,[自] ①ぐるぐる回る [他] ②～を回す ③～を紡ぐ
1669,rotate,[自] ①回転する [他] ②～を回転させる
1670,scramble,[自] 急いで動く
1671,vanish,[自] 消える
1672,snap,[自] ①ポキンと折れる [他] ②～をポキンと折る、～をパチンと鳴らす
1673,rattle,[自] ①ガタガタ鳴る [他] ②～を鳴らす [名] ③ガラガラ
1674,cease,[他] (to do [doing])～しなくなる
1675,haste,[名] 急ぐこと〈不可算〉
1676,conceal,[他] ～を隠す
1677,disguise,[他] ①～を(偽装して)隠す ②(oneself as ～)～に変装する [名] ③変装
1678,deceive,[他] ～をだます
1679,neglect,[他] ①～を怠る，放置する ②(子ども)の世話をしない [名] ③放置
1680,evacuate,[他] (しばしば受動態で)～を避難させる
1681,coincide,[自] ①(with ～)(～と)同時に起きる ②(with ～)(～と)一致する
1682,prevail,[自] ①(考え，習慣などが)普及している ②(最後に人，考えが)優勢となる
1683,sustain,[他] (生命など)を維持する，支える
1684,linger,[自] ①(いつまでも)残る ②(on)長居する
1685,revive,[自] ①生き返る，よみがえる [他] ②～を生き返らせる
1686,resume,[他] ①～を再開する [自] ②再開する [名] ③〈米〉履歴書 ④概要，レジュメ
1687,outbreak,[名] 発生，勃発
1688,inspect,[他] ～を検査する
1689,expedition,[名] ①(研究・探求・戦争目的の)探検，遠征 ②探検隊
1690,enroll,[自] ①(in ～)(～に)入学する [他] ②(be ―ed)在籍している
1691,discipline,[他] ①(体罰などで)～を躾ける [名] ②躾，規律 ③(学問)分野
1692,tuition,[名] ①〈米〉授業料 ②(少人数での)授業
1693,ethic,[名] ①(―s)(社会や職業上の)倫理(観)②(伝統的に守られた)倫理
1694,psychology,[名] ①心理学 ②心理
1695,astronomy,[名] 天文学
1696,archaeologist,[名] 考古学者
1697,thesis,[名] ①論文 ([複数形]theses) ②(正式な議論などの)テーマ
1698,dormitory,[名] 寮
1699,grasp,[他] ①～を理解する ②～をつかむ [名] ③理解，つかむこと
1700,anticipate,[他] ①～を予想する ②～を期待する
1701,foresee,[他] ～を予知する
1702,infer,[他] (A from B)(B からA)を推測する
1703,deduce,[他] (A from B)(B からA)を推定する
1704,deem,[他] (Ｏ (to be)Ｃ)ＯをＣだと思う
1705,ponder,[他] ～を熟考する
1706,assure,[他] ～に保証する，確信させる
1707,assess,[他] ～を評価する，査定する
1708,concede,[他] (譲歩して)～を認める
1709,compromise,[自] ①妥協する [他] ②(主義など)を曲げる [名] ③妥協
1710,comprehend,[他] ～を(十分に)理解している
1711,reconcile,[他] ①(A with B)(A)を(B と)調和させる，和解させる ②(oneself to ～)(～を)仕方なく受け入れる
1712,instill,[他] (思想など)を(徐々に)教える，～を植え付ける
1713,alert,[形] ①油断のない，用心深い [名] ②(公的な)警告
1714,cognitive,[形] 認知の
1715,intuition,[名] 直感
1716,vow,[名] ①誓い [他] ②～を誓う
1717,nightmare,[名] ①悪夢 ②悪夢のようなこと
1718,stereotype,[名] 固定観念
1719,illusion,[名] 幻想
1720,criterion,[名] 基準
1721,ideology,[名] イデオロギー，(政治・経済的)思想
1722,tolerate,[他] ～を大目に見る，我慢する
1723,overlook,[他] ①～を(うっかり)見落とす ②(人の欠点やミスなど)を見逃す，大目に見る ③(場所が)～を見渡す
1724,conceive,[他] ①～を思い浮かべる ②～を妊娠する [自] ③(of ～)(～を)想像する
1725,misunderstand,[他] (人，人の言うこと)を誤解している
1726,keen,[形] ①(頭脳，感性などが)鋭い ②(be ― on ～)(～に)熱中して，好きで
1727,subjective,[形] 主観的な
1728,compulsory,[形] ①義務的な ②規定の
1729,relieve,[他] ①～を取り除く ②～を安心させる
1730,trim,[他]①～を刈り込む，切り取る [形] ②こぎれいな
1731,disposal,[名] ①処分，廃棄 ②(at one's ―)～を自由にする
1732,scent,[名] ①(花，果物の良い)香り ②(動物が残したそれ自身の)臭い
1733,grain,[名] ①穀物 ②粒，少量
1734,wheat,[名] 小麦〈不可算〉
1735,deforestation,[名] 森林伐採
1736,drought,[名] 干ばつ
1737,irrigation,[名] 灌漑
1738,spectacle,[名] ①(きわめて印象的な)光景 ②(大がかりな)見せ物
1739,altitude,[名] 標高，高度
1740,catastrophe,[名] 大災害，災難
1741,wilderness,[名] 荒野，野原
1742,decay,[名] ①腐敗 [自] ②腐敗する，衰える
1743,erosion,[名] 侵食
1744,flame,[名] 炎
1745,galaxy,[名] 銀河
1746,chill,[名] ①寒気 [他] ②～を冷やす
1747,thermal,[形] 熱の
1748,fertile,[形] 肥沃な，肥えた
1749,fossil,[形] ①化石化した [名] ②化石
1750,exploit,[他] ①(自然の力など)を利用する ②～を搾取する
1751,contaminate,[他] ～を汚染する
1752,erupt,[自] (火山などが)噴火する
1753,roar,[自] ①ほえる [名] ②うなり声，怒号，轟音
1754,inhabit,[他] ～に生息している，ある
1755,nurture,[他] ①～を育てる [名] ②養育，教育
1756,owl,[名] フクロウ
1757,instinct,[名] 本能
1758,prey,[名] ①餌食 [自] ②(on ～)餌食にする
1759,anatomy,[名] ①解剖(学)②(解剖学的に見た動植物の)構造
1760,mammal,[名] 哺乳動物，哺乳類
1761,predator,[名] 捕食動物，捕食者
1762,hybrid,[名] 交配種，雑種，ハイブリッド
1763,skull,[名] 頭蓋骨〈可算〉
1764,timber,[名] (主に<英>)材木
1765,textile,[名] ①織物 [形] ②織物の
1766,fabric,[名] ①布地，織物 ②組織，構造
1767,mill,[名] 製造工場
1768,weave,[他] ①～を織る ②～を編む
1769,competent,[形] 有能な
1770,optimistic,[形] 楽観的な
1771,patriotic,[形] (人，言動などが)愛国的な
1772,noble,[形] ①高潔な ②貴族の [名] ③貴族〈可算〉
1773,naughty,[形] いたずらな
1774,arrogant,[形] 傲慢な
1775,vigorous,[形] ①(人，活動が)精力的な ②活発な
1776,humble,[形] ①控えめな ②卑しい，貧しい
1777,eligible,[形] 資格のある
1778,courtesy,[名] 礼儀正しさ
1779,resilient,[形] 回復の早い，回復力のある
1780,inclined,[形] ①(be ～ to do)～する傾向がある ②～したい気持ちだ
1781,haunt,[他] ①(亡霊，考えなどが)～につきまとう，出没する [名] ②好んで行く場所，たまり場
1782,intent,[形] ①(on ～)(～に)没頭した，決心した [名] ②意図
1783,indulge,[自] ①(in ～)(～に)ふける [他] ②～を思いのままにさせる
1784,flaw,[名] 傷，欠点
1785,defect,[名] 欠陥
1786,trait,[名] 特性
1787,analogy,[名] 類似点，類推，例え
1788,parallel,[名] ①類似(物)[形] ②(to ～)(～と)平行の，類似した
1789,indispensable,[形] 不可欠な
1790,crucial,[形] (極めて)重大な
1791,grave,[形] ①重大な [名] ②墓(穴)
1792,primary,[形] ①主な，第①の ②初期の，原始の
1793,vital,[形] 不可欠な，きわめて重要な
1794,integral,[形] ①不可欠な ②完全な
1795,profound,[形] 深い
1796,grim,[形] (状況などが)厳しい
1797,fierce,[形] ①(競争，嵐などが)激しい ②どう猛な
1798,harsh,[形] 厳しい
1799,acute,[形] ①深刻な ②(知能，知覚などが)鋭い ③急性の
1800,ambiguous,[形] 曖昧な
1801,misleading,[形] 誤解を招く，紛らわしい
1802,obscure,[形] ①ぼやけた，わかりにくい ②無名の
1803,mature,[形] ①成熟した，熟成した [自] ②成熟する，熟成する
1804,neat,[形] きちんとした
1805,decent,[形] まともな，きちんとした
1806,straightforward,[形] ①(方法などが)わかりやすい ②(人や行動が)率直な
1807,sophisticated,[形] ①(機械，システムが)高度な ②洗練された，教養のある
1808,elaborate,[形] ①手の込んだ，凝った [他] ②～を苦労して作り上げる [自] ③(on ～)(～を)詳しく話す
1809,prompt,[形] ①迅速な [他] ②～に促す
1810,swift,[形] 素早い
1811,mighty,[形] 強力な
1812,explicit,[形] (発言や文章などが)明確な
1813,authentic,[形] 本物の
1814,wit,[名] 機知，機知に富んだ人
1815,thrive,[自] ①(会社などが)好調である，繁栄する ②(動[植]物などが)健康に育つ
1816,dim,[形] ①薄暗い ②(記憶などが)ぼんやりした [他] ③～を暗くする
1817,gloomy,[形] ①薄暗い ②陰気な，悲観的な
1818,barren,[形] 不毛な
1819,idle,[形] ①(仕事がなく)何もしていない ②怠惰な [他] ③(away)(～を)何もしないでいる
1820,adverse,[形] (何かを行うのに)不都合な，悪い
1821,tiresome,[形] 退屈な，うんざりする
1822,clumsy,[形] 無器用な
1823,foul,[形] ①(味，臭いなどが)不快な [名] ②(スポーツなどの)違反，ファウル
1824,shabby,[形] みすぼらしい，おんぼろの
1825,outrageous,[形] 常軌を逸した，奇想天外な
1826,absurd,[形] ばかげた
1827,fragile,[形] 壊れやすい，もろい
1828,vulnerable,[形] ①傷つきやすい，弱い ②(非難，攻撃を)受けやすい，(病気に)かかりやすい
1829,static,[形] 静的な，(経済などで)変化のない，活気のない
1830,innate,[形] (才能などが)先天的な，生まれつきの
1831,exotic,[形] ①(動[植]物が)外来の ②異国情緒のある
1832,tame,[形] ①飼い慣らされた，従順な [他] ②～を飼い慣らす
1833,manifest,[形] ①明らかな [他] ②(姿勢，感情など)を明らかにする
1834,dense,[形] 密集した，(霧などが)濃い
1835,transparent,[形] 透明な
1836,consistent,[形] ①(with ～)矛盾のない，一致している ②安定した，不変の
1837,coherent,[形] 一貫している
1838,universal,[形] 普遍的な
1839,underlying,[形] 根底にある
1840,spontaneous,[形] 自然発生的な
1841,mock,[形] ①模擬の，見せかけの [他] ②(からかって)～をまねる ③～をあざける
1842,collective,[形] 集団の、共同の
1843,vertical,[形] 垂直の，縦の
1844,ongoing,[形] 進行中の，継続中の
1845,tender,[形] ①(肉などが)柔らかい ②(愛情があり)優しい ③(皮膚などが)弱い
1846,upright,[副] ①直立して [形] ②直立した
1847,ease,[名] ①簡単さ [他] ②(痛み，心配など)を和らげる，楽にする
1848,rust,[名] ①さび〈不可算〉 [自] ②さびる
1849,stain,[名] ①シミ，汚れ [他] ②～にシミをつける，～を汚す
1850,rag,[名] ぼろ切れ
1851,texture,[名] 感触、手触り
1852,preliminary,[形] ①予備的な，事前の ②予選の [名] ③予選
1853,mandatory,[形] 義務的な
1854,indigenous,[形] (動[植]物，民族が)固有の
1855,respective,[形] それぞれの
1856,multiply,[他] ①～を増やす ②(A by B)(A)に(B を)掛ける [自] ③増える
1857,soar,[自] ①(価格，温度が)急上昇する ②(鳥が)舞い上がる
1858,diminish,[自] 減少する
1859,accumulate,[他] ①～を蓄積する [自] ②蓄積する
1860,exceed,[他] ～を越える
1861,abundant,[形] 豊富な
1862,ample,[形] 豊富な
1863,gross,[形] ①総計の ②(食べ物，行動などが)ひどい
1864,infinite,[形] 無限の
1865,sole,[形] ①唯一の [名] ②足の裏，靴底
1866,heap,[名] ①(積み重ねられたものの)山 ②(a ― of ～)たくさんの～
1867,fraction,[名] ①少量 ②分数，端数
1868,simultaneous,[形] 同時の
1869,medieval,[形] 中世の
1870,dawn,[名] ①夜明け [自] ②夜が明ける ③(on ～)(～に)わかり始める
1871,span,[名] ①(継続した)期間 ②(集中力，注意力，機械の持続)期間
1872,adolescent,[名] ①思春期の若者 [形] ②思春期の
1873,millennium,[名] 1000年間
1874,expire,[自] 期限が切れる
1875,postpone,[他] ～を延期する
1876,periodically,[副] 定期的に，周期的に，時折
1877,array,[名] (an ― of ～)さまざまな，多彩な
1878,realm,[名] 領域，領土
1879,domain,[名] 領域
1880,boundary,[名] 境界(線)
1881,spectrum,[名] ①(思想・活動などの)範囲 ②(光の)スペクトル
1882,equip,[他] ①～を装備させる，備え付ける ②(人)に(知識や能力などを)身につけさせる
1883,transmit,[他] ①～を送る，伝える ②(病気など)をうつす
1884,endow,[他] ～を授ける
1885,inherit,[他] ～を受け継ぐ
1886,retrieve,[他] ①～を回収する，取り戻す ②(ファイルなど)を検索する
1887,displace,[他] ①～に取って代わる ②(戦争，災害などで)～を(故郷などから)追い出す
1888,bond,[名] ①きずな ②公債，社債 (①②ともに〈可算〉)
1889,hospitality,[名] もてなし，歓迎
1890,certificate,[名] 証明書，免許状，鑑定書
1891,brochure,[名] パンフレット
1892,outlet,[名] ①(電気の)コンセント ②(販売)店 ③(感情などの)はけ口
1893,accommodation,[名] (<米>―s)宿泊施設
1894,haven,[名] 避難所、保護区
1895,venue,[名] 開催地，会場
1896,intersection,[名] 交差点
1897,pavement,[名] (主に<英>)歩道
1898,pedestrian,[名] 歩行者
1899,excursion,[名] 小旅行，遠足
1900,shipping,[名] (商品の)発送
1901,thread,[名] ①糸 [他] ②～に糸を通す
1902,ornament,[名] (小さな)飾り，置物
1903,cosmetic,[名] ①(―s)化粧品 [形] ②美容の，化粧(用)の
1904,chamber,[名] ①部屋 ②(協会などの)会議所，議院
1905,commodity,[名] ①商品 ②有用なもの
1906,dwell,[自] ①住む ②(on ～)(～をくどくど)考える
1907,acoustic,[形] ①音響の ②(アンプを用いない)アコースティックの
1908,recipe,[名] ①レシピ，調理法 ②秘訣，原因
1909,intake,[名] 摂取(量)
1910,precede,[他] ～に先行する
1911,phase,[名] 段階，位相
1912,priority,[名] 優先(事項)
1913,premise,[名] ①前提 ②(―s)(建物を含めた)敷地
1914,tomb,[名] 墓，古墳
1915,legend,[名] ①伝説，言い伝え ②伝説的人物
1916,masterpiece,[名] 傑作
1917,ritual,[名] ①(宗教的)儀式 [形] ②儀式の
1918,worship,[名] ①崇拝，礼拝 [他] ②～を崇拝する [自] ③(神社などに)お参りする
1919,doctrine,[名] (宗教上などの)教義
1920,legacy,[名] 遺産〈可算〉
1921,sin,[名] (宗教上，道徳上の)罪
1922,swear,[自] ①誓う ②罵る
1923,confess,[自] ①（to ～）（～を）白状する [他] ②～を認める
1924,carve,[他] ～を彫る，刻む
1925,murmur,[自] つぶやく
1926,verbal,[形] 言葉による
1927,oral,[形] ①口述の ②口の
1928,eloquent,[形] 雄弁な
1929,linguistic,[形] 言語の，言語学の
1930,metaphor,[名] 隠喩，比喩
1931,prose,[名] 散文
1932,narrative,[名] 語り，物語
1933,plot,[名] ①（小説，演劇などの）筋 ②悪だくみ，陰謀
1934,draft,[名] ①下書き，草稿 [他] ②～を徴兵する [形] ③（― beer）生の（ビール）
1935,manuscript,[名] (手書きの)原稿，写本
1936,paradox,[名] 逆説
1937,slang,[名] （集合的に）俗語
1938,riddle,[名] なぞなぞ，謎〈可算〉
1939,exhibit,[他] ①～を展示する ②～を示す [名] ③展示物，展覧会
1940,portray,[他] ～を描く
1941,depict,[他] (主に文字や絵や彫刻などで)～を描く
1942,landmark,[名] ①目印，名所 ②画期的な出来事
1943,tease,[他] ～をからかう，冷やかす
1944,delight,[他] ①～を喜ばせる [名] ②（大）喜び
1945,astonish,[他] ～を（とても）驚かせる
1946,dread,[他] ①～を恐れる [名] ②恐怖
1947,attribute,[他] ①（A to B)（A）を（B）のせいだとする [名] ②特性，属性
1948,console,[他] ～を慰める
1949,arouse,[他] ～を呼び起こす
1950,distract,[他] ①（注意，意識など）をそらす ②～の気を紛らす
1951,startle,[他] ～を驚かせる
1952,thrill,[他] ①～をぞくぞく［わくわく］させる [名] ②スリル
1953,humiliate,[他] ～に恥をかかせる
1954,adore,[他] ～を熱愛している
1955,utter,[他] ①（叫び声など）を発する [形] ②まったくの
1956,exclaim,[自] （驚き，怒りなどで）叫ぶ
1957,shed,[他] ①（涙など）を流す ②（光）を当てる ③（不要なもの）～を取り除く ④（ヘビなどが）（皮）を脱ぐ，（木が葉っぱ）を落とす
1958,resent,[他] ～に憤慨する
1959,plead,[自] ①（with ～）（～に）懇願する [他] ②～を申し立てる
1960,yearn,[自] ①切望する [他] ②～を切望する
1961,long,[自] （for ～）（～を）切望する
1962,immerse,[他] (A in B)(BにA)を没頭させる
1963,bewilder,[他] （通例，受け身）～を当惑させる
1964,despise,[他] ～を軽蔑する
1965,willing,[形] （be ― to do）嫌がらずに～する
1966,furious,[形] 激怒した
1967,intimate,[形] ①親密な ②（知識などが）深い
1968,aesthetic,[形] ①美的な ②審美眼がある
1969,conscience,[名] 良心
1970,mercy,[名] ①慈悲，情け ②幸運
1971,compassion,[名] 同情，思いやり
1972,impulse,[名] 衝動
1973,aspiration,[名] 熱望
1974,grief,[名] （人の死などに対する）深い悲しみ
1975,contempt,[名] 軽蔑
1976,insult,[名] ①侮辱 [他] ②～を侮辱する
1977,nuisance,[名] 迷惑（になるもの）
1978,surge,[名] ①(感情などの)高まり ②(数字など)急増
1979,incentive,[名] 励み
1980,outcome,[名] 結果
1981,factor,[名] 要因
1982,liable,[形] ①（to do）～しがちだ ②（to ～）（病気などに）かかりやすい ③（for ～）（～に対して）（法的に）責任がある
1983,thorough,[形] 完全な，徹底的な
1984,adequate,[形] 十分な，適切な
1985,overall,[形] ①全体的な，全面的な [副] ②全体的に，全面的に
1986,ultimate,[形] 究極の，最終の
1987,genuine,[形] ①（感情が）心からの ②（絵画などが）本物の
1988,slight,[形] わずかな
1989,radical,[形] ①根本的な，抜本的な ②過激な
1990,trivial,[形] ささいな
1991,potent,[形] 強力な
1992,likewise,[副] 同様に，同じように
1993,virtually,[副] 事実上，ほとんど
1994,abruptly,[副] 不意に，突然
1995,deliberately,[副] ①故意に ②慎重に
1996,exclusively,[副] もっぱら，～専用で
1997,hence,[副] だから，それゆえに
1998,namely,[副] すなわち
1999,allegedly,[副] (本当かどうかはわからないが)伝えられるところによると
2000,whereas,[接] ～だが一方
2001,roam,[自] 歩き回る
2002,stroll,[自] 散策する
2003,circulate,[自] ①循環する [他] ②～を循環させる
2004,wane,[自] （力・程度・色などが）衰える，（月が）欠ける
2005,deteriorate,[自] 悪化する
2006,plunge,[自] ①（into ～）（～に）突っ込む [他] ②（A into B）（A）を（B に）突っ込む
2007,backfire,[自] 裏目に出る
2008,cram,[自] ①詰め込み勉強をする [他] ②～を詰め込む
2009,speculate,[自] ①推測する ②（株・土地などに）投機をする
2010,evaporate,[自] 蒸発する
2011,vomit,[自] ①吐く [他] ②～を吐く
2012,frown,[自] （at ～）（～に）眉をひそめる，（on ～）（～に）難色を示す
2013,hatch,[自] ①（卵から）かえる，孵化する [他] ②（卵から）～をかえす ③（計画など）を企てる
2014,cling,[自] （to ～）（～に）固執する，しがみつく
2015,adhere,[自] （to ～）（規則，主義，法律などに）忠実に従う
2016,collaborate,[自] （to do）共同して働く
2017,lag,[自] （behind ～）（～に）遅れる
2018,cater,[自] ①料理を提供する ②（to ～）（～の要望などに）応える
2019,flush,[自] （ほおなどが）紅潮する [他] ②～を水で流す
2020,ascribe,[他] （A to B）（A）の原因は（B にある）と主張する
2021,endorse,[他] （計画，候補者など）を支持する
2022,disclose,[他] ～を公表する，暴く
2023,improvise,[他] ～を即興で作る［歌う，演奏する］
2024,transplant,[他] ①（花や木，器官など）を移植する [名] ②移植
2025,encompass,[他] ～を含む
2026,forge,[他] ①（関係など）を築く ②～を偽造する
2027,entangle,[他] （be［get］ ―ed in［with］ ～)～に絡まる
2028,entail,[他] （必然的に）～を伴う
2029,herald,[他] ～の先触れをする
2030,surpass,[他] ～を上回る
2031,transcend,[他] （経験・理解などの限界）を超える
2032,flatter,[他] ～にお世辞を言う
2033,enact,[他] （法律など）を制定する
2034,amend,[他] （憲法・法律など）を修正する
2035,kidnap,[他] ～を誘拐する
2036,smuggle,[他] ～を密輸する
2037,convict,[他] ①～に有罪判決を下す [名] ②有罪判決を受けた者
2038,hinder,[他] ～を妨げる
2039,inflict,[他] （A on B）（BにA（痛み，打撃など））を与える
2040,alleviate,[他] （苦痛・困難など）を軽減する
2041,eradicate,[他] ～を根絶する
2042,expel,[他] ～を追放する，～を退学処分にする
2043,omit,[他] ～を省く
2044,discard,[他] （不用品）を捨てる
2045,curb,[他] ①～を抑制する [名] ②縁石
2046,restrain,[他] ～を抑制する
2047,inhibit,[他] ～を抑制する
2048,hamper,[他] （しばしば受身形で）を妨げる，邪魔をする
2049,lure,[他] ①～を誘い込む [名] ②魅力，誘惑
2050,reassure,[他] ～を安心させる
2051,dictate,[他] ①～を書き取らせる ②～を命令する，規定する
2052,provoke,[他] ①（非難など）を引き起こす ②（意図的に）～を怒らせる
2053,refine,[他] ～を洗練させる
2054,enlighten,[他] ～を啓蒙する
2055,unleash,[他] （怒りなど）を爆発させる，～の束縛を解く
2056,prolong,[他] （時間・期間・感情など）を長引かせる
2057,mitigate,[他] （苦痛・影響・罰など）～を緩和する
2058,grind,[他] （穀物，肉など）を挽く
2059,withstand,[他] ～に耐える
2060,exert,[他] （力，影響力など）を働かせる
2061,summon,[他] ①～を呼ぶ，召喚する，喚問する ②（勇気など）を奮い立たせる
2062,thrust,[他] ①～を強く押しつける ②（刃物で）～を突き刺す
2063,pierce,[他] ～を突き刺す，～を突き通す
2064,harness,[他] （自然の力など）を利用する
2065,excavate,[他] ～を発掘する
2066,evade,[他] ～を逃れる
2067,embody,[他] ～を具体化する
2068,assimilate,[他] ①（食物，考えなど）を吸収する ②（言語，民族など）を同化する
2069,discern,[他] ～を見分ける
2070,scrutinize,[他] ～を詳細に調べる，精査する
2071,streamline,[他] （作業・組織など）～を合理化する
2072,mentor,[他] ①～を指導する [名] ②（会社，大学などでの）指導者
2073,contemplate,[他] ～を熟考する
2074,conjecture,[他] ～を推測する
2075,presume,[他] ①（人が主語）～と推定する ②（計画などが主語）～を前提とする
2076,gauge,[他] ～を（慎重に）判断する，評価する
2077,verify,[他] （事実かどうか）を確かめる，検証する
2078,pledge,[他] ～を誓う
2079,dismay,[他] ①～を狼狽させる[名] ②狼狽
2080,lament,[他] ～を深く悲しむ，嘆く
2081,perplex,[他] ～を困惑させる
2082,disgust,[他] ①～に嫌悪を抱かせる[名] ②嫌悪
2083,evoke,[他] ～を呼び起こす
2084,harbor,[他] ①（悪意・疑いなど）を心に抱く ②（菌など）を住まわせる
2085,friction,[名] 摩擦
2086,mutation,[名] 突然変異
2087,heredity,[名] 遺伝
2088,synthesis,[名] 合成，統合
2089,veterinarian,[名] 獣医
2090,epidemic,[名] （大）流行
2091,obesity,[名] （病的な）肥満
2092,neuron,[名] ニューロン，神経単位
2093,dementia,[名] 認知症
2094,diabetes,[名] 糖尿病
2095,placebo,[名] 偽薬，プラシーボ
2096,malnutrition,[名] 栄養失調
2097,dehydration,[名] 脱水（症状）
2098,abortion,[名] （妊娠）中絶（手術）
2099,antibiotic,[名] （通例 ―s）抗生物質
2100,psychiatry,[名] 精神科，精神医学
2101,cardiologist,[名] 心臓専門医
2102,kidney,[名] 腎臓
2103,posture,[名] 姿勢
2104,metabolism,[名] （新陳）代謝，代謝作用
2105,famine,[名] 飢饉
2106,riot,[名] 暴動〈可算〉
2107,asylum,[名] 亡命
2108,workforce,[名] 労働人口，総労働力
2109,prefecture,[名] 県，府
2110,hierarchy,[名] 階層構造
2111,autonomy,[名] 自治（権），自主性
2112,delegation,[名] 代表団，使節団
2113,congress,[名] （米国などの）議会，会議
2114,census,[名] 国勢［公的］調査
2115,monarch,[名] 君主
2116,monopoly,[名] 独占（権，品），独占企業
2117,surplus,[名] ①余剰 ②（会計・財政）余剰金，黒字
2118,expertise,[名] 専門的知識，専門的技術〈不可算〉
2119,quota,[名] ノルマ，割り当て
2120,subordinate,[名] ①部下 [形] ②下位の
2121,warehouse,[名] 倉庫，〈英〉問屋
2122,peasant,[名] （個々の）小作農
2123,correlation,[名] 相関（関係）
2124,asymmetry,[名] 非対称，不釣り合い
2125,disparity,[名] 相違，不均衡
2126,divergence,[名] 逸脱，相違，《数学》発散
2127,clash,[名] ①衝突，対立 [自] ②（with ～）衝突する
2128,persecution,[名] 迫害
2129,genocide,[名] 大量虐殺
2130,atrocity,[名] 残虐行為
2131,bribe,[名] 賄賂
2132,culprit,[名] ①（具体的な犯罪の）犯人 ②（何かの問題の）元凶
2133,hostage,[名] 人質
2134,conspiracy,[名] 陰謀
2135,peril,[名] （大きな）危機
2136,pitfall,[名] （通例 ―s）落とし穴，隠れた危険
2137,itinerary,[名] 旅程（表）
2138,upheaval,[名] 大変動
2139,commencement,[名] ①開始 ②〈米〉（高校・大学の）卒業式，学位授与式
2140,threshold,[名] （新しいものの）始まり
2141,onset,[名] （通例良くないことの）始まり
2142,momentum,[名] 勢い，はずみ
2143,deterrent,[名] 抑止するもの
2144,geometry,[名] 幾何学
2145,anthropologist,[名] （文化）人類学者
2146,internship,[名] 実務研修，医学研修
2147,paradigm,[名] 理論的枠組，パラダイム
2148,altruism,[名] 利他主義
2149,claustrophobia,[名] 閉所恐怖症
2150,Antarctic,[名] （the ―）南極（地方）
2151,latitude,[名] 緯度（省略形 lat.）
2152,odor,[名] （不快な）臭い
2153,meadow,[名] 草地，牧草地
2154,calamity,[名] （大きな）災害
2155,precipitation,[名] 降水（量），〈化学〉沈殿
2156,meteor,[名] 流星，隕石
2157,asteroid,[名] 小惑星
2158,eclipse,[名] （日食，月食などの）食
2159,glacier,[名] 氷河
2160,peninsula,[名] 半島
2161,hemisphere,[名] 半球
2162,lump,[名] ①かたまり，しこり [他] ②（together）～をひとかたまりにする
2163,cluster,[名] （同種の）集団，（植物の）房
2164,offspring,[名] （集合的に）（人間・動物の）子，子孫
2165,livestock,[名] 家畜〈不可算〉
2166,carnivore,[名] 肉食動物〈可算〉
2167,vertebrate,[名] ①脊椎動物 [形] ②脊椎動物の
2168,primate,[名] 霊長類
2169,parasite,[名] 寄生虫［動物，植物］
2170,cortex,[名] 皮質
2171,sibling,[名] 兄弟姉妹
2172,extrovert,[名] 外交的な人
2173,stigma,[名] 汚名
2174,plight,[名] 窮状，苦境
2175,turmoil,[名] 混乱
2176,fallacy,[名] 誤びゅう
2177,loophole,[名] 抜け穴
2178,congestion,[名] 混雑，充血
2179,vacuum,[名] ①真空（状態），（政治などの）空白 [他] ②～に掃除機をかける
2180,digit,[名] 桁
2181,bulk,[名] （the ― of ～）（～の）大半
2182,longevity,[名] 長寿，（在職期間などが）長いこと
2183,detour,[名] 回り道
2184,sewage,[名] 下水，（下水の）汚物，汚水
2185,landfill,[名] 埋め立て〈不可算〉，埋め立て地〈可算〉
2186,appliance,[名] （家庭用）器具
2187,cuisine,[名] （独特の）料理（法）
2188,beverage,[名] （通例 ―s）飲料
2189,staple,[名] ①必需食料品，主要作物 [形] ②主要な
2190,scenario,[名] （予想される）筋書き，事態，科学的モデル
2191,autograph,[名] （有名人などの）サイン
2192,archive,[名] ①（―s）（集合的に）記録文書，公文書 ②公文書保管庫
2193,rhetoric,[名] ①美辞麗句，修辞（法)[形] ②修辞的な
2194,connotation,[名] 言外の意味，含意
2195,anecdote,[名] 逸話，秘話
2196,lord,[名] ①（通例 the Lord）神 ②高位の貴族，支配者
2197,saint,[名] ①聖人 ②（S―）（人名の前で）聖...
2198,prophet,[名] 預言者，予言者
2199,pilgrim,[名] 巡礼者
2200,salvation,[名] 救済
2201,artifact,[名] （考古学的価値のある）人工遺物，出土品（〈英〉artefact）
2202,token,[名] ①（as a ― of）（～の）しるし（として)②（バスなどで使われる）代用硬貨，トークン ③〈英〉商品引換券
2203,cue,[名] 合図、キュー
2204,quest,[名] 探求
2205,melancholy,[名] 憂うつ，ふさぎ込み
2206,self-esteem,[名] 自尊心
2207,empathy,[名] 共感（能力），感情移入
2208,precaution,[名] 用心，予防策
2209,distress,[名] ①苦しみ，苦難 [他] ②～を苦しめる
2210,apprehension,[名] ①不安 ②逮捕
2211,scorn,[名] 軽蔑
2212,menace,[名] （to ～）（～にとっての）厄介なもの［人］，脅威
2213,sentiment,[名] 感情
2214,verge,[名] ①瀬戸際，寸前 ②道路べり，（場所の）縁
2215,plausible,[形] （説明，言い訳などが）もっともらしい
2216,holistic,[形] 全体（論）的な
2217,contagious,[形] 感染（性）の
2218,vocal,[形] ①発声の ②（about ～）（～について）遠慮なく意見を述べる
2219,sensory,[形] 感覚の
2220,numb,[形] （寒さや麻酔などで）麻痺している，感覚を失った
2221,physiological,[形] 生理的な
2222,bilateral,[形] 二国間の，双方の
2223,feudal,[形] （主に欧州の）封建制の
2224,imperial,[形] 帝国の
2225,complementary,[形] 相補的な
2226,pertinent,[形] ①（直接）関連のある ②適切な
2227,intrinsic,[形] 固有の，本来備わっている
2228,unprecedented,[形] 前例のない，空前の
2229,tentative,[形] 仮の，試験的な
2230,drastic,[形] 抜本的な，思い切った
2231,ubiquitous,[形] 偏在している，至る所にある
2232,pervasive,[形] 広く行き渡った
2233,exponential,[形] （増加が）指数関数的な，急激な
2234,perpetual,[形] 絶え間ない，永続する
2235,future-oriented,[形] 未来志向の
2236,intact,[形] 無傷の
2237,maternal,[形] 母の，母親らしい
2238,masculine,[形] 男性的な
2239,juvenile,[形] 青少年の
2240,intelligible,[形] 理解できる
2241,dairy,[形] 酪農（業）の
2242,stray,[形] （動物などが）家のない，道に迷った
2243,dormant,[形] （火山などが）休止状態の，眠っている
2244,comprehensive,[形] 包括的な
2245,edible,[形] 食用の
2246,perishable,[形] （食べ物などが）腐りやすい
2247,naive,[形] 世間知らずの，愚直な
2248,zealous,[形] 熱心な
2249,timid,[形] 臆病な
2250,delinquent,[形] 非行の
2251,sober,[形] ①（酒に）酔っていない ②（人，習慣などが）真面目な
2252,obstinate,[形] 頑固な，強情な
2253,solitary,[形] ①（人が）孤高の ②ただひとつの
2254,vulgar,[形] ①（人，行動が）品がない ②（冗談などが）卑わいな
2255,skeptical,[形] 懐疑的な
2256,accustomed,[形] （to ～）（～に）慣れている
2257,obsessed,[形] （with［by］ ～）（～に）取りつかれて，頭が一杯で
2258,preoccupied,[形] （with ～）（～に）夢中になった，（～で）頭がいっぱいで
2259,prone,[形] （be ― to do）（好ましくないことを）～しがちである
2260,apt,[形] （be ― to do）（本来的に）～する傾向がある
2261,empirical,[形] 経験［実験］による
2262,susceptible,[形] （to ～）（～の）影響を受けやすい
2263,pivotal,[形] 極めて重要な
2264,fabulous,[形] ①とても素敵な ②莫大な
2265,splendid,[形] 素晴らしい
2266,intriguing,[形] 興味深い
2267,ingenious,[形] 独創的な
2268,affluent,[形] 裕福な
2269,renowned,[形] 有名な
2270,eminent,[形] 著名な，地位が高い
2271,conspicuous,[形] 目立つ
2272,adept,[形] （at ～）（～に）熟練した
2273,proficient,[形] 熟達した
2274,immense,[形] 莫大な，膨大な
2275,unanimous,[形] 満場一致の
2276,reckless,[形] 無謀な
2277,futile,[形] 無駄な
2278,brutal,[形] 残忍な
2279,ominous,[形] 不吉な
2280,detrimental,[形] （to ～）（～に）有害な
2281,wicked,[形] 邪悪な
2282,cynical,[形] 冷笑的な
2283,savage,[形] （とても）容赦ない，どう猛な
2284,arbitrary,[形] 独断的な，勝手な
2285,monotonous,[形] 単調な
2286,crude,[形] ①粗末な，粗野な ②加工されていない
2287,extravagant,[形] 法外な，金遣いが荒い
2288,obsolete,[形] 廃れた
2289,devoid,[形] （of ～）（～を完全に）欠いている
2290,scarce,[形] 乏しい
2291,solemn,[形] ①（場所，祝祭が）厳粛な，（音楽が）荘厳な ②（態度が）真面目な
2292,rigid,[形] ①硬い ②（規則・行為・人などが）厳格な
2293,robust,[形] がっしりした，（経済が）活発な
2294,tangible,[形] 触れられる，明確な
2295,superficial,[形] 表面的な
2296,spatial,[形] 空間の
2297,hollow,[形] ①空洞の ②（物の表面が）くぼんだ ③うわべだけの
2298,homogeneous,[形] 均質の，同種の
2299,feasible,[形] （計画・方法などが）実現［実行］可能な
2300,viable,[形] （計画などが）実行可能な`,
  },
  {
    id: 'target',
    name: 'ターゲット1900',
    csv: `番号,単語,意味
1,create,を創り出す；を引き起こす
2,increase,増加する（⇔ decrease ⇒ 223）；を増やす
3,improve,を向上させる；よくなる
4,mean,を意味する；（...する）つもりである（to do）
5,own,を所有している；（事実・罪など）を認める
6,include,を含む（⇔ exclude ⇒ 1009）
7,consider,を見なす；について考える
8,allow,を許す；を与える；（～を）考慮に入れる（for）
9,suggest,を提案する；を暗示する
10,produce,を生産する；を取り出す
11,decide,を決める；に決着をつける
12,offer,を提供する，申し出る
13,require,を要求する；を必要とする
14,share,を共有する；を分担する
15,store,を保存する；を蓄える
16,tend,傾向がある；を世話する
17,concern,〔受身形で〕心配している；〔受身形で〕（～に）関係する（with）；に関連する
18,describe,について述べる，を説明する
19,involve,を関与させる；を伴う
20,reduce,を減らす；を（～に）変える（to）
21,design,を設計する；を計画する
22,force,に強いる；を強要する
23,limit,を制限［規制］する
24,bear,に耐える（≒ endure ⇒ 824）；を負う；を産む；を（心に）抱く
25,affect,に影響を及ぼす（≒ influence ⇒ 49）；を感動させる
26,deal,〔deal withで〕を処理する；〔deal inで〕を商う；を分配する
27,avoid,を避ける
28,relate,を関連づける；（～に）関連する（to）
29,realize,に気づく；を実現する
30,encourage,を奨励する；を励ます（⇔ discourage ⇒ 706）
31,compare,を比較する；を（～に）たとえる（to）
32,measure,を測る；を（比較して）評価する
33,exist,存在する；生存する
34,mark,に印をつける；を（記号で）示す；に汚れをつける
35,challenge,に異議を唱える；（人）に挑む
36,depend,頼る；～次第である
37,object,反対する；（...）と言って反対する（that節）
38,demand,を要求する
39,found,を設立する；（理論など）を（～に基づいて）築く（on）
40,complete,を完成させる，仕上げる
41,idea,考え，思いつき；理解；見解；概念
42,accord,一致；合意，協定
43,company,会社；〔集合的に〕仲間；（仲間と）一緒にいること；一座
44,interest,興味；利子；利害
45,research,（～についての）研究，調査（into / on / in）
46,cause,原因（⇔ effect ⇒ 48）；理由；大義
47,reason,理由；（...する）根拠（to do）；理性；分別
48,effect,影響，効果；結果
49,influence,影響（力）
50,situation,状況；（人の置かれた）立場
51,environment,環境（≒ surroundings）
52,skill,技能；熟練
53,matter,事柄；問題；〔～s〕事態；〔the ～〕困難；物質
54,view,（～についての）見解（on / about）；（～に対する）（特定の）見方（of）；眺め
55,value,価値；価格；評価；〔～s〕価値観
56,species,（生物の）種；種類
57,thought,考え；思考
58,knowledge,知識；知っていること；認識
59,memory,記憶（力）；（～の）思い出（of）
60,practice,実践，実行；（社会の）慣習；練習
61,benefit,利益，恩恵；給付金
62,theory,学説；理論；原理；推測
63,issue,問題（点）；発行（物）；発表
64,experiment,（～を対象とする）実験（on）
65,article,記事；条項；品物
66,focus,焦点；関心の的
67,subject,話題；科目；主題；被験者
68,project,計画；事業；研究計画
69,quality,質（⇔ quantity ⇒ 471）；特質
70,role,役割；（俳優などの）役
71,term,（専門）用語；〔～s〕条件；〔～s〕間柄；学期
72,statement,声明；主張；明細書
73,material,材料，素材；資料；生地
74,evidence,証拠
75,source,（～の）源，根源（of）；出所，情報源
76,community,（共同）社会，～界；地域社会；地域住民
77,technology,科学技術；応用技術
78,culture,文化；教養；耕作；養殖；培養
79,appropriate,（～に）適切な（for / to）
80,likely,ありそうな（⇔ unlikely ありそうもない）
81,possible,可能な；可能性のある
82,individual,個々の；個人の
83,public,公の（⇔ private 私的な）；公衆の；公開の
84,common,共通の；普通の；一般の
85,certain,確信して；確かな；ある；一定の
86,similar,似ている，類似した；同様の
87,recent,最近の
88,major,主要な；大きい（ほうの）；長調の
89,patient,忍耐強い；勤勉な
90,particular,特定の；特別の；（～について）やかましい（about）
91,physical,身体の（⇔ mental ⇒ 183）；物質的な；物理学の
92,various,さまざまな；いくつかの
93,available,手に入る；利用できる；手が空いている
94,native,出生地の；原産の；生得の
95,political,政治（上）の
96,due,予定された；（支払）期日で；しかるべき
97,blank,空白の；無表情な；がらんとした
98,ancient,古代の；昔からの
99,correct,正しい；適切な
100,despite,～にもかかわらず（≒ in spite of）
101,notice,に気づく
102,refer,言及する，関連する；参照する
103,approach,に近づく；に取り組む
104,wonder,かなと思う；（に）驚く（at）
105,imagine,（を）想像する；（を）推測する
106,recognize,を識別できる；を認める
107,solve,を解く，解明する；（困難など）を解決する
108,occur,起こる；心に浮かぶ；現れる
109,argue,"と主張する（≒ claim ⇒ 110, maintain ⇒ 206）；議論する"
110,claim,と主張する；を（自分のものとして）要求する
111,express,を表す，述べる
112,draw,を引き出す；を引く；を描く；近づく
113,waste,を浪費する，無駄にする
114,advance,を進歩させる；を進める；進歩する；進む
115,spread,を広める；広がる
116,prepare,を準備する；を調理する；（～のために）準備をする（for）
117,gain,を獲得する；（を）増す
118,achieve,を達成する；を成し遂げる
119,establish,を確立する；を設立する
120,supply,を供給する
121,suppose,と思う；と仮定する
122,perform,（を）行う；（を）演じる，（を）演奏する
123,prefer,のほうを好む
124,determine,を決定する；を正確に知る
125,treat,を扱う；を治療する
126,prove,を証明する；判明する，わかる
127,apply,を適用［応用］する；申し込む；（～に）適用される（to / in）
128,mention,に言及する；と言う
129,communicate,（～と）情報交換をする（with）；を伝達する
130,contain,を含む；を収容する；（感情など）を抑える
131,contact,と連絡を取る；接触する
132,regard,を見なす；を見る；を評価する
133,respect,を尊敬する；を尊重する
134,search,捜す；を捜索する；を詳しく調べる
135,connect,をつなぐ；を関連づける
136,decline,減少する；衰退する；を断る
137,prevent,を妨げる；を防ぐ
138,suffer,苦しむ；患う；（苦痛など）を経験する
139,survive,を切り抜けて生き残る；より長生きする；生き延びる
140,publish,を出版する；を公表する
141,opportunity,機会（≒ chance）
142,task,（課せられた）仕事，作業；課題；タスク
143,industry,産業；勤勉（≒ diligence）
144,medium,（情報伝達の）媒体；手段
145,economy,経済（状態）；経済圏；節約
146,policy,政策，方針；（個人の）主義
147,account,説明；勘定；口座
148,trade,貿易；商売，取引
149,model,模範；モデル；模型；型
150,figure,数字；姿；人物；図表
151,cell,細胞；独房；電池
152,image,印象，イメージ；画像；像
153,emotion,感情，情動；感動
154,stress,ストレス；圧力；強調
155,decade,10年間
156,range,範囲；射程距離；（同類の）組
157,character,性格，個性；特徴；登場人物；文字
158,advantage,利点；優勢；有利
159,phrase,句；成句；言葉遣い
160,damage,損害，損傷；〔～s〕損害賠償金
161,impact,影響；（激しい）衝突；衝撃（力）
162,method,方法；体系；秩序
163,resource,〔通例～s〕資源；〔通例～s〕資金；才覚
164,region,地域；領域；部位
165,medicine,薬；医学
166,detail,〔～s〕詳細（な情報），細部
167,feature,特徴；〔通例～s〕顔つき；特集記事［番組］
168,function,機能；関数
169,access,利用，入手；接近（の機会・方法・権利）
170,item,品目，項目；（同種の中の）～個；（短い）記事
171,income,収入；所得
172,attitude,態度；考え方，心構え
173,site,用地，場所；跡地；（ウェブ）サイト
174,aspect,（物事の）側面；観点；様相
175,structure,構造；体系；構造物
176,habit,習慣，癖
177,link,関連，つながり；（2地点を結ぶ）交通手段；リンク
178,instance,（具体的な）例，実例；（特定の）場合
179,positive,肯定的な；積極的な；確信して；（検査結果が）陽性の
180,negative,否定的な；消極的な；（検査結果が）陰性の
181,complex,複雑な；複合（体）の
182,current,現在の；現代の；通用している
183,mental,精神の；知能の；頭の中で行う
184,specific,特定の；明確な，具体的な；（～に）特有の（to）
185,significant,重要な，重大な；意義深い
186,essential,（～に）必要不可欠な（to / for）；本質的な
187,official,公用の；公式の；役所の
188,financial,財政（上）の；財界の
189,academic,学問の；大学の
190,aware,気づいて，知って
191,worth,（...する）に値する（doing）；の価値がある
192,potential,潜在的な；可能性を秘めた
193,active,積極的な；活動的な；効力のある
194,digital,デジタル方式の；デジタル［数字］表示の
195,mobile,可動［移動］式の；流動性のある
196,novel,斬新な，目新しい
197,plastic,柔軟な；プラスチックの，ビニールの
198,chemical,化学の，化学的な
199,necessary,必要な（≒ essential ⇒ 186）
200,eventually,結局（は）
201,identify,を特定する；を（～と）同一視する（with）
202,represent,を表す；を代表する；に相当する
203,indicate,を指し示す；を述べる
204,manage,をなんとか成し遂げる；を管理する
205,attend,に出席する；（を）世話する；（～に）対処［対応］する（to）
206,maintain,を維持する；と主張する；を養う
207,survey,を調査する；をじろじろ見る；を概観する
208,replace,に取って代わる；を取り替える
209,sort,を（～に）分類する（into）；を（～から）えり分ける（from）
210,conduct,（調査・実験など）を実施する；を導く
211,associate,を結び付けて考える；（～と）交際する（with）
212,attempt,を試みる，企てる
213,promote,を促進する；〔通例受身形で〕昇進する
214,earn,を稼ぐ；を得る；をもたらす
215,unite,を団結させる；（を）結合する；団結する
216,feed,に食べ物［乳］を与える；に（～を）供給［補給］する（with）；餌を食べる
217,seek,を追い求める；（助けなど）を要請する
218,observe,に気づく；を観察する；を遵守する
219,reveal,を明らかにする；を見せる
220,estimate,と推定する；を見積もる；を評価する
221,reflect,を反映する；（を）反射する；（を）熟考する
222,attract,を引きつける
223,decrease,減少する（⇔ increase ⇒ 2）；を減らす
224,ignore,を無視する
225,match,（と）合う；に匹敵する；一致する
226,define,を定義する；を明確にする
227,adapt,適応する；を（～に）適合させる（to）
228,contribute,貢献する，一因となる；（を）寄付する；（を）寄稿する
229,exchange,（を）交換する；両替する
230,display,を示す；を発揮する；を展示［陳列］する
231,respond,反応する；答える
232,hide,を隠す（≒ conceal ⇒ 1116）；隠れる
233,doubt,ではないと思う；を疑う
234,remove,を取り除く；を解雇する
235,wind,（ねじなど）を巻く；（道などが）曲がりくねる；巻きつく
236,assume,を当然のことと思う，と仮定する；（権力など）を手に入れる；（責任など）を引き受ける
237,relax,くつろぐ；緩む；をくつろがせる；を緩める
238,satisfy,を満足させる；（条件など）を満たす
239,desire,を強く望む
240,succeed,（～に）成功する（in）；（～を）継承する（to）
241,concept,概念；考え；（商品・販売の）コンセプト
242,fashion,流行，ファッション；方法，流儀
243,device,装置，機器；方策；デバイス
244,charge,料金；世話；管理；告発
245,contrast,（～との）対照（with / to）
246,colleague,（職場の）同僚
247,pain,苦痛，痛み；苦悩；〔～s〕骨折り
248,bill,請求書；【英】勘定書（≒ 【米】check）；法案
249,content,内容，中身；コンテンツ
250,section,部門；部分；地区；欄
251,audience,〔集合的に〕聴衆，観客；視聴者
252,surface,表面；〔the ～〕外見
253,crop,〔しばしば～s〕作物；収穫高
254,topic,話題，トピック；主題
255,technique,技術；技巧；手法
256,status,地位；状態
257,option,選択（の自由）；選択肢
258,reward,報酬；報い
259,race,人種；民族；競争
260,crime,罪，犯罪；違法行為
261,conflict,争い；論争；不一致
262,struggle,闘い；懸命の努力
263,context,状況，背景；文脈
264,debate,討論，論争；討論会
265,fuel,燃料；勢いを増加させるもの
266,pollution,汚染，公害
267,trend,（～への）傾向（toward）；流行
268,balance,均衡，バランス；（体の）平衡；残高
269,traffic,交通；通行；交通［輸送］量；（不正）取引
270,strategy,戦略
271,basis,基礎；根拠；基準
272,consequence,〔通例～s〕結果；重大性
273,aim,目的，目標；狙い
274,ancestor,祖先（⇔ descendant 子孫）；原型
275,gene,遺伝子
276,track,跡；軌道；【米】（鉄道の）番線；走路
277,revolution,革命；回転；（天体の）公転（⇔ rotation 自転）
278,progress,進歩；前進
279,cognitive,認知の
280,ideal,理想的な；観念的な
281,efficient,効率的な；有能な
282,universal,普遍的な；宇宙の；万能の
283,vast,莫大な；広大な
284,extra,追加の，余分の；別勘定の
285,entire,全体の，全部の（≒ whole）；完全な
286,familiar,精通している；よく知られている
287,obvious,明らかな（≒ clear）
288,moral,道徳（上）の，倫理的な；道徳的な
289,ordinary,一般の，普通の；並の
290,equal,（～に）等しい（to）；匹敵する；平等な
291,previous,以前の，前の
292,FALSE,間違った；虚偽の；偽の
293,rare,まれな，珍しい；希少な
294,legal,法律の；合法の（⇔ illegal 違法の）
295,independent,（～から）独立した（of / from）
296,extreme,極端な；極度の，過激な
297,actual,実際の，現実の
298,willing,いとわない，かまわないと思う
299,urban,都市の；都会的な（⇔ rural ⇒ 387）
300,whereas,～するのに（対し），～する一方
301,predict,を予言［予測］する
302,examine,を調べる；を診察する；を尋問する
303,trust,を信頼する；を（信頼して）託す
304,stick,を動けなくする；を突き刺す；（～に）くっつく（to / on）
305,emerge,現れる；明らかになる；台頭する
306,vary,さまざまである；変わる；を変える
307,release,を放出する；を解放する；を発表する
308,divide,を分ける；分かれる
309,enable,（人）が...できるようにする；を可能にする
310,judge,（を）判断する；に判決を下す
311,rely,頼る（≒ depend ⇒ 36）
312,engage,を従事させる；を（～として）雇う（as）；（～に）従事する（in / with）
313,shift,を変える，移す；変わる；移動する
314,adopt,を採用する；（態度など）をとる；を養子にする
315,acquire,を得る；を習得する
316,expand,（を）拡大する；（を）詳説する
317,refuse,を拒む；を断る；拒絶する
318,strike,の心を打つ；を襲う；を打つ；（に）ぶつかる
319,repeat,（を）繰り返す；を復唱する
320,consume,を消費する；を食べる，飲む
321,confuse,を混同する；を当惑させる
322,select,を選ぶ，えり抜く
323,evolve,（徐々に）発展する；進化する
324,convince,を納得［確信］させる
325,recall,を思い出す；を呼び戻す
326,destroy,を破壊する；（人）を破滅させる
327,preserve,を保存する；を保持する；を保護する
328,organize,を準備する；を組織する
329,warn,（人）に（～を）警告［注意］する（of / against）
330,address,（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）
331,operate,を操作する；機能する；手術する
332,participate,参加する
333,surround,を取り巻く；にまつわる
334,flow,流れる；（～から）生じる（from）
335,bore,（人）を退屈させる，うんざりさせる
336,complain,（と）不平［苦情］を言う；訴える
337,host,を主催する；のホスト役を務める
338,combine,を（～と）結び付ける（with）；（～と）結び付く（with）
339,extend,を伸［延］ばす；伸びる；及ぶ
340,appreciate,を正当に評価する；を鑑賞する；を感謝する
341,target,（到達・攻撃）目標；的
342,element,要素，成分；元素；〔an / ofで〕少しの
343,principle,原則，原理；主義，信条
344,phenomenon,現象
345,atmosphere,〔the ～〕大気；雰囲気
346,origin,起源；源
347,personality,個性，性格
348,capacity,（最大）容量，収容能力；（潜在）能力
349,profit,利益；収益（率）；得
350,circumstance,〔通例～s〕状況，事情；境遇
351,manner,〔～s〕作法；方法；物腰
352,threat,脅威；（悪い）兆し；脅迫
353,resident,居住者；滞在者
354,wealth,富；資源；富裕
355,institution,機関；協会；施設；制度
356,authority,〔通例 the ～ties〕（関係）当局；権威；権限
357,vote,投票；投票結果；〔the ～〕選挙権
358,sight,光景；〔the ～s〕名所；見（え）ること；視野；視力
359,campaign,運動；軍事行動
360,fund,〔しばしば～s〕基金，資金
361,web,〔the W-〕ウェブ；（クモの）巣
362,symbol,象徴，シンボル；記号；標章
363,analysis,分析（結果）（⇔ synthesis ⇒ 1868）
364,version,（本・製品などの）版；解釈
365,perspective,観点，見方；大局観；遠近法
366,crisis,危機
367,disaster,災害；惨事
368,lecture,講義，講演；説教
369,psychology,心理学；心理（状態）
370,gender,（社会的・文化的）性，性別
371,custom,（社会的な）慣習；〔～s〕税関；〔～s〕関税
372,court,裁判所，法廷；裁判；宮廷；中庭
373,desert,砂漠；不毛の地
374,soil,土地，土壌；（悪事などの）温床
375,agriculture,農業；農学，畜産
376,fossil,化石；時代遅れの人［物］
377,document,（公）文書，書類；記録，資料
378,vocabulary,語彙
379,intelligent,聡明な；知能を有する
380,conscious,意識して，気づいて（≒ aware）
381,capable,能力がある；有能な
382,accurate,正確な；精密な
383,fundamental,基本的な；必須の
384,artificial,人工の（⇔ natural 自然の）；不自然な
385,firm,確固たる；堅固な；安定した
386,overall,総合的な；全体的な
387,rural,田舎の（⇔ urban ⇒ 299），田園の
388,military,軍の，軍事（用）の
389,nuclear,核の，原子力の
390,biological,生物学（上）の
391,constant,絶え間ない；一定の
392,severe,（人・規律・事態・天気などが）厳しい；猛烈な
393,visual,視覚の；目に見える
394,enormous,莫大な，巨大な
395,convenient,便利な，都合のいい
396,domestic,家庭の；国内の；（動物が）飼いならされた
397,mass,大規模な，大量の；大衆（向け）の
398,typical,典型的な；（～に）特有の（of）
399,overseas,海外へ［に，で］（≒ abroad）
400,nevertheless,それにもかかわらず（≒ nonetheless ⇒ 1000）
401,demonstrate,を論証［証明］する；デモをする
402,behave,振る舞う；作動する
403,educate,を教育する；に教える；（能力など）を養う
404,purchase,を購入する
405,recommend,を勧める
406,admit,（を）（しぶしぶ）認める；に（～への）入場［入学など］を認める（to / into）
407,generate,を生み出す；（電気など）を発生させる
408,explore,（を）調査［探究］する；（を）探検［探査］する
409,amaze,をびっくりさせる
410,tear,を引き裂く；裂ける
411,settle,を解決する；（に）移り住む；を落ち着かせる
412,afford,を持つ［する］余裕がある；を与える
413,conclude,と結論づける；を締めくくる；を締結する
414,advertise,を宣伝する；（～を求める）広告を出す（for）
415,encounter,に遭遇する；に（思いがけず）出会う
416,remind,に思い出させる
417,locate,〔受身形で〕位置する；の位置を探し当てる
418,aid,を援助する，助ける（≒ help）
419,bite,（を）かむ，（に）かみつく；（を）刺す
420,deliver,を配達する；（演説・講義）をする；子を産む
421,perceive,に気づく；を知覚する；を理解する
422,distinguish,を区別する
423,imply,を暗に意味する；を必然的に伴う
424,handle,を処理する，扱う；を論じる；を商う
425,praise,を（～のことで）賞賛する（for）；賛美する
426,appeal,訴える；抗議する；（上級審に）上訴する
427,insist,（を）強く主張する；要求する
428,compete,競う；〔通例否定文で〕（～に）匹敵する（with）
429,rank,を位置づける，評価する；（ある地位に）位置する
430,deny,を否定する；を拒む
431,reject,を拒否する
432,intend,を意図する
433,expose,をさらす；を暴露する；を露出する
434,favor,に賛成する；を好む；をひいきする
435,inspire,（人）を奮起させる；を喚起する
436,propose,を提案する；をもくろむ；結婚を申し込む
437,spell,（語）をつづる；という語になる
438,breathe,呼吸する；を吸う
439,repair,を修理する（≒ fix）；を修復する
440,consist,（～から）成る（of）；（～に）ある（in）
441,comment,意見，コメント；批判
442,instruction,〔通例～s〕指示；〔～s〕（製品の）使用書
443,religion,宗教；信条；信仰（心）
444,neighborhood,地域；近所
445,laboratory,実験室，研究室
446,presence,存在；出席；面前
447,confidence,自信；信頼；秘密
448,harm,害，損害
449,instrument,器具；楽器（≒ musical instrument）
450,category,部類，区分；範疇
451,capital,資本；首都；大文字（≒ capital letter）
452,outcome,結果（≒ result）；成果
453,notion,概念，観念；見解；意向
454,review,（書物などの）論評；再調査；【米】復習
455,trait,特性（≒ feature）
456,diversity,多様性；相違点
457,victim,犠牲（者），被害者
458,occasion,場合，時；行事；機会
459,facility,施設，設備；機能；才能
460,stock,在庫品；蓄え；株
461,conference,会議；協議
462,humanity,人類；人間性；人情；〔（the） ～ties〕人文科学
463,dialect,方言
464,proportion,割合；部分；釣り合い
465,tip,助言，秘訣；チップ；先端
466,lawyer,弁護士
467,stuff,（漠然と）物；素材；素質
468,comfort,快適さ；慰め
469,philosophy,哲学；原理；人生観
470,mammal,哺乳動物
471,quantity,量（⇔ quality ⇒ 69）；分量
472,landscape,風景；領域；状況
473,tribe,部族；仲間
474,organ,器官，臓器；組織；（パイプ）オルガン
475,trial,試み，（品質・性能などの）試験；裁判；試用期間
476,norm,規範；標準
477,code,規範；暗号；法典
478,substance,物質；実体；趣旨
479,multiple,多様な；種々雑多な
480,numerous,非常に数の多い
481,narrow,狭い；細い；限られた
482,widespread,広範囲にわたる；広く普及した
483,sufficient,（～に；...するのに）十分な（for；to do）
484,proper,適切な；正式の；〔名詞の後ろで〕主要な；（～に）固有の（to）
485,linguistic,言語の，言語学の
486,annual,年1回の，例年の；1年間の
487,contemporary,現代の；同時代の；同年輩の
488,contrary,（～と）反対の（to）
489,strict,（規則などが）厳しい；厳格な
490,civil,市民の；民間の；民事の（⇔ criminal 刑事の）
491,odd,奇妙な（≒ strange）；奇数の
492,unknown,不明の；（～に）知られていない（to），無名の
493,superior,よりすぐれた（⇔ inferior ⇒ 1092）
494,sensitive,敏感な；神経質な；微妙な
495,violent,（人・気質などが）激しい；暴力的な
496,virtual,仮想の；事実上の
497,regardless,（～に）かまわない，無頓着な（of）
498,immediate,即座の；当面の；すぐそばの；直接の
499,crucial,重要な
500,somewhat,いくぶん，多少
501,interpret,を解釈する；（を）通訳する
502,translate,を翻訳する；を（～に）変える（into）
503,concentrate,（を）集中する
504,request,に（...するように）頼む（to do）；を要請する
505,criticize,を批判する；を批評する
506,overcome,を克服する
507,obtain,を得る
508,inform,に知らせる；情報を提供する
509,ensure,を確実にする（≒ make sure）；を守る
510,announce,を発表［公表］する，知らせる；（物事が）を告げる
511,grant,（人）に（許可・権利など）を与える；を認める
512,freeze,凍る；を凍らせる；（計画・資金など）を凍結する
513,oppose,に反対する；を対抗［対比］させる
514,differ,異なる
515,hate,をひどく嫌う；を残念に思う
516,emphasize,を強調する；を重視する
517,employ,を雇う（≒ give ～ a job）；を使う（≒ use）
518,credit,（功績など）を（～に）帰する（to）；を信じる
519,transform,を変える；変わる
520,construct,を建設する（＝ build）；を構成する
521,arise,生じる
522,beat,を打ち負かす；（を）打つ，たたく
523,regret,を後悔する
524,alter,を変える；変わる（≒ change）
525,absorb,を吸収する；を併合する；を夢中にさせる
526,disappoint,を失望させる；（希望など）をくじく
527,cure,を治す；を取り除く；（病気が）治る
528,transport,を輸送する；を運ぶ
529,rush,急いで行く；性急に行動する；をせき立てる
530,hang,を掛ける；を絞首刑にする；垂れ（下が）る
531,blame,を責める；の責任を負わせる
532,ban,を（法的に）禁止する；を締め出す
533,fascinate,を魅了する
534,recover,回復する；を取り戻す
535,celebrate,を祝う；を挙行する
536,manufacture,を製造する；をでっち上げる
537,interact,影響し合う；相互に作用する
538,arrange,の段取りをつける；を手配する；を配置する
539,adjust,を調整する；を適合させる；順応する
540,confirm,を確認する；を裏づける
541,insight,見識，理解（力）；洞察力
542,innovation,革新；新機軸
543,budget,予算；経費
544,fee,料金；謝礼
545,expense,〔～s〕経費；費用；犠牲
546,debt,借金，負債；恩義
547,loan,貸付金，融資；貸すこと
548,duty,義務；〔しばしば～ties〕職務；関税
549,alarm,不安，恐れ；警報装置
550,emergency,緊急（事態）
551,democracy,民主主義，民主政治；民主国家
552,minister,大臣；（プロテスタント系の）聖職者
553,fellow,仲間，同僚；同級生；男
554,candidate,（～の）候補（者）（for）；志願者
555,corporation,（大）企業；法人
556,stereotype,固定観念；決まり文句
557,route,道（筋）；路線，ルート；（～の）手段（to）
558,disorder,障害，（心身の）不調；混乱
559,depression,憂うつ；うつ病；不況；低気圧
560,weapon,兵器，武器（≒ arms）
561,immigration,（他国からの）移民，移住；入国管理
562,barrier,（～に対する）障壁（against / to）；防壁
563,disadvantage,不利（な点）；障害；（信用などの）損失
564,mood,気分；機嫌；雰囲気
565,motion,動き，動作；運動；動議
566,routine,決まり切った仕事；いつもの手順
567,discipline,規律，しつけ；訓練；懲戒；学問分野
568,myth,作り話；神話
569,hypothesis,仮説；憶測
570,physician,【主に米】 医師（≒ doctor）；内科医
571,client,顧客（≒ customer）；（弁護士などの）依頼人
572,colony,植民地；集団居住地；（動植物の）コロニー
573,statistics,統計；統計学
574,grain,穀物；粒；きめ
575,ingredient,材料，成分；（成功の）要因
576,treasure,宝物，財宝；財産
577,contract,契約（書）；協定
578,welfare,福祉，幸福
579,prime,主要な，最も重要な；最適な；極上の
580,curious,好奇心の強い；奇妙な
581,dramatic,劇的な；演劇の
582,distinct,明らかに異なる；明瞭な
583,anxious,心配して；切望して
584,vital,必要不可欠な；活気のある；生命にかかわる
585,conventional,従来の；月並みな
586,abstract,抽象的な（⇔ concrete ⇒ 783）
587,minor,重要でない；小さい（⇔ major ⇒ 88）
588,extraordinary,並はずれた；異常な，驚くべき
589,stable,安定した（⇔ unstable 不安定な）；動じない
590,flexible,融通の利く，柔軟な
591,brief,簡潔な；短い
592,aggressive,攻撃的な；意欲的な
593,visible,（目に）見える（⇔ invisible 見えない）；明白な
594,unexpected,思いがけない，不意の
595,ethnic,民族の，人種の；民族特有の
596,alien,（～にとって）異質の（to）；外国の；宇宙人の
597,initial,初めの
598,exact,正確な；まさにその
599,precise,正確な（≒ exact）；精密な；まさにその
600,latter,後者の（⇔ former 前者の），後半の
601,commit,〔commit oneselfまたは受身形で〕献身する；（罪など）を犯す；を投入する
602,stimulate,を刺激する
603,enhance,（価値など）を高める，増す
604,pursue,を追求する；に従事する
605,react,反応する；化学反応を起こす
606,disagree,不賛成である；意見が食い違う
607,stare,じっと見る；を見つめる
608,abandon,を捨てる；を放棄する，断念する
609,quit,をやめる；（場所）を去る
610,capture,をとらえる；をとりこにする
611,transfer,を移す；を伝える；移る；乗り換える
612,bother,を悩ます；（～を）気にかける（about / with）
613,persuade,を説得する；に確信させる
614,rent,を賃借りする；を賃貸しする
615,breed,を繁殖させる，育てる；繁殖する
616,invest,（を）投資する；に（～を）与える（with）
617,reserve,を予約する；を取っておく；（判断など）を保留する
618,trace,（足跡・起源など）をたどる；を捜し出す
619,illustrate,を説明する；に挿絵を入れる
620,advise,に忠告［助言］する；（を）助言する
621,convey,を伝える；を運ぶ，運搬する
622,attach,を（取り）付ける；を付与する
623,stretch,を伸ばす；を広げる；伸びる；及ぶ
624,puzzle,を当惑させる
625,disturb,をかき乱す；を妨害する；を動揺させる
626,crash,衝突する，墜落する；をぶつけて壊す
627,cope,うまく処理する
628,permit,を許可する（≒ allow）（⇔ forbid ⇒ 1013）
629,impress,を感動させる；に印象を与える
630,suspect,ではないかと思う；（人）を疑う
631,upset,を動揺させる；をだめにする
632,frighten,（人）を怖がらせる
633,import,を輸入する（⇔ export （を）輸出する）；を取り込む
634,export,（を）輸出する（⇔ import を輸入する）
635,investigate,を調査する；を究明する；（～を）調査する（into）
636,monitor,を監視する；を傍受する
637,calculate,を計算する；を予測する
638,eliminate,を取り除く
639,ease,を軽減する；和らぐ；緩む
640,launch,を開始する；を売り出す；を発射する
641,sequence,連続；一連（のもの）
642,therapy,療法；心理療法
643,symptom,症状；兆候（≒ sign）
644,incident,出来事，事件；紛争
645,witness,目撃者（≒ eyewitness）；証人；証拠，証言
646,sum,（金）額；合計；要点
647,burden,負担；（重い）義務；積み荷
648,tone,口調；音色；雰囲気；色調
649,honor,光栄；名誉（⇔ dishonor 不名誉）；敬意
650,award,（～の）賞（for）；（証書などの）授与
651,priority,優先（事項）
652,logic,論理；道理；論理学
653,minimum,最小限度（⇔ maximum ⇒ 965）
654,exception,（～の）例外（to）
655,clue,（～の）手がかり（to / about）；（パズルの）ヒント
656,bond,絆；債券；束縛；接着剤
657,virus,ウイルス；（感染症の）病原体
658,surgery,（外科）手術；外科，外科医学
659,insurance,保険；保険料；保険金
660,frame,枠，（額）縁；骨組み；体格
661,shelter,避難（所），保護
662,territory,領土；（活動の）領域；（動物の）テリトリー
663,boundary,境界（線）；〔通例～ries〕限界
664,habitat,生息地；（人の）居住地
665,district,地区；行政区
666,conservation,（動植物などの）保護；保存
667,harvest,収穫（物）；収穫期；漁獲高
668,predator,捕食動物；略奪者
669,trap,わな；苦境
670,trick,こつ；策略；いたずら；芸当
671,fault,〔通例one's ～〕責任；欠点；誤り
672,discount,割引
673,bias,偏見；傾向
674,cooperation,協力，共同
675,patent,特許（権）；特許品
676,dialogue,対話，会話；意見の交換
677,component,構成要素；部品
678,reputation,評判；名声
679,verbal,言葉の；口頭での；動詞の
680,internal,内部の（⇔ external ⇒ 989）；国内の；内面的な
681,solid,しっかりした；硬い；固体の
682,remote,（～から）遠く離れた（from）；かけ離れた
683,principal,主要な；資本金の
684,sophisticated,高性能の，精巧な；洗練された
685,equivalent,等しい，相当する
686,rational,理性的な；合理的な
687,relevant,関係がある；適切な
688,absolute,絶対的な（⇔ relative 相対的な）
689,frequent,頻繁な
690,permanent,永続的な（⇔ temporary ⇒ 793）
691,intense,強烈な；熱烈な
692,meaningful,意味のある
693,evil,邪悪な；有害な
694,extinct,絶滅した；廃止された
695,random,無作為の；手当たり次第の
696,raw,生の；未加工の
697,rude,無礼な（⇔ polite 礼儀正しい）；粗野な
698,mere,単なる，ほんの
699,tropical,熱帯の
700,forth,前へ，先へ；それ以降
701,possess,を所有している；の心をとらえる
702,dominate,を支配する；（～より）優勢である（over）
703,guarantee,を保証する
704,melt,溶ける；なごむ；を溶かす
705,embarrass,に恥ずかしい思いをさせる
706,discourage,（人）にやる気をなくさせる；を落胆させる（⇔ encourage ⇒ 30）
707,detect,を感知する；を見つけ出す；に気づく
708,devote,をささげる
709,urge,に（強く）促す；を強く主張する；を駆り立てる
710,lend,を貸す（⇔ borrow を借りる）；（人）に（助言・援助など）を与える
711,restrict,を制限する
712,isolate,を孤立させる
713,accompany,に同行する；に付随する
714,exhaust,を疲れ果てさせる；を使い尽くす；排気する
715,annoy,を悩ます；〔受身形で〕腹が立つ
716,endanger,を危険にさらす
717,acknowledge,（事実など）を認める（≒ admit ⇒ 406）；に謝意を表す
718,admire,に（～のことで）敬服［感心］する（for）
719,evaluate,を評価する；を査定する
720,declare,を宣言する；を申告する
721,secure,を確保する；を守る
722,specialize,専門とする；【英】（～を）専攻する（in）（≒ 【米】major）
723,attribute,（結果など）を（～に）帰する（to）
724,pretend,（の）ふりをする
725,bury,を埋める；を埋葬する；を隠す
726,reverse,を逆転させる；を反対にする
727,resist,に抵抗する；〔通例否定文で〕を我慢する
728,scare,をおびえさせる；を脅す
729,imitate,をまねる；を模造する
730,assist,（を）援助する；を手伝う
731,resemble,に似ている
732,retire,（～から）引退する，退職する（from）；退く
733,neglect,をおろそかにする，怠る；を無視する
734,collapse,崩壊する；（人が）倒れる；を折り畳む
735,reform,を改革する；を改心させる
736,protest,（に）抗議する；を主張する
737,owe,に借りがある；のおかげである
738,sustain,を持続させる；を支える
739,assign,を割り当てる；を（～に）配属する（to）
740,accomplish,を成し遂げる
741,wisdom,知恵；賢明さ；学識
742,literacy,読み書きの能力；（特定分野の）知識
743,heritage,遺産
744,mission,使命；（外交）使節団；布教
745,license,免許（証）；許可
746,elite,〔通例the ～〕〔集合的に〕エリート
747,layer,層
748,motor,モーター；原動力
749,protein,たんぱく質
750,profession,職業；専門職；同業者仲間
751,editor,編集者；編集長
752,agent,仲介者，代理人；薬剤
753,globe,地球（≒ earth）；世界；球
754,haven,避難所，保護区；港
755,row,列；（建物が並ぶ）通り
756,sacrifice,犠牲；いけにえ
757,means,〔単数・複数扱い〕手段；〔複数扱い〕資力，収入
758,session,集まり；（議会の）会期；（開会中の）議会
759,league,（競技）連盟；同盟
760,contest,コンテスト，競技（会）；争い
761,guard,警備員；警備隊；監視，警戒
762,opponent,（試合・論争などの）相手；反対者
763,glance,（～を）ちらっと見ること（at）
764,divorce,離婚；分離
765,tissue,（生物の）組織；ティッシュペーパー
766,liquid,液体
767,inequality,不平等；不公平な事柄
768,prejudice,（～に対する）偏見（against）（≒ bias）
769,justice,公正，正義；司法
770,guideline,指針，ガイドライン；指導基準
771,platform,プラットフォーム；演壇；舞台
772,sector,（社会・経済などの）部門，セクター；（都市内の）地域
773,channel,チャンネル；伝達経路；海峡
774,glacier,氷河
775,primate,霊長目の動物
776,usage,（使）用法；語法；習慣
777,fortune,財産；幸運（≒ luck）；運命
778,correlation,相互関係，相関（関係）
779,artistic,芸術的な
780,literary,文学の；文語の（⇔ colloquial 口語体の）
781,classic,第一級の；典型的な；定番の
782,liberal,自由主義の；寛大な；一般教養の
783,concrete,具体的な（⇔ abstract ⇒ 586）；有形の
784,slight,わずかな；取るに足らない
785,federal,連邦（政府）の
786,primitive,原始的な；未開の
787,unfamiliar,（～に）不慣れな（with）；（～に）（よく）知られていない（to）
788,subtle,微妙な；（気体などが）希薄な
789,plain,明らかな；平易な；飾りのない；率直な
790,marine,海の；船舶の
791,apparent,明白な；一見～らしい
792,reluctant,気が進まない，嫌がる（⇔ willing ⇒ 298）
793,temporary,一時的な（⇔ permanent ⇒ 690）
794,guilty,罪悪感のある；（～について）有罪の（of）
795,royal,王の
796,pure,純粋な；潔白な；まったくの
797,incredible,信じられない；すばらしい
798,eager,（～を）熱望して（for）；熱心な
799,adequate,十分な；適切な（⇔ inadequate 不適切な）
800,via,～経由で；～の媒介で
801,assess,を評価する；を査定する
802,approve,賛成する；を承認する
803,remark,と述べる；（～について）意見を述べる（on / upon）
804,pose,（危険）を引き起こす；（問題など）を提起する；ポーズをとる；（～を）装う（as）
805,yield,をもたらす；を（～に）譲る（to）；（～に）屈する（to）
806,exhibit,を示す，見せる；を展示する
807,distribute,を（～に）分配する（to）；〔受身形で〕分布する
808,command,を命じる；を指揮する；（景色）を見渡せる
809,occupy,（空間・時間）を占める；を占領する
810,pop,ひょいと動く；不意に現れる；ポンとはじける
811,pile,を積み重ねる；積み重なる
812,greet,に挨拶する；を迎える
813,apologize,（～に；～のことで）謝る（to；for）；弁明する
814,frustrate,をいら立たせる；（計画・希望など）を挫折させる
815,relieve,を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する
816,derive,由来する；を引き出す；を推論する
817,deserve,に値する
818,peer,（～を）じっと見る（at / into）
819,defeat,を負かす（≒ beat）；を失敗させる
820,convert,を変える；を改宗［転向］させる；を交換する
821,wed,と結婚する；を（～と）結婚させる（to）
822,delight,を喜ばせる；（～を）大いに喜ぶ（in）
823,boost,を押し上げる；を増加させる
824,endure,に耐える（≒ put up with）；（に）持ちこたえる
825,correspond,一致する；（～に）相当する（to）；文通する
826,impose,を課す；を押しつける
827,rescue,を救う
828,resolve,を解決する；を決意する；を議決する
829,register,を記録する，登録する；（～に）登録する（for）
830,interrupt,を中断させる；（の）邪魔をする
831,rid,から（～を）取り除く，除去する（of）
832,prohibit,を禁止する
833,compose,を構成する；を創作する；を鎮静する
834,misunderstand,（を）誤解する
835,punish,を罰する；に損傷を与える
836,ruin,をだめにする；を破滅させる；破滅する
837,defend,を防御する；を弁護する
838,embrace,を受け入れる；（を）抱擁する；を包含する
839,modify,を修正する；を緩和する
840,qualify,（人）に資格を与える；資格がある
841,passion,情熱；熱中；激怒
842,enthusiasm,（～への）熱情，熱意（for）
843,phase,段階，局面；側面
844,mode,方式；気分；形態；流行
845,span,期間；範囲
846,gravity,重力，引力；重量；重大さ
847,orbit,軌道；（活動・勢力などの）範囲
848,asteroid,小惑星（≒ minor planet）；ヒトデ（＝ starfish）
849,core,核心；芯
850,soul,精神；魂，霊魂；生気
851,nerve,神経；〔～s〕神経過敏；（...する）度胸（to do）
852,infection,感染（症）
853,mall,【主に米】 モール，ショッピングセンター
854,grocery,〔～ies〕食料雑貨；食料雑貨店
855,humor,ユーモア；気分，機嫌；気質
856,instinct,本能；勘，直感；（自然に起こる）衝動
857,faith,（～への）信頼（in）；信仰（心）
858,courage,勇気
859,incentive,動機（づけ）；報奨金
860,prospect,見込み；〔～s〕（未来への）展望；有望な人
861,obstacle,（～に対する）障害（物）（to）
862,architecture,建築；建築様式；構造
863,stem,（草木の）茎，幹
864,illusion,錯覚，思い違い；幻想
865,discrimination,（～に対する）差別（against）；区別
866,shame,恥；残念なこと
867,drought,干ばつ；（慢性的な）不足
868,flavor,風味；特色
869,portion,部分；1人前；割り当て
870,recipe,調理法，レシピ；手順；秘訣
871,luxury,ぜいたく（品）；〔形容詞的に〕豪華な
872,chip,小片，破片；欠けた箇所；集積回路
873,ritual,儀式；（日常の）習慣的行為
874,sake,〔for the ～ ofで〕のために，の目的で；に免じて
875,prefecture,（日本の）県，府；（フランスなどの）県
876,council,（地方）議会；評議会；（公の）会議
877,administration,管理（部）；行政；政府（機関）
878,curriculum,教育課程，カリキュラム
879,precious,貴重な；高価な（≒ valuable）
880,generous,寛大な；気前のよい（⇔ stingy けちな）；豊富な
881,casual,何気ない；形式ばらない
882,optimistic,楽観的な（⇔ pessimistic ⇒ 1593）
883,rough,粗い；大まかな；乱暴な
884,unpleasant,不愉快な；不親切な，無礼な
885,Arctic,北極の（⇔ Antarctic 南極の）
886,ultimate,究極の
887,deaf,耳が聞こえない（≒ hard of hearing）
888,genuine,"本物の（≒ authentic ⇒ 1580, real）；偽りのない"
889,manual,体［手］を使う；手の；手動式の
890,mechanical,機械の；機械的な
891,instant,即時の，すぐの；即席の
892,spare,余分の，予備の
893,immune,（～に対して）免疫を持つ（to）；（～を）免れた（from）
894,harsh,厳しい；（光・色・味などが）不快な
895,collective,集団の，共同の
896,inevitable,避けられない
897,profound,重大な；深い；難解な
898,steady,着実な，一定の；安定した
899,mature,成熟した（⇔ immature 未熟な）；熟した
900,likewise,同様に（≒ in the same way）
901,chase,（を）追跡する；（を）追求する
902,sue,を告訴する；（～を求めて）訴訟を起こす（for）
903,gaze,じっと見る
904,slip,滑る；滑り落ちる；そっと動く
905,load,に積む；に負わせる
906,overwhelm,を圧倒する；を（精神的に）打ちのめす
907,wander,歩き回る；それる；はぐれる
908,float,漂う，浮かぶ；を浮かべる
909,pour,を注ぐ；激しく降る；押し寄せる
910,substitute,を代わりに使う；（～の）代理をする（for）
911,pronounce,を発音する；を宣言する
912,shrink,縮む，縮小する；減少する；ひるむ
913,restore,を回復させる；を修復する
914,trigger,を引き起こす；のきっかけとなる
915,grab,をつかむ；を横取りする；を急いで食べる
916,retain,を保持する；を覚えている
917,reproduce,を複製する；を繁殖させる；繁殖する
918,bob,上下に動く；急に動く；を上下に動かす
919,entertain,を楽しませる；をもてなす
920,interfere,干渉する，介入する；邪魔する
921,cultivate,を養う；を耕す；を栽培する
922,underlie,の根底にある
923,anticipate,を予期する；楽しみに待つ
924,justify,を正当化する
925,regulate,を規制する；を調整する
926,scan,を走査［スキャン］する；をざっと見る；を注意深く調べる
927,classify,を分類する；を機密扱いにする
928,submit,を提出する；〔submit oneselfで〕（～に）従う（to）
929,pause,（一時的に）中止する；（一瞬）立ち止まる
930,lean,傾く；寄りかかる；をもたせかける
931,bump,ぶつかる；をぶつける
932,fold,を折り畳む；（両腕）を組む；（折り）畳める
933,hesitate,躊躇する，ためらう
934,pump,（液体・気体）をポンプで送り込む；をくみ出す；を注ぎ込む
935,mount,を据えつける；に着手する；（自転車など）に乗る；増える
936,exceed,を超える；に勝る
937,undergo,を経験する；（手術など）を受ける；に耐える
938,confront,に立ち向かう；（困難などが）に立ちはだかる
939,consult,（に）相談する；を参照する
940,fulfill,を実現させる；を果たす；を満たす
941,privilege,特権，特典
942,formation,形成；構成（物）；隊列
943,dimension,側面，局面；次元；寸法
944,neuron,ニューロン，神経単位
945,sensation,感覚；大評判
946,chart,図，グラフ；海図；ヒットチャート
947,geography,〔the ～〕地理；地理学
948,panel,（専門家の）一団；討論者一同；羽目板
949,semester,【主に米】 （2学期制の）学期
950,workforce,労働人口，総労働力；全従業員（数）
951,mill,製造工場；製粉所；粉ひき機
952,abuse,乱用；虐待
953,vice,（道徳上の）悪（⇔ virtue ⇒ 1078）；欠点
954,fate,運命；結末；最期
955,tragedy,悲劇（的な事態）（⇔ comedy 喜劇）
956,scenario,（予想される）筋書き，事態；脚本
957,allergy,アレルギー
958,wound,（銃弾・刃物などによる）傷；痛手
959,antibiotic,〔通例～s〕抗生物質
960,vaccine,ワクチン
961,metaphor,隠喩；比喩
962,folk,人々；〔～s〕皆さん；〔one's ～s〕家族
963,fare,（乗り物の）料金
964,transition,移り変わり；過渡期
965,maximum,最大限（⇔ minimum ⇒ 653）
966,galaxy,星雲，銀河；〔the G～〕銀河系
967,mineral,鉱物；ミネラル
968,skeleton,骨格；骨組み；概略
969,counterpart,相当する物［人］
970,stroke,脳卒中；（ボールを）打つこと；（雷などの）一撃
971,pedestrian,歩行者
972,trail,（野山などの）小道；跡；手がかり
973,ecology,生態学；生態系；環境保護
974,sibling,きょうだい（の1人）
975,ratio,比率
976,mixture,混合（物）
977,charm,魅力；お守り
978,ambition,（～に対する）願望，野望（for）；野心
979,prominent,卓越した；目立つ
980,radical,急進的な；根本的な
981,prompt,即座の，迅速な
982,informal,形式ばらない，略式の（⇔ formal 正式の）；（言葉が）くだけた
983,mutual,相互の；共通の
984,neutral,中立の；（特徴・表情などが）はっきりしない
985,alert,警戒して；敏速な
986,magnetic,磁気の；磁石の；人を引きつける
987,polar,極地の；電極の
988,fluent,流ちょうな
989,external,外部の（⇔ internal ⇒ 680）；対外的な
990,passive,受動的な；消極的な
991,awful,ひどい；嫌な；ものすごい
992,unrelated,無関係の；血縁関係がない
993,cruel,残酷な；むごい
994,fake,偽の；見せかけだけの
995,vulnerable,（攻撃などに）弱い，もろい；傷つきやすい
996,urgent,緊急の
997,spiritual,精神の（⇔ material ⇒ 73）；霊的な
998,modest,謙虚な（≒ humble）；適度な；質素な
999,keen,熱心な；鋭敏な；（感情・関心などが）強い
1000,nonetheless,それにもかかわらず，それでもなお（≒ nevertheless）
1001,negotiate,交渉する；を（交渉して）取り決める
1002,grasp,を把握［理解］する；をしっかり握る
1003,donate,を寄付する；（臓器・血液）を提供する
1004,arrest,を逮捕する；を止める；（注意）を引く
1005,crack,ひびが入る；にひびを入れる
1006,tap,を軽くたたく；（液体）を出す；を盗聴する
1007,split,を分割する；を分担する；分裂する
1008,forecast,を予想［予測］する
1009,exclude,を除外する（⇔include を含む）
1010,overlook,を見落とす；を大目に見る；を見渡す
1011,burst,破裂する；（～を）突然始める（into）
1012,heal,（人・傷など）を治す；治る
1013,forbid,を禁じる（⇔permit 許可する）
1014,install,をインストールする；を設置する；を就任させる
1015,diminish,を減らす；減少する（≒decrease）
1016,cite,を引き合いに出す；を引用する
1017,quote,を引用する；を引き合いに出す
1018,dispute,に異議を唱える；（を）議論する
1019,highlight,を目立たせる、強調する
1020,distract,（注意など）をそらす
1021,cheat,をだます；不正をする
1022,foster,をはぐくむ；を養育する；を心に抱く
1023,obey,に従う；に服従する
1024,bend,を曲げる；を屈服させる；曲がる
1025,deprive,から（権利などを）奪う
1026,govern,（を）統治する、支配する
1027,log,〔log onで〕ログオンする；を記録する
1028,transmit,を伝える；（電波・信号など）を送る
1029,bully,をいじめる；を脅す
1030,leap,跳ぶ；さっと動く；急上昇する
1031,astonish,を驚かす
1032,thrill,をぞくぞくさせる；わくわくする
1033,nod,うなずく；会釈する；うとうとする
1034,bow,おじぎする；屈服する
1035,blend,を混ぜる；を調和させる；（～に）溶け込む（into）
1036,complicate,を複雑にする
1037,pitch,を投げる；倒れる；縦揺れする
1038,persist,続く；固執する
1039,dedicate,をささげる；を献呈する
1040,equip,に備えつける
1041,premise,前提；〔～s〕（建物を含めた）構内、敷地
1042,input,入力（情報）、投入；（情報・時間などの）提供
1043,merit,利点（⇔demerit 欠点）；功績；真価
1044,sympathy,同情；（～に対する）共感（with/for）
1045,compliment,賛辞；表敬
1046,infrastructure,インフラ、基本的施設；（経済）基盤
1047,ray,光線；ひらめき、一筋の光明
1048,distress,苦悩；苦痛；困窮
1049,joint,関節；接合（部）
1050,expedition,遠征（隊）、探検（隊）
1051,adolescent,青年；青年期の
1052,shade,（日）陰；色合い；日よけ；微妙な相違
1053,jury,陪審（員団）；審査員団
1054,ethic,倫理、道徳；〔～s〕倫理［道徳］規範
1055,penalty,（刑）罰；罰金；ペナルティー
1056,faculty,能力、機能；学部；教授陣
1057,scheme,計画（≒plan）；体系；陰謀
1058,nutrition,栄養（の摂取）
1059,particle,（微）粒子；ほんのわずか
1060,molecule,分子；微粒子
1061,nationality,国籍；国民；国民性
1062,poll,世論調査；投票（数）
1063,clinic,診療所、クリニック；（病院内の）～科
1064,dementia,認知症
1065,fatigue,疲労（≒exhaustion）
1066,dilemma,ジレンマ、板ばさみ
1067,queue,【英】（順番を待つ）列
1068,curve,（道路などの）カーブ；曲線
1069,narrative,物語、話；（小説の）叙述部分、地の文
1070,fingerprint,指紋
1071,file,ファイル；（書類の）とじ込み
1072,wilderness,荒野；（庭・町などの）放置された部分
1073,pesticide,殺虫剤；除草剤（≒herbicide）
1074,panic,パニック（状態）；狼狽
1075,fabric,織物、布（地）；構造
1076,fantasy,空想；幻想；幻想的作品
1077,fancy,（気まぐれな）好み；空想；思いつき
1078,virtue,美徳（⇔vice 悪）；長所；効能
1079,grateful,感謝している
1080,valid,妥当な；有効な
1081,elaborate,入念な；凝った
1082,moderate,適度な；穏健な
1083,dynamic,活動的な、精力的な；動的な（⇔static 静的な）
1084,brave,勇敢な（⇔cowardly 臆病な）；見事な
1085,brilliant,すばらしい；才能にあふれた；きらめく
1086,tremendous,途方もない、莫大な；すばらしい
1087,oral,口頭の
1088,innocent,無罪の（⇔guilty 有罪の）；無邪気な；無知の
1089,subsequent,その後の
1090,shallow,浅い（⇔deep 深い）；浅薄な
1091,indifferent,無関心な（≒uninterested）
1092,inferior,より劣った（⇔superior よりすぐれた）
1093,awkward,気まずい；ぎこちない；厄介な
1094,obese,肥満した
1095,pregnant,妊娠した；（～で）満ちている（with）
1096,intimate,親密な；密接な
1097,medieval,中世の；時代遅れの
1098,sacred,神聖な（≒holy）；宗教的な；厳粛な
1099,simultaneously,（～と）同時に（with）；一斉に
1100,versus,〔A ～ Bで〕A対B；AかBか
1101,proceed,進む，進行する；（～を）続行する（with）
1102,orient,（人）を（環境などに）慣らす（to）；〔受身形で〕（関心などが）（～に）向いている（to / toward）
1103,surf,（インターネット上の情報など）を見て回る；サーフィンをする
1104,filter,をろ過する；を取り除く
1105,bind,を縛る；を束縛する；を結び付ける
1106,resort,（好ましくない手段に）訴える，頼る（to）
1107,reinforce,を強化する；を補強する
1108,accumulate,を蓄積する，集める；積もる
1109,bet,と確信する，断言する；（金などを）かける
1110,advocate,を主張する；を擁護する
1111,constitute,を構成する；になる，に等しい
1112,undertake,を引き受ける；を保証する；に着手する
1113,grip,を握る；をとらえる
1114,dismiss,（意見など）を退ける；を解雇する
1115,fade,薄れる；衰える
1116,conceal,を隠す（≒ hide）；を秘密にする（⇔uncover ⇒ 1236）
1117,chew,（を）かむ；をかみ砕く
1118,swallow,（を）飲み込む；をうのみにする；に耐える
1119,seal,を密閉する；に封をする
1120,migrate,移住する；（鳥などが）渡る
1121,exaggerate,（を）誇張する；を強調する
1122,accuse,を非難する；を告訴する
1123,vanish,消える（≒ disappear）
1124,polish,を磨く；を洗練させる
1125,wipe,を拭く；を拭き取る；を消し去る
1126,sweep,（を）掃く；を一掃する；さっと通過する
1127,mislead,を誤解させる，欺く；（人）を間違った方向に導く
1128,spoil,を台無しにする；を甘やかす；だめになる
1129,compound,を悪化させる；を合成する；を混合する
1130,explode,爆発する；急増する；を論破する
1131,disgust,をむかつかせる；に愛想を尽かせる
1132,commute,通勤［通学］する
1133,decorate,を装飾する
1134,postpone,を延期する（≒ put off）
1135,cease,をやめる；終わる
1136,compromise,妥協する；を危うくする
1137,elect,を選出する
1138,extract,を取り［搾り］出す；を抜粋する
1139,inherit,を受け継ぐ；を相続する
1140,rear,（人・動物・植物）を育てる（≒ raise）
1141,empathy,感情移入，共感
1142,cue,合図；手がかり；（次の演技の）キュー
1143,enterprise,企業，事業；企画；進取の気性
1144,output,生産（高）；出力；排出（量）
1145,congress,（米国などの）議会；会議
1146,millennium,千年間，千年紀
1147,mankind,人類
1148,Muslim,イスラム教徒
1149,estate,（動産・不動産などの）財産；私有地
1150,landmine,地雷
1151,caution,用心；警告
1152,controversy,論争
1153,consensus,総意；（意見の）一致
1154,retail,小売り（⇔ wholesale 卸売り）
1155,fiber,繊維（質）；本質；精神力
1156,scent,（よい）香り；香水
1157,beverage,（水以外の）飲み物，飲料
1158,supplement,栄養補助剤，サプリメント；補足
1159,diabetes,糖尿病
1160,province,州，省；〔the ～s〕地方；分野
1161,reef,（岩や砂の）礁；暗礁
1162,microbe,微生物；細菌
1163,excess,過剰，超過
1164,gallery,美術館，画廊；観客，ギャラリー；回廊
1165,fame,名声
1166,deadline,締め切り
1167,undergraduate,学部学生
1168,slavery,奴隷制度；苦役
1169,prey,獲物；犠牲者
1170,mess,散らかった状態［物］；混乱状態
1171,recession,不況；後退
1172,retreat,後退，退却；（計画・決定などの）撤回
1173,grave,墓；〔通例the ～〕死
1174,column,コラム；（新聞などの）欄；円柱；（縦）列
1175,scenery,〔集合的に〕景色；背景
1176,plot,（小説などの）筋；陰謀
1177,sculpture,彫刻（作品）
1178,tablet,タブレット（型情報端末）；錠剤；平板
1179,dense,密集した，密度の高い；（霧などが）濃い
1180,exotic,外来の；異国風の
1181,acid,酸性の；酸っぱい；辛辣な
1182,bitter,苦い，つらい；辛辣な；怒りっぽい
1183,sensible,賢明な；実用的な；顕著な
1184,noble,高貴な；堂々とした；高潔な
1185,vague,漠然とした，あいまいな；おぼろげな
1186,parallel,（～と）平行［並行］の（to）；類似した
1187,tense,張り詰めた，緊張した
1188,vertical,垂直の（⇔ horizontal 水平な）；縦方向の
1189,indigenous,原産の，先住の；（その土地に）固有の
1190,aboriginal,〔通例A～〕アボリジニの；原生の，先住の
1191,seasonal,季節の，季節的な
1192,abundant,豊富な；（～に）富む（in）
1193,hybrid,ハイブリッドの；雑種の；混成の
1194,irrelevant,（～にとって）無関係の（to）；見当違いの
1195,ridiculous,ばかげた；法外な
1196,fairy,妖精の（ような）
1197,sensory,感覚の
1198,chronic,慢性の（⇔ acute ⇒ 1486）；長引く；常習の
1199,voluntary,自発的な（⇔ compulsory ⇒ 1384）；無償の
1200,inclined,傾向がある；傾いた
1201,infer,を推論する，推測する
1202,esteem,を尊敬する；を見なす
1203,tackle,に取り組む；と（～のことで）話をつける（about / on）
1204,venture,危険を冒して進む；を思い切ってする
1205,accelerate,を加速させる，促進する；加速する
1206,accustom,（人）を慣れさせる
1207,amuse,をおもしろがらせる，楽しませる
1208,flourish,繁栄する；繁茂する；を振りかざす
1209,thrive,繁栄する，うまくいく；繁茂する
1210,nurture,をはぐくむ；を養成する
1211,click,（を）クリックする；をカチッと鳴らす；カチッと音がする
1212,spin,回転する；を回転させる；（糸）を紡ぐ
1213,clip,を切り抜く；を（はさみで）切り取る；をクリップで留める
1214,drag,を引きずる；ぐずぐずする
1215,cast,を投じる；に役を当てる
1216,scatter,をまき散らす；分散する
1217,tempt,を（...する）気にさせる（to do）；を引きつける
1218,withdraw,を引き出す；を撤回する；撤退する
1219,yawn,あくびをする
1220,blink,まばたきする；点滅する；（目）をまたたく
1221,dye,を染める；染まる
1222,spill,をこぼす；こぼれる
1223,irritate,をいらいらさせる；をひりひりさせる
1224,insult,を侮辱する（≒ affront）
1225,enforce,を施行［実施］する；を（～に）強制する（on / upon）
1226,rob,から（金品を）奪う
1227,drain,（液体）を流出させる；（液体が）流れ出る
1228,suspend,を停職［停学，出場停止］にする；を一時的に中断する
1229,drift,漂う；さまよう；を押し流す
1230,forgive,を許す；を免除する
1231,revise,を修正する；を改訂する
1232,recruit,を募る；に新人を補充する
1233,twist,をねじる，ひねる；を歪曲する
1234,crush,を押しつぶす；を弾圧する；を絞り出す
1235,pin,をピンで留める；を突き刺す
1236,uncover,を暴く（⇔ conceal ⇒ 1116）；を 発掘する
1237,exploit,を活用する；を搾取する，につけ込む
1238,implement,を実行［実施］する
1239,integrate,を統合する；融合する
1240,incorporate,を取り入れる；を法人にする；合併する
1241,profile,人物の紹介；横顔；輪郭
1242,appetite,食欲；欲求
1243,impulse,衝動；刺激
1244,script,台本；筆跡
1245,anniversary,（～周年）記念日
1246,pension,年金
1247,temper,気質，気性；機嫌；かんしゃく
1248,cortex,皮質；樹皮
1249,syndrome,症候群；～現象
1250,chamber,（特定の目的の）部屋；議場；〔the ～〕議院
1251,utility,公共事業；公共料金；実用性
1252,cattle,〔集合的に〕牛
1253,herd,（牛などの）群れ；群衆
1254,fluid,流動体，液体
1255,pity,残念なこと；哀れみ
1256,priest,聖職者
1257,acquaintance,知人；面識；知識
1258,offspring,子孫，子；成果
1259,famine,飢饉；（食糧・物資の）ひどい不足
1260,deforestation,森林伐採
1261,jail,刑務所，拘置所（≒ prison）
1262,commodity,商品；有用なもの
1263,format,書式，形式；（本などの）型
1264,recipient,受け取る人；（臓器などの）被提供者
1265,drill,訓練；（反復）練習；ドリル，錐
1266,inability,無能，無力
1267,republic,共和国；共和制
1268,combat,戦闘；対立
1269,debris,（破壊された後の）残骸，瓦礫；がらくた
1270,bug,病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥
1271,fraction,わずか（≒ bit），一部；分数
1272,index,指標；索引；指数
1273,intuition,直観（力），直感
1274,motive,動機
1275,consent,同意，承諾
1276,hierarchy,（社会の）階層制；〔the ～〕支配層
1277,monument,記念碑，遺跡；金字塔
1278,asset,〔通例～s〕資産；価値のあるもの；利点
1279,decent,まずまずの；きちんとした；上品な
1280,competent,有能な；適任の；満足できる
1281,straightforward,単純な；率直な
1282,cosmetic,化粧の，美容の；うわべの
1283,delicate,繊細な；扱いにくい；もろい
1284,interior,室内の；内部の（⇔ exterior 外部の）
1285,transparent,透明な；明快な
1286,aesthetic,美的な；美学の
1287,deliberate,故意の；慎重な
1288,demographic,人口統計学の
1289,prehistoric,有史以前の；旧式な
1290,innate,生まれながらの；固有の
1291,mild,穏やかな；（程度が）軽い
1292,toxic,有毒な；中毒性の
1293,ashamed,恥じて
1294,humble,謙虚な；質素な；身分が低い
1295,peculiar,特有の；特異な
1296,steep,（傾斜が）急な；急激な；法外な
1297,trivial,ささいな，取るに足りない
1298,magnificent,壮大な；見事な
1299,wireless,無線（電信）の，ラジオの
1300,ongoing,継続している，進行中の
1301,assure,に自信を持って言う；を保証する
1302,precede,に先行する；に優先する
1303,revive,を復活させる；復活する
1304,compel,に強いる
1305,blossom,花が咲く（≒ bloom）；発展する
1306,terrify,を怖がらせる；を脅かす
1307,violate,（法律・規則など）に違反する；を侵害する
1308,suppress,を抑える；を抑圧する
1309,deceive,をだます（≒ take in）
1310,manipulate,を（巧みに）操る；を改ざんする
1311,starve,飢える；（～を）渇望する（for）；を飢えさせる
1312,flee,（から）逃げる
1313,whisper,（を）ささやく
1314,yell,叫ぶ，どなる
1315,deposit,を置く；を預ける；を堆積させる
1316,confine,を限定する；〔通例受身形で〕閉じ込められる
1317,swing,を揺らす，振る；揺れる；（行動に）さっと移る
1318,prolong,を長引かせる
1319,depict,を描く
1320,outline,の要点を述べる；の輪郭を描く
1321,shed,を捨て去る；（光など）を放つ；（涙・血）を流す
1322,emit,（光・熱など）を出す，排出する；（信号）を送る
1323,renew,を更新する；（資源）を再生する
1324,utilize,を利用する（≒ make use of）
1325,assert,を主張する
1326,strain,に負担をかける；を緊張させる；を漉す
1327,strive,努力する；争う
1328,dare,あえて［思い切って］...する
1329,boast,を誇る；（を）自慢する
1330,startle,をびっくりさせる（≒ surprise）
1331,offend,の気分を害する；（に）違反する
1332,compute,（を）計算する；コンピューターを使う
1333,assemble,を集める；を組み立てる；集まる
1334,worsen,を悪化させる；悪化する（≒ deteriorate）
1335,flip,を（ぱっと）裏返す；を軽くはじく
1336,rub,（を）こする；（～に）を塗る（on / over）
1337,descend,（を）降りる（⇔ ascend ⇒ 1839）；受け継がれる
1338,compensate,補償する（≒ make up）；に償う
1339,comprise,から成る；を構成する
1340,prevail,普及している；支配的である；（～に）打ち勝つ（over）
1341,quest,探究
1342,dignity,尊厳；威厳
1343,criterion,（判断・評価の）基準
1344,paradox,逆説；矛盾
1345,parliament,（英国などの）議会；国会議員（団）
1346,legislation,法律；立法
1347,agenda,協議事項（リスト）；議事日程（表）；（政治上の）課題
1348,mainstream,（活動・思潮などの）主流；大勢
1349,troop,〔～s〕軍隊；集団
1350,epidemic,流行（病）；蔓延
1351,outbreak,発生，勃発
1352,chaos,混沌，大混乱
1353,nightmare,悪夢（のような状況）；不安感
1354,horror,恐怖；強い嫌悪；嫌な物［人］
1355,cluster,集団；（植物の）房，束
1356,pollen,花粉
1357,hive,ミツバチの巣（箱）；人の集まる所
1358,irrigation,灌漑
1359,dose,（薬の1回分の）服用量；放射線の1回の照射量
1360,suicide,自殺；自殺的行為
1361,feast,祝宴；大ごちそう；楽しみ
1362,cuisine,（独特の）料理，料理法
1363,rumor,うわさ
1364,proverb,ことわざ（≒ saying）
1365,signature,署名；特徴
1366,formula,方法，解決策；公式
1367,tuition,【主に米】 授業料（＝ 【英】tuition fees）；（個人）指導
1368,intake,摂取量；受け入れ数；取り入れること
1369,spectrum,スペクトル；（波動・変動の）範囲
1370,kidney,腎臓
1371,gear,用具（一式），器具；歯車；ギア
1372,aisle,（座席間などの）通路
1373,grief,深い悲しみ
1374,destiny,運命
1375,skull,頭骨，頭蓋骨；頭脳
1376,tomb,墓
1377,monk,修道士，僧（⇔ nun 修道女，尼）
1378,worship,崇拝，礼拝（式）；賛美
1379,outstanding,際立った；未払いの；未解決の
1380,unprecedented,前例のない；空前の
1381,infinite,無限の（⇔ finite 有限の）；無数の
1382,worthwhile,価値がある；立派な
1383,indispensable,不可欠な（⇔ dispensable なくてもすむ）
1384,compulsory,義務的な，強制的な（⇔ voluntary ⇒ 1199）
1385,probable,十分にありそうな
1386,ambiguous,あいまいな；多義的な
1387,obscure,（世に）知られていない；不明瞭な
1388,skeptical,（～に）懐疑的な（of ⇒ about）
1389,fragile,壊れやすい；虚弱な
1390,static,静的な（⇔ dynamic ⇒ 1083）；動きのない
1391,gradual,徐々の，緩やかな
1392,vocal,声の，発声の；はっきりものを言う
1393,vivid,鮮やかな；生き生きとした
1394,imperial,帝国の；皇帝の
1395,hostile,敵意のある（⇔friendly 友好的な）
1396,superficial,表面的な
1397,scarce,乏しい；珍しい
1398,gross,総計の；甚だしい；粗野な
1399,inherent,生来の，本来的に備わっている
1400,notable,注目に値する；著名な
1401,update,を最新のものにする；をアップデートする
1402,refresh,（気分）をさわやかにする；（記憶など）を新たにする；を最新のものにする
1403,bloom,花が咲く；栄える
1404,conquer,を征服する；を克服する
1405,induce,を引き起こす；を説得する
1406,attain,を獲得する，達成する；に達する
1407,spray,を吹きかける，に吹きつける
1408,retrieve,（情報）を検索する；を取り戻す；を回復する
1409,portray,を描く；（の役）を演じる
1410,scratch,を引っかく；を取り消す，削除する
1411,designate,を指定する；を任命する
1412,contradict,と矛盾する；に反対意見を言う
1413,sigh,ため息をつく
1414,disrupt,を混乱させる；を分裂させる
1415,depart,出発する；（～から）それる（from）
1416,navigate,（を）誘導する；（を）操縦する；（を）航行する
1417,beg,に（～を）切に頼む（for）；（を）懇願する
1418,inhabit,に住んでいる；に宿る，存する
1419,diagnose,（を）診断する
1420,comprehend,を理解する
1421,oblige,に義務づける；に恩恵を施す
1422,cram,に詰め込む；詰め込み勉強をする
1423,flock,群がる，集まる
1424,underestimate,（を）過小評価する（⇔ overestimate （を）過大評価する）；（を）軽く見る；を少なく見積もる
1425,clarify,を明確にする
1426,spark,を引き起こす；を刺激する；スパークする
1427,seize,をつかむ；を奪い取る；を没収する
1428,soar,急上昇する；空高く飛ぶ
1429,glow,光り［照り］輝く；赤く燃える；紅潮する
1430,disguise,を（～に）変装させる（as）；を偽る
1431,distort,を歪める；歪む
1432,undermine,を徐々にむしばむ；を侵食する
1433,abolish,を廃止する（≒ do away with）
1434,strip,を［から］取り去る；を裸にする
1435,dispose,〔dispose ofで〕を処分する；を（...する）気にさせる（to do）；を配置する
1436,dump,を投棄する；をどさっと落とす
1437,weave,を織る；（計画・物語など）を作り上げる
1438,refine,を洗練する；を精製する
1439,enrich,を豊かにする；（物質）を濃縮化する
1440,coordinate,を調整する；を組織する；（服など）をコーディネートする
1441,headline,（新聞などの）見出し
1442,internship,【米】 実務［医学］研修；研修期間
1443,outlet,直売店，特売店；はけ口；【米】（電気の）コンセント（≒ 【英】socket）
1444,remedy,治療（法）；治療薬；解決法
1445,pill,錠剤，丸薬；〔the ～〕ピル，経口避妊薬
1446,reception,反応；宴会；受付；受信（状態）
1447,transaction,（商）取引；（人と人との）交流
1448,mutation,突然変異（体）；変化
1449,dairy,〔集合的に〕乳製品；乳製品加工所［販売者］
1450,compassion,同情
1451,posture,姿勢；心構え
1452,curse,悪態，ののしりの言葉；呪い；〔通例a ～〕災い
1453,funeral,葬式
1454,census,国勢調査；交通調査
1455,encyclopedia,百科事典
1456,cereal,〔通例～s〕穀物；シリアル（穀物加工食品）
1457,fragment,断片
1458,patch,（～の）部分，斑点；継ぎ；貼り薬
1459,rubbish,【英】 ごみ（≒ 【米】garbage）；つまらないもの
1460,maze,迷路（≒ labyrinth）；複雑に込み入ったもの
1461,outlook,見解；見通し；眺め
1462,breakthrough,大発見，飛躍的進歩
1463,triumph,勝利；勝利の喜び；偉業
1464,ally,同盟国；提携者；援助者；盟友
1465,spectator,（試合などの）観客
1466,sphere,領域；球体；天体
1467,county,【米】 郡；【英】州
1468,behalf,利益，味方
1469,interval,（時間の）間隔；合間；隔たり；小休止
1470,circulation,循環；流通；（新聞・雑誌の）発行部数
1471,blade,刃；（プロペラなどの）羽根；（草などの）葉
1472,theft,窃盗（罪）
1473,vacuum,真空；空虚
1474,collision,衝突；対立
1475,bargain,買い得品；取引；契約
1476,landmark,（ある場所の）目印；画期的な出来事
1477,revenue,歳入（⇔ expenditure 歳出）；収益
1478,treaty,（国家間の）条約；協定
1479,supreme,最高の
1480,thorough,徹底的な；まったくの
1481,naked,裸の
1482,sincere,心からの；誠実な
1483,tame,飼いならされた，人に慣れた；退屈な
1484,insufficient,不十分な；不適当な
1485,dim,薄暗い；ぼんやりした
1486,acute,（痛み・感情などが）激しい；（知覚などが）鋭い；急性の（⇔ chronic ⇒ 1198）
1487,disabled,障害のある；障害者用の
1488,metropolitan,大都市の，首都圏の
1489,monetary,金銭的な；金融の
1490,alternate,代わりの（≒ alternative）；交互の
1491,partial,部分的な；不公平な（⇔impartial 公平な）
1492,divine,神の；神にささげる
1493,drastic,徹底的な，抜本的な；極端な
1494,fierce,猛烈な；どう猛な
1495,sole,唯一の；単独の；独占的な
1496,spontaneous,自然発生的な；自発的な
1497,spatial,空間の
1498,neat,きちんとした；見事な
1499,tidy,きちんとした，整頓された；相当の
1500,loyal,（～に）忠実な（to）；誠実な
1501,bless,に恩恵を与える；に感謝する
1502,regain,を取り戻す
1503,conform,順応する；一致する
1504,enroll,登録する，入会する；を登録させる
1505,entitle,に権利を与える；に題名をつける
1506,halt,を止める；止まる
1507,provoke,（感情・行動など）を引き起こす；を挑発する
1508,invade,を侵略する；を侵害する；（場所）に殺到する
1509,squeeze,押し入る；を押し込む；（を）搾る；（を）強く押す
1510,crawl,はう；ゆっくり進む
1511,digest,を消化する；を理解する；を要約する
1512,utter,（声）を発する；（考えなど）を述べる
1513,refrain,控える
1514,populate,に住む，の住民である；に人を住まわせる
1515,accommodate,を収容する；を（～に）適応させる（to）
1516,steer,（を）操縦する；を（～へ）向ける（to）
1517,drown,溺死する；を水浸しにする
1518,dip,を浸す；（手など）を（～に）突っ込む（into / in）；下がる
1519,soak,を浸す；をずぶぬれにする；浸る
1520,stir,をかき回す；を揺り動かす
1521,transplant,を移植する；を移住させる
1522,reassure,を安心させる
1523,resume,（を）再開する；を取り戻す
1524,speculate,（と）推測する；投機する
1525,surpass,を上回る
1526,appoint,を任命する；（日時・場所など）を指定する
1527,intrigue,に興味を持たせる；陰謀を企てる
1528,decay,腐敗する（≒ rot）；（徐々に）衰える
1529,contaminate,を汚染する；を堕落させる
1530,swell,膨張する，腫れる；を膨らませる
1531,delete,を削除する，消す
1532,tolerate,を許容する，我慢する（≒ put up with）
1533,envy,をうらやむ
1534,pray,（を）祈る
1535,confess,（を）告白する
1536,resign,（を）辞任する；を放棄する
1537,dissolve,（を）溶かす；（議会など）を解散する；（契約など）を解消する；溶ける
1538,unfold,（閉じたもの）を開く；を明らかにする；開く；明らかになる
1539,awaken,を目覚めさせる；（～から）覚める（from）
1540,conceive,（を）思いつく；と想像する；（を）妊娠する
1541,entrepreneur,起業家，事業家
1542,stake,利害関係；〔通例～s〕賭け金；杭
1543,surplus,余剰（⇔ shortage 不足），過剰；黒字
1544,inflation,インフレ（ーション）；（物価の）高騰
1545,sweatshop,搾取工場
1546,clash,衝突；対立；かち合うこと；ガチャンという音
1547,sociology,社会学
1548,ideology,イデオロギー，思想傾向
1549,margin,余白；差；利ざや
1550,realm,領域；領土
1551,domain,分野；領域；ドメイン（＝ domain name）
1552,algorithm,アルゴリズム；問題解決の手順
1553,prairie,大草原
1554,frontier,〔通例the ～s〕最先端；〔the ～〕 【米】辺境地；国境
1555,bullet,銃弾
1556,shield,盾，防御物
1557,despair,絶望
1558,radiation,放射能，放射線
1559,placebo,偽薬，プラシーボ；気休め
1560,nursery,託児所；苗床
1561,spouse,配偶者
1562,makeup,化粧；化粧品；構成；性質
1563,mummy,ミイラ；【英】ママ，お母さん（＝ 【米】mommy）
1564,flesh,（人・動物の）肉；果肉
1565,limb,手足
1566,odor,におい；気配
1567,laundry,洗濯（物）；クリーニング店
1568,tide,潮（の干満）；動向
1569,questionnaire,アンケート
1570,nonsense,ばかげた物［話，考え］；無意味な言葉
1571,revenge,復讐
1572,intellect,知性；〔the ～（s）〕知識人
1573,hospitality,親切なもてなし，歓待；受容性
1574,librarian,司書，図書館員
1575,manuscript,（手書きの）原稿；写本
1576,obsession,（考えなどに）取りつかれること；妄想；強迫観念
1577,hygiene,衛生（状態）；健康法
1578,paradigm,理論的枠組み，パラダイム；模範
1579,legitimate,合法的な；妥当な
1580,authentic,本物の；信頼できる
1581,empirical,経験的な；経験主義の
1582,immense,膨大な
1583,absurd,ばかげた；不合理な
1584,weird,異様な（≒ bizarre），奇妙な
1585,accidental,偶然の；過失による
1586,uneasy,不安な；落ち着かない；ぎこちない
1587,jealous,嫉妬深い；用心深い
1588,feminine,女らしい（⇔ masculine ⇒ 1681）
1589,swift,素早い
1590,hollow,空洞の；空虚な；うわべだけの
1591,crude,大まかな；粗野な；未精製の
1592,sore,痛い；腹が立って
1593,pessimistic,悲観的な（⇔ optimistic ⇒ 882）
1594,vain,無駄な；うぬぼれた
1595,susceptible,（～の）影響を受けやすい（to）；感染しやすい
1596,edible,食用の，食べられる
1597,sheer,純然たる，真の；すごい；（布が）薄地の
1598,explicit,明白な（⇔ implicit ⇒ 1795）；率直な
1599,prone,（～に）なりやすい（to）；（...する）傾向がある（to do）
1600,affluent,裕福な；豊富な
1601,collaborate,共同して働く；（～に）協力する（with）
1602,exert,を及ぼす；（力など）を行使する
1603,excel,（～で）秀でている（in / at）；に勝る
1604,prosper,栄える，成功する；繁殖する
1605,surge,殺到する；（感情が）こみ上げる；急騰する
1606,intervene,（～に）介入する（in）；介在する
1607,insert,を挿入する
1608,overtake,を追い抜く；に追いつく（≒ catch up with）；（災難・強い感情などが）を襲う
1609,snap,をパチンと鳴らす；をポキッと折る；ポキッと折れる；パチンと音を立てる
1610,carve,を彫る；を切り開く；（肉）を切り分ける
1611,addict,〔受身形で〕（～の）中毒になる（to）；（～に）凝る
1612,condemn,を非難する；〔受身形で〕（～の刑を）宣告される（to）
1613,convict,に有罪を宣告する
1614,dictate,を指図する；を書き取らせる；を規定する
1615,prescribe,（薬など）を処方する；を規定する
1616,inhibit,を抑制する；を妨げる
1617,stray,はぐれる，（道に）迷う
1618,roam,（を）歩き回る；放浪する
1619,enclose,を同封する；を取り囲む
1620,execute,を実行する；を処刑する
1621,coincide,同時に起こる；一致する
1622,lag,遅れる；徐々に弱まる
1623,cling,しがみつく；くっつく
1624,erase,を消す
1625,grind,（穀物など）をひく
1626,knit,を編む；を結合する；編み物をする
1627,inquire,（を）尋ねる
1628,betray,をうっかり表す；を裏切る
1629,leak,漏れる；を漏らす
1630,smash,を粉砕する；を強打する；粉々に壊れる；激突する
1631,bounce,跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される
1632,sprawl,（都市などが）不規則に広がる；だらしなく手足を伸ばす
1633,converse,（～と）会話をする（with）
1634,recite,を暗唱する；を詳述する
1635,disregard,を無視する；を軽視する
1636,frown,眉をひそめる
1637,evoke,を呼び起こす
1638,pledge,を誓う，約束する；を与えることを約束する
1639,aspire,（～を）熱望する（to）
1640,contemplate,（を）熟考する；を予想する
1641,grace,優美，優雅；分別；（神の）恩寵
1642,enlightenment,啓蒙，啓発
1643,commerce,商業；貿易
1644,draft,下書き；為替手形；隙間風
1645,barrel,バレル（液量の単位）；たる
1646,timber,【英】 木材（≒ 【米】lumber）；樹木
1647,garment,衣服
1648,thread,糸；（議論などの）筋道
1649,cabinet,〔しばしばthe C-〕内閣；戸棚
1650,bureau,（官庁の）局；事務局；案内所
1651,autonomy,（個人の）自律；自治（権）；自治体
1652,toll,損害（の程度）；死傷者数；通行料
1653,discourse,話し合い，会話；講演；論説
1654,superstition,迷信
1655,glimpse,ちらりと見えること
1656,arithmetic,計算；算数
1657,glossary,用語小辞典；用語集
1658,archive,〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ
1659,legacy,遺産
1660,anthropology,人類学
1661,rage,激怒；猛威
1662,sorrow,悲しみ
1663,psychiatrist,精神科医
1664,ward,行政区；病棟
1665,stall,露店；エンスト；失速
1666,flame,炎；情熱
1667,moisture,水分；湿気
1668,irony,皮肉
1669,warrior,戦士
1670,astronomy,天文学
1671,probe,（無人）宇宙探査機；（～の）精査（into）；探り針
1672,altitude,高度，標高
1673,tumor,腫瘍；腫れ物
1674,defect,欠陥；不足
1675,sanitation,公衆衛生（学）；下水［衛生］設備
1676,longevity,長寿；寿命；長年勤続
1677,scope,（活動・能力などの）範囲；余地
1678,sentiment,感情；感想；感傷
1679,plausible,もっともらしい
1680,vigorous,精力的な；激しい；活力のある
1681,masculine,男らしい（⇔ feminine ⇒ 1588）
1682,rigid,厳しい；硬直した
1683,adverse,不都合な；逆の
1684,coherent,一貫した，筋の通った；結束した
1685,literal,文字どおりの；逐語的な；散文的な
1686,arbitrary,恣意的な；独断的な
1687,anonymous,匿名の
1688,antique,骨董の，アンティークの；古風な
1689,eternal,永遠の；不変の
1690,intermediate,中級の；中間の
1691,subordinate,（～より）下位の（to）；副次的な
1692,gloomy,陰気な；薄暗い；悲観的な
1693,thermal,熱の，熱による；保温用の
1694,faint,かすかな；めまいがする；弱々しい
1695,naive,お人よしの，愚直な；純朴な
1696,apt,（...する）傾向がある（to do）；適切な；利発な
1697,arrogant,横柄な，傲慢な
1698,extrovert,外向的な；社交的な
1699,conspicuous,目立つ
1700,intact,損なわれていない，手つかずの
1701,embody,を具現する；を包含する
1702,illuminate,を照らす；を解明する
1703,console,を慰める
1704,verify,の正しさを証明［確認］する
1705,disclose,を公表する，暴く
1706,stack,を積む，積み重ねる；〔～ upで〕（車が）渋滞する
1707,rotate,回転する；循環する；を回転させる
1708,constrain,に（...することを）強いる（to do）；を抑える
1709,hinder,を妨げる
1710,withstand,に耐える
1711,tweet,（を）ツイートする，つぶやく
1712,sneeze,くしゃみをする
1713,erupt,（火山が）噴火する；勃発する
1714,blur,をぼかす；を曇らせる；をあいまいにする
1715,overlap,（一部）重なる；（と）重複［共通］する
1716,embed,〔通例受身形で〕埋め込まれる，はめ込まれる
1717,displace,に取って代わる（≒ replace）；を移動させる
1718,render,を（ある状態に）する；（援助など）を与える
1719,plunge,（～に）（を）突っ込む（into）；没頭する；陥る
1720,surrender,を放棄する，引き渡す；（～に）屈する（to）
1721,plug,〔plug inで〕のプラグを電源に差し込む；を（～で）ふさぐ（with）
1722,suck,（を）吸う；（を）しゃぶる
1723,mock,をばかにする（≒ make fun of）；のまねをしてからかう
1724,tease,（を）からかう；をいじめる
1725,soothe,をなだめる；を和らげる
1726,stain,を汚す；に着色する
1727,shun,を避ける
1728,stumble,よろけながら歩く；（～に）つまずく（on / over）
1729,flush,を紅潮させる；を水で流す；紅潮する
1730,impair,を損なう
1731,presume,と思う；と推定する；を前提とする
1732,contend,と主張する；競う
1733,roar,うなる，ほえる；大笑いする
1734,haunt,（記憶・考えなどが）につきまとう；（幽霊などが）に出る；によく行く
1735,divert,（注意など）をそらす；を迂回させる；（資金など）を転用する
1736,await,を待つ（≒ wait for）
1737,fetch,を（行って）持って［連れて］くる
1738,unify,を統合［統一］する；統一される
1739,inspect,を点検する；を視察する
1740,entail,を伴う，引き起こす；（...すること）を含む（doing）
1741,tactics,作戦，方策；戦術，戦法
1742,feat,偉業，功績；妙技
1743,prestige,名声；〔形容詞的に〕名声のある
1744,analogy,類推；類似
1745,conscience,良心；分別
1746,textile,織物；繊維（産業）
1747,deficit,赤字，不足；欠陥
1748,plague,疫病；（害虫などの）異常発生
1749,hazard,危険（要素）；偶然
1750,metabolism,（新陳）代謝，代謝作用
1751,paralysis,麻痺；〔比喩的に〕麻痺（状態）
1752,grid,（電気などの）供給網；格子（模様）；碁盤目
1753,carriage,馬車；車両（＝ 【米】car）；立ち居振舞い；【英】輸送
1754,friction,不和；摩擦
1755,rebel,反逆者
1756,regime,政権，政体；体制
1757,monopoly,独占（権）
1758,staple,必需食品；主要産物
1759,merchandise,商品
1760,vendor,物売り，行商人；自動販売機
1761,supervisor,監督者；指導教員
1762,predecessor,前任者（⇔ successor 後継者）；前のもの
1763,personnel,〔集合的に〕職員，社員
1764,vessel,船舶；容器；（体液が通る）脈管
1765,liver,肝臓
1766,duration,（時間の）継続，持続（時間）
1767,certificate,証明書；免許状
1768,geometry,幾何学
1769,symmetry,（左右）対称（⇔ asymmetry 非対称）；調和
1770,biography,伝記
1771,masterpiece,傑作
1772,rhyme,押韻詩；韻；〔通例～s〕詩歌
1773,premium,保険料；プレミア；景品
1774,breakdown,崩壊；（神経）衰弱；故障；内訳
1775,courtesy,礼儀正しさ；好意；優遇
1776,protocol,（条約）議定書；外交儀礼；プロトコル
1777,specimen,標本；実例
1778,thesis,論文；命題，テーゼ
1779,eligible,適格の，資格のある；（結婚相手として）望ましい
1780,intrinsic,固有の，本質的な（⇔ extrinsic 非本質的な）
1781,diligent,勤勉な；入念な
1782,vocational,職業の，職業訓練の（ための）
1783,bankrupt,破産宣告を受けた；破綻している
1784,stern,厳しい；いかめしい
1785,stubborn,頑固な，強情な（≒ obstinate）；手に負えない
1786,maternal,母の，母親らしい（⇔ paternal 父の）；妊婦の
1787,fertile,肥沃な（⇔ barren 不毛の）；多産の
1788,ripe,熟した；成熟した
1789,stiff,硬直した，凝った；堅い
1790,obsolete,廃れた，使われなくなった；古くなった
1791,vacant,空いている
1792,acoustic,音響の；聴覚の；（楽器が）アコースティックの
1793,preliminary,予備の，準備の
1794,approximate,おおよその
1795,implicit,暗黙の（⇔ explicit ⇒ 1598）；内在する
1796,punctual,時間を守る
1797,compatible,矛盾しない；互換性のある；気が合う
1798,ample,十分すぎるほどの；広い
1799,pervasive,隅々に広がった；浸透する；充満する
1800,ubiquitous,至る所にある
1801,deduce,を推測する，演繹する
1802,simulate,を模擬実験する；を装う；をまねる
1803,merge,（を）合併する；を融合させる；溶け込む
1804,penetrate,（に）浸透する；（に）進出する；（を）貫く；（を）見抜く
1805,cater,（の）料理をまかなう；（要望などに）応える
1806,assault,に暴行する；を攻撃する
1807,torture,を拷問にかける；を苦しめる
1808,bleed,出血する
1809,erect,を建てる；を直立させる
1810,cherish,を大切にする；を心に抱く
1811,arouse,（感情など）を引き起こす；を目覚めさせる
1812,doom,〔通例受身形で〕運命にある
1813,mourn,（を）悼む（≒ grieve）；（を）嘆く
1814,dread,をひどく恐れる
1815,nourish,に栄養を与える；をはぐくむ
1816,inject,（人）に注射する，を注入する；を導入する
1817,swear,（～を）ののしる（at）；（を）誓う（≒ vow）
1818,bid,（～に）の値をつける（for ⇒ on）；（挨拶）を述べる
1819,corrupt,を堕落させる；を買収する；堕落する
1820,preoccupy,の心を奪う，を夢中にさせる
1821,browse,（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く
1822,compile,を編集する；（資料など）をまとめる
1823,allocate,を割り当てる，分配する
1824,offset,を相殺する，埋め合わせる；をオフセット印刷にする
1825,restrain,を制止する；を規制する
1826,comply,従う，応じる
1827,expire,期限が切れる
1828,embark,（～に）乗り出す（on）；乗船［搭乗］する
1829,flap,パタパタ動く；羽ばたく（≒ flutter）；をパタパタ動かす
1830,furnish,に（～を）備えつける（with）
1831,forge,を偽造する；（関係など）を築く；を鍛造する
1832,thrust,を押しつける；を突き刺す；押し進む
1833,dispatch,を派遣する；を発送する；を処理する
1834,resent,に憤慨する
1835,reconcile,を（～と）一致させる（with）；を和解させる
1836,allege,を主張する
1837,oppress,を抑圧［迫害］する；を悩ませる
1838,expel,を追放する；を吐き出す
1839,ascend,（を）上がる（⇔ descend ⇒ 1337）
1840,commence,始まる；を開始する；...し始める（to do / doing）⇒ commence work 仕事［作業］を始める
1841,advent,〔the ～〕出現，到来
1842,reign,治世；統治
1843,diplomacy,外交（的手腕）
1844,embassy,大使館；大使一行
1845,exile,亡命（者）；（国外）追放
1846,refuge,避難（所）；保護
1847,plight,窮状（＝ predicament）；（悪い）状態
1848,solitude,ひとりでいること；孤独
1849,fallacy,誤った考え，誤信；錯誤
1850,latitude,緯度；（行動・思想などの）許容範囲
1851,eclipse,（日食・月食などの）食；（名声などの）失墜
1852,basin,流域；盆地，海盆；洗面器［台］
1853,erosion,浸食；衰退
1854,archaeology,考古学
1855,errand,（人の）使い，使い走り；用件
1856,mercy,慈悲；〔通例a ～〕幸運
1857,rhetoric,修辞（法）；美辞麗句
1858,verse,韻文（⇔ prose 散文）；詩
1859,congestion,混雑
1860,sewage,下水
1861,complement,（～の）補完物，補足（to）；（文法の）補語
1862,subsidy,補助金；報奨金
1863,mortgage,住宅ローン；抵当（権）
1864,attorney,【米】 弁護士；代理人
1865,outfit,衣装一式；装備［道具］一式；組織
1866,bulk,〔the ～〕（～の）大半（of）；大きさ；大量
1867,reunion,再会（の集い）；再結合
1868,synthesis,合成；総合（⇔ analysis ⇒ 363）
1869,mold,鋳型；鋳物；性格；かび
1870,thirst,（のどの）渇き；（～に対する）渇望（for）
1871,greed,強欲
1872,bribe,賄賂
1873,contempt,軽蔑；恥辱
1874,texture,感触，手触り；本質；質感
1875,orphan,孤児
1876,harassment,嫌がらせ，ハラスメント
1877,hay,干し草
1878,doctrine,教義；【米】（政策上の）主義
1879,holistic,全体論の；（医療が）ホリスティックの
1880,liable,しがちな；（～を）受けやすい（to）；責任がある
1881,earnest,まじめな，熱心な
1882,intelligible,（簡単に）理解できる
1883,abrupt,突然の（≒ sudden）
1884,reckless,無謀な；（～を）顧みない（of）
1885,furious,激怒した；猛烈な
1886,eloquent,雄弁な；説得力のある
1887,juvenile,青少年の
1888,notorious,悪名高い（≒ infamous）
1889,timid,臆病な；内気な
1890,humid,湿気のある（≒ muggy 蒸し暑い）
1891,contagious,感染（性）の；病気を伝染する
1892,cynical,冷笑的な，皮肉な
1893,dumb,ばかげた；口のきけない；無言の
1894,monotonous,単調な
1895,perpetual,永続的な；ひっきりなしの
1896,dizzy,目まいがする；当惑した
1897,weary,疲れ果てた；（～に）うんざりした（of）
1898,numb,麻痺した，無感覚な；ぼう然とした
1899,mortal,致命的な（≒ fatal）；死すべき（運命の）（⇔ immortal 不死の）
1900,zealous,熱心な；熱狂的な`,
  },
  {
    id: 'system',
    name: 'システム英単語',
    csv: `番号,単語,意味
1,follow,～の後に続く、～に従う
2,consider,～を考慮する
3,increase,増える、～を増やす
4,expect,～を予期する
5,decide,～することを決意する
6,develop,発達する、～を発達させる
7,provide,～を供給する、与える
8,continue,続く、～を続ける
9,include,～を含む、含める
10,remain,ままでいる
11,reach,～に着く、～に達する
12,allow,～を許可する
13,force,～を強制する
14,offer,～を申し出る
15,realize,～を悟る
16,suggest,～と提案する、～をほのめかす
17,require,～を必要とする
18,worry,心配する
19,wonder,～かと疑問に思う
20,cost,～を要する
21,tend,～する傾向がある、～しがちである
22,depend,～に依存する、～しだいで決まる
23,share,～を分け合う、共有する
24,demand,～を要求する
25,support,～を支持する
26,hire,～を雇う
27,regard,AをBだと思う、みなす
28,base,AがBに基づいている
29,improve,～を向上させる
30,recognize,～を認める
31,notice,～に気づく
32,suppose,～だと思う
33,raise,～を上げる、～を育てる
34,prefer,～をより好む
35,cheer,～を励ます
36,suffer,～を経験する、受ける、苦しむ
37,describe,～を描写する、～の特徴を説明する
38,prevent,～をさまたげる
39,reduce,～を減らす
40,mistake,～を誤解する、まちがえる
41,prepare,～の準備をする
42,encourage,はげます
43,prove,～だとわかる
44,treat,～をあつかう
45,establish,～を設立する、創立する
46,relate,関係がある
47,compare,～を比較する、～をたとえる
48,spread,～を広げる；広がる
49,refer,～を指示する
50,supply,～を供給する
51,gain,～を得る
52,destroy,～を破壊する
53,apply,当てはまる、申し込む
54,seek,～を求める
55,search,～を捜す
56,claim,～と主張する
57,draw,～を引っぱる
58,refuse,～を断る
59,respond,～に返答する
60,mention,～について述べる
61,judge,～を判断する
62,approach,～に接近する；～に取り組む；方法
63,admit,～を認める
64,reflect,～を反映する、～を反射する
65,perform,～を行う、～を遂行する
66,bore,～をうんざりさせる
67,survive,生き残る
68,represent,～を表す
69,argue,～と主張する
70,grant,～を認める、～を与える
71,indicate,～を指し示す
72,belong,所属している
73,acquire,～を習得する
74,reply,返事をする
75,feed,～にエサをやる
76,escape,逃げる
77,replace,～に取って代わる、～を取り替える
78,reveal,～を明らかにする
79,surround,～を取り囲む
80,suit,～に合う
81,estimate,～を推定する
82,aim,～をねらう
83,earn,～をもうける、かせぐ
84,decline,衰退する、低下する、～を辞退する
85,afford,～をする余裕がある
86,confuse,～を当惑させる
87,graduate,～を卒業する
88,vary,変わる、さまざまである
89,remove,～を移す、取り去る
90,insist,～と主張する、言い張る
91,examine,～を調査する
92,remind,ＡにＢを思い出させる
93,contribute,～に貢献する、～の一因となる、AをBに寄付する
94,warn,～に警告する
95,connect,～をつなぐ
96,match,～に匹敵する、～に調和する
97,focus,焦点を合わせる
98,reject,～を断る
99,convince,～を納得させる、確信させる
100,associate,AをBに関連づける、AからBを連想する
101,rush,急いで行く
102,stress,～を強調する
103,attract,～を引きつける
104,rely,Aに頼る
105,regret,～を後悔する
106,adopt,～を採用する
107,shake,～を振る
108,hurt,～を傷つける
109,operate,作動する、～を操作する、手術する
110,extend,～を広げる、延長する
111,blame,～を非難する、～のせいにする
112,consist,Aで構成されている
113,persuade,～を説得する
114,admire,～に感心する
115,disappoint,～を失望させる
116,expand,拡大する
117,preserve,～を保護する
118,struggle,苦闘する、もがく
119,arrange,～の手はずを整える、～を配列する
120,disturb,～を妨げる
121,employ,～を雇う、～を用いる
122,engage,Aに従事する、Aを行う
123,abandon,～を捨てる
124,display,～を展示する、～を表す
125,encounter,～に偶然出会う
126,amuse,～を楽しませる
127,bother,～に面倒をかける、困らせる
128,concentrate,集中する
129,adapt,～を適応させる、適応する
130,puzzle,～を当惑させる
131,appeal,Aに訴える、～を引きつける
132,combine,～を結合させる
133,delay,～を遅らせる
134,repair,～を修理する
135,fascinate,～を夢中にさせる
136,pardon,～を許す
137,import,～を輸入する
138,remark,述べる
139,reserve,～を予約する、～を取っておく
140,amaze,～を驚嘆させる
141,frighten,～をおびえさせる
142,release,～を解放する、～を発表する
143,rent,～を賃借りする
144,recover,Aから回復する
145,suspect,～ではないかと思う、～を疑う
146,deliver,～を配達する、渡す、～をする
147,identify,～の正体をつきとめる、Aと共感する
148,locate,位置する
149,manufacture,～を製造する
150,occupy,～を占める
151,own,～を所有している
152,expose,ＡをＢにさらす
153,translate,～を翻訳する
154,cure,～を治療する
155,perceive,～を知覚する
156,adjust,～に慣れる、調節して合わせる
157,alarm,～をぎょっとさせる、おびえさせる
158,assist,～を助ける、～を手伝う
159,freeze,凍りつく
160,spoil,～を台無しにする
161,shift,～を変える
162,embarrass,～を困惑させる、～に恥ずかしい思いをさせる
163,approve,賛成する；～を承認する
164,weigh,～の重さがある、～を比較検討する、よく考える
165,stretch,～を広げる
166,participate,Aに参加する
167,exhibit,～を展示する
168,owe,AのことはBのおかげだ
169,celebrate,～を祝う
170,decorate,～を装飾する
171,forgive,～を許す
172,seat,(be seated)座っている
173,injure,～を傷つける
174,sew,～を縫う
175,result,結果
176,feature,特徴
177,society,社会、協会、団体
178,wheel,車輪、ハンドル
179,value,価値
180,effect,効果、影響、結果
181,individual,個人
182,influence,影響
183,fee,謝礼、料金
184,rate,割合、速度
185,sign,印、兆候
186,service,公共事業、業務
187,advance,前進、進歩
188,laughter,笑い
189,material,物質
190,industry,工業
191,attempt,試み
192,trade,貿易
193,progress,進歩、前進
194,excuse,言い訳
195,custom,習慣、税関
196,passage,一節、経過、通行
197,economy,経済
198,track,小道、足跡
199,transportation,交通機関、輸送
200,official,役人
201,sight,見ること、光景、視力
202,taste,味、好み
203,range,範囲
204,appointment,約束、予約
205,patient,患者、忍耐強い
206,project,計画
207,favor,好意
208,appearance,外見、様子、出現
209,risk,危険
210,benefit,利益
211,resident,住民
212,relative,親族、親戚
213,region,地域
214,characteristic,特徴
215,pain,苦痛
216,twin,双子の一方、双生児
217,occasion,場合、機会
218,principle,原理、原則
219,department,部門、学科
220,duty,義務、関税
221,scene,場面、現場
222,jam,渋滞
223,spirit,精神
224,medium,手段
225,mass,一般大衆、多くの
226,audience,聴衆、観客
227,element,要素、元素
228,climate,気候
229,revolution,革命
230,quarter,4分の1
231,furniture,家具
232,brain,脳
233,atmosphere,大気、雰囲気
234,property,財産
235,reward,報酬
236,security,安全
237,delight,大喜び
238,desert,砂漠
239,background,背景、生い立ち、経歴
240,trend,傾向
241,vote,投票
242,impact,影響、衝撃
243,institution,機関、制度
244,interaction,交流
245,alternative,代わりのもの
246,harm,害
247,agency,機関、代理店
248,capacity,能力
249,minister,大臣
250,volunteer,ボランティア
251,access,利用する権利
252,quantity,量
253,branch,枝、支店、支局、部門、分野
254,common,共通の、普通の
255,rough,荒い、大雑把な
256,likely,ありそうな、～する可能性が高い
257,serious,深刻な
258,particular,ある特定の、特有の
259,available,手に入る、利用できる
260,bilingual,二言語使用の
261,ready,用意ができた
262,correct,正しい
263,familiar,熟知している、くわしい
264,physical,身体の、肉体の
265,worth,～の価値がある
266,involved,～に関係している、参加している
267,fantastic,すばらしい
268,private,個人の、私的な
269,obvious,明白な
270,native,母国の
271,complex,複雑な
272,willing,～する気がある、～してもかまわない
273,current,最新の
274,male,男の
275,proper,適切な
276,capable,～する能力がある
277,independent,独立した
278,positive,積極的な
279,pleasant,楽しい
280,significant,重要な
281,former,前の
282,chemical,化学的な
283,upset,動揺している
284,previous,前の
285,calm,冷静な
286,specific,特定の
287,conscious,意識している
288,superior,よりすぐれている
289,efficient,効率がいい
290,fundamental,基本的な
291,narrow,狭い
292,reasonable,理にかなった
293,nervous,神経質な、不安な
294,alike,似ている
295,domestic,家庭の、国内の
296,negative,否定の
297,moral,道徳的な
298,eager,熱望している
299,remarkable,すばらしい
300,evil,悪い
301,awake,目を覚まして
302,aged,年老いた
303,anxious,心配して、切望して
304,tough,たくましい、骨の折れる
305,nuclear,核の、原子力の
306,legal,合法の、法律の
307,curious,好奇心の強い
308,civil,一般市民の
309,recent,最近の
310,senior,上級の、先輩の
311,afterward,その後
312,nearly,ほとんど
313,therefore,それゆえに
314,exactly,正確に
315,possibly,ひょっとすると、どうしてもVできない
316,contrary,反対に
317,occasionally,時々
318,somehow,どういうわけか、なぜか
319,seldom,めったに～ない
320,thus,それゆえ、そのように
321,throughout,いたる所に
322,unlike,～と違って
323,besides,～に加えて
324,beyond,～の向こうに；～できる範囲をこえて
325,within,～以内で
326,nor,～もない
327,unless,～しない限り
328,except,～を除いて
329,ought,～すべきである
330,in spite of,～にもかかわらず
331,whether,～かどうか、～であろうとなかろうと
332,explain,～を説明する
333,accept,～を受け入れる
334,produce,～を生産する
335,exist,存在する
336,express,～を表現する
337,add,～を加える
338,avoid,～を避ける
339,marry,～と結婚する
340,protect,～を守る
341,affect,～に影響する
342,determine,～を決定する
343,solve,～を解決する
344,contain,～を含んでいる
345,discuss,～を議論する
346,ignore,～を無視する
347,guess,～を推測する
348,exchange,交換する
349,satisfy,～を満たす
350,complain,苦情を言う
351,achieve,～を達成する
352,enable,～を可能にする
353,intend,つもりだ
354,obtain,～を得る
355,divide,分割する
356,annoy,～をいらいらさせる
357,differ,異なる
358,educate,～を教育する
359,borrow,～を借りる
360,invent,～を発明する
361,promote,～を促進する
362,advise,～に忠告する
363,retire,辞める
364,permit,～を許す
365,recommend,～を勧める
366,apologize,謝る
367,inform,～に知らせる
368,oppose,～に反対する
369,trust,～を信用する
370,select,～を選ぶ
371,praise,～をほめる
372,handle,～に対処する
373,propose,～を提案する
374,breathe,～を呼吸する
375,criticize,～を非難する
376,overcome,～に打ち勝つ
377,possess,～を持っている
378,predict,～を予言する
379,publish,～を出版する
380,floating,浮かぶ
381,recall,～を思い出す
382,explore,～を探検する
383,pretend,ふりをする
384,absorb,～を吸収する
385,resemble,～に似ている
386,tear,～を引き裂く
387,consume,～を消費する
388,compete,競争する
389,quit,～をやめる
390,announce,～を発表する
391,react,反応する
392,wander,歩き回る
393,text,メールを送る
394,generate,～を生み出す
395,score,～を取る
396,government,政府
397,knowledge,知識
398,nation,国
399,effort,努力
400,period,時代
401,population,人口
402,purpose,目的
403,behavior,行動
404,lack,不足
405,skill,技術
406,quality,質
407,environment,環境
408,role,役割
409,attitude,態度
410,author,筆者
411,research,研究
412,opportunity,機会
413,source,源
414,carbon,炭素
415,shape,形
416,advantage,利点
417,method,方法
418,habit,習慣
419,detail,細部
420,distance,距離
421,crowd,群衆
422,instance,例
423,desire,願望
424,standard,水準
425,task,仕事
426,generation,世代
427,responsibility,責任
428,experiment,実験
429,athlete,運動選手
430,decade,10年
431,loss,損失
432,fever,熱
433,theory,理論
434,statement,記述
435,professor,教授
436,function,機能
437,surface,表面
438,envelope,封筒
439,organization,組織
440,policy,政策
441,resource,資源
442,contrast,対比
443,flood,洪水
444,mate,連れ合い
445,goods,商品
446,creature,動物
447,structure,構造
448,tradition,伝統
449,weight,体重
450,charity,慈善
451,citizen,市民
452,impression,印象
453,cartoon,マンガ
454,career,経歴
455,site,用地
456,passenger,乗客
457,violence,暴力
458,income,所得
459,temperature,気温
460,majority,大多数
461,origin,起源
462,literature,文学
463,equipment,設備
464,stranger,見知らぬ人
465,strength,強さ
466,planet,惑星
467,fiction,小説
468,religion,宗教
469,pollution,汚染
470,wealth,富
471,document,文書
472,profit,もうけ
473,technique,技術
474,emotion,感情
475,phenomenon,現象
476,horror,恐怖
477,ladder,はしご
478,billion,十億
479,status,地位
480,youth,若者
481,confidence,自信
482,edge,周辺
483,household,家庭
484,scholar,学者
485,survey,調査
486,vocabulary,語彙
487,enemy,敵
488,construction,建設
489,lecture,講義
490,instruction,指示
491,crisis,危機
492,instrument,器具
493,crop,作物
494,weapon,兵器
495,device,装置
496,path,道
497,earthquake,地震
498,stream,小川
499,notion,概念
500,yard,庭
501,victim,犠牲者
502,fuel,燃料
503,ancestor,祖先
504,soil,土壌
505,debate,討論
506,crime,犯罪
507,colleague,同僚
508,shelf,棚
509,analysis,分析
510,universe,宇宙
511,electricity,電気
512,insect,昆虫
513,web,巣
514,storm,嵐
515,plenty,十分な
516,agriculture,農業
517,gene,遺伝子
518,evidence,証拠
519,consequence,結果
520,infant,幼児
521,leisure,暇
522,cell,細胞
523,talent,才能
524,advertising,広告
525,extent,程度
526,garbage,ごみ
527,general,一般
528,various,さまざまな
529,similar,似ている
530,complete,完全な
531,sharp,急激な
532,expensive,高価な
533,political,政治的な
534,aware,気づいている
535,ancient,古代の
536,medical,医学の
537,essential,不可欠だ
538,huge,巨大な
539,terrible,ひどい
540,practical,実用的な
541,entire,全
542,favorite,いちばん好きな
543,comfortable,快適な
544,minor,小さい
545,typical,典型的な
546,ideal,理想的な
547,principal,主要な
548,appropriate,適切な
549,empty,からの
550,rapid,急速な
551,mental,精神の
552,excellent,すばらしい
553,convenient,都合がいい
554,potential,潜在的な
555,financial,財政的な
556,enormous,莫大な
557,rare,珍しい
558,artificial,人工
559,tiny,ちっちゃな
560,considerable,かなりの
561,sensitive,敏感な
562,intellectual,知的な
563,thirsty,のどが渇く
564,polite,礼儀正しい
565,accurate,正確な
566,rude,失礼な
567,sufficient,十分な
568,urban,都会の
569,temporary,一時的な
570,primitive,原始的な
571,permanent,永久
572,elderly,高齢の
573,severe,厳しい
574,brief,簡潔な
575,mobile,流動的な
576,latest,最新の
577,military,軍事的な
578,strict,厳しい
579,solid,固体の
580,stupid,ばかな
581,biological,生物
582,probably,おそらく
583,hardly,ほとんど～ない
584,immediately,すぐに
585,eventually,ついに
586,frequently,しばしば
587,extremely,非常に
588,gradually,だんだん
589,instantly,すぐに
590,nevertheless,それにもかかわらず
591,moreover,その上
592,relatively,比較的
593,apparently,一見
594,definitely,絶対
595,largely,主に
596,mostly,大部分は
597,approximately,およそ
598,overnight,一晩
599,accidentally,偶然
600,despite,にもかかわらず
601,proceed,進む
602,ensure,～を確実にする
603,interpret,～を解釈する
604,cease,～しなくなる
605,ban,（公式に）～を禁止する
606,obey,～に従う
607,eliminate,(不要なもの)を除去する
608,resist,～に抵抗する
609,accompany,〈人〉に同伴する
610,commit,〈罪など〉を犯す、～をゆだねる、委任する、(本気で)取り組む
611,pursue,～を追求する
612,demonstrate,(証明などが)～を明らかに示す
613,bet,きっと～だと思う
614,ruin,～を台無しにする、破滅させる
615,threaten,～を脅迫する
616,attach,AをBにくっつける
617,reverse,～を反対にする、逆転する
618,restrict,～を制限する
619,compose,～を組み立てる
620,lean,よりかかる、もたれる
621,substitute,～を代わりに用いる
622,trace,～の跡をたどる
623,interrupt,～を妨げる
624,confront,～の前に立ちふさがる、～に立ち向かう
625,illustrate,～を（例で）示す
626,arrest,～を逮捕する
627,stimulate,～を刺激する
628,assure,（～を）保証する
629,consult,～に相談する、～を参照する
630,depress,～を憂鬱にさせる
631,crash,激突する
632,inspire,～を奮起させる、やる気にさせる
633,specialize,Aを専門にする、専攻する
634,cultivate,(植物)を栽培する、(感情・能力などを)育む
635,fulfill,(約束・夢など)を果たす
636,transmit,～を送る、伝える
637,found,～を創立する、設立する
638,clap,(手など)をたたく
639,burst,破裂する、突然～しだす
640,bow,おじぎする
641,dismiss,(考えなど)を無視する、(人)を解雇する、解散する
642,breed,～を繁殖させる、繁殖する
643,prohibit,〈法・団体が〉～を禁じる
644,oblige,～に強いる
645,qualify,Aに適任である
646,invest,（金）を投資する
647,grasp,～を理解する
648,collapse,崩壊する
649,overlook,～を見落とす、～を見逃す
650,accuse,～を非難する
651,frustrate,〈人〉を欲求不満にさせる
652,deprive,AからBを奪う
653,astonish,～を驚嘆させる
654,register,～を登録する
655,correspond,一致する
656,cast,～を投げる
657,attribute,AはBのおかげだと思う
658,neglect,～を無視する、怠る
659,starve,飢える
660,resolve,(問題など)を解決する
661,impose,AをBに課す、押し付ける
662,convert,～を転換する
663,scare,～をおびえさせる
664,constitute,～を構成する、占める、～である
665,appoint,～を任命する
666,imply,～を(暗に)意味する
667,assign,(仕事・物)を割り当てる
668,nod,うなずく
669,elect,～を選挙で選ぶ
670,transfer,～を移す
671,rob,AからBを奪う
672,capture,～を捕らえる
673,undertake,（仕事など）を引き受ける
674,drown,おぼれ死ぬ
675,split,～を割る、分裂する
676,resort,Aに訴える
677,descend,下る、降りる
678,irritate,～をいらだたせる
679,pronounce,〈単語など〉を発音する
680,equip,～を装備させる
681,cheat,いかさまをする
682,emerge,〈隠れていたものが〉現れる
683,devote,～をささげる
684,heal,〈けがなど〉を治す、治る
685,urge,～に強く迫る、～を説得する
686,envy,～をうらやむ
687,chase,～を追いかける
688,prompt,～を促す
689,withdraw,～を引っ込める、引きこもる、退く、(預金など)を引き出す
690,detect,～を探知する、～を発見する
691,interfere,Aを邪魔する
692,kid,冗談を言う、からかう
693,launch,(ロケットなど)を打ち上げる
694,endanger,～を危険にさらす
695,foster,～を促進する、育成する
696,diminish,減少する、衰える、～を減らす
697,spill,～をこぼす
698,infect,〈人〉に感染する
699,stem,Aから生じる、Aに由来する
700,tap,～を軽くたたく
701,embrace,受け入れる、含む
702,proportion,比率
703,contract,契約
704,chest,胸
705,treasure,財宝
706,stock,株(式)
707,facility,設備、施設
708,sum,金額、合計、要約
709,rank,地位
710,democracy,民主主義、民主国家
711,emergency,緊急事態
712,protest,抗議
713,immigrant,移民
714,vehicle,車、乗り物、手段
715,routine,決まりきった仕事、日課
716,stuff,物
717,row,列
718,profile,プロフィール、人物紹介、横顔
719,dawn,夜明け
720,welfare,福祉
721,perspective,見方
722,enthusiasm,熱意、情熱
723,faith,信頼
724,occupation,職業、占領
725,witness,証人、目撃者
726,kingdom,王国
727,equivalent,同等のもの、相当するもの
728,objective,目的、目標、客観的な
729,pile,積み重ね
730,shelter,避難(所)
731,trial,試み、裁判
732,honor,名誉
733,territory,領土、なわ張り
734,frame,わく
735,border,国境地帯
736,statistics,統計(学)
737,enterprise,企業、事業
738,context,文脈、状況
739,load,荷物
740,grain,穀物
741,review,再検討
742,prejudice,偏見
743,strain,負担
744,trap,わな、閉じ込められる、わなにかける
745,temper,気性
746,slave,奴隷
747,wound,傷
748,divorce,離婚
749,tune,曲
750,height,高さ、最盛期
751,faculty,学部、能力
752,span,期間
753,dimension,側面、要素、次元
754,version,型、...版、翻訳、説明
755,parallel,類似(物)、匹敵するもの
756,horizon,地平線
757,acquaintance,知人
758,burden,重荷
759,basis,基礎、根拠、方式、やり方
760,poison,毒
761,constitution,憲法
762,administration,経営、行政
763,charm,魅力
764,organ,臓器、器官
765,prey,獲物、えじき
766,venture,冒険的事業
767,mission,使命、任務
768,inquiry,調査、質問、問い合わせ
769,award,賞
770,strip,細長い一片
771,distress,苦しみ、悲嘆、苦難
772,circulation,循環、流通、発行部数
773,shade,陰、日陰
774,stereotype,典型的なイメージ、類型、固定観念
775,client,依頼人
776,output,生産高
777,lord,神
778,convention,慣習、しきたり、会議、大会
779,mine,鉱山
780,craft,工芸、技術、巧みに作る
781,core,中心、核心
782,stroke,脳卒中、発作、打撃、一撃、なでる
783,frontier,国境
784,peer,同僚、じっと見る
785,vessel,血管、船、器
786,disability,障害
787,gravity,重力
788,ethic,倫理(学)
789,terminal,終点
790,tide,潮流、潮の干満
791,abuse,虐待
792,guilty,有罪の、罪の意識がある
793,vital,きわめて重要な、必要な、活気のある
794,fellow,仲間の
795,contemporary,現代の
796,annual,年に１度の、１年間の
797,accustomed,慣れた
798,steady,しっかりした
799,dull,退屈させる
800,keen,熱望して、鋭い
801,loose,ゆるい
802,delicate,繊細な、微妙で難しい
803,internal,内部の、国内の
804,casual,形式ばらない、気楽な
805,mature,成熟した
806,concrete,具体的な
807,awful,ひどい
808,exhausted,疲れ切っている
809,overall,全面的な、全体的な
810,tight,引き締まった、きつい
811,prime,最も重要な、主要な
812,genuine,本物の、真の、心からの
813,modest,控えめな、謙虚な、わずかな
814,intimate,親密な
815,minimum,最小限の
816,sophisticated,高度な
817,latter,後者の
818,bitter,苦い、つらい、腹を立てた
819,peculiar,独特の、固有の
820,passive,受動的な、消極的な
821,ethnic,民族的な、民族の
822,noble,高貴な
823,vain,むだな
824,innocent,無罪の、罪のない、無邪気な
825,underlying,根本的な
826,alien,外国の、異質な
827,relevant,関連のある
828,inclined,Ｖする傾向がある、Ｖしたい気がある
829,awkward,気まずい
830,brilliant,すばらしい
831,desperate,必死の
832,refreshing,さわやかな
833,thrilled,とてもうれしい
834,inner,内側の
835,consistent,矛盾のない、一致した
836,plain,明白な、わかりやすい
837,vivid,鮮やかな
838,miserable,惨めな
839,substantial,相当な、多大な
840,fond,Aが好きだ
841,FALSE,まちがいの
842,lazy,怠惰な
843,precisely,正確に、まさに、ちょうど
844,meanwhile,その間に
845,altogether,完全に
846,lately,最近
847,barely,かろうじて
848,scarcely,ほとんど～ない
849,accordingly,それ相応に
850,deliberately,わざと
851,beneath,～の下で
852,whereas,～だが一方
853,declare,～を宣言する
854,alter,～を変える
855,arise,生じる
856,transform,変える
857,defeat,～を打ち負かす
858,investigate,～を調査する
859,distinguish,～を見分ける
860,bury,～を埋める
861,cope,うまく対処する
862,occur,起こる
863,accomplish,～をやりとげる
864,hesitate,ためらう
865,endure,～に耐える
866,conclude,～と結論づける
867,guarantee,～を保証する
868,dominate,～を支配する
869,confirm,～を裏付ける
870,greet,～にあいさつする
871,entertain,～を楽しませる
872,defend,～を守る
873,forbid,～を禁じる
874,broadcast,～を放送する
875,sacrifice,～を犠牲にする
876,punish,～を罰する
877,glance,ちらりと見る
878,retain,～を保持する
879,calculate,～を計算する
880,sinking,沈む
881,rescue,～を救助する
882,beg,～と乞う
883,define,定義する
884,deceive,～をだます
885,convey,～を伝える
886,sustain,～を維持する
887,purchase,～を購入する
888,fade,薄れる
889,regulate,～を規制する
890,distribute,～を分配する
891,enhance,～を向上させる
892,chat,おしゃべりする
893,exceed,～を超える
894,wipe,～をふく
895,cooperate,協力する
896,inherit,～を受け継ぐ
897,unite,～を団結させる
898,leap,跳ぶ
899,exaggerate,～を誇張する
900,conquer,～を征服する
901,melt,溶ける
902,invade,～に侵入する
903,modify,～を修正する
904,scatter,～をばらまく
905,undergo,～を経験する
906,evaluate,～を評価する
907,bend,身をかがめる
908,derive,由来する
909,screaming,悲鳴をあげる
910,gaze,見つめる
911,pray,祈る
912,polish,～を磨く
913,classify,分類する
914,assert,～と主張する
915,grab,～をつかむ
916,fold,～を折りたたむ
917,sweep,～を掃く
918,whisper,ささやく
919,imitate,～をまねる
920,stare,じっと見る
921,emphasize,～を強調する
922,rid,～を取り除く
923,pour,～を注ぐ
924,vanish,消える
925,restore,～を修復する
926,deserve,当然だ
927,laboratory,研究所
928,conference,会議
929,continent,大陸
930,insurance,保険
931,crew,乗組員たち
932,poverty,貧乏
933,shortage,不足
934,affair,情勢
935,exception,例外
936,wage,賃金
937,wisdom,知恵
938,tax,税金
939,evolution,進化
940,barrier,壁
941,category,範ちゅう
942,unit,単位
943,reputation,評判
944,virtue,美徳
945,courage,勇気
946,sympathy,同情
947,union,組合
948,civilization,文明
949,volume,冊
950,blossom,花
951,era,時代
952,dispute,紛争
953,tourism,観光
954,mankind,人類
955,murder,殺人
956,landscape,風景
957,destination,目的地
958,tale,話
959,reform,改革
960,muscle,筋肉
961,prospect,見通し
962,corporation,企業
963,colony,植民地
964,quarrel,口論
965,profession,職業
966,aspect,側面
967,pause,休止
968,conflict,対立
969,privilege,特権
970,prosperity,繁栄
971,genius,天才
972,seed,種
973,symptom,症状
974,merit,長所
975,layer,層
976,clue,手がかり
977,circumstances,状況
978,district,地区
979,prison,刑務所
980,companion,仲間
981,executive,重役
982,justice,正義
983,procedure,手続き
984,ray,光線
985,heaven,天国
986,luxury,贅沢
987,oxygen,酸素
988,fund,資金
989,theme,主題、テーマ
990,boundary,境界
991,ambition,熱望
992,forecast,予報
993,psychology,心理学
994,labor,労働
995,committee,委員会
996,physician,医者
997,philosophy,哲学
998,affection,愛情
999,candidate,候補
1000,bomb,爆弾
1001,priority,優先
1002,obstacle,障害
1003,appetite,食欲
1004,tension,緊張
1005,tribe,部族
1006,budget,予算
1007,campaign,運動、キャンペーン
1008,sorrow,悲しみ
1009,satellite,衛星
1010,insight,洞察
1011,cough,せき
1012,fate,運命
1013,scheme,計画
1014,insult,侮辱
1015,inhabitant,住民
1016,fossil,化石
1017,motive,動機
1018,instinct,本能
1019,legend,伝説
1020,empire,帝国
1021,suburb,郊外
1022,architecture,建築
1023,passion,情熱
1024,cancer,ガン
1025,logic,論理
1026,dozen,ダース
1027,harvest,収穫
1028,ingredient,材料
1029,hypothesis,仮説
1030,voyage,航海
1031,editor,編集者
1032,option,選択の自由
1033,hemisphere,半球
1034,mechanism,仕組み
1035,anthropologist,人類学者
1036,tragedy,悲劇
1037,antibiotic,抗生物質
1038,fare,運賃
1039,debt,借金
1040,curriculum,教育課程
1041,component,構成要素
1042,wheat,小麦
1043,usage,語法
1044,castle,城
1045,famine,飢饉
1046,extinction,絶滅
1047,purse,財布
1048,folk,民族
1049,explosion,爆発
1050,portion,部分
1051,organism,生物
1052,merchant,商人
1053,myth,神話
1054,incident,出来事
1055,wildlife,野生生物
1056,congress,議会
1057,bay,湾
1058,penalty,刑
1059,heritage,遺産
1060,diversity,多様性
1061,thumb,親指
1062,geography,地理
1063,factor,要因
1064,discrimination,差別
1065,virus,ウイルス
1066,statue,像
1067,priest,神父
1068,pioneer,先駆者
1069,trait,特徴
1070,bond,きずな
1071,grocery,食料品
1072,secretary,秘書
1073,dialect,方言
1074,astronomy,天文学
1075,youngster,子供
1076,substance,物質
1077,finding,発見
1078,strategy,戦略
1079,lung,肺
1080,opponent,敵
1081,ritual,儀式
1082,outcome,結果
1083,conservation,環境保護
1084,mammal,哺乳類
1085,telescope,望遠鏡
1086,refugee,難民
1087,code,規則
1088,flavor,風味
1089,particle,粒子
1090,nursing,看護
1091,suicide,自殺
1092,habitat,生息地
1093,bullying,いじめ
1094,dinosaur,恐竜
1095,council,議会
1096,gender,性別
1097,surgery,手術
1098,innovation,革新
1099,protein,タンパク質
1100,nutrition,栄養
1101,disaster,災害
1102,emission,排出
1103,ape,類人猿
1104,molecule,分子
1105,sweat,汗
1106,transplant,移植
1107,species,種
1108,tip,先
1109,cattle,牛
1110,density,密度
1111,concept,概念
1112,pale,青白い
1113,precious,貴重な
1114,loyal,忠実な
1115,isolated,孤立している
1116,generous,気前のよい
1117,tropical,熱帯
1118,reluctant,したがらない
1119,vague,漠然とした
1120,vast,広大な
1121,numerous,たくさんの
1122,rural,田舎の
1123,widespread,広まっている
1124,complicated,複雑な
1125,visible,目に見える
1126,raw,生の
1127,remote,へんぴな
1128,urgent,緊急の
1129,silly,ばかな
1130,striking,いちじるしい
1131,adequate,十分な
1132,extraordinary,並外れた
1133,odd,おかしな
1134,abstract,抽象的な
1135,mutual,相互の
1136,excessive,過度の
1137,ashamed,恥ずかしい
1138,tremendous,とてつもない
1139,inevitable,避けられない
1140,pure,純
1141,stable,安定した
1142,indifferent,無関心だ
1143,aggressive,攻撃的な
1144,ultimate,究極の
1145,shy,内気な
1146,solar,太陽
1147,profound,深い
1148,subtle,微妙な
1149,conservative,保守
1150,brave,勇敢な
1151,intense,強烈な
1152,alcoholic,アルコールの
1153,manual,手を使う
1154,cruel,残酷な
1155,rational,理性的な
1156,initial,最初の
1157,immune,免疫
1158,linguistic,言語の
1159,crucial,重大な
1160,verbal,言葉による
1161,optimistic,楽観的な
1162,flexible,柔軟な
1163,grateful,感謝している
1164,lively,生き生きとした
1165,overwhelming,圧倒的な
1166,abundant,豊富な
1167,selfish,利己的な
1168,ugly,みにくい
1169,racial,人種の
1170,prominent,有名な
1171,controversial,物議を呼ぶ
1172,federal,連邦の
1173,ridiculous,ばかげた
1174,imaginary,架空の
1175,harsh,厳しい
1176,random,無作為な
1177,adolescent,思春期の
1178,up-to-date,最新の
1179,liberal,自由主義の
1180,prior,前の
1181,moderate,適度な
1182,fluent,流ちょうな
1183,elaborate,手の込んだ
1184,incredible,信じられない
1185,radical,根本的な
1186,acid,酸性の
1187,deaf,耳が不自由な
1188,medieval,中世の
1189,ecological,生態
1190,slight,少しの
1191,ignorant,無知な
1192,cognitive,認知
1193,absolutely,絶対に
1194,virtually,ほとんど
1195,somewhat,多少
1196,merely,単に
1197,literally,文字通り
1198,seemingly,一見
1199,regardless,関係なく
1200,thoroughly,徹底的に
1201,submit,Aに服従する、提出する
1202,tempt,誘惑する、する気にさせる
1203,resign,辞職する
1204,conform,従う
1205,confine,限定する
1206,assemble,組み立てる
1207,dedicate,ささげる
1208,advocate,主張する
1209,thrive,繁栄する
1210,provoke,引き起こす
1211,dictate,命じる、要求する、決定する
1212,exploit,利用する、開発する
1213,surrender,降伏する
1214,reproduce,再生する、複製する、繁殖する[させる]
1215,acknowledge,認める
1216,swell,ふくらむ
1217,shed,落とす
1218,wind,曲がる
1219,cite,引き合いに出す
1220,digest,消化する
1221,skip,とばす、抜かす
1222,bind,縛る、束縛する
1223,dissolve,溶解する
1224,implement,実行する
1225,steer,操縦する
1226,congratulate,祝福する
1227,designate,指定する
1228,violate,破る、違反する
1229,presume,推定する、思う
1230,recruit,（新人を）入れる
1231,coincide,同時に起きる、重なる
1232,enforce,施行する
1233,displace,とってかわる、故郷から追い出す
1234,shrink,縮む、縮ませる、減る
1235,betray,裏切る、もらす
1236,comprise,構成される、構成する、占める
1237,indulge,ふける
1238,penetrate,入り込む
1239,devastate,壊滅させる
1240,plunge,突っ込む
1241,bounce,はね返る
1242,contradict,矛盾する
1243,prescribe,処方する
1244,oppress,しいたげる
1245,cherish,胸に抱く
1246,illuminate,照らす、解明する
1247,trigger,きっかけになる
1248,commute,通勤する、通学する
1249,induce,誘う
1250,utilize,利用する
1251,snap,ポキンと折れる、ポキンと折る
1252,donate,提供する
1253,hatch,（卵?ヒナ）かえす、かえる
1254,enclose,囲む
1255,prevail,普及している、広まる
1256,sigh,ため息をつく
1257,leak,漏れる、漏らす
1258,compel,強制する
1259,crush,押しつぶす
1260,comprehend,理解する
1261,negotiate,交渉する
1262,persist,持続する、残る
1263,multiply,増やす、増える、掛ける
1264,conceive,想像する
1265,compensate,埋め合わせる
1266,suspend,中止する、つるす
1267,stir,かきたてる
1268,soak,浸す、びしょぬれにする、吸収する
1269,refine,洗練する、磨きをかける
1270,arouse,刺激する、かき立てる
1271,precede,先行する
1272,render,OをCにする、変える
1273,mount,すえつける、乗る
1274,retreat,退く
1275,startle,驚かせる
1276,dare,する勇気がある
1277,sphere,領域、範囲
1278,sequence,連続、順番、順序
1279,deposit,預金、頭金、堆積物
1280,poll,世論調査、投票
1281,caution,用心
1282,rage,激怒、怒り
1283,formula,式、公式、方法、秘訣、解決策
1284,plot,筋、たくらみ、陰謀
1285,scope,範囲
1286,norm,規範
1287,disgust,嫌悪
1288,compromise,妥協
1289,supervisor,監督者
1290,paradox,逆説
1291,tissue,（生物の）組織；ティッシュペーパー
1292,breakdown,崩壊
1293,initiative,構想、主導権、
1294,fabric,織物、布
1295,publicity,宣伝、広告
1296,summit,頂上、頂点、首脳会議
1297,flock,群れ
1298,plague,疫病
1299,haste,急ぐこと
1300,nap,うたた寝
1301,ally,同盟国
1302,draft,下書き、草稿
1303,spectacle,光景
1304,premise,前提
1305,asset,財産
1306,lag,遅れ
1307,therapy,療法、治療法
1308,reception,もてなし
1309,compound,化合物
1310,blessing,ありがたいもの、恵み
1311,sensation,感覚、感じ
1312,recession,不景気、不況
1313,pole,棒、極
1314,outlook,態度、考え方、見通し、見込み
1315,endeavor,活動
1316,mercy,慈悲、情け
1317,counterpart,相当するもの
1318,session,期間、討論
1319,spectrum,変動範囲、領域
1320,junk,くず、がらくた
1321,worship,崇拝
1322,apt,しがちである、する傾向がある
1323,humble,謙虚な、粗末な
1324,entitled,得る権利がある、題された
1325,valid,妥当な、正当な
1326,faint,かすかな
1327,stiff,堅い
1328,obscure,わかりにくい
1329,fierce,激しい
1330,acute,（問題が）深刻な、（感覚・痛みが）鋭い
1331,idle,（仕事がなくて）何もしていない
1332,crude,粗末な、粗野な
1333,jealous,嫉妬深い、羨ましい
1334,pregnant,妊娠している
1335,liable,しがちである、可能性が高い
1336,stubborn,頑固な
1337,decent,まともな
1338,marvelous,驚くべき
1339,misleading,誤解を招く
1340,synthetic,合成の
1341,classical,クラシックの
1342,Muslim,イスラム教の
1343,anticipate,予想する
1344,rub,こする
1345,dispose,処理する
1346,refrain,控える
1347,accumulate,蓄積する
1348,boost,活気づける
1349,drag,引きずる
1350,revise,修正する
1351,scratch,かく
1352,roar,ほえる
1353,quote,引用する
1354,bloom,咲く
1355,insert,差し込む
1356,awaiting,待つ
1357,dread,恐れる
1358,conceal,隠す
1359,enrich,豊かにする
1360,cling,固執する
1361,surpass,まさる
1362,suppress,抑える
1363,portray,描く
1364,soaring,急上昇する
1365,drain,排出する
1366,glow,ボーッと光る
1367,migrate,移住する
1368,exclaim,叫ぶ
1369,exert,及ぼす
1370,disguise,隠す
1371,accelerate,加速する
1372,dwell,住む
1373,integrate,融けこませる
1374,weep,泣く
1375,reassure,安心させる
1376,crawl,はって進む
1377,restrain,抑制する
1378,resent,腹を立てる
1379,yell,大声で叫ぶ
1380,assess,評価する
1381,carve,彫る
1382,halt,止める
1383,inspect,検査する
1384,tackle,取り組む
1385,omit,省く
1386,chew,かむ
1387,resume,再開する
1388,mold,作る
1389,accommodate,収容できる
1390,erase,消す
1391,inferred,推量する
1392,revive,生き返らせる
1393,contemplate,考える
1394,rotate,回転する
1395,disrupt,かき乱す
1396,navigate,進路を決める
1397,ache,痛む
1398,discard,捨てる
1399,incorporate,取り入れる
1400,overtake,追い越す
1401,supplement,補う
1402,manipulate,操作する
1403,nourish,養う
1404,squeeze,しぼる
1405,depict,描く
1406,distract,そらす
1407,disclose,暴露する
1408,enroll,入学する
1409,nurture,育てる
1410,speculate,推測する
1411,prolong,延ばす
1412,execute,処刑する
1413,uncover,明らかにする
1414,tremble,震える
1415,seize,つかむ
1416,abolish,廃止する
1417,scold,しかる
1418,attain,達成する
1419,utter,発する
1420,flee,逃げる
1421,offending,怒らせる
1422,confess,告白する
1423,postpone,延期する
1424,drift,漂う
1425,weave,織る
1426,install,備えつける
1427,twist,ねじ曲げる
1428,extract,取り出す
1429,bump,ぶつかる
1430,despise,軽蔑する
1431,tolerate,我慢する
1432,boast,自慢する
1433,flourishing,栄えている
1434,disregard,無視する
1435,tease,からかう
1436,reinforce,強める
1437,strive,努力する
1438,coordinate,合わせる
1439,yawn,あくびをする
1440,hug,抱きしめる
1441,combat,戦う
1442,knit,編む
1443,fatigue,疲労
1444,fame,名声
1445,mess,めちゃくちゃ
1446,dignity,尊厳
1447,canal,運河
1448,drought,干ばつ
1449,despair,絶望
1450,interval,間隔
1451,luggage,荷物
1452,behalf,代表して
1453,impulse,衝動
1454,debris,破片
1455,beast,野獣
1456,superstition,迷信
1457,illusion,幻想、錯覚
1458,thread,糸
1459,intake,摂取量
1460,feast,宴会
1461,transition,移り変わり
1462,misery,悲惨さ
1463,radiation,放射線
1464,log,丸太
1465,consensus,合意
1466,deed,行い
1467,proverb,ことわざ
1468,compliment,ほめ言葉
1469,flame,炎
1470,anniversary,記念日
1471,conscience,良心
1472,expedition,探検
1473,offspring,子孫
1474,allowance,こづかい
1475,headline,大見出し
1476,treaty,条約
1477,monument,記念碑
1478,worm,虫
1479,remedy,治療法
1480,encyclopedia,百科事典
1481,glimpse,ちらり
1482,personnel,職員
1483,triumph,勝利
1484,arithmetic,算数
1485,self-esteem,自尊心
1486,microbe,微生物
1487,odds,可能性
1488,chaos,混沌
1489,destiny,運命
1490,diameter,直径
1491,lottery,宝くじ
1492,souvenir,みやげ物
1493,trail,小道
1494,ratio,比率
1495,sword,剣
1496,whistle,笛
1497,sentiment,感情
1498,chore,雑用
1499,courtesy,礼儀
1500,mayor,市長
1501,surveillance,監視、見張り
1502,trash,ごみ
1503,prestige,名声
1504,headquarters,本部、本社
1505,wilderness,荒野
1506,orbit,軌道
1507,bias,偏見
1508,republic,共和国
1509,bargain,掘り出し物
1510,domain,領域
1511,fragment,破片
1512,galaxy,星雲
1513,lap,ひざ
1514,deadline,締め切り
1515,bullet,弾丸
1516,pedestrian,歩行者
1517,wit,機知
1518,nuisance,迷惑
1519,criteria,基準
1520,hardship,苦難
1521,glory,栄光
1522,pavement,歩道
1523,navy,海軍
1524,script,台本
1525,pension,年金
1526,province,州
1527,surplus,余剰
1528,moisture,水分
1529,patch,あて布
1530,altitude,高度、標高
1531,thermometer,温度計
1532,tuition,授業料
1533,troop,軍隊
1534,primate,霊長類
1535,flaw,欠陥
1536,nephew,甥
1537,garment,衣服、衣類
1538,diagnosis,診断
1539,commerce,商業
1540,antiquity,古代、古物
1541,fraction,ほんの一部
1542,irony,皮肉
1543,nightmare,悪夢
1544,defect,欠陥
1545,certificate,証明書
1546,decay,腐敗
1547,erosion,浸食
1548,recipe,秘けつ
1549,skeleton,骨格
1550,grace,優雅さ
1551,landmark,名所
1552,dementia,認知症
1553,flesh,肉
1554,collision,衝突、対立
1555,hazard,危険なもの
1556,tomb,墓
1557,injection,注射
1558,breakthrough,飛躍的進歩
1559,leather,革
1560,jewelry,宝石
1561,cue,合図
1562,ambulance,救急車
1563,estate,不動産
1564,commodity,商品
1565,departure,出発
1566,phase,段階
1567,thief,泥棒
1568,saint,聖
1569,sculpture,彫刻
1570,grief,悲しみ
1571,lane,車線
1572,predator,捕食動物
1573,fluid,流体
1574,incentive,はげみ
1575,bride,花嫁
1576,intervention,介入
1577,margin,差
1578,biography,伝記
1579,consent,同意
1580,volcano,火山
1581,rebel,反逆者
1582,metaphor,比喩
1583,legislation,法律
1584,lightning,雷
1585,pesticide,殺虫剤
1586,column,コラム
1587,rumor,うわさ
1588,dust,ほこり
1589,dialogue,対話
1590,kindergarten,幼稚園
1591,diabetes,糖尿病
1592,obesity,肥満
1593,patent,特許
1594,chapter,章
1595,palace,宮殿
1596,laundry,洗濯
1597,ward,病棟
1598,outbreak,ぼっ発
1599,equation,方程式
1600,archaeologist,考古学者
1601,corruption,腐敗
1602,germ,細菌
1603,revenue,収入
1604,spouse,配偶者
1605,epidemic,流行
1606,mortality,死亡
1607,syndrome,症候群
1608,retail,小売り
1609,dose,量
1610,beverage,飲み物
1611,metabolism,新陳代謝
1612,hybrid,交配種
1613,scent,香り
1614,inflammation,炎症
1615,pill,薬
1616,grave,重大な
1617,fertile,肥えた
1618,hostile,反感を持つ
1619,indispensable,不可欠な
1620,oriented,志向の
1621,splendid,すばらしい
1622,competent,有能な
1623,supreme,最高の
1624,straightforward,わかりやすい
1625,sacred,聖
1626,bold,大胆な
1627,uneasy,不安な
1628,neat,きちんとした
1629,shallow,浅い
1630,fake,偽物の
1631,superficial,表面的な
1632,absurd,ばかげた
1633,fragile,壊れやすい
1634,respectable,ちゃんとした
1635,magnificent,すばらしい
1636,infinite,無限の
1637,comprehensive,包括的な
1638,steep,険しい
1639,gross,総
1640,subsequent,次に起こる
1641,sincere,心からの
1642,toxic,有毒な
1643,neutral,中立の
1644,diligent,勤勉な
1645,sore,痛い
1646,contaminated,汚染された
1647,ambiguous,あいまいな
1648,oral,口述の
1649,restless,落ち着かない
1650,rotten,腐った
1651,vigorous,精力的な
1652,immense,莫大な
1653,metropolitan,大都市の
1654,punctual,時間をきっちり守る
1655,solitary,孤独な
1656,collective,集団
1657,diplomatic,外交の
1658,nasty,不快な
1659,helpless,無力な
1660,explicit,明確な、はっきりした
1661,bankrupt,破産した
1662,eternal,永遠の
1663,sole,唯一の
1664,sour,すっぱい
1665,notable,注目すべき
1666,affluent,裕福な
1667,naked,裸の
1668,vocal,発声
1669,feminine,女性の
1670,vacant,空いている
1671,exotic,外来の
1672,rigid,厳格な
1673,humid,蒸し暑い
1674,outstanding,傑出した
1675,addicted,中毒である
1676,vulnerable,受けやすい
1677,spontaneous,自然に起こる
1678,greedy,貪欲な
1679,trivial,ささいな
1680,per capita,一人当たりの
1681,inherent,元から伴う
1682,promising,前途有望な
1683,physiological,生理的な
1684,clinical,臨床
1685,chronic,慢性の
1686,geological,地質学的な
1687,countless,無数の
1688,innate,先天的な
1689,alert,用心する
1690,autonomous,自動運転
1691,simultaneously,同時に
1692,utterly,まったく
1693,drastically,劇的に
1694,necessarily,必ずしも
1695,thereby,そうすることで
1696,frankly,率直に
1697,namely,すなわち
1698,hence,だから
1699,via,経由で
1700,owing,のために
1701,clarify,明らかにする
1702,smash,粉々に砕く
1703,mourn,悲しむ
1704,summon,呼ぶ
1705,shatter,粉々にする
1706,linger,残る
1707,lament,嘆く
1708,endowed,恵まれる
1709,rejoice,喜ぶ
1710,allocate,配分する
1711,slap,ピシャリと打つ
1712,contend,主張する
1713,swear,誓う
1714,discern,識別する
1715,degrade,悪化させる
1716,erect,築く
1717,testify,証言する
1718,spur,駆りたてる
1719,roam,歩き回る
1720,frown,まゆをひそめる
1721,lure,呼び込む
1722,defy,逆らう
1723,stroll,ぶらつく
1724,rattle,がたがた鳴らす
1725,reconcile,調和させる
1726,blur,ぼやかす
1727,soothe,なだめる
1728,impair,低下させる
1729,comply,従う
1730,pierce,穴をあける
1731,stumble,つまずく
1732,hinder,さまたげる
1733,mock,あざける
1734,embody,具現する
1735,stalk,忍び寄る
1736,proclaim,宣言する
1737,applaud,拍手する
1738,inflict,与える
1739,merge,合併する
1740,evacuated,避難した
1741,undone,元に戻る
1742,poke,突く
1743,haunted,つきまとわれる
1744,adhere,固く守る
1745,compile,まとめる
1746,wither,しぼむ
1747,stun,びっくりさせる
1748,choke,のどがつまる
1749,deteriorate,悪化する
1750,dump,捨てる
1751,murmur,つぶやく
1752,delete,削除する
1753,inhibit,阻害する
1754,divert,そらす
1755,tame,飼いならす
1756,reap,手に入れる
1757,affirm,断言する
1758,immersed,浸る
1759,expire,期限が切れる
1760,embark,乗り出す
1761,vow,誓う
1762,foresee,予知する
1763,adore,崇拝する
1764,yearn,切望する
1765,undermine,弱める
1766,suck,吸う
1767,pledge,誓う
1768,intrude,立ち入る
1769,sue,訴える
1770,distort,歪曲する
1771,extinguish,消す
1772,preach,説教する
1773,curb,抑制する
1774,withstand,耐える
1775,dip,浸す
1776,recite,暗唱する
1777,thrust,押し込む
1778,plead,嘆願する
1779,humiliate,恥をかかせる
1780,discharge,放出する
1781,condemn,非難する
1782,retrieve,検索する
1783,shrug,肩をすくめる
1784,evoke,呼び起こす
1785,fetch,取ってくる
1786,flatter,お世辞を言う
1787,prose,散文
1788,textile,織物
1789,timber,材木
1790,masterpiece,傑作
1791,riot,暴動
1792,carriage,車両
1793,apparatus,装置
1794,fuss,大騒ぎ
1795,deficiency,欠乏
1796,heir,相続人
1797,equator,赤道
1798,petroleum,石油
1799,witch,魔女
1800,vapor,蒸気
1801,probe,探査機
1802,expertise,専門知識
1803,scorn,軽蔑
1804,prophet,預言者
1805,breeze,そよ風
1806,sin,罪
1807,surge,急増
1808,complement,補うもの
1809,queue,列
1810,stake,賭け金
1811,ambassador,大使
1812,jury,陪審員
1813,cluster,集団
1814,lump,こぶ
1815,meadow,牧草地
1816,feat,偉業
1817,temperament,気質
1818,chill,寒気
1819,appliance,器具
1820,predecessor,前任者
1821,entity,存在
1822,hospitality,もてなし
1823,narrative,話
1824,segment,部分、区分
1825,catastrophe,大災害
1826,monarch,君主、皇帝
1827,constraint,制約
1828,amendment,改正、修正
1829,cosmos,宇宙
1830,aisle,通路
1831,hierarchy,階級制度
1832,toll,通行料
1833,transaction,取引
1834,burglar,強盗
1835,tyranny,圧政
1836,parasite,寄生生物
1837,intuition,直感
1838,communist,共産主義の
1839,legacy,遺産
1840,vein,静脈
1841,discourse,論説
1842,dairy,乳製品、酪農
1843,artifact,工芸品
1844,outlet,はけ口
1845,apprehension,不安
1846,melancholy,憂うつ
1847,novelty,目新しさ
1848,specimen,標本
1849,hygiene,衛生
1850,tactics,戦術
1851,monopoly,独占
1852,token,印
1853,aristocracy,貴族階級
1854,revenge,復讐
1855,activist,活動家
1856,rhetoric,美辞麗句
1857,entrepreneur,起業家
1858,census,国勢調査
1859,verge,瀬戸際
1860,advent,出現、到来
1861,analogy,類似点
1862,irrigation,灌漑
1863,coverage,報道
1864,cuisine,料理
1865,menace,脅威
1866,peril,危険
1867,limb,手足
1868,assault,攻撃
1869,hatred,憎しみ
1870,autonomy,自主性
1871,cram,塾
1872,subsidy,補助金
1873,empathy,共感
1874,slang,俗語
1875,posture,姿勢
1876,ideology,イデオロギー
1877,curse,災いのもと
1878,tumor,腫瘍
1879,intersection,交差点
1880,duration,期間
1881,deforestation,森林破壊
1882,precaution,用心
1883,bunch,ひとたばの
1884,shortcoming,欠点
1885,aspiration,熱望
1886,psychiatrist,精神科医
1887,shipping,発送
1888,senator,上院議員
1889,statesman,政治家
1890,subordinate,部下
1891,vacuum,空白
1892,quest,探究
1893,meditation,瞑想
1894,subscriber,加入者
1895,riddle,謎
1896,rag,ぼろ
1897,rust,さび
1898,sanitation,衛生
1899,midst,まっただ中
1900,mischief,いたずら
1901,proficiency,検定
1902,recollection,記憶
1903,latitude,緯
1904,friction,摩擦
1905,botanist,植物学者
1906,heredity,遺伝
1907,contempt,軽蔑
1908,anatomy,構造
1909,integrity,誠実
1910,cargo,貨物
1911,bribe,わいろ
1912,eruption,噴火
1913,funeral,葬式
1914,deficit,赤字
1915,bulk,大部分
1916,millionaire,百万長者
1917,ash,灰
1918,realm,領域
1919,plantation,農園
1920,plow,すき
1921,vending,販売
1922,orphan,孤児
1923,neuron,神経細胞
1924,vegetation,植生
1925,warrior,戦士
1926,mutation,突然変異
1927,sewage,下水
1928,paradigm,理論的枠組
1929,protocol,議定書
1930,skyscraper,高層ビル
1931,accord,一致
1932,bureaucrat,官僚
1933,array,多彩
1934,clash,衝突
1935,torture,拷問
1936,reign,統治
1937,thesis,論文
1938,digit,桁
1939,agenda,課題
1940,onset,発症
1941,peasant,小作農
1942,ultraviolet,紫外
1943,renowned,有名な
1944,transparent,透き通った
1945,dim,薄暗い
1946,legitimate,正当な
1947,adverse,悪
1948,swift,すばやい
1949,naive,世間知らずの
1950,dumb,ばか
1951,gloomy,暗い
1952,furious,激怒した
1953,earnest,まじめな
1954,terrific,すばらしい
1955,vertical,垂直な
1956,wicked,邪悪な
1957,subjective,主観的な
1958,enlightened,進んだ考えの
1959,authentic,本物の
1960,brutal,残忍な
1961,dizzy,めまい
1962,sheer,まったくの
1963,naughty,いたずらな
1964,damp,湿った
1965,static,静的な
1966,doomed,運命にある
1967,respiratory,呼吸器に関する、呼吸の
1968,innumerable,無数の
1969,clumsy,不器用な
1970,aesthetic,美的
1971,obsessed,とりつかれている
1972,detached,切り離された
1973,wrecked,難破した
1974,reckless,無謀な
1975,arrogant,傲慢な
1976,preoccupied,頭がいっぱいだ
1977,gigantic,巨大な
1978,conspicuous,顕著な
1979,slender,すらりとした
1980,manifest,明らかな
1981,tidy,きちんと
1982,skeptical,懐疑的な
1983,notorious,悪名高い
1984,anonymous,匿名の
1985,monotonous,単調な
1986,ample,豊富に
1987,trim,こぎれいな
1988,savage,野蛮な
1989,coherent,一貫した
1990,eloquent,雄弁な
1991,foul,不快な
1992,juvenile,青少年の
1993,compulsory,義務的な
1994,prone,やすい
1995,arbitrary,勝手な
1996,ingenious,独創的な
1997,divine,神聖なる
1998,tender,やさしい
1999,outraged,憤慨している
2000,intrinsic,本来の
2001,paralyzed,麻痺している
2002,compatible,適合する
2003,patriotic,愛国的な
2004,eminent,名高い
2005,potent,強力な
2006,insane,正気を失っている
2007,staple,主要な
2008,secondhand,間接
2009,indigenous,先住
2010,utmost,最も
2011,integral,不可欠な
2012,intricate,複雑な
2013,demographic,人口統計の
2014,mighty,強力な
2015,intact,無傷の
2016,intent,決意をしている
2017,intriguing,興味深い
2018,merry,陽気な
2019,perpetual,永続する
2020,spinal,脊椎の
2021,susceptible,かかりやすい
2022,mandatory,義務的な
2023,upright,まっすぐに
2024,abruptly,不意に
2025,conversely,逆に
2026,predominantly,主に
2027,lest,～しないように`,
  },
  {
    id: 'passtan',
    name: 'パス単準１級',
    csv: `番号,英単語,意味
1,last,続く、持続する、(天候・体力・食品などが)持ちこたえる
2,affect,に影響を及ぼす；を感動させる
3,claim,と主張する；を（自分のものとして）要求する
4,ship,を出荷する、を輸送する
5,issue,問題（点）；発行（物）；発表
6,purchase,を購入する
7,occur,起こる；心に浮かぶ；現れる
8,deal,を処理する；を商う；を分配する
9,consume,を消費する；を食べる，飲む
10,present,を提示する、を進呈する
11,fire,を解雇する、を首にする
12,regard,を見なす；を見る；を評価する
13,fine,に罰金を科す
14,transfer,を移す；を伝える；移る；乗り換える
15,decline,減少する；衰退する；を断る
16,eliminate,を取り除く
17,indicate,を指し示す；を述べる
18,ensure,を確実にする（≒make sure）；を守る
19,expand,（を）拡大する；（を）詳説する
20,address,（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）
21,identify,を特定する；を（～と）同一視する（with）
22,construct,を建設する（＝build）；を構成する
23,invest,（を）投資する；に（～を）与える（with）
24,obtain,を得る
25,struggle,闘い；懸命の努力
26,counter,～と反論する、～に反対する
27,associate,を結び付けて考える；（～と）交際する（with）
28,register,を記録する，登録する；（～に）登録する（for）
29,reveal,を明らかにする；を見せる
30,species,（生物の）種；種類
31,diet,(日常の)食べ物、療養食
32,site,用地，場所；跡地；（ウェブ）サイト
33,cell,細胞；独房；電池
34,facility,施設，設備；機能；才能
35,practice,実践，実行；（社会の）慣習；練習
36,resident,居住者；滞在者
37,option,選択（の自由）；選択肢
38,organ,器官，臓器；組織；（パイプ）オルガン
39,critic,批判する人、批評家
40,region,地域；領域；部位
41,tax,税金、税
42,access,利用，入手；接近（の機会・方法・権利）
43,virus,ウイルス；（感染症の）病原体
44,bill,請求書；【英】勘定書（≒【米】check）；法案
45,evidence,証拠
46,attempt,を試みる，企てる
47,account,説明；勘定；口座
48,theory,学説；理論；原理；推測
49,factor,要因、要素
50,stock,在庫品；蓄え；株
51,chemical,化学の，化学的な
52,media,マスメディア、マスコミ
53,income,収入；所得
54,supply,を供給する
55,shortage,不足、欠如
56,poverty,貧困、欠乏
57,criminal,犯人、犯罪者
58,budget,予算；経費
59,authority,〔通例 the ～ties〕（関係）当局；権威；権限
60,genome,ゲノム
61,atmosphere,〔the ～〕大気；雰囲気
62,aid,を援助する，助ける（≒help）
63,measure,措置、程度、基準
64,subject,話題；科目；主題；被験者
65,decade,10年間
66,weapon,兵器，武器（≒arms）
67,nutrient,栄養分、栄養になるもの
68,expense,〔～s〕経費；費用；犠牲
69,structure,構造；体系；構造物
70,adolescent,青年
71,procedure,手順、手続き
72,minimum,最小限度
73,fuel,燃料；勢いを増加させるもの
74,resource,〔通例～s〕資源；〔通例～s〕資金；才覚
75,regulation,規則、規制
76,contract,契約（書）；協定
77,insurance,保険；保険料；保険金
78,employment,雇用、職
79,ban,を（法的に）禁止する；を締め出す
80,vehicle,車、(特に陸上の)乗り物、輸送機関、伝達手段
81,soil,土地，土壌；（悪事などの）温床
82,cargo,(主に船・飛行機の)積荷、貨物
83,aircraft,航空機、飛行機
84,current,現在の；現代の；通用している
85,political,政治（上）の
86,significant,重要な，重大な；意義深い
87,effective,効果的な、有効な
88,military,軍の，軍事（用）の
89,due,予定された；（支払）期日で；しかるべき
90,essential,（～に）必要不可欠な（to/for）；本質的な
91,illegal,違法の、非合法の
92,immune,（～に対して）免疫を持つ（to）；（～を）免れた（from）
93,numerous,非常に数の多い
94,extreme,極端な；極度の，過激な
95,general,全体の、一般的な
96,agricultural,農業の、農耕の
97,overall,総合的な；全体的な
98,additional,追加の、付加的な
99,entire,全体の，全部の（≒whole）；完全な
100,severe,（人・規律・事態・天気などが）厳しい；猛烈な
101,alter,を変える；変わる（≒change）
102,adopt,を採用する；（態度など）をとる；を養子にする
103,vote,投票；投票結果；〔the ～〕選挙権
104,determine,を決定する；を正確に知る
105,enable,（人）が...できるようにする；を可能にする
106,conduct,（調査・実験など）を実施する；を導く
107,direct,を案内する、を指揮する
108,absorb,を吸収する；を併合する；を夢中にさせる
109,imply,を暗に意味する；を必然的に伴う
110,operate,を操作する；機能する；手術する
111,demonstrate,を論証［証明］する；デモをする
112,boost,を押し上げる；を増加させる
113,prove,を証明する；判明する，わかる
114,monitor,を監視する；を傍受する
115,defeat,を負かす（≒beat）；を失敗させる
116,protest,（に）抗議する；を主張する
117,target,（到達・攻撃）目標；的
118,preserve,を保存する；を保持する；を保護する
119,oppose,に反対する；を対抗［対比］させる
120,migrate,移住する；（鳥などが）渡る
121,analyze,を分析する
122,discourage,（人）にやる気をなくさせる；を落胆させる
123,confirm,を確認する；を裏づける
124,intend,を意図する
125,predict,を予言［予測］する
126,extend,を伸［延］ばす；伸びる；及ぶ
127,figure,数字；姿；人物；図表
128,transportation,交通[輸送]機関、輸送
129,institution,機関；協会；施設；制度
130,theft,窃盗（罪）
131,candidate,（～の）候補（者）（for）；志願者
132,mammal,哺乳動物
133,economist,経済学者
134,protein,たんぱく質
135,immigrant,(外国からの)移住者、移民
136,property,不動産、財産、特性
137,fund,〔しばしば～s〕基金，資金
138,habitat,生息地；（人の）居住地
139,symptom,症状；兆候（≒sign）
140,eruption,勃発、噴火
141,quantity,量；分量
142,ad,広告
143,saving,節約、倹約、預金(額)、蓄え
144,territory,領土；（活動の）領域；（動物の）テリトリー
145,threat,脅威；（悪い）兆し；脅迫
146,sufferer,苦しむ人、被災者、病人
147,emission,排気、放出(物)
148,executive,重役、幹部、経営者
149,strategy,戦略
150,riot,暴動
151,district,地区；行政区
152,election,選挙
153,medication,(医師が処方した)薬、医薬品、薬物治療
154,breed,を繁殖させる，育てる；繁殖する
155,conflict,争い；論争；不一致
156,productivity,生産性
157,organism,有機体、生物
158,representative,代表者、代理人
159,warehouse,倉庫
160,refund,返金、払い戻し(金)
161,tuition,【主に米】 授業料；（個人）指導
162,range,範囲、領域
163,victim,犠牲（者），被害者
164,dose,（薬の1回分の）服用量；放射線の1回の照射量
165,mainland,本土
166,waterfall,滝
167,satellite,人工衛星、衛星
168,evolution,進化、発展、展開
169,prey,獲物；犠牲者
170,bystander,傍観者
171,creature,生き物、(特に人以外の)動物
172,civilization,文明
173,tribe,部族；仲間
174,permission,許可、承認
175,barrier,（～に対する）障壁（against/to）；防壁
176,wage,賃金、給料
177,drone,ドローン、(無線操作の)無人機
178,appearance,外観、出現
179,embassy,大使館；大使一行
180,skeleton,骨格；骨組み；概略
181,wildlife,野生生物
182,potential,潜在的な；可能性を秘めた
183,limited,限定された、わずかの
184,rural,田舎の（⇔urban），田園の
185,advanced,進歩した、前進した、上級の
186,beneficial,有益な、有利な
187,genetic,遺伝子の
188,radical,急進的な；根本的な
189,hostile,敵意のある（⇔friendly 友好的な）
190,fit,健康な、元気な、ふさわしい
191,long-term,長期にわたる、長期的な
192,Arctic,北極の
193,minor,重要でない；小さい
194,risky,危険な
195,complex,複雑な、複合(体)の
196,competitive,競争力のある、格安の、競争の
197,immediate,即座の；当面の；すぐそばの；直接の
198,religious,宗教(上)の、信仰があつい
199,related,関連した、関係のある
200,affordable,手頃な、安価な
201,donate,を寄付する；（臓器・血液）を提供する
202,lessen,を減らす
203,manufacture,を製造する；をでっち上げる
204,commute,通勤［通学］する
205,exaggerate,（を）誇張する；を強調する
206,suspect,ではないかと思う；（人）を疑う
207,acquire,を得る；を習得する
208,reintroduce,(動植物など)をかつての分布域に再導入する、(制度など)を復活させる
209,reschedule,の日時を変更する
210,adapt,適応する；を（～に）適合させる（to）
211,generate,を生み出す；（電気など）を発生させる
212,guarantee,を保証する
213,dump,を投棄する；をどさっと落とす
214,update,を最新のものにする；をアップデートする
215,classify,を分類する；を機密扱いにする
216,acknowledge,"（事実など）を認める（≒admit, accept）；に謝意を表す"
217,enforce,を施行［実施］する；を（～に）強制する（on/upon）
218,renew,を更新する；（資源）を再生する
219,overlook,を見落とす；を大目に見る；を見渡す
220,evaluate,を評価する；を査定する
221,commit,献身する；（罪など）を犯す；を投入する
222,argument,議論、口論
223,archaeologist,考古学者
224,reputation,評判；名声
225,fossil,化石；時代遅れの人［物］
226,status,地位；状態
227,contrast,（～との）対照（with/to）
228,workplace,職場
229,equality,平等
230,colleague,（職場の）同僚
231,assistance,援助、支援
232,luxury,ぜいたく（品）；〔形容詞的に〕豪華な
233,outbreak,発生，勃発
234,council,（地方）議会；評議会；（公の）会議
235,pottery,陶器類、焼き物類
236,assignment,任務、宿題、割り当て
237,particle,（微）粒子；ほんのわずか
238,radiation,放射能，放射線
239,priority,優先（事項）
240,content,内容，中身；コンテンツ
241,destination,(旅行などの)目的地、行き先
242,mine,鉱山、地雷
243,injury,傷害、けが
244,lottery,宝くじ、抽選
245,feature,特徴、特集記事
246,labor,労働、労働力
247,diabetes,糖尿病
248,bulb,電球、球根
249,r?sum?,履歴書[≒CV]、要約
250,mud,ぬかるみ、泥
251,psychology,心理学；心理（状態）
252,corporation,（大）企業；法人
253,ecosystem,生態系
254,promotion,昇進、促進、販売促進
255,administration,管理（部）；行政；政府（機関）
256,complaint,苦情、不平
257,debt,借金，負債；恩義
258,requirement,必要条件、必需品
259,workforce,労働人口，総労働力；全従業員（数）
260,preference,他より好むこと、好み
261,refugee,難民、亡命者
262,inhabitant,居住者、住民
263,subscription,予約購読(料)、寄付(金)
264,recipient,受け取る人；（臓器などの）被提供者
265,shift,を変える，移す；変わる；移動する
266,vessel,船舶；容器；（体液が通る）脈管
267,ingredient,材料，成分；（成功の）要因
268,qualified,有能な、資格のある、適任の
269,widespread,広範囲にわたる；広く普及した
270,alternative,代替の、どちらか一方の
271,harsh,厳しい；（光・色・味などが）不快な
272,enormous,莫大な，巨大な
273,specific,明確な、特定の
274,artificial,人工の（⇔natural 自然の）；不自然な
275,toxic,有毒な；中毒性の
276,flexible,融通の利く，柔軟な
277,latest,最新の、最近の
278,former,以前の、元の
279,capable,能力がある；有能な
280,practical,実践的な、実際的な
281,mechanical,機械の；機械的な
282,federal,連邦（政府）の
283,aggressive,攻撃的な；意欲的な
284,adequate,十分な；適切な
285,unexpected,思いがけない，不意の
286,attractive,魅力的な
287,sufficient,"十分な（for ～に, to do ～するのに）"
288,costly,費用のかかる、高価な、犠牲[損失、労力]の大きな
289,eventually,ついに(は)、結局(は)
290,otherwise,そうでなければ、そのほかの点では
291,previously,以前に
292,relatively,比較的(に)、相対的に
293,consequently,その結果(として)、従って
294,constantly,絶えず、常に
295,typically,通常、概して、典型的に
296,barely,かろうじて、ほとんど～ない
297,despite,～にもかかわらず
298,per,～につき、～ごとに
299,beneath,～の下に[の]
300,whereas,～するのに（対し），～する一方
301,post,(インターネットで)(情報・メッセージ)を投稿する、(ビラなど)を張る
302,reject,を拒否する
303,consult,（に）相談する；を参照する
304,obey,に従う；に服従する
305,engage,を従事させる；を（～として）雇う（as）；（～に）従事する（in/with）
306,restore,を回復させる；を修復する
307,colonize,を植民地化する、を入植させる
308,interact,影響し合う；相互に作用する
309,inspire,（人）を奮起させる；を喚起する
310,sue,を告訴する；（～を求めて）訴訟を起こす（for）
311,estimate,～と推定する、を見積もる
312,strengthen,を(より)強くする
313,carve,を彫る；を切り開く；（肉）を切り分ける
314,convince,を納得［確信］させる
315,propose,を提案する；をもくろむ；結婚を申し込む
316,blame,を責める；の責任を負わせる
317,collapse,崩壊する；（人が）倒れる；を折り畳む
318,import,を輸入する；を取り込む
319,load,に積む；に負わせる
320,pollute,を汚染する
321,spot,(特定の)場所、斑点、しみ
322,prescription,処方箋、処方
323,duty,義務；〔しばしば～ties〕職務；関税
324,union,組合、統合、団結
325,concept,概念
326,root,根本、源、(植物の)根
327,survival,生き残ること、生き延びること
328,maintenance,保守、整備、維持
329,formation,形成；構成（物）；隊列
330,educator,教育者、教師
331,kidney,腎臓
332,nutrition,栄養（の摂取）
333,brand,ブランド、銘柄
334,storage,保管、貯蔵(法)、収容力
335,firm,確固たる；堅固な；安定した
336,statistics,統計；統計学
337,toll,損害（の程度）；死傷者数；通行料
338,tip,助言，秘訣；チップ；先端
339,CEO,最高経営責任者
340,circumstance,〔通例～s〕状況，事情；境遇
341,outsider,部外者、門外漢
342,reduction,減少、削減
343,settlement,開拓地、解決、合意
344,divorce,離婚；分離
345,likelihood,可能性、見込み
346,livestock,(牛・羊・豚などの)家畜(類)
347,possession,所有物、財産、所有
348,plot,（小説などの）筋；陰謀
349,category,部類，区分；範疇
350,welfare,福祉，幸福
351,moisture,水分；湿気
352,obesity,（病的な)肥満
353,grant,（人）に（許可・権利など）を与える；を認める
354,layer,層
355,secretary,秘書
356,anxiety,不安、心配
357,ownership,所有権、所有者であること
358,foundation,基礎、基盤
359,division,不和、分割、部門、仕切り
360,establishment,設立、制定、組織
361,conservation,（動植物などの）保護；保存
362,murder,殺人
363,presence,存在；出席；面前
364,paradox,逆説；矛盾
365,prisoner,囚人
366,surgeon,外科医
367,frequency,頻度、しばしば起こること
368,port,港
369,reception,反応；宴会；受付；受信（状態）
370,coworker,同僚、仕事仲間
371,rust,さび
372,athletics,スポーツ、運動競技
373,voyage,(ゆったりした長い)旅、船旅
374,ecologist,生態学者、環境保護論者
375,soul,精神；魂，霊魂；生気
376,isolated,孤立した、孤独な
377,biased,偏った、偏見を持った
378,multiple,多様な；種々雑多な
379,critical,批判的な、重大な
380,remote,（～から）遠く離れた（from）；かけ離れた
381,encouraging,勇気づける、望みを持たせる
382,underground,地下の、秘密の
383,stable,安定した；動じない
384,domestic,家庭の；国内の；（動物が）飼いならされた
385,shallow,浅い（⇔deep 深い）；浅薄な
386,willing,～するのをいとわない、快く～する
387,superior,よりすぐれた
388,profitable,利益になる、有益な
389,solid,しっかりした；硬い；固体の
390,tremendous,途方もない，莫大な；すばらしい
391,intellectual,知的な、知性の
392,chief,主な、最高位の
393,steady,着実な，一定の；安定した
394,evil,邪悪な；有害な
395,coastal,沿岸(地方)の
396,dairy,〔集合的に〕乳製品；乳製品加工所［販売者］
397,digestive,消化の
398,loyal,（～に）忠実な（to）；誠実な
399,sensory,感覚の
400,fancy,（気まぐれな）好み；空想；思いつき
401,spoil,を台無しにする；を甘やかす；だめになる
402,stimulate,を刺激する
403,distract,（注意など）をそらす
404,bargain,買い得品；取引；契約
405,emerge,明らかになる、現れる
406,browse,（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く
407,define,を定義する、を明確に示す
408,adjust,を調整する；を適合させる；順応する
409,deserve,に値する
410,undergo,を経験する；（手術など）を受ける；に耐える
411,contradict,と矛盾する；に反対意見を言う
412,withdraw,を引き出す；を撤回する；撤退する
413,accompany,に同行する；に付随する
414,infect,(人)を感染させる、を汚染する
415,rebel,反逆者
416,convert,を変える；を改宗［転向］させる；を交換する
417,calculate,を計算する；を予測する
418,utilize,を利用する（≒make use of）
419,admit,～と(しぶしぶ)認める、を中に入れる
420,punish,を罰する；に損傷を与える
421,approve,賛成する；を承認する
422,owe,に借りがある；のおかげである
423,proceed,進む，進行する；（～を）続行する（with）
424,navigate,（を）誘導する；（を）操縦する；（を）航行する
425,postpone,を延期する（≒put off）
426,swallow,（を）飲み込む；をうのみにする；に耐える
427,tailor,を合わせて作る
428,overhear,を偶然耳にする
429,consequence,結果、重要さ
430,application,申請書、申し込み、適用
431,workout,運動、(運動競技の)練習
432,obstacle,（～に対する）障害（物）（to）
433,treaty,（国家間の）条約；協定
434,deforestation,森林伐採
435,infrastructure,基本的施設；（経済）基盤
436,contribution,貢献、寄付(金)
437,congestion,混雑
438,exposure,身をさらすこと、暴露
439,blow,強打、打撃、災難
440,participation,参加
441,crisis,危機、難局
442,ancestor,先祖、祖先
443,architect,建築家、設計者
444,existence,存在、生存
445,deposit,を置く；を預ける；を堆積させる
446,finance,金融、財政(学)
447,awareness,認識、意識
448,intake,摂取量；受け入れ数；取り入れること
449,witness,目撃者；証人；証拠，証言
450,coverage,報道、(保険の)補償範囲、適用範囲
451,lawsuit,(民事)訴訟
452,session,集まり；（議会の）会期；（開会中の）議会
453,means,〔単数・複数扱い〕手段；〔複数扱い〕資力，収入
454,pioneer,先駆者、草分け、(未開地の)開拓者
455,satisfaction,満足
456,basis,根拠、基礎
457,element,(構成)要素、成分
458,phenomenon,現象、事象
459,scale,規模、程度
460,journal,(専門)雑誌、日刊[週刊]新聞
461,grain,穀物；粒；きめ
462,continent,大陸、(イギリスから見て)ヨーロッパ大陸
463,headquarters,本社、(軍・警察・会社などの)本部
464,globalization,国際化
465,brochure,パンフレット、小冊子
466,inspection,検査、点検
467,attendance,出席[入場]者数、出席
468,copper,銅
469,dozen,12(個)、１ダース
470,flu,インフルエンザ
471,burial,埋葬
472,mold,鋳型；鋳物；性格；かび
473,patch,（～の）部分，斑点；継ぎ；貼り薬
474,diagram,図(表)
475,placement,(就職先・学校・里親などの)斡旋、配置
476,shame,恥；残念なこと
477,wheelchair,車椅子
478,experienced,熟練した
479,initial,初めの
480,mainstream,（活動・思潮などの）主流；大勢
481,appropriate,適切な
482,fake,偽の；見せかけだけの
483,alert,警戒して；敏速な
484,fatal,致命的な、破滅的な
485,nutritious,栄養になる
486,sophisticated,高性能の，精巧な；洗練された
487,automatic,自動の
488,raw,生の；未加工の
489,slight,わずかな；取るに足らない
490,man-made,(物質などが)合成の、人工の
491,aging,高齢化が進む、老朽化している
492,spiritual,精神の（⇔material）；霊的な
493,endangered,(動植物が)絶滅の危機にある
494,sticky,ねばねばの、粘着性の
495,fertile,肥沃な（⇔barren 不毛の）；多産の
496,elsewhere,どこかほかのところへ[に、へ]
497,altogether,完全に
498,strictly,厳格に、厳しく
499,beforehand,前もって、あらかじめ
500,likewise,同様に（≒in the same way）
501,detect,を感知する；を見つけ出す；に気づく
502,combat,戦闘；対立
503,pose,（危険）を引き起こす；（問題など）を提起する；（～を）装う（as）
504,emphasize,を強調する；を重視する
505,highlight,を目立たせる，強調する
506,resist,に抵抗する；〔通例否定文で〕を我慢する
507,exceed,を超える；に勝る
508,relocate,(住居・事務所・住民など)を移転[移動]させる
509,disprove,の誤りを証明する、の反証を挙げる
510,crawl,はう；ゆっくり進む
511,foster,をはぐくむ；を養育する；を心に抱く
512,harass,を絶えず悩ます、を苦しめる
513,magnify,を拡大する、を誇張する
514,sneak,こっそり動く
515,stray,はぐれる，（道に）迷う
516,worsen,を悪化させる；悪化する（≒deteriorate）
517,advocate,を主張する；を擁護する
518,evacuate,を避難させる、から立ち退く
519,verify,の正しさを証明［確認］する
520,abuse,乱用；虐待
521,scatter,をまき散らす；分散する
522,endorse,を推奨する
523,modify,を修正する；を緩和する
524,penetrate,（に）浸透する；（に）進出する；（を）貫く；（を）見抜く
525,conform,順応する；一致する
526,leave,休暇
527,tissue,（生物の）組織
528,gut,腸、消化管、内臓
529,lightning,雷、稲妻
530,camel,ラクダ、黄褐色
531,antioxidant,抗酸化物質、酸化防止剤
532,disorder,障害，（心身の）不調；混乱
533,cattle,〔集合的に〕牛
534,oath,誓い、誓約
535,monument,記念碑，遺跡；金字塔
536,heating,暖房(装置)
537,germ,細菌、病原菌
538,legend,伝説、言い伝え、伝説的な人物
539,auditorium,(学校の)講堂、公会堂
540,therapy,療法；心理療法
541,heritage,遺産
542,invasion,侵害、侵入
543,instruction,(製品の)使用書、指示、教育
544,extinction,(家系・種などの)絶滅、消滅
545,creativity,創造性、独創性
546,plantation,(熱帯・亜熱帯の)(大)農園
547,drought,干ばつ；（慢性的な）不足
548,wealth,財産、富、豊富
549,reminder,思い出させるもの、記念物[品]
550,inquiry,問い合わせ、質問、調査
551,investigation,(詳しい)調査、研究
552,boundary,境界（線）；〔通例～ries〕限界
553,compartment,(列車・客室などの仕切った)区画[部屋]
554,substitute,を代わりに使う；（～の）代理をする（for）
555,hybrid,雑種の；混成の
556,characteristic,特徴
557,routine,決まり切った仕事；いつもの手順
558,edge,優勢、刃、端
559,incident,出来事，事件；紛争
560,clue,（～の）手がかり（to/about）；（パズルの）ヒント
561,removal,除去、移動
562,outcome,結果
563,altitude,高度，標高
564,closure,(工場・学校などの)閉鎖
565,compound,を悪化させる；を合成する；を混合する
566,surplus,余剰（⇔shortage 不足），過剰；黒字
567,vaccine,ワクチン
568,reference,言及、参照
569,obligation,義務、責任
570,ritual,儀式；（日常の）習慣的行為
571,mean,意地の悪い、不親切な
572,coral,サンゴ(製)の
573,novel,斬新な、目新しい
574,relevant,関係がある；適切な
575,efficient,効率的な、有能な
576,fragile,壊れやすい；虚弱な
577,impressive,印象的な、感動的な
578,offensive,不快な、攻撃的な
579,distinct,明らかに異なる；明瞭な
580,temporary,一時的な（⇔permanent）
581,arrogant,横柄な，傲慢な
582,spacious,広々とした
583,reasonable,筋の通った、分別のある、(値段などが)手ごろな
584,substantial,(数量などが)かなりの、重要な、実質的な
585,disabled,障害のある；障害者用の
586,straightforward,単純な；率直な
587,tame,飼いならされた，人に慣れた；退屈な
588,mandatory,義務的な、強制的な、命令の
589,edible,食用の，食べられる
590,outstanding,際立った；未払いの；未解決の
591,deadly,致命的な、命にかかわる
592,petty,低級の、心の狭い、取るに足らない
593,definitely,間違いなく、確かに
594,roughly,おおよそ、乱暴に
595,virtually,ほとんど、実質的に
596,apparently,(真偽のほどはともかく)聞いた[見た]ところでは、どうやら
597,unfairly,不当に、不公平に
598,briefly,少しの間に、簡潔に
599,aside,わきに、別にして、考慮に入れないで
600,legally,法的に、合法的に
601,resort,（好ましくない手段に）訴える，頼る（to）
602,submit,を提出する；（～に）従う（to）
603,originate,由来する、生じる、始まる
604,regret,を後悔する、を遺憾に思う
605,cooperate,協力する
606,revise,を修正する；を改訂する
607,restrict,を制限する
608,occupy,（空間・時間）を占める；を占領する
609,fade,薄れる；衰える
610,relieve,を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する
611,suppress,を抑える；を抑圧する
612,starve,飢える；（～を）渇望する（for）；を飢えさせる
613,scratch,を引っかく；を取り消す，削除する
614,unite,団結する、一体化する
615,grip,を握る；をとらえる
616,surrender,を放棄する，引き渡す；（～に）屈する（to）
617,twist,をねじる，ひねる；を歪曲する
618,remodel,を改装する、を改造する
619,triple,３倍になる、を３倍にする
620,drown,溺死する；を水浸しにする
621,lean,傾く；寄りかかる；をもたせかける
622,soak,を浸す；をずぶぬれにする；浸る
623,hover,(鳥・昆虫・ヘリコプターなどが)空中(の一点)に止まる
624,interrupt,を中断させる；（の）邪魔をする
625,socialize,(社会的に)交際する
626,termite,シロアリ
627,microbe,微生物；細菌
628,beverage,（水以外の）飲み物，飲料
629,paperwork,(必要)書類、書類事務
630,descendant,子孫
631,sculpture,彫刻（作品）
632,handout,(講演・授業などの)配布物、プリント
633,replacement,交換、交替、代わりの人[もの]
634,minister,大臣
635,stream,小川
636,predator,捕食動物；略奪者
637,observer,監視員、観察者
638,commission,代理手数料、歩合、委員会
639,committee,委員会
640,junk,がらくた、つまらないもの
641,departure,出発
642,description,描写、説明
643,supervisor,監督者；指導教員
644,guidance,指導、案内
645,landscape,眺め、風景、景色
646,crew,(船の)乗組員、(飛行機・列車などの)乗務員
647,drain,（液体）を流出させる；（液体が）流れ出る
648,stereotype,固定観念、ステレオタイプ
649,edition,(刊行物の)版
650,graphic,図、挿絵
651,pathway,小道、細道
652,reunion,再会（の集い）；再結合
653,cliff,崖、絶壁
654,coordinator,コーディネーター、取りまとめ役、責任者
655,depth,深さ、深み
656,liver,肝臓
657,monopoly,独占（権）
658,usage,（使）用法；語法；習慣
659,chart,図，グラフ；海図；ヒットチャート
660,expectancy,期待、見込み
661,nowhere,どの場所も～ない
662,courthouse,裁判所(の建物)
663,cove,入江、小湾
664,dock,埠頭、波止場、(艦船の)ドック
665,ministry,省
666,inflammation,炎症、点火、引火
667,cholesterol,コレステロール
668,gender,(社会的・文化的)性別、ジェンダー
669,depression,うつ病、意気消沈、不景気
670,stem,（草木の）茎，幹
671,personnel,〔集合的に〕職員，社員
672,controversy,論争
673,recognition,(人・物が)それと分かること、認めること、認識
674,applicant,応募者、志願者
675,anthropologist,人類学者
676,sewage,下水
677,acceptable,受け入れられる、容認できる
678,nuclear,原子力利用の、核エネルギーの
679,moral,道徳(上)の、倫理的な
680,marine,海の；船舶の
681,conventional,伝統的な、型にはまった
682,awful,ひどい；嫌な；ものすごい
683,consistent,着実な、安定した、首尾一貫した
684,primitive,原始的な；未開の
685,mature,成熟した；熟した
686,unfamiliar,（～に）不慣れな（with）；（～に）（よく）知られていない（to）
687,impractical,実用的ではない、非現実的な
688,unpredictable,変わりやすい、予測できない
689,misleading,誤解させる、紛らわしい
690,plentiful,豊富な、十分な
691,Mediterranean,地中海(沿岸地域)の
692,unsafe,安全でない、危険な
693,bare,露出した、裸の
694,feeble,病弱な、(体が)弱々しい
695,horrible,実にひどい、ぞっとする
696,scenic,景色の良い
697,supplementary,補足の、追加の
698,nosy,詮索好きな、おせっかいな
699,intermediate,中級の；中間の
700,universal,(あらゆる人に)共通の、全員の、普遍的な
701,capture,を捕らえる、を捕虜にする
702,arise,起こる、出現する
703,implement,を実行［実施］する
704,reproduce,を複製する；を繁殖させる；繁殖する
705,seize,をつかむ；を奪い取る；を没収する
706,dominate,を支配する、優勢である
707,complicate,を複雑にする
708,scan,を走査する；をざっと見る；を注意深く調べる
709,negotiate,交渉する；を（交渉して）取り決める
710,illustrate,を説明する、を例示する
711,encounter,に遭遇する
712,confine,を限定する；〔通例受身形で〕閉じ込められる
713,transmit,を伝える；（電波・信号など）を送る
714,administer,を管理する、を経営する、を治める、(治療)を施す
715,ease,を和らげる、緩和する
716,resume,（を）再開する；を取り戻す
717,pursue,を追跡する、を追求する
718,decay,腐敗する（≒rot）；（徐々に）衰える
719,shrink,縮む，縮小する；減少する；ひるむ
720,cherish,を大切にする；を心に抱く
721,launch,を売り出す、を開始する、(ロケットなど)を発射する
722,accommodate,を収容する；を（～に）適応させる（to）
723,withstand,に耐える
724,halt,を止める；止まる
725,transform,を大きく変える
726,transplant,を移植する；を移住させる
727,retail,小売り（⇔wholesale 卸売り）
728,abandon,を捨てる、を放棄する
729,developer,宅地造成業者、開発者
730,circulation,循環；流通；（新聞・雑誌の）発行部数
731,appliance,(特に家庭用の)器具
732,bond,きずな、債券、契約
733,circuit,周回すること、回路、巡回
734,innovation,(技術)革新、新機軸
735,infant,幼児、乳児
736,transaction,（商）取引；（人と人との）交流
737,celebrity,有名人、著名人
738,checkup,健康診断、検査
739,makeup,化粧；化粧品；構成；性質
740,respondent,(調査・アンケートなどの)回答者
741,well-being,健康、幸福
742,flaw,欠点、傷、ひび
743,strain,に負担をかける；を緊張させる；を漉す
744,rivalry,ライバル意識、競争
745,publicity,一般に知られること、評判、宣伝
746,consent,同意，承諾
747,addiction,依存
748,profession,職業；専門職；同業者仲間
749,sacrifice,犠牲；いけにえ
750,nerve,神経；〔～s〕神経過敏；（...する）度胸（to do）
751,assumption,(確証のない)仮定、想定、思い込み
752,context,文脈、背景、状況
753,era,時代
754,trait,特徴、特色
755,voucher,クーポン券、商品券
756,draft,下書き；為替手形；隙間風
757,blaze,炎、強いか輝き
758,currency,通貨、普及
759,stance,立場、対処の姿勢
760,fluid,流動体，液体
761,dispute,に異議を唱える；（を）議論する
762,counterpart,相当する物［人］
763,perception,認識、知覚
764,custody,親権、保護、管理、拘留
765,venue,会場、開催地
766,dread,をひどく恐れる
767,incentive,動機（づけ）；報奨金
768,disgust,をむかつかせる；に愛想を尽かせる
769,province,州，省；〔the ～s〕地方；分野
770,proponent,支持者
771,commercial,商業(上)の、営利的な
772,excessive,過度の、法外な
773,vulnerable,（攻撃などに）弱い，もろい；傷つきやすい
774,protective,保護する、守ろうとする
775,secure,安全な、確かな
776,obvious,明らかな
777,reluctant,気が進まない，嫌がる（⇔willing）
778,confident,確信して、自信に満ちた
779,intelligent,知能の高い、利口な
780,barren,不毛の、作物ができない
781,epidemic,流行（病）；蔓延
782,reliable,信頼できる
783,curious,好奇心の強い、詮索好きな
784,hasty,急ぎの、早まった
785,behavioral,行動の
786,bulky,かさばった、扱いにくいほど大きい
787,faulty,(機械・装置などが)欠陥のある
788,hectic,やたらと忙しい
789,knowledgeable,よく知っている、物知りの
790,tense,張り詰めた，緊張した
791,intact,損なわれていない，手つかずの
792,comprehensive,包括的な、広範囲にわたる
793,hesitant,ためらいがちな
794,scarce,乏しい；珍しい
795,defensive,防御的な
796,permanently,永遠に、いつも
797,nonetheless,それにもかかわらず，それでもなお
798,primarily,主として、初めに
799,intentionally,故意に、意図的に
800,abruptly,突然に
801,outsource,を外注する、を業務委託する
802,applaud,に拍手する、を賞賛する
803,bribe,賄賂
804,replicate,(同一実験など)を繰り返す、を複製する
805,stroll,散歩する、ぶらぶら歩く
806,swell,膨張する，腫れる；を膨らませる
807,uphold,を支持する、を確認する、を維持する
808,vomit,吐く、もどす
809,expire,期限が切れる
810,recruit,を募る；に新人を補充する
811,enhance,を高める、を増す
812,accumulate,を蓄積する，集める；積もる
813,designate,を指定する；を任命する
814,conceal,を隠す（≒hide）；を秘密にする
815,disregard,を無視する；を軽視する
816,accelerate,を加速させる，促進する；加速する
817,revive,を復活させる；復活する
818,enact,(法案)を制定する、を通過させる
819,exert,を及ぼす；（力など）を行使する
820,leak,漏れる；を漏らす
821,jail,刑務所，拘置所（≒prison）
822,reform,を改革する、を改善する
823,declare,を宣言する、を断言する
824,outline,の要点を述べる；の輪郭を描く
825,annoy,をいらいらさせる、を悩ます
826,interfere,干渉する，介入する；邪魔する
827,nest,(鳥の)巣
828,founder,創設者
829,biologist,生物学者
830,arrangement,準備、配置、取り決め
831,landfill,ごみ埋め立て地
832,trunk,(木の)幹、(象の)鼻、(自動車の)
833,principle,(個人の)主義、信条、原則
834,series,連続、一続き
835,independence,独立、自立
836,exploration,探検、調査
837,justice,正義、公正、司法、裁判
838,humanity,人類
839,involvement,関与、巻き込まれること
840,accounting,経理、会計(学)
841,discrimination,（～に対する）差別（against）；区別
842,inequality,不平等
843,master,修士
844,millennium,千年間，千年紀
845,refusal,拒否、拒絶
846,wound,（銃弾・刃物などによる）傷；痛手
847,absence,不在、欠席
848,distribution,分配、配給
849,wilderness,荒野；（庭・町などの）放置された部分
850,concentration,濃度、集中、専念
851,craft,工芸品、(手先でする)作業
852,crust,地殻、パンの耳、(動物の)甲殻
853,basement,地階、地下室
854,janitor,(アパート・ビル・学校などの)用務員、管理人
855,prejudice,偏見、先入観
856,prosperity,繁栄、繁盛
857,robbery,強盗(事件)
858,warranty,保証(書)
859,appetite,食欲；欲求
860,bullet,銃弾
861,preparation,準備、支度
862,citizenship,市民権、公民権、市民[国民]であること
863,stale,(パンなどが)堅くなった、鮮度の落ちた、陳腐な
864,disadvantaged,(経済的・社会的に)恵まれない
865,ongoing,継続している，進行中の
866,sturdy,頑丈な、たくましい、不屈の
867,unauthorized,権限のない、(公的に)認可されていない
868,verbal,口頭での、言葉の[に関する]
869,weary,疲れ果てた；（～に）うんざりした（of）
870,equivalent,相当する、同等の
871,intense,極度の、激しい
872,consecutive,連続した
873,noticeable,著しい、目立つ
874,crucial,重大な、決定的な
875,electrical,電気の、電気を扱う
876,steep,（傾斜が）急な；急激な；法外な
877,civil,(軍人・官史に対して)民間の、一般市民の
878,supreme,最高の
879,elite,えり抜きの
880,broad,(幅の)広い、広範囲な
881,industrial,産業の、工業の
882,allied,連合の、同盟を組んだ
883,external,外部の；対外的な
884,mere,ほんの、単なる
885,latter,後半の、後ろの方の、後者の
886,presidential,大統領の[による]、社長の
887,ethical,倫理(上)の、道徳の
888,realistic,現実的な、実際的な
889,harmless,害のない
890,underlying,潜在的な、根本的な
891,urgent,緊急の
892,complimentary,無料の、賞賛する
893,eager,熱望して、熱心な
894,loudly,大声で、騒々しく
895,accordingly,それ相応に、従って、そんなわけで
896,occasionally,ときどき
897,smoothly,順調に、滑らかに
898,frankly,率直に、正直に
899,notably,とりわけ
900,continuously,連続して、継続して
901,compel,（人）に強いて～させる
902,distinguish,区別する、を区別する
903,heighten,を高める、を増大させる
904,ruin,を台無しにする、を駄目にする
905,equip,に備えつける
906,export,を輸出する
907,glance,ちらりと見る
908,notify,に知らせる
909,overdo,を使い過ぎる、をやり過ぎる
910,pierce,に穴を開ける、を突き通す
911,overestimate,を過大評価する[見積もる]
912,raid,(警察が)に手入れを行う、(軍隊が)を襲撃する
913,recall,を思い出す、(商品など)を回収する
914,simplify,を簡単にする
915,wrinkle,(顔などに)しわを寄せる、(衣装など)にしわを作る
916,conspire,陰謀を企てる、共謀する
917,imitate,をまねる、を見習う
918,inhale,を吸い込む
919,overrate,過大評価される
920,sympathize,同情する
921,glide,滑らかに動く、音もなく移動する
922,kidnap,を誘拐する
923,pretend,のつもりになる、～するふりをする
924,simmer,(煮立たない程度に)こことこ煮える[≒boil gently]
925,thaw,解凍される、溶ける
926,unfold,（閉じたもの）を開く；を明らかにする；開く；明らかになる
927,detain,を勾留[留置]する、(人)を引き留める
928,puncture,(タイヤ)をパンクさせる、に穴をあける
929,strangle,(発展・活動など)を抑圧する、を窒息させる
930,hygiene,衛生（状態）；健康法
931,oppression,抑圧、虐待
932,collaboration,合作、共同、協力
933,harbor,港、避難所
934,lawn,芝生
935,pedestrian,歩行者
936,racism,人種差別(主義[政策])
937,summit,(先進国)首脳会議、サミット、(山などの)頂上
938,bug,病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥
939,dirt,汚れ、泥、ほこり
940,maternity,妊産婦の、母であること
941,stroke,脳卒中；（ボールを）打つこと；（雷などの）一撃
942,tale,(事実・伝説・架空の)話、(文学作品としての)物語
943,certainty,確実性、確信
944,imbalance,不均衡、アンバランス
945,incidence,発生(率)
946,pit,穴、くぼみ
947,texture,感触，手触り；本質；質感
948,thumb,(手の)親指
949,undergraduate,学部学生
950,wisdom,知恵、賢明さ
951,bride,花嫁、新婦
952,dictator,独裁者、専制君主
953,signature,署名；特徴
954,testament,あかし、証拠
955,attachment,添付ファイル、添付書類
956,bachelor,独身の男性、学士
957,blister,水ぶくれ
958,blockade,(港などの)封鎖、経済[通信]封鎖
959,condo,分譲マンション
960,invoice,明細請求書、納品書
961,leisure,自由な時間、余暇
962,meditation,瞑想、黙想
963,procession,(儀式などの)行列、行進
964,unrest,(社会的な)混乱、不安、(心の)動揺
965,equator,赤道
966,exhausted,疲れ果てた
967,problematic,問題のある、疑わしい
968,desirable,望ましい
969,geological,地質(学)上の
970,rash,早まった、軽率な
971,solitary,ひとりの、孤独の
972,uneven,でこぼこな、平でない
973,antique,骨董の，アンティークの；古風な
974,dense,密集した，密度の高い；（霧などが）濃い
975,economical,経済的な、安上がりな
976,fictional,架空の、フィクションの
977,gradual,徐々の，緩やかな
978,intimate,親密な；密接な
979,lengthy,長い、長時間の
980,ultimate,最終の、究極の
981,victorious,勝利を得た、勝ち誇った
982,witty,機知に富んだ
983,blurry,ぼやけた、不鮮明な
984,exceptional,例外的に優れた、まれな
985,finite,有限の、限られた
986,on-the-job,実地の、職場での
987,vacant,空いている
988,cheery,陽気な、元気な
989,cowardly,卑怯な、臆病な
990,immeasurable,計り知れない、果てしない、広大な
991,impaired,～に障害のある、弱った、損なわれた
992,impassable,(川・道などが)通行できない、(困難・障害などが)克服できない
993,inactive,不活発な、停止中の
994,inconvenient,不便な、不都合な
995,superstitious,迷信深い、迷信の
996,unpleasant,不愉快な、いやな
997,wicked,悪意のある、意地の悪い
998,ecological,環境の、生態(学)の
999,imaginary,想像上の、架空の
1000,ripe,熟した；成熟した
1001,disguise,を（～に）変装させる（as）；を偽る
1002,curb,を抑制する、を制御する
1003,restrain,を制止する；を規制する
1004,stumble,よろけながら歩く；（～に）つまずく（on/over）
1005,diminish,を減らす；減少する（≒decrease）
1006,rotate,回転する；循環する；を回転させる
1007,compress,を要約する、を短縮する、を圧縮して詰め込む
1008,decode,(暗号・符号)を解読する
1009,offset,を相殺する，埋め合わせる；をオフセット印刷にする
1010,bid,（～に）の値をつける（for/on）；（挨拶）を述べる
1011,burst,破裂する；（～を）突然始める（into）
1012,overtake,を追い抜く；に追いつく（≒catch up with）；（災難・強い感情などが）を襲う
1013,retain,を保持する
1014,litter,(場所)を散らかす
1015,prohibit,を禁止する
1016,discipline,を罰する、を訓練する
1017,yield,を産出する、屈する、(権利など)を譲る
1018,sweep,（を）掃く；を一掃する；さっと通過する
1019,dictate,を指図する；を書き取らせる；を規定する
1020,inject,（人）に注射する，を注入する；を導入する
1021,urge,に熱心に勧める
1022,mimic,をまねる
1023,roam,（を）歩き回る；放浪する
1024,assess,を査定する、を評価する
1025,boast,を誇る；（を）自慢する
1026,drag,を引きずる；ぐずぐずする
1027,repay,を返済する
1028,overthrow,(政府・体制など)を打倒する
1029,fulfill,(約束・任務など)を果たす、(条件・要求など)を満たす
1030,doom,〔通例受身形で〕運命にある
1031,affiliate,を提携させる、を合併する
1032,assault,に暴行する；を攻撃する
1033,testimony,証言、証拠
1034,errand,（人の）使い，使い走り；用件
1035,friction,不和；摩擦
1036,coalition,連立、合同
1037,influx,(人・物の)殺到、(水・空気の)流入
1038,curse,悪態，ののしりの言葉；呪い；〔通例a ～〕災い
1039,app,アプリ
1040,visibility,視界、視野、目に見えること
1041,fabric,織物，布（地）；構造
1042,collision,衝突；対立
1043,dioxide,二酸化物
1044,orbit,軌道
1045,trial,裁判、試験、試み
1046,literacy,(特定分野の)知識、技能、読み書きの能力
1047,scheme,計画（≒plan）；体系；陰謀
1048,completion,完了、完成
1049,expertise,専門的知識[技術、意見]
1050,diploma,卒業[修了]証書、(学位・資格の)証明書
1051,livelihood,生計、生活手段
1052,motive,動機
1053,recession,不況；後退
1054,surrounding,周囲の状況、環境
1055,fortune,財産、幸運、運命
1056,token,(気持ちなどの)しるし、記念品
1057,trace,跡、形跡
1058,venture,危険を冒して進む；を思い切ってする
1059,physician,内科医、医師
1060,perspective,観点
1061,physics,物理学
1062,legislation,法律；立法
1063,barn,家畜小屋、(農家の)納屋
1064,daring,大胆な、勇敢な
1065,transparent,透明な；明快な
1066,tragic,悲惨な、悲劇的な
1067,sinister,邪悪な、不吉な
1068,striking,著しい、目立つ
1069,plural,複数の、2つ[2人]以上の、複数形の
1070,vital,必要不可欠な
1071,sensitive,敏感な、傷つきやすい
1072,remarkable,注目に値する、著しい
1073,minimal,最小(限度)の
1074,bankrupt,破産宣告を受けた；破綻している
1075,authentic,本物の；信頼できる
1076,moderate,適度な；穏健な
1077,alien,異質の、外国の
1078,prompt,迅速な
1079,random,無作為の、任意の
1080,decisive,決定的な、断固たる
1081,inevitable,避けられない、必然的な
1082,acid,酸性の；酸っぱい；辛辣な
1083,climatic,気候(上)の、風土の
1084,incredible,信じられない、驚くほどの
1085,precise,正確な、厳格な
1086,invaluable,極めて貴重な[高価]な
1087,stern,厳しい；いかめしい
1088,indifferent,無関心な（≒uninterested）
1089,charitable,慈善の、慈悲深い
1090,massive,大量の、大規模な、巨大な
1091,comparable,匹敵する、同様の
1092,irrational,不合理な
1093,cynical,冷笑的な，皮肉な
1094,overly,あまりに、過度に
1095,literally,文字どおり、まさしく
1096,voluntarily,自発的に
1097,technically,厳密に(言えば)、専門[技術]的に
1098,wholly,完全に、全く
1099,approximately,おおよそ、ほぼ
1100,uniquely,比類なく、独特に
1101,bewilder,（通例受身形で）当惑する
1102,clutch,をぐっとつかむ
1103,discard,を捨てる
1104,enlist,入隊する、参加する、(支持・協力)を得る
1105,heed,(助言・警告など)に注意する
1106,liberate,を解放する
1107,overlap,（一部）重なる；（と）重複［共通］する
1108,reconstruct,を再建する、を改変する
1109,shriek,悲鳴をあげる、甲高い声[音]を出す
1110,sprain,(足首・手首など)をくじく、を捻挫する
1111,resent,に憤慨する
1112,thrive,繁栄する，うまくいく；繁茂する
1113,embrace,を抱擁する、を(喜んで)受け入れる
1114,excel,（～で）秀でている（in/at）；に勝る
1115,enroll,登録する，入会する；を登録させる
1116,retrieve,（情報）を検索する；を取り戻す；を回復する
1117,degrade,の面目を失わせる、の質[価値]を低下させる
1118,reconcile,を（～と）一致させる（with）；を和解させる
1119,contaminate,を汚染する；を堕落させる
1120,disrupt,を混乱させる；を分裂させる
1121,divert,（注意など）をそらす；を迂回させる；（資金など）を転用する
1122,grumble,不平を述べる
1123,provoke,（感情・行動など）を引き起こす；を挑発する
1124,outweigh,より価値がある、より重い
1125,crave,(を)切望する
1126,sustain,を持続させる、を支える
1127,disclose,を公表する，暴く
1128,tempt,を（...する）気にさせる（to do）；を引きつける
1129,resign,（を）辞任する；を放棄する
1130,dismiss,を解雇する、(意見など)を退ける
1131,surpass,を上回る
1132,bounce,跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される
1133,bureau,（官庁の）局；事務局；案内所
1134,dependency,依存、従属
1135,discomfort,不快、不便
1136,drawback,欠点、不利な点
1137,feast,祝宴；大ごちそう；楽しみ
1138,hydrogen,水素
1139,modernization,近代化、現代化、最新式化
1140,objective,目的、目標
1141,poll,世論調査、投票(数)、投票所
1142,ration,(食料・物資などの)割当(量)
1143,revenue,歳入（⇔expenditure 歳出）；収益
1144,scholarship,奨学金、学識
1145,upbringing,(子供の)養育、しつけ
1146,compliment,賛辞
1147,excerpt,抜粋、引用
1148,faith,信仰(心)、信用
1149,segment,部分、区分
1150,downturn,(景気などの)下降(状態)
1151,temper,気質，気性；機嫌；かんしゃく
1152,fragment,断片
1153,intersection,(進路の)交差点
1154,anarchy,無秩序、無政府状態
1155,breakup,(人間関係の)解消、別れ
1156,privilege,特権
1157,exemption,(義務・責任などの)免除
1158,monarch,君主
1159,narrative,話、物語
1160,sensation,漠然とした感じ、感覚、大騒ぎ
1161,apprentice,見習い(工)、初心者
1162,chore,雑用、家事、いやな仕事
1163,dehydration,脱水(症状)
1164,questionable,疑わしい
1165,outdated,時代[流行]遅れの、旧式の
1166,forthcoming,来るべき
1167,gross,総計の；甚だしい；粗野な
1168,overdue,支払期限を過ぎた、(予定の日時より)遅れた
1169,contemporary,現代の、現代的な、同時代の
1170,drastic,徹底的な，抜本的な；極端な
1171,conditional,～しだいの、条件付きの
1172,subjective,主観的な
1173,exotic,外来の；異国風の
1174,intensive,集中的な、徹底的な
1175,obscure,（世に）知られていない；不明瞭な
1176,tedious,退屈な
1177,exclusive,高級な、排他的な
1178,decent,まずまずの；きちんとした；上品な
1179,considerate,思いやりのある
1180,durable,長持ちする、丈夫な
1181,perpetual,永続的な；ひっきりなしの
1182,proficient,堪能な、熟達した
1183,acoustic,音響の；聴覚の；（楽器が）アコースティックの
1184,biographical,伝記の
1185,botanical,植物の、植物学(上)の
1186,brutal,残酷な、無情な
1187,commendable,賞賛されるべき、立派な
1188,desperate,絶望的な、強く望んで、必死の
1189,extravagant,浪費する、(要求などが)過度な
1190,filthy,汚い、不潔な
1191,serene,穏やかな、平静な
1192,valid,法律的に有効な、理にかなった
1193,inherent,生来の，本来的に備わっている
1194,merely,単なる、ただの、単に
1195,somehow,何とかして、とにかく
1196,subsequently,その後、続いて
1197,deliberately,故意に、慎重に
1198,gently,優しく、静かに
1199,via,～の手段によって、～経由で
1200,alongside,～と一緒に、～と並んで
1201,portray,を描く；（の役）を演じる
1202,dispatch,を派遣する；を発送する；を処理する
1203,quote,が～と述べたと伝える、を引用する
1204,amend,を改正する、を修正する
1205,betray,をうっかり表す；を裏切る
1206,wither,(植物などが)しおれる
1207,omit,を省略する
1208,fabricate,をでっち上げる、を組み立てる
1209,violate,（法律・規則など）に違反する；を侵害する
1210,allege,を主張する
1211,integrate,を統合する；融合する
1212,underestimate,（を）過小評価する；（を）軽く見る；を少なく見積もる
1213,escort,を護衛[護送]する、に付き添う
1214,facilitate,を促進する、を容易にする
1215,initiate,を新たに始める
1216,convey,を伝える、を運ぶ
1217,populate,に住む，の住民である；に人を住まわせる
1218,reinforce,を補強する、を強化する
1219,attain,を獲得する，達成する；に達する
1220,cheat,(試験で)カンニングをする、をだます
1221,deceive,をだます（≒take in）
1222,frustrate,に不満を抱かせる、を挫折させる
1223,subsidize,に補助金[助成金]を支給する
1224,alternate,代わりの；交互の
1225,dedicate,を捧げる
1226,endeavor,～しようと(懸命に)努力する、を(真剣に)試みる
1227,intrigue,に興味を持たせる；陰謀を企てる
1228,soar,急上昇する；空高く飛ぶ
1229,tease,（を）からかう；をいじめる
1230,confer,(賞・学位・栄誉・権利など)を授与する、相談する
1231,forbid,を禁じる
1232,nod,(頭)を軽く下げる、うなずく
1233,oblige,に義務づける；に恩恵を施す
1234,discontent,不満
1235,disposal,処分、売却
1236,exile,亡命（者）；（国外）追放
1237,foe,敵
1238,itinerary,旅行の日程、旅行計画
1239,persecution,迫害
1240,publication,出版(物)、発行
1241,riddle,なぞなぞ、不可解な人[もの、事実]
1242,sanitation,公衆衛生（学）；下水［衛生］設備
1243,component,構成部品[部分、要素]
1244,quota,割当量[数]、ノルマ
1245,cuisine,（独特の）料理，料理法
1246,detour,迂回(路)、回り道
1247,inmate,(刑務所などの)収容者、入院患者
1248,fatigue,(相当の)疲労
1249,uproar,大騒ぎ、騒動
1250,coincidence,偶然の一致
1251,correspondence,通信、一致
1252,ballot,投票、投票用紙、投票総数
1253,competence,能力、資格
1254,enterprise,事業、企業
1255,hazard,危険（要素）；偶然
1256,explosion,爆発、急激な増加
1257,famine,飢饉；（食糧・物資の）ひどい不足
1258,acceptance,受諾、受け取り
1259,leftover,(特に食事の)残りもの
1260,apprehension,不安、懸念
1261,wreck,残骸、難破(船)
1262,landmark,（ある場所の）目印；画期的な出来事
1263,dweller,居住者
1264,geometry,幾何学
1265,standby,(いざというとき)頼りになるもの(人)、交替要因
1266,diversity,多様性
1267,accuracy,正確さ、的確さ
1268,tap,(水道などの)蛇口
1269,brick,れんが
1270,bay,入江、湾
1271,lenient,寛大な
1272,stubborn,頑固な，強情な（≒obstinate）；手に負えない
1273,clumsy,不器用な
1274,perilous,とても危険な
1275,adverse,不都合な；逆の
1276,persistent,執拗な、固執する、持続する
1277,outrageous,法外な、途方もない、けしからぬ
1278,skeptical,（～に）懐疑的な（of/about）
1279,legitimate,合法的な；妥当な
1280,corrupt,を堕落させる；を買収する；堕落する
1281,experimental,実験の、実験[試験]的な
1282,improper,不適切な、無作法な
1283,spontaneous,自然発生的な；自発的な
1284,unconditional,無条件の、絶対的な
1285,counterfeit,偽造の、偽の
1286,dizzy,目まいがする；当惑した
1287,sustainable,持続できる、維持できる
1288,democratic,民主主義の、民主的な
1289,conservative,保守的な
1290,fundamental,基本的な、必須の
1291,ambitious,(計画などが)野心的な、(人が)大志を抱いた
1292,concrete,具体的な、明確な、コンクリート製の
1293,cruel,残酷な
1294,inferior,劣悪な、劣った
1295,ample,十分すぎるほどの；広い
1296,inaccurate,不正確な、誤りのある
1297,inadequate,不十分な、不適当な
1298,inappropriate,ふさわしくない、不適当な
1299,uncertain,はっきり分からない、(人が)確信がない
1300,vague,あいまいな、不明確な
1301,retreat,引っ込む、退く
1302,revolt,暴動[反乱]を起こす、をむかむかさせる
1303,deflect,(人の注意・非難など)をそらす、の方向を変えさせる
1304,demote,を降格する
1305,despise,を軽蔑する、をひどく嫌う
1306,grasp,を理解する、をしっかりと握る
1307,summon,を呼び出す、を召喚する、(議会など)を招集する
1308,expel,を追放する；を吐き出す
1309,redeem,(失敗・欠点など)を補う、を埋め合わせる
1310,comprise,から成る；を構成する
1311,prevail,普及している；支配的である；（～に）打ち勝つ（over）
1312,eject,を取り出す、を追い出す
1313,falsify,を偽造する
1314,obstruct,をふさぐ、を妨害する
1315,depict,を描く
1316,tremble,震える
1317,confess,（を）告白する
1318,stare,じっと見つめる
1319,ache,痛む、うずく
1320,reflect,を反映する、を反射する、熟考する
1321,assert,を主張する
1322,impose,(規則・税・罰金など)を課[科]す、を押しつける
1323,interpret,を解釈する、を通訳する
1324,devote,(努力・時間など)を捧げる、に専念する
1325,deteriorate,(状況・質など)が悪化する
1326,contemplate,（を）熟考する；を予想する
1327,delegate,(権限・責任など)を委譲[委任]する、(人)を代表として派遣する
1328,propel,を進ませる、(人)を駆り立てる
1329,recede,後退する、退く
1330,scrape,(泥・ペンキ・さびなど)をこすり取る、の表面をこする
1331,smash,を粉砕する；を強打する；粉々に壊れる；激突する
1332,scold,(特に子供)をしかる
1333,amuse,を楽しませる
1334,overhaul,(システムなど)を総点検する、を分解修理する
1335,herd,(牛・羊などの)群
1336,bait,誘惑物、(釣り針・わなにつける)餌
1337,petition,請願(書)、嘆願(書)
1338,ransom,身代金、(身代金などによる)解放
1339,fragrance,芳香
1340,insight,見識、洞察力
1341,conquest,征服、(欠点・課題などの)克服
1342,sincerity,誠実
1343,tariff,関税
1344,sanction,制裁(措置)、認可
1345,sphere,領域；球体；天体
1346,outcast,見捨てられた人、浮浪者
1347,affair,事情、事柄、問題
1348,scandal,スキャンダル、不正行為
1349,allergy,アレルギー
1350,destruction,破壊、破滅
1351,peasant,(発展途上国などの)小作人、貧農
1352,burden,負担、重荷、荷物
1353,faculty,(大学・学部の)教授陣、学部、才能、能力
1354,tactics,作戦，方策；戦術，戦法
1355,fare,(乗り物の)運賃、料金
1356,manner,方法、風習、行儀、作法
1357,correlation,相互[相関]関係
1358,weed,雑草、草
1359,command,命令、指図、(外国語などを)自由に使える能力
1360,quarter,４分の１、(都市の特定の)地区、四半期
1361,availability,(入手の)可能性、有用[有効]性
1362,caution,用心、注意、警戒、警告
1363,prevention,予防、防止、妨害
1364,reptile,爬虫類(動物)
1365,fate,運命、(最終的な)結末
1366,inclination,意向、願望、好み
1367,scorn,軽蔑、侮蔑
1368,contempt,軽蔑；恥辱
1369,domain,分野；領域；ドメイン
1370,pillar,柱、支柱
1371,tender,柔らかい、優しい
1372,awkward,ばつの悪い、気まずい、ぎこちない
1373,fierce,猛烈な；どう猛な
1374,peculiar,変な、特有の
1375,genuine,本物の
1376,vigorous,精力的な；激しい；活力のある
1377,gloomy,陰気な；薄暗い；悲観的な
1378,medieval,中世の
1379,subtle,微妙な、かすかな
1380,rigid,厳しい；硬直した
1381,coarse,粗い、粗野な
1382,humble,謙虚な、地位[身分]などが低い
1383,slack,たるんだ、(商売などが)不活発な
1384,trivial,取るに足らない
1385,mutual,相互の
1386,redundant,不要な、余分な、(表現などが)冗長な
1387,premature,早過ぎる、(判断などが)早まった
1388,attentive,注意深い
1389,integral,不可欠な、必要な
1390,memorable,忘れられない、記憶すべき
1391,persuasive,説得力のある
1392,prevalent,蔓延している、広く行き渡っている
1393,unaware,気づかないで、知らないで
1394,worthwhile,(時間・労力・金をかける)価値のある
1395,amazing,驚くべき
1396,eligible,適格の，資格のある；（結婚相手として）望ましい
1397,vicious,悪意[敵意]のある、乱暴な
1398,invisible,見えない
1399,invalid,(法的に)無効な
1400,rotten,(食べ物などが)腐った、(道徳的に)腐敗した
1401,plague,疫病；（害虫などの）異常発生
1402,sponsor,に資金を提供する、を後援する
1403,honor,を賞賛する、に与える、を尊敬する
1404,remark,～と述べる
1405,incorporate,を取り[組み]入れる
1406,resolve,(問題など)を解決する、を決意する
1407,sway,(ゆっくりと)揺れる、動揺する
1408,inherit,(遺伝で)を受け継ぐ、を相続する
1409,pile,を大量に積む、を積み重ねる、積み重なる
1410,renovate,を改修[改築]する
1411,maximize,を最大限にする
1412,uncover,(遺跡など)を発掘する、の覆いを取る、を明るみに出す
1413,mislead,に誤った考えを持たせる、を欺く
1414,opt,選ぶ
1415,outnumber,より数で勝る
1416,presume,と思う；と推定する；を前提とする
1417,refine,を洗練する；を精製する
1418,stir,をかき回す；を揺り動かす
1419,strive,懸命に努力する
1420,thrill,をわくわく[ぞくぞく]させる
1421,tighten,を固く締める、を強化する
1422,arouse,（感情など）を引き起こす；を目覚めさせる
1423,buzz,(場所が)ざわつく、どよめく
1424,converge,集まる、集中する
1425,deduct,を控除する、を減じる
1426,disconnect,(人)のインターネットへの接続を切る、の接続を断つ
1427,gossip,うわさ話をする
1428,wander,(当てもなく)歩き回る、ぶらつく
1429,suck,（を）吸う；（を）しゃぶる
1430,dye,を～色に染める、を染める
1431,trespass,(不法)侵入する、侵害する
1432,graze,(家畜などが)牧草を食べる
1433,entrust,AにBを任せる
1434,peer,同僚、仲間、同等[対等]の者
1435,molecule,分子、微粒子
1436,meantime,その間
1437,merit,価値、優秀さ、長所
1438,prospect,見込み、見通し、期待
1439,chatter,くだらないおしゃべり
1440,funeral,葬式
1441,methodology,方法論、研究方法
1442,bundle,束、包み
1443,burglar,強盗、泥棒
1444,canyon,峡谷
1445,duration,（時間の）継続，持続（時間）
1446,fountain,噴水、源泉、湧き水
1447,genius,天賦の才、天才(的な人)
1448,grassland,牧草地、草原
1449,interval,（時間の）間隔；合間；隔たり；小休止
1450,longevity,長寿；寿命；長年勤続
1451,mode,方法、様式
1452,needle,針、縫い針、編み針
1453,organizer,主催者、まとめ役、幹事
1454,rehearsal,(劇・音楽などの)リハーサル、下げいこ
1455,servant,(特に住み込みの)使用人、召使
1456,sociology,社会学
1457,spectacle,(印象的な)光景、壮観、見もの
1458,norm,標準、規範、典型
1459,certificate,証明書；免許状
1460,vice,悪習、悪
1461,knot,結び目、結び方
1462,rubber,ゴム、ゴム製品
1463,asteroid,小惑星
1464,syndrome,症候群、シンドローム
1465,detention,拘置、留置
1466,distress,苦悩、苦痛
1467,ignition,(エンジンの)点火装置、点火
1468,esteem,尊敬、尊重
1469,hospitality,親切なもてなし，歓待；受容性
1470,legacy,遺産
1471,sane,(考え方などが)健全な、分別のある、正気の
1472,doubtful,(物・事が)疑わしい、(人が)疑わしく思う
1473,favorable,好意的な、好ましい
1474,generous,気前のよい、寛大な
1475,hollow,空洞の；空虚な；うわべだけの
1476,internal,内部の、内側の、国内の
1477,interpersonal,人間[対人]関係の
1478,staple,必需食品；主要産物
1479,tolerant,寛容な、包容力のある
1480,folk,民間(起源)の、民衆の
1481,furious,激怒した；猛烈な
1482,ironic,皮肉な、反語的な
1483,pale,(人・顔色などが)青白い、血の気を失った、(色が)淡い、薄い
1484,pregnant,妊娠した
1485,rewarding,満足感が得られる、報われる
1486,sacred,神聖な、聖なる、宗教的な
1487,terrific,素晴らしい、すてきな
1488,abridged,簡約[短縮]された
1489,dull,退屈な、頭が鈍い
1490,faint,かすかな；めまいがする；弱々しい
1491,irresponsible,無責任な
1492,notorious,悪名高い（≒infamous）
1493,recurrent,(周期的に)繰り返される、(病気などが)再発する
1494,irresistible,抵抗できない、非常に魅力的な
1495,binding,拘束力のある、義務を負わせる
1496,dejected,落胆した、元気のない
1497,fictitious,架空の、偽りの
1498,gracious,親切な、丁寧な
1499,upcoming,やがて起ころう[現れよう]としている、来るべき
1500,abundant,豊富な
1501,grind,（穀物など）をひく
1502,archive,〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ
1503,devise,を考案する
1504,precede,に先行する
1505,horrify,を怖がらせる
1506,lodge,(苦情・抗議など)を申し出る、を預ける、を泊める
1507,mediate,調停する、仲裁する
1508,mingle,付き合う、仲間に入る、混ざる
1509,perspire,汗をかく
1510,concede,(しぶしぶ)～と認める
1511,hinder,を妨げる
1512,waver,(心が)揺れ動く、迷う
1513,formulate,(計画など)を(注意深く)まとめる、を明確に述べる
1514,exhale,(息・煙・言葉など)を吐き出す
1515,rebound,(ボールなどが)跳ね返る
1516,gratify,を喜ばせる、を満足させる
1517,pledge,を誓う，約束する；を与えることを約束する
1518,fasten,をしっかり留める、を固定する
1519,relay,を伝達する、を取り次ぐ、を中継で送る
1520,align,を一直線に並べる
1521,ascend,（を）上がる
1522,gaze,じっと見る
1523,adore,が大好きである、を敬愛する
1524,chill,(食べ物・飲み物など)を冷やす、冷える
1525,curve,カーブする、曲がる
1526,deflate,(タイヤ・風船などが)しぼむ、をしぼませる
1527,detach,を分離する、を取り外す
1528,enclose,を同封する；を取り囲む
1529,fetch,を（行って）持って［連れて］くる
1530,proclaim,を宣言する
1531,forge,を偽造する；（関係など）を築く；を鍛造する
1532,outburst,(火山・怒り・笑いなど)の爆発
1533,dimension,局面、寸法、規模、次元
1534,swarm,大群
1535,sequel,続編、結果
1536,artifact,人工遺物、工芸品
1537,mercy,慈悲；〔通例a ～〕幸運
1538,successor,後継者、相続人
1539,triumph,(大)勝利、成功
1540,clause,(法律・条約などの)条項、(文の)節
1541,analogy,類推；類似
1542,downfall,破滅、転落、(雨・雪などの)大降り
1543,fusion,融合(物)、(政府などの)連立
1544,fracture,骨折、割れ目、裂け目
1545,menace,困りもの、危険人物、脅威
1546,setback,(進歩・発展の)妨げ、支障
1547,empathy,共感、感情移入
1548,tumble,転倒、(株価などの)暴落
1549,diameter,直径
1550,momentum,勢い、はずみ
1551,troop,軍隊、兵隊
1552,pharmacy,薬屋、薬局
1553,nightmare,悪夢、(悪夢のような)恐ろしい経験
1554,slope,坂、斜面
1555,glacier,氷河
1556,grief,(死などに対する)深い悲しみ、悲痛
1557,misery,惨めさ、悲惨さ
1558,accent,なまり、方言
1559,ambassador,大使
1560,autopsy,検死
1561,blast,爆発、爆破、突風
1562,courtesy,礼儀正しさ；好意；優遇
1563,deed,(意図的な)行為、行い
1564,discourse,話し合い，会話；講演；論説
1565,impulse,衝動
1566,jar,(広口の)びん、つぼ
1567,sibling,兄弟姉妹(の１人)
1568,enthusiasm,熱狂、熱中
1569,treasure,宝物、貴重品
1570,horizontal,水平な
1571,indefinite,限定されない、不定の、はっきりしない
1572,vulgar,下品な、無作法な
1573,resilient,回復力のある、弾力(性)ある
1574,aquatic,(動植物が)水生の、水の
1575,insistent,強く主張する、執拗な
1576,frantic,大急ぎの、気が狂いそうな
1577,deceptive,人を惑わすような
1578,illogical,筋の通らない、不合理な
1579,elaborate,精巧な、入念な
1580,mellow,(性格が)円熟した、柔らかくて豊かな[美しい]
1581,boundless,無限の
1582,cordial,心温まる、心からの
1583,seasonal,季節(ごと)の
1584,sour,酸っぱい
1585,swift,素早い
1586,cumulative,累積する、しだいに増加する
1587,savage,残酷な、凶暴な
1588,admirable,賞賛に値する、素晴らしい
1589,informative,有益な、情報[知識]を提供する
1590,proportional,釣り合った、比例した
1591,simultaneous,同時に起こる
1592,static,変化[進歩]のない
1593,uneasy,不安な、心配な、落ち着かない
1594,unequal,(権利などが)不平等な
1595,autonomous,自治の、自主的な
1596,bold,大胆な、勇敢な
1597,pessimistic,悲観的な
1598,repetitive,繰り返しの
1599,respiratory,呼吸器に関する、呼吸の
1600,coherent,一貫した，筋の通った；結束した
1601,account for ～,(割合・分量など)を占める、～(の理由)を説明する
1602,accuse A of B,AをBの罪で告訴する、AをBの理由で非難する
1603,act on ～,(忠告・情報など)に従って行動する、～に影響を及ぼす
1604,act out ～,(物語・経験など)を身振りで実演する
1605,add up to ～,(合計が)～になる、結局～ということになる
1606,adhere to ～,(信念・規則など)を順守する、～に固執する
1607,air out ～,(部屋など)を換気する、(衣類・寝具など)を外気に当てる
1608,all but,ほとんど
1609,allow for ～,～を考慮に入れる、～を見込む
1610,answer for ～,～の責任を負う、～の罰を受ける
1611,aspire to do ～,～することを熱望[切望]する
1612,attribute A to B,AをBのせいと考える
1613,back down,撤回する、敗北[非]を認める
1614,back off,手を引く、撤回する、後退する
1615,back up ～,～を裏付ける、～を支援する、(ファイルなど)のコピーを取る
1616,back on ～,～を当てにする
1617,be committed to ～,～に献身している
1618,be destined to do ～,～する運命である
1619,(be) free of ～,(料金・税金など)がない、～免除されている
1620,be obsessed with ～,(妄想・固定観念など)に取りつかれている
1621,be subject to ～,(病気など)にかかりやすい、(影響など)を受けやすい
1622,blast off,打ち上げられる、発射される
1623,blow up,(かんかんに)怒る、爆発する
1624,bounce back,(打撃・病気などから)回復する、立ち直る
1625,branch off,(話題が)変わる、(わき道に)それる
1626,break away from ～,(伝統・習慣など)を断つ、(束縛など)から逃れる
1627,break down,決裂する、失敗する、故障する
1628,break off ～,～を中断する、～を急にやめる
1629,break out,勃発する、(伝染病などが)発生する
1630,bring about ～,～を引き起こす、～を招く
1631,bring down ～,(人・政府など)を(打ち)倒す
1632,bring off ～,～をやってのける、～を成し遂げる
1633,bring on ～,(災い・病気など)をもたらす
1634,bring out ～,(才能・性質など)を引き出す、～を発揮させる
1635,bump into ～,～にばったり出会う
1636,burn out ～,(人)を疲れ果てさせる、～を燃え尽きさせる
1637,by means of ～,～用いて、～によって
1638,call for ～,～を必要とする、～を要求する
1639,call off ～,～を中止する
1640,call on ～,～を訪ねる、(人)に頼む
1641,carry away ～,無我夢中になる、～を持ち去る
1642,carry through ～,～を成し遂げる、～を成就させる
1643,catch up on ～,(近況など)について新しい情報を知る、～の遅れを取り戻す
1644,check off ～,～にチェックマークをつける
1645,chip in ～,(金・労力などを)出し合う
1646,clean out ～,～の中をきれいにする、～を空にする
1647,clear out ～,～の中身を出してきれいに片付ける、～を空にする
1648,clear up (～),(誤解など)を解く、(問題など)を解明する、～片付ける、晴れる
1649,close in (on ～),(～を)包囲する、(～に)追ってくる
1650,come after ～,～の後をつける、～を追跡する
1651,come before ～,(問題などが)(法廷など)で審議される、(法廷など)に出頭する
1652,come down to ～,要するに～ということになる
1653,come down with ～,(軽い病気)にかかる
1654,come into ～,～の状態になる
1655,come off,結局～になる、行われる
1656,come through,要求に応える、伝えられる
1657,comply with ～,(規則・基準など)に従う
1658,contribute to ～,～の一因となる、～に寄与[貢献]する～に寄付する
1659,cope with ～,～うまく処理する、～に対処する
1660,count for ～,～の価値がある
1661,count on ～,～を当てにする
1662,cover for ～,～の代わり[代理]を務める
1663,cover up ～,～(の事実)を隠す、～を秘密にする
1664,crack up,神経が参る、気が変になる、大笑いする
1665,cross out ～,～を線を引いて消す
1666,cut back (on ～),(～を)削減[縮小]する
1667,cut down (on ～),(～を)減らす
1668,cut in (on ～),(話などに)割り込む、さえぎる
1669,deal in ～,(商品)を商う、(仕事など)に従事する
1670,deprive A of B,AからBを奪う
1671,die down,静まる、衰える
1672,die out,絶滅する
1673,dispose of ～,～を処分する、を捨てる
1674,do away with ～,～を廃止する、～を取り除く
1675,drag on,(会議などがだらだらと)長引く
1676,drag out ～,～を(必要以上に)長引かせる
1677,draw on ～,(技術・経験など)に頼る、～を利用する
1678,draw up ～,(計画)を立てる、(報告書など)を作成する
1679,dream up ～,(奇抜な考え・計画など)を思いつく、～を考え出す
1680,drive off [away] ～,～を追い払う
1681,drive up ～,(価格など)を急速に上昇させる
1682,drop back (to ～),(～に)後退する、順位が下がる
1683,drop out (of ～),(活動・集団から)身を引く、(学校を)中途退学する
1684,ease into ～,(仕事など)に徐々に慣れる
1685,eat up ～,～を使い果たす、～を食べ尽くす
1686,embark on [upon] ～,(事業など)に乗り出す、～に着手する
1687,endear A to B,AをBに慕わせる
1688,even up ～,～を等しくする、～を均等にする
1689,face off,対決する
1690,fall away,減少する、弱まる、衰える
1691,fall back on ～,～を当てにする
1692,fall for ～,(うまい話・売り込みなど)に乗せられる、～に強く引きつけられる
1693,fall off,(数・量が)減少する、(質が)低下する
1694,fall on ～,(責任・仕事などが)～に降りかかる、(記念日などが)～に当たる
1695,fall through,(計画などが)駄目になる、失敗する
1696,fall under ～,(影響・監督など)を受ける
1697,feel for ～,～に同情する、～を思いやる
1698,figure out ～,～を理解する、～を解決する
1699,fill out ～,(書類)に必要事項を記入する
1700,fire up ～,～始動させる、～に火をつける
1701,fit into ～,～に溶け込む、～に収まる
1702,fix up ～,～を修理する、～を改装する
1703,for all ～,～にもかかわらず、～を考慮しても
1704,for the time being,当分の間(は)、さしあたり
1705,force down ～,(感情など)を抑える
1706,free up ～,～を自由化する、～解放する
1707,frown on [upon] ～,～に難色を示す、～に不賛成の意を表す
1708,gear up ～,準備をする
1709,get around (～),あちこち動き回る、歩き回る、～をうまく避ける、～を逃れる
1710,get around to doing ～,～をする余裕[暇]ができる
1711,get away with ～,～を(罰などを受けずに)うまくやる
1712,get by ～,何とかやっていく、通り抜ける
1713,get down to ～,～本気で取りかかる
1714,get in on ～,～に参加する、～に加わる
1715,get into ～,(本・映画・音楽など)に夢中になる、(ある状態)になる
1716,get on with ～,(仕事など)を続ける、(人)とうまくやっていく
1717,give away ～,(秘密・答えなど)をばらす、～をただで与える、～を安く売る
1718,give in (to ～),(～に)降参する、屈する、負ける
1719,give off ～,(光・音・においなど)を発する
1720,give A over to B,AをBに預ける、AをBに引き渡す
1721,give rise to ～,～の原因となる、(悪い事態)を生じさせる
1722,go back on ～,(約束など)を破る
1723,go for ～,～を選ぶ
1724,grow into ～,(成長して)(服など)を着られるようになる
1725,grow on ～,(人)の気にいるようになる、(習慣などが)～の身につてくる
1726,grow out of ～,(成長して)(行為・習慣など)から脱する、～から生じる
1727,hand down ～,(伝統・慣習など)を(後世に)伝える、(判決など)を言い渡す
1728,hand off ～,～を任せる、～を引き渡す
1729,hand out A (to B),(Bに)Aを配る
1730,hang around (～),(～を)ぶらつく、うろつく
1731,hang on,(少し)待つ、電話を切らずにおく
1732,hang up ～,(電話を)切る
1733,head off (～),～を阻止する、～を回避する、出かける、立ち去る
1734,head out,出かける、立ち去る
1735,hold back ～,～を抑えておく
1736,hold off ～,～を引き延ばす、～を延期する
1737,hold out (～),(敵・逆境・圧力などに)もちこたえる、～を差し出す
1738,hold over ～,続映[続演]される、～を延期する
1739,in a row,連続で
1740,in favor of ～,～に賛成して、～を支持して
1741,in response to ～,～に応えて、～に応じて
1742,in terms of ～,～の観点から
1743,in the event of ～,(万一)～の場合には
1744,in vain,無駄に、効果なく、～にすぐ飛びつく
1745,jump at ～,～にすぐ飛びつく
1746,keep track of ～,(人の動向・情勢など)に注意している、～の跡をたどる
1747,keep up with ～,(時勢・流行・人・仕事・勉強など)に遅れずについていく
1748,kick around ～,(計画・提案など)をあれこれ検討する
1749,kick in,(薬などが)効き始める、機能し始める
1750,kick off A (with B),(Bで)Aを開始する
1751,kick A out (of B),(Bから)Aを追い出す[首にする]
1752,knock down ～,～を取り壊す、～を解体する、～を殴り倒す
1753,lay into ～,～を厳しく非難する、～を攻撃する
1754,lay off ～,(一時的にまたは永久に) ～を解雇する
1755,leave off (～),(～を)やめる
1756,let alone ～,まして～、～は言うまでもなく
1757,let down ～,～を失望させる、～(の期待・信頼)を裏切る
1758,let out ～,(声など)を出す、(感情)を表す、～を外に出す
1759,let up,手を緩める、(望ましくないことが)弱まる、(風雨などが)やむ
1760,level off [out],横ばいになる、安定する
1761,lift off,(飛行機などが)離陸する
1762,live up to ～,(期待など)に応える、(規範など)に従って行動する
1763,lock in ～,～を固定する、(鍵をかけて)～を閉じ込める
1764,look down on ～,～を見下す、～を軽蔑する
1765,make (both) ends meet,(収支を合わせて)収入内で何とかやりくりする
1766,make do with ～,(あり合わせのもの)で済ます
1767,make it,間に合う、成功する、(会合などに)出席できる
1768,make out (～),～を理解する、うまくやる
1769,make over ～,～を作り変える、～変身させる
1770,mark down ～,～を値下げする、～を書き留める
1771,mark out ～,(線などで)～を区画する、～を区切る
1772,miss out on ～,(機会・好機など)を逸する
1773,narrow down ～,(範囲など)を制限する、～を狭くする
1774,on a ～ basis,～の基準で、～の原則で
1775,on [in] behalf of A,Aを代表して、Aに代わって
1776,on the contrary,それどころか、まるで反対で
1777,on the spot,その場で、即座に
1778,on the verge of ～,～の間際[寸前]で
1779,over the hump,難局を脱して、峠を越して
1780,owing to ～,～のために、～の理由で
1781,pack up,(仕事などが終わって)持ち物をまとめる、荷造りする
1782,pass for ～,～で通る、～と見なされる
1783,pass off A (as B),Aを(Bだと)偽る
1784,pass A on (to B),A(もの・情報・病気・利益など)を(Bに)伝える[渡す]
1785,pass out,気絶する
1786,pay off ～,(借金など)を全部支払う
1787,phase out ～,～を段階的に廃止[排除]する
1788,pick over ～,～念入りに調べて選ぶ、～を吟味する
1789,pick through ～,～の中をくまなく探す
1790,pile up,(仕事・借金などが)どんどんたまる、山積する
1791,pin down ～,～を押さえつける、～を動けなくする
1792,play down ～,～を(実際より)重要でないように見せようとする
1793,play out (～),(物事・状況が)展開する、徐々に進展する、～を最後まで演じる
1794,play up ～,～を誇張する、～強調する
1795,point to ～,(状況・証拠などが)～を示す、(大事な点・理由など)を指摘する
1796,pull back (～),後退する、～を後退させる、思いとどまる
1797,pull in ～,(観客・客など)を引きつける、(利益・金など)を得る
1798,pull off ～,(困難なこと)をやってのける
1799,pull through ～,(病気・苦境など)を切り抜ける
1800,push for ～,～を要求する、～を得ようと努める
1801,push through ～,(議案など)を通す、～を突き進む
1802,put down ～,(金額)を手付金として払う、～を書き留める
1803,put forth ～,(力など)を発揮する、(計画・案など)を提出する
1804,put toward ～,～を提案[提出]する
1805,put in ～,(設備など)を備え付ける、(金・時間・精力など)をつぎ込む
1806,put A through (to B),Aの電話を(Bに)つなぐ
1807,read off ～,(リストなど)を読み上げる
1808,refrain from doing ～,～するのを控える、～するのをやめる
1809,regardless of ～,～に(も)かかわらず、～にかまわず
1810,roll in (～),(金など)がたくさんある、転がり込む、どっと集まる
1811,roll up ～,～をくるくると巻く、(そで・すそ)をまくり上げる
1812,round off ～,～を締めくくる、～をうまく終える
1813,round up ～,(散らばった人など)を集める、～を逮捕する
1814,rule out ～,～を排除する、～を除外する
1815,run against ～,～に不利になる
1816,run down ～,(車・運転手が)～をひく、～のことを悪く言う、～を突き止める
1817,run through ～,ざっと～を読み上げる[に目を通す]
1818,scoop up ～,～を抱き上げる、～をすくい上げる
1819,scratch out ～,～を削除する、やっと(生計)を立てる
1820,see about ～,～を検討する、～を手配する、～を何とかする
1821,see A off,(空港・駅などで)Aを見送る
1822,see through ～,～を見抜く、～を見破る、～を通して見る
1823,sell out,(期待を)裏切る、(ものが)売り切れる
1824,send for ～,(人・助けなど)を呼ぶ、～に来てもらう
1825,send out for ～,(食べ物)の出前を頼む
1826,set aside ～,(時間・金など)をとっておく、～をわきへどける
1827,set down ～,～を書き留める
1828,set in,(季節・流行・好ましくないものなどが)始まる、起こる
1829,set off (～),出発する、～を引き起こす、～を作動させる
1830,set out to do ～,～することに着手する、～し始める
1831,set up ～,(会合など)を準備する、～を設置する、(会社・組織など)を作る
1832,settle down,ゆったりとくつろぐ、落ち着く、定住する
1833,settle up (with ～),(～と)精算する、(～に)勘定を支払う
1834,shake up ～,～を刷新する、～を動揺させる、～を奮い立たせる
1835,show off (～),いいところを見せる、～を見せびらかす
1836,show up,現れる、やってくる
1837,sign up for ～,(署名して)～に参加する、(受講など)の届けを出す
1838,single out ～,～を(特に)選び出す
1839,sink in,十分に理解される、分かってもらう
1840,sit back,何もしないで[手をこまねいて]いる、くつろぐ、(いすに)深く座る
1841,sit by,(悪い事態を)黙って見ている、傍観する
1842,sit in,参加する、見学[参観]する、代理を務める
1843,skim over ～,～をざっと見る、～表面的に扱う
1844,slip by,(時・機会が)いつの間にか過ぎる
1845,smooth over ～,(話し合いをして)(問題・困難など)を処理しやすくする
1846,speak for ～,～を代表して意見を述べる、～を代弁する、～への支持を表明する
1847,split up (～),別れる、分裂する、～を分裂させる
1848,spring from ～,～から生じる、(人が)～の出である
1849,spring up,急に生まれる、急成長する
1850,stand down (as ～),(公職など)を辞任する
1851,stand for ～,～の略である、～を意味する、～を支持する
1852,stand up to ～,～に抵抗する、～に立ち向かう、～に耐える
1853,stay off ～,(健康のため)～を控える、～に近づかない
1854,step down [aside],辞任する
1855,stick around,そこらで待つ、帰らずにいる
1856,stick to [by] ～,(主義など)を堅持する、～をやり続ける
1857,stick up for ～,～をあくまでも擁護する、～を支持する
1858,stick with ～,～を最後までやり抜く、～を続けてする
1859,stir in ～,～を入れてかき混ぜる
1860,stir up ～,(騒ぎなど)を引き起こす、(想像力・記憶など)をかき立てる
1861,sum up ～,～を要約する
1862,take in ～,～を摂取する、(光景など)を観察する、～をだます、～を理解する
1863,tale on ～,(特にきつい仕事・責任)を引き受ける
1864,take over ～,～を引き継ぐ、～を買収する、～を占領する
1865,take up ～,～を趣味[職業・学問]として始める、(問題など)を取り上げる
1866,talk down to A,Aを見下した調子で話す
1867,talk A into doing ～,Aを説得して～させる
1868,talk up ～,(人・もの)を実際以上に興味深いもののように話す
1869,tear down ～,～を取り壊す、～を解体する、～を殴り倒す
1870,tell on ～,(特に子供が)～のことを告げ口する、～にこたえる
1871,the other way around,(方角・事情などが)逆に[で]
1872,throw off ～,(衣服など)をさっと脱ぐ[脱ぎ捨てる]、～を払いのける
1873,throw up (～),嘔吐する、(食べ物)を吐く
1874,tidy up ～,(部屋・家・机など)を片付ける、～を整理する
1875,tie up ～,忙しくて身動きできない、～を固く縛る
1876,tip over (～),ひっくり返る、倒れる、～をひっくり返す
1877,touch up ～,(絵・文章・化粧など)を手直しする、～を修正する
1878,track down ～,～を追跡して捕らえる、～を追い詰める
1879,trip up (A),Aをつまずかせる、つまずく、しくじる
1880,try out ～,～を試してみる、～の効果を試す
1881,tune in (to ～),(局・番組などに)テレビ[ラジオ]のチャンネルを合わせる
1882,tune up (～),(楽器)を調律する、(エンジン・機械など)を整備する、調律する
1883,turn around (～),(商売・経済など)を好転させる、～の向きを変える、好転する
1884,turn away ～,～を追い払う、(客など)の入場を断る、～を背ける
1885,turn in (～),～を提出する、寝る
1886,turn out,であることがわかる、集まる
1887,turn to ～,～に頼る、(犯罪・悪習など)に走る、～に取りかかる
1888,walk off [away] with ～,～を盗む、(賞など)をあっさり手に入れる
1889,wander off,はぐれる、(道路・場所から)外れる、(主題から)脱線する
1890,want for ～,～を欠いている
1891,wash away ～,～を洗い流す、(記憶・感情など)を洗い去る
1892,wash down ～,(食べ物など)を流し込む、～を洗い流す
1893,watch over ～,～の世話をする、～を見守る、～を監視する
1894,wear off,(薬効・印象・痛みなどが)しだいに弱まる、すり減ってなくなる
1895,wear out ～,～を疲れ果てさせる
1896,weigh on ～,～に重くのしかかる、～を圧迫する、～を苦しめる
1897,win over ～,～を説得する
1898,wipe out ～,～を消滅[絶滅]させる、～を撲滅する
1899,work out ～,(計画・対策など)を練る、(問題)を解決する、～を計算する
1900,wrap up ～,(仕事・交渉など)を滞りなく終える`,
  },
  {
    id: 'tangoou',
    name: '単語王2202',
    csv: `番号,英単語,意味
1,victory,勝利、征服
2,please,～を喜ばせる、～を満足させる；好む、欲する
3,party,党、政党；一行、仲間；当事者、関係者、共犯者；相手方；パーティー
4,overcome,～に打ち勝つ；～を克服する; (be overcome）うちのめされる
5,comprehend,～を理解する；～を包含する
6,able,できる (be able to V=can V)；有能な、能力のある
7,academic,学問の、学究的な；学園の、大学（教育）の
8,favor,好意、親切な行為；支持；～に賛成する；～をえこひいきする
9,bend,～を曲げる；曲がる
10,fluent,流暢な、緩やかな
11,improve,～を改良する、～を改善する；よくなる
12,advance,～を進める；～を昇進させる；前進、進歩；昇進
13,marvelous,驚くべき、不思議な；素晴らしい
14,grateful,感謝している
15,appreciate,～を正しく理解する；～を正しく評価する；～を鑑賞する；～を感謝する
16,content,（～に）満足して；満足している；（スピーチ、論文などの）内容、中身
17,congratulate,～を祝う；～におめでとうと言う；～にお祝いを言う
18,prosperity,繁栄、幸運
19,persist,固執する；主張し続ける；(辛抱強く)～し続ける；（慣習等が）存続する
20,flourish,繁栄する、生い茂る；活躍する
21,glorious,栄光ある、すばらしい、輝かしい、名誉な
22,thrive,栄える；うまくやっている；成長する
23,inborn,生まれつきの、生来の
24,inherent,本来備わっている、（～に）固有の
25,inherit,～を受け継ぐ、～を相続する
26,sermon,（教会での）説教；小言
27,bliss,至福
28,sacred,神聖な
29,ritual,（伝統的・宗教的な）儀式；日常の習慣的行為
30,advocate,～を主張する、唱える、支持する；支持者、主張・提唱者
31,knight,騎士
32,playwright,脚本家、劇作家
33,region,地域、地方；分野、領域；（身体の）部分
34,population,人口；住民；集団
35,custom,慣習；習慣；（商店などへの）愛顧；（～s）関税、税関
36,popular,人気のある；大衆的な、一般の、国民の
37,invite,～を招待する、～を誘う；～に（～することを）勧める
38,obtain,～を得る
39,greet,～にあいさつをする、～を歓迎する
40,violate,～に違反する、～を侵害する、～に暴行する
41,violent,激しい、乱暴な、暴力的な、猛烈な
42,unemployment,失業（状態）；失業率
43,fire,（労働者）を首にする；（銃など）を発射する
44,employ,～を雇う、～を用いる
45,demonstrate,～を（実例で）説明する、～を実演する、～を証明する
46,merchant,貿易商、商人
47,military,軍（隊）の；軍人の
48,weapon,武器、兵器
49,status,地位、身分；状況；高い社会的地位
50,purchase,～を購入する
51,garbage,ゴミ；くだらないもの
52,luxury,豪華なもの；贅沢（品）
53,domestic,家庭の、家庭的な；国内の；飼い慣らされた
54,realm,領域、分野；王国
55,democrat,民主主義者；民主党議員
56,salute,会釈する；敬礼する
57,dismiss,～を解雇する；～を捨てる；～を解散する；～を退ける
58,hierarchy,階級制度、ヒエラルキー; 支配層
59,republic,共和国；団体、社会
60,grocery,食料雑貨店、（～ies）食料雑貨（品）
61,peasant,小作農；農民
62,autocrat,独裁者、専制君主
63,monarch,君主、皇帝
64,regime,政権；（社会）制度、体制
65,absorb,～を吸収する；～の心を奪う；～を夢中にさせる
66,deal,扱う
67,gather,～を集める；～だとわかる；（～である）と推測する、（速度など）を増す
68,gaze,じっと見つめる、見つめる
69,glance,ちらりと見る、ざっと見る
70,glimpse,ちらりと見る、（～が）ちらりと見える
71,observe,（法律など）を守る；（祝祭日など）を祝う；～を観察する;～と言う
72,remind,（人）に思い出させる；～に（...を）気づかせる
73,remember,～を思い出す、～を覚えている；～のことをよろしくと伝える
74,include,～を含む、～を同封する
75,profit,利益
76,benefit,恩恵；利益
77,stare,じっと見つめる
78,recollect,～を思い出す
79,recall,～を思い出す；～を回収する
80,defend,～を守る、～を弁護する
81,offend,～を怒らせる、～を不快にさせる
82,miss,～に間に合わない；～しそこなう；～がないのを寂しく思う；(狙い)をはずす
83,presume,～を推定する；（～である）と思う
84,protest,～に抗議する
85,irritate,～をいらいらさせる
86,banish,～を追放する
87,vanish,（突然、または完全に）消える；（完全に）消滅する；薄れる
88,assault,攻撃、暴行
89,surrender,降伏する；（感情などに）身を任せる
90,dispute,（～について）論争する、議論する
91,repent,～を後悔する、～を残念に思う
92,reconcile,～を和解させる、～を調和させる；（運命・損失などに）甘んじる
93,agitate,～を動揺（興奮）させる、～を扇動する；～をかくはんする
94,manipulate,～を巧みに扱う、～をうまく処理する；(人、世論等）を操作する
95,persecute,～を迫害する；～を悩ます
96,provoke,～を怒らせる；(感情など）を起こさせる；～を駆り立てる
97,environment,（自然）環境、（周囲の）環境
98,atmosphere,雰囲気；大気；空気
99,hell,地獄
100,heaven,天国；（H～で）神
101,major,主要な；大多数の；重要な；より大きな
102,minor,小さな；重要でない、主要でない、下位の；たいしたことがない
103,harbor,港、湾；避難所、隠れ場所
104,subway,地下鉄（アメリカ用法）；地下道（イギリス用法）
105,tremendous,巨大な、莫大な；すさまじい、ものすごい
106,vast,広大な；莫大な
107,previous,以前の；（時間・順序的に）前の～、前回の～
108,eminent,著名な、すぐれた、卓越した
109,outstanding,目立った；傑出した；未解決の
110,missing,行方不明の；欠落した；欠けている
111,generous,寛大な、気前の良い；たくさんの
112,scarce,乏しい、不十分な、少ない、不足した
113,affluent,豊かな、裕福な、おびただしい
114,faint,かすかな、弱々しい、ぼんやりした、気を失いそうな
115,suburb,郊外、住宅地；(～s) 周辺、付近
116,astronomy,天文学
117,superficial,表面の、うわべだけの
118,shallow,浅い；浅はかな
119,conspicuous,目立つ；人目を引く
120,eternal,永遠の、永久の
121,transient,一時的な、つかの間の；短期滞在の
122,profound,（意味などが）深い、深遠な；難解な
123,legitimate,正当な；合法的な
124,invalid,無効の、根拠の薄い；病弱な
125,minute,非常に小さい、ささいな、詳細な
126,reckless,向こう見ずな；気にかけない
127,superfluous,過分の；無用の
128,prudent,用心深い；分別のある
129,arbitrary,任意の；独断的な
130,deprive,～から（～を）奪う、～から剥奪する
131,rob,～から（...を）奪う
132,own,～を持っている
133,owe,～に借りがある；～に負うている
134,perform,～を演奏・上演する；（仕事など）を行う、～を遂行する
135,decline,～を断る
136,increase,増加する；上昇する
137,fix,～を修理する；（食事など）を用意する；～を固定する；～を決める
138,wind,曲がりくねる
139,decide,～を決意する、（論争、問題など）に決着をつける、～を決める
140,determine,～を決意する、～を決心する、～を（はっきりと）決める
141,abolish,（法律、制度など）を廃止する
142,extend,～を延長する、～を拡大する；～を示す、～を施す
143,bury,～を埋める；～を埋葬する
144,dig,（～を）掘る、～を掘り出す
145,encounter,～に偶然出くわす；～に直面する
146,declare,～を宣言する、～と言明する、～と断言する
147,negotiate,交渉する、話し合う
148,grasp,～をつかむ；～を理解する
149,measure,～を測る、～を見積もる、～を示す；寸法：測定；（～s）手段、対策
150,discard,～を捨てる
151,abandon,～を放棄する；～をあきらめる；～を捨てる；～を見捨てる
152,enhance,（価値など）を高める
153,diminish,～を減少させる、～を小さくする
154,prolong,（時間・期間など）を延長する
155,overhear,～をふと耳にする
156,overlook,～を見落とす；～を大目に見る；～を見下ろす
157,pursue,～を追跡する；～を追求する；（仕事など）に従事する
158,warrant,～を保証する；（事）からすると～は当然のことである
159,compensate,～に（～を）補償する；～に埋め合わせをする；（～に）償う
160,paralyze,～を麻痺させる
161,groan,（絶望などで）うめく
162,witch,魔女
163,experience,経験、体験
164,sweat,汗；骨折りの仕事
165,summary,要約、大意
166,talent,才能、素質；才能のある人
167,storm,嵐、荒天
168,principle,原理、原則；本質、根元；（～s）基礎
169,principal,主要な、第一位の
170,purpose,目的；意図
171,psychology,心理学；心理（状態）；心理作戦
172,museum,博物館；美術館
173,notion,概念、考え、意見；気まぐれな考え
174,vary,変わる、変化する、異なる
175,doctrine,（宗教上の）教義；（政策上の）主義
176,district,地区、地方、地域
177,court,裁判所、宮廷、庭、（テニスなどの）コート
178,burden,重荷；荷物；負担；苦労
179,tribe,部族、種族
180,tragedy,悲劇、悲劇的な出来事
181,tension,緊張、不安、緊迫状態；張りの度合い
182,experiment,実験、試験
183,hostage,人質
184,friction,摩擦；あつれき、不和
185,fraction,断片；一部；分散
186,aristocracy,貴族政治；（the～) 貴族階級
187,agony,苦悩、苦しみ
188,agitator,扇動家
189,foe,敵
190,outbreak,（悪いことの）突発、発生；暴動、反乱
191,perseverance,忍耐、根気強さ
192,kidnap,～を誘拐する
193,tyranny,暴政、圧政；過酷
194,crisis,危機
195,compare,～を比較する；～をたとえる
196,enemy,敵
197,degree,学位；（温度・角度などの）度；程度、段階
198,junior,（～より）下級［年下・年少］の
199,senior,年上の；（役職、地位などが）上の
200,research,研究、調査
201,reason,理由、根拠；理性、思考力；道理
202,concern,関心事；関係；心配；懸念；（関係のある［心配すべき］）事柄
203,average,平均
204,absolute,完全な；全くの；絶対的な、絶対の
205,depart,出発する；はずれる
206,divorce,～と離婚する；～を（...から）分離する
207,vacant,（部屋・座席などが）空いている；からの；うつろな
208,endanger,～を危険にさらす
209,perish,死ぬ；消滅する；悪くなる
210,instinct,本能、天性
211,impulse,衝動；衝撃
212,compete,競争する；匹敵する
213,competent,能力のある、有能な
214,intimate,親密な、とても私的な、内心の
215,jealous,嫉妬深い；妬んで
216,terminate,～を終わらせる
217,shatter,粉々になる
218,peril,危険
219,intricate,入り組んだ、複雑な、はっきりしない
220,crush,～を押しつぶす
221,crash,衝突、墜落；すさまじい音；株価などの暴落
222,intervene,干渉する、仲裁する；（２つの時期などの間に）介在する
223,split,～を割る、～を裂く；～を分配する
224,infectious,伝染性の
225,devastating,壊滅的な被害をもたらす、壊滅的な
226,intuition,直観
227,harvest,収穫（物）、収穫量（高）
228,heir,相続人
229,numerous,多数の、多くの
230,fortune,運；幸運；繁栄；財産、富
231,gain,～を得る、～を増やす
232,resource,（～ｓ）資源、財源、貯蔵、手段；臨機応変の才、機転
233,search,～を捜す；～を所持品検査する
234,lesson,教訓；授業；（教科書の）課
235,fate,運命
236,discipline,訓練、修行、しつけ、規律；学科、学問領域
237,temple,寺院、神殿
238,learned,学問のある；博学な
239,genius,天才、非凡な才能
240,insight,洞察（力）
241,generate,～を生み出す；～を発生させる
242,fund,資金、基金
243,millionaire,百万長者、大富豪
244,multiply,～をどんどん増やす；～に（数）を掛ける
245,lessen,～を少なくする
246,endeavor,努力、試み
247,destiny,運命、宿命
248,religion,宗教、信仰；信条、主義
249,coherent,一貫した；筋の通った
250,cite,～を引用する
251,quote,～を引用する
252,thesis,主題、論題；命題；（学位）論文
253,verify,～が正しいことを証明する；～を確かめる
254,withhold,～を保留する；（感情など）をおさえる
255,hypothesis,仮説、前提
256,analogy,類推；類似
257,premier,首相
258,embassy,大使館
259,ambassador,大使
260,encourage,～を勇気づける、～を励ます、～を促進する
261,disappoint,～を失望させる、～をがっかりさせる
262,prefer,～を好む；～が好きだ
263,hate,～を憎む、～を嫌う、～が大嫌い
264,hatred,憎しみ、嫌悪
265,praise,～をほめる、～を賞賛する
266,demand,～を要求する；～を尋ねる
267,supply,～を供給する、～に与える；～を補充する
268,income,収入、所得
269,impose,（義務など）を課す、（意見など）を押しつける
270,tax,税金、重い負担
271,naked,裸の；むきだしの；ありのままの
272,muscle,筋肉；筋力、腕力、体力
273,obstacle,障害（物）、支障
274,interfere,干渉する、妨げる、邪魔［妨害］をする
275,efficient,効率的な、有能な、効率的に仕事をこなす
276,effect,影響、効果；結果；（結果を）もたらす
277,reputation,評判、名声、信望
278,widespread,広範囲に及ぶ
279,sole,唯一の；単独の
280,soul,魂、精神；人；情熱；本質的なもの
281,exclaim,叫ぶ
282,minister,大臣；牧師、聖職者
283,pray,祈る；～に懇願する
284,retreat,退却；休養の場所；退却する；引退する
285,sequence,連続（するもの）; 結果
286,meditate,深く考える；熟慮する；瞑想する
287,flatter,～にお世辞を言う、～にへつらう；～をうれしがらせる、～をおだてる
288,compliment,ほめ言葉；賛辞
289,supplement,補足、付録
290,traitor,反逆者、裏切り者
291,sneer,冷笑する
292,fanatical,狂信的な、熱狂的な
293,lose,～を失う；（試合など）に負ける；（体重など）を減らす
294,progress,前進、発展；経過
295,object,物、物体；対象；目的、目標；目的語
296,source,源；出所、原因
297,liquid,液体；流動体
298,spring,泉；春；バネ
299,perspective,観点、展望；遠近法
300,proceed,進む、前進する；続ける；向かう；手続きする、処分する
301,series,連続、続き
302,origin,起源、由来、発端；生まれ、血統
303,leave,～を置き忘れる；～を(...の状態)にしておく；～を任せる；～を置き去る；～を残す；～を出発する；出発する、退学する；休暇；許可
304,phase,（発達、変化の）段階、時期；（問題などの）面、側面；局面
305,melt,溶ける、やわらぐ、いなくなる、なくなる
306,extinct,（動物のある種族などが）絶滅した、消えた
307,descend,下る；伝わる、遺伝する
308,stretch,～を伸ばす；（手など）を差しのばす；～を誇張・曲解する
309,sink,沈む；衰える
310,shrink,縮む、減少する；しりごみする
311,shift,～を変える、～を移す
312,reform,～を改革する、～を刷新する
313,refine,～を精製する；（技術など）を磨く、～を洗練されたものにする
314,prevail,普及している；勝る、支配する；うまくいく
315,substance,物質、薬物；本質、中身；要旨、骨子
316,stuff,材料；（漠然と）物、こと；要素
317,symptom,徴候、兆し；症状
318,surplus,余剰、過剰；黒字、利益
319,surpass,～をしのぐ；～を越える
320,recede,後退する、手を引く
321,launch,（船）を進水させる；～を打ち上げる；～を開始する
322,ascribe,～を（...の）せいにする；～を（...の）作品とする
323,gauge,計器；標準寸法、規格
324,incentive,刺激、動機；報償（金）
325,rot,腐敗する
326,do,～に～をもたらす、役に立つ；～をする
327,announce,～を公表する；～と知らせる
328,operation,運転、操作；実施；作業、活動、生産過程；手術；軍事行動
329,behave,振る舞う；行儀よくする
330,attempt,～を試みる
331,guess,～と推測する、～を推測する、～を言い当てる
332,raise,（料金・程度など）を高くする、（体の一部）を上げる；～を育てる
333,raw,生の、加工していない；未熟な
334,want,（必要なものの）欠乏；貧困；必要
335,reduce,～を減少させる；～を弱める；～を変える
336,short,短い、不足して；背が低い；簡潔な
337,quit,～をやめる
338,swift,迅速な；即座の
339,cease,やむ、とまる
340,strike,～を打つ；（考えなどが人の心）に浮かぶ；（事が人）に印象を与える
341,chase,～を追跡する
342,arouse,～を刺激する；～を目覚めさせる；～をかきたてる
343,utilize,～を利用する；～を役立たせる
344,conduct,（道徳上の）行い；指導；行為；管理
345,pause,休止；句切り；ちゅうちょ
346,ascend,登る
347,nod,うなずく、会釈する；（うなずいて）同意を表す；いねむりする
348,accumulate,～を蓄積する、ためる
349,heap,（雑然と積まれた）山、かたまり
350,rust,さび
351,soar,舞い上がる；急上昇する
352,cultivate,～を耕作する；～を栽培［養殖］する；（才能など）をみがく；～を開墾する；（親交など）を築く；（精神・才能など）を養う
353,swell,ふくらむ、腫れる；（数量が）増加する
354,degrade,～の品位を下げる、～を降格する
355,soothe,～をなだめる；（痛みなど）を和らげる
356,accelerate,～を加速する；～を促進する
357,deteriorate,悪化する
358,nurture,～を養育する；～を育てる；～を教育する
359,renewable,更新［回復、再開］できる
360,handle,～を扱う；～を処理する；～を論じる；～に手を触れる
361,derive,～を引き出す
362,active,積極的な、能動的な；活動している、有効な
363,reach,～に着く、～に届く；～と連絡を取る
364,still,じっとしている、静かな
365,force,～に（～することを）強制する；～を強いる
366,run,競走に出る、立候補する；流れる；（～に）なる；走る；動く、作動する
367,enforce,（法律など）を施行する、～を強制する
368,bear,～を生む；～に耐える；～を持っている；～を身につける；～を運ぶ；～を支える
369,turn,回る；曲がる；向かう；（～に）なる；振り返る；変質する
370,action,行動、おこない、アクション
371,wipe,～をふく、～をぬぐう
372,withdraw,～を引っ込める、～を撤回する；（現金など）を引き出す
373,dare,あえて（～）する、～に立ち向かう、思い切って～する
374,extract,～を抜き出す、～を抜粋する
375,skip,はね回る；スキップする；拾い読みする
376,insert,挿入物、差込ページ、折り込み広告
377,deed,行為、行い
378,rear,後部、後ろ
379,interval,（時間の）間隔、周期；休止期間；（空間の）隔たり
380,lower,～を低くする；～をおろす
381,pose,ポーズをとる；ふりをする
382,creep,はう；忍び寄る
383,wither,（植物などが）しおれる；弱まる、衰える
384,leap,跳ぶ；(心が）おどる；（考えが）ひらめく
385,deficient,欠如した、不十分な、不足している
386,reinforce,～を補強する、～を強化する
387,exert,～を行使する［使う］、～を働かせる
388,scratch,～をひっかく；～を（...から）はがし取る；～を線を引いて消す
389,disguise,～を変装させる；～を隠す
390,cast,～を投げる；～に役を割りふる；～を投げかける
391,withstand,～によく耐える；～に持ちこたえる
392,undo,～をほどく ；～を元通りにする、～を取り消す
393,happen,起こる
394,aid,助け；補助器具
395,unite,～を結合する；～を団結させる、～をまとめる
396,assist,～を助ける、～を手伝う
397,arrange,～の手はずを整える；～をきちんとならべる；～を取り決める
398,arise,生じる、起こる
399,approach,～に近づく、～に接近する
400,polish,～を磨く；～を洗練する
401,occur,起こる；（考えなどが心に）浮かぶ
402,exercise,運動、練習、訓練；行使；（～s）式、儀式
403,beat,～を打つ；～を打ち負かす
404,bow,お辞儀をする
405,omit,～を除外する、～を省略する；～を（うっかり）忘れる
406,surface,表面、外観；水面；うわべ
407,site,場所、用地；遺跡
408,detach,～を切り離す、～を取り外す
409,conceal,～を隠す；～を秘密にする
410,inhabit,～に住む、～に生息している
411,possess,～を持っている；（魔物・考えなどが）～にとりつく
412,portion,一部；分け前；一人前
413,upright,まっすぐな、直立した；正しい
414,track,～の（足）跡を追う
415,trace,跡、形跡；ほんのわずかの、微量の；線、見取り図
416,sweep,～を掃く；～を押し流す；～をさっと通過する
417,commit,（罪など）を犯す；～を委託する；～を（～に）ゆだねる
418,overtake,～に追いつく、～と同じになる；～を上回る；～を不意に襲う
419,convert,～を変える；～を改宗させる
420,barren,（土地が）不毛の；内容のない；不妊の
421,rotate,回転する
422,haunt,（考えなどが）～につきまとう；（幽霊が）～に出没する；へしばしば行く
423,glue,～を（糊や接着剤で）接着する
424,bottom,底；下部；ふもと
425,part,部分、部品；役目、せりふ；分け前、分担；側、味方
426,occupy,～を占める、～を占拠する、～に（賃借で）住む
427,hide,～を隠す；～を秘密にする
428,place,～を置く；～を配置する
429,exist,存在する、ある
430,face,～に直面する、～に面する
431,focus,焦点、中心［対象］
432,store,～を蓄える
433,tie,ネクタイ(=necktie)；結び目；同点、引き分け；(～ｓ）つながり、関係
434,select,～を選び出す
435,seek,～を捜し求める；(～しようと）努める；～を求める
436,make,（～の）～になる；～を作る；～を（～の）状態にする；～に（～）させる
437,external,外部の
438,replace,～に取って代わる；～を取り替える；～を元の場所に戻す
439,mount,～を（～に）載せる［はめ込む］；（馬・自転車など）にまたがる［乗る］
440,exclude,～を排除［除外］する
441,lean,もたれる；よりかかる；傾く；頼る
442,row,（人や物の）列、並び
443,contrary,反対の；（～に）反する
444,consent,同意する
445,loyal,忠実な、誠実な、誠意のある
446,mutual,相互の；共通の
447,dominate,～を支配する
448,interact,相互に影響する、相互に意思を伝える、相互にやりとりする
449,solitary,孤独な；ひとりだけの；唯一の
450,counterpart,対応するもの；対の片方
451,cope,うまく処理する；うまく対処する
452,adhere,くっつく、粘着する；（意見、主義などに）固執する、背を向けない
453,static,静的な、元気のない
454,parallel,平行の；相当する、同様な；類似の
455,bilateral,相互の；二者［二国］間の
456,ally,同盟国；連合国
457,base,～の基礎［根拠］を置く
458,hold,～を入れている；～を開催する；～を抱く、持続する；～をとっておく
459,isolate,～を孤立させる、～を分離する、～を隔離する
460,divide,～を分割する、～を分離する、～を分ける、～を分類する
461,move,～を動かす；～を感動させる
462,point,要点；（位置、時間上の）点、瞬間；目的
463,ground,根拠、理由；土地、土壌、運動場、地面、地表
464,escape,逃げる
465,flight,（飛行機の）便、飛ぶこと、飛行；逃走、脱出
466,quarter,４分の１；15分；25セント；四半期；（４学期制の）学期；方角、場所
467,neighbor,近所の人、隣人、隣国（の人）；仲間
468,position,位置、場所；立場、形勢；地位、身分；姿勢；勤め口、職
469,besides,その上；さらに
470,remain,～のままである、～のままでいる；残る、とどまる
471,back,背中；後部
472,follow,～について行く；（忠告など）に従う、～を理解する
473,stick,～をくっつける；～を突き刺す
474,separate,～を引き離す；～に分ける
475,join,～に加わる；～をつなぐ；～に参加する
476,surround,～を取り囲む、～を取り巻く
477,enter,（場所）に入る、～を記入する；（活動など）に加わる
478,scatter,～をまき散らす；～を追い散らす
479,close,接近した；親密な；綿密な= careful
480,situation,位置；立場、状態；きわどい場面
481,spread,～を広げる；～を薄く塗る
482,lead,～を（～に）導く；（生活）を送る;～の先を行く；～を指揮する
483,direction,方向、指導
484,float,浮かぶ
485,narrow,（幅の）狭い；限られた；かろうじての
486,associate,～を連想する
487,react,反応する、作用する；反抗する
488,influence,影響、影響力
489,quarrel,口論；反目、不和
490,cover,～を含む；（ある距離）を行く；～を覆う；～を隠す；～（範囲）に及ぶ；～を扱う
491,resemble,～に似ている
492,affair,出来事；問題；仕事；（～s）事情
493,basis,基礎
494,support,～を支える；～を支持する;～を扶養する；～を裏付ける
495,room,（不可算扱い）空間、場所、可能性、余地、余裕；（可算扱い）部屋；（the～；集合的に）部屋にいる人々
496,delight,喜び、楽しみ
497,desire,要求、願望
498,satisfy,～を満足させる；（義務)を果たす；（基準など）に合致する；～にこたえる
499,fun,楽しいこと、愉快なこと［気分］、戯れ
500,indifferent,無関心な；どうでもよい；公平な
501,intend,～を意図する、～するつもりである
502,long,熱望する；思い焦がれる
503,mean,～を意味する；～を（～の）つもりで言う；～にとって重要性を持つ
504,mind,～を気にする；～を嫌がる；～の世話をする
505,familiar,よく知られている、なじみのある；精通している；ありふれた；親しい
506,shame,恥、恥ずかしさ；残念なこと
507,belong,所属する；（あるべきところに）ある
508,direct,～に道を教える、～を向ける、～に指図（指示）する
509,despise,～を軽蔑する、～をひどくきらう
510,boast,自慢する
511,stand,～を我慢する；～を立てる
512,complain,不平を言う
513,amaze,～をびっくりさせる、～を驚かす
514,ambitious,大望を抱いた；熱望している；野心的な
515,terrible,猛烈な、ひどい；恐ろしい；ひどく悪い
516,affect,～に影響を与える；～のふりをする；～を愛用する、～を好んで身につける；[通常受け身] ～の心を動かす
517,communicate,（意見・情報など）を伝える
518,cross,～を線を引いて消す；～を横切る；～と交差する
519,depend,頼る、依存する；左右される、（～によって）決まる
520,control,制御、抑制；支配、管理
521,companion,仲間；友達
522,avoid,～を避ける
523,attend,～に出席する、～に通う；～を世話する
524,argue,議論する；口論する、言い争う
525,appointment,任命；約束；職、任務
526,acquaintance,知人、知り合い；面識；知識；交際
527,accustomed,慣れる
528,accompany,～と一緒に行く；～に付随して生じる
529,free,無料の；自由な、ひまな；制約のない
530,serve,（目的・必要）にかなう；～に仕える；～に供給する；（食事など）を出す
531,treat,～を扱う；～を治療する；～におごる；～を（...と）みなす
532,submit,服従する
533,rely,（～に）頼る、（～を）あてにする
534,regard,～を（...と）みなす；～を評価する
535,disregard,～を無視する
536,meet,～を満たす；～にかなう；～と交差する；～と会う
537,introduce,～を紹介する；～を導入する
538,independent,独立した、関係がない、自立した
539,impact,衝撃、衝突；影響（力）
540,consensus,（意見の）一致；全体の意見の一致
541,cooperate,協力［協同］する
542,fascinate,～を魅惑する、～をうっとりさせる
543,involve,～を巻き込む、～を没頭させる、～が当然要求される、～を複雑にする、～を含む、～を意味する
544,cling,執着する；くっつく；しがみつく
545,remote,遠い；へんぴな；（時間が）遠く隔たった；かすかな
546,pierce,～を貫く、～を刺す；～の身にしみる、～を感動させる
547,equip,～に備え付ける、～に装備する；～に身につけさせる
548,enclose,～を囲う；～を同封する
549,vertical,垂直の；縦の
550,retain,～を保持する、～を維持する
551,debate,～を討論する、～を熟慮する
552,scream,金切り声を出す、叫ぶ、悲鳴をあげる
553,counsel,～に忠告する、（人）に～（するよう）勧める
554,sigh,ため息
555,review,再考；復習；論評、評判；報告、説明；回顧
556,entertain,～を楽しませる、～をもてなす；（申し出など）を考慮する、（疑念、考えなど）を心に抱く
557,whisper,～と小声で言う；～をこっそり言いふらす
558,survey,～を概観する、～を調査する、～を見渡す
559,narrate,～を（順序立てて）物語る、～を述べる
560,reply,返事をする；応じる
561,convey,～を運ぶ；（思想など）を伝える
562,inquire,～を尋ねる
563,interpret,～を解釈する、～を通訳する
564,consult,相談する；（対等関係で）協議する
565,excuse,～を許す；～の言い訳をする
566,comment,論評；解説；うわさ話
567,chat,おしゃべり
568,persuade,～を説得する；～を説得して...をさせる；～を...だと確信させる
569,bound,縛られた；きっと；確かに
570,neutral,中立の、中性の；はっきりしない、くすんだ
571,conform,従う、適合する、（基準を）満たす
572,combine,～を結合させる
573,discourage,～を落胆させる、～をがっかりさせる；～に思いとどまらせる
574,conceive,～を心に抱く；（～である）と考える
575,condemn,～を非難する；～に有罪判決を下す
576,reluctant,気が進まない；しぶしぶの
577,disgust,嫌悪
578,frustration,挫折；フラストレーション、欲求不満
579,sensation,大評判、物議；感覚
580,emotion,感情、感動
581,apathy,無感動、無関心；冷淡
582,antipathy,反感；嫌悪（感）
583,sympathy,同情、思いやり；共感、支援
584,participate,参加する；関わる；加わる
585,obey,～に従う、（規則など）を守る
586,relative,相対的な；比較上の；～に関連した、適切な；相互の
587,relate,～を関連づける；～を物語る
588,patriotic,愛国的な
589,share,～を共有する；～を分ける；～を（人に）話す
590,spare,～をなしですませる；～を取っておく；～を節約する；～をさく
591,tune,曲；調和、一致；気分、機嫌
592,alert,注意/警戒を怠らない；機敏な、敏捷（びんしょう）な
593,wonder,～かなと思う；～ということに驚く
594,endure,～に耐える、～を我慢する
595,relief,（苦痛などからの）解放；（苦痛などの後の）安堵；救援（物資）
596,passion,情熱、熱中、激情、愛情
597,impress,～に強い印象を与える；～を感動させる
598,tiresome,退屈な；骨の折れる、厄介な
599,tease,～をからかう、～をいじめる；～をじらす
600,tremble,震える；心配する
601,uneasy,不安な、落ち着かない
602,startle,～をびっくりさせる、～を飛び上がらせる
603,desperate,自暴自棄の、絶望的な；欲しくてたまらない、（～したくて）たまらない
604,sentiment,感傷；心情；意見
605,attitude,姿勢；態度；意見、考え方
606,confidence,信頼；自信、確信；秘密
607,smart,頭が良い；身なりがきちんとした
608,talkative,おしゃべりな、話好きな
609,vigorous,元気な；力強い、激しい
610,enthusiastic,熱狂的な、熱心な
611,liberal,自由主義の；気前のよい；寛大な
612,weep,すすり泣く、しくしく泣く；嘆く
613,upset,～の心を乱す；～の調子を狂わせる；～をひっくり返す；～をだめにする
614,despair,絶望
615,concentrate,～を集中する；～を（...に）集中させる
616,chart,図表；図
617,assimilate,～を同化する；～を吸収する；～を自分のものにする
618,assemble,～を集める；～を組み立てる
619,embrace,～を抱きしめる；～を含む；～に応じる
620,devoid,欠けた
621,reverse,逆の；裏の
622,pledge,～を誓う
623,plead,嘆願する; 申し立てる
624,oral,口頭の、口述の；口の
625,confess,～を告白する
626,colloquial,口語の
627,swear,～を誓う；～だと断言する
628,slang,俗語
629,roar,吠える、わめく；とどろく、鳴り響く；大笑いする
630,dialog,対話、会話
631,dialect,方言、地方語
632,chuckle,くすくす笑う
633,assert,～を断言する；（～である）と主張する；～を行使する
634,thrust,～を突き刺す；～を押し付ける；～を突き出す
635,bondage,（行動の自由の）束縛；捕らわれの身
636,scope,範囲；余地、自由
637,dictate,（文書など）を［...に］書きとらせる；～を命令する
638,yell,大声を出す、叫ぶ；エールを送る
639,render,～を（...に）する；（...に）～を与える；～を表現する
640,testify,～を証言する
641,recite,～を（聴衆の前で）朗読する、～を暗唱する；～を詳細に話す
642,verse,韻文；詩（の一行）；聖書の節（章を細分化した単位）
643,premise,前提、仮定
644,preface,序文；前置き
645,eloquent,雄弁な、説得力のある
646,locate,～の所在地を見つける；～の場所を定める
647,mingle,～を混ぜる
648,outer,外の～；客観的な
649,penetrate,～を貫く；～にしみ込む、広がる；～を見抜く、理解する；～に入り込む
650,underlie,～の下にある；～の基礎となる、～の背後にある
651,sore,痛い；悲しんだ、怒った
652,plunge,～を突っ込む；～を（・・・に）追い込む、陥れる
653,yearn,あこがれる；切望する；同情する
654,lament,～を嘆き悲しむ
655,depress,～を落胆させる；～を押し下げる；～を憂鬱にさせる
656,resent,～に憤慨する；～をひどく嫌う
657,deplore,～を嘆く
658,shudder,身震いする、ぞっとする
659,zeal,熱意、熱中
660,outrage,暴力; 激怒
661,whim,気まぐれの思いつき、でき心
662,staff,杖、棒；（集合的に）社員、職員、スタッフ
663,relevant,関連がある；適切な
664,emancipate,～を解放する
665,queue,列
666,indulge,～を甘やかす、～を満足させる、～にどんどん与える、～にふける
667,shed,（涙・血など）を流す；（葉など）を落とす；（光など）を投げかける
668,scared,おびえた；びっくりした
669,blush,（恥ずかしさなどで）顔を赤らめる
670,patron,（芸術などの）後援者；パトロン；常連客
671,obsess,（考えなどが）～にとりつく
672,proclaim,～を宣言する；～を（...だとはっきり）示す
673,satire,風刺、皮肉
674,mutter,つぶやく；ぶつぶつ不平を言う
675,denote,～を意味する
676,caricature,風刺画［文］；戯画；下手なまねごと
677,hemisphere,半球
678,subordinate,下位の；補助的な；従属する
679,frown,しかめ面をする、眉をひそめる
680,irony,皮肉、予想に反する結末
681,melancholy,憂うつ；哀愁
682,layer,（積み重ねたものの）層；地層
683,specimen,見本、標本
684,haughty,高慢な
685,impudent,ずうずうしい
686,pretend,～のふりをする、（～ということ）を装う
687,temperament,気質、気性
688,ancestor,先祖、祖先
689,territory,領土、領域
690,pity,哀れみ 、同情；残念なこと、遺憾なこと
691,temper,気質、気分；かんしゃく；平静な気分、落ち着き
692,blame,～を非難する；～に責任を負わせる；～を責める；～を（...の）せいにする
693,anxious,心配して；切望して
694,regret,～を後悔する、～を残念に思う
695,ashamed,恥ずかしがって、恥じている
696,touch,～を感動させる；～に触れる；～を扱う；～に影響を与える
697,ardent,激しい；熱心な
698,coward,臆病者
699,humble,謙遜した；卑しい；質素な
700,modest,謙虚な；（要求などが）控えめな；質素な、まあまあの
701,pacific,（the P～）太平洋
702,stubborn,頑固な；（行動が）断固とした、不屈の
703,identify,～が誰［何］であるかが分かる、～を同一のものとみなす；～を特定のもの［人］と確認する
704,feature,特徴、特色；顔立ち；目玉商品
705,wise,賢い、分別のある
706,clever,賢い；利口な；うまい；巧妙な
707,addict,中毒患者、（麻薬などの）常用者；愛好者
708,courteous,礼儀正しい
709,innate,生まれつきの
710,naughty,（子供が）いたずらな、わんぱくな；邪悪な
711,brutal,野蛮な；残酷な；残忍な；理性のない
712,conceit,うぬぼれ
713,discreet,思慮分別のある；目立たない
714,integrity,高潔さ、誠実さ；統一された状態
715,naive,世間知らずの；うぶな；単純な、だまされやすい
716,amiable,愛想のよい
717,temperate,節度のある、温和な
718,shrewd,抜け目のない；（洞察などが）鋭い
719,diligent,勤勉な
720,unique,唯一の、特有の；類のない
721,gentle,（性質などが）優しい、穏やかな
722,habit,習慣、癖
723,will,意志；遺書
724,idle,仕事をしていない、怠惰な
725,innocent,無邪気な；無罪の；悪気のない
726,lazy,怠惰な；無精な
727,willing,喜んで～する、快く～する；～するのをいとわない
728,patient,忍耐強い；我慢強い
729,wisdom,知恵、賢さ；金言、名言；学問、博識
730,nature,性質、本性；自然；種類
731,stupid,愚かな、ばかな、ばかげた
732,noble,気高い、高潔な；貴族の、高貴な
733,sincere,誠実な、心からの
734,nervous,神経の；神経質な、臆病な、あがった、緊張した
735,dumb,口がきけない ；おろかな
736,aggressive,攻撃的な、けんか腰の；積極的な
737,timid,臆病な、内気な
738,trait,特色；～気味
739,shortcoming,（～sで）欠点、短所
740,vanity,虚栄心、うぬぼれ
741,indignant,憤慨した
742,bewilder,～を当惑させる；～をうろたえさせる
743,rage,激怒；熱望；流行のもの
744,mourn,（死や不幸を）悲しむ、嘆く
745,fury,激しい怒り；（風雨などの）激しさ
746,astonish,～を驚かす
747,astound,～をびっくり仰天させる
748,aspire,（～することを）切望する；熱望する、求める
749,apprehension,気がかり、心配；理解
750,mischievous,いたずらな；有害な
751,arrogant,横柄な、尊大な、傲慢な
752,courage,勇気
753,shy,内気な、恥ずかしがりの
754,personality,個性、性格、人格；独特の雰囲気；有名人
755,serious,本気の、まじめな；重大な、深刻な
756,character,性格、個性、特徴；登場人物；人格；文字
757,polite,礼儀正しい、丁寧な；上品な、上流の
758,selfish,利己的な、わがままな、自分勝手な
759,proud,誇りを持って；（～を）誇って；（～を）自慢して
760,sound,（～に）思われる；（～に）聞こえる；（鐘などが）鳴る
761,general,世間一般の、一般的な；全体的な；大まかな
762,intense,強烈な、非常に強い、激しい
763,quantity,量
764,enormous,（形・程度などが）巨大な、莫大な
765,multitude,多数；（the～（s）で）大衆
766,expand,～を広げる、～を膨張させる
767,abound,豊富である；（場所などが）いっぱいである、（～で）満ちている
768,ample,たっぷりある、広大な
769,approximate,おおよその、近似の
770,score,得点；成績；20
771,supreme,（地位・性質などが）最高の；この上ない、究極の
772,trivial,ささいな、取るに足りない、ありふれた
773,acute,鋭い；深刻な；（痛みなどが）激しい；急性の
774,network,網状のもの；張り巡らされたもの；放送網；ネットワーク
775,feudal,封建制の
776,attorney,弁護士
777,board,板；会議；委員会；重役
778,candidate,候補者；志願者；立候補者
779,trial,試み、試験；裁判；試練、苦労
780,strategy,戦略、計画、方策
781,parliament,議会、国会；（P～で）英国議会
782,layman,（専門家に対して）しろうと；（聖職者に対して）平信徒
783,treaty,条約；交渉、約束
784,arm,腕；（～ｓで）武器
785,branch,"（一般に）枝；支店；部門 =division, section"
786,elect,～を選ぶ、～を選挙で選ぶ
787,function,機能、役割、働き；（公式な）式典、会合
788,govern,～を治める；～を支配する；～を左右する；～を抑制する
789,jail,刑務所；留置場；拘置所
790,official,公の、公式の；公務（上）の、お役所風の
791,personnel,（集合的に）社員；人事部
792,power,力、能力；権力；強国；（電気などの）エネルギー；体力、知力、精神力
793,social,社交的な；社会の、社会に関する、社会的な、社会生活を営む
794,word,短い会話；約束；単語、言葉；知らせ、消息
795,empire,帝国；大企業
796,institution,施設；（公共）機関、団体；制度、慣習
797,legal,合法的な；法律の；法的な
798,penalty,罰金；刑罰
799,revolution,革命、（思想などの）大変革；回転
800,royal,王室の、王の；王立の；風格のある
801,spectator,観客、見物人
802,statistics,［複数扱い］統計（の数字）；［単数扱い］統計学
803,system,装置、システム；制度、組織；体系；方法、学説、手順；体
804,troop,（移動する）群れ、一団；（～ｓ）軍隊、騎兵隊
805,vote,投票、票；選挙権；決議、決定
806,specialize,専門にする、専攻する
807,anarchy,無秩序
808,diversity,相違、多様性
809,bribe,賄賂
810,bureaucrat,官僚
811,census,国勢［ 市勢］ 調査；（主に人口の）一斉調査
812,committee,委員会
813,conservative,保守的な、控えめな
814,despotic,専制的な
815,superpower,超大国；強大な力
816,accordingly,それに応じて、それ相応に；したがって
817,factor,要因、要素
818,explain,～を説明する
819,define,～を定義する、～を明確に定める
820,convince,～を納得させる；～を確信させる
821,logical,論理的な、筋が通った；論理学（上）の
822,result,結果、（試験などの）成績
823,prove,～を証明する；～を試す
824,nevertheless,それにもかかわらず、それでもやはり
825,actually,実際に、（意外だが）実は、本当は
826,analysis,分析；解明
827,prestige,名声；威信
828,order,順序、等級；秩序、治安；命令；注文（品）；整理；正常、順調
829,lawyer,弁護士
830,investigate,～を調査する
831,infer,～を推論する
832,consequence,結果；重要性
833,conclude,（～である）と結論を下す；～を終える；～（発言など）を締めくくる；～（契約など）を締結する
834,inspect,～を検査する；～を調査する
835,eventually,結局は、ついに
836,examine,～を調べる；～に試験をする
837,bunch,束；集団、群れ
838,chairperson,議長；（会社などの）会長
839,snob,俗物；上流気取りの嫌な人
840,colleague,（仕事の）同僚
841,reign,統治、支配；君臨、治世
842,warfare,戦争状態、武力衝突；闘争
843,senator,上院議員
844,communist,共産主義者
845,summon,～を呼び出す、～を召集する
846,lure,魅力；おとり
847,welfare,幸福、繁栄、福祉；生活保護
848,crime,（刑法上の）犯罪
849,prison,刑務所；拘置所
850,famous,有名な
851,public,公の；公開の；公的な
852,state,状態；国家、州；威厳；地位、身分
853,political,政治の、政治的な、政治に関する
854,work,（不可算）仕事、労働；勉強、研究；職業、職場；（可算。通常～s）作品
855,agree,同意する、意見が一致する、賛成する；体質に合う
856,cause,原因；主義主張；理由；大義名分、目的
857,insist,～と主張する、～と言い張る；～を要求する
858,congress,（C～）（米国の）議会；国会；大会
859,illegal,不法な、違法な
860,statesman,政治家
861,nursery,託児所、保育園、子供部屋；園芸店、養殖場
862,prejudice,偏見；先入観
863,substitute,～を代わりに用いる、～を代用する
864,vocation,職業、天職；召命
865,facility,施設、設備；容易さ；才能
866,authority,権威、（...する）権限；権威者；当局；大家
867,diplomacy,外交；駆け引き
868,expert,専門家、熟達者
869,notwithstanding,それにもかかわらず
870,deduce,～を演えきする、（推理により結論）に達する
871,paradox,逆説；パラドックス；矛盾；矛盾しているようにみえること
872,criterion,（判断の）基準
873,administration,管理、経営、運営；行政、政府、政権
874,cabinet,（通例、the C～）内閣；飾り戸棚、キャビネット
875,dictator,独裁者
876,riot,暴動
877,sovereign,君主、主権者
878,municipal,地方自治体の；市町（営）の
879,baggage,手荷物；旅行荷物；（集合的に）（旅行時の）荷物
880,strength,力、強さ（のもと）
881,bomb,爆弾；大失敗
882,instrument,道具、器具；楽器
883,business,（自分自身に関する）事柄、こと；商売、事業；仕事、業務
884,case,実情；場合；事例；症例；症状；事件；事実；訴訟；容器
885,diet,（減量のための）食事制限、日常の食事；（the D～）国会
886,instance,例、実例；場合
887,line,職業；方針；短い手紙；線；列；（文の）行
888,VCR,ビデオデッキ（video cassete recorder の略）
889,shelf,棚
890,adequate,十分な、（ある目的のために）適切な
891,appropriate,適切な、ふさわしい
892,dense,（人が）密集した、密度の高い；濃い
893,drastic,徹底的な、思い切った、猛烈な、抜本的な
894,extravagant,仰々しい；金遣いの荒い、ぜいたくな
895,fertile,肥沃な；創造力豊かな；（動植物が）生殖力のある、多産な
896,flat,単調な；そっけない；平らな；断固とした；均一の
897,infinite,無限の
898,thorough,徹底的な、完全な；全くの；几帳面な
899,terrific,すばらしい；（量・程度が）ものすごい；恐ろしい
900,painstaking,骨の折れる、つらい；念入りな、丹精こめた
901,pulse,脈拍
902,cosmos,（the～で）宇宙；秩序；（植物）コスモス
903,muddy,泥の；濁った
904,particle,粒子；小さな粒
905,volcano,火山
906,thread,糸；（話などの）筋、続き
907,scissors,はさみ
908,apparatus,装置、器具
909,undue,過度の；不当な；支払期限が来ていない
910,proficient,熟達した、堪能な
911,dessert,（食後の）デザート
912,contain,～を中に入れている、～を収容する；～を抑える
913,feed,～にえさ［食べ物］を与える
914,incident,出来事、事件
915,bough,大枝.
916,material,材料、原料、資料、生地
917,matter,物質、物体；問題、事；困難；事情；重大さ
918,rate,割合、速度；料金
919,well-known,よく知られている
920,very,まさにその［この］、全くの
921,unit,単位
922,tough,かたい；丈夫な；難しい、困難な；不幸な
923,urge,～を駆り立てる ～に（・・・するよう）説得する ～を推進する、 衝動 欲求
924,press,～を押す ～を押し付ける ～に強く求める ～にアイロンをかける、 新聞 出版 押す事 アイロンがけをすること (the～)報道陣 報道機関
925,pressing,差し迫った
926,oblige,～に・・・をさせる ～に親切にする ～に恩恵を与える
927,incline,～を傾ける ～を（・・・する）気にさせる、 （心、ものが）傾く 傾斜する
928,compulsory,強制的な 義務的な 必修の
929,compel,～に（・・・することを）強制する ～を強いる
930,command,～に(・・・するよう）命令する ～を指揮する ～を支配する （景色など）を見渡す （同情、尊敬、指示など）を集める、 命令 支配 （言葉を）自由に操る力
931,claim,～を要求する （～である）と主張する （事故などが人名）を奪う、 （当然の権利としての）要求 （主張する）権利 主張
932,count,重要である
933,gross,総計の；大きな；ひどい
934,miniature,小模型、ミニチュア
935,sheer,まったくの；透き通った、薄い；切り立った
936,thermometer,温度計
937,stem,茎、幹；語幹
938,hydrogen,水素
939,oxygen,酸素
940,hygiene,衛生（学）
941,molecule,分子；微量
942,ozone,オゾン
943,abundant,豊富な；豊かな
944,badly,ひどく；とても；下手に；悪く
945,fast,（時計が）進んでいる；速い；しっかり固定した
946,empty,からの、人のいない、空いている、何もない
947,height,高さ、身長；高地；絶頂；丘、高台
948,range,範囲、幅；連なり
949,nearly,ほとんど；すんでのところで
950,accuse,～を訴える、～を非難する、～を責める
951,duty,義務、任務；責任；税、関税
952,contract,契約；契約書.
953,conference,会議；協議；協議会
954,editor,編集者
955,fabric,織物 布地 構造 骨組み
956,grain,穀物 穀粒 少量 微量 木目
957,mineral,鉱物 ミネラル、 鉱物を含んだ 鉱物の
958,profession,専門職 公言
959,professor,教授
960,project,企画 計画 事業 学習課題、 ～を計画する ～を映し出す ～を見積もる
961,sow,（種）をまく
962,trade,貿易 職業 商売、 貿易する 売買する、 ～を交換する ～を売買する
963,seemingly,うわべは 見たところは
964,utmost,最大の 最高の、 最大限
965,cough,咳をする
966,sneeze,くしゃみ
967,digest,～を消化する
968,dizzy,目まいがする、ふらふらする
969,heredity,遺伝
970,scar,傷跡、（けが等の）跡
971,surgeon,外科医
972,therapy,（薬や外科手術などを使わない）治療（法）
973,bishop,主教；司教
974,priest,司祭；聖職者
975,maternal,母の；母らしい
976,regular,定期的な、規則的な；一定の、いつもの；正規の
977,annual,年一回の、毎年の
978,ancient,古代の、昔の；昔からの；（物などが）とても古い
979,antique,骨董品の、年代物の；古風な
980,constant,絶え間のない；一定不変の
981,decade,10年間
982,immediate,即座の；すぐ隣の、近い；直接の
983,lately,最近.
984,recent,最近の；ごく新しい
985,last,最後の；この前の；最も（～）しそうにない
986,repeat,～を繰り返す；～を復唱する；～を口外する
987,constitute,～を構成する ～を制定する ～の構成要素である
988,decay,腐る 衰える、 腐敗 衰退
989,embody,（思想など）を具体化する
990,explode,爆発する ～を爆発させる
991,frame,校正 骨組み 骨格 枠 額縁、 ～を組み立てる ～を枠にはめる
992,pillar,柱 要所 中心的存在
993,gigantic,巨大な 莫大な
994,resolve,～を決心する ～を解決する ～を分析する、 決定する 決心する （・・・に）分解する
995,sew,～を縫う
996,stir,～をかき混ぜる ～をかき回す ～を奮起させる～を扇動させる
997,extraordinary,並外れた 普通ではない
998,mammal,哺乳動物；哺乳類
999,nourish,～を養う、～を育てる
1000,organ,（体の）器官；（政府などの）機関、組織；オルガン
1001,organism,有機体；生物；組織体
1002,disable,～の能力を奪う
1003,heal,（傷など）を治す
1004,slender,細長い、弱い、わずかな
1005,weary,疲れた；あきあきした
1006,ethnic,民族の、民族特有の
1007,restructure,～を再構築［再構成］する；～を再検討する
1008,ladder,はしご；出世への手段や道
1009,tongue,言語、言葉；舌；話しぶり
1010,throat,喉
1011,sight,視界；光景；見ること
1012,physical,身体の、肉体の；物質の、物理（学）の
1013,hand,筆跡；援助の手、人手；手；（時計などの）針
1014,female,女性の、雌の.
1015,male,男性の；雄の
1016,visible,目に見える
1017,vision,視力、視覚；洞察力；先見性、将来を見通す能力；幻、未来図
1018,blood,血；血統；血筋
1019,head,向かう、進む
1020,conventional,従来の；慣習的な；協定の
1021,agent,代理人 代理店 行為者
1022,sentence,～に判決を宣言する ～を刑に処す、 文 判決
1023,somewhat,いくらか
1024,flock,群れ、 群がる 集まる
1025,department,部門 課 局 売場 （米国政府の）省 学科
1026,pile,積み重ね 山 たくさん、 ～を積み重ねる ～を（・・・に）積む、 積みかさなる 殺到する
1027,subtle,微妙な かすかな 巧妙な 難解な 複雑な」鋭敏な
1028,steep,（坂などが）急な 険しい （値段が）法外
1029,scale,規模 段階 等級 縮尺 うろこ はかり、 ～を登る ～を（はかり・天秤で）はかる
1030,decent,まともな まあまあの 慎みのある かなりよい きちんとした
1031,drain,～の排水をする、～をからにする；～を消耗させる
1032,foster,～を育成する；（実子でない子供）を養育する；（希望など）を抱く
1033,needle,針、とがったもの
1034,manual,手動の、手の；（作業などが）人力を要する
1035,monopoly,独占、専売（権）；独占企業、専売会社
1036,organize,～を組織する；～体系づける；～を準備する；～を整える
1037,commodity,産物、商品、日用品
1038,blueprint,青写真［計画の具体的な進め方を説明するもの］、詳細な計画
1039,exquisite,この上なく優れた、たいへんすばらしい
1040,pathetic,哀れな；救いようのない
1041,age,年齢；老齢；時代；長い間
1042,infant,幼児、初心者
1043,childhood,少年［少女］時代；子供時代.
1044,youth,青春時代；若い人；若々しさ、未熟さ
1045,adopt,（方法など）を採用する；～を養子にする
1046,awake,～を眠りから覚ます
1047,challenge,やりがい（のある仕事）；課題；挑戦
1048,routine,決まり切った仕事、日課；いつもの手順
1049,chance,機会；可能性；見込み；偶然；（～s）形勢
1050,ceremony,儀式；式典；儀礼
1051,live,生きている；（演奏などが）生の；元気な、活気のある
1052,life,生物；生命；一生、人生；元気、活気；実物、本物
1053,spectacle,壮観 見もの 惨状 (～s)眼鏡
1054,athlete,運動選手 競技者 スポーツ選手
1055,race,人種 民族 人類 レース 競争 急ぐこと、 競争する 大急ぎでやる
1056,household,家族（全体） 世帯 家庭、 家庭の 家族の 家事の
1057,career,経歴 （一生続ける）職業 生涯 成功 出世
1058,offspring,子孫 成果 結果
1059,well-being,幸福 健康 福利
1060,funeral,葬式 葬儀
1061,elderly,初老の、 年配の
1062,perfume,香水；（快い）香り
1063,scent,（快い）香り；手掛かり
1064,stain,汚れ、しみ
1065,vogue,流行、人気
1066,fantasy,空想、幻想
1067,fancy,空想、（根拠のない）考え；好み；思いつき
1068,stimulate,～を刺激する；～を元気づける
1069,tempt,～を誘惑する、～を（...する）気にさせる；（神など）を怒らす
1070,illusion,錯覚、幻想、幻覚
1071,autograph,（有名人などの）サイン
1072,donation,寄付、寄贈
1073,geography,地理学；地形、地理
1074,continent,大陸；本土
1075,distant,遠い、距離のある；（関係が）冷ややかな
1076,globe,球体、世界、地球儀；（the～で）地球
1077,landscape,（陸地の）景色、風景、眺め
1078,summit,頂上、頂点；首脳会議、首脳
1079,moral,道徳上の；道徳的な、倫理的な、教訓的な
1080,promise,～を約束する；～の見込みがある
1081,truth,真実、事実；真理；誠実
1082,trust,～を信頼する、～を信用する；～に委託する
1083,responsible,責任がある、信頼できる;（～の）原因である
1084,border,境界（線） 国境 縁、 ～に接する ～に縁を付ける
1085,boundary,境界 限界
1086,colony,植民地 居留地 集落
1087,frontier,辺境 国境 先端（地） 最前線
1088,internal,内部の 国内の、 本質の (～s)内臓
1089,marine,海の 海に住む 海事の 海軍の、 海兵隊 海兵隊
1090,meadow,牧草地 草地
1091,path,小道 歩道 方針 生き方 進路
1092,peninsula,半島
1093,vacuum,真空（状態） 空虚 電気掃除機、 ～に掃除機をかける
1094,urban,都会の 都市の
1095,expedition,探検、遠征（ 隊）；迅速さ
1096,pavement,舗装；舗装道路
1097,avenue,大通り；（～に至る）道、手段、方法
1098,metropolis,首都；大都市
1099,orient,～の方向を見定める；～向けである；（～に）適応する
1100,domain,領土、領域
1101,province,（カナダ・豪州などの）州；（the～s）地方、田舎
1102,Antarctic,(the～）南極地方
1103,delinquency,非行
1104,exploit,（資源など）を開発する；～を搾取する、～を利用する
1105,exact,正確な、厳格な
1106,genuine,本物の；心からの；純粋な
1107,novel,目新しい；奇抜な
1108,ordinary,普通の、正規の；ありふれた、平凡な
1109,significant,重大な；意味のある
1110,right,ふさわしい、正当な；正しい；右の
1111,pure,純粋な；澄んだ；汚れのない
1112,peculiar,独特の、特有の；変な、妙な
1113,standard,基準、標準、水準
1114,vital,極めて重要な；不可欠な；生命に関する；活気のある
1115,worth,～の価値がある；～の財産を所有して
1116,linguistic,言語学（上）の 言葉の
1117,illustrate,～を例証する ～に挿絵を入れる ～を（図表などを使って）説明する
1118,illiterate,読み書きができない 無学の 教養のない
1119,version,～版 型 翻訳 説明 報告 表現 解釈
1120,revise,～を改定する ～を変更する
1121,theory,理論 学説
1122,theme,主題 テーマ 作文（の題） 主題歌
1123,sculpture,彫刻 彫刻作品、 ～を彫刻する、 彫刻する
1124,portrait,肖像画 描写
1125,masterpiece,傑作 代表作 名人芸
1126,monument,記念碑 遺跡 不滅の業績
1127,usage,使い方；語法；慣習
1128,document,文書（類）、書類、記録
1129,encyclopedia,百科事典
1130,enlighten,～を啓発する、～を啓蒙する；～を教える、～に知らせる
1131,plot,陰謀；（小説・劇などの）筋；小区画地
1132,statue,（彫）像
1133,geometry,幾何学
1134,legend,伝説、言い伝え；（絵などの）題、説明文；（地図、図表の）凡例
1135,renaissance,復興、復活；（the R ～）ルネッサンス、文芸復興
1136,prose,散文（体）
1137,found,～を設立する、～を（...の基礎の上に）作る
1138,disappear,消える、見えなくなる
1139,construct,～を組み立てる；～を建設する；（文・理論など）を構成する
1140,erect,（建物など）を建てる
1141,protect,～を保護する；～を守る
1142,recover,（失っていたもの）を取り戻す；～を回復する
1143,tear,～を引き裂く.
1144,ruin,～を破滅させる；～を台無しにする；～を崩壊させる
1145,mend,～を修理する、～を修繕する；（行儀など）を改める
1146,steady,しっかりした、固定した；変わらない；落ち着いた
1147,shape,形、姿；調子、状態
1148,structure,建物；構造、構成、組織、体系
1149,biography,伝記 電気文字
1150,fable,たとえ話 つくりばなし
1151,heritage,遺産
1152,canal,運河 水路
1153,barn,納屋 物置
1154,compose,～を構成する （文章や曲）を作る ～の心を落ち着ける
1155,establish,～を設立する ～を確立する
1156,spoil,～を台無しにする ～を甘やかしてダメにする ～を大事にする、 台無しにする （食物などが）だめになる、 強奪犯 略奪品
1157,restore,～を復活させる ～をもとの状態に戻す ～を回復する
1158,collapse,崩壊；衰弱；挫折
1159,fragment,破片、かけら
1160,compile,～を編集する
1161,modify,～を修正する；～を緩和する
1162,synthesis,総合、統合、合成
1163,knit,～を編む、～を組み合わせる；（まゆ）をよせる
1164,mold,～を型に入れて作る；（人格など）を形成する
1165,shelter,避難（所）、隠れ家、住まい
1166,condominium,｛米｝（分譲）マンション［共同住宅］
1167,suite,（ホテルの）スイートルーム；（オフィスビルなどの）一室；随行員
1168,skyscraper,超高層ビル
1169,afford,～を持つ（買う）余裕がある；～を与える、もたらす
1170,allowance,小遣い；手当；許可
1171,capital,大文字；資本；首都、州都
1172,poverty,貧困、不足、不毛
1173,wealth,財産、富；裕福；豊富な～；資源
1174,economy,経済、節約
1175,cost,（金額など）がかかる；～に犠牲を払わせる
1176,consume,～を消費する；～を使い果たす
1177,sum,合計；金額；大意
1178,earn,（働いてお金など）を稼ぐ、（名声など）を得る
1179,finance,～に融資する、～に資金を提供する
1180,provide,～を供給する；～に備える；～の規定を設ける
1181,immigrant,（他国からの）移民 （入国する）移民
1182,import,～を輸入する ～を取り入れる、 輸入（品）
1183,export,～を輸出する ～を外国に広める、 輸出 (～s)輸出品
1184,transfer,～を移動する ～を転任させる ～を（・・・に）譲渡する、 移転する 乗り換える、 移転 移動 乗り換え 振り込み 譲渡
1185,expense,費用 支出 経費 犠牲
1186,bill,請求書 法案 紙幣、 ～（人）に（支払を）請求する
1187,budget,予算 経費 予算案、 （時間、金額）をわりあてる、 予算を立てる
1188,debt,借金 恩義
1189,invest,～を投資する ～をつぎ込む （人）に（～を）与える
1190,enrich,～を豊かにする
1191,recession,景気後退
1192,revenue,（国家などの）歳入；収入
1193,transaction,（業務の）処理；取引；（～ｓ）議事録、学会などの紀要
1194,stock,在庫品；備え；株、株式
1195,barter,～を物々交換する
1196,deposit,預金；手付金、保証金
1197,charge,～に（料金などを）を請求する；～を非難する；～を告発する；（仕事など）を託す
1198,injection,注射；投入
1199,subdue,～を征服する；（感情）をおさえる；（声・照明）を弱める
1200,frugal,倹約な；質素な、貧弱な
1201,choice,選択肢；選択；選ぶこと；選ばれた物［人］
1202,keen,鋭い；鋭敏な、頭の切れる；熱心な
1203,loose,ゆるい；解き放たれた；束ねていない；節度のない
1204,subjective,主観的な
1205,casual,偶然の；気取らない；思いつきの；不用意な
1206,distinguish,～を区別する.
1207,admit,～を認める；～が（学校や組織などに）入ることを許可する
1208,justify,～を正当化する、～を弁明する
1209,fit,ふさわしい；適当な、適した；体の調子がよい
1210,label,～にラベルをはる；（人）にレッテルをはる
1211,suit,～に適する、～に似合う
1212,merit,長所 功績 （すぐれた）価値 賞点
1213,precious,高価な 貴重な 大切な
1214,indispensable,必要不可欠な
1215,brilliant,輝いた 素晴らしい 優秀な 鮮明な
1216,discriminate,差別する 識別する、 ～を区別する
1217,priceless,金では買えない とても高価な とても貴重な
1218,valid,妥当な 正当な 有効な 合法的な 効力がある
1219,secure,安全な 安心な 確保された 確実な、 ～を確保する ～を守る
1220,discern,～を見分ける
1221,credible,信頼できる
1222,deserve,～に値する ～を受ける価値がある
1223,shabby,ぼろぼろの、みすぼらしい
1224,futile,無駄な、無益な
1225,crucial,決定的な；重要な
1226,neat,きちんとした；手際のよい；すばらしい
1227,magnificent,壮大な、素晴らしい、荘厳な、華やかな
1228,assess,～を評価する；～を見積もる
1229,esteem,～を尊重する、～を（...だと）思う
1230,evaluate,～を評価する
1231,malice,悪意、敵意
1232,hypocrisy,偽善、偽善行為
1233,brain,脳、頭脳；（the ～）知識人［秀才］；（～s）知能、知的顧問
1234,breathe,呼吸をする
1235,deaf,耳が聞こえない、耳を貸さない
1236,fever,熱、高熱；熱狂
1237,thirsty,のどの渇いた；渇望する
1238,medicine,薬；医学
1239,weigh,～の重さを量る；～をよく考える；(be weighed) ～に打ちひしがれる
1240,seed,種をまく
1241,poison,毒、毒薬；弊害
1242,insect,昆虫
1243,temperature,温度、体温；高熱
1244,drug,薬 麻痺
1245,virus,ウィルス コンピュータウィルス
1246,laboratory,実験室 研究所 研究室
1247,cancer,癌 （社会などの）害悪
1248,handicapped,"身体障害の ハンディがある, 身体障害者"
1249,cure,～を治療する ～治す、 治療法 治療 解決策
1250,nutrition,栄養 滋養物
1251,pale,顔色が悪い （色の）淡い 薄い 迫力のない
1252,starve,飢える 餓死する 非常に腹が減る 渇望する
1253,strip,"～から（・・・を）はぎ取る ～を裸にする, 衣服を脱ぐ 裸になる"
1254,stress,～を強調する、 ストレス 緊張 圧力 強調 重点 アクセント
1255,subsequent,後の、次の
1256,spontaneous,自発的な、自然に起きる；進んでする
1257,simultaneous,同時の
1258,retrospect,追憶、思い出
1259,precede,～に先行する、～に優先する、～の前に（...を）置く
1260,postwar,戦後の
1261,meanwhile,その間に；一方では
1262,medieval,中世の；古めかしい
1263,plague,伝染病、疫病；災い、不幸
1264,wrinkle,しわ；妙案、助言
1265,appeal,訴える
1266,exchange,～を交換する、～を交換し合う；～を両替する
1267,pay,割に合う；見返りがある；利益をもたらす；（～の）代金を払う
1268,offer,～を提供する；（～すること）を申し出る；～を差し出す
1269,beg,～を請い求める；～に（～するように）懇願する
1270,reject,～を拒絶する、～を却下する.
1271,accept,～を受け取る；～を受け入れる；（考え、意見など）を認める
1272,require,～を必要とする；～を要求する
1273,refuse,～を拒絶する、～を（きっぱりと）断る
1274,prohibit,～を禁止する
1275,furnish,～に供給する、～に備え付ける
1276,study,書斎；研究；勉強
1277,knowledge,知識
1278,intelligent,知能の高い、頭の良い
1279,intellect,知性、知力
1280,attain,～を達成する；～に到達する
1281,hardly,ほとんど～ない
1282,likely,～しそうな；ありそうな；【限定用法】本当らしい、適当な
1283,apt,（～する）傾向のある、～しがちな；適切な；ふさわしい
1284,add,～を付け加える；～と付け加えて言う；～を合計する
1285,account,説明・釈明をする；割合を占める；原因となる
1286,lack,～を欠いている［持っていない］
1287,limit,～を制限する
1288,entire,全体の、全ての、完全な
1289,decrease,減少する、低下する.
1290,mere,単なる、ほんの
1291,obvious,明らかな、見てすぐわかる、分かり切った
1292,dull,（刃や痛みなどが）鈍い；退屈な；頭の悪い
1293,extreme,極端な、極度の
1294,namely,すなわち、つまり
1295,agriculture,農業
1296,industry,産業、工業; 勤勉
1297,bent,好み；傾向
1298,tradition,伝統、慣習；言い伝え
1299,practice,実行；練習；慣例；（医師や弁護士などの）業務
1300,harsh,厳しい 辛辣な どぎつい 不快な
1301,misfortune,不幸 不運
1302,seize,～をつかみ取る ～を差し押さえる ～を理解する (be ～ed with[by])（感情など）に襲われる
1303,refuge,避難 保護 避難所 隠れ家
1304,hardship,苦労 苦難
1305,famine,餓死 飢饉 食糧不足
1306,hazard,危険、 ～を危険にさらす
1307,available,利用できる 入手できる （人が）面会可能な 手の空いている
1308,contribute,貢献する 寄与する、 ～を寄付する ～を述べる
1309,register,～を記録 登録する ～を書留にする （感情など）を表す、 登録 記録[簿] レジ
1310,load,(荷など)を積む ～に詰め込む、 積み荷 重さ 負担 多量 多数
1311,resident,住民 居住者
1312,explore,～を探検する ～を調査する
1313,destination,目的地
1314,context,(文の)前後関係 文脈 背景 状況
1315,criticism,評論 批評 避難 批判
1316,chapter,(書類などの)章 支部 分会
1317,fairy,妖精の
1318,myth,神話 社会通念 作り話
1319,describe,～を描写する ～を（・・・だと）言う ～を説明する
1320,punctual,時間を厳守する 素早い きちょうめんな
1321,prior,(時間・順序が)前の 先の 優先する
1322,primitive,原始の 原始的な 単純な
1323,initial,最初の 初期の、 (姓名・語の)頭文字
1324,era,時代 年代
1325,epoch,新時代 時代
1326,dawn,夜明け (新しい時代などの)始まり、 (事実などが)わかり始める
1327,current,現在の 最新の 通用している、 流れ 傾向 潮流
1328,beforehand,前もって 事前に
1329,inflict,（苦痛、損害、罰など）を与える
1330,chaos,混乱；混とん
1331,catastrophe,惨事；大惨事；大災害；破局
1332,adversity,逆境；不運
1333,grab,～を不意につかむ、～をひったくる
1334,catch,～に間に合う；～に感染する；（～が...しているの）を見つける；～をつかむ
1335,capture,～を捕らえる
1336,endow,～に授ける、～に与える、～に寄付する
1337,mass,かたまり、多数［量］；（the ～es）一般大衆、庶民
1338,diameter,直径
1339,dimension,大きさ；特性、特質、局面
1340,equivalent,同等の、（～に）相当する
1341,virtually,実質的には、ほとんど
1342,massive,（大きさ・程度・量などが）極めて大きい
1343,moderate,適度な、節度のある；（考え方・思想が）穏健な
1344,unanimous,全員一致の；同意見の
1345,venture,冒険；ベンチャービジネス
1346,white-collar,オフィス労働の；サラリーマンの
1347,weave,～を織る；～をまとめ上げる
1348,dispense,～を分配する；（薬）を投与する；～を免ずる
1349,warehouse,倉庫；問屋
1350,textile,織物、布地
1351,reap,～を収穫する、～を刈り入れをする；（報いなど）を受ける
1352,craft,技術；商売；手工業；悪知恵；船舶、飛行機
1353,cattle,（集合的に）畜牛、牛
1354,ambulance,救急車
1355,calamity,災難；大惨事
1356,exterminate,～を根絶する
1357,menace,脅威
1358,smother,～をもみ消す；～を厚く包む；～を窒息させる
1359,perpetual,永久の；絶え間のない
1360,drudgery,骨の折れる仕事；つまらない仕事
1361,skill,技能、技術；熟練
1362,access,接近；（情報や施設などを）利用する権利
1363,sense,感覚；判断力、センス；良識；正気、意識；意味；価値、効果
1364,gift,天賦の才能；贈り物
1365,aware,（～に）気づいている、知っている
1366,curious,好奇心の強い；好奇心をそそる；奇妙な
1367,engage,～を従事させる、～を雇う、～をひきつける
1368,interest,関心、興味；利害（関係）；利子、利息
1369,eager,熱心な；熱望して、切望して
1370,amuse,～を楽しませる
1371,bore,～を退屈させる、～をうんざりさせる
1372,imagine,～を想像する、～を心に描く
1373,deliver,～を配達する、（演説など）をする、（子）を出産する
1374,passage,通行、通路；（文章や曲の）一節；経過、通過；廊下；旅行
1375,carriage,馬車；うば車（アメリカ用法）；〈鉄道の〉客車（イギリス用法）
1376,vehicle,乗物、輸送機関；手段、媒体
1377,traffic,交通、交通量.
1378,travel,通う；伝わる；次々に見る（思い浮かべる）；進む；旅行する
1379,transport,～を輸送する; （be～ed)夢中になる、いっぱいになる
1380,train,列；列車；連続、結果；衣服のすそ
1381,wander,さまよう；迷う
1382,park,～を駐車させる
1383,square,正方形;（四角い）広場；２乗
1384,jam,～をふさぐ；～に詰め込む；～を妨害する
1385,award,～を授与する、～を与える
1386,equal,等しい、匹敵する；耐えられる
1387,fame,名声
1388,honor,名誉、敬意、光栄
1389,unfair,不公平な、不当な；慣行に反した
1390,game,獲物；ゲーム、試合
1391,match,試合；マッチ
1392,inferior,（～より）劣って、（～より）下級の
1393,superior,より優れて、優れた；上級の、上の；高慢な
1394,defeat,～を打ち負かす、～に勝つ；～をくじく
1395,succeed,成功する、うまくいく；相続する、継承する
1396,cruel,残酷な；悲惨な；ひどい
1397,evil,悪い；有害な
1398,rude,無礼な、失礼な；粗雑な；未加工の
1399,infamous,悪名高い；不名誉な
1400,misunderstanding,誤解.
1401,mistake,～を間違える；～を誤解する
1402,FALSE,誤った、間違った；うその、偽りの、真実とは違う
1403,correct,正しい；適切な；正確な
1404,deceive,～をだます
1405,fine,～に罰金を科する
1406,judge,～を判断する；～であると判断する；～を裁く
1407,advantage,利益、利点、有利な立場
1408,reality,現実（性）、実体；本質
1409,doubt,疑い、疑念.
1410,belief,信念；確信；信じること；（～に対する）信頼
1411,aspect,側面；外観；顔つき
1412,annoy,～をいらいらさせる；～を悩ます
1413,forgive,（罪などをおかした人）を許す
1414,harm,損害、危害
1415,hurt,～の心を傷つける、～を傷つける
1416,ignore,～を無視する.
1417,struggle,苦闘、奮闘、努力、争い
1418,worry,心配する、悩む
1419,figure,姿、容姿；人物；数学、計算；図、図形
1420,break,休憩； 破損、骨折
1421,consist,（～から）成る［構成されている］；（～に）ある
1422,create,～を創造する
1423,decorate,～を飾る.
1424,destroy,～を破壊する、～を滅ぼす；～を殺す
1425,develop,～を発達させる、～を開発する、～を発育させる
1426,transform,～を変形させる、～を一変させる
1427,rest,残り（のもの）；休息、休憩；台；停止、静止
1428,disease,病気
1429,risk,危険、冒険
1430,maintain,～を主張する；～を維持する；（家族など）を扶養する；～を整備する
1431,repair,～を修理する；（健康など）を回復する; ～を償う
1432,process,過程、工程；方法、手順；経過、進展
1433,machinery,（集合的に）機械；組織
1434,goods,商品、品物
1435,artificial,人工の、人造の；不自然な
1436,invent,～を発明する；（話）をでっち上げる
1437,manufacture,製造；（～s）製品
1438,produce,～を製造する；～を生産する；～を産む；～を創作する；～を提出する
1439,task,仕事、任務
1440,paper,新聞；論文、レポート；証明書；紙
1441,wear,～をすり減らす、～を使い果たす；～を疲れさせる；～を身につけている
1442,waste,～を浪費する、～を無駄にする；～を荒廃させる；～を消耗させる
1443,yield,～を産出する；～を生ずる；～を明け渡す
1444,represent,～を表す［意味する］；～を代表する；～を描写する
1445,solid,個体の 頑丈な 確実な 充実した 濃い
1446,rigid,堅い 動かない 柔軟性のない 厳格な
1447,voluntary,自発的な 自然に生じる 任意の
1448,tame,飼いならされた 柔順な 耕作された、 ～を飼いならす (自然のちからなど)を制御する (色彩など)を和らげる
1449,flexible,柔軟な 柔らかい 融通のきく
1450,vague,あいまいな ぼんやりした うつろな かすかな
1451,stereotype,固定観念 型にはまった人[物]、 ～を型にはめる ～を形式化する
1452,tender,柔らかい もろい 弱い 優しい 親切な 触ると痛む 敏感な
1453,firm,堅固な しっかりした 安定した、 会社
1454,glittering,キラキラ輝く
1455,bright,明るい 輝いている 頭が良い
1456,positive,自信のある 肯定的な 積極的な 明確な 疑いのない
1457,negative,否定的な 打ち消しの 消極的な 負の、 否定 (写真の)ネガ
1458,conflict,(～との)闘争 衝突 (意見などの)対立 不一致、 (～と)矛盾する
1459,confront,～(困難など)に直面する ～と(対立関係で)向かい合う
1460,resist,～に抵抗する ～に敵対する ～に耐える
1461,conquer,～(領土など)を征服する ～を占める ～を克服する
1462,contradict,～と矛盾する (人の考えなど)を否定する
1463,coarse,粗雑な きめの粗い 下品な 卑猥な
1464,incredible,信じがたい 途方もない とてもすばらしい
1465,silly,愚かな バカバカしい
1466,ridiculous,ばかげた
1467,vain,無駄な 骨折り損の むなしい 価値のない うぬぼれの強い
1468,complicated,複雑な 入り組んだ
1469,complex,複雑な 複合的な、 合成物 脅迫概念 複合施設
1470,commonplace,平凡な つまらない 陳腐な、 平凡なこと 陳腐な言葉
1471,credit,信用 名誉 功績 クレジット (大学などの)単位、 ～を信じる
1472,prime,最も重要な 第一級の 主な 最初の
1473,splendid,豪華な 立派な
1474,burglar,泥棒 強盗
1475,conscience,良心
1476,guilt,罪 有罪 罪悪感
1477,arrest,～を逮捕する ～(の進行)を止める、 逮捕
1478,respect,点 細目 尊敬 重視 関心 関連、 ～を尊敬する ～を尊重する
1479,murder,～を殺害する、 殺人
1480,cheat,～をだます、 いかさまをする 不正をする、 不正行為 カンニング 詐欺師
1481,envy,～をうらやむ ～をねたむ、 ねたみ うらやむ気持ち
1482,insult,～を侮辱する ～をはずかしめる、 侮辱
1483,sorrow,悲しみ 後悔
1484,cheer,～を元気付ける ～にかっさいを送る、 元気を出す 歓声を上げる、 歓呼 励まし 喜び 元気
1485,confide,信頼する、 (秘密など)を人に打ち明ける ～を(～～～に)ゆだねる
1486,mercy,慈悲 親切 幸運 情け
1487,hostile,敵意のある 敵対的な 反感をもった 敵の
1488,hospitable,親切にもてなす 快く受け入れる 快適な
1489,grace,気品 優雅さ 好意 神の恵み 慈悲
1490,console,～を慰める
1491,bless,～を祝福する ～に恵みを与える
1492,grave,重大な 威厳のある 真面目な 厳粛な、 墓場
1493,rational,合理的な 理性的な
1494,radical,根本的な 急進的な 過激な
1495,eliminate,～を除去する ～を完全になくす ～を取り除く
1496,precise,正確な 明確な まさにその
1497,inevitable,避けられない 必然的な
1498,implicit,暗黙の
1499,feeble,弱々しい ひ弱な
1500,ugly,醜い 不快な けしからぬ
1501,rent,賃貸料 使用料 家賃、 ～を賃借りする ～を賃貸しする
1502,wage,(～s)賃金 給料
1503,promote,～を促進する ～を奨励する ～を昇進させる
1504,mechanical,機械的な 機械の、 メカニズム
1505,distribute,～を分配する ～を配布する ～を配送する
1506,corporation,企業 会社
1507,broadcast,～を放送[放映]する ～を言いふらす 吹聴する、 放送する、 放送された、 放送
1508,advertise,～を広告する ～を宣伝する ～を公にする、 広告 宣伝する 自己宣伝をする
1509,formidable,恐ろしい (仕事などが難しくて)手に負えない
1510,stink,悪臭がする (ひどく)臭い、 悪臭
1511,vulgar,下品な 粗野な 悪趣味の
1512,ambiguous,(色々な意味に取れる)あいまいな
1513,affirmative,肯定的な、 肯定 賛成
1514,fragile,壊れやすい もろい ひ弱な
1515,potent,力強い (薬などが)効力がある
1516,potential,可能な 潜在的な (発展、発達の)可能性がある、 可能性 潜在能力 潜在性
1517,stiff,堅い こわばった 断固とした 法外な
1518,capricious,気まぐれな
1519,ingenious,発明の才に富む 巧妙な 独創的な 利口な
1520,obstinate,頑固な しつこい
1521,mobile,動きやすい 移動可能な
1522,pedestrian,歩行者、 歩行者用の
1523,transition,推移 移り変わり 過渡期 変わり目
1524,emigrant,(他国への)移民
1525,migrate,移住する (鳥などが)渡る
1526,transplant,～を移植する ～を移動させる、 移植
1527,transmit,～を送る ～を伝える ～を伝染させる
1528,rush,急ぐ 急いでする、 (人)をせかす ～を急いでやる ～を突破、突進する、 あわただしさ
1529,excursion,遠足 団体の小旅行 脱線 逸脱
1530,locomotive,機関車
1531,yacht,ヨット クルーザー
1532,celebrate,～を祝う (人)を褒め称える ～を賛美する
1533,applaud,～に大きな拍手を送る
1534,collide,衝突する
1535,contend,争う 議論する、 ～を主張する
1536,opponent,(競技、討論などの)相手 敵 対抗者 反対者
1537,rival,競争相手 ライバル、 ～に匹敵する ～と互角に戦う
1538,strive,（～しようと）努力する
1539,revenge,～に復讐をする ～のあだを討つ、 復讐
1540,blunder,大失敗する、 大失敗
1541,avenge,～のあだを討つ
1542,humanity,人類 人間性 人間らしさ (the ～ies)人文科学
1543,humane,思いやりのある 人道的な
1544,err,誤りを犯す
1545,vice,悪徳 悪いこと、 (官職名の前につけて)副～ ～代理
1546,virtue,美徳 長所 (薬などの)ききめ
1547,bully,いじめ いじめっこ、 ～をいじめる
1548,abuse,～を誤用する ～を乱用する ～を虐待する、 虐待 乱用 誤用
1549,bias,偏見、 ～に偏見を持たせる ～に偏見をもたらす
1550,juvenile,青少年の 少年の、 少年 少女 青少年
1551,orphan,孤児
1552,amateur,素人 アマチュア、 未熟な アマチュアの
1553,compassion,おもいやり 哀れみ 同情
1554,charity,慈善(行為) 思いやり 慈善団体[基金] 慈善事業
1555,worship,～を崇拝する ～を賛美する、 礼拝に出る、 賛美 尊敬 崇拝
1556,animate,～を活気づける ～に生命を吹き込む
1557,cherish,～を大事にする ～を心に抱く ～を（ずっと）大事にする
1558,dedicate,～を捧げる
1559,enchant,～を魅了する ～に魔法をかける
1560,inspire,～を奮い立たせる ～を励ます ～に吹き込む ～に感動を与える
1561,allot,～を～に分配する ～を～に割り当てる ～を充当する
1562,ornament,装飾(品) 飾り
1563,metaphysical,形而上学的な きわめて抽象的な
1564,cottage,別荘 (郊外・田舎の)小さな家
1565,auditorium,講堂 公会堂 観客席
1566,cathedral,大聖堂
1567,corridor,(建物の)老化 通路
1568,ceiling,天井 (価格などの)上昇
1569,mess,混乱 取り散らかした状態、 ～を散らかす
1570,smash,～を粉々にする ～をバシッと打つ、 粉々になる 衝突する
1571,dispose,～を配列する ～を（～する）気にさせる
1572,transparent,透明な 見え透いた 明白な わかりやすい 率直な
1573,manifest,～を明らかにする ～を表す、 明らかな はっきりした
1574,illuminate,～を照明する ～を解明する
1575,eruption,噴火 発生 勃発
1576,comet,彗星
1577,barometer,気圧計 (世の中の動きなどを示す)指標 バロメーター
1578,gene,遺伝子
1579,germ,細菌
1580,worm,(ミミズなどの)虫
1581,botany,植物学
1582,cell,細胞 個室 (刑務所の)独房 電池
1583,stout,頑丈な しっかりした 太った 勇敢な
1584,prescribe,(薬、治療など)を処方する (規則など)を指示 規定する
1585,epidemic,伝染病の流行 (良くないことの)流行 蔓延、 (病気が)流行性の
1586,fiction,小説 フィクション 作り話 虚構
1587,conversation,会話
1588,article,記事 論文 品物 物 (契約などの)条件 冠詞
1589,pronounce,～を発音する ～を断言する ～を宣言する
1590,note,～に注意する ～に気づく ～に言及する ～を書き留める。 メモ 短い手紙 紙幣 注釈 記録 音符 (声の)調子
1591,mention,～だと述べる ～に言及する。 言及 軽く話題に触れること
1592,accent,なまり アクセント
1593,refer,言及する 参照する 調べる 呼ぶ。 ～に差し向ける
1594,tell,～を区別する ～を見分ける。 効く 影響する 効果がある
1595,translate,～を翻訳する ～を解釈する ～を(～～～に)移す
1596,utter,(言葉など)を発する ～を表現する。 全くの 徹底的な
1597,display,～を陳列する ～を示す ～を見せびらかす。 陳列 展示 (感情などを)表に出すこと
1598,art,芸術 美術 技術 こつ (～s)人文科学
1599,detail,細部 詳細 細かい部分
1600,confidential,内密の 機密の
1601,concrete,具体的な 有形の。コンクリート
1602,innumerable,無数の 数え切れないほどの
1603,exceed,～を超える ～より勝る
1604,exaggerate,～を誇張して言う
1605,savage,未開の 野蛮な 荒涼とした。野蛮人 野蛮な人
1606,curriculum,カリキュラム (学校の)教科課程
1607,concise,(言葉～文体などが)簡潔な
1608,bold,大胆な 怖いもの知らず ずうずうしい
1609,eccentric,常軌を逸した 一風変わった 変な
1610,insane,狂気の 正気ではない 非常識な
1611,charm,魅力 まじない お守り。～をうっとりさせる ～に魔法をかける ～を魅惑する
1612,perplex,～を当惑させる ～を悩ませる ～を複雑にする
1613,preoccupied,夢中になった 心を奪われている
1614,tedious,退屈な
1615,clumsy,(動作～態度などが)ぎこちない 不細工な (手先などが)不器用な
1616,sophisticated,洗練された 精巧な 教養のある
1617,lecture,講義 講演 説教。講義[講演]する。～に説教する
1618,letter,文字 手紙、 (～s)文字 学識
1619,poet,詩人
1620,vocabulary,語彙
1621,saying,ことわざ 格言 発言
1622,proverb,ことわざ 格言
1623,subject,主題 話題 教科 国民 家来 主語 被験者。 (～の)支配下にある (～に)かかりやすい (～を)受けやすい
1624,tale,話 物語
1625,thought,考え 思いつき 思想 思考 考えること 思いやり
1626,verbal,言葉の 言葉による 口頭の
1627,culture,文化 教養 洗練 耕作 栽培 飼育 芸術 文学
1628,prepare,～を用意する ～の支度(覚悟 心構え)をさせる ～を訓練する。準備する 覚悟する
1629,faculty,能力 才能 機能 (大学の)学部 教授陣
1630,particular,特定の 格別の 著しい 好みがうるさい 綿密な。個々の項目 (～s)詳細
1631,unexpected,思いがけない 不意の
1632,innovation,刷新 大発明 革命的な変化
1633,emerge,現れる
1634,abrupt,突然の ぶっきらぼうな
1635,burst,爆発する 突然始まる 破裂する。～を破裂[爆発]させる
1636,rouse,～を目覚めさせる ～を奮起させる
1637,coincide,一致する 同時に起こる
1638,dreadful,ひどい いやな 恐ろしい
1639,laborious,(仕事などが)骨の折れる 大変な 勤勉な 難解でおもしろくない
1640,fabulous,すばらしい
1641,unprecedented,先例のない 無比の
1642,prominent,有名な 卓越した 目立った 突き出た
1643,ripe,(果実などが)熟した 期が熟した 円熟した
1644,stern,厳格な 過酷な
1645,grim,きびしい 冷酷な 気味悪い
1646,vulnerable,傷つきやすい 攻撃されやすい
1647,nasty,不快な いやな 意地悪な 卑劣な
1648,folly,愚かさ 愚行
1649,respond,答える 反応する
1650,propose,～を提案する (～に結婚)を申し込む
1651,publish,～を出版する ～を発表する
1652,consider,～をよく考える ～を(～と)みなす ～をよく検討する ～を考慮する
1653,damage,損害 被害。 ～に損害(被害)を与える
1654,instruct,～に教える ～に指示する
1655,literal,文字通りの 文字の 正確な
1656,quest,探求。探し回る 追求する
1657,accurate,正確な 精密な 狂いのない
1658,school,学派 (魚などの)群れ 学校 専門学部。～を教育する
1659,scholar,学者
1660,philosophy,哲学 原理 人生観 考え方
1661,tone,音色 音調 調子 語調 気風 色合い。～をある調子にする
1662,alternative,二者択一 選択肢 代わりになるもの。新しい 型にはまらない どちらか一つを選ぶべき 代わりの
1663,sword,剣 刀 武力 権力 戦争
1664,fur,毛皮(製品)
1665,fluid,流動体。 流動体の 流動性の
1666,motive,動機 原動力となる
1667,wit,知力 機知 機転 ウィット 機知に富む人 機転のきく人 (～s)平静
1668,mental,心の 知的な 知能の 頭の中で考える 精神病の
1669,string,ひも 糸 一連 一列
1670,prosper,繁栄する 成功する
1671,bet,～を賭ける ～（という結果）に賭ける きっと～になると思う、 賭け
1672,controversy,論争 議論
1673,odds,(優劣などの)差 勝ち目 可能性
1674,triumph,勝利 大勝利、 勝利を得る 勝利を喜ぶ
1675,intent,熱中して 集中した、 意図 目的
1676,feat,偉業 妙技 芸当
1677,certificate,証明書 免許状
1678,toll,使用料 通行料 犠牲(者)
1679,tariff,関税 運賃 料金表
1680,fortnight,2週間
1681,climate,気候 風土 風潮
1682,humid,湿気の多い 湿った
1683,solar,太陽の 太陽光線を利用した
1684,crop,作物 収穫(量) ～を収穫する。(作物が)できる
1685,fuel,燃料
1686,technology,科学技術 科学的方法
1687,technique,技術 技法 手法 コツ
1688,tool,道具 工具 商売道具 手段
1689,way,道 進路 方向 付近 距離 やり方 方法 習慣 観点。ずっと はるかに
1690,architecture,建築学 建築物
1691,certain,ある(ひとつの[決まった]) 。 確信して (事が)確実な (～を)確信している
1692,manage,～を経営する ～を管理する ～を何とかやり遂げる まんまと～する
1693,sign,～に署名する ～に合図する。 符合 記号 しるし 兆候 身振り 合図 標識
1694,reserve,～を取っておく ～を予約する。蓄え 備蓄 遠慮
1695,preserve,～を保存する ～を保つ ～を保護する ～を保存加工する
1696,accommodate,～を宿泊させる ～を収容する ～をもてなす
1697,fatigue,疲労 疲れ。 ～を疲れさせる
1698,exhaust,～を疲れさせる ～を使い果たす
1699,drown,～を溺死させる。溺れ死ぬ ずぶ濡れになる
1700,soak,～を浸す ～をびしょぬれにする
1701,exhibit,～を展示する ～を示す (感情など)を表す[見せる]
1702,gangster,やくざ ギャング（の一人）
1703,corrupt,墜落した わいろのきく、 ～を墜落させる ～を買収する
1704,anguish,(精神的な)苦痛 非常な悲しみ
1705,torture,拷問 苦痛、 ～を拷問にかける ～をひどく苦しめる (言葉や経験)を曲解する
1706,gender,(社会的・文化的観点からの)性 性の差 性別 (文法の)性
1707,masculine,男性の 男らしい
1708,mortal,死ぬ運命にある 致命的な 人間の、 （～s）人間
1709,barbarian,野蛮な 未開の、 未開人
1710,radioactive,放射性の
1711,beverage,飲物(水を除くすべての飲み物[ジュース、コーヒー、アルコールなど])
1712,vapor,蒸気 実体のないもの
1713,bare,裸の むき出しの (物事などが)ありのままの ぎりぎりの 最低限の
1714,huge,巨大な 莫大な
1715,rough,ざらざらした 大ざっぱな おおまかな乱暴な
1716,thin,薄い 細い やせた まばらな 乏しい 水っぽい
1717,tight,きつい (予定などが)ぎっしり詰まった ケチな 厄介な 厳格な。 堅く しっかりと きつく 十分に
1718,tiny,とても小さな ごくわずかの
1719,thick,厚い 太い 込み合った (液体～気体が)濃い
1720,amount,総計 合計 総額 量 額。総額(～～～に)達する 結局(～～～に)なる
1721,brief,短時間の 簡潔な 簡単な。(人)に(状況などを)報告[発表]する 要約する。簡単な声明 要約
1722,smooth,なめらかな 順調な。～をなめらかにする
1723,deliberate,慎重な 意図的な 落ち着いた ゆっくりの。～を熟考する
1724,former,前の 以前の 前者の。(the～)前者
1725,pioneer,先駆者 開拓者。～を開拓する ～の先駆けとなる
1726,bearing,態度 関係 方向 忍耐
1727,reward,報酬 見返り 褒美。(人)に報いる ～に報酬を与える
1728,bother,～を困らせる ～に面倒をかける ～を悩ます。思い悩む 心配する。面倒 (a～)悩みの種
1729,forbid,～を禁止する ～に(～することを)禁じる
1730,privilege,特権 特典 名誉。～に特権を与える
1731,opportunity,機会 好機 チャンス
1732,rebel,反逆者 反抗者 謀反人。反乱を起こす 反抗する
1733,overwhelm,～を圧倒する ～を困惑させる
1734,trap,わな 策略、 ～を罠で捕らえる ～をだます ～を閉じ込める
1735,tact,こつ 機転 手触り
1736,stadium,スタジアム 球場
1737,estate,財源 (広大な)地所[屋敷]
1738,ecology,生態学 自然環境 エコロジー
1739,dwell,住む
1740,drought,干ばつ 日照り続き
1741,chilly,ひんやりとした (寒さで)ぞくぞくする
1742,souvenir,記念品 おみやげ
1743,lid,(箱・鍋などの)蓋 まぶた
1744,leather,革
1745,spirit,精神 霊魂 気迫 勇気
1746,species,種 種類 人類
1747,native,母国の その土地[土地]に生まれた 原産の。その土地で生まれた人 その土地の固有の動植物 原住民
1748,mankind,人類 人間
1749,alien,外国の 異質の ～になじみない ～と相容れない。外国人 宇宙人
1750,chemical,化学の 化学的な。化学薬品 薬品 化学物資 化学製品
1751,fashion,やり方 流行
1752,secretary,秘書 (米国)長官 (英国)大臣 書記(官)
1753,bank,土手 堤防 銀行
1754,address,あいさつ 演説 手際の良さ 住所 あて先。～に話しかける (心、注意力などを)～に注ぐ 向ける (問題など)に取り組む 解決のために努力する
1755,necessary,必要な 必然的な
1756,essential,不可欠の 本質的な。本質的要素
1757,imply,～を暗に意味する ～をほのめかす
1758,suggest,～を提案する ～をほのめかす ～を連想させる
1759,tidy,きちんとした きれい好きな 満足な (収入～仕事が)なかなかよい
1760,alter,～を変える
1761,adjust,～を適合させる ～を調節(調整)する (環境など)に慣れる。(～に)順応 適応する 慣れる
1762,superstition,迷信 偶像礼拝
1763,formula,公式 (決まった)方法 処方
1764,breed,(家畜など)を繁殖させる。繁殖する。(動植物の)品種
1765,bloom,(花が)咲く 栄える。(鑑賞用の)花 輝き 色つや 最盛期
1766,blossom,(果樹の)花が咲く 繁栄する 開花する。(食用果樹の)花 開花
1767,oppression,圧迫 圧制 圧迫感
1768,restrain,～を抑える ～に（・・・するのを）やめさせる
1769,reproach,～を非難する、 非難 叱責
1770,distort,(顔や事実など)をゆがめる （ものなど）をねじる
1771,alcohol,酒 アルコール
1772,stale,(食物などが)新鮮でない (表現などが)陳腐な
1773,appetite,食欲 欲求
1774,ingredient,原材料[中身] 成分 要素
1775,fossil,化石の、 化石
1776,erosion,浸食
1777,weed,雑草 役に立たない人(物)、 (雑草)を抜く ～を取り除く
1778,strict,厳格な 厳密な 全くの 完全な
1779,fair,公平な 公正な まあまあの かなりの 美しい 色白の 好天の。品評会 博覧会
1780,maximum,最大限 最高。最大限[最高]の
1781,plain,はっきりした 明らかな わかりやすい 質素な 簡素な。 平原 平野
1782,broad,広い 広範囲に及ぶ 大まかな
1783,immense,巨大な 莫大な
1784,largely,主として 大いに
1785,rare,まれな 珍しい すばらしい
1786,slight,わずかな ほっそりした 取るに足らない。侮辱
1787,sufficient,十分な
1788,so-called,いわゆる 世間でいう
1789,biology,生物学 生態
1790,atom,原子
1791,mosquito,蚊
1792,lightning,稲妻
1793,nuclear,核の 原子力の 核兵器の 中心の。核兵器
1794,ray,光線 輝き ひらめき
1795,satellite,衛星 人工衛星 衛星国家
1796,forecast,(天気など)を予報する。予報 予測
1797,soil,土 土地 土壌
1798,tide,潮(の干満) 傾向 流れ 栄枯盛衰 絶頂期 最悪時
1799,wicked,邪悪な いたずらな とてもひどい
1800,cunning,悪賢い ずるい、 ずるさ
1801,wretched,みじめな 哀れな
1802,random,でたらめの 手当たり次第の
1803,crude,天然のままの 大雑把な
1804,dreary,わびしい 退屈な
1805,tranquil,静かな 穏やかな 平静な
1806,exotic,めずらしい 異国風の 魅惑的な
1807,solemn,厳粛な 真面目な
1808,serene,(海・空などが)おだやかな 落ち着いた
1809,meager,やせた (質や量が)貧弱な (作品などが)無味乾燥な
1810,pollution,汚染、汚れ；公害
1811,wound,～を傷つける、～にけがを負わせる
1812,unfortunately,不幸にも、あいにく
1813,trouble,心配、苦労；迷惑、災難；短所；紛争、騒ぎ；病気；故障、不調
1814,tolerate,～を寛大に扱う；～を大目に見る；～に耐える
1815,survive,生き残る、なんとかやっていく
1816,suffer,（苦痛・損害など）を受ける
1817,flood,洪水、（人・物の）殺到、氾濫
1818,disaster,災害、惨事
1819,safe,安全な、確実な
1820,save,～を救う；～をたくわえる；～を省く；～を節約する；～をとっておく；～を保護する
1821,puzzle,～を困らせる；～を当惑させる
1822,shade,陰；（明暗、濃淡の）度合い；わずかな違い；微量
1823,vivid,鮮やかな、強烈な、はっきりした；生き生きとした
1824,reveal,～を明らかにする、（隠れているもの）を見せる、～を示す
1825,glow,（熱で）赤くなる、輝く
1826,grieve,深く悲しむ、嘆き悲しむ
1827,gloomy,憂鬱な、薄暗い
1828,fade,（色が）あせる、（音などが）消えていく、（花などが）しぼむ
1829,expose,～を暴露する、～をさらす
1830,wreck,破損；残骸；難破（船）
1831,torment,～をひどく苦しめる；～の意味をねじ曲げる
1832,execute,～を実行する、～を実際に行う；（人）を処刑する
1833,breakdown,故障；（精神的、肉体的な）衰弱；（交渉などの）決裂
1834,optimism,楽観主義、楽観
1835,pessimism,悲観（主義）；悲観論
1836,monotonous,単調な、退屈な
1837,dismal,気の滅入る、憂鬱な、陰鬱な、（気分的に）暗い
1838,dim,薄暗い；ぼやけた、おぼろげな
1839,terrorism,テロ行為；恐怖政治、恐怖状態
1840,ambivalence,相反［矛盾］する感情；両面価値
1841,skeptical,懐疑的な
1842,delay,～を遅らせる；～を延期する
1843,evolve,～を発展させる
1844,haste,急ぐこと、あわてること
1845,overnight,一晩で；一晩中；急に、突然
1846,period,期間；時期 、時代；ピリオド；授業の時限；月経（期間）
1847,rapid,急速な、速い
1848,permanent,（半）永久的な、永続する、耐久の；常置の、終身の
1849,postpone,～を延期する、～を後まわしにする
1850,present,（叙述用法）出席している、存在している；（限定用法）現在の
1851,term,学期、任期、期間；言葉、専門用語；条件、料金；(～s) 関係、仲
1852,suspend,～をつるす；～を一時的に中止する；～を停職（学）にする；～を保留する
1853,refrain,（～を）差し控える、慎む
1854,interrupt,～の邪魔をする、～に割り込む、～を中断する、
1855,hesitate,ためらう、躊躇する
1856,compromise,妥協（すること）、妥協案；歩み寄り
1857,divine,神の、神のような
1858,disturb,～をかき乱す、～を妨害する、～の邪魔をする
1859,awful,恐ろしい；おぞましい、ひどい
1860,awkward,不器用な；落ち着かない；やっかいな、扱いにくい、ぎこちない
1861,sustain,～を支える；～を維持する；（重さ・苦難など）に耐える；（害）を被る
1862,cautious,注意深い；用心している
1863,sanction,制裁（措置）；（法的）認可
1864,sober,酔っていない；節度のある; 真面目な
1865,sin,（宗教、道徳上の）罪
1866,pious,信心深い、敬虔な
1867,ethics,倫理学（観）；道徳（律）
1868,dogmatic,独断的な、（宗教などの）教義上の
1869,curse,のろい；ののしり言葉；災いのもと
1870,contempt,軽べつ
1871,linger,ぐずぐずする、なかなかなくならない、長引く、いつまでも物思いにふける
1872,sullen,むっつりした；（天気などが）陰気な
1873,nuisance,迷惑な行為や人；神経をいらいらさせる人（物）
1874,treasure,財宝、富、財産；貴重品；大事な人
1875,company,同席すること；仲間；来客；会社
1876,worldwide,世界的な
1877,wildlife,（集合的に）野生生物
1878,well,井戸；源泉；油井；くぼみ
1879,universal,普遍的な；全員の；万能の；宇宙の；世界中の
1880,planet,惑星；（our ～）（私たちの住む惑星）地球
1881,settle,定住する；落ち着く；沈む
1882,rural,田舎の；農村、田園の
1883,typhoon,台風
1884,tropical,熱帯の；熱烈な
1885,estimate,見積もり、見積もること
1886,assume,～を想定する；～を引き受ける；～を当然だと思う；～を装う;～の態度をとる
1887,witness,～を目撃する；～を証言する
1888,stable,安定した、しっかりした
1889,mission,任務、使命；使節団；伝道、布教
1890,assure,～を保証する；～に確信させる
1891,mine,鉱山；（知識などの）宝庫
1892,crew,乗組員、乗務員；一団
1893,coin,（新語など）をつくる；（硬貨）を鋳造する
1894,client,依頼人；（知的サービスを受ける）客
1895,drift,漂流する
1896,emission,（ガス・熱・光などの）排出、放出
1897,chore,日常の雑事、日課、つまらない仕事；（～s）毎日の決まりきった仕事
1898,nightmare,悪夢、恐ろしい出来事
1899,doom,～を運命づける
1900,cradle,ゆりかご；（the～で）幼年時代
1901,revive,生き返る；意識が回復する；よみがえる
1902,posterity,後世（の人々）；子孫
1903,ban,（法律などで）～を禁止する
1904,obsolete,すたれた、時代遅れの、古くさい
1905,bump,（ドンと）ぶつかる；（人に）ばったり会う
1906,delusion,妄想、錯覚；欺くこと
1907,apparent,［通常、叙述用法で］明白な；［通常、限定用法で］見たところ～らしい
1908,differ,異なる、意見が合わない、違う
1909,frank,率直な
1910,misleading,人の判断を誤らせる、誤解を招きやすい、まぎらわしい
1911,horrible,恐ろしい、身の毛のよだつような、ひどく不快な
1912,severe,厳しい、ひどい、厳格な
1913,value,価値（観）；重要性
1914,useless,役に立たない、無駄な；劣っている
1915,clear,澄んだ、晴れた；明らかな；はっきりした；確信した；妨げるものがない
1916,capable,（～することが）できる［能力がある］；有能な
1917,remove,～を取り除く；～を移動させる；～を脱ぐ；～を解任する、～を解雇する
1918,stream,小川；流れ
1919,roll,転がる；進む、走る
1920,assign,～を割り当てる；～を任命する
1921,suppress,～を抑える、～を鎮める；（笑いなど）を我慢する
1922,abstain,控える；棄権する (共にabstain fromの形で用いる）
1923,regulate,～を規制する；～を調整する
1924,confine,～を（...に）制限する；～（人）を（自由がきかない所に）閉じ込める
1925,resign,～を辞職する、～を断念する；～を放棄する；～に甘んじて従う
1926,restrict,～を制限する；～を（...に）限定する
1927,strain,緊張（状態）、負担；過労
1928,intrude,押し入る、入り込む；侵害する
1929,distract,～の気をそらす
1930,barrier,障害；防壁
1931,tuition,授業料；指導、教授
1932,fee,謝礼、料金
1933,digit,数字
1934,circulation,循環；流通；発行部数；（情報などが）広まること
1935,bankrupt,倒産した
1936,renounce,～を放棄する；～を絶交する
1937,obstruct,～を妨害する、～をふさぐ、～をさえぎる
1938,scene,場面；現場；眺め、光景；大騒ぎ
1939,typical,典型的な；特有の
1940,similar,類似した
1941,imitate,～を真似する、～を模倣する
1942,irrigation,灌漑（かんがい）
1943,desert,～を見捨てる
1944,sterile,不妊の；不毛の；殺菌した
1945,condition,状況；状態；条件
1946,circumstance,（周囲の）状況、事情；（経済的な）生活状態；（人の）境遇；生活事情
1947,wheat,小麦
1948,taste,味、味覚；好み、趣味
1949,clue,（問題などを解く）手がかり
1950,abstract,抽象的な
1951,gratitude,感謝の気持ち
1952,victim,犠牲者、被害者；えじき、いけにえ
1953,toil,骨折り仕事；苦労
1954,threat,脅迫、脅かすもの；（悪い）きざし
1955,suicide,自殺
1956,rescue,救助、救出
1957,up-to-date,現代的な；最新の
1958,temporary,一時の、つかの間の、仮の
1959,ultimate,究極（的）の；最終（的）の；最高の
1960,sometime,いつか、そのうち
1961,ruthless,情け容赦のない；毅然とした
1962,momentary,瞬間的な；つかの間の
1963,durable,長持ちする、耐久力のある
1964,convenient,（ものなどが）便利な；都合のよい；（場所などが）便利な；（駅などに）近い
1965,assent,賛成する
1966,disarm,～の武装解除をする；～を無力にする
1967,confound,～を困惑させる；～を混同する
1968,humility,謙遜
1969,grumble,不平を言う
1970,countenance,顔つき、容貌；落ち着き、平静
1971,prevent,～を防ぐ；(～が...するの）を妨げる
1972,remark,～と述べる；～に気づく、～に注意する
1973,recognize,～を認める；～に覚えがある；～が誰だかわかる；～を表彰する
1974,apply,～を適用する、～を応用する；（薬や化粧品など）を塗る
1975,care,（否定文、疑問文、条件文で）いやと思う；気にかける；（～を）気にする
1976,inform,～に知らせる
1977,comfort,快適さ；慰め；慰めをあたえてくれるもの［人］；安らぎ
1978,express,はっきりした；急行の、速達便の
1979,civilization,文明；文明化；文化的生活
1980,audience,聴衆、視聴者、聴衆者、読者
1981,delicate,繊細な、かよわい；（問題などが）微妙で扱いにくい；思いやりのある
1982,dead,まったく、突然、すっかり
1983,deceased,（the～）故人
1984,somebody,重要人物；大した人物、大物
1985,oppose,～に反対する；～を（～に）対立させる
1986,excel,より勝る、秀でている、卓越する
1987,defect,欠点、欠陥
1988,mature,大人の、成熟した；（果実などが）熟した
1989,flee,～から逃げる
1990,apologize,謝る、謝罪する
1991,scold,～を叱る
1992,ape,猿、類人猿
1993,anthropology,人類学
1994,adolescence,青春期［時代］、思春期；発展期
1995,contrive,～を考案する；～をたくらむ
1996,undergo,（不愉快なこと、苦しいこと）を経験する、（検査、治療など）を受ける
1997,stumble,つまずく、よろける；偶然出くわす
1998,speculate,推測する、熟考する；投機をする
1999,insure,～に保険をかける；～を保証する
2000,refrigerator,冷蔵庫
2001,pastime,気晴らし；娯楽、趣味
2002,fuss,騒ぎ立てる、ちやほやする、やきもきする
2003,throng,群衆、多数の人々
2004,questionnaire,アンケート（用紙）
2005,collect,～を集める（収集する）
2006,ready,準備ができて；喜んで［進んで］～する；即座の、巧みな
2007,hinder,～を妨げる、～の邪魔をする
2008,indicate,～を指し示す；～を明らかにする；～をほのめかす
2009,picture,イメージ；生き写し；絵；写真；映画
2010,suspect,～を怪しいと思う、～を疑う；（～だ）と思う；～に容疑をかける
2011,suppose,～だと思う、～だと仮定［推測］する；もし～だとしたら
2012,viewpoint,観点、立場；見える地点
2013,view,眺め、風景；視野、視界；意見、考え、意図；見通し；視力、視覚
2014,warn,～に警告する；～に通知する
2015,lend,（物・金・力など）を貸す
2016,per,～あたり、～につき
2017,borrow,～を借りる；（言葉など）を取り入れる；（もの）を（無料で）借りる
2018,singular,非凡な、まれにみる；単数の；別々の
2019,spell,（活動や天候の）期間、短い時間；呪文、魔法
2020,injure,～を傷つける、～に害を与える
2021,frighten,～をおびえさせる、～をびっくりさせる
2022,cynical,冷笑的な；皮肉な
2023,prey,えじき；犠牲
2024,flame,炎、激情
2025,reportedly,伝えられるところでは
2026,issue,～を発行する、（命令など）を発する；（政府などが）～を支給する
2027,retire,退職する；引き下がる；床につく
2028,scorn,～を軽蔑する
2029,riddle,謎、不可解なもの［人］
2030,prophecy,予言、預言
2031,outlook,眺望；見通し；見解、態度
2032,foretell,～を予言する
2033,foresee,～を予測する
2034,anticipate,～を予想する、～を予期する；～を楽しみにして待つ
2035,aviation,航空（学）
2036,pregnant,妊娠している；意味深長な、含蓄のある；～で満ちた
2037,carve,～を彫る；（運・人生など）を切り開く
2038,fulfill,～を果たす、（要求・目的）に添う、（要求など）を満たす
2039,deny,～を否定する、～を（...に）与えない
2040,approve,～に賛成する、～を是認する、～を承認する、～を認める
2041,punish,～を罰する
2042,alarm,～をはっとさせる；～を不安にさせる
2043,adapt,～を適応、順応させる
2044,fault,欠点；責任
2045,policy,政策、方針；手段；保険証書
2046,common,共通の；ありふれた；公共の；共有の
2047,community,地域社会；（利害などを共にする）共同社会、集団
2048,class,階級；階層；クラス；授業
2049,role,役割、任務；（役者の）役
2050,slave,奴隷
2051,electric,電気の、電動の
2052,phenomenon,現象；驚くべき事（物、才能、人）
2053,scheme,計画；たくらみ、陰謀
2054,timber,材木；森林
2055,tissue,（細胞からなる動植物の）組織；ティッシュペーパー
2056,commerce,商業；貿易；通商
2057,item,（ニュースなどの）ねた、記事；品物；品目、項目、箇条
2058,fundamental,基本的な、根本的な、抜本的な
2059,modernization,近代化、現代化
2060,creed,信条
2061,notorious,悪名高い；悪いことでよく知られた
2062,bald,（頭が）はげた、（木が）葉のない；味けのない、ありのままの
2063,resort,（手段に）訴える；（楽しい所へ）しばしば行く
2064,pension,年金、恩給
2065,output,生産高；（コンピューターなどの）出力
2066,classify,～を分類する
2067,immune,免疫のある、（～を）免れた
2068,vessel,容器、器；大型の船；（血）管
2069,blast,爆発；突風
2070,solve,（問題など）を解く、～を解決する
2071,grade,等級；学年；成績
2072,literate,読み書きのできる、教養のある、文学に通じた
2073,acknowledge,～を認める
2074,absurd,ばかげた、滑稽な； 不合理な
2075,aim,＜人が＞～することを目指す；狙う
2076,evidence,証拠、（事実を示す）形跡
2077,evident,明白な、明らかな
2078,specific,具体的な、明確な；特定の
2079,latter,後の方の；（時間的に）後半の～；後者の～
2080,frequent,たびたびの、頻繁に起こる
2081,contemporary,現代の；同時代の
2082,continue,～を続ける
2083,date,日付、デート
2084,reflect,熟考する、回想する
2085,misery,悲惨さ；苦痛、苦難；惨めさ、不幸
2086,blank,白紙の；無表情な；空白の
2087,odd,変わった；片方の；奇数の；端数の；少しの；臨時の
2088,perceive,～を（五感で）知覚する；～に気づく；～を理解する
2089,release,～を解放する；～を放つ；～を公開する；～を発売する
2090,attribute,～のせいにする；（作品など）を（...の）手によると考える
2091,invade,～に侵入する、～を侵害する
2092,fierce,どう猛な、激しい；厳しい
2093,trifle,くだらない物；少量
2094,outlet,出口；（感情などの）はけ口
2095,outcome,結果、成果
2096,embark,着手する；乗船する
2097,breakthrough,（科学上の）大発見；突破口
2098,birthrate,出生率
2099,compartment,区画；（鉄道の）仕切り客室
2100,abortion,（妊娠）中絶
2101,orbit,軌道、行路；範囲
2102,individual,個人的な、個々の、特有の、個性的な
2103,rumor,噂、風評
2104,ring,（鐘・ベル・電話などの）鳴る音、電話をかけること；指輪、輪
2105,occasion,場合、時；出来事；機会；行事、式；（～をする）理由、根拠
2106,lot,くじ；運命；区画；ひと山；（～な）やつ；たくさんのこと
2107,folk,人々；家族
2108,admire,～を賞賛する；～に感嘆する
2109,attract,～を引きつける、～を魅了する
2110,attach,～をくっつける、取り付ける；～に愛着を持たせる
2111,acquire,～を獲得する；～を習得する
2112,book,～を予約する
2113,tendency,傾向、風潮
2114,trend,傾向；流行
2115,upcoming,今度の、近づく、やってくる
2116,emergency,非常事態、緊急事態
2117,greed,どん欲、どん欲さ
2118,prospect,候補者；(～s)（成功する）見込み；将来性；可能性
2119,shrine,神社、祭壇
2120,emphasize,～を強調する、～に重点を置く
2121,contemplate,～を熟考する；～をじっと見つめる；～をよく考える
2122,predict,～を予言する；～と予測する
2123,notice,～に気づく；～に通知（通告）する；～に言及する
2124,resume,～を再び始める；～を取り戻す
2125,detect,～を見抜く、～を見つけ出す
2126,fetch,～をとってくる
2127,coerce,～を強制する
2128,undertake,～を引き受ける；～をはじめる
2129,partake,参加する；（～の）性質がいくぶんある
2130,grant,～を認める；～を与える、～をかなえる
2131,petrol,（イギリス用法）ガソリン
2132,dignity,威厳、気品、尊厳
2133,induce,～を説いて...する気にさせる；～を誘引する；～を帰納する
2134,bid,～に命令する；（競売、入札などで）値を付ける
2135,recommend,～を推薦する; ～に（～することを） 勧める
2136,permit,～を許す
2137,fail,～を怠る、～に役立たない；（試験など）を落とす
2138,expect,～を予期する；～を期待する；～だろうと思う
2139,achieve,～を成し遂げる；～を獲得する
2140,proper,適切な、ふさわしい；正式の；礼儀正しい
2141,objective,客観的な
2142,fruitful,実りの多い、有益な；肥沃な
2143,voyage,船旅、航海；人生行路
2144,wheel,車輪；（自動車の）ハンドル
2145,change,つり銭、小銭；変化；変更
2146,accomplish,～を成し遂げる；～を達成する
2147,faith,信頼、信用；信仰；誓約
2148,element,要素；元素；（the～sで）自然の力；少量、気味
2149,union,労働組合；結合、団結；一致；連邦
2150,calculate,～を計算する；～を予想する；～と判断［推定］する
2151,device,装置、工夫、道具；策略
2152,stroll,ぶらつく、散歩する、放浪する
2153,accessory,アクセサリー；装飾品；付属品
2154,leisure,余暇、自由時間
2155,enterprise,事業；企業；進取の気性
2156,quality,質、質の良さ；特性、特質
2157,qualify,～に資格を与える
2158,leak,漏れる
2159,dismay,～を狼狽させる、～を失望させる
2160,dissuade,～に（...することを）思いとどまらせる
2161,ensure,～を保証する、～を確保する、～を確実にする
2162,entitle,（人）に資格を与える、～に権利を与える；～に表題を付ける
2163,obscure,あいまいな、不明瞭な；無名の；人目に付かない、よく聞き取れない
2164,sacrifice,犠牲、いけにえ［捧げ物］
2165,confirm,～を確かめる；～（意見など）を（さらに強く）固める
2166,bestow,～を授ける、授与する
2167,install,（装置など）を取り付ける；～を任命する
2168,lumber,材木
2169,sour,すっぱい；不愉快な、気むずかしい
2170,confuse,～を混同する；～を当惑させる
2171,calm,（天候・海などが）穏やかな；（人・態度などが）冷静な
2172,ache,痛み
2173,ease,容易さ、気楽さ
2174,conscious,意識している；意識のある；意識して；気づいている；～に対する意識が高い［強い］；～を気にする；意識的［意図的］な
2175,earnest,まじめな、熱心な
2176,brave,勇気のある；勇敢な
2177,method,（組織だった）方法；筋道、体系、秩序
2178,manner,態度；方法、やり方；流儀、作風；（～s）行儀、作法；（～s）風習
2179,medium,中間；媒体、手段、方法；（複数形mediaで）報道機関、マス・メディア
2180,means,（単・複数扱い）手段、方法；（複数扱い）(生活手段としての）財産、収入
2181,correspond,一致する；相当する；文通する
2182,neglect,～を無視する、～を怠る；～に十分な世話をしない
2183,ascertain,～を確認する、～を確かめる
2184,prompt,～を促す、～を刺激する
2185,passive,消極的な、受け身の；言いなりになる；おとなしい
2186,pour,～を注ぐ；（言葉など）を浴びせる；～をどっと出す
2187,remedy,治療；改善策、方法
2188,elaborate,入念な、凝った
2189,guarantee,～を保証［約束］する
2190,commute,通勤、通学する
2191,fare,（交通機関の）運賃、料金
2192,reckon,～を計算する、～を（...だと）考える、～と推測する
2193,embarrass,～を当惑させる、～を困らせる、～に恥ずかしい思いをさせる
2194,distress,苦悩；貧困
2195,devote,～を捧げる、～を費やす
2196,detest,～をひどく嫌う
2197,betray,（秘密など）をもらす；～を裏切る；～が表情（表）に出す
2198,ponder,～を熟考する、～を（するかどうか）あれこれ考える
2199,sociology,社会学
2200,ideology,（政治的・社会的な）思想、イデオロギー
2201,asset,財産；貴重なもの
2202,subscribe,～を寄付する；～に署名する；予約購読する`,
  },
  {
    id: 'chimera',
    name: 'キメラ',
    csv: `番号,単語,意味
1,abandon,放棄する、あきらめる、捨てる
2,abdominal,腹部の、腹筋
3,abhor,忌み嫌う、憎悪する
4,ability,能力
5,able,できる、有能な、能力のある
6,abnormality,異常（性）
7,abolish,廃止する、撤廃する
8,aboriginal,原生の、先住の、アボリジニの
9,abort,中止する
10,abortion,妊娠中絶
11,abound,豊富である、～で満ちている
12,above,上(方)に、前述の
13,abridged,簡約[短縮]された
14,abroad,海外へ，海外で
15,abrupt,突然の、ぶっきらぼうな
16,abruptly,不意に、突然
17,absence,不在、欠席
18,absent,欠席して
19,absolute,絶対的な、完全な、全くの
20,absolutely,まったく、[返事]まったくその通りだ、絶対に
21,absorb,吸収する、夢中にさせる、理解する
22,absorption,没頭(in)、吸収
23,abstain,慎む
24,abstract,抽象的な
25,absurd,ばかげた、不合理な
26,abundance,豊富。大量
27,abundant,豊富な、～に富む
28,abuse,乱用(する)、虐待(する)、誤用(する)
29,academic,学問の、学究的な、学園の、大学（教育）の
30,academy,（大学などの）高等教育機関、専門学校
31,accelerate,加速させる、促進する、加速する
32,accent,なまり、アクセント
33,accept,受け取る、受け入れる、認める
34,acceptable,受け入れられる、容認できる
35,acceptance,受諾、受け取り
36,access,利用、入手、接近（の機会・方法・権利）、アクセスする
37,accessory,補助的な、付随する、[複]付属品
38,accident,(偶然の)事故、事件； 偶然
39,accidental,偶然の、過失による
40,accidentally,誤って、うっかり、偶然にも
41,acclaim,賞賛する
42,accommodate,収容する、宿泊させる、適応させる
43,accommodation,(<米>―s)宿泊施設
44,accompany,同行する、一緒に行く、随して起こる
45,accomplish,成し遂げる、達成する
46,accomplishment,完成、業績
47,accord,"一致、合意、協定、一致する, 調和する"
48,according,（according to）～に一致して、～に従って、～によれば
49,accordingly,それに応じて、それ相応に、したがって
50,account,占める、説明する、原因となる、説明、勘定、口座
51,accountable,（説明する）責任がある、説明可能な、理解できる
52,accounting,経理、会計(学)
53,accumulate,蓄積する、集める、積もる
54,accuracy,正確さ、精度
55,accurate,正確な、精密な、狂いのない
56,accusation,非難、告訴
57,accuse,訴える、非難する
58,accustom,（人）を慣れさせる
59,accustomed,慣れている
60,ache,痛む、切望する
61,achieve,達成する、成し遂げる、獲得する
62,achievement,学業（成績）、業績、達成
63,acid,酸、酸性の、酸味の、批判的な
64,acknowledge,（事実など）を認める、に謝意を表す
65,acknowledgment,感謝（のしるし）、承認、白状
66,acoustic,音響の、聴覚の、（楽器が）アコースティックの
67,acquaint,(詳しく)を知らせる、を知り合いにさせる
68,acquaintance,知人、知り合い、面識、知識、交際
69,acquainted,知り合いである
70,acquire,獲得する、習得する
71,acre,エーカー（約4047㎡)
72,act,行動する； 行動； 法令
73,activate,を活性化する、を作動させる
74,active,積極的な、能動的な、活動している、有効な
75,actively,積極的に、活発に
76,activist,活動家
77,activity,活動
78,actual,実際の、現実の
79,actualization,実現化
80,actually,実際に、（意外だが）実は、本当は
81,acute,鋭い、激しい、急性の
82,ad,広告
83,adapt,適応する、を（～に）適応させる（to）
84,adaptable,適応性のある、順応できる
85,adaptation,順応、適応
86,adaptive,適応性のある、適応できる
87,add,加える、付け加えて言う
88,addict,中毒患者、〔受身で〕（～の）中毒になる
89,addicted,中毒である
90,addiction,中毒、熱中
91,addictive,依存性の、中毒性の
92,additional,追加の、付加的な
93,additive,添加物
94,address,演説する、話しかける、取り組む、住所、演説、あいさつ
95,adept,（at ～）（～に）熟練した
96,adequate,十分な、適切な
97,adhere,くっつく、粘着する、固執する
98,adhesive,接着剤
99,adjective,形容詞、形容詞の
100,adjust,適応させる、適応する
101,administer,管理する、運営する
102,administration,管理、経営、運営、行政、政府、政権
103,admirable,賞賛に値する、素晴らしい
104,admiration,感嘆、賞賛
105,admire,賞賛する、感心する
106,admission,入場料
107,admit,認める、入場を認める
108,admittedly,明らかに
109,admonish,注意する
110,adolescent,青年、青年期の
111,adopt,採用する、（態度など）をとる、養子にする
112,adorable,非常にかわいい[いとしい]
113,adore,あこがれる、慕う、崇拝する
114,adrenalin,アドレナリン
115,adrift,漂って、目的を失って
116,adult,大人； 大人の
117,advance,進歩、前進、進歩させる（する）
118,advanced,進歩した、前進した、上級の
119,advantage,利益、利点、優勢、有利な立場
120,advent,出現、到来
121,adventure,冒険
122,adverse,逆の、不都合な、不利な、有害な、敵対的な
123,advertise,広告する、宣伝する、公にする
124,advertisement,広告
125,advertising,宣伝、広告
126,advise,忠告（助言）する
127,adviser,助言者、顧問、アドバイザー
128,advocate,主張する、唱える、支持する、支持者、主張・提唱者
129,aerospace,航空宇宙
130,aesthetic,美的な、美学の
131,affair,出来事、問題、仕事、（～s）事情
132,affect,影響を与える、～のふりをする、～を愛用する
133,affection,愛情
134,affectionate,愛情のこもった、やさしい
135,affiliate,を提携させる、を合併する
136,affirm,肯定する、断言する、肯定する、断言する
137,affirmative,肯定的な、肯定、賛成
138,afflict,(通常受動態で)を悩ませる、を苦しめる
139,affluent,（経済的に）豊かな、裕福な、おびただしい、豊富な
140,afford,（～を持てるだけの経済的）余裕がある、～を与える
141,affordable,手頃な、安価な
142,afterward,その後で、後に
143,age,年齢、年代、老年、（歴史上の）時代、年を取る
144,aged,年老いた
145,agency,機関、代理店
146,agenda,協議事項（リスト）、議事日程（表）、（政治上の）課題
147,agent,代理人、行為者、薬剤、（反応・変化を起こす）力
148,aggravate,悪化させる
149,aggression,攻撃性、侵略
150,aggressive,攻撃的な、けんか腰の、積極的な
151,aggressively,攻撃的に、積極的に
152,aging,高齢化が進む、老朽化している
153,agitate,動揺させる；先導する
154,agitation,動揺、興奮、扇動
155,agonize,苦悶する
156,agony,(心身の)苦痛、苦悩
157,agree,同意する、賛成する、合う
158,agreeable,好みに合う、感じのよい、同意する、ふさわしい
159,agricultural,農業の
160,agriculture,農業、農学、畜産
161,ahead,前方へ（に）、事前に、出世して
162,aid,支援、救援（物資）、を援助する、助けとなる
163,aim,目的、目標にする、狙う、努力する（to do）
164,aimlessly,当てもなく
165,air,空気、空中、様子、（複数）気取り
166,aircraft,航空機
167,airline,定期航空路、航空会社
168,aisle,(座席間などの)通路
169,akin,同様の、同種の、類似した
170,alarm,恐れ、目覚まし時計、警報、を驚かせる、不安にさせる
171,alarming,驚くべき、心配な
172,alcohol,酒、アルコール
173,alcoholic,アルコールの
174,alert,油断のない、警戒を怠らない、機敏な、注意を呼びかける
175,algae,藻、藻類
176,algebra,代数（学）
177,algorithm,アルゴリズム、問題解決の手順
178,alien,外国の、異質の、～と相容れない、外国人、宇宙人
179,alienate,遠ざける
180,align,を一直線に並べる
181,alignment,整列
182,alike,同様の（に）、似ている
183,alive,生きて、元気で
184,allegation,申し立て
185,allege,主張する
186,allegedly,伝えられるところによると
187,allergy,アレルギー
188,alleviate,軽くする、軽減する
189,alliance,同盟、提携
190,allied,連合の、同盟を組んだ
191,allocate,割り当てる、分配する
192,allot,分配する、割り当てる、充当する
193,allow,許す、認める、考慮に入れる（for）
194,allowance,小遣い、手当、許可
195,ally,同盟者〔国〕、結びつく、連合する、同盟する
196,almost,ほとんど
197,alone,1人で、（名詞＋alone）～だけ
198,alongside,横に、～と並んで、～と一緒に
199,aloof,離れて、よそよそしくて
200,aloud,声に出して
201,alter,変える、変わる
202,alteration,変更
203,alternate,代わりの、交互の、交替する、交互に現れる、交互にする
204,alternative,代替手段、選択肢、二者択一の、代わりの
205,although,…だが、…にもかかわらず
206,altitude,高度、標高、海抜
207,altogether,完全に、全く、要するに、合計して
208,altruism,利他主義
209,amateur,アマチュア、素人、未熟な、下手な
210,amaze,びっくりさせる、驚かせる
211,amazing,驚くべき
212,ambassador,大使、代表、使節
213,ambiguous,あいまいな、両義にとれる
214,ambition,願望、野望、野心
215,ambitious,大望を抱いた、熱望している、野心的な
216,ambivalent,矛盾する、相反する、どちらか決めかねて
217,ambulance,救急車
218,amend,修正する、改正する
219,amendment,改正、修正
220,amenity,生活を快適にするもの
221,amicable,友好的な
222,ammunition,弾薬
223,amnesty,恩赦
224,amount,量、合計、総額、総計～に達する、～に等しい
225,amphibian,両生動物；両生類の
226,ample,十分すぎるほどの、豊富な、広い、広大な
227,amplify,増幅する
228,amputee,切断手術を受けた患者
229,amuse,おもしろがらせる、楽しませる
230,amusement,娯楽、面白さ
231,analogy,類推、類似、類似点
232,analysis,分析（結果）、解明
233,analyze,分析する
234,anarchy,無秩序
235,anatomy,構造、解剖学
236,ancestor,祖先、先駆者、原型
237,ancestral,先祖伝来の、先駆者の、原型をなす
238,ancient,古代の、昔の、昔からの、（物などが）とても古い
239,anecdote,逸話
240,anger,怒り
241,angle,観点、角（度）
242,angry,怒って
243,anguish,苦悩させる、苦悩する、苦痛、悲しみ
244,animate,活気づける、駆り立てる、生きている、活発な
245,animation,アニメ(製作)、活気
246,ankle,足首
247,anniversary,（～周年）記念日
248,annotation,注釈
249,announce,発表［公表］する、知らせる、（物事が）を告げる
250,annoy,いらいらさせる、悩ます、〔受身形で〕腹が立つ
251,annoyance,いらだち、悩みの種
252,annual,１年間の、年１回の、例年の
253,anonymous,匿名の、無名の
254,anorexia,拒食症
255,ant,アリ
256,Antarctic,南極地方
257,Antarctica,南極大陸
258,anthem,賛美歌
259,anthropologist,人類学者
260,anthropology,人類学
261,antibiotic,〔通例～s〕抗生物質
262,anticipate,予想する、予期する、楽しみにして待つ
263,anticipation,期待、予期、予想
264,anticipatory,予期[予想]しての、見越しての
265,antioxidant,抗酸化物質、酸化防止剤
266,antique,骨董品の、年代物の、古風な
267,antiquity,古代、古物
268,anxiety,不安、心配
269,anxious,"心配している(about)、切望している(for, to do)"
270,anyhow,ともかく、いずれにせよ
271,anymore,（否定・疑問文）もはや（…できない）
272,anyway,（肯定文）とにかく、（否定文）どうしても
273,apart,離れて、個々に
274,apathy,無感動、無関心、冷淡
275,ape,猿、類人猿
276,apologize,謝る、弁明する
277,apology,謝罪
278,app,アプリ
279,appall,ぎょっとさせる
280,appalling,ぞっとするような
281,apparatus,装置、器具一式、機構
282,apparent,［叙述用法］明白な、［限定用法］見たところ～らしい
283,apparently,一見したところ～のようだ
284,appeal,訴える、求める、興味を引く、魅力、人気、訴え、要請
285,appear,～のように見える、現れる
286,appearance,外見、様子、出現
287,appetite,食欲、欲求
288,applaud,～に大きな拍手を送る
289,applause,拍手（喝采）
290,appliance,器具、電気製品
291,applicable,適用できる、応用できる、ふさわしい
292,applicant,応募者、志願者
293,application,申請書、申し込み、適用
294,apply,適用する、応用する、 申し込む(for～)、塗る、当てはまる
295,appoint,（役職に）を任命する、（時・場所など）を指定する
296,appointment,任命、約束、職、任務
297,appreciate,正しく理解する、正しく評価する、感謝する、鑑賞する
298,appreciative,感謝している
299,apprehension,不安、理解力、逮捕
300,apprentice,見習い(工)、初心者
301,approach,近づく、取り組む、取り組み(方)、接近（方法）
302,appropriate,適切な、ふさわしい
303,approve,賛成する、承認する
304,approximate,おおよその、近似の
305,approximately,おおよそ
306,apt,～しがちである、～する傾向がある、ふさわしい
307,aquatic,(動植物が)水生の、水の
308,arbitrary,任意の、勝手な、恣意的な、気まぐれな
309,arc,弧、弓形
310,archaeologist,考古学者
311,archaeology,考古学
312,archaic,古風な、古代の
313,archbishop,大司教
314,architect,建築家、設計者
315,architecture,建築(学)、建築技術
316,archive,公文書（保管所）、保存記録
317,Arctic,北極の
318,ardent,激しい、熱心な
319,area,部分、地域、分野
320,argue,と主張する、議論する
321,argument,議論、口論
322,arise,起きる、(～から)生じる(from～)
323,aristocracy,貴族政治、（the～)、貴族階級
324,aristocrat,貴族
325,aristocratic,貴族的な、貴族の、貴族政治の
326,arithmetic,算数の、算数
327,arms,武器、軍備
328,army,軍隊、陸軍
329,aroma,芳香、アロマ
330,arousal,興奮、目覚め
331,arouse,引き起こす、刺激する、目覚めさせる
332,arrange,手はずを整える、きちんと並べる、取り決める
333,arrangement,手配、配置、取り決め
334,array,多彩
335,arrest,逮捕する、止める、逮捕
336,arrival,到着
337,arrogance,傲慢さ、横柄さ
338,arrogant,ごう慢な、横柄な
339,arsenal,兵器庫
340,arsenic,ヒ素
341,art,芸術、美術、技術、こつ、(～s)人文科学
342,artery,動脈
343,arthritis,関節炎
344,article,記事、論文、品物、物、条件、冠詞
345,articulate,はっきり述べる、明瞭な
346,artifact,工芸品
347,artificial,人工の、不自然な
348,artistic,芸術的な
349,artistry,芸術的才能
350,arugula,ルッコラ
351,ascend,上がる、上げる
352,ascent,登ること、上昇
353,ascertain,確認する、確かめる
354,ascribe,～を（…の）せいにする、～を（…の）作品とする
355,ascription,原因があるとすること、理由付け
356,ash,灰
357,ashamed,恥ずかしがって、恥じている
358,aside,わきに、離して
359,asleep,眠って
360,aspect,（物事の）側面、観点、様相
361,aspiration,熱望
362,aspire,切望する、熱望する、求める
363,assassination,暗殺
364,assault,襲撃(する)、暴行(する)
365,assemble,集まる、集める、組み立てる
366,assent,同意する、同意、承諾
367,assert,断言する、主張する、行使する
368,assess,評価（判断）する、査定する
369,asset,有用なもの、貴重な存在、資産、財産
370,assiduous,勤勉な、熱心な
371,assign,割り当てる、配属する
372,assignment,任務、課題、割り当て
373,assimilate,同化する、吸収する、自分のものにする
374,assist,援助する、手伝う
375,assistance,援助、支援
376,assistant,助手
377,associate,結び付ける、連想する、交際する、仲間
378,assorted,詰め合わせの
379,assume,想定する、思い込む、（責任・任務）を引き受ける
380,assumption,(確証のない)仮定、想定、思い込み
381,assure,保証する、安心させる
382,asteroid,小惑星、ヒトデ
383,astonish,ひどく驚かせる
384,astonishing,驚くべき、びっくりするような
385,astound,びっくり仰天させる、愕然とさせる
386,astrology,占星術
387,astronaut,宇宙飛行士
388,astronomer,天文学者
389,astronomy,天文学
390,asylum,亡命
391,asymmetry,非対称，不釣り合い
392,athlete,運動選手、競技者、スポーツ選手
393,athletic,運動の得意な、スポーツの
394,athletics,スポーツ、運動競技
395,Atlantic,大西洋の
396,atlas,地図帳
397,atmosphere,大気、雰囲気
398,atom,原子
399,atrocity,残虐行為
400,attach,くっつける、取り付ける、愛着を持たせる
401,attachment,付着(物)、取り付け、愛着
402,attack,攻撃、非難、（病気などの）発作、を攻撃する、を非難する
403,attain,獲得する、達成する、に達する
404,attempt,試み、攻撃、を試みる、…しようとする
405,attend,出席する、注意して聞く(to～)、付き添う(on～)
406,attendance,出席[入場]者数、出席
407,attendant,付添人、世話人
408,attention,注目、注意、世話
409,attentive,注意深い
410,attitude,態度、考え方
411,attorney,弁護士、検事、（法定）代理人
412,attract,引きつける、魅了する
413,attraction,魅力、呼び物
414,attractive,魅力的な
415,attribute,～のせいにする、～のおかげと考える
416,auction,競売、オークション
417,audacious,大胆な、厚かましい
418,audible,聞こえる
419,audience,聴衆、観客、視聴者
420,auditor,監査役
421,auditorium,講堂、公会堂、観客席
422,authentic,本物の、確実な、信用できる
423,author,著者、作者
424,authority,関係当局、権威、権限
425,authorize,権限を与える
426,autobiography,自叙伝
427,autograph,（有名人などの）サイン
428,automatic,自動の、無意識な
429,automobile,自動車
430,autonomous,自動運転
431,autonomy,（個人の）自律、自治（権）、自治体
432,autopsy,検死
433,avail,利用する、活用する、役立つ
434,availability,(入手の)可能性、有用[有効]性
435,available,利用できる、入手できる、手の空いている
436,avenue,大通り、道、手段、方法
437,average,平均、平均的な
438,avert,避ける、防ぐ、（目・注目・顔を）そらす
439,aviation,航空
440,avoid,避ける
441,await,待つ、待ち受ける、待つ
442,awaiting,待つ
443,awake,目覚めて、気づいて、目が覚める、を起こす
444,awaken,目覚めさせる、覚める
445,award,賞（金）、（審査して）を授与する
446,aware,気づいている
447,awareness,認識、意識
448,awe,畏れ、畏敬の念、（be awed）畏敬の念を抱く
449,awesome,すごい、畏敬の念を起こさせる、荘厳な、恐ろしいほどの
450,awful,(光景などが）恐ろしい、ひどい
451,awkward,不器用な、落ち着かない、やっかいな、ぎこちない
452,axiom,原理、自明の理
453,axis,軸
454,bachelor,独身の男性、学士
455,backfire,[自] 裏目に出る
456,background,背景、生い立ち、経歴
457,backlog,未処理の山
458,bacteria,細菌、バクテリア
459,bacterium,バクテリア
460,badly,まずく、とても（欲しい）、ひどく
461,baggage,手荷物、旅行荷物、（集合的に）（旅行時の）荷物
462,bait,誘惑物、(釣り針・わなにつける)餌
463,balance,均衡、バランス、（体の）平衡、残高
464,bald,はげた、葉のない、味けのない、ありのままの
465,ballot,投票、投票用紙、投票総数
466,bamboo,竹
467,ban,禁止する、禁止（令）
468,bang,ドンとたたく、バタンと閉まる、ドカンという音
469,banish,追い出す、追放する
470,bank,銀行、土手
471,bankrupt,破産した、を破産させる
472,bankruptcy,破産
473,bar,棒、障害物、軽食堂、法廷、弁護士業、妨げる、除外する
474,bare,裸の、むき出しの、ありのままの、ぎりぎりの、最低限の
475,barely,かろうじて
476,bargain,買い得品、取引、契約
477,bark,吠える
478,barn,納屋、物置
479,barrel,バレル（液量の単位）、たる
480,barren,～の欠けた、（土地が）やせた、不毛の
481,barricade,バリケード
482,barrier,障壁、防壁
483,base,～の基礎［根拠］を置く
484,basement,地階、地下室
485,bashful,内気な
486,basic,基礎の、基礎知識
487,basin,流域、盆地、海盆、洗面器［台］
488,basis,基礎、根拠、方式、やり方
489,basket,かご、バスケット
490,bat,コウモリ、バット、バットで打つ
491,batch,一回分
492,bathe,入浴する（させる）
493,batter,を叩き壊す、乱打する
494,battery,電池
495,battle,戦う、戦闘
496,bay,入江、湾
497,bear,耐える、運ぶ、生む、身につける、持っている
498,bearable,耐えられる
499,beard,あごひげ
500,bearing,方向、関連、関係、(自分の)位置、物腰、態度
501,beast,獣、動物
502,beat,たたく、打ち負かすたたくこと、鼓動
503,beauty,美人、美しさ
504,beckon,手招きする、合図する
505,bee,（総称）ハチ、ミツバチ
506,beforehand,前もって、事前に
507,beg,切に頼む、懇願する
508,beggar,物乞い
509,behalf,利益、支持；（on behalf of） ～を代表して、～のため
510,behave,振る舞う、行儀よくする
511,behavior,行動、態度
512,behavioral,行動の
513,behind,後ろに、～よりも劣って
514,belief,信念、確信、信じること、信頼
515,belong,～に属する、～の所有である
516,benchmark,基準
517,bend,曲がる、かがむ、屈服する、を曲げる
518,beneath,～の下に
519,beneficial,有益な、有利な
520,benefit,恩恵、利益、利益を得る、に利益を与える
521,benevolent,親切な、善意の、寛大な、慈善の
522,benign,良性の、害のない； 有益な
523,besides,さらに、に加え、（否定文・疑問文で）以外に
524,bestow,授ける、与える
525,bet,賭け、考え、賭ける、予期する
526,betray,裏切る、（秘密など）をもらす、表情（表）に出す
527,beverage,飲み物、飲料
528,bewilder,うろたえさせる、当惑〔動転〕させる
529,beyond,～の向こうに、～できる範囲をこえて
530,bias,偏見、～に偏見を持たせる、～に偏見をもたらす
531,biased,偏った、偏見を持った
532,bible,聖書、必読書
533,bid,値をつける、（挨拶）を述べる
534,bilateral,相互の、二者［二国］間の
535,bilingual,２カ国語を話す（人）
536,bill,請求書、【英】勘定書、法案
537,billion,10億
538,bind,縛る、束縛する、結び付ける
539,binding,拘束力のある、義務を負わせる
540,biodiesel,バイオディーゼル
541,biodiversity,生物多様性
542,biographical,伝記の
543,biography,伝記、伝記文字
544,biological,生物学（上）の
545,biologist,生物学者
546,biology,生物学
547,birth,誕生
548,birthrate,出生率
549,bishop,司教
550,bit,（a～）少し
551,bite,かむ、かみつく、刺す
552,bitter,苦い、つらい、辛辣な、怒りっぽい
553,blade,刃、（プロペラなどの）羽根、（草などの）葉
554,blame,非難する、責任を負わせる
555,blank,空白の、無表情な、がらんとした
556,blast,爆破する、破滅させる
557,blaze,輝く、燃え立つ、炎、きらめき、（感情などの）激発
558,bleak,暗い
559,bleed,出血する
560,blend,混ぜる、調和させる、（～に）溶け込む
561,bless,祝福する、恵みを与える
562,blessing,恵み、ありがたいもの、承認、支持、神の加護
563,blindness,盲目、無知、無分別
564,blink,まばたく、まばたきをする、まばたき
565,bliss,この上ない喜び、至福、（bliss out）いい気分になる
566,blissful,至福の
567,blister,水ぶくれ
568,block,障害物、かたまり、区画、ふさぐ、妨害する
569,blockade,(港などの)封鎖、経済[通信]封鎖
570,bloom,栄える、咲く、花、開花的、最盛期
571,blossom,花が咲く、繁栄する、開花する、花、開花
572,blow,息を吐く、（風が）吹く、を吹く、打撃
573,blueprint,設計図
574,blunt,鈍い
575,blur,ぼかす、汚す、ぼやける、汚れる、ぼやけ、汚れ
576,blurry,ぼやけた、不鮮明な
577,blush,顔を赤らめる、恥ずかしく思う、赤面すること
578,board,板、委員会、に搭乗する
579,boast,自慢する、誇る、自慢（の種）、誇り
580,bob,上下に動く、急に動く、を上下に動かす
581,bodily,身体〔肉体〕上の、肉体的な
582,boil,煮る、沸騰する、煮える、沸騰する
583,bold,大胆な、怖いもの知らず、ずうずうしい
584,bomb,爆弾、大失敗
585,bombard,を責め立てる、を砲撃（爆撃）する
586,bomber,爆撃機
587,bond,きずなをくっつける
588,boom,大流行、にわか景気
589,boost,促進する、高める
590,border,境界（線）、国境、縁、～に接する、～に縁を付ける
591,bore,退屈させる、退屈な人（もの）
592,borrow,借りる、取り入れる
593,boss,社長、雇用主、上司
594,botanical,植物の、植物学(上)の
595,botanist,植物学者
596,botany,植物学
597,bother,悩ます、困らせる、邪魔する、思い悩む、面倒、悩みの種
598,bottom,底、最下部
599,bounce,跳ねる、反射する、を弾ませる、（メールが）返送される
600,bound,跳ぶように走る、はずむ、限界、束縛された、～行きの
601,boundary,境界(線)、限界
602,boundless,無限の
603,bout,短い期間、（病気などの）発症
604,bow,おじぎする、おじぎ
605,brace,支柱(で支える)、留め金、補強する
606,brag,自慢する
607,brain,脳、頭脳、知識人、知能、知的顧問
608,brainstorming,ブレインストーミング（自由にアイデアを出し合う問題解決法）
609,brainwashing,洗脳
610,branch,枝、支店、部門
611,brand,ブランド、銘柄
612,brand-new,新品の，真新しい
613,brave,勇敢な、見事な
614,breach,違反する
615,breadth,幅、広さ、範囲
616,breakdown,崩壊、破綻、悪化、分解、分析
617,breakout,発生、脱走、逃亡
618,breakthrough,大発見、突破口
619,breakup,(人間関係の)解消、別れ
620,breast,（主に女性の）胸，乳房
621,breathe,呼吸する
622,breed,産む、育てる、品種
623,breeze,そよ風
624,bribe,わいろ
625,brick,れんが
626,bride,花嫁
627,brief,短時間の、簡潔な、簡単な要点を伝える、要約
628,briefly,少しの間に、簡潔に
629,bright,明るい、輝いている、頭が良い
630,brightness,輝き、明るさ
631,brilliant,すばらしい、才能にあふれた、きらめく
632,brisk,元気な、活発な
633,British,イギリス人、イギリス（人）の
634,broad,広範囲に及ぶ、（幅・面積の）広い
635,broadcast,放送する、言いふらす、放送された、放送
636,broaden,～を広げる、広がる
637,brochure,パンフレット、小冊子
638,bronze,青銅、青銅（色）の
639,browse,拾い読みする、閲覧する
640,bruise,あざ、打撲傷、～に打撲を負わせる
641,brush,ブラシ、ブラシをかける
642,brutal,野蛮な、残酷な、残忍な、理性のない
643,brute,獣、動物
644,Buddhism,仏教
645,budget,予算、経費、予算案、（時間、金額）をわりあてる
646,bug,虫、（機械・プログラムの）欠陥
647,buildup,増加
648,bulb,電球、球根
649,bulk,大半、大きさ、大量
650,bulky,かさばった、扱いにくいほど大きい
651,bullet,弾丸
652,bully,いじめる、いじめっ子
653,bullying,いじめ
654,bump,（ドンと）ぶつかる、ばったり会う
655,bunch,束、集団、群れ
656,bundle,包み、を束ねる、を包みにする
657,burden,負担、（重い）義務、積み荷
658,bureau,（官庁の）局、事務局、案内所
659,bureaucracy,官僚、官僚主義
660,bureaucrat,官僚
661,burglar,泥棒、強盗
662,burglary,強盗
663,burial,埋葬
664,burn,焼く（焼ける）、燃やす（燃える）
665,burrow,墓穴
666,burst,爆発する、破裂させる、突然始まる、爆発
667,bury,埋める、埋葬する、隠す
668,bush,低木、茂み
669,business,事柄、こと、商売、事業、仕事、業務
670,bustle,喧噪
671,buzz,(場所が)ざわつく、どよめく
672,bypass,バイパス
673,bystander,傍観者
674,cabinet,内閣、飾り戸棚、キャビネット
675,cactus,サボテン
676,cafeteria,社員食堂、学食
677,cage,(鳥・獣を入れる)かご、檻
678,calamity,大災害、不幸
679,calculate,計算する、予想する、判断［推定］する
680,calling,転職、職業
681,calm,落ち着いた、平静、静まる、を静める
682,calorie,カロリー
683,camel,ラクダ、黄褐色
684,campaign,選挙活動、政治活動、軍事行動、促進販売
685,campus,構内、キャンパス
686,canal,運河
687,cancel,～を取り消す、中止する
688,cancer,癌、（社会などの）害悪
689,candid,率直な
690,candidate,候補（者）、志願者
691,candlepower,燭光<光度の単位>
692,canine,イヌ科の、イヌの
693,canyon,峡谷
694,capability,能力、処理能力、将来性
695,capable,能力がある、有能な
696,capacity,（最大）容量、収容能力、（潜在）能力
697,capita,頭
698,capital,資本(金)、首都、大文字、資本の、主要な、大文字の
699,caption,説明文、キャプション、字幕
700,captive,捕らわれの、監禁された
701,capture,(人・動物)を捕らえる、引きつける、逮捕
702,carbon,炭素
703,cardboard,段ボール、厚紙、ボール紙
704,cardiologist,心臓専門医
705,cardiovascular,心臓血管の
706,care,いやと思う、気にかける、
707,career,経歴、職業、生涯、成功、出世
708,carefully,注意深く
709,cargo,貨物
710,carnivore,肉食動物〈可算〉
711,carriage,馬車、うば車<米>、（鉄壁道の）客車<英>
712,cart,カート、手押し車、荷車、運ぶ
713,cartoon,漫画、アニメ
714,carve,彫る、切り開く、切り分ける
715,carving,彫刻（作品）
716,case,症例、実例、場合、事件、主張、論拠、(the)事実
717,cash,現金
718,cashier,レジ係、会計係
719,cast,投げ(かけ)る、役を割り当てる、配役
720,castle,城
721,casual,何気ない、無頓着な、偶然の、瞬時の
722,casualty,死傷者、人的損害、災難、大事故
723,catacomb,地下埋葬場
724,catastrophe,惨事、大惨事、大災害、破局
725,category,部類、区分、範疇
726,cater,食事を出す、必要な物を提供する、欲求を満たす
727,caterpillar,いも虫、毛虫
728,Catholic,カトリックの、カトリック教徒
729,cattle,ウシ
730,causal,原因となる、因果関係の
731,causally,原因となって
732,cause,原因、理由、大義
733,caution,用心、警告
734,cautious,注意深い、用心している
735,cave,洞窟
736,cavity,穴、空洞、腔、虫歯
737,cease,やめる、やむ、終わる
738,ceaseless,絶え間ない
739,ceiling,天井、（金額などの）上限
740,celebrate,祝う、褒め称える、賛美する
741,celebration,祝賀（会）、称賛
742,celebrity,有名人
743,celestial,天体の
744,cell,細胞、個室、(刑務所の)独房、電池
745,cemetery,（共同）墓地
746,censor,検閲する
747,censorship,検閲
748,census,国勢［市勢］調査、（主に人口の）一斉調査
749,cent,（単位としての）100、セント（1/100ドル）
750,center,中心、中央、（施設としての）センター
751,centralize,（権力など）を集中させる
752,century,世紀
753,CEO,最高経営責任者
754,cereal,〔通例～s〕穀物、シリアル（穀物加工食品）
755,ceremony,（儀）式、礼儀
756,certain,ある特定の、確信している
757,certainty,確実性、確信
758,certificate,証明書、に証明書を与える
759,certify,証明する
760,chain,連鎖、鎖、束縛、チェーン（店）
761,challenge,挑戦、難問、挑戦する、異議を唱える
762,chamber,部屋、議場、議院
763,chance,機会、偶然、見込み、たまたま～する（to do）
764,change,変える、変わる、変化、釣り銭、小銭
765,channel,経路、チャンネル、海峡
766,chaos,混乱、騒動、無秩序
767,chaotic,混沌とした
768,chapel,礼拝堂
769,chapter,(書類などの)章、支部、分会
770,character,性格、個性、特徴、登場人物、人格、文字
771,characteristic,特徴
772,charge,請求する、非難する、告発する、料金、告発、責任
773,charitable,慈善の、慈悲深い
774,charity,慈善(行為)、思いやり、慈善団体[基金]、慈善事業
775,charm,魅力、魔力、魔よけ、魔法をかける、魅惑する
776,chart,図、グラフ、海図、ヒットチャート
777,chase,追跡する、追求する
778,chat,おしゃべり、おしゃべりする
779,chatter,くだらないおしゃべり
780,cheap,安い、安っぽい
781,cheat,だます、不正をする、不正行為、カンニング
782,check,預かり所、検査、点検、小切手、調べる、阻止する
783,checkout,レジ、精算台、チェックアウト
784,checkup,健康診断、検査
785,cheek,ほお
786,cheer,元気付ける、声援を送る、元気づく、喝采、元気
787,cheery,陽気な、元気な
788,chemical,化学物質（製品）、化学の、科学的な
789,chemistry,科学
790,cherish,大切に心に抱く、育てる、かわいがる、心から愛する
791,chest,胸、箱、タンス
792,chew,かむ、をかみ砕く
793,chief,主要な、最高位の、長（官）
794,childbirth,出産、分娩
795,childhood,少年［少女］時代、子供時代.
796,chill,冷やす、怖がらせる、冷える、寒気を感じる、恐怖心
797,chimpanzee（chimp）,チンパンジー
798,chin,あご(の先端)
799,chip,薄切り、かけら、（半導体の）チップ
800,choir,聖歌隊
801,choke,窒息させる、抑える、
802,cholesterol,コレステロール
803,choose,選ぶ
804,chore,日常の雑事、日課、つまらない仕事
805,Christianity,キリスト教
806,chronic,慢性の、長引く、常習の
807,chronicle,年代記、記録、物語、年代記に記録する
808,chronological,年代順の
809,chuckle,くすくす笑う
810,chunk,塊
811,cigarette,（紙）巻きタバコ
812,circle,円
813,circuit,周回すること、回路、巡回
814,circulate,循環する、循環させる、流通させる
815,circulation,循環、流通、発行部数、（情報などが）広まること
816,circumstance,状況、事情、生活状態、境遇
817,circumstances,状況
818,cite,引用する、（例として）挙げる
819,citizen,市民
820,citizenship,市民権、公民権、市民[国民]であること
821,civil,市民の、民間の、民事の
822,civility,礼儀正しさ、丁寧さ
823,civilization,文明、文明化、文化的生活
824,civilize,を文明化する
825,claim,要求する、主張する、(人命を)奪う、要求、権利、主張
826,clap,拍手する、（手を）たたく、拍手
827,clarify,明らかにする、明らかになる
828,clash,対立〔衝突〕する、ガチャンと鳴る、衝突
829,class,階級、階層、クラス、授業
830,classic,傑作、古典、第一級の、典型的な、古典の
831,classical,クラシックの
832,classify,分類する、機密扱いにする
833,clause,(法律・条約などの)条項、(文の)節
834,claustrophobia,閉所恐怖症
835,clay,粘土
836,clearly,明らかに、はっきりと
837,clergy,聖職者
838,clerical,事務の、事務職の
839,clerk,事務員、職員、店員
840,clever,賢い、利口な、うまい、巧妙な
841,click,クリックする、カチッと鳴らす、カチッと音がする
842,client,顧客、依頼人
843,cliff,崖、絶壁
844,climate,気候
845,climatic,気候(上)の、風土の
846,climb,登る（こと）
847,cling,くっつく、固執する
848,clinic,診療所、クリニック、（病院内の）～科
849,clinical,臨床の、病院の
850,clink,カチン[チリン]と鳴る[鳴らす]
851,clip,切り抜く、切り取る、クリップで留める
852,clog,（管など）を詰まらせる
853,clone,クローン、模造する、まったく同じような人[もの]
854,close,接近した、親密な、綿密な、を閉める、閉まる
855,closure,(工場・学校などの)閉鎖
856,clothes,衣服
857,clue,手がかり、ヒント
858,clumsy,ぎこちない、不細工な、不器用な
859,cluster,集まり、群れ、房、集まる、群がる、を集める
860,clutch,ぎゅっとつかむ、しっかり握ること
861,clutter,散らかす
862,coal,石炭
863,coalition,連立、合同
864,coarse,粗雑な、きめの粗い、下品な、卑猥な
865,coast,海岸、沿岸
866,coastal,沿岸(地方)の
867,code,規定、法典、符号、暗号
868,coffin,棺桶
869,cognition,認識
870,cognitive,認識（認知）の
871,coherent,一貫した、筋の通った、結束した
872,coil,ぐるぐる巻く、丸くなる、巻いたもの
873,coin,（硬貨）を鋳造する、（新語など）を作る
874,coincide,合致〔一致〕する、同時に起こる
875,coincidence,偶然の一致
876,collaborate,共同して働く、協力する
877,collaboration,合作、共同、協力
878,collage,コラージュ
879,collapse,崩壊(する)、（病気などで突然）倒れる（こと）
880,colleague,（職場の）同僚
881,collect,集める、（人が）集まる
882,collective,集団の、共同の
883,collectively,集合的に、共同で
884,college,（単科）大学
885,collide,衝突する
886,collision,衝突、対立
887,colonize,を植民地化する、を入植させる
888,colony,植民地、集団居住地、（動植物の）コロニー
889,color-blind,人種差別をしない、色覚異常の
890,column,コラム、（新聞などの）欄、円柱、（縦）列
891,coma,昏睡（状態）
892,combat,と戦う、に立ち向かう、戦闘
893,combine,組み合わせる、兼ね備える、結合する
894,comedy,喜劇
895,comet,彗星
896,comfort,快適さ、慰め、慰めをあたえてくれるもの［人］、安らぎ
897,comfortable,快適な
898,command,命令(する)、指揮(する)、支配(する)、見渡す
899,commander,司令官
900,commemorate,記念する
901,commence,始まる、始める
902,commencement,開始；〈米〉（高校・大学の）卒業式，学位授与式
903,commend,を賞賛する
904,commendable,賞賛されるべき、立派な
905,comment,"論評する(on)、意見, 論評"
906,commerce,商業、貿易、通商
907,commercial,コマーシャル、商業の
908,commission,代理手数料、歩合、委員会
909,commit,献身する、捧げる、約束する、（罪を)犯す
910,commitment,公約、献身
911,committee,（集合的に）委員会、（全）委員
912,commodity,日用品、商品
913,common,共通の、ありふれた、公共の、共有の
914,commonplace,ごく普通の、陳腐な、よくある物事、ありきたりの意見
915,communal,共同の
916,communicate,情報交換をする、伝達する
917,communication,（情報・意見などの）伝達、意思疎通、通信（網）
918,communicative,話好きの、伝達の
919,communism,共産主義
920,communist,共産主義の
921,community,地域社会、（利害などを共にする）共同社会、集団
922,commute,通勤する、通学する
923,compact,凝縮させる、圧縮させる、ぎっしり詰まった、簡潔な
924,companion,連れ、仲間
925,company,会社、仲間、（仲間と）一緒にいること、一座
926,comparable,匹敵する、同様の
927,comparative,比較の、かなりの
928,compare,匹敵する、比較する、たとえる
929,compartment,区画、仕切り客室
930,compassion,おもいやり、哀れみ、同情
931,compassionate,哀れみ〔情け〕深い(toward)
932,compatible,矛盾しない、両立できる、仲良くやっていける
933,compel,～に…することを強いる
934,compensate,埋め合わせる、弁償する、償う
935,compete,競う、〔通例否定文で〕匹敵する
936,competence,能力、資格
937,competency,能力、適性
938,competent,有能な、能力のある、適格な
939,competing,相容れない、両立しない
940,competitive,競争の、競争力がある、競争心の強い
941,compile,編集する、（資料など）をまとめる
942,complain,不平［苦情］を言う、訴える
943,complaint,不平
944,complement,補完物、補足、補語
945,complementary,補足的な
946,complete,完成させる、仕上げる、完全な、完成した
947,completely,完全に
948,completion,完了、完成
949,complex,複雑な、複合的な、合成物、脅迫概念、複合施設
950,complexity,複雑さ
951,complicate,複雑にする
952,complicated,複雑な、入り組んだ
953,complication,複雑な事柄・余病・合併症
954,compliment,ほめ言葉、賛辞、お世辞を言う
955,complimentary,無料の、賞賛する
956,comply,従う、応じる、(基準・規則などに)沿う、合致する
957,component,構成要素、成分
958,compose,構成する、組み立てる、落ち着かせる
959,composed,落ち着いた
960,composite,異なる要素からなる、複合的な、合成物、複合物
961,composition,構成、（音楽などの）作品、作文
962,compost,たい肥
963,compound,複合の、混合物、化合物、を悪化させる、を混合する
964,comprehend,理解する、把握する
965,comprehension,理解力
966,comprehensive,包括的な
967,compress,を要約する、を短縮する、を圧縮して詰め込む
968,Compression,圧縮
969,comprise,構成される、構成する、占める
970,compromise,妥協（すること）、妥協案、歩み寄り
971,compulsion,衝動、強制力
972,compulsory,義務的な、強制的な
973,compute,計算する、コンピューターを使う
974,comrade,仲間
975,conceal,隠す、秘密にする
976,concede,仕方なく認める、敗北を認める
977,conceited,うぬぼれた
978,conceivable,(物・事が)考えられる、想像できる
979,conceive,思いつく、想像する、妊娠する
980,concentrate,専念（集中）する、集中させる
981,concentration,濃度、集中、専念
982,concept,概念、考え、（商品・販売の）コンセプト
983,concern,〔受身形で〕心配している、関係する
984,concerned,関心を持っている；扱っている；懸念している
985,concession,譲歩
986,concise,簡潔な
987,conclude,結論を下す、終える、締めくくる、締結する
988,conclusive,決定的な、確実な
989,concrete,具体的な、有形の
990,condemn,非難する、〔受身形で〕（～の刑を）宣告される
991,condensation,凝縮、凝結
992,condiment,香辛料
993,condition,条件、状況、状態、～を条件づける、制約する
994,conditional,～しだいの、条件付きの
995,condo,分譲マンション
996,conduct,行う、指揮する、案内する、行為、管理
997,cone,円すい
998,confer,(賞・学位・栄誉・権利など)を授与する、相談する
999,conference,会議、協議
1000,confess,白状する、認める
1001,confession,告白
1002,confide,打ち明ける、任せる、信頼する
1003,confidence,信頼、自信、確信、秘密
1004,confident,確信して、自信に満ちた
1005,confidential,秘密の
1006,configuration,配置、形状
1007,confine,制限する、閉じ込める
1008,confirm,確かめる、（意見などを）固める
1009,conflict,闘争、衝突、対立、不一致、矛盾する
1010,conform,従う、適合する、従わせる
1011,conformance,一致、適合、順応
1012,confront,直面する、向かい合う
1013,confuse,当惑させる、混同する
1014,congestion,混雑
1015,congratulate,祝う、おめでとうと言う
1016,congregate,集まる
1017,congress,（C～）（米国の）議会、国会、大会
1018,conjecture,推測
1019,connect,つなぐ、関連づける、つながる
1020,connotation,含蓄、言外にほのめかすこと、内包
1021,conquer,征服する、占める、克服する
1022,conquest,征服、(欠点・課題などの)克服
1023,conscience,良心、分別
1024,conscious,意識している、気づいている、意識が高い
1025,consecutive,連続した、引き続いて起こる、論理の一貫した
1026,consensus,（意見の）一致、全体の意見の一致
1027,consent,同意、承諾
1028,consequence,〔通例～s〕結果、重大性
1029,consequently,その結果
1030,conservation,（動植物などの）保護、保存
1031,conservationist,自然[環境]保護論者
1032,conservative,保守的な、控えめな
1033,conserve,保存する、保護する
1034,consider,よく考える、～を…とみなす
1035,considerable,かなりの
1036,considerate,思いやりのある
1037,consist,～から成る(of～)、～にある(in～)
1038,consistency,一貫性
1039,consistent,矛盾のない、一致した
1040,consistently,絶えず、一貫して
1041,console,慰める
1042,consolidate,合併する、強固にする
1043,consonant,子音(字)
1044,conspecific,同種の
1045,conspicuous,目立つ、人目を引く
1046,conspiracy,陰謀
1047,conspire,陰謀を企てる、共謀する
1048,constant,絶え間のない、一定不変の
1049,constantly,絶えず
1050,constellation,星座、一団
1051,constituent,構成要素、有権者、構成している、選挙権のある
1052,constitute,構成する、制定する
1053,constitution,憲法
1054,constrain,～に（…することを）強いる、を抑える
1055,constraint,制約
1056,construct,組み立てる、建設する、構成する
1057,construction,建設、建築物
1058,consult,（辞書など）を調べる、（専門家）に相談する
1059,consultant,顧問、コンサルタント、相談相手
1060,consultation,相談、協議
1061,consume,消費する
1062,consumption,消費、消費量
1063,contact,接触、連絡、と連絡をとる、と接触する
1064,contagious,感染（性）の、病気を伝染する
1065,contain,含む、収容する、抑える
1066,contaminate,汚染する、悪影響を及ぼす
1067,contaminated,汚染された
1068,contemplate,熟考する、じっと見つめる
1069,contemplation,熟考、沈思
1070,contemporary,現代の、同時代の、同時代の人
1071,contempt,侮辱、軽蔑
1072,contend,争う、議論する、を主張する
1073,content,満足している、内容、中身
1074,contented,満足した
1075,contentment,満足、幸福感
1076,contest,コンテスト、競技（会）、争い
1077,context,(文の)前後関係、文脈、背景、状況
1078,continent,大陸
1079,continue,続く、を続ける
1080,continuously,連続して、継続して
1081,contract,契約する、（病気）にかかる、縮める、契約（書）
1082,contradict,矛盾する、(人の考えなど)を否定する
1083,contradiction,否定、反対の主張、矛盾
1084,contradictory,矛盾した、反対の、議論好きな
1085,contrary,反対の、逆
1086,contrast,対比する、よい対照となる、対照、相違
1087,contribute,貢献する（to）、一因となる、寄付する、を提供する
1088,contribution,貢献、寄付(金)
1089,contrive,考案〔工夫〕する、たくらむ、うまく～する
1090,control,制御する、支配する、支配（力）、抑制
1091,control group,対照群、統制群
1092,controversial,物議を呼ぶ
1093,controversy,論争、議論
1094,convenient,便利な、都合のよい
1095,convention,慣習、しきたり、会議、大会
1096,conventional,従来の、慣習的な、協定の
1097,converge,集まる、集中する
1098,conversation,会話、対談
1099,converse,会話をする、逆の
1100,conversely,逆に、反対に、[文修飾]逆に言えば
1101,convert,変える、改宗［転向］させる、交換する
1102,convey,(感情・思考など)を伝える、を運ぶ
1103,convict,に有罪を宣告する
1104,conviction,確信、有罪判決
1105,convince,（人）を確信（納得）させる
1106,cooperate,協力する、協同する
1107,cooperation,協力、共同
1108,cooperative,協力的な
1109,coordinate,調整する、組織する、（服など）をコーディネートする
1110,coordinator,コーディネーター、取りまとめ役、責任者
1111,cope,うまく処理する、うまく対処する
1112,copper,銅
1113,copulate,交尾〔性交〕する
1114,copy,模倣する、複製する、写し、（本、新聞などの）1部
1115,copyright,著作権、版権、著作権のある
1116,coral,サンゴ(製)の
1117,cordial,心温まる、心からの
1118,core,中心、核心、（果物の）芯
1119,corporation,株式会社、企業、法人
1120,corpse,死体、死骸
1121,correct,正しい、適切な、を訂正する
1122,corrective,改める、正す、(薬が)中和する
1123,correlation,相互関係、相関（関係）
1124,correspond,合致する、相当する、文通する
1125,correspondence,通信、一致
1126,corridor,回廊(地帯)、通路、廊下
1127,corrode,腐食する
1128,corrupt,墜落した、わいろのきく、～を墜落させる、～を買収する
1129,corruption,腐敗、堕落
1130,cortex,皮質、樹皮
1131,cosmetic,化粧（用）の、美容（整形）の、（通例複数）化粧品
1132,cosmic,宇宙の
1133,cosmos,宇宙、秩序、コスモス
1134,cost,犠牲、費用、（費用が）かかる、（犠牲を）払わせる
1135,costly,損失［犠牲］の大きい、高価な、豪華な
1136,cough,せき(払い)、せき払いをする
1137,council,（地方）議会、評議会、（公の）会議
1138,counsel,忠告する、（人）に～（するよう）勧める
1139,count,数える、重要である、計算
1140,counter,～と反論する、～に反対する
1141,counterfeit,偽造の、偽の
1142,counterpart,対応するもの、対の片方
1143,countless,無数の
1144,countryside,（通例the）地方、田舎、田園地帯
1145,county,【米】郡、【英】州
1146,courage,勇気
1147,court,裁判所、宮廷、庭、（テニスなどの）コート
1148,courteous,礼儀正しい、思いやりがある、丁重な
1149,courtesy,礼儀正しさ、好意、優遇
1150,courthouse,裁判所(の建物)
1151,cousin,いとこ
1152,cove,入江、小湾
1153,cover,覆う、隠す、含む、（ある距離）を行く、（範囲）に及ぶ
1154,coverage,報道
1155,coward,臆病者
1156,cowardly,卑怯な、臆病な
1157,coworker,同僚、仕事仲間
1158,co-worker,同僚、仕事仲間
1159,cozy,居心地のよい
1160,crack,割れる（割る）、ぱちっと鳴る（鳴らす）、割れ目、隙間
1161,cradle,ゆりかご、（the～で）幼年時代
1162,craft,技術、商売、手工業、悪知恵、船舶、飛行機
1163,craftsman,職人、熟練工、工芸家
1164,cram,ぎっしり詰める、詰め込み勉強
1165,cramp,痙攣
1166,crash,衝突（墜落）する（させる）、衝突、墜落、故障
1167,crave,(を)切望する
1168,crawl,はう、ゆっくり進む
1169,crazy,夢中である（about）、正気でない
1170,create,創り出す、引き起こす
1171,creativity,創造性、独創性
1172,creature,動物
1173,credibility,信用
1174,credible,信用〔信頼〕できる、確実な、(成功などの)見込みのある
1175,credit,信用、名誉、功績、(大学などの)単位、信じる
1176,creditor,債権者、貸主
1177,creep,忍び込む、のろのろ進む、はう
1178,crest,頂上
1179,crew,乗組員、乗務員、一団
1180,crime,罪、犯罪、違法行為
1181,criminal,犯罪者、犯人
1182,crisis,危機
1183,crisp,パリパリした
1184,criteria,基準
1185,criterion,(価値判断の)基準、尺度(複：criteria)
1186,critic,批判する人、批評家
1187,critical,批判的な（of）、重大な、危機的な、批評的な
1188,critically,批評的に、非常に、決定的に、危険なほどに
1189,criticism,批判
1190,criticize,批判する、批評する
1191,crocodile,ワニ
1192,crooked,曲がった
1193,crop,作物、収穫(量)、～を収穫する、(作物が)できる
1194,cross,横切る、十字（路）、混合物
1195,crouch,しゃがむ
1196,crowd,群衆、（the）大衆、群がる、に群がる
1197,crucial,決定的な、必要不可欠の
1198,crude,雑な、荒削りな、こなれていない、（態度などが）露骨な
1199,cruel,残酷な、悲惨な、ひどい
1200,cruise,遊覧航海する、ぶらぶらする、を巡航する
1201,crumble,ぼろぼろ（になる）、崩壊する
1202,crummy,いやな、薄汚れた
1203,crush,押しつぶす、つぶれる、混雑
1204,crust,地殻、パンの耳、(動物の)甲殻
1205,crystal,結晶（の）、水晶（の）
1206,cue,合図、手がかり、（次の演技の）キュー
1207,cuisine,（独特の）料理、料理法
1208,culprit,（具体的な犯罪の）犯人、（何かの問題の）元凶
1209,cult,崇拝、熱狂
1210,cultivate,耕作する、栽培する、（才能など）をみがく、養う
1211,culture,文化、教養、洗練、耕作、栽培、飼育、芸術、文学
1212,cumulative,累積する、しだいに増加する
1213,cunning,悪賢い、ずるい、ずるさ
1214,curb,抑制する、拘束する、(歩道の)縁石
1215,cure,治療する、取り除く、治療
1216,curfew,門限
1217,curiosity,好奇心
1218,curious,好奇心の強い、好奇心をそそる、奇妙な
1219,currency,通貨、普及
1220,current,現在の、通用している、流れ
1221,curriculum,カリキュラム、(学校の)教科課程
1222,curse,呪い(の言葉)、ののしり、をののしる
1223,curve,（道路などの）カーブ、曲線
1224,custody,親権、保護、管理、拘留
1225,custom,慣習、習慣、（商店などへの）愛顧、（～s）関税、税関
1226,customary,習慣的な
1227,customer,顧客
1228,cyberspace,サイバースペース
1229,cycle,周期、循環、自転車に乗る、循環する
1230,cynical,軽蔑する、冷笑的な〔に〕、皮肉な、ひねくれた
1231,dagger,短剣
1232,daily,日常（の）、毎日（の）
1233,dairy,〔集合的に〕乳製品、乳製品加工所［販売者］
1234,damage,損害を与える、損害、損傷
1235,damp,湿った
1236,danger,危険、脅威
1237,dare,あえて（～）する、～に立ち向かう、思い切って～する
1238,daring,大胆な、勇敢な
1239,data,（単複両扱い）情報、データ（単数形はdatum）
1240,database,データベース、データの集積
1241,dawn,夜明け、始まり、わかり始める
1242,daylight,昼間、公表
1243,dazed,呆然とした
1244,dazzle,の目をくらます、目がくらむこと、輝き
1245,deadline,締め切り
1246,deadlock,行き詰まり
1247,deadly,致命的な、命にかかわる
1248,deaf,耳が聞こえない
1249,deal,扱う、対処する、分配する
1250,death,死（亡）
1251,debatable,議論の余地のある
1252,debate,議論、論争、討論する、論争する
1253,debris,（破壊された後の）残骸、瓦礫、がらくた
1254,debt,借金（状態）
1255,debut,デビュー、初舞台、デビューする
1256,decade,10年間
1257,decay,腐敗する、（徐々に）衰える
1258,deceased,死去した
1259,deceitfully,偽って、人を惑わすように
1260,deceive,だます
1261,decency,礼儀正しさ、良識
1262,decent,まともな、まあまあの、慎みのある、かなりよい、きちんとした
1263,deception,詐欺
1264,deceptive,人を惑わすような
1265,decide,決める、決意する、決着をつける
1266,decision,決定、決心
1267,decisive,決定的な、断固とした
1268,declaration,宣言、公表、申告
1269,declare,宣言する、言明する、断言する
1270,decline,減少、衰退、低下、減少する、衰退する、を断る
1271,decode,(暗号・符号)を解読する
1272,decorate,装飾する
1273,decoration,飾り、飾り付け、装飾品
1274,decrease,減少する、を減らす
1275,dedicate,ささげる
1276,dedicated,献身的な、熱心な
1277,deduce,推論[推定、演繹]する、(結論)を出す
1278,deduct,を控除する、を減じる
1279,deed,行為、行い
1280,deem,[他] (Ｏ (to be)Ｃ)ＯをＣだと思う
1281,deer,シカ（複数形も同形）
1282,default,初期設定、デフォルト、不履行
1283,defeat,失敗(させる)、敗北（させる）
1284,defect,欠陥、欠点、障害
1285,defective,欠陥のある
1286,defend,防御する、弁護する
1287,defendant,被告(人)
1288,defensive,防御的な
1289,defiant,挑戦（反抗）的な
1290,deficiency,不足、欠陥
1291,deficit,不足（額）、欠損
1292,define,定義する、明確に定める
1293,definite,明確な
1294,definitely,絶対
1295,definition,定義
1296,deflate,(タイヤ・風船などが)しぼむ、をしぼませる
1297,deflect,(人の注意・非難など)をそらす、の方向を変えさせる
1298,deforestation,森林破壊
1299,deformity,変形、奇形
1300,defy,逆らう、反抗する、挑む
1301,degrade,の品位を下げる、(価値・品質)を下げる、低下する
1302,degree,学位、（温度・角度などの）度、程度、段階
1303,dehydrate,を脱水する、(野菜など)から水分を抜く
1304,dehydration,脱水(症状)
1305,dejected,落胆した、元気のない
1306,delay,遅延、延期、を遅らせる、を延期する、のろのろする
1307,delegate,(権限など)を委任する、(人)を代表として派遣する
1308,delegation,代表派遣、使節
1309,delete,削除する、消す
1310,deliberate,慎重な、意図的な、落ち着いた、ゆっくりの、熟考する
1311,deliberately,故意に
1312,delicate,繊細な、かよわい、（問題などが）微妙で扱いにくい
1313,delight,大きな喜び、を大喜びさせる、楽しむ
1314,delinquent,非行の
1315,delirious,精神が錯乱した
1316,deliver,配達する、（演説など）をする、（子）を出産する
1317,demand,要求する、要求、需要
1318,dementia,認知症
1319,demise,消滅、終わり、死去
1320,democracy,民主主義、民主政治、民主国家
1321,democratic,民主主義の、民主的な
1322,demographic,人口統計学の
1323,demographics,人口統計の
1324,demolish,破壊する、粉砕する
1325,demonstrate,証明する、実演する、デモをする
1326,demote,を降格する
1327,denial,否定、拒否
1328,denounce,非難する、責める
1329,dense,密集した、濃い
1330,density,密度
1331,dent,へこみ
1332,deny,～を否定する、～を（…に）与えない
1333,depart,出発する、（～から）それる（from）
1334,department,部門、学科、～省、（百貨店などの）売り場
1335,departure,出発
1336,depend,頼る、依存する、左右される、（～によって）決まる
1337,dependency,依存、従属
1338,depict,描写する
1339,depiction,描写
1340,deplore,嘆き悲しむ、非難する
1341,deploy,を有効活用する、を配置する
1342,deposit,置く、預金する、預金、手付金、堆積物
1343,depot,倉庫
1344,deprecate,を非難する、に反対を唱える
1345,depress,落胆させる、押し下げる、憂鬱にさせる
1346,depression,憂うつ、うつ病、不況、低気圧
1347,depressive,憂うつな、うつ病の
1348,deprivation,喪失、欠乏、はく奪
1349,deprive,～から（～を）奪う、～から剥奪する
1350,depth,深さ
1351,derive,由来する、～を得る
1352,descend,（be ～ed）由来する、を降りる、伝わる
1353,descendant,子孫
1354,descent,下降、降下、下り坂、家系
1355,describe,描写する、～を（…だと）言う、説明する
1356,description,描写、説明
1357,desert,(見)捨てる、砂漠、不毛の
1358,deserted,人気のない
1359,deserve,～に値する、～を受ける価値がある
1360,design,設計する、設計（図）、デザイン、意図
1361,designate,指名する、指定する、指名された
1362,desirable,望ましい
1363,desire,欲望、要望、（強く）を望む
1364,desolate,寂しい、孤独な、荒れ果てた、みじめな、を寂しくさせる
1365,despair,絶望
1366,desperate,自暴自棄の、絶望的な、（～したくて）たまらない
1367,despise,軽蔑する、ひどくきらう
1368,despite,～にもかかわらず
1369,destination,目的地
1370,destined,運命である
1371,destiny,運命
1372,destroy,破壊する、滅ぼす、殺す
1373,destruction,破壊、破滅
1374,detach,切り離す、取り外す
1375,detached,切り離された
1376,detachment,超然、分離
1377,detail,詳細、細部
1378,detain,拘留する
1379,detect,感知する、見つけ出す、に気づく
1380,detention,拘置、留置
1381,deter,妨げる、思いとどまらせる
1382,deteriorate,悪化する、低下する
1383,determine,決意する、はっきりと決める
1384,deterrent,抑止するもの
1385,detonate,爆発する
1386,detour,迂回(路)、回り道
1387,detriment,損害、損失
1388,detrimental,（to ～）（～に）有害な
1389,devalue,（通貨を）切り下げる
1390,devastate,壊滅させる
1391,develop,発達する、を発達させる、を開発する、を発症する
1392,developer,宅地造成業者、開発者
1393,device,装置、機器、方策、デバイス
1394,devious,不誠実な
1395,devise,考案する
1396,devoid,欠いている、持っていない
1397,devote,充てる、ささげる
1398,devoted,献身的な、熱中している
1399,devour,むさぼり食う
1400,diabetes,糖尿病
1401,diagnose,診断する
1402,diagnosis,診断
1403,diagonally,斜めに、対角線的に
1404,diagram,図(表)
1405,dialect,方言、地方語
1406,dialogue,対話、会話、意見の交換
1407,diameter,直径、倍率
1408,diarrhea,下痢
1409,dictate,書きとらせる、命令する
1410,dictator,独裁者
1411,dictum,格言、意見
1412,diet,食事、ダイエット、食習慣、（the D-）国会
1413,dietary,食事の
1414,differ,異なる、意見が合わない、違う
1415,differently,異なって
1416,difficulty,困難(さ)
1417,diffuse,放散させる、流布させる、広まる、発散(流布)した
1418,dig,掘る、探求する
1419,digest,消化する、理解する、要約する
1420,digestion,消化（作用）
1421,digestive,消化の
1422,digit,数字
1423,digital,デジタル方式の、デジタル［数字］表示の
1424,dignity,威厳、気品、尊厳
1425,dilemma,ジレンマ、板挟み
1426,diligent,勤勉な、一生懸命な、念入りな、骨を折った
1427,dilution,希釈
1428,dim,ぼんやりした、かすかな
1429,dimension,局面、次元、寸法、重要性
1430,diminish,減らす、減少する
1431,dining,食事（をすること）
1432,dinosaur,恐竜
1433,dioxide,二酸化物
1434,dip,ちょっと浸る、浸す、沈む、ちょっと浸すこと、低下
1435,diploma,卒業〔終了〕証書、学位授与証
1436,diplomacy,外交（的手腕）
1437,diplomat,外交官
1438,diplomatic,外交的な、外交官の、外交的手腕に優れた、外交上の
1439,direct,道を教える、向ける、指図（指示）する
1440,direction,方向、指導
1441,directly,直接に
1442,dirt,汚れ、泥
1443,disability,障がい
1444,disabled,障がいのある、障がい者用の
1445,disadvantage,不利（な点）、障害、（信用などの）損失
1446,disadvantaged,(経済的・社会的に)恵まれない
1447,disagree,不賛成である、意見が食い違う
1448,disappear,消える、見えなくなる
1449,disappoint,失望させる、（希望など）をくじく
1450,disapprove,賛成しない、を認めない
1451,disarm,武装解除する
1452,disaster,（大）災害
1453,disastrous,悲惨な、災害を引き起こす
1454,disband,解散する
1455,discard,(不用品・習慣・友人など)を捨てる、放棄
1456,discern,見つける、見分ける、識別する
1457,discharge,放出する
1458,disciplinary,規律の、規律に関する、学科の
1459,discipline,訓練する、しつける、訓練、しつけ、規律
1460,disclose,公表する、暴く
1461,discomfort,不快、不便
1462,disconnect,(人)のインターネットへの接続を切る、の接続を断つ
1463,discontent,不満
1464,discord,不一致、不和
1465,discount,割引（率）、を割引する、（話など）軽視（無視）する
1466,discourage,やる気をなくさせる、落胆させる
1467,discouraging,がっかりさせる
1468,discourse,話し合い、会話、講演、論説
1469,discover,（偶然に）を発見する、に気づく
1470,discredit,に疑いをかける、の信憑性を失わせる
1471,discreet,思慮分別のある、目立たない
1472,discriminate,差別する、識別する、～を区別する
1473,discrimination,差別、区別
1474,discriminatory,差別的な
1475,discuss,～について話し合う
1476,disdain,軽蔑、を軽蔑する
1477,disease,病気
1478,disgrace,不名誉
1479,disguise,変装する、隠す、見せかけ、ごまかし
1480,disgust,嫌悪、をむかむかさせる
1481,dish,皿、（皿に盛った）料理
1482,dishonesty,不正(行為)、不正直
1483,dislike,嫌う、嫌悪
1484,dislocate,を脱臼させる、を混乱させる
1485,dismal,気分を暗くさせる
1486,dismantle,分解する
1487,dismay,ろうばいさせる、落胆させる、ろうばい、落胆
1488,dismayed,うろたえ
1489,dismiss,無視する、解雇する、解散する
1490,disobedient,従順でない、違反する
1491,disorder,障害、（心身の）不調、混乱
1492,disown,関係を否定する
1493,disparity,不釣り合い、相違
1494,dispatch,派遣する、発送する、処理する
1495,dispel,追い散らす
1496,dispense,分配する、配給する、施す、投薬する
1497,disperse,分散させる、散布する、広める、消散する
1498,displace,～に取って代わる、移動させる
1499,display,陳列する、示す、見せびらかす、展示、表に出すこと
1500,displeasure,不満、不快
1501,disposable,使い捨ての
1502,disposal,処分、処理、処分の自由、(人・物などの)配置
1503,dispose,処置する、処分する、配置する、～を…する気にさせる
1504,disprove,の誤りを証明する、の反証を挙げる
1505,dispute,討論、紛争を議論（論争）する、に反論する
1506,disregard,無視する、軽視する、無視、軽視
1507,disrupt,中断させる、混乱させる、分裂させる
1508,dissatisfied,不満な、不満そうな
1509,dissolve,溶かす、解散する、解消する、溶ける
1510,distance,距離
1511,distant,遠い、距離のある、（関係が）冷ややかな
1512,distinct,明らかに異なる、明瞭な
1513,distinctly,はっきりと、明確に、本当に
1514,distinguish,"区別する, 見分ける"
1515,distort,ゆがめる、ねじる
1516,distortion,ゆがみ、歪曲、ゆがめられた物〔状態〕
1517,distract,そらす
1518,distraction,気が散ること、気を散らすもの、気晴らし
1519,distress,苦悩、疲労、困窮、を苦悩させる
1520,distribute,分配する、〔受身形で〕分布する
1521,distribution,分配、配給
1522,district,地域、地区
1523,disturb,かき乱す、妨害する、邪魔をする
1524,disturbance,妨害、騒乱
1525,ditch,溝
1526,diverge,分岐する、分かれる、異なる
1527,divergence,逸脱，相違，《数学》発散
1528,diverse,さまざまな
1529,diversion,気晴らし、注意をそらすこと、目的変更、方向転換
1530,diversity,多様性、相違点
1531,divert,そらす、迂回させる、転用する
1532,divide,分割する、分離する、分ける、分類する
1533,divine,神の、神にささげる
1534,division,部門、分割、分配、割り算
1535,divorce,離婚する、～を（…から）分離する
1536,dizzy,めまいのする、目もくらむような
1537,do,～に～をもたらす、役に立つ、～をする
1538,dock,埠頭、波止場、(艦船の)ドック
1539,doctorate,博士号
1540,doctrine,教義、主義
1541,document,記録する、文書、記録
1542,dodge,を巧妙に逃れる
1543,dogma,教義、定説； 独断
1544,dollar,ドル、１ドル紙幣
1545,dolphin,イルカ
1546,domain,(活動・関心・知識などの)領域、分野、範囲、領地、領土
1547,domestic,家庭の、国内の、（動物が）飼いならされた
1548,domestication,飼いならすこと、順応
1549,dominance,支配、優勢
1550,dominant,支配的な、より優位にたつ
1551,dominate,支配する、優勢である
1552,donate,寄付する、贈与する、（臓器・血液）を提供する
1553,donation,寄贈〔寄付〕、(血液・臓器などの)提供
1554,donkey,ロバ
1555,doom,破滅、運命、死、を運命づける(to)
1556,doomed,運命にある
1557,dormant,（火山などが）休止状態の，眠っている
1558,dormitory,寮
1559,dose,（薬の1回分の）服用量
1560,dot,点、しみ
1561,doubly,二重に、二倍に
1562,doubt,疑う、～ではないと思う
1563,doubtful,疑わしい、疑っている
1564,downfall,破滅、転落、(雨・雪などの)大降り
1565,downplay,を軽く扱う
1566,downright,まったく、まったくの、率直な
1567,downtown,町の中心街、町の中心街へ
1568,downturn,(景気などの)下降(状態)
1569,dozen,ダース（12個）（の）
1570,draft,下書き、為替手形、すき間風
1571,drag,引きずる、のろのろと進む、だらだらと続く
1572,drain,排出させる、空にする、使い果たす、水がはける、徐々に尽きる
1573,drama,ドラマ、演劇
1574,dramatic,劇的な、演劇の
1575,drastic,徹底的な、思い切った、猛烈な、抜本的な
1576,drastically,劇的に
1577,draw,引く、描画する、近づく、引き分け
1578,drawback,欠点、不利な点
1579,dread,ひどく恐れる、恐怖
1580,dreadful,ひどい、いやな、恐ろしい
1581,dreary,わびしい、退屈な
1582,dress,衣服を着せる、ドレス、衣服
1583,drift,漂う、（知らぬ間に）移り変わる、漂流物
1584,drill,訓練、（反復）練習、ドリル、錐
1585,drive,駆り立てる、（車）を運転する、車で送る、衝動
1586,drizzle,霧雨（が降る）
1587,drone,ドローン、(無線操作の)無人機
1588,droop,垂れ下がる
1589,drought,干ばつ、（慢性的な）不足
1590,drown,溺死させる、溺れ死ぬ、ずぶ濡れになる
1591,drowsy,眠い
1592,drug,薬、麻薬
1593,dual,二の、二重の
1594,dubious,疑わしい、信用できない、疑っている
1595,due,～するはず、到着予定で、期限が来て、当然支払うべき、正当な
1596,dull,退屈な、（色などが）くすんだ、曇った
1597,dumb,口が利けない、ばかな、愚かな
1598,dump,捨てる、ドサッと落とす、ごみ捨て場、ごみの山
1599,dumping,（ごみなどの）投げ捨て、投棄
1600,duplicate,複製する
1601,durable,耐久性がある、長持ちする：（状況などが）長く続く
1602,duration,（時間の）継続、持続（時間）
1603,dust,ほこり
1604,Dutch,オランダ人[語](の)
1605,dutiful,忠実な
1606,duty,任務、義務、関税
1607,dwell,住む、宿る
1608,dweller,居住者
1609,dwindle,低下する、だんだん小さくなる
1610,dye,染料、染まる（染める）
1611,dynamic,活動的な、精力的な、動的な
1612,eager,熱望して、熱心な
1613,early,早く、初期に；早い、初期の
1614,earn,（働いてお金など）を稼ぐ、（名声など）を得る
1615,earnest,熱心な、真剣な、重大な、厳粛な
1616,earthquake,地震
1617,earthworm,ミミズ
1618,ease,容易さ、安楽さ、を和らげる、を取り除く
1619,east,東（部）（の）
1620,eccentric,常軌を逸した、一風変わった、変な
1621,echo,まねる、踏襲する、反響させる；こだま、反響、繰り返し
1622,eclipse,（日食・月食などの）食、（名声などの）失墜
1623,ecological,生態学の
1624,ecologist,生態学者、環境保護論者
1625,ecology,生態学、生態(系)、自然環境、エコロジー
1626,economic,経済(学)の
1627,economical,経済的な、安上がりな
1628,economist,経済学者
1629,economy,経済（状態）、経済圏、節約
1630,ecosystem,生態系
1631,ecstatic,有頂天の
1632,edge,端、ふち、刃（先）
1633,edible,食用の、食べられる
1634,edit,編集する
1635,edition,(刊行物の)版
1636,editor,編集者、編集長
1637,editorial,社説
1638,educate,教育する、に教える、（能力など）を養う
1639,education,教育
1640,educator,教育者、教師、教育学者(米)
1641,eel,ウナギ
1642,eerie,不気味な
1643,effect,影響、効果、結果、（結果を）もたらす
1644,effective,効果的な
1645,efficient,効率的な、有能な、効率的に仕事をこなす
1646,effort,努力
1647,ego,うぬぼれ、自我
1648,Egypt,エジプト
1649,eject,を取り出す、を追い出す
1650,elaborate,詳しく述べる、手の込んだ、複雑な
1651,elbow,ひじ
1652,elderly,初老の、年配の
1653,elect,～を選ぶ、～を選挙で選ぶ
1654,election,選挙、当選
1655,electric,電気の、電気で動く
1656,electrical,電気の、電気を扱う
1657,electricity,電気
1658,electrode,電極
1659,electronic,電子（工学）の
1660,elegant,優雅な、上品な
1661,element,要素、元素、基礎、自然の力
1662,elemental,すさまじい、根本的な、自然の
1663,elementary,初級の、基本的な
1664,elevate,を上げる、を昇進させる
1665,elevation,向上、昇進、上げること、標高
1666,elevator,エレベーター
1667,eligible,適格の、資格のある、（結婚相手として）望ましい
1668,eliminate,～を除去する、～を完全になくす、～を取り除く
1669,elite,〔通例the～〕〔集合的に〕エリート
1670,elk,ヘラジカ
1671,eloquent,雄弁な、よく表す(of)
1672,elsewhere,どこか他のところに
1673,embark,乗り込む、着手する
1674,embarrass,当惑させる、困らせる、恥ずかしい思いをさせる
1675,embassy,大使館、大使館員
1676,embed,〔通例受身形で〕埋め込まれる、はめ込まれる
1677,embody,（思想など）を具体化する
1678,embrace,含む、（考えなど）を受け入れる、（人）を抱きしめる
1679,emerge,現れる、明らかになる、抜け出す
1680,emergency,非常事態、緊急事態
1681,emigrate,移住する
1682,emigration,移住、移民団
1683,eminent,著名な、すぐれた、卓越した
1684,emission,放出（量）
1685,emit,放出する、出す、送る
1686,emotion,感情、情動、感動
1687,empathy,感情移入、共感
1688,emperor,皇帝
1689,emphasize,強調する、重点を置く
1690,empire,帝国、大企業
1691,empirical,実験〔実証・経験〕に基づいた
1692,employ,雇う、使う
1693,employee,従業員
1694,employment,雇用
1695,empower,権限を与える
1696,empty,空になる、を空にする、空の、空虚な
1697,emulate,見習う
1698,enable,（人）が…できるようにする、を可能にする
1699,enact,制定する
1700,encase,を入れる、を含む
1701,enchant,魅了する、魔法をかける
1702,enclose,同封する、取り囲む
1703,encompass,[他] ～を含む
1704,encounter,遭遇する、（思いがけず）出会う
1705,encourage,～を…するよう励ます、促進する
1706,encouraging,勇気づける、望みを持たせる
1707,encyclopedia,百科事典
1708,end,端、終了、目的、終わらせる、終わる
1709,endanger,危険にさらす
1710,endangered,絶滅の危機に瀕した
1711,endeavor,努める、努力
1712,endocrine,内分泌の
1713,endorse,を推奨する
1714,endow,授ける、与える、寄付する
1715,endowed,恵まれる
1716,endure,耐える、持ちこたえる
1717,enemy,敵（軍）
1718,energetic,（人，運動などが）活発な
1719,energy,エネルギー、活力
1720,enforce,施行［実施］する、強制する
1721,engage,引き付ける、雇う、従事させる、婚約させる、従事する
1722,engineering,工学(技術)
1723,enhance,高める、より良くする
1724,enjoyment,楽しみ、享受
1725,enlighten,啓発する、啓蒙する、教える、知らせる
1726,enlightened,進んだ考えの
1727,enlightenment,啓蒙、啓発
1728,enlist,入隊する、参加する、(支持・協力)を得る
1729,enormous,巨大な、莫大な
1730,enough,十分な、十分に、必要なだけの数量
1731,enrage,を憤慨させる
1732,enrich,豊かにする、濃縮化する
1733,enroll,登録する、入会する、を登録させる
1734,enrollment,登録
1735,ensue,続いて起こる
1736,ensure,確実にする、守る
1737,entail,伴う、引き起こす、含む
1738,entangle,もつれさせる、絡ませる、巻き込む
1739,enter,～に入る、～を記入する、～に加わる
1740,enterprise,企業、事業、企画、進取の気性
1741,entertain,楽しませる、もてなす、考慮する、心に抱く
1742,entertainment,娯楽、催し物、接待
1743,enthusiasm,熱情、熱意
1744,enthusiastic,熱狂的な、熱心な
1745,entice,誘惑する
1746,entire,全体の、全部の、完全な
1747,entirely,まったく
1748,entitle,資格を与える、権利を与える、表題を付ける
1749,entitled,得る権利がある、題された
1750,entity,存在、存在物、統一体
1751,entrepreneur,起業家、事業家
1752,entrust,AにBを任せる
1753,envelop,包む
1754,envelope,封筒
1755,envious,うらやんで、うらやましそうな
1756,environment,環境
1757,envision,を心に思い描く、を想像する
1758,envoy,使節
1759,envy,うらやむ、ねたむ、ねたみ、うらやむ気持ち
1760,epidemic,伝染病、伝染病の流行、伝染病の、流行の
1761,epidemiology,疫学、流行病学
1762,episode,出来事、エピソード、１話
1763,epoch,時代、画期的な出来事
1764,equal,等しい、匹敵する、平等な
1765,equality,平等、対等
1766,equate,等しいとみなす、等しくする
1767,equation,方程式、同一視、均衡
1768,equator,赤道
1769,equip,備え付ける、装備する、身につけさせる
1770,equipment,装備、備品
1771,equivalent,同等の、担当する、同等のもの
1772,era,（政治・歴史上重要な）時代
1773,eradicate,[他] ～を根絶する
1774,erase,消し取る、削除する
1775,erect,建てる、直立させる、直立した
1776,erode,腐食する； ～を腐食する、侵食する
1777,erosion,浸食、衰え
1778,errand,（人の）使い、使い走り、用件
1779,erratic,不規則な
1780,error,（基準から外れた）誤り
1781,erupt,（火山が）噴火する、勃発する
1782,eruption,噴出、噴火、発生
1783,escape,逃げる、免れる、脱出、逃避
1784,escort,を護衛[護送]する、に付き添う
1785,essay,（学生に課される）レポート、エッセイ
1786,essential,必要不可欠な、本質的な
1787,establish,設立する、確立する、立証する
1788,establishment,設立、制定、組織
1789,estate,財産、地所
1790,esteem,尊敬、尊重、評価、を尊ぶ、とみなす〔思う〕
1791,estimate,見積もる、判断（評価）する、見積もり（書）、判断
1792,estimation,評価、意見、判断
1793,eternal,永遠の、不変の
1794,eternity,永久、永遠
1795,ethic,倫理、道徳、倫理［道徳］規範
1796,ethical,倫理(上)の、道徳の
1797,ethics,倫理学（観）、道徳（律）
1798,ethnic,民族の、人種の、民族特有の
1799,euphoria,幸福感
1800,Europe,ヨーロッパ
1801,evacuate,を避難させる、から立ち退く
1802,evacuated,避難した
1803,evade,避ける、回避する
1804,evaluate,評価する、査定する
1805,evaporate,蒸発する、消散する、を蒸発させる
1806,even,…さえ、（比較級の前で）いっそう
1807,event,(重要な)出来事、事件
1808,eventually,結局、最終的に
1809,everyday,日常の、毎日の
1810,evidence,証拠、（事実を示す）形跡
1811,evident,明白な、明らかな
1812,evil,害悪、邪悪、邪悪な
1813,evoke,呼び起こす、引き起こす、誘い出す
1814,evolution,進化(論)、発展
1815,evolve,（徐々に）発展する、進化する
1816,exact,正確な、まさにその
1817,exactly,ちょうど、正確に
1818,exaggerate,誇張する、強調する、誇張する
1819,exaggeration,誇張
1820,examine,調べる、診察する、尋問する
1821,excavate,[他] ～を発掘する
1822,excavation,発掘
1823,exceed,～を超える、～より勝る
1824,excel,秀でている、に勝る、より優れている
1825,excellent,非常に優れた
1826,except,～を除いて、 ～以外は
1827,exception,例外
1828,exceptional,例外的に優れた、まれな
1829,excerpt,抜粋、引用
1830,excess,過剰、超過
1831,excessive,過度の
1832,exchange,交換する、交換し合う、両替する
1833,excite,興奮させる
1834,exclaim,（突然）叫ぶ
1835,exclude,除外する
1836,exclusive,高級な、排他的な
1837,exclusively,もっぱら，～専用で
1838,excursion,遠足、団体の小旅行、脱線、逸脱
1839,excuse,許す、言い訳をする
1840,execute,実行〔遂行〕する、死刑を執行する、処刑する
1841,executive,(経営)幹部、執行権のある、行政の
1842,exempt,免除する
1843,exemption,(義務・責任などの)免除
1844,exercise,課題、行使、練習、運動、行使する、運動させる[する]
1845,exert,（力など）を用いる、を行使する、努力する、尽力する
1846,exhale,(息・煙・言葉など)を吐き出す
1847,exhaust,疲れ果てさせる、使い尽くす、排気する
1848,exhausted,疲れ切っている
1849,exhibit,展示する、（感情や能力）を示す、展示（品）
1850,exile,国外追放、亡命、国外追放する
1851,exist,存在する、生存する
1852,existence,存在、生存
1853,exotic,異国風の、（動植物などが）外来の、風変わりな
1854,expand,拡大する、広がる、膨張する
1855,expect,予期する、～を期待する、～だろうと思う
1856,expectancy,期待、見込み
1857,expectation,期待、予期、予想
1858,expedition,遠征、探検隊、小旅行
1859,expel,追い出す、追い払う
1860,expend,（労力・金・時間など）を費やす、を消費する
1861,expenditure,支出
1862,expense,〔～s〕経費、費用、犠牲
1863,expensive,高価な
1864,experience,経験、体験
1865,experienced,熟練した
1866,experiment,実験
1867,experimental,実験の、実験[試験]的な
1868,expert,専門家、熟練者、熟達した
1869,expertise,専門知識、専門的意見
1870,expire,(契約などが)終了する、死ぬ、息を吐きだす
1871,explain,説明する
1872,explicit,明白な、率直な
1873,explode,爆発する、急増する、を論破する
1874,exploit,（資源など）を開発する、～を搾取する、～を利用する
1875,exploration,探検、調査
1876,explore,調査［探究］する、探検［探査］する
1877,explosion,爆発
1878,exponential,（増加が）指数関数的な，急激な
1879,export,輸出する、外国に広める、輸出、輸出品
1880,expose,さらす、暴露する、露出する
1881,exposure,身をさらすこと、暴露
1882,express,はっきりした、急行の、速達便の
1883,expression,表現、表情
1884,exquisite,この上なく優れた、たいへんすばらしい
1885,extend,延長する、～を拡大する、～を示す、～を施す
1886,extensive,広範囲の、大規模な
1887,extent,程度、範囲
1888,exterminate,根絶する、皆殺しにする
1889,external,外部の、対外的な
1890,extinct,（動物のある種族などが）絶滅した、消えた
1891,extinction,絶滅
1892,extinguish,消す、失わせる
1893,extra,追加の、余分の、別勘定の
1894,extract,抽出する、引き出す、抽出物、抜粋
1895,extraordinary,並はずれた、異常な、驚くべき
1896,extravagant,仰々しい、金遣いの荒い、ぜいたくな
1897,extreme,極端な、極度の、過激な
1898,extremely,非常に
1899,extrovert,外向的な、社交的な
1900,eyebrow,眉毛
1901,eyelash,まつげ
1902,eyelid,まぶた
1903,eyesight,視力、資格
1904,eyesore,目ざわりなもの
1905,fable,たとえ話、つくりばなし
1906,fabric,織物、織り方、基本構造[関係]
1907,fabricate,をでっち上げる、を組み立てる
1908,fabulous,すばらしい
1909,facade,うわべ、見せかけ
1910,face,～に直面する、～に面する
1911,facial,顔の
1912,facilitate,を促進する、を容易にする
1913,facilitated,促進された
1914,facility,施設、設備、容易さ、能力
1915,fact,事実
1916,factor,要因、因子
1917,factory,工場
1918,faculty,能力、才能、機能、(大学の)学部、教授陣
1919,fade,あせる、消えていく、しぼむ
1920,fail,失敗する、～しない、できない(to do)、役立たない
1921,failure,失敗
1922,faint,かすかな、弱々しい、ぼんやりした、気を失いそうな
1923,fair,公平な、公正な、まあまあの、かなりの、美しい、品評会
1924,fairly,かなり、適切（公平）に
1925,fairy,妖精の（ような）
1926,faith,信頼、信仰（心）
1927,fake,偽造する、のふりをする
1928,fallacy,誤った考え、誤信、錯誤
1929,FALSE,誤った、間違った、うその、偽りの、真実とは違う
1930,falsify,を偽造する
1931,fame,名声
1932,familiar,精通した、なじみのある
1933,familiarize,慣れさせる
1934,famine,飢饉、（食糧・物資の）ひどい不足
1935,famous,有名な
1936,fanatical,狂信的な、熱狂的な
1937,fancy,空想、好み、高価な、装飾的な、を想像する、を好む
1938,fantasize,空想する
1939,fantastic,すてきな、途方もない、架空の
1940,fantasy,空想、幻想、幻想的作品
1941,far,大いに、遠くへ、ほど遠い[=決して～でない]
1942,fare,（交通機関の）運賃
1943,farewell,お別れ
1944,farming,農業
1945,fascinate,魅惑する、うっとりさせる
1946,fascination,魅力、引きつけられること
1947,fashion,流行、ファッション、方法、流儀
1948,fast,速い、固定した、しっかりと、ぐっすりと、断食する
1949,fasten,しっかり留める
1950,fat,太っている、脂肪（分）
1951,fatal,致命的な、取り返しのつかない
1952,fatality,死亡者
1953,fate,運命、結末、最期
1954,fatigue,疲労
1955,fault,誤り、欠陥、欠点、（落度などの）責任
1956,faulty,(機械・装置などが)欠陥のある
1957,favor,好意、親切な行為、支持、賛成する、えこひいきする
1958,favorable,好意的な、好ましい
1959,favorite,お気に入りの（もの）
1960,fear,恐れる、気づかう、恐怖、心配
1961,feasible,（計画・方法などが）実現［実行］可能な
1962,feast,ごちそう、祝宴、祝祭(日)
1963,feat,功績、(熟練体力を要する)妙技、離れ業、偉業
1964,feather,羽、羽毛
1965,feature,特徴、（複数）顔立ち、呼び物、を呼び物とする
1966,featureless,特色のない、感じやすい
1967,federal,連邦（政府）の
1968,federation,連邦、連邦国家
1969,fee,（参加・入場の）料金、（専門職への）謝礼
1970,feeble,弱々しい、ひ弱な
1971,feed,食べ物［乳］を与える、供給する、餌を食べる
1972,feeling,感情、（漠然とした）感じ、感覚
1973,fellow,仲間、奴、同僚、同級生、男
1974,female,女性（の）、雌（の）
1975,feminine,女らしい
1976,ferocious,残忍な、ものすごい
1977,fertile,肥沃な、創造力豊かな、（動植物が）生殖力のある
1978,fertility,多産、繁殖能力（のあること）、肥沃なこと
1979,fertilizer,肥料
1980,fetch,取って来る、連れてくる、進路を取る、取って来ること
1981,feudal,封建時代［制度］の、封建的な
1982,fever,熱、熱狂
1983,fiber,繊維(の１本)、繊維質、食物繊維
1984,fiction,小説、フィクション、作り話、虚構
1985,fictional,架空の、フィクションの
1986,fictitious,架空の、偽りの
1987,field,場、畑、田、野原、競技場、分野
1988,fierce,どう猛な、激しい、厳しい
1989,fight,戦う、けんか、戦い
1990,figure,と思う、数字、姿、（～な）人物、図形
1991,file,(書類などの)ファイル、（書類などを）提出する
1992,fill,満たす、占める
1993,film,映画、フィルム
1994,filter,フィルター、濾過機、染み出る、を濾過する、を取り除く
1995,filthy,汚い、不潔な
1996,finale,終楽章、フィナーレ
1997,finally,とうとう、終わりにあたって
1998,finance,融資する、資金を提供する
1999,financial,財政（上）の、財界の
2000,finding,発見（物）、報告、判決
2001,fine,すばらしい、細かい、罰金、～に罰金を科す
2002,fingerprint,指紋
2003,finite,有限の、限られた
2004,fire,（労働者）を首にする、（銃など）を発射する
2005,fireplace,暖炉
2006,firm,堅固な、しっかりした、安定した、会社
2007,first,第一の；まず第一に；最初のうちは
2008,firsthand,直接の
2009,fisherman,漁師、釣り人
2010,fist,握りこぶし
2011,fit,合う、取りつける、適した、体調がよい、発作
2012,fix,修理する、（食事など）を用意する、固定する、決める
2013,flame,火炎、光彩、（顔・頬などが）赤らむ、（炎を上げて）燃える
2014,flap,パタパタ動く、羽ばたく、をパタパタ動かす
2015,flare,ぱっと燃え上がる
2016,flash,ひらめき、閃光、ひらめく、ぴかっと光る
2017,flat,単調な、そっけない、平らな、断固とした、均一の
2018,flatter,お世辞を言う、おべっかをつかう
2019,flattery,お世辞、おべっか
2020,flavor,風味、に風味をつける
2021,flaw,欠点、きず
2022,flee,逃げる、～から逃げる
2023,flesh,（人・動物の）肉、果肉
2024,flexible,柔軟な、柔らかい、融通のきく
2025,flight,（飛行機の）便、飛ぶこと、飛行、逃走、脱出
2026,flip,はじく、ひっくり返す、裏返す、切り替える
2027,float,浮く、漂う、浮かべる
2028,floating,浮かぶ
2029,flock,群れ、群衆、大群、一群、集まる、群れをなす
2030,flood,洪水、あふれる、水浸しにする、
2031,flourish,（文化などが）栄える、（植物などが）繁茂する
2032,flourishing,栄えている
2033,flow,流れる、流れ
2034,flu,インフルエンザ（influenzaの略）
2035,fluctuate,[自] （数値，物価が）変動する
2036,fluent,流暢な、緩やかな
2037,fluid,流体、流動性の：変わりやすい、(言葉が)流暢な
2038,fluoride,フッ化物
2039,flush,紅潮、上気、突然の高まり、水洗すること
2040,flutter,はばたきする、はためく、どきどきする、はばたき、動揺
2041,focus,集中させる、焦点を合わせる、焦点が合う、焦点、重点
2042,foe,敵
2043,fog,霧
2044,foil,を失敗に終わらせる、を挫折させる
2045,fold,包む、折りたたむ、（手足など）を組む
2046,folk,人々、〔～s〕皆さん、〔one's ～s〕家族
2047,folklore,民間伝承
2048,follow,従う、後について行く、後に起こる
2049,follow-up,追跡調査、追加、続行
2050,fond,Aが好きだ
2051,fool,愚か者、をばかにする
2052,forbid,禁止する
2053,force,～に無理やり…させる、力、（複数形で）軍隊
2054,forecast,予報する、予想する、予報、予想
2055,forehead,ひたい
2056,foreign,外国の、異質の
2057,foresee,（問題・事故など）を予知する
2058,foresight,先見の明、洞察力
2059,foretell,予言（予知）する
2060,forge,偽造する、（関係など）を築く、鍛造する
2061,forgive,(人・行為・罪など)を許す
2062,form,形（態）、申込用紙、を形作る、形になる
2063,formalize,を形式化する
2064,format,書式、形式、（本などの）型
2065,formation,形成、構成（物）、隊列
2066,former,前(者)の、（the）（２つのうちの）前者
2067,formerly,かつては、以前は
2068,formidable,手ごわい
2069,formula,(複～sまたはformulae)公式、決まったやり方
2070,formulate,(計画など)を(注意深く)まとめる、を明確に述べる
2071,forsake,見捨てる
2072,forth,前へ、先へ、それ以降
2073,forthcoming,来るべき
2074,fortuitous,偶然の、思いがけない
2075,fortune,財産、幸運、運命
2076,forward,前に、将来に向かって、(手紙・メール)を転送する
2077,fossil,化石、時代遅れの人［物］
2078,foster,促進する、養育する、里親（里子）の
2079,foul,不快な、汚い、反則の、反則
2080,found,設立する、基礎を築く
2081,foundation,基礎、設立
2082,founder,創設者
2083,fountain,噴水、泉
2084,fraction,わずか、一部、分数
2085,fracture,骨折、割れ目、裂け目
2086,fragile,壊れやすい、はかない
2087,fragment,破片、かけら
2088,fragrance,芳香
2089,fragrant,香りの良い
2090,frailty,もろさ
2091,frame,校正、骨組み、骨格、枠、額縁、組み立てる、枠にはめる
2092,framework,枠組、骨組み
2093,frank,率直な
2094,frankly,率直に
2095,frantic,大急ぎの、気が狂いそうな
2096,fraud,詐欺（行為）、（金銭などの）搾取、詐欺師、偽善者、偽物
2097,free,無料の、自由な、ひまな、制約のない
2098,freedom,自由
2099,freeze,凍る、を凍らせる、（計画・資金など）を凍結する
2100,freight,貨物、積み荷
2101,frequency,"頻度, 頻繁； 周波数"
2102,frequent,たびたびの、頻繁に起こる
2103,frequently,頻繁に
2104,fresh,新鮮な
2105,friction,摩擦、あつれき、不和
2106,friendship,友人関係、友情
2107,fright,(突然の・一時的な)恐怖(感)
2108,frighten,おびえさせる、びっくりさせる
2109,frontier,国境、辺境、未開拓分野、最先端
2110,frost,霧（が降りる）
2111,frown,眉をひそめる、眉をしかめること、しかめ面
2112,frugal,安上がりの、質素な、倹約する、無駄遣いしない、簡素な
2113,frustrate,いら立たせる、（計画・希望など）を挫折させる
2114,frustrated,いらいらしている
2115,fuel,燃料、勢いを増加させるもの
2116,fulfill,果たす、添う、満たす
2117,fully,全く、完全に
2118,fumigate,消毒する
2119,function,機能、役割、働き、式典、会合
2120,functional,機能的な
2121,fund,基金、資金
2122,fundamental,基本的な、必須の、基本
2123,fundamentally,基本的に、根本的に
2124,funeral,葬式
2125,fungus,（かび・キノコなどの）菌類
2126,fur,毛、毛皮
2127,furious,激怒した、猛烈な
2128,furnish,備え付ける、用意する
2129,furnished,家具付きの
2130,furniture,家具
2131,furthermore,さらに
2132,fury,激しい怒り、（風雨などの）激しさ
2133,fusion,融合、連立
2134,fuss,大騒ぎ、やきもきすること、騒ぎ立てる、やきもきする
2135,fussy,つまらないことにやきもきする、騒ぎ立てる
2136,futile,無益な、役に立たない、つまらない
2137,future-oriented,未来志向の
2138,gadget,機械器具
2139,gain,手に入れる、増す、良くなる、利益、増大
2140,galaxy,星雲、銀河、〔the G～〕銀河系
2141,gale,強風
2142,gallery,画廊、美術館、バルコニー、観客
2143,game-changer,革命的なこと[人・物]
2144,gangster,ギャングの一員、暴力団員
2145,gap,割れ目、（時間的）空白、（見解などの）相違
2146,garbage,（主に台所から出る）ゴミ
2147,gargle,うがいをする
2148,garment,衣服、衣類
2149,gas,ガス、気体、ガソリン
2150,gather,集める、わかる、推測する、増す、集まる
2151,gaudy,派手な
2152,gauge,基準、容積、計器、推し測る、慎重に判断する
2153,gaze,見つめる(こと)
2154,gear,用具（一式）、器具、歯車、ギア
2155,gender,性、性の差、性別
2156,gene,遺伝子
2157,general,世間一般の、一般的な、全体的な、大まかな
2158,generalization,一般化
2159,generally,一般的に、大体
2160,generate,生み出す、発生させる
2161,generation,世代
2162,generosity,寛大さ、気前の良さ
2163,generous,寛大な、気前のよい、豊富な
2164,genesis,起源、発生
2165,genetic,遺伝（子）の、発生の
2166,genetically,遺伝子的に、遺伝学的に
2167,genius,天才、才能
2168,genocide,大量虐殺
2169,genome,ゲノム
2170,genre,ジャンル、酒類
2171,gentle,優しい
2172,gently,優しく、静かに
2173,genuine,本物の、偽りのない
2174,genuinely,本当に、実に、心から、純粋に
2175,geographical,地理的な、地理学（上）の
2176,geography,地理、地理学
2177,geological,地質学的な
2178,geology,地質学、地質（構造）
2179,geometry,幾何学
2180,germ,細菌、病原菌、幼芽
2181,gesture,身ぶり
2182,ghost,幽霊、幻影
2183,giant,巨大な、巨人、偉人
2184,gift,贈り物、才能
2185,gifted,才能のある
2186,gigantic,巨大な、莫大な
2187,given,～を考慮すると、～と仮定すると、特定の、任意の
2188,glacier,氷河
2189,glance,ちらっと見ること
2190,glare,ぎらぎら光る、じっとにらむ、ぎらぎらする光、怒りのまなざし
2191,glass,ガラス、（a ～ of）コップ１杯の、（複数）めがね
2192,glide,滑らかに動く、音もなく移動する
2193,glimpse,ちらりと見る、（～が）ちらりと見える
2194,glitter,きらきら光る、輝き
2195,global,世界的な、全体的な
2196,globalization,国際化
2197,globe,球体、世界、地球儀、（the～で）地球
2198,gloomy,暗い、陰鬱な、悲観的な
2199,glorify,賛美する、称賛する、飾る、栄光を与える
2200,glory,栄光、壮観
2201,glossary,用語小辞典、用語集
2202,glossy,光沢のある
2203,glow,光り［照り］輝く、赤く燃える、紅潮する
2204,glue,貼り付ける、接着剤でつける、接着剤
2205,goad,を駆り立てる、駆り立てて～させる；駆り立てるもの、突き棒
2206,goal,名、目標、ゴール
2207,good,（―s）商品、利益、（a ― many ～）かなりの
2208,goods,商品
2209,goodwill,好意、厚意、親切心、信用、営業権
2210,gorgeous,華やかな、すばらしい
2211,gossip,うわさ話をする
2212,govern,治める、支配する、左右する、抑制する
2213,government,政府
2214,governor,知事
2215,grab,つかむ、横取りする、急いで食べる
2216,grace,気品、優雅さ、好意、神の恵み、慈悲
2217,gracious,親切な、丁寧な
2218,gradation,段階的変化、グラデーション
2219,grade,学年、程度、成績、を段階別にする
2220,gradual,徐々の、緩やかな
2221,gradually,だんだん
2222,graduate,卒業する（from）、卒業生、大学院生
2223,graffiti,落書き
2224,grain,穀物、穀粒、少量、微量、木目
2225,grammar,文法
2226,grammarian,文法家、文法学者
2227,grand,壮大な、偉大な
2228,grandparent,祖父（母）
2229,grant,（人）に（許可・権利など）を与える、を認める
2230,graphic,図、挿絵
2231,grasp,把握する、つかむ、つかむ（理解する）こと
2232,grass,（牧）草
2233,grassland,牧草地、草原
2234,grateful,感謝している
2235,gratification,満足(感)、喜び、満足を与えるもの
2236,gratify,喜ばせる
2237,gratitude,感謝(の気持ち)
2238,gratuity,チップ
2239,grave,重大な、威厳のある、真面目な、厳粛な、墓場
2240,graveyard,（教会の）墓地
2241,gravitate,引き寄せられる
2242,gravity,重力、引力、重量、重大さ
2243,graze,(家畜などが)牧草を食べる
2244,Greece,ギリシャ
2245,greed,どん欲、どん欲さ
2246,greedy,欲深い、貪欲な、食い意地の張った、がつがつした
2247,greenhouse,温室
2248,greet,あいさつをする、出迎える
2249,grid,（電気などの）供給網、格子（模様）、碁盤目
2250,grief,深い悲しみ
2251,grieve,深く苦しむ、深く悲しませる
2252,grim,（状況などが）暗い、（表情が）険しい
2253,grimace,しかめ面をする； しかめ面
2254,grind,（臼などで）挽く、すりつぶす、ギシギシ音を立てる
2255,grip,しっかりつかむ、しっかりつかむこと
2256,groan,うめく声、うなる音、文句、うめく
2257,grocery,食料雑貨店、食料品
2258,gross,ひどい、巨大な、全体の、総計
2259,ground,根拠、理由、土地、土壌、運動場、地面、地表
2260,growl,うなり声、うなる、不平を言う、どなる
2261,growth,発展、成長
2262,grumble,文句を言う、不平を言う、不満、苦情
2263,guarantee,保証する、保証
2264,guard,守る、見張る、警備（員）
2265,guardian,保護者、管理者
2266,guess,推測する、言い当てる
2267,guest,招待客、宿泊客
2268,guidance,指導、案内
2269,guide,案内する、指導する、案内人（書）、指針
2270,guideline,指針、指標、目標、ガイドライン
2271,guilty,罪悪感のある、有罪の
2272,gull,カモメ
2273,gulp,がぶがぶ飲む
2274,gun,拳銃
2275,gush,噴出する
2276,gust,突風、噴出、(感情の)爆発
2277,gut,腸、消化管、内臓
2278,guy,やつ、男
2279,gymnastics,（器械）体操
2280,habit,（個人の無意識的な）習慣、癖
2281,habitat,生息地、（人の）居住地
2282,habitual,習慣的な
2283,hail,ひょう、あられ
2284,halt,停止・中断させる[する]、停止、中断
2285,hamper,妨げる
2286,handful,（a～of…）１つかみの量の…
2287,handle,取っ手、つまみ、うまく扱う、操縦する
2288,handout,(講演・授業などの)配布物、プリント
2289,hang,つるす、掛ける、ぶら下がる
2290,happen,起こる
2291,harass,困らせる、悩ます
2292,harassment,嫌がらせ、ハラスメント
2293,harbor,港、湾、避難所、隠れ場所
2294,hardly,ほとんど…ない
2295,hardship,苦難、窮乏
2296,hardy,頑丈な、耐寒性の
2297,hare,野ウサギ
2298,harm,損害、危害、害する
2299,harmful,害のある
2300,harmless,害のない
2301,harmony,調和
2302,harness,[他] （自然の力など）を利用する
2303,harsh,厳しい、不快な
2304,harvest,収穫（物・期）、を収穫する
2305,haste,急ぐこと、あわてること
2306,hasty,急ぎの、早まった
2307,hatch,孵化させる、孵化する、たくらむ
2308,hate,憎む、嫌う
2309,hatred,憎しみ、憎悪、嫌悪
2310,haunt,につきまとう、出没する
2311,haunted,つきまとわれる
2312,haven,避難所、保護区、港
2313,hay,干し草
2314,hazard,危険、～を危険にさらす
2315,hazardous,危険な、冒険的な
2316,hazy,ぼんやりした、不明確な、かすんだ
2317,head,向かう、進む
2318,headache,頭痛（の種）
2319,headline,（新聞などの）見出し
2320,headquarters,本部、本社
2321,heal,治す、癒やす、治る、癒える
2322,healthful,健康によい
2323,healthy,健康な
2324,heap,（積み上げられた）山、堆積、積み上げる
2325,heating,暖房(装置)
2326,heaven,天国、（H～で）神
2327,hectic,やたらと忙しい
2328,heed,(助言・警告など)に注意する
2329,heel,かかと
2330,height,高さ、身長、高地、絶頂、丘、高台
2331,heighten,強める、増す、強まる、増す
2332,heir,相続人、継承者、後継者
2333,helpful,親切な、役に立つ
2334,helpless,無力な
2335,hemisphere,（地球の）半球、半球体
2336,hemp,麻、大麻
2337,hence,それゆえに
2338,herald,[他] ～の先触れをする
2339,herbivore,草食動物
2340,herd,群れ、集める
2341,hereditary,遺伝的な
2342,heredity,遺伝（形質）
2343,heritage,（文化的）遺産、伝統
2344,hero,英雄、主人公
2345,hesitant,ためらいがちな
2346,hesitate,ためらう
2347,hibernation,島民
2348,hide,隠す、隠れる
2349,hierarchy,階層制、支配層
2350,highlight,強調する、光を当てる
2351,highly,非常に、高く
2352,highway,幹線道路
2353,hinder,妨げる、邪魔になる、障害となる
2354,hinge,ちょうつがい
2355,hint,それとなく言う、ヒント、気配、(a ～ of)少量の
2356,hire,雇う
2357,history,歴史、歴史学、経歴
2358,hit,たたく、当たる、攻撃する、打撃
2359,hive,ミツバチの巣（箱）、人の集まる所
2360,hobby,趣味
2361,hole,穴
2362,holistic,全体論の、総合的な
2363,hollow,空洞の、空虚な、うわべだけの
2364,holly,セイヨウヒイラギ
2365,holy,神聖な
2366,homogeneous,均質の
2367,honest,正直な、率直な
2368,honor,名誉、名誉を与える、尊敬する
2369,honorable,尊敬すべき、立派な、高潔な
2370,horizon,地[水]平線、範囲
2371,horizontal,水平の
2372,hormonal,ホルモンの
2373,hormone,ホルモン
2374,horrible,恐ろしい、ひどく不快な
2375,horrify,ぞっとさせる
2376,horror,恐怖、強い嫌悪、嫌な物［人］
2377,hospitality,親切なもてなし、歓待、受容性
2378,host,主催する、のホスト役を務める
2379,hostage,人質
2380,hostile,敵意のある
2381,household,家族、家庭、世帯、家庭の
2382,hover,(鳥・昆虫・ヘリコプターなどが)空中(の一点)に止まる
2383,however,しかし、どんな～でも、どのように～しても
2384,hug,抱きしめること、抱き合う
2385,huge,膨大な、巨大な
2386,human,人間の、人情のある、人間
2387,humane,思いやりのある、人道的な
2388,humanitarian,人道主義の
2389,humanity,人類、人間性、人情、人文科学
2390,humankind,(単複両扱い)人類
2391,humble,(食事などが)質素な、乏しい、謙遜した
2392,humid,湿気のある
2393,humidity,湿気
2394,humiliate,に恥をかかせる、に屈辱を与える
2395,humility,謙虚さ、謙遜、卑下
2396,humor,ユーモア、気分、機嫌、気質
2397,hump,（ラクダなどの）こぶ
2398,hunger,渇望、飢え
2399,hunt,狩る、捜す、狩り、探索
2400,hurdle,障害
2401,hurt,にけがをさせる、の感情を害する、痛む
2402,hybrid,雑種、混成物、ハイブリッド車
2403,hydrogen,水素
2404,hydropower,水力発電
2405,hygiene,衛生（状態）、健康法
2406,hymn,賛美歌
2407,hypocrisy,偽善(行為)、見せかけ
2408,hypocritical,偽善の
2409,hypodermic,皮下（注射）の
2410,hypothesis,仮説、（議論の）前提
2411,hypothetical,仮説〔仮定〕の、仮説上の
2412,hysterical,ヒステリックな
2413,iceberg,氷山
2414,idea,考え、思いつき、理解、見解、概念
2415,ideal,理想的な、観念的な、理想
2416,idealistic,理想主義の
2417,identical,まったく同一の、同様の
2418,identify,同一のものとみなす、確認する
2419,Ideology,思想、イデオロギー
2420,idle,仕事がない、動いていない、無駄な
2421,ignition,(エンジンの)点火装置、点火
2422,ignorance,無知、無学
2423,ignorant,無知な
2424,ignore,"無視する, 知らないふりをする"
2425,illegal,違法の、不法の
2426,illiterate,読み書きのできない
2427,illness,病気
2428,illogical,筋の通らない、不合理な
2429,illuminate,明るくする、解明する
2430,illumination,証明、(複数形で)イルミネーション
2431,illusion,錯覚、思い違い、幻想
2432,illustrate,説明する、挿絵を入れる
2433,image,画像、像、印象、生き写し
2434,imagery,像、映像、比喩的表現
2435,imaginary,架空の
2436,imaginative,想像力豊かな
2437,imagine,想像する、推測する
2438,imbalance,不均衡、アンバランス
2439,imitate,真似する
2440,immeasurable,計り知れない、果てしない、広大な
2441,immediate,即座の、直接の
2442,immediately,即座に
2443,immense,巨大な、莫大な
2444,immerse,～を浸す、没頭させる
2445,immersed,浸る
2446,immigrant,移民
2447,immigrate,移住する
2448,immigration,移民、移住、入国管理
2449,immortality,不死、不滅
2450,immovable,動かせない
2451,immune,免疫を持つ、免れた
2452,immunity,免疫（性）
2453,impact,影響、衝突、衝撃（力）
2454,impair,害する、(価値など)を減じる
2455,impaired,～に障害のある、弱った、損なわれた
2456,impairment,障害、損傷
2457,impart,与える、伝える
2458,impartial,公平な
2459,impassable,(川・道などが)通行できない、(困難・障害などが)克服できない
2460,impatience,いらだち、じれったさ
2461,impede,邪魔する、妨げる
2462,imperative,必須の、急務の
2463,imperial,帝国の、皇帝の
2464,impersonal,人間味のない
2465,implant,を移植する、を教え込む、植え付ける
2466,implement,道具、手段、実行する
2467,implication,(裏の・言外の)意味、(予想される)影響、結果
2468,implicit,暗黙の、内在する
2469,imply,暗に意味する、ほのめかす
2470,import,輸入する、取り込む
2471,importance,重要性
2472,impose,課す、押しつける、つけこむ
2473,imposing,印象的な，人目を引く，堂々とした
2474,impotence,無力、無能、無気力
2475,impractical,実用的ではない、非現実的な
2476,impress,強い印象を与える、感動させる
2477,impression,印象、感動
2478,impressive,印象的な、感動的な
2479,imprisonment,投獄、収監
2480,improper,不適切な、無作法な
2481,improve,改善する、よくなる
2482,improvise,[他] ～を即興で作る［歌う，演奏する］
2483,impulse,衝動、刺激
2484,impulsive,衝動的な、感情にかられた
2485,in spite of,～にもかかわらず
2486,inability,無能、無力
2487,inaccurate,不正確な、誤りのある
2488,inactive,不活発な、停止中の
2489,inadequate,不十分な、不適当な
2490,inanimate,生命のない、活気のない
2491,inappropriate,ふさわしくない、不適当な
2492,inattentive,不注意な、怠慢な
2493,inborn,生まれつきの、生来の
2494,incautiously,不注意にも、うかつに
2495,incentive,刺激、動機、やる気を出させるもの
2496,inception,初め、発端
2497,incessant,絶え間のない
2498,inch,インチ（2.54cm）
2499,incidence,発生(率)
2500,incident,出来事、事件、紛争
2501,incisive,明敏な、鋭い
2502,inclination,意向、願望、好み
2503,incline,傾ける、～を…する気にさせる、傾く
2504,inclined,～する傾向がある
2505,include,含む
2506,including,を含めて
2507,inclusive,全てを含んだ
2508,income,収入、所得
2509,incompetent,無能な、無力な、無能力者
2510,incomprehensible,理解できない、わかりにくい
2511,inconsiderable,ささいな、わずかな
2512,inconsistent,一致していない、相反する
2513,inconvenience,に不便[迷惑]をかける；不便、迷惑、迷惑なもの[人]
2514,inconvenient,不便な、不都合な
2515,incorporate,取り入れる、組み込む
2516,increase,増加する、を増やす
2517,increasingly,ますます
2518,incredible,信じがたい、途方もない、とてもすばらしい
2519,incriminate,に罪を負わせる、を告発する
2520,incurable,不治の、治らない
2521,indebted,恩を受けている
2522,indeed,実際は、本当に、実に
2523,indefinite,不定の、ぼんやりした、不明瞭の
2524,independence,独立、自立
2525,independent,独立した
2526,index,指標、索引、指数、見出し
2527,indicate,指し示す、明らかにする、ほのめかす
2528,indication,兆候、指示
2529,indicative,指示する、暗示する
2530,indifferent,無関心な
2531,indigenous,固有の、現地の、生来備わった
2532,indigestion,消化不良、不消化
2533,indignation,憤慨
2534,indirect,間接の、まわりくどい
2535,indispensable,不可欠な
2536,indisputable,明白な、確実な
2537,individual,個人的な、個々の、特有の、個性的な
2538,induce,説得して～.させる(to do)、引き起こす
2539,indulge,没頭させる、甘やかす、～にふける
2540,indulgent,寛大な、甘い
2541,industrial,産業の
2542,industrialize,産業化する
2543,industry,産業、勤勉
2544,inefficient,非効率的な
2545,inept,不適切な
2546,inequality,不平等
2547,inevitable,避けられない、必然的な
2548,inevitably,必然的に
2549,infamous,いまわしい、悪名高い
2550,infant,（乳）幼児、（乳）幼児期の
2551,infect,感染する
2552,infection,感染（症）
2553,infectious,伝染性の
2554,infer,推論する、推測する
2555,inferior,より劣った
2556,inferiority,劣等、下位
2557,inferred,推量する
2558,infertility,不妊症
2559,infinite,無限の、無数の
2560,infinity,無限大
2561,inflammation,炎症
2562,inflate,ふくらませる、（物価）をつり上げる
2563,inflation,インフレ、高騰
2564,inflict,（苦痛、損害、罰など）を与える
2565,influence,影響を及ぼす、影響
2566,influential,影響力のある
2567,influx,(人・物の)殺到、(水・空気の)流入
2568,inform,知らせる、情報を提供する
2569,informal,形式ばらない、略式の、くだけた
2570,informant,情報提供者、内通者
2571,information,情報、案内（所）
2572,informative,有益な、情報[知識]を提供する
2573,infrastructure,インフラ、基本的施設、（経済）基盤
2574,ingenious,発明の才に富む、巧妙な、利口な
2575,ingenuity,創意、工夫、発明の才
2576,ingenuous,純真な、無邪気な
2577,ingest,摂取する
2578,ingredient,材料、成分
2579,inhabit,～に住んでいる、宿る
2580,inhabitant,住民、生息動物
2581,inhale,を吸い込む
2582,inherent,本来備わっている、固有の
2583,inherit,受け継ぐ、相続する
2584,inheritance,遺産
2585,inhibit,妨げる、～に…するのをやめさせる、抑制する物〔人〕
2586,inhospitable,もてなしの悪い、不愛想な、住むのに適さない
2587,initial,最初の、初期の、頭文字
2588,initially,初めのうちは、最初に
2589,initiate,を新たに始める
2590,initiative,構想、主導権、
2591,inject,注射する、注入する、導入する
2592,injection,注射、投入
2593,injure,傷つける、損なう
2594,injury,負傷、（名誉などを）傷つけること
2595,inland,内陸の
2596,inmate,(刑務所などの)収容者、入院患者
2597,innate,生まれつき持っている、固有の
2598,inner,内部の
2599,innocence,無罪、潔白
2600,innocent,無罪の、無邪気な、無知の
2601,innovation,刷新、大発明、革命的な変化
2602,innovative,革新的な
2603,innumerable,無数の、数え切れないほどの
2604,input,入力（情報）、投入、(情報の)提供
2605,inquire,尋ねる、調査する
2606,inquiry,調査、質問、問い合わせ
2607,insane,狂気の、正気ではない、非常識な
2608,inscription,碑文、刻むこと
2609,insect,昆虫
2610,insecurity,不安(感)、不安定（なもの）
2611,insert,挿入する、挿入物、折込広告
2612,inside,～の中に、内部の、内側
2613,insight,見識、理解（力）、洞察力
2614,insist,主張する、言い張る、要求する
2615,insistent,強く主張する、強要する、しつこい
2616,insoluble,不溶性の、解決できない
2617,insomnia,不眠症
2618,inspect,検査する、詳しく調べる
2619,inspection,検査、点検
2620,inspire,奮い立たせる、励ます、吹き込む、感動を与える
2621,install,インストールする、設置する、就任させる
2622,installment,分割払いの一回分
2623,instance,例、場合
2624,instant,即刻の、瞬間
2625,instantly,すぐに
2626,instead,その代わりに、そうではなくて
2627,instigate,推進する、扇動する
2628,instill,を徐々に教え込む、しみこませる
2629,instinct,本能、勘、直感、衝動
2630,institute,工科大学、研究所、協会
2631,institution,施設、（公共）機関、団体、制度、慣習
2632,institutional,制度(上)の、協会[学会]の
2633,instruct,に指示する、に教える
2634,instruction,指示、使用書
2635,instrument,器具、楽器
2636,instrumental,重要な役割を果たす
2637,insufficient,不十分な、不適当な
2638,insult,侮辱する、侮辱
2639,insurance,保険、保険料、保険金
2640,intact,無傷の、そっくり残って、完全な
2641,intake,摂取（量）、取り入れ
2642,integral,不可欠の、組み込まれた、内蔵型の、積分
2643,integrate,結合する、溶け込ませる、溶け込む
2644,integrity,高潔さ、誠実さ、統一された状態
2645,intellect,知性、〔the～(s)〕知識人
2646,intellectual,知的な、知識人
2647,intelligence,知性； 諜報
2648,intelligent,聡明な、知能を有する
2649,intelligible,理解可能な、判読可能な
2650,intend,～するつもりだ（to do）
2651,intense,強烈な、激しい
2652,intensity,強烈さ
2653,intensive,集中的な、強い、激しい
2654,intent,熱中して、集中した、意図、目的
2655,intention,意図
2656,intentionally,故意に、意図的に
2657,interact,相互に影響する、相互にやりとりする
2658,interaction,交流、相互作用
2659,interest,興味を起こさせる、興味、利益、利子
2660,interfere,妨げとなる、干渉する
2661,interior,室内の、内部の
2662,intermediate,中級の、中間の
2663,intermittently,断続的に、途切れ途切れに
2664,internal,内部の、国内の、内面的な
2665,international,国際的な、国家間の
2666,Internet,インターネット
2667,internship,【米】実務研修、研修期間
2668,interpersonal,人間[対人]関係の
2669,interpret,解釈する、通訳する
2670,interpretation,解釈、通訳
2671,interrogate,尋問する、取り調べる
2672,interrupt,邪魔をする、割り込む、中断する、
2673,intersect,交わる、横切る、区分する
2674,intersection,交差点
2675,interval,間隔、周期、休止期間
2676,intervene,干渉する、仲裁する、介在する
2677,intervention,介入、仲裁、干渉
2678,interview,インタビュー(する)、面接（する）
2679,intestine,腸
2680,intimate,親密な、とても私的な、内心の
2681,intimidate,脅す
2682,intoxicated,酒に酔った、熱狂した
2683,intricate,入り組んだ、複雑な、はっきりしない
2684,intrigue,の興味〔好奇心〕をそそる、陰謀
2685,intrigued,興味をそそられる
2686,intriguing,興味深い
2687,intrinsic,固有の、本来備わっている
2688,introduce,導入する、紹介する
2689,introspection,内省、自己反省
2690,intrude,押し入る、入り込む、侵害する
2691,intruder,侵入者
2692,intrusion,侵入、（意見などの）押しつけ
2693,intuition,直観(的洞察)
2694,invade,侵略する、侵害する、（場所）に殺到する
2695,invalid,(法的に)無効な、説得力のない
2696,invaluable,極めて貴重な[高価]な
2697,invariably,常に、いつも決まって
2698,invasion,侵害、侵入
2699,invent,発明する、（話）をでっちあげる
2700,inventive,独創的な
2701,inventory,目録、明細表
2702,invest,投資する、つぎ込む
2703,investigate,調査する、究明する、調査する
2704,investigation,(詳しい)調査、研究
2705,invincible,無敵の
2706,invisible,見えない
2707,invite,招待する、～に…～することを勧める
2708,invoice,明細請求書、納品書
2709,involuntary,無意識の、自由意志によらない、意志に反した
2710,involve,巻き込む、含む、没頭させる、複雑にする
2711,involved,関係している、参加している
2712,involvement,関与、巻き込まれること
2713,ion,イオン
2714,Ireland,アイルランド
2715,iron,鉄壁
2716,ironic,皮肉な
2717,ironically,皮肉にも
2718,irony,皮肉、予想に反する結末
2719,irrational,理性のない、不合理な
2720,irregular,不規則な
2721,irrelevant,無関係の、見当違いの
2722,irresistible,抵抗できない、非常に魅力的な
2723,irresponsible,無責任な
2724,irreversible,元に戻せない
2725,irrigation,灌漑（かんがい）
2726,irritate,いらいらさせる、ひりひりさせる
2727,irritation,いらだち
2728,island,島
2729,isolate,孤立させる、分離する、隔離する
2730,isolated,孤立している
2731,isolation,孤立，分離，孤独感
2732,issue,発行する、支給する、問題、(雑誌などの)号
2733,item,記事、品物、品目、項目、箇条
2734,itinerary,旅行の日程、旅行計画
2735,jail,刑務所、拘置所
2736,jam,詰め込む、動かなくする、込み合い、ジャム
2737,janitor,(アパート・ビル・学校などの)用務員、管理人
2738,jar,(広口の)びん、つぼ
2739,jaw,あご
2740,jealous,ねたんで、嫉妬して、嫉妬深い
2741,jeopardize,を危険にさらす
2742,jewelry,宝石
2743,join,～に加わる、～をつなぐ、～に参加する
2744,joint,共同の、接合、継ぎ目、関節、を接合する
2745,journal,(定期刊行)雑誌、日誌
2746,journalism,ジャーナリズム、報道
2747,journey,旅行
2748,joy,喜び
2749,judge,判断する、裁く、裁判官、審判
2750,jumble,ごちゃまぜにする
2751,jump,跳ぶ、飛び上がる、飛ばす、跳ぶこと
2752,junction,合流点
2753,junk,くず、がらくた
2754,Jupiter,木星
2755,jury,陪審（員団）、審査員団
2756,Justice,正義、公正、裁判（官）
2757,justify,弁明する、正答する
2758,justly,正当に、当然のことながら
2759,juvenile,青少年の、若い、未熟な、青少年
2760,keen,熱心な、鋭い、強い
2761,kick,蹴る（こと）
2762,kid,子供、冗談を言う
2763,kidnap,～を誘拐する
2764,kidney,腎臓
2765,kin,血縁、親族
2766,kindergarten,幼稚園
2767,kingdom,王国、（通例the）～界
2768,kinship,血族関係
2769,kitten,子ネコ
2770,knee,ひざ
2771,knit,編む、組み合わせる、（まゆ）をよせる
2772,knock,たたく、ノック（の音）、打つこと
2773,knot,結び目
2774,knowledge,知識、知っていること、認識
2775,knowledgeable,よく知っている、物知りの
2776,label,ラベル、表示、～に…とラベルを付ける
2777,labor,（つらい）労働
2778,laboratory,実験室、研究所、研究室
2779,lack,不足、～を欠いている
2780,ladder,はしご、（出世の）階段
2781,lag,遅れること、時間のずれ
2782,lament,悲しむ、嘆く、悲しむ
2783,landfill,ごみ埋め立て地
2784,landmark,目じるし、画期的事件、歴史的建造物
2785,landmine,地雷
2786,landscape,風景(画)、地形
2787,lane,車線
2788,lap,ひざ
2789,lapse,(時間の)経過、ちょっとした誤り
2790,laptop,ラップトップ、ノートパソコン
2791,largely,ほとんど、主として
2792,last,最後の、この前の、続く、長持ちする
2793,lately,最近.
2794,latest,最新の
2795,Latin,ラテン語、ラテン系の人、ラテン系の
2796,latitude,緯度、許容範囲
2797,latter,後者の、後半の、後者
2798,laugh,笑う
2799,laughter,笑い
2800,launch,開始する、打ち上げる、発射、開始
2801,laundry,洗濯（物）、クリーニング屋
2802,law,法(律)、（自然界の）法則
2803,lawn,芝生
2804,lawsuit,（民事）訴訟
2805,lawyer,弁護士
2806,lay,置く、横たえる、（卵）を産む
2807,layer,（積み重ねたものの）層、地層
2808,lazy,怠け者の、くつろいだ
2809,lead,導く、を率いる、（生活）を送る、先導
2810,leader,指導者、リーダー、先頭に立つ人
2811,leadership,リーダーの地位、指導者の資質
2812,leading,主要な、最も重要な、一流の、先頭の
2813,leaflet,ビラ、小冊子、小さい葉
2814,league,（競技）連盟、同盟
2815,leak,漏らす、漏れる、ひび、割れ、漏れ
2816,lean,やせた、傾く、上体を曲げる
2817,leap,跳ぶ、(心が）おどる、（考えが）ひらめく
2818,lease,賃貸借契約
2819,least,最小（少）（の）、最も～でない
2820,leather,革製の（なめし）革、革製品
2821,leave,残す、置き忘れる、放っておく、出発する、許可、休暇
2822,lecture,講義、講演、講義する
2823,leftover,(特に食事の)残りもの
2824,legacy,遺産、遺物
2825,legal,法律の、合法の
2826,legally,法的に、合法的に
2827,legend,伝説、言い伝え、（図表の）凡例
2828,legible,読みやすい
2829,legislate,法律を制定する
2830,legislation,法律、立法
2831,legitimate,合法的な、妥当な
2832,legitimately,正当に、合法的に
2833,leisure,暇、余暇
2834,lend,貸す、与える
2835,length,（物や時間の）長さ
2836,lengthy,長い、長たらしい
2837,lenient,寛大な
2838,leprosy,ハンセン病
2839,less,より少なく[い]
2840,lessen,～を少なくする
2841,lesser,より劣った、重要でない
2842,lesson,教訓、レッスン、授業
2843,lest,～しないように
2844,let,～が…するのを許す、～を…の状態にする
2845,lethal,死を引き起こす、死に至る(to)
2846,letter,文字、手紙、(～s)文字、学識
2847,level,水準、程度、高さ
2848,leverage,てこの作用、影響力
2849,lexicon,語彙（集）、辞書
2850,liable,～しやすい、～しがちな、法的責任のある
2851,liberal,自由主義の、寛大な、一般教養の
2852,liberate,を解放する
2853,liberty,（拘束などのない）自由
2854,librarian,司書、図書館員
2855,license,認可する、免許（証）
2856,lick,なめる、ひとなめ、少量
2857,lid,(箱・鍋などの)蓋、まぶた
2858,lie,横たわっている、ある、嘘をつく、嘘
2859,life,生命、一生、人生、生物、元気、活気
2860,lifelong,生涯を通じての、一生の
2861,lifestyle,ライフスタイル、生活様式
2862,lifetime,一生
2863,lift,持ち上げる、高揚させる、上がる（こと）、乗せること
2864,lightning,稲妻
2865,likelihood,見込み、ありそうなこと
2866,likely,～しそうな、ありそうな、本当らしい
2867,likeness,似ていること
2868,likewise,同様に
2869,limb,手足、四肢
2870,limestone,石灰岩
2871,limit,制限する、制限、限界
2872,limitation,制限
2873,limited,限定された、わずかの
2874,line,職業、方針、短い手紙、線、列、（文の）行
2875,linger,居残りする、立ち去りかねている、まとわりつく
2876,linguistic,言語学の、言葉の
2877,linguistics,言語学
2878,link,関連、つながり、交通手段、リンク
2879,linkage,関連、連鎖
2880,lint,糸くず、綿くず
2881,lip,唇
2882,liquid,液体（の）
2883,list,リスト（一覧表）、をリスト（一覧表）にする
2884,literacy,読み書きの能力、（ある分野の）知識能力
2885,literal,文字どおりの、逐語的な、散文的な
2886,literally,文字通り
2887,literary,文学の、文語の
2888,literate,読み書きのできる、教養のある、文学に通じた
2889,literature,文学、文献、印刷物
2890,litter,ごみ、乱雑な状態
2891,livelihood,生計、生活手段
2892,lively,生き生きとした
2893,liver,肝臓、レバー
2894,livestock,(牛・羊・豚などの)家畜(類)
2895,lizard,トカゲ
2896,load,(荷など)を積む、積み荷、負担、多量
2897,loan,借金、ローン、を貸し付ける
2898,loathe,ひどく嫌う
2899,lobby,圧力団体、（ホテルなどの）ロビー、ロビー活動をする
2900,local,"地域の, 地元の、地元の人"
2901,locate,見つける、〔受身形で〕位置する
2902,location,場所、位置
2903,lock,錠（をかける）
2904,locomotive,機関車
2905,lodge,(苦情・抗議など)を申し出る、を預ける、を泊める
2906,lofty,崇高な、高慢な、非常に高い
2907,log,丸太、記録する
2908,logging,伐採
2909,logic,論理（学）、必然性
2910,logical,論理的な、筋が通った、論理学（上）の
2911,lonely,孤独の、寂しい
2912,long,熱望する、思い焦がれる
2913,longevity,長寿、寿命、長年勤続
2914,longitude,経度
2915,long-lasting,長続きする
2916,long-term,長期にわたる、長期的な
2917,loophole,抜け穴
2918,loose,ゆるい、解き放たれた、節度のない
2919,lord,貴族、（L-）～卿、君主
2920,lose,失う、負ける、（体重など）を減らす
2921,loss,紛失、損害、死、敗北
2922,lot,くじ、運命、区画、ひと山、たくさんのこと
2923,lottery,宝くじ、くじ引き、運、めぐりあわせ
2924,loudly,大声で、騒々しく
2925,lovely,すてきな、美しい
2926,low,低い、少ない、低く、少なく
2927,lower,下げる、下部の、下級の
2928,loyal,忠実な、誠実な
2929,loyalty,忠誠
2930,luck,（幸）運
2931,luggage,手荷物、旅行カバン
2932,lump,こぶ、はれ、固まり
2933,lung,肺
2934,lure,誘惑する、(釣りの)疑似餌、魅力
2935,luxurious,豪華な、ぜいたくな
2936,luxury,ぜいたく（品）、豪華な
2937,lynx,オオヤマネコ
2938,machinery,機械(装置)
2939,mad,怒っている、熱中して、ばかげた
2940,magnetic,磁気の、磁石の、人を引きつける
2941,magnificent,壮大な、素晴らしい、荘厳な、華やかな
2942,magnify,拡大する、強める、誇張する
2943,mainland,本土
2944,mainly,主として
2945,mainstream,（活動・思潮などの）主流、大勢
2946,maintain,維持する、主張する、扶養する、整備する
2947,maintenance,保守、整備、維持
2948,majestic,威厳のある、雄大な
2949,major,重大な、主要な、大部分の、専攻する
2950,majority,大部分、多数派
2951,makeup,化粧、化粧品、構成、性質
2952,male,男性（の）、雄（の）
2953,malicious,悪意ある、意地の悪い
2954,mall,ショッピングセンター
2955,malnutrition,栄養失調
2956,mammal,哺乳動物、哺乳類
2957,manage,経営する、管理する、何とかやり遂げる
2958,management,経営(者)、取り扱い
2959,mandatory,義務的な、強制的な、(統治を)委任された
2960,manic,躁状態の
2961,manifest,明らかにする、表す、明らかな、はっきりした
2962,manipulate,巧みに扱う、うまく処理する、操作する
2963,mankind,（集合的に）人類
2964,man-made,(物質などが)合成の、人工の
2965,manner,態度、方法、やり方行儀、作法、風習
2966,manual,手動の、手の、人力を要する
2967,manufacture,製造する、でっち上げる
2968,manufacturer,製造業者（メーカー）
2969,manuscript,（手書きの）原稿、写本
2970,maple,カエデ、モミジ
2971,margin,余白、縁、差、利ざや
2972,marine,海の、海に住む、海軍の、海兵隊
2973,mark,印、標的、記号、点数、印をつける、示す、特徴づける
2974,marked,著しい、顕著な
2975,markedly,目立って、明らかに
2976,marketing,マーケティング
2977,marriage,結婚
2978,married,結婚している
2979,marry,～と結婚する
2980,Mars,火星
2981,marvel,驚く、驚くべき人、偉業
2982,marvelous,驚くべき、不思議な、素晴らしい
2983,masculine,男性的な、力強い、男性、男性形（の語）
2984,mask,隠す、仮面
2985,mass,かたまり、多数［量］、一般大衆、庶民
2986,massive,極めて大きい
2987,master,主人、名人、習得する
2988,masterpiece,傑作、代表作、名人芸
2989,match,調和する、匹敵する、試合、匹敵するもの
2990,mate,仲間、つれあい（＝妻・夫）、（動物が）つがう
2991,material,資料、原料、物質、物質の、肉体（上）の
2992,materialistic,物質主義の
2993,maternal,母の、母親らしい、妊婦の
2994,maternity,母性
2995,mathematics,数学
2996,mating,交尾、交配
2997,matter,事柄、問題、事態、困難、物質
2998,mature,成熟した、熟した
2999,maxim,格言、原理
3000,maximize,を最大限にする
3001,maximum,最大限
3002,mayor,市長、（自治体の）長
3003,maze,迷路、複雑に込み入ったもの
3004,meadow,牧草地、草地
3005,meal,食事
3006,mean,意味する、つもりで言う、重要な意味を持つ
3007,meaning,意味、意図
3008,meaningful,意味のある
3009,meaningless,無意味な、無益な
3010,means,（単・複数扱い）手段、方法、財産、収入
3011,meantime,その間
3012,meanwhile,一方、その間
3013,measles,はしか、麻疹
3014,measurably,かなり目に見えて
3015,measure,測る、見積もる、示す、測定、手段、対策
3016,mechanic,機械工
3017,mechanical,機械的な、機械の、メカニズム
3018,mechanism,仕組み
3019,media,メディア、媒体
3020,median,中央の、中間の
3021,mediate,調停する、仲介する、中間の
3022,mediator,仲介者、調停者
3023,medical,医学の、医療の
3024,medication,医薬、薬物医療
3025,medicine,医薬、医学
3026,medieval,中世の、時代遅れの
3027,mediocre,平凡な
3028,meditate,じっくり考える、瞑想する、企てる
3029,meditation,（通例the）瞑想、熟考（on）
3030,Mediterranean,地中海の
3031,medium,中間、媒体、手段、（複数形mediaで）報道機関
3032,meet,～を満たす、～にかなう、交差する
3033,melancholy,憂鬱な、もの悲しい、憂鬱、哀愁
3034,mellow,(性格が)円熟した、柔らかくて豊かな[美しい]
3035,melt,溶ける、和らぐを溶かす
3036,membership,会員であること、会員権、会員、構成員
3037,memoir,回顧録
3038,memorable,忘れられない、記憶すべき
3039,memorize,[他] ～を暗記する
3040,memory,記憶（力）、思い出
3041,menace,脅威を与える、脅迫する
3042,mend,修理する、改める
3043,mental,心の、知的な、知能の、頭の中で考える
3044,mention,述べる、言及する、言及、軽く話題に触れること
3045,mentor,～を指導する、（会社，大学などでの）指導者
3046,merchandise,商品、グッズ、販売を促進する、取引する
3047,merchant,商人、商業の
3048,merciful,慈悲深い、情け深い
3049,Mercury,水星
3050,mercy,慈悲、幸運
3051,mere,単なる、ほんの
3052,merely,単に
3053,merge,合併する、溶け込ませる、合併する
3054,merit,利点、功績、真価
3055,merry,陽気な
3056,mess,混乱、取り散らかした状態、散らかす
3057,metabolism,代謝、代謝作用
3058,metallurgy,治金（術）
3059,metaphor,隠喩、象徴
3060,meteor,流星，隕石
3061,meteorite,隕石
3062,method,方法、筋道、体系、秩序
3063,methodology,方法論、研究方法
3064,metropolis,首都、大都市
3065,metropolitan,大都市の、首都圏の
3066,Mexico,メキシコ
3067,microbe,微生物、細菌
3068,microscopic,顕微鏡でしか見えない、微小の
3069,microwave,マイクロ波、電子レンジ（にかける）
3070,midday,正午、真昼
3071,middle,中央（の）、中間（の）
3072,midst,まっただ中
3073,mighty,強大な、広大な、並外れた
3074,migrate,移住する、（鳥などが）渡る
3075,migration,移住、移動
3076,mild,穏やかな、まろやかな、（程度などが）軽い
3077,mile,マイル（約1.609ｋｍ）
3078,mileage,総マイル数、走行距離
3079,milestone,画期的な出来事
3080,military,軍隊（軍人）の、軍隊
3081,mill,製造工場、製粉所、粉ひき機
3082,millennium,千年(祭)
3083,millionaire,百万長者、大富豪
3084,mimic,をまねる
3085,mind,精神、頭脳、注意（力）、嫌がる
3086,mine,鉱山、（知識などの）宝庫
3087,mineral,鉱物、ミネラル、鉱物を含んだ、鉱物の
3088,mingle,混ぜる、混ぜ合わせる
3089,miniature,小型の
3090,minimal,最小(限度)の
3091,minimum,最小限度
3092,minister,大臣、職者
3093,ministry,省庁
3094,minor,小さな、重要でない
3095,minting,（貨幣の）鋳造
3096,minute,非常に小さい、ささいな、詳細な
3097,miracle,奇跡
3098,mirror,鏡
3099,miscellaneous,種々雑多な
3100,mischief,いたずら、害、いたずらっ子
3101,mischievous,いたずら好きな
3102,misconception,誤解、誤った考え
3103,misdeed,悪行、非行、犯罪
3104,miserable,惨めな
3105,misery,悲惨さ、苦痛、苦難、惨めさ、不幸
3106,misfortune,不幸、不運
3107,mislead,誤解させる、欺く、間違った方向に導く
3108,misleading,人の判断を誤らせる、まぎらわしい
3109,miss,しそこなう、間に合わない、外す、～がないのを寂しく思う
3110,mission,（特別）任務、使節（団）
3111,missionary,伝道者、布教者
3112,mistake,間違える、誤り
3113,mistakenly,間違って
3114,misunderstand,誤解する
3115,mitigate,[他] （苦痛・影響・罰など）～を緩和する
3116,mixture,混合、組み合わせ
3117,moan,うめき声を出す、不平を言う、嘆く、うめき声、不満
3118,mob,群衆、野次馬、集団、（受け身で）取り囲まれる
3119,mobile,動きやすい、移動式の、流動的な
3120,mobility,可動性、流動性
3121,mobilize,を結集する、を動員する
3122,mock,ばかにする、のまねをしてからかう
3123,mode,方式、気分、形態、流行
3124,model,模型、手本、モデル
3125,moderate,普通の、穏やかな、抑える、穏やかになる
3126,moderation,適度に
3127,modern,現代の、近代の
3128,modernization,近代化、現代化
3129,modest,謙虚な、控えめな、質素な、まあまあの
3130,modify,修正する
3131,moist,しっとりした、湿った
3132,moisture,水分、湿気
3133,mold,型に入れて作る、形成する
3134,molecule,分子、微粒子
3135,moment,(特定の)時、瞬間
3136,momentary,瞬間の
3137,momentum,力、勢い、運動量
3138,monarch,君主、皇帝
3139,monarchy,君主制、君主国
3140,monetary,金銭的な、金融の
3141,monitor,（監視）モニター、を監視する
3142,monk,修道士、僧
3143,monologue,独白
3144,monopoly,独占、専売（権）、独占企業、専売会社
3145,monotonous,単調な、一本調子の、退屈な
3146,monument,記念碑、遺跡、不滅の業績
3147,monumental,きわめて重要な、歴史的な、記念碑の
3148,mood,気分、雰囲気
3149,moral,道徳規範、道徳的な
3150,morality,道徳（性）
3151,morally,道徳的に、道義上
3152,moreover,さらに
3153,mortal,致命的な、死すべき（運命の）
3154,mortality,死亡
3155,mortgage,住宅ローン、抵当（権）
3156,mosquito,蚊
3157,moss,コケ
3158,mostly,主に、たいていは
3159,moth,ガ
3160,motion,動き、動作、運動、動議
3161,motivate,（人）に動機を与える
3162,motive,動機、原動力となる
3163,motor,モーター、原動力
3164,mount,載せる、はめ込む、またがる、乗る
3165,mourn,悲しみ嘆く
3166,movement,運動（団体）、動き、移動
3167,mud,泥
3168,muddle,混乱させる；もたもたする
3169,muddy,泥だらけの
3170,mule,ラバ
3171,multicultural,多文化〔民族〕からなる
3172,multiple,多様な、倍数の、倍数
3173,multiply,数を掛ける、増やす
3174,multitude,多数
3175,mumble,つぶやく
3176,mummy,ミイラ、お母さん
3177,mundane,平凡な
3178,municipal,地方自治体の、市町（営）の
3179,murder,～を殺害する、殺人
3180,murmur,かすかな音、つぶやき、ざわめく、ささやく
3181,muscle,筋肉、筋力、腕力、体力
3182,mush,をつぶす；つぶしてどろどろにしたもの
3183,Muslim,イスラム教徒、イスラム教の
3184,mutation,突然変異（体）、変化
3185,mutter,つぶやき、不平、つぶやく、不平を言う
3186,mutual,共通の、相互の
3187,mystery,不思議、神秘
3188,mystical,神秘的な、不可思議な
3189,myth,作り話、神話、誤った考え
3190,mythology,神話、神話学、（比喩的に）俗説、迷信
3191,na?ve,だまされやすい、単純な、純真な、無邪気な
3192,nail,釘、びょう、爪、釘で留める、捕まえる
3193,naive,騙されやすい、単純な、純真な、無邪気な
3194,naked,裸の、あからさまな、無防備の
3195,namely,すなわち、つまり
3196,nap,うたた寝する、（特に日中の）うたた寝
3197,narrative,物語、話、（小説の）叙述部分、地の文
3198,narrow,(幅・心・範囲が)狭い、辛うじての
3199,narrowly,かろうじて
3200,nasty,不快な、いやな、意地悪な、卑劣な
3201,nation,国家、国民
3202,nationalism,国家主義
3203,nationality,国籍、国民、国民性
3204,native,母国の、その土地に生まれた、原産の、原住民
3205,natural,当然の、自然の、生まれながらの
3206,nature,性質、（物事の）本質、自然（界）
3207,naughty,いたずらな、わんぱくな、邪悪な
3208,nauseous,吐き気がする
3209,navigate,航行する、操縦する、誘導する、うまく切り抜ける
3210,navigation,航海
3211,navy,海軍
3212,nearby,近くの、近くで
3213,nearly,ほとんど、すんでのところで
3214,neat,きちんとした、手際のよい、すばらしい
3215,necessarily,[否定文で]必ずしも（…ない）、必ず
3216,necessary,必要な
3217,nectar,(花の)蜜
3218,needle,針、とがったもの
3219,negative,否定的な、消極的な、負の、否定、(写真の)ネガ
3220,negativity,否定的態度、消極性
3221,neglect,軽視、怠慢、軽視する、放っておく、怠る
3222,negotiate,交渉する、を交渉して取り決める
3223,neighbor,近所の人、隣人、隣国（の人）、仲間
3224,neighborhood,地域、近所
3225,neither,どちらも…ない、Ｓもまた…ない
3226,nephew,甥
3227,Neptune,海王星
3228,nerve,神経、神経過敏、～する度胸
3229,nervous,神経の、神経質な、臆病な、あがった、緊張した
3230,nervousness,神経質、いらいらすること、臆病
3231,nest,（鳥・昆虫などの）巣
3232,net,正味の、掛け値なしの
3233,network,網状のもの、放送網、ネットワーク
3234,neurochemical,神経化学の
3235,neuron,神経単位（ニューロン）
3236,neuronal,神経単位の、ニューロンの
3237,neuroscience,神経科学
3238,neutral,中立の、はっきりしない
3239,nevertheless,それにもかかわらず
3240,nightmare,悪夢、悪夢のような経験〔事態〕
3241,nitrogen,窒素
3242,noble,気高い、貴族の、貴族
3243,nobody,誰も…ない、無名の人
3244,nod,うなずく、会釈する、いねむりする
3245,nominate,指名する
3246,none,どれも（誰も）…ない
3247,nonetheless,それにもかかわらず、それでもなお
3248,nonsense,ばかげた物［話、考え］、無意味な言葉
3249,nor,Ｓもまた…ない
3250,norm,規範、標準
3251,normal,標準の、正常な、標準
3252,north,北（部）（の）
3253,nostril,鼻の穴、鼻孔
3254,nosy,詮索好きな、おせっかいな
3255,notable,注目に値する、著名な
3256,notably,とりわけ
3257,note,注意する、気づく、メモ、紙幣、注釈、音符、(声の)調子
3258,notice,気づく、通知する、言及する
3259,noticeable,著しい、目立つ
3260,notify,知らせる、通知する
3261,notion,概念、考え、意見、気まぐれな考え
3262,notorious,悪名高い
3263,notwithstanding,それにもかかわらず
3264,nourish,に栄養を与える、を育てる
3265,novel,小説、斬新な
3266,novelty,目新しさ
3267,nowadays,近ごろは
3268,nowhere,どこにも…ない、実在しない場所
3269,noxious,有害な、有毒な
3270,nuance,に微妙な違いを与える；微妙な違い
3271,nuclear,核の、原子力の、中心の、核兵器
3272,nuisance,迷惑な行為や人
3273,numb,麻痺させる、無感覚になった、麻痺した
3274,numerous,非常に数の多い
3275,nun,修道女、尼僧
3276,nursery,託児所、保育園、子供部屋、園芸店、養殖場
3277,nursing,保育、看護
3278,nurture,～を養育する、～を育てる、～を教育する
3279,nutrient,栄養になる、滋養に富む、栄養物、栄養素
3280,nutrition,栄養（物・摂取）
3281,nutritional,栄養（上）の
3282,nutritious,栄養になる
3283,oath,誓い、誓約
3284,obedient,従順な、素直な
3285,obese,肥満した
3286,obesity,（病的）肥満
3287,obey,(命令・指示など)に従う
3288,object,反対する、（…）と言って反対する（that節）
3289,objectionable,不快な、反対すべき
3290,objective,目的、目標、客観的な
3291,obligation,義務、恩義
3292,obligatory,しなければならない、義務である
3293,oblige,～に…させる、～に親切にする、～に恩恵を与える
3294,obscure,あいまいな、不明瞭な、無名の、人目に付かない
3295,observance,（法・規則の）順守
3296,observant,観察の鋭い
3297,observe,観察する、を守る、（祝祭日など）を祝う、～と言う
3298,observer,監視員、観察者
3299,obsess,取りつく、（必要以上に）気にする
3300,obsessed,とりつかれている
3301,obsession,（考えなどに）取りつかれること、妄想、強迫観念
3302,obsolete,廃れた、使われなくなった、古くなった
3303,obstacle,障害（物）
3304,obstinate,頑固な、しつこい
3305,obstruct,妨害する、ふさぐ、さえぎる
3306,obtain,入手する
3307,obvious,明らかな、見てすぐわかる、分かり切った
3308,obviously,明らかに、当然ながら
3309,occasion,場合、時、出来事、機会、行事、（～する）根拠
3310,occasionally,時々
3311,occupancy,占有
3312,occupation,職業、占領
3313,occupy,占める、～に（賃借で）住む
3314,occur,起こる、（考えなどが）（突然）浮かぶ
3315,ocean,（通例the）大洋
3316,odd,変わった、片方の、奇数の、端数の、少しの
3317,odds,(優劣などの)差、勝ち目、可能性
3318,odor,におい、気配
3319,offend,の気分を害する、罪を犯す
3320,offending,怒らせる
3321,offensive,不快な、無礼な、攻撃的な
3322,offer,提供する、申し出る、差し出す
3323,office,地位、職場、事務所、研究室
3324,official,公の、公式の、公務（上）の、お役所風の
3325,offset,相殺する、埋め合わせする、埋め合わせ
3326,offspring,（単複両扱い）(人などの)子(孫)
3327,old-fashioned,時代（流行）遅れの
3328,ominous,不吉な
3329,omit,除外する、省略する、うっかり忘れる
3330,ongoing,継続している、進行中の
3331,online,オンラインの（で）
3332,onset,発症
3333,on-the-job,実地の、職場での
3334,onto,の上へ
3335,operate,操作する、動く、作用する、手術する
3336,opinion,意見
3337,opponent,相手、敵、対抗者、反対者
3338,opportunity,機会
3339,oppose,～に反対する、～を（…に）対立させる
3340,oppress,抑圧［迫害］する、悩ませる
3341,oppression,圧迫、圧制、圧迫感
3342,oppressive,重苦しい、過酷な、圧倒的な、暑苦しい
3343,opt,(他よりも～の方を)選択する、決める
3344,optimism,楽観主義
3345,optimistic,楽観的な
3346,option,選択肢、選択（権の自由）
3347,optional,任意の、選択が自由の
3348,oral,口頭での、口（内）の
3349,orbit,軌道、（活動・勢力などの）範囲
3350,ordeal,苦労、試練
3351,order,命令、注文、順番、秩序、を命令する、を注文する
3352,ordinary,普通の、正規の、ありふれた、平凡な
3353,organ,（体の）器官、（政府などの）機関、組織、オルガン
3354,organic,有機栽培の
3355,organism,有機体、生物、組織体
3356,organization,組織（化）、団体
3357,organize,組織する、体系づける、準備する、整える
3358,organizer,主催者、まとめ役、幹事
3359,orient,〔受身形で〕～に向いている、～に慣らす
3360,oriented,志向の
3361,origin,起源、由来、発端、生まれ、血統
3362,originally,元来は、初めは
3363,originate,由来する、生じる、始まる
3364,ornament,（室内・庭園の）装飾品、置物、を飾る
3365,orphan,孤児
3366,otherwise,さもなければ、その他の点で、違ったふうに、別のやり方で
3367,ought,～すべきである
3368,outbreak,（悪いことの）突発、発生、暴動、反乱
3369,outburst,(火山・怒り・笑いなど)の爆発
3370,outcast,見捨てられた人、浮浪者
3371,outcome,結果、成果
3372,outdated,時代遅れの、古くて役に立たない、期限切れの
3373,outer,外側の、中心から離れている
3374,outfit,衣服、用具一式、装備を用意する
3375,outgoing,社交的な、積極的な、引退する
3376,outlet,直売店、特売店、はけ口、（電気の）コンセント
3377,outline,概略、輪郭、要点を言う、輪郭をつける
3378,outlive,他の人より長生きする
3379,outlook,態度、考え方、見通し、見込み
3380,outnumber,に数でまさる
3381,outpace,～より速いペースで進む
3382,output,生産高、（コンピューターなどの）出力
3383,outraged,憤慨している
3384,outrageous,法外な、途方もない、けしからぬ
3385,outrageously,ひどく、法外に
3386,outset,最初
3387,outsider,部外者、門外漢
3388,outsmart,出し抜く
3389,outsource,を外注する、を業務委託する
3390,outstanding,際立った、未払いの、未解決の
3391,outweigh,より重要である、に勝る、より重い
3392,overall,全体の、全面（全般）的な、全体として
3393,overcast,覆い隠す；悲しみで包まれた
3394,overcome,打ち勝つ、克服する、[受け身で]うちのめされる
3395,overconfident,自信過剰な
3396,overdo,を使い過ぎる、をやり過ぎる
3397,overdue,支払期限を過ぎた、(予定の日時より)遅れた
3398,overestimate,を過大評価する[見積もる]
3399,overfishing,（魚の）乱獲
3400,overflow,あふれる、あふれ出ること[人・物]
3401,overhaul,(システムなど)を総点検する、を分解修理する
3402,overhear,ふと耳にする
3403,overlap,重なり合う、共通するところがある、重ね合わす、重複
3404,overlay,を覆う、を上塗りする
3405,overload,に負荷をかけすぎる
3406,overlook,見落とす、大目に見る、見下ろす
3407,overly,あまりに、過度に
3408,overnight,一晩で、一晩中、急に、突然
3409,overpower,を圧倒する
3410,overrate,過大評価される
3411,overseas,海外へ［に、で]
3412,oversee,（労働者・仕事・活動など)を監督する、を監視する
3413,overshadow,影を投げかける、～の影を薄くする
3414,oversight,見落とし、監督、管理
3415,overspend,（お金を）使いすぎる
3416,overstate,大げさに話す、誇張する
3417,overtake,～に追いつく、（災難・強い感情などが）を襲う
3418,overthrow,倒す、崩壊させる、崩壊、打倒、転覆
3419,overweight,太りすぎの
3420,overwhelm,圧倒する、打ちのめす
3421,overwhelming,圧倒的な
3422,overwork,働きすぎる、～を働かせすぎる，酷使する、過労
3423,owe,に借金がある、に恩を受けている
3424,owing,のために
3425,owl,フクロウ
3426,own,所有している、（事実・罪など）を認める
3427,ownership,所有権、所有者であること
3428,oxygen,酸素
3429,oyster,カキ
3430,pace,歩調、進度
3431,Pacific,太平洋
3432,pack,詰める、包む、衣類を詰める、1箱
3433,package,を荷造り（包装）する；包み、容器
3434,packet,パッケージ、包装、袋、多額の金：パケット
3435,pact,条約、協定
3436,pageant,野外劇、ページェント
3437,pain,苦痛、痛み、苦悩、〔～s〕骨折り
3438,painful,つらい、痛い
3439,painkiller,鎮痛剤
3440,painless,痛みのない、努力のいらない
3441,palace,宮殿
3442,pale,顔色が悪い、（色の）淡い、薄い、迫力のない
3443,palm,手のひら、ヤシ
3444,pandemic,全国（全世界）流行の、感染爆発の
3445,panel,(公開討論会の)出演者、パネル、専門家集団、委員会
3446,panic,大混乱、恐慌、をうろたえさせる、うろたえる
3447,panorama,全景、パノラマ
3448,pant,あえぐ、あえぎながら動く[言う]、あえぎ、息切れ
3449,paperwork,(必要)書類、書類事務
3450,paradigm,理論的枠組み
3451,paradox,逆説、パラドックス、矛盾
3452,paradoxically,逆説的に（言えば）、逆説的だが
3453,paragraph,段落
3454,parallel,平行な、類似の、類似点、平行に
3455,paralysis,麻痺、〔比喩的に〕麻痺（状態）
3456,paralyze,～を麻痺させる
3457,paralyzed,麻痺している
3458,paranoid,被害妄想的な
3459,paraphrase,言い換える
3460,parasite,寄生生物
3461,Pardon,～を許す
3462,parental,親の
3463,parliament,（英国などの）議会、国会議員（団）
3464,parody,パロディー
3465,parrot,オウム
3466,part,部分、部品、役目、せりふ、分け前、分担、側、味方
3467,partial,部分的な、不公平な
3468,participant,参加者
3469,participate,参加する、関わる、加わる
3470,participation,参加
3471,particle,（微）粒子、ほんのわずか
3472,particular,特定の、格別の、著しい、好みがうるさい、個々の項目
3473,partition,仕切り
3474,partly,部分的に、一部には
3475,pass,通過する、渡す、経過する、通る、亡くなる（away）、通行許可
3476,passage,通行、通路、（文章や曲の）一節、経過、通過、廊下、旅行
3477,passenger,乗客
3478,passion,情熱、熱中、激情、愛情
3479,passionate,情熱的な
3480,passive,消極的な、受け身の、言いなりになる、おとなしい
3481,past,過去、過去の、ここ～（年月など）の、を過ぎて
3482,pastime,気晴らし、娯楽
3483,pasture,牧草地、放牧地
3484,patch,部分、斑点、継ぎ、貼り薬
3485,patent,特許（権）、特許品、特許の、特許に関する、明白な
3486,path,小道、歩道、方針、生き方、進路
3487,pathetic,哀れな
3488,pathway,小道、細道
3489,patient,患者、忍耐強い
3490,patriot,愛国者
3491,patriotic,愛国的な
3492,patriotism,愛国主義
3493,patron,後援者、パトロン
3494,patronizing,見下すような、横柄な、恩着せがましい
3495,pattern,様式、模様
3496,pause,（一時的に）中止する、（一瞬）立ち止まる
3497,pave,舗装する
3498,pavement,舗装、舗装道路
3499,pavilion,（博覧会などの）パビリオン
3500,pay,支払う、（注意など）を払う、報いる、割に合う、給料
3501,paycheck,給与
3502,peaceful,平和（的）な
3503,peak,峰、頂上、最高潮
3504,pearl,真珠、貴重なもの[人]
3505,peasant,（昔または発展途上国の）小作農
3506,peculiar,特有の（to）、奇妙な
3507,pedestrian,歩行者、歩行者用の
3508,pedometer,歩数計、万歩計
3509,peer,同僚、同等の人、凝視する
3510,penalty,（刑）罰、罰金、ペナルティ
3511,pending,未解決の
3512,penetrate,貫く、しみ込む、広がる、見抜く、理解する、入り込む
3513,peninsula,半島
3514,pension,年金、恩給
3515,per,～あたり、～につき
3516,per capita,一人当たりの
3517,perceive,知覚する、気づく、理解する
3518,perception,認識、知覚
3519,perch,止まり木、止まる
3520,perfect,完全な、まったくの、を完成する
3521,perform,行う、上演する、演奏する
3522,performance,"実行, 業績, 演技, 演奏"
3523,perfume,香水、（快い）香り
3524,perhaps,ひょっとすると、だいたい
3525,peril,危険
3526,perilous,とても危険な
3527,perimeter,周囲
3528,period,期間、時期、時代、授業の時限、月経（期間）
3529,periodically,定期的に，周期的に，時折
3530,perish,死ぬ、滅びる、消滅する
3531,perishable,（食べ物などが）腐りやすい
3532,permanent,（半）永久的な、永続する、耐久の、常置の、終身の
3533,permanently,永遠に、いつも
3534,permeate,にしみ込む、浸透する、に行き渡る
3535,permission,許可、承認
3536,permit,許可する
3537,perpetual,永続的な、ひっきりなしの
3538,perpetuate,永続させる、不朽にする
3539,perplex,当惑させる、複雑にする、紛糾させる
3540,persecute,迫害〔虐待〕する、非常に困らせる
3541,persecution,迫害
3542,persevere,やり抜く、辛抱する
3543,persist,固執する、主張し続ける、～し続ける、存続する
3544,persistent,執拗な、固執する、持続する
3545,personal,個人的な
3546,personality,個性、性格、人格、独特の雰囲気、有名人
3547,personally,個人的に、個人的見解では、自分（自身）で
3548,personnel,社員、隊員、人事部
3549,perspective,観点、遠近法（感）、見通し
3550,perspire,汗をかく
3551,persuade,説得する、説得して～させる
3552,persuasive,説得力のある
3553,pertinent,（直接）関連のある、適切な
3554,pervade,に普及する
3555,pervasive,隅々に広がった、浸透する、充満する
3556,pessimistic,悲観的な
3557,pesticide,殺虫剤、除草剤
3558,petition,請願(書)、嘆願(書)
3559,petroleum,石油
3560,petty,ささいな
3561,pharmacist,薬剤師
3562,pharmacy,薬局
3563,phase,段階、時期、側面、局面
3564,phenomenon,現象、驚くべき事（物、才能、人）
3565,philosopher,哲学者
3566,philosophy,哲学、原理、人生観、考え方
3567,phobia,恐怖症
3568,phonetic,音声上の
3569,phosphorus,リン
3570,photo,写真
3571,phrase,句、成句、言葉遣い
3572,physical,身体の、物質的な、物理学の
3573,physician,医師、内科医
3574,physics,物理学
3575,physiological,生理学(上)の
3576,pick,（花、果実などを）摘む、選ぶ
3577,piece,（a～of…）１つの…、部品、楽曲
3578,pierce,貫く、刺す、身にしみる、感動させる
3579,pigment,色素、顔料
3580,pile,積み重ね、山、たくさん、積み重ねる、殺到する
3581,pilgrim,巡礼者
3582,pill,錠剤、丸薬、〔the～〕ピル、経口避妊薬
3583,pillar,柱、要所、中心的存在
3584,pin,ピンで留める、突き刺す
3585,pinch,つねる
3586,pine,マツ
3587,pinpoint,非常に正確な
3588,pioneer,先駆者、開拓者、～を開拓する、～の先駆けとなる
3589,pious,信心深い、宗教的な
3590,piracy,著作権〔特許権〕侵害、海賊行為、違法コピー
3591,pit,穴、くぼみ
3592,pitch,投げる、倒れる、縦揺れする
3593,pitfall,（通例 ―s）落とし穴，隠れた危険
3594,pity,哀れみ、残念なこと、を気の毒に思う
3595,pivotal,極めて重要な
3596,placebo,偽薬、プラシーボ、気休め
3597,placement,(就職先・学校・里親などの)斡旋、配置
3598,plague,疫病、（害虫などの）異常発生
3599,plain,はっきりした、わかりやすい、質素な、簡素な、平野
3600,plainly,明白に、明らかに、率直に、質素に
3601,planet,惑星、（our～）地球
3602,plant,植物、工場、を植える
3603,plantation,農園
3604,plaster,石こう
3605,plastic,プラスチック(の)、ビニール（の）
3606,plate,皿、（1人分の）料理、板、（地球表面の）プレート
3607,platform,プラットフォーム、演壇、舞台
3608,plausible,もっともらしい、妥当な
3609,playground,遊び場、運動場、行楽地、活動領域
3610,plea,懇願、嘆願
3611,plead,懇願する、嘆願する、と懇願する、（事件を）争う
3612,pleasant,楽しい、心地よい
3613,pleasure,楽しみ
3614,pledge,誓う、約束する、与えることを約束する、約束、誓約
3615,plentiful,豊富な、十分な
3616,plenty,たくさん、たくさんの～（of）
3617,plight,窮状、（悪い）状態
3618,plot,(物語などの)筋、たくらみ、（土地の）小区画
3619,plow,（耕作用の）すき
3620,pluck,摘む、引き抜く、むしりとる
3621,plug,プラグを電源に差し込む、ふさぐ
3622,plumbing,（建物の）配管設備
3623,plunder,略奪する、強奪する
3624,plunge,突進する、急に下り坂になる、突入、急な下落
3625,plural,複数の、2つ[2人]以上の、複数形の
3626,Pluto,冥王星
3627,poach,密漁する
3628,poacher,密漁[密猟]者
3629,poem,(１遍の)詩
3630,poet,詩人
3631,poetry,詩
3632,point,要点、（位置、時間上の）点、瞬間、目的
3633,poison,毒（物）
3634,poke,突く、突っ込む、突き出す、せっかいをやく、つつくこと
3635,polar,極地の、電極の
3636,pole,棒、（地球・天体の）極
3637,police,警察
3638,policy,政策、方針、（個人の）主義
3639,polish,（物・技量）を磨く
3640,polite,礼儀正しい、丁寧な、上品な、上流の
3641,political,政治の、政治的な、政治に関する
3642,politics,政治、政治学
3643,poll,世論調査、（the）投票、投票する
3644,pollen,花粉
3645,pollutant,汚染物質、汚染源
3646,pollute,汚染する
3647,polluted,汚染された
3648,pollution,汚染、公害
3649,pond,池
3650,ponder,熟考する、考えをめぐらせる
3651,poor,貧しい、粗末な、かわいそうな
3652,pop,飛び出る、ポンと置く（外す）、ポピュラーな
3653,popularity,人気、流行
3654,populate,に住む、の住民である、に人を住まわせる
3655,population,人口、（the）全住民、全個体数
3656,port,港（町）
3657,portable,持ち運びできる、携帯用
3658,portion,部分、1人前、割り当て
3659,portray,(人物・風景など)を描く、（言葉で）を描写する
3660,pose,（問題など）を提起する、ポーズをとる
3661,position,位置、場所、立場、形勢、地位、姿勢、勤め口、職
3662,positive,肯定的な、積極的な、確信して、陽性の
3663,possess,持っている、とりつく
3664,possession,所有物、財産、所有
3665,possible,あり得る、（事が）可能な
3666,possibly,ひょっとすると、[否定文で]どうしても～できない
3667,post,投函する、郵便（制度）、地位、柱
3668,posterior,(～より)後の(to～)
3669,postpone,延期する
3670,posture,姿勢、態度
3671,postwar,戦後の
3672,potent,有力な、影響〔説得〕力のある
3673,potential,可能な、潜在的な、能性がある、可能性、潜在能力
3674,pottery,陶器類、焼き物類
3675,pound,ポンド（重量の単位、イギリスの通貨単位）
3676,pour,注ぐ、どしゃ降りに降る、流れ出る
3677,poverty,貧困、不足、不毛
3678,power,力、能力、権力、強国、エネルギー
3679,powerful,強力な、影響力のある
3680,practical,"実用的な, 現実的な"
3681,practically,ほとんど、実際的に、事実上
3682,practice,実行、練習、慣例、（医師や弁護士などの）業務
3683,pragmatic,現実的な、実用的な、実用主義の
3684,prairie,大草原
3685,praise,賞賛する
3686,pray,祈る
3687,preach,説教する
3688,preacher,説教者、牧師
3689,precaution,用心
3690,precede,先行する、優先する、前に置く
3691,precedent,前例
3692,preceding,前の、先行する、前述の
3693,precious,貴重な、高価な
3694,precipitation,降水（量），〈化学〉沈殿
3695,precise,正確な、精密な、まさにその
3696,precisely,正確に、まさに、ちょうど
3697,precision,正確さ
3698,preclude,排除する、妨げる
3699,preconceived,あらかじめ考えた
3700,predate,以前からある
3701,predator,捕食動物、略奪者
3702,predecessor,前任者、前のもの
3703,predict,予言する、予測する
3704,predominantly,主に
3705,preemptive,先制の
3706,prefecture,（日本の）県、府、（フランスなどの）県
3707,prefer,～を好む、～が好きだ
3708,preference,他より好むこと、好み
3709,pregnancy,妊娠
3710,pregnant,妊娠している、意味深長な、含蓄のある
3711,prehistoric,有史以前の、旧式な
3712,prejudice,偏見
3713,preliminary,予備の、準備の
3714,premature,早過ぎる、(判断などが)早まった
3715,premise,前提、〔～s〕（建物を含めた）構内、敷地
3716,premium,保険料、プレミア、景品
3717,preoccupation,最大の関心事、没頭、夢中（にさせるもの）、先入観
3718,preoccupied,夢中になった、心を奪われている
3719,preoccupy,～の心を奪う、～を夢中にさせる
3720,preparation,準備
3721,prepare,用意する、心構えをさせる、訓練する、覚悟する
3722,prepayment,前払い
3723,prerequisite,必須条件、必要条件
3724,prescribe,処方する、指示する、規定する
3725,prescription,処方(箋)、命令、規定
3726,presence,存在、出席、面前
3727,present,現在の、出席して、贈り物、発表する、贈る
3728,preservative,保存料
3729,preserve,保存する、保つ、保護する
3730,president,社長、会長、学長、大統領
3731,presidential,大統領の[による]、社長の
3732,press,押す、押し付ける（こと）、新聞、報道陣
3733,pressure,圧力、重圧
3734,prestige,名声、〔形容詞的に〕名声のある
3735,prestigious,名声のある
3736,presumably,おそらく、思うには
3737,presume,と思う、と推定する、を前提とする
3738,pretend,～のふりをする、（～ということ）を装う
3739,pretense,ふり、見せかけ
3740,pretext,口実
3741,pretty,かなり、かわいらしい
3742,prevail,普及する、（提案、原理などが）打ち勝つ
3743,prevalent,蔓延している、広く行き渡っている
3744,prevent,防ぐ、(～が…するの）を妨げる
3745,prevention,予防、防止、妨害
3746,previous,以前の、前回の
3747,previously,以前に
3748,prewar,戦前の、戦前には
3749,prey,(動物の)獲物、餌食、捕食する（on）
3750,price,（品物の）値段、（複数）物価、代償
3751,pride,誇り、自尊心、自慢する
3752,priest,聖職者、僧侶
3753,primarily,主として、初めに
3754,primary,最も重要な、第一の、初等（教育）の
3755,primate,霊長類の動物
3756,prime,主要な、最も重要な、最適な、極上の
3757,primitive,原始的な、原始（時代）の
3758,principal,主要な、校長、主役
3759,principle,主義、方針、（自然の）原理、原則
3760,print,印刷する、出版する、印刷（物）
3761,prior,前の、優先的な
3762,priority,優先（事項）
3763,prison,刑務所、拘留所
3764,prisoner,囚人
3765,private,個人の、内密の、民間の
3766,privatize,民営化する
3767,privilege,特権、特典、名誉、～に特権を与える
3768,prize,賞（品）、貴重なもの
3769,probability,見込み
3770,probable,十分にありそうな
3771,probably,おそらく
3772,probation,執行猶予、保護観察
3773,probe,宇宙探査機、精査、探り針
3774,problematic,問題のある、疑わしい
3775,procedure,手続き、（一連の）措置
3776,proceed,進む、取りかかる、次に～する
3777,process,過程、工程、方法、手順、経過、進展
3778,procession,(儀式などの)行列、行進
3779,proclaim,～を宣言する、～を（…だとはっきり）示す
3780,produce,製造する、生産する、提出する
3781,productivity,生産性
3782,profess,公言する
3783,profession,職業、専門職、同業者仲間
3784,professional,専門的な、プロの
3785,professor,教授
3786,proficiency,熟達、技量
3787,proficient,熟達した、堪能な
3788,profile,の概略を示す、輪郭、横顔、プロフィール
3789,profit,利益、利益を得る（になる）
3790,profitable,利益になる、有益な
3791,profound,深い、重大な
3792,program,に組み込む、方向づける、をプログラムする；計画、番組(表)
3793,progress,前進する、進歩する、進歩、前進
3794,prohibit,禁止する、妨げる
3795,project,企画、事業、学習課題、計画する、映し出す、見積もる
3796,projection,予測
3797,proliferate,急増する、繁殖する
3798,prologue,プロローグ、序文
3799,prolong,（時間・期間など）を延長する
3800,prominence,目立つこと、卓越
3801,prominent,卓越した、目立った、（物理的に）突き出した
3802,promise,約束する、約束、見込み
3803,promising,前途有望な
3804,promote,促進する、奨励する、昇進させる
3805,promotion,昇進、促進、販売促進
3806,prompt,刺激する、即座の、機敏な
3807,prone,～しがちである、～をこうむりがちである
3808,pronoun,代名詞
3809,pronounce,発音する、断言する、宣言する
3810,pronunciation,発音
3811,proof,証拠
3812,propel,を進ませる、(人)を駆り立てる
3813,proper,適切な、正式の、主要な、固有の
3814,property,財産、所有物、特性
3815,prophecy,予言（すること）、予知能力
3816,prophet,預言者
3817,proponent,支持者
3818,proportion,割合、比例、つりあい、部分
3819,proportional,釣り合った、比例した
3820,propose,提案する、もくろむ、結婚を申し込む
3821,propriety,正当性、適当、礼儀
3822,prose,散文(体)
3823,prosecute,起訴する
3824,prospect,候補者、見込み、将来性、可能性
3825,prosper,栄える、成功する、繁殖する
3826,prosperity,繁栄
3827,prostate,前立腺
3828,protect,保護する、守る
3829,protective,保護する、守ろうとする
3830,protein,タンパク質
3831,protest,抗議、主張、に抗議する、を主張する、抗議する
3832,Protestant,プロテスタントの； 新教徒
3833,protocol,（条約）議定書、外交儀礼、プロトコル
3834,prototype,原型、試作品、典型
3835,proudly,誇らしげに、得意げに
3836,prove,証明する、 ～であると分かる
3837,proverb,ことわざ
3838,provide,"提供する、養う（for）、備える（for, against）"
3839,province,州、省、県、地方、分野
3840,provoke,怒らせる、(感情などを）起こさせる、駆り立てる
3841,proximity,近いこと
3842,prudent,分別のある、用心深い
3843,psychiatric,精神医学の
3844,psychiatrist,精神科医
3845,psychiatry,精神科，精神医学
3846,psychic,精神的な、神霊の、超自然的な
3847,psychologist,心理学者
3848,psychology,心理学、心理（状態）、心理作戦
3849,pub,居酒屋
3850,public,公の、公衆の、公開の
3851,publication,出版(物)、発行
3852,publicity,宣伝、広告
3853,publicize,公表する、宣伝する
3854,publish,発表する、出版する
3855,pull,引く、車を寄せる
3856,pulse,脈拍、鼓動
3857,pump,排出する、（ポンプで）くみ上げる、ポンプ
3858,punctual,時間を厳守する、時間に正確な（for）
3859,punctuality,時間厳守
3860,puncture,(タイヤ)をパンクさせる、に穴をあける
3861,punish,罰する、に損傷を与える
3862,punitive,刑罰の、罰する
3863,pupil,瞳、生徒、弟子
3864,purchase,（大きな物・高額な物）を買う、購入（品）
3865,pure,純粋な、潔白な、まったくの
3866,purpose,目的（of）
3867,purse,財布、ハンドバッグ
3868,pursue,追跡する、追求する、従事する
3869,pursuit,仕事、追跡、追求
3870,puzzle,困らせる、わからないこと、パズル
3871,quaint,古風で趣のある
3872,quake,震える、おののく、振動する、地震、震え
3873,qualified,有能な、資格のある、適任の
3874,qualify,（人）に資格を与える、資格がある
3875,quality,質、特質
3876,quantity,量、分量
3877,quantum,量子、量
3878,quarrel,口論、口喧嘩、口論する
3879,quarter,1/4、15分、25セント、四半期、場所
3880,quartz,水晶、石英、クォーツ
3881,quest,探索、探究(物)、捜し求める
3882,questionable,疑わしい
3883,questionnaire,アンケート（用紙）
3884,queue,列、行列、待ち行列、列を作る
3885,quick,素早い
3886,quit,（仕事など）をやめる
3887,quite,かなり、まったく
3888,quiver,おののく、(細かく)震える、を震わせる
3889,quota,割当量[数]、ノルマ
3890,quote,引用する、引き合いに出す
3891,r?sum?,履歴書[≒CV]、要約
3892,race,人種、民族、人類、競争、急ぐこと、大急ぎでやる
3893,racial,人種の、民族の
3894,racism,人種差別(主義[政策])
3895,racist,人種差別主義者
3896,radiation,放射（線）
3897,radical,根本的な、急進的な、過激な
3898,radically,根本的に、過激に
3899,radius,半径
3900,rag,ぼろ
3901,rage,激怒、猛威、熱狂、激怒する、猛威を振るう
3902,raid,急襲
3903,railroad,鉄壁道(線路)
3904,railway,鉄壁道
3905,rainfall,降雨（量）
3906,rainforest,（熱帯）雨林
3907,raise,育てる、上げる、提起する、集める
3908,rally,元気づける、復興する、（人）を集める、集会
3909,ram,雄羊
3910,rampage,凶暴な行動
3911,ranch,牧場
3912,random,無作為の、手当たり次第の
3913,randomly,無作為に、手当たり次第に、無計画に
3914,range,範囲、（範囲が）及ぶ、を並べる
3915,ranger,森林警備員
3916,rank,位置づける、位置する、階級、地位、列
3917,ransom,身代金、(身代金などによる)解放
3918,rapid,急速な、速い
3919,rapidity,素早さ、急速、敏速、速度
3920,rapidly,急激に、早く
3921,rare,まれな、珍しい、すばらしい
3922,rarely,めったに…(し)ない
3923,rash,早まった、軽率な
3924,rat,ネズミ
3925,rate,評価する、割合、速度、料金
3926,rather,かなり、むしろ、それどころか
3927,rating,評価、格付け
3928,ratio,割合、（２つの数量間の）比率
3929,ration,(食料・物資などの)割当(量)
3930,rational,理性的な、合理的な
3931,rattle,がたがた鳴らす
3932,raw,(食物が)生の、加工されていない
3933,ray,光線、ひらめき、一筋の光明
3934,reach,に着く、に達する、を取る、手を伸ばす、届く範囲
3935,react,反応する、反作用する
3936,readily,すぐに、容易に、快く
3937,ready,準備ができて、喜んで～する、即座の、巧みな
3938,real,"本当の, 本物の, 現実の"
3939,realistic,現実的な、実際的な
3940,realize,悟る、実現する
3941,realm,領域、分野、王国
3942,reap,刈り取る、収穫する、得る
3943,rear,育てる、後部、後部の
3944,reason,理由、根拠、理性、分別
3945,reasonable,合理的な、分別のある、（値段が）手ごろな
3946,reasoning,推論、理論、論拠
3947,reassure,安心させる
3948,rebel,反逆者、反抗者、謀反人、反乱を起こす、反抗する
3949,rebellion,反乱
3950,rebellious,反抗的な、反逆した、謀反を起こした
3951,rebound,(ボールなどが)跳ね返る
3952,recall,思い出す、呼び出す、思い出すこと
3953,recede,去っていく、薄れる、弱まる
3954,receive,受け取る、破る
3955,recent,最近の、ごく新しい
3956,recently,最近，近ごろ
3957,reception,反応、宴会、受付、受信（状態）
3958,receptive,受け入れる 包容力のある
3959,recess,休憩
3960,recession,(一時的な)不況
3961,recipe,調理法、レシピ、手順、秘訣
3962,recipient,受け取る人、（臓器などの）被提供者
3963,recital,リサイタル、独奏[独唱]会
3964,recite,（聴衆の前で）朗読する、暗唱する、詳細に話す
3965,reckless,無謀な、（～を）顧みない（of）
3966,reckon,思う、推測する、ざっと数える、計算する
3967,recognition,認識、承認
3968,recognize,認める、覚えがある、誰だかわかる、表彰する
3969,recollect,～を思い出す
3970,recollection,記憶
3971,recommend,推薦する、～に（…することを）、勧める
3972,reconcile,和解する、を和解させる、を調停する、を調和させる
3973,reconstruct,を再建する、を改変する
3974,record,記録する、記録（書類）、履歴、成績
3975,recover,（失っていたもの）を取り戻す、～を回復する
3976,recovery,回復、取り戻すこと
3977,recreation,レクリエーション、気晴らし
3978,recruit,募る、に新人を補充する
3979,recruitment,新規採用
3980,rectangle,長方形
3981,rectangular,長方形の
3982,recurrent,(周期的に)繰り返される、(病気などが)再発する
3983,redeem,(失敗・欠点など)を補う、を埋め合わせる
3984,reduce,減少させる、弱める、変える
3985,reduction,減少
3986,redundant,不要な、余分な、(表現などが)冗長な
3987,reef,（岩や砂の）礁、暗礁
3988,refer,言及する、参照する、関連がある
3989,referee,レフェリー、審判員
3990,reference,言及、参照
3991,referral,紹介
3992,refine,精製する、磨く、洗練する
3993,refined,洗練された、優雅な
3994,reflect,反映する、反射する、よく考える
3995,reflex,反射（運動）
3996,reforestation,植林、森林再生
3997,reform,改善[改革]する、改革(運動）
3998,refrain,差し控える、やめる
3999,reframe,を組み立て直す
4000,refresh,（気分）をさわやかにする、新たにする
4001,refreshing,さわやかな
4002,refrigerator,冷蔵庫
4003,refuge,避難、保護、避難所、隠れ家
4004,refugee,難民
4005,refund,返金、払い戻し(金)
4006,refusal,拒否、拒絶
4007,refuse,拒絶する、（きっぱりと）断る
4008,refute,[他] ～を論駁する，～に反論する
4009,regain,回復する、取り戻す、戻る、帰り着く
4010,regard,～を…とみなす、尊重する、敬意、注意
4011,regarding,に関して
4012,regardless,かまわない、無頓着な
4013,regime,政権、（社会）制度、体制
4014,region,地域、地方、分野、領域、（身体の）部分
4015,register,記録、登録する、書留にする、表す、登録
4016,regret,後悔（する）、残念（に思う）
4017,regular,定期的な、規則的な、一定の、いつもの
4018,regulate,規制する、調整する
4019,regulation,規則、規制
4020,regulator,規制者、調節装置
4021,rehearsal,(劇・音楽などの)リハーサル、下げいこ
4022,reign,治世、統治機関、君臨する
4023,reindeer,トナカイ
4024,reinforce,強化する、補強する
4025,reintroduce,～をかつての分布域に再導入する、～を復活させる
4026,reject,拒絶する
4027,rejoice,喜ぶ
4028,relapse,逆戻りする、再発する
4029,relate,関連づける、話す、関係がある
4030,related,関連した、関係のある
4031,relationship,関係、親密な関係
4032,relative,相対的な、比較上の、関連した、相互の
4033,relatively,比較的
4034,relax,くつろぐ、緩む、くつろがせる、緩める
4035,relay,継電器、交代要員、リレー競走、中継、伝達する
4036,release,放つ、解放する、発売する、放出、発表
4037,relentless,執拗な、情け容赦のない
4038,relevant,関連がある、適切な
4039,reliable,信頼できる
4040,relic,遺跡、遺品
4041,relieve,和らげる、安心する、を解放する
4042,religion,宗教、信条、信仰（心）
4043,religious,宗教(上)の、信仰があつい
4044,relocate,(住居・事務所・住民など)を移転[移動]させる
4045,reluctant,気が進まない、嫌がる
4046,rely,頼る
4047,remain,依然～のままである、とどまる、残り、遺跡
4048,remainder,残り
4049,remains,遺跡、遺構
4050,remark,述べる
4051,remarkable,すばらしい
4052,remedy,治療法、治療、治療薬
4053,remember,覚えている
4054,remind,思い出させる、気づかせる
4055,reminder,思い出させるもの、記念物[品]
4056,reminiscent,思い出させる
4057,remnant,残されたもの、遺物
4058,remodel,を改装する、を改造する
4059,remorseful,後悔に満ちた
4060,remote,遠い、へんぴな、遠く隔たった、かすかな
4061,removal,除去、移動
4062,remove,取り除く、移動させる、脱ぐ、解任する、解雇する
4063,renaissance,復興、復活、（the R～）ルネッサンス、文芸復興
4064,render,～を…にする、～に…を与える
4065,renew,更新する、再生する
4066,renounce,放棄する
4067,renovate,を改修[改築]する
4068,renowned,著名な、名声ある
4069,rent,賃貸料、使用料、家賃、賃借りする、賃貸しする
4070,repair,修理する、（健康など）を回復する、償う
4071,repay,を返済する
4072,repeal,廃止する
4073,repeat,繰り返す、復唱する、口外する
4074,repel,追い払う、退ける
4075,repetitive,繰り返しの
4076,replace,取って代わる、取り替える、元の場所に戻す
4077,replacement,交換、交替、代わりの人[もの]
4078,replenish,補充する
4079,replicate,(同一実験など)を繰り返す、を複製する
4080,reply,答える（to）、答え
4081,reportedly,伝えられるところによると、報道によれば
4082,represent,表す［意味する］、代表する、描写する
4083,representation,表現（描写）、代表
4084,representative,代表者、代理人
4085,reprint,を増刷（再版）する；増刷、再版
4086,reproduce,再生する、繁殖させる、繁殖する
4087,reproduction,生殖、繁殖
4088,reptile,爬虫類(動物)
4089,republic,共和国、団体、社会
4090,reputable,評判の良い
4091,reputation,名声、評判
4092,request,頼む、要請する
4093,require,必要とする、要求する
4094,requirement,必要条件、要求（物）
4095,reschedule,の日時を変更する
4096,rescue,救助、救済、（危険・束縛などから）を救う
4097,research,研究、調査
4098,researcher,研究者
4099,resemble,に似ている
4100,resent,憤慨する、ひどく嫌う
4101,resentful,憤慨した
4102,resentment,憤慨、恨み
4103,reservation,予約、慎重な姿勢
4104,reserve,蓄え、慎み、保護区、取っておく、予約する
4105,reside,住む
4106,residence,住居、居住
4107,resident,住民、滞在者
4108,residential,住宅の
4109,resign,辞職する、断念する、放棄する、甘んじて従う
4110,resignation,辞職
4111,resilient,弾力性のある； 回復力のある、立ち直りの早い
4112,resin,樹脂
4113,resist,に抵抗する、〔通例否定文で〕を我慢する
4114,resistance,抵抗（力）
4115,resistant,耐性のある、抵抗する
4116,resolute,断固とした、固く決心した
4117,resolve,決心する、解決する、分析する、決定する、分解する
4118,resort,（手段に）訴える、（楽しい所へ）行く
4119,resource,資源、財源、貯蔵、手段、臨機応変の才
4120,respect,点、尊敬、重視、関心、関連、尊重する
4121,respectable,ちゃんとした
4122,respective,それぞれの
4123,respiratory,呼吸器に関する、呼吸の
4124,respond,反応する、答える（to）
4125,respondent,(調査・アンケートなどの)回答者
4126,responsibility,責任
4127,responsible,責任がある、信頼できる、原因である
4128,responsibly,責任をもって
4129,responsiveness,反応がいいこと、反応性、敏感なこと
4130,rest,残り、休み、休む
4131,restate,を再び述べる、言い渡す
4132,restless,落ち着きのない、不安な、絶え間ない
4133,restore,復活させる、もとの状態に戻す、回復する
4134,restrain,抑える、やめさせる
4135,restrict,制限する
4136,result,終わる（in）、結果として起こる、結果、成績
4137,resume,再び始める、取り戻す、履歴書、要約
4138,resurgence,復活，再起
4139,retail,小売り
4140,retailer,小売業者、小売販売店
4141,retain,保持する、維持する
4142,retire,引退する、退職する、退く
4143,retrace,引き返す
4144,retreat,後退、撤退、後退する、逃げる
4145,retributive,報いの、応報の
4146,retrieve,取り戻す、回収する、回復する、救う
4147,retrospect,追憶、思い出
4148,return,戻す、戻る、戻り、返却、利益
4149,returnee,帰国子女
4150,reunion,再会（の集い）、再結合
4151,reveal,明らかにする、見せる、示す
4152,revenge,復讐をする、あだを討つ、復讐
4153,revenue,歳入、収益
4154,reverse,逆にする、一変させる、（the）逆の、逆の
4155,review,批評する、見直す、復習する、批評、再検討、復習
4156,revise,変更する、改訂する、復習する
4157,revitalize,新しい活力を与える
4158,revive,蘇生させる、復活させる、生き返る
4159,revoke,取り消す
4160,revolt,反逆する、むかつく
4161,revolution,革命、回転、（天体の）公転
4162,revolve,回転する
4163,reward,報酬、見返り、褒美、報いる
4164,rewarding,満足感が得られる、報われる
4165,rhetoric,修辞法、美辞麗句、説明
4166,rhinoceros,サイ
4167,rhyme,押韻詩、韻、詩歌
4168,rhythm,リズム
4169,rib,あばら骨
4170,rich,裕福な、豊富な（in）
4171,richness,豊富さ、肥沃であること、裕福であること
4172,rid,取り除く
4173,riddle,謎、不可解なもの［人］
4174,ridicule,あざ笑う
4175,ridiculous,ばかげた、法外な
4176,right,ふさわしい、正当な、正しい、右の
4177,righteous,正しい
4178,rightly,正当に、当然のことながら
4179,rigid,堅い、動かない、柔軟性のない、厳格な
4180,rigorous,厳しい
4181,ring,輪、指輪、音を鳴らす、電話をかける
4182,riot,暴動、騒動、暴動を起こす、浮かれ騒ぐ
4183,rip,引き裂く、裂ける
4184,ripe,熟した、期が熟した、円熟した
4185,ripen,成熟する
4186,rise,上昇、増加、上がる、起きる、出世する
4187,risk,危険(性)、危険にさらす、あえて～する
4188,risky,危険な
4189,rite,儀式
4190,ritual,儀式、日常の習慣的行為
4191,rival,競争相手、ライバル、匹敵する、互角に戦う
4192,rivalry,ライバル意識、競争
4193,road,道路
4194,roam,歩き回る、放浪
4195,roar,うなる、ほえる、どなる、大声で叫ぶ
4196,rob,～から…を奪う
4197,robbery,強盗(事件)
4198,robust,強力な、健全な、頑丈な
4199,role,役割、任務、（役者の）役
4200,roll,転がる、を転がす、を丸める
4201,romantic,空想的な、恋愛の、ロマン派の
4202,roof,屋根
4203,room,空間、場所、可能性、余地、余裕、部屋
4204,root,定着している、根付かせる、根拠、源
4205,rope,なわ、秘訣
4206,roster,名簿
4207,rot,腐る、堕落する、腐らせる、堕落させる、腐敗、悪化
4208,rotate,回転する、循環する、を回転させる
4209,rotten,腐った、不快な、堕落した
4210,rough,ざらざらした、大ざっぱな、おおまかな乱暴な
4211,roughly,おおよそ、乱暴に
4212,roundabout,遠回しの、婉曲な、回り道の
4213,route,道（筋）、路線、ルート、手段
4214,routine,決まり切った仕事、日課、いつもの手順
4215,routinely,いつものように、日常的に
4216,row,（横の）列、（船を）こぐ
4217,royal,王室の、王の、王立の、風格のある
4218,rub,こする、塗る
4219,rubber,(天然・合成の)ゴム
4220,rubbish,ごみ、つまらないもの
4221,rude,無礼な、粗野な
4222,ruin,破滅させる、台無しにする、破滅、廃墟、遺跡
4223,rule,規則、支配、支配する
4224,rumor,噂、風評
4225,run,走る、流れる、立候補する、運営する
4226,runway,滑走路
4227,rural,田舎の、田園の
4228,rush,急いで行く、せきたてる、忙しさ
4229,Russian,ロシア人〔語〕、ロシア（人、語）の
4230,rust,さび
4231,rusty,さびた
4232,ruthless,無慈悲な、断固とした、無茶な
4233,sacred,神聖な、宗教的な、厳粛な
4234,sacrifice,犠牲(的行為)、を犠牲にする
4235,sadness,悲しみ
4236,safari,サファリ
4237,sail,航行する、帆、航海
4238,saint,聖人、聖人のような人
4239,sake,〔for the sake ofで〕～のために、～に免じて
4240,salary,（月々の）給料
4241,sale,販売、（複数形で）売上高、特売
4242,salmon,サケ
4243,salute,敬礼する
4244,salvation,救済
4245,sample,サンプル、見本
4246,sanction,認める、許可する、認可、承認
4247,sanctuary,自然保護区
4248,sane,正気の、まともな、理にかなった
4249,sanitation,公衆衛生（学）、下水［衛生］設備
4250,satellite,衛星、人工衛星、衛星国家
4251,satisfaction,満足
4252,satisfy,満足させる、果たす、合致する、こたえる
4253,saturate,すっかりぬらす・満たす
4254,Saturn,土星
4255,savage,凶暴な、手厳しい、残酷(残忍)な人、不作法者
4256,save,救う、たくわえる、省く、節約する、保護する
4257,saving,節約、倹約、預金(額)、蓄え
4258,say,例えば
4259,scale,規模、段階、等級、縮尺、登る、はかる
4260,scam,詐欺、ぺてん
4261,scan,細かく調べる、ざっと見る、検査をする、綿密な検査
4262,scandal,スキャンダル、不正行為
4263,scant,乏しい、足りない
4264,scanty,不十分な
4265,scarce,乏しい、不十分な、少ない、不足した
4266,scarcely,ほとんど～ない
4267,scarcity,不足、欠乏
4268,scare,おびえさせる、脅す
4269,scatter,まき散らす分散する散布
4270,scenario,（予想される）筋書き、事態、脚本
4271,scene,場面、現場、眺め、光景、大騒ぎ
4272,scenery,景色、背景
4273,scenic,景色の良い
4274,scent,（快い）香り、手掛かり
4275,schedule,スケジュール、を予定する
4276,scheme,計画、悪だくみ、たくらむ
4277,scholar,"学者, 奨学生"
4278,scholarship,奨学金、学識
4279,scientific,科学的な、（自然）科学の
4280,scold,しかる
4281,scope,(活動などの)範囲、領域、機会
4282,score,（試合・試験の）得点、楽譜、得点する
4283,scorn,軽蔑、を軽蔑する、(軽蔑して)拒絶する
4284,scramble,[自] 急いで動く
4285,scrap,中止する、スクラップにする、切れ端
4286,scrape,(泥・ペンキ・さびなど)をこすり取る、の表面をこする
4287,scratch,ひっかく、はがし取る、線を引いて消す
4288,scream,(驚き・恐怖で)金切り声を出す、金切り声
4289,screaming,悲鳴をあげる
4290,script,文字〔体系〕、脚本、手書き、筆跡
4291,scrounge,あさり回る、くすねる、ねだる、せびる
4292,scrub,磨く
4293,scrutinize,～を綿密に調べる
4294,scrutiny,精査；監視
4295,sculpture,彫刻、彫刻作品、～を彫刻する、彫刻する
4296,scurvy,壊血病
4297,seabed,海底
4298,seal,密閉する、に封をする
4299,seamless,とぎれない、円滑な、継ぎ目のない
4300,search,探す、探求
4301,seasonal,季節の、季節的な
4302,seat,（be seated）座っている
4303,secluded,人里離れた
4304,second,二番目の、秒、(-s)おかわり
4305,secondhand,間接
4306,second-hand,間接の、また聞きの、中古の
4307,secret,秘密、秘訣、秘密の
4308,secretary,秘書、【米】長官、【英】大臣
4309,section,部分、区分、階級、（本などの）節
4310,sector,部門、分野、一部の集団
4311,secure,安全な、安心な、確保された、確保する
4312,security,安全、警備
4313,seed,種（種）をまく
4314,seek,捜し求める、～しようと努める
4315,seem,～のように思われる、見える
4316,seemingly,うわべは、見たところは
4317,segment,切片、部分、を分ける
4318,segregate,隔離する、分離〕する、隔離政策をとる
4319,seize,つかみ取る、差し押さえる、理解する、[受け身で]襲われる
4320,seldom,めったに～ない
4321,select,選ぶ、選り抜きの
4322,selective,選択的な
4323,self,自己
4324,self-esteem,自尊心
4325,selfish,利己的な
4326,sell,～を売る、売れる
4327,semester,(2学期制の)学期
4328,Senate,上院
4329,senator,上院議員
4330,senior,上位の、年上の、先輩の、年長者、最上級生
4331,sensation,大評判、物議、感覚
4332,sense,感覚、判断力、良識、正気、意識、意味
4333,sensible,賢明な、実用的な、顕著な
4334,sensitive,敏感な、神経質な、微妙な
4335,sensitivity,感じやすさ
4336,sensory,感覚の
4337,sentence,判決を宣言する、刑に処す、文、判決
4338,sentiment,感情、感想、感傷
4339,separate,分ける、離れた
4340,separation,分離
4341,sequel,続編、結果
4342,sequence,連続（するもの）、結果
4343,serene,穏やかな、平静な、(空が)澄みきった
4344,serial,連続した
4345,series,連続、シリーズもの
4346,serious,本気の、まじめな、重大な、深刻な
4347,sermon,（教会で行われる）説教
4348,servant,召使い
4349,serve,かなう、仕える、供給する、(食事など)を出す
4350,service,業務、奉仕、（バスなどの）便、公益事業
4351,session,集まり、（議会の）会期、（開会中の）議会
4352,set,設定する、置く、定める、ひとまとまり
4353,setback,(進歩・発展の)妨げ、支障
4354,setting,環境，状況；（小説，劇，機械などの）設定，舞台
4355,settle,落ち着く、定住する、を解決する、を決める
4356,settlement,開拓地、解決、合意
4357,settler,入植者、移民
4358,several,いくつかの、それぞれの、いろいろな
4359,severe,（人・規律・事態・天気などが）厳しい、猛烈な
4360,severely,ひどく、厳しく、激しく
4361,sew,縫う、ミシンをかける
4362,sewage,下水
4363,sewer,下水道
4364,sex,性(別)
4365,shabby,ぼろぼろの、みすぼらしい
4366,shade,陰、明暗・濃淡の度合い、わずかな違い
4367,shadow,影
4368,shake,揺れる、を揺り動かす
4369,shallow,浅い、浅薄な
4370,shame,恥、（a～）残念なこと
4371,shape,状態、（体）形
4372,share,共有する、分配する、分担する、割り当て、分け前
4373,shark,サメ
4374,sharp,利口な、聡明な、良く切れる、急激な
4375,sharply,急速に
4376,shatter,粉々に割る、打ち砕く、害する、粉々になる
4377,shed,(光など)を当てる、落とす、流す、小屋
4378,sheep,ヒツジ（複数形も同形）
4379,sheer,まったくの、険しい、まったく、垂直に
4380,sheet,１枚の紙、シーツ
4381,shelf,棚
4382,shell,（貝）殻
4383,shellfish,貝、甲殻類
4384,shelter,避難所、住まい、保護する、住まわせる
4385,shield,盾、防御物
4386,shift,変える、移る、変化、移動、交替（制）
4387,shine,磨く、照らす、輝く、光沢
4388,ship,を出荷する、を輸送する
4389,shipping,発送
4390,shipwreck,難破船
4391,shiver,(寒さなどで)身震いする
4392,shock,衝撃、に衝撃を与える
4393,shoot,撃つ
4394,shore,（海・湖・広い河川の）岸
4395,short,短い、不足して、背が低い、簡潔な
4396,shortage,不足
4397,shortcoming,欠点、短所
4398,shortfall,不足
4399,shorthand,簡潔な言い方、速記
4400,short-tempered,短気な
4401,shoulder,肩
4402,shout,大声で言う、叫ぶ、叫び
4403,shove,押す
4404,showdown,最後の対決
4405,shred,一片、断片
4406,shrewd,抜け目のない、（洞察などが）鋭い
4407,shriek,金切り声をあげる、甲高い声で言う、鋭い音
4408,shrine,神社、祭壇
4409,shrink,縮む、しりごみする、を縮める
4410,shrug,肩をすくめる
4411,shudder,身震いする、身震い、震え
4412,shun,避ける
4413,shuttered,シャッターの閉まった[付いた]
4414,shuttle,定期往復バス[列車、飛行機]
4415,shy,内気な、恥ずかしがりの
4416,sibling,きょうだい（の1人）
4417,sidewalk,歩道
4418,sigh,ため息(をつく)
4419,sight,光景、名所、見ること、視野、視力
4420,sign,署名する、合図する、記号、兆候、合図、標識
4421,signal,合図、信号（機）、に合図する
4422,signature,署名、特徴
4423,significance,意義、重要性
4424,significant,重要な、重大な、意義深い
4425,significantly,著しく、意味ありげに
4426,signify,を意味する；重要である
4427,silence,沈黙、静けさ
4428,silly,愚かな、バカバカしい
4429,similar,似ている、類似した、同様の
4430,simmer,(煮立たない程度に)こことこ煮える[≒boil gently]
4431,simple,単純な、質素な
4432,simplify,を簡単にする
4433,simply,ただ単に、簡単に、まったく、非常に
4434,simulate,模擬実験する、装う、まねる
4435,simultaneous,"同時の, 同時に起こる"
4436,simultaneously,同時に、一斉に
4437,sin,(道徳・宗教上の)罪
4438,sincere,正直な、心からの、偽りのない、誠実な、真剣な
4439,sincerity,誠実
4440,single,ただ１つの、個々の、独身の、１人用の
4441,singular,非凡な、まれにみる、単数の、別々の
4442,sinister,邪悪な、不吉な
4443,sink,沈む、崩れ落ちる、沈める
4444,sinking,沈む
4445,sip,一口飲む
4446,site,用地、場所、跡地、ウェブサイト
4447,situation,位置、立場、状態、きわどい場面
4448,sizzle,ジュージューと音を立てる
4449,skeleton,骨格、骨組み、概略
4450,skeptical,懐疑的な
4451,sketch,概要を述べる、スケッチする、概略
4452,skill,技能、技術
4453,skillful,熟練した、巧みな
4454,skin,皮膚、皮
4455,skip,跳ねまわる、軽く跳び越える、省く、省略
4456,skull,頭骨、頭蓋骨、頭脳
4457,skyscraper,超高層ビル
4458,slack,たるんだ、(商売などが)不活発な
4459,slam,バタンと閉める、酷評する
4460,slang,俗語
4461,slant,傾く
4462,slap,ぴしゃりとたたく、ぴしゃりと打つこと[音]、非難
4463,slaughter,虐殺する、虐殺
4464,slave,奴隷、とらわれている人
4465,slavery,奴隷制度、苦役
4466,slender,ほっそりした、わずかな
4467,slide,すべる[すべらせる]（こと）
4468,slight,わずかな、ほっそりした、取るに足らない
4469,slightly,わずかに
4470,slip,滑る、滑り落ちる、そっと動く
4471,slog,つらい仕事、強行軍；苦労して進む
4472,slope,坂、勾配
4473,slow,遅い、遅れている、遅くする
4474,sluggish,停滞した
4475,slump,前かがみになる、どすんと落ちる、衰える、不調
4476,sly,ずる賢い
4477,smart,頭が良い、身なりがきちんとした
4478,smash,粉々にする、激しくぶつかる
4479,smell,においをかぐ、においがする、におい
4480,smoke,煙、タバコを吸う
4481,smooth,なめらかな、順調な、なめらかにする
4482,smoothly,順調に、滑らかに
4483,smuggle,[他] ～を密輸する
4484,smuggler,密輸業者
4485,snap,パチンと鳴らす、ポキッと折る[折れる]
4486,snatch,ひったくる
4487,sneak,こっそり動く
4488,sneer,冷笑する
4489,sneeze,くしゃみをする
4490,sniff,くんくん嗅ぐ
4491,snore,いびきをかく
4492,soak,浸す、染み込む、吸収する
4493,soar,急上昇する、舞い上がる
4494,soaring,急上昇する
4495,sob,むせび泣く、すすり泣き
4496,sober,酔っていない、節度のある、真面目な
4497,so-called,いわゆる、世間でいう
4498,social,社交的な、社会の、社会的な
4499,socialism,社会主義
4500,socialize,社会に適合させる、付き合う
4501,society,社会、協会、団体
4502,socioeconomic,社会経済的な
4503,sociology,社会学
4504,sodium,ナトリウム、ソジウム
4505,soften,和らげる、柔らかくする、柔らかくなる
4506,software,ソフトウェア
4507,soil,土地、土壌
4508,solar,太陽の、太陽光線を利用した
4509,soldier,(陸軍の)軍人、兵士
4510,sole,唯一の、単独の、独占的な
4511,solemn,厳粛な、まじめな
4512,solid,固体、固体の、固い、しっかりした
4513,solitary,孤独な、ひとりだけの、唯一の
4514,solitude,ひとりでいること、孤独
4515,solstice,至、至点
4516,solve,解決する、解答する
4517,somebody,誰か、名のある人
4518,somehow,なんとかして、どういうわけか
4519,somewhat,いくぶん、多少
4520,somewhere,どこかで[へ]、およそ、ある場所
4521,sonar,音波探知機
4522,songbird,鳴き鳥
4523,soothe,なだめる、（苦痛を）和らげる
4524,sophisticated,洗練された、精巧な
4525,sophomore,(高校・大学の)二年生
4526,sore,痛い、悲しんだ、怒った
4527,sorrow,深い悲しみ
4528,sorrowful,悲観に暮れている、悲しい
4529,sort,分類する、えり分ける
4530,soul,魂、精神、人、情熱、本質的なもの
4531,sound,～に聞こえる、健全な、ぐっすりと、無事に
4532,sour,すっぱい、不愉快な、気むずかしい
4533,source,源、根源、出所、情報源
4534,south,南（の）
4535,souvenir,記念品、おみやげ
4536,sovereign,主権を有する、独立した、君主
4537,sow,（種）をまく
4538,soybean,大豆
4539,space,空間、場所、宇宙
4540,spacecraft,宇宙船
4541,spacious,広々とした、雄大な
4542,span,（時間の）長さ、期間
4543,spare,余分の、予備、（時間など）を割く、省く、惜しむ
4544,spark,火花、ひらめき、を引き起こす、火花を出す、輝く
4545,sparkle,火花を出す、輝く、火花、輝き
4546,sparrow,スズメ
4547,spatial,空間の、空間的な
4548,specialist,専門家
4549,specialize,専門とする、専攻する
4550,species,種（類）
4551,specific,特定の、明確な、具体的な、特有の
4552,specify,特定する
4553,specimen,標本、実例
4554,spectacle,壮観、見もの、惨状、(～s)眼鏡
4555,spectacular,壮観な、見ごたえのある
4556,spectator,（試合などの）観客
4557,spectrum,(変動する)範囲
4558,speculate,推測する、熟考する、投機をする
4559,speculation,推測、思索、投機
4560,spell,期間、短い時間、呪文、魔法
4561,spelling,つづり、語を正しくつづること[能力]
4562,spend,（時間）を費やす、（お金）を使う
4563,sperm,精子
4564,sphere,領域、球
4565,spill,こぼす
4566,spin,回転する、を回転させる、（糸）を紡ぐ
4567,spinal,脊椎の
4568,spine,背骨、脊柱
4569,spirit,霊、魂、精神、気分、気力
4570,spiritual,精神の）、霊的な
4571,spiteful,悪意のある
4572,spleen,脾臓
4573,splendid,すばらしい、豪華な
4574,splinter,とげ、破片
4575,split,分ける、分裂する、分裂、裂け目
4576,spoil,台無しにする、甘やかしてダメにする、戦利品
4577,sponsor,に資金を提供する、を後援する
4578,spontaneous,自発的な、任意の、無意識の、本能的な
4579,spot,点、場所、を見つける
4580,spotless,非の打ち所がない
4581,spouse,配偶者
4582,sprain,(足首・手首など)をくじく、を捻挫する
4583,sprawl,不規則に広がる、だらしなく手足を伸ばす
4584,spray,吹きかける、吹きつける
4585,spread,広げる、塗る、広がる、広がり、普及
4586,spring,泉、春、バネ
4587,sprout,発芽する
4588,spur,拍車をかける、駆り立てる
4589,square,正方形、四角（い広場）、正方形（四角）の
4590,squeeze,詰め込む、絞り出す、押し入る、席を詰める
4591,squid,イカ
4592,stability,安定、安定性
4593,stable,安定した、動じない
4594,stack,積み重ね、堆積、積む、積み重ねる
4595,staff,杖、棒、（集合的に）社員、職員、スタッフ
4596,stage,（発達の）段階、舞台
4597,stagger,ずらす、よろけさせる、動揺させる、よろける、よろめき
4598,stain,染料、しみ、きず
4599,stair,階段、(階段の)一段
4600,stake,利害関係、〔通例～s〕賭け金、杭
4601,stale,(食物などが)新鮮でない、(表現などが)陳腐な
4602,stalk,にこっそり近付く、の後をそっとつける、忍び寄る
4603,stall,露店、エンスト、失速
4604,stamina,スタミナ、持久力
4605,stance,立場、対処の姿勢
4606,standard,標準の、標準、基準
4607,standby,(いざというとき)頼りになるもの(人)、交替要因
4608,standpoint,観点、見地、立場
4609,standstill,停止、足踏み状態
4610,staple,主要な、主要産物〔商品〕
4611,stare,じっと見る(こと)
4612,startle,びっくりさせる
4613,starve,飢える、（～を）渇望する、を飢えさせる
4614,state,状態、国家、州、を述べる
4615,statement,声明、主張、明細書
4616,statesman,政治家
4617,static,活気のない、静的な、静電気の、雑音
4618,stationary,静止した
4619,statistic,統計
4620,statistics,統計（の数字）、統計学
4621,statue,像
4622,status,地位、身分、状況、高い社会的地位
4623,steady,しっかりした、固定した、変わらない、落ち着いた
4624,steal,（物）（こっそり）を盗む、（副詞句を伴って）そっと行く
4625,steam,蒸気
4626,steel,鋼鉄壁
4627,steep,（坂などが）急な、険しい、（値段が）法外
4628,steer,操縦する、進む、を運転する、を(ある方向に)向ける
4629,stem,生じる、由来する（from）、（草木の）茎（幹）
4630,step,一歩、足音、《～s》階段
4631,stereotype,固定観念、型にはまった人[物]、～を型にはめる
4632,sterile,殺菌した、不毛の、無益な
4633,stern,厳格な、いかめしい、断固とした
4634,stick,固執する、くっつく、刺さる、行き詰まる、棒きれ
4635,sticky,ねばねばの、粘着性の
4636,stiff,堅い、こわばった、断固とした、法外な
4637,stifle,抑える、押し殺す、止める、窒息死する、息が詰まる
4638,stigma,汚名
4639,still,じっとしている、静かな、まだ、それでも
4640,stimulate,刺激する、活気づける
4641,sting,刺す、刺すこと、痛み
4642,stingy,けちな、出し惜しみする、量がわずかな、少ない
4643,stir,かき混ぜる、奮起させる、駆り立てる、動く
4644,stock,株式、蓄え、在庫（品）、を貯蔵している
4645,stoically,冷静に
4646,stomach,胃、腹（部）
4647,stomachache,腹痛
4648,stopover,短期滞在（地）
4649,storage,保管、貯蔵(法)、収容力
4650,store,店、蓄える
4651,storm,嵐、荒天
4652,story,物語、～階建て
4653,stout,頑丈な
4654,straightforward,率直な、わかりやすい、まっすぐに
4655,strain,痛める、酷使する張り、緊張、ストレス
4656,strand,立ち往生させる
4657,stranger,知らない人、未経験者、不慣れな人
4658,strangle,(発展・活動など)を抑圧する、を窒息させる
4659,strategy,戦略、方策
4660,stray,横道へそれる、脱線する、道に迷った、はぐれた
4661,stream,小川、流れ
4662,streamline,[他] （作業・組織など）～を合理化する
4663,strength,強さ
4664,strengthen,を(より)強くする
4665,strenuous,激しい
4666,stress,強調する、ストレス、緊張、圧力、強調、重点
4667,stretch,伸ばす、及ぶ、伸びる、広がり、伸ばすこと
4668,strict,厳格な、厳密な、全くの、完全な
4669,strictly,厳格に、厳しく
4670,stride,大また、ひとまたぎ、大またに歩く、を大またで歩く
4671,strife,不和、口論
4672,strike,(考えなどが)心に浮かぶ、ぶつかる、打撃
4673,striking,いちじるしい
4674,string,ひと続き、ひも、糸
4675,strip,～から…をはぎ取る、裸にする、 衣服を脱ぐ
4676,strive,努力する、戦う
4677,stroke,脳卒中、打つこと、一撃
4678,stroll,ぶらぶら歩く、さまよう、をぶらつく、散歩
4679,structure,建物、構造、構成、組織、体系
4680,struggle,苦闘する、努力する、奮闘、努力
4681,stubborn,頑固な、強情な、手に負えない
4682,studio,スタジオ、放送室
4683,stuff,詰め込む材料、題材
4684,stumble,よろけながら歩く、つまずく
4685,stun,気絶させる、びっくり仰天させるを茫然とさせる
4686,stunned,あぜんとした
4687,stunt,妨げる
4688,stupid,愚かな、ばかな、ばかげた
4689,sturdy,頑丈な、たくましい、不屈の
4690,style,形式、型、文体
4691,subdue,征服する、おさえる、弱める
4692,subject,主題、国民、被験者、支配下にある、受けやすい
4693,subjection,服従 主観的
4694,subjective,主観的な
4695,sublime,荘厳な、崇高な
4696,submerge,水に浸す、潜水する
4697,submission,服従、提出
4698,submit,提出する、〔submit oneself〕服従する
4699,subordinate,従属している、下位の、二次的な、下位のもの
4700,subscribe,同意する、署名する、予約［定期］購読する
4701,subscriber,加入者
4702,subscription,予約購読(料)、寄付(金)
4703,subsequent,続いて起こる
4704,subsequently,その後、続いて
4705,subsidize,に補助金[助成金]を支給する
4706,subsidy,補助金、報奨金
4707,subsistence,生存、生計
4708,substance,物質、薬物、本質、中身、要旨、骨子
4709,substantial,相当な、多大な
4710,substitute,"代用する、代用品, 代理人"
4711,subtle,微妙な、かすかな、巧妙な、鋭敏な
4712,subtly,微妙に、かすかに、鋭敏に、ずるく
4713,subtract,減じる、引く
4714,suburb,郊外、周辺、付近
4715,subway,地下鉄壁[米]、地下道[英]
4716,subzero,氷点下の
4717,succeed,成功する、継承する
4718,success,成功
4719,successor,後任、後継者、取って代わるもの、次のもの
4720,suck,吸う、しゃぶる、吸い込む
4721,sudden,突然の
4722,sue,告訴する、訴訟を起こす
4723,suffer,苦しむ、害を受ける
4724,sufferer,苦しむ人、被災者、病人
4725,sufficiency,十分なこと、十分な状態
4726,sufficient,十分な
4727,suffocate,～を窒息させる
4728,suggest,提案する、示唆する
4729,suggestive,暗示的な、連想させる
4730,suicide,自殺、自殺的行為
4731,suit,適する、似合う、適合させる
4732,suitable,適切な
4733,suite,スイートルーム
4734,sulfur,硫黄
4735,sum,合計、金額、要点、要約する
4736,summit,頂上、頂点、首脳会議、首脳
4737,summon,呼び出す、召喚する、命じる、奮い起こす
4738,superb,壮麗な、すばらしい
4739,superficial,表面的な、浅はかな、皮相的な、浅い
4740,superior,よりすぐれた
4741,superiority,優越
4742,supernatural,超自然の
4743,superstition,迷信、偶像礼拝
4744,superstitious,迷信深い、迷信の
4745,supervise,監督〔管理〕する、監視する
4746,supervisor,監督者、指導教員
4747,supplement,補う、補うもの、栄養補助食品
4748,supplementary,補足の、追加の
4749,supply,供給（量）、必需品、を供給する
4750,support,支える、支持する、扶養する、裏付ける
4751,suppose,～だと思う、～だと推測する、もし～だとしたら
4752,supposedly,たぶん、おそらく
4753,suppress,抑える、鎮める、（笑いなど）を我慢する
4754,supreme,最高の、この上ない、究極の
4755,surcharge,追加料金
4756,surf,サーフィンする、（ネット上の情報など）を見て回る
4757,surface,表面、外観
4758,surge,殺到する、こみ上げる、急騰する
4759,surgeon,外科医、軍医
4760,surgery,（外科）手術、外科、外科医学
4761,surpass,超える、勝る、脅威を与える、脅迫する
4762,surplus,余り、余分の、さらなる、さらに進む
4763,surprise,驚き、驚かせること（もの）、を驚かせる
4764,surrender,放棄する、引き渡す、屈する
4765,surround,取り囲む、取り巻く
4766,surrounding,周囲の状況、環境
4767,surveillance,監視、見張り
4768,survey,調査、概観、を調査する、を概説する
4769,survival,生き残ること
4770,survive,生き延びる、切り抜ける、より長生きする
4771,susceptible,影響を受けやすい、感染しやすい
4772,suspect,疑う、～だと思う、容疑をかける
4773,suspend,つるす、一時的に中止する、停職（学）にする、保留する
4774,suspicious,疑わしい
4775,sustain,支える、維持する、耐える、被る
4776,sustainable,持続できる、維持できる
4777,swallow,飲み込む、飲み込むこと、ツバメ
4778,swamp,水浸しにする、に押し寄せる、沼(地)
4779,swap,交換する
4780,swarm,大群
4781,sway,揺れる、傾く、揺り動かす
4782,swear,ののしる、誓う
4783,sweat,汗をかく、汗
4784,sweatshop,搾取工場
4785,sweep,一掃(する)、掃除（する）、殺到する
4786,swell,ふくらむ、腫れる、（数量が）増加する
4787,swerve,急に向きを変える
4788,swift,迅速な、即座の
4789,swing,揺らす、振る、揺れる、（行動に）さっと移る
4790,switch,（仕事・考えなどを）変える、スイッチ、変化
4791,sword,剣、刀、武力、権力、戦争
4792,syllabus,講義一覧表、(講義などの)綱要
4793,symbol,象徴、シンボル、記号、標章
4794,symmetry,（左右）対称、調和
4795,sympathize,同情する
4796,sympathy,同情、共感
4797,symptom,症状、兆候
4798,synchronize,同一時刻にする
4799,syndrome,症候群、行動様式
4800,synonym,類義語、同義語、類義表現
4801,synthesis,合成、総合
4802,synthesize,総合する、合成する、合成して作り出す
4803,synthetic,合成の
4804,system,装置、制度、組織、体系、方法、学説
4805,tablet,タブレット（型情報端末）、錠剤、平板
4806,tackle,〔問題などに〕取り組む
4807,tactical,戦術の
4808,tactics,作戦、方策、戦術、戦法
4809,tag,ついて行く；に付け札をつける；付け札、タグ
4810,tail,しっぽ、後部
4811,tailor,を合わせて作る
4812,taint,汚す
4813,tale,話、うそ
4814,talent,才能、素質、才能のある人
4815,talkative,話好きの、おしゃべりな
4816,tame,飼いならす、柔順な
4817,tan,小麦色、日焼けした色、日焼けさせる
4818,tangible,触れることができる、明白な、具体的な
4819,tap,軽くたたく、（液体）を出す、盗聴する
4820,target,標的、達成目標、ねらう
4821,tariff,関税、運賃、料金表
4822,task,仕事、作業、課題
4823,taste,味、好み、～な味がする、味を見る
4824,tax,税（金）
4825,tear,裂く、引きはがす
4826,tease,からかう、いじめる、じらす
4827,technical,専門の、技術的な
4828,technically,厳密に(言えば)、専門[技術]的に
4829,technique,技術、技法、手法、コツ
4830,technology,科学技術、科学的方法
4831,tedious,うんざりする〔させる〕
4832,teenager,10代の若者
4833,telescope,望遠鏡
4834,temper,気質、気分、かんしゃく、平静な気分、落ち着き
4835,temperament,気質、気性
4836,temperate,穏やかな、節度のある
4837,temperature,温度、体温
4838,temple,寺院、神殿
4839,temporal,時間の、現世の、つかの間の
4840,temporary,一時的な
4841,tempt,誘惑する、～を…する気にさせる、怒らせる
4842,tempting,魅力的な
4843,tenant,賃借人
4844,tend,～する傾向がある（to do）
4845,tender,優しい、同情的な、柔らかい、きゃしゃな
4846,tense,緊張した、硬直した
4847,tension,緊張、不安、緊迫状態、張りの度合い
4848,tentative,仮の，試験的な
4849,term,期間、専門用語、条件、関係
4850,terminal,終点、最終の
4851,terminate,終わらせる、終わる
4852,termite,シロアリ
4853,terrain,地形、地勢
4854,terrible,ひどい、恐ろしい
4855,terrific,すばらしい、ものすごい
4856,terrify,怖がらせる、脅かす
4857,territory,領土、領域
4858,terror,恐怖
4859,terrorism,テロ行為、恐怖政治、恐怖状態
4860,test,テスト、判断基準
4861,testament,あかし、証拠
4862,testify,証言する
4863,testimony,証拠、証明、証言
4864,text,文章、メール、メールを送る
4865,textile,織物、繊維（産業）
4866,texture,感触、手触り、本質、質感
4867,thaw,解凍される、溶ける
4868,theater,劇場、映画館
4869,theft,窃盗（罪）
4870,theme,主題、テーマ、作文（の題）、主題歌
4871,theology,神学、神学体系、教義
4872,theory,学説、理論、原理、推測
4873,therapeutic,治療的な、（心身の）健康によい
4874,therapy,治療、療法
4875,thereby,それによって、それに関して
4876,therefore,したがって
4877,thermal,熱の、熱による、保温用の
4878,thermometer,温度計、体温計
4879,thermostat,自動温度調節装置、サーモスタット
4880,thesis,論文、主題
4881,thick,厚い、太い、濃い
4882,thief,泥棒
4883,thigh,大股
4884,thin,薄い、細い、やせた
4885,thirst,渇き、渇望
4886,thirsty,のどの渇いた、渇望する
4887,thorn,とげ、針
4888,thorough,徹底的な、完全な、全くの、几帳面な
4889,thoroughly,徹底的に
4890,thought,考え、思いつき、思想、思いやり
4891,thoughtful,思いやりのある、思慮〔注意〕深い
4892,thread,糸を通す、糸、筋、脈絡、縫うように進む
4893,threat,脅迫、脅かすもの、悪いきざし
4894,threaten,脅迫する
4895,threshold,出発点、発端、戸口、敷居
4896,thrifty,質素な、やりくりのうまい、繁盛して
4897,thrill,ぞくぞくする[させる]、ぞくぞく[わくわく]すること
4898,thrilled,とてもうれしい
4899,thrive,栄える、うまくやっている、成長する
4900,throne,王位、王権
4901,through,～にもかかわらず、（通例文尾で）でも
4902,throughout,通して、至る所に
4903,throw,～を投げる、催す、捨てる（away/out）
4904,thrust,ぐっと押す、押し付ける、強いる、突く、突き出る
4905,thumb,親指
4906,thus,したがって、だから、このように、次のように
4907,tick,にチェックの印をつける；カチカチと鳴る
4908,tickle,くすぐる
4909,tide,潮（の干満）、潮流、上げ潮
4910,tidy,きちんとした、満足な、なかなかよい
4911,tie,ネクタイ、結び目、同点、つながり
4912,tight,きつい、ぎっしり詰まった、ケチな、厄介な、厳格な、堅く
4913,tighten,を固く締める、を強化する
4914,timber,【英】木材
4915,time,時間、回数、倍、（―s）情勢，時代
4916,timetable,（乗物の）時刻表
4917,timid,臆病な、内気な
4918,tiny,とても小さい、ごくわずかの
4919,tip,先（端）、チップ、秘訣
4920,tiresome,退屈な、骨の折れる、厄介な
4921,tissue,組織、ティッシュペーパー
4922,title,肩書、タイトル、作品
4923,tobacco,（刻み）タバコ
4924,toddler,幼児
4925,toe,足の指、つま先
4926,toil,骨を折って働く、苦労して進む
4927,token,しるし、代用硬貨、商品券
4928,tolerable,許容できる、我慢できる
4929,tolerant,寛容な、包容力のある
4930,tolerate,耐える、抵抗力がある、黙認する、許す
4931,toll,損害（の程度）、死傷者数、通行料
4932,toll-free,（通行料・通話料が）無料の
4933,tomb,墓石、墓
4934,ton,(重量単位)トン、大量
4935,tone,音色、音調、調子、色合い、～の調子を変える
4936,tongue,言語、言葉、舌、話しぶり
4937,tool,道具、工具、商売道具、手段
4938,tooth,歯
4939,top,（通例the）頂上、最高位
4940,topic,話題、トピック、主題
4941,topple,を倒す、ぐらつく、ぐらついて倒れる
4942,torch,たいまつ
4943,torment,ひどく苦しめる、ねじ曲げる
4944,tornado,竜巻
4945,torture,拷問、苦痛、拷問にかける、ひどく苦しめる、曲解する
4946,total,まったくの、統計の、合計
4947,touchy,厄介な、敏感な
4948,tough,かたい、丈夫な、難しい、困難な、不幸な
4949,tour,（観光）旅行（見学）（をする）
4950,tourism,観光
4951,tout,しつこく勧める（勧誘する）
4952,toward,の方へ
4953,toxic,有毒な、中毒性の
4954,trace,跡、追跡する、見つけ出す
4955,track,追う、通った跡、走路、線路、小道
4956,tracker,追跡者（機器）
4957,tract,〔器官の〕管、道、大きな広がり
4958,trade,貿易、職業、商売、売買する、交換する
4959,tradition,伝統、慣習、伝説
4960,traffic,交通、通行、交通［輸送］量、取引
4961,trafficking,不正取引、密売
4962,tragedy,悲劇（的な事態）
4963,tragic,悲惨な、悲劇的な
4964,trail,追跡する、引きずる、跡、小道
4965,trait,（性格・習慣などの）特色
4966,traitor,裏切り者
4967,trance,催眠状態
4968,tranquil,穏やかな
4969,tranquility,平穏、静寂
4970,tranquilizer,精神安定剤
4971,transact,商取引を行う、処理する
4972,transaction,（業務の）処理、取引、議事録
4973,transcend,超越する、を超越する、をしのぐ
4974,transcription,書写 文字起こし
4975,transfer,移動(する)、譲渡(する)、移転(する)、乗り換え(る)
4976,transform,変形させる、一変させる
4977,transient,一時的な、束の間の、浮浪者、短期滞在客
4978,transition,推移、移り変わり、過渡期、変わり目
4979,transitional,移り変わる、移行の、過渡的な
4980,translate,翻訳する、解釈する、)移す
4981,translation,翻訳(書)、移行
4982,translucent,半透明の
4983,transmit,送る、伝える、伝染させる
4984,transmogrify,を一変させる
4985,transparent,透明な、見え透いた、明白な、わかりやすい、率直な
4986,transplant,移動させる、移植する、移植（手術）
4987,transport,輸送する、（be～ed)夢中になる、いっぱいになる
4988,transportation,交通機関、輸送
4989,trap,わな、策略、罠で捕らえる、だます、閉じ込める
4990,trash,ゴミ
4991,traumatic,トラウマになる、ショッキングな
4992,travel,旅行する、進む、（光・音などが）伝わる、旅行
4993,treacherous,不誠実な、裏切りの、当てにならない
4994,treasure,大事にする、宝物、貴重品
4995,treat,処理する、治療する、おごる、おごり、もてなし
4996,treaty,（国家間の）条約、協定
4997,tremble,震える、感動する、を動かす、震える、振動する
4998,tremendous,（数量・程度・強さなどが）ものすごい、素晴らしい
4999,trend,傾向、流行
5000,trespass,(不法)侵入する、侵害する
5001,trial,試み、（品質・性能などの）試験、裁判、試用期間
5002,triangle,三角形
5003,tribal,種族の、部族の
5004,tribe,部族、仲間
5005,trick,だます、計略、いたずら、秘訣、芸
5006,tricky,扱いにくい、こつのいる、ずるい、狡猾な
5007,trifle,ささいな事、くだらない物、少量
5008,trigger,誘発する、（銃の）引き金、誘因
5009,trim,切り取る
5010,triple,３倍になる、を３倍にする
5011,triumph,勝利、大勝利、勝利を得る、勝利を喜ぶ
5012,trivial,ささいな、取るに足りない、ありふれた
5013,troop,軍隊、兵士たち、一団、群れをなして進む
5014,tropic,熱帯地方、回帰線
5015,tropical,熱帯の、熱烈な
5016,trouble,困ること、問題（点）、骨折り、悩ませる、迷惑をかける
5017,trunk,(木の)幹、（自動車の）トランク
5018,trust,信頼、（財産などの）委託、を信頼する
5019,trustworthy,信頼〔信用〕できる、頼りになる、当てになる
5020,truth,真実、事実、真理、誠実
5021,tube,管、[英]地下鉄
5022,tuition,授業料、個人指導
5023,tumble,転ぶ、暴落する、倒す、ひっくり返す、転落、暴落
5024,tumor,腫瘍、はれ
5025,tumor/tumour,腫瘍、腫れ物
5026,tuna,マグロ
5027,tune,メロディ、曲、適応させる、合っている
5028,turmoil,混乱
5029,turn,変わる（える）、回転する（させる）、曲がる（げる）、順番
5030,turtle,カメ、ウミガメ
5031,tutor,家庭教師、個人電話、 個人的に教える
5032,tweet,つぶやく
5033,twin,双子の一方、対をなす
5034,twist,より合わせる、曲げる、ねじれ
5035,type,タイプ、型
5036,typical,典型的な、特有の
5037,typically,通常、概して、典型的に
5038,typify,の典型となる
5039,tyranny,暴政、暴虐、制圧、専制〔独裁〕政治
5040,tyrant,暴君、専制君主
5041,ubiquitous,至る所に存在する、どこにでも現れる
5042,ugly,醜い、不快な、けしからぬ
5043,ultimate,究極（的）の、最終（的）の、最高の
5044,ultimately,最終的に
5045,ultraviolet,紫外線、紫外線の
5046,unanimous,全員一致の、同意見の
5047,unanimously,満場一致で
5048,unauthorized,権限のない、(公的に)認可されていない
5049,unaware,気づかないで、知らないで
5050,uncertain,はっきり分からない、(人が)確信がない
5051,unchanged,変化していない、元のままの
5052,unconditional,無条件の、絶対的な
5053,uncover,暴く、発掘する
5054,underestimate,過小評価する、軽く見る、少なく見積もる
5055,underfed,栄養失調の
5056,undergo,経験する、受ける
5057,undergraduate,大学生
5058,underground,地下の（に、で）、地下（鉄壁）
5059,underlie,背後にある、基礎となる、下にある
5060,underlying,根本的な
5061,undermine,害する、傷つける、侵食する、下を掘る
5062,underrate,～を過小評価する
5063,underscore,に下線を引く、を強調する
5064,understandable,もっともな、当然の、理解できる、わかる
5065,understate,を控えめに言う
5066,undertake,引き受ける、保証する、に着手する
5067,undo,はずす、ほどく、元通りにする、帳消しにする、破滅させる
5068,undone,元に戻る
5069,undoubtedly,確かに、(文修飾)明らかに
5070,unearth,（偶然）～を見つける、～を発掘する
5071,unease,不安、心配
5072,uneasy,不安な、落ち着かない、ぎこちない
5073,unemployment,失業（状態）、失業率
5074,unequal,(権利などが)不平等な
5075,uneven,でこぼこな、平でない
5076,unexpected,思いがけない、不意の
5077,unfairly,不当に、不公平に
5078,unfamiliar,不慣れな、よく知られていない
5079,unfold,開く、明らかにする、開く、明らかになる
5080,unfortunately,残念なことに、不幸にも
5081,uniform,同一の、均等の、制服
5082,unify,統合［統一］する、統一される
5083,union,労働組合、結合、団結、一致、連邦
5084,unique,唯一の、特有の、類のない
5085,uniquely,比類なく、独特に
5086,unit,1個、1人、（構成などの）単位
5087,unite,結合する、団結させる、まとめる
5088,unity,結束、統合、単一（性）、一貫性
5089,universal,普遍的な、全員の、万能の、宇宙の、世界中の
5090,universe,宇宙
5091,university,（総合）大学
5092,unknown,不明の、（～に）知られていない（to）、無名の
5093,unleash,（抑えていたもの）を爆発させる
5094,unless,…でない限り
5095,unlike,と異なって、異なった
5096,unorthodox,型破りの
5097,unperturbed,心を乱されない、落ち着いた
5098,unpleasant,不愉快な、不親切な、無礼な
5099,unpopular,人気がない、不評の、はやらない
5100,unprecedented,前例のない、空前の
5101,unpredictable,変わりやすい、予測できない
5102,unproductive,非生産的な、良い結果を生まない
5103,unravel,解明する
5104,unrelated,無関係の、血縁関係がない
5105,unrest,(社会的な)混乱、不安、(心の)動揺
5106,unsafe,安全でない、危険な
5107,unsound,不健康な
5108,until,①～まで（ずっと)[接] ②～まで（ずっと）
5109,unusual,普通でない
5110,unveil,のベール(おおい)を取る、を明らかにする
5111,unwarranted,不当な、保証されていない、公認されていない
5112,unwittingly,知らずに、うっかり
5113,upbringing,(子供の)養育、しつけ
5114,upcoming,今度の、近づく、やってくる
5115,update,最新のものにする、アップデートする
5116,upgrade,改良する
5117,upheaval,大変、激変
5118,uphold,を支持する、を確認する、を維持する
5119,uplifting,高揚させる
5120,upper,上部の、上級の
5121,upright,まっすぐな、直立した、まっすぐに、直立して
5122,uproar,大騒ぎ、騒動
5123,uproot,根こそぎ引き抜く、根絶する
5124,upscale,高所得者層
5125,upset,あわてさせる、ひっくり返す、腹を立てて
5126,upside,良い面
5127,uptight,神経質な
5128,up-to-date,現代的な、最新の
5129,upturn,好転、上昇
5130,upward,上に向かって、上方への
5131,Uranus,天王星
5132,urban,都市の、都会的な
5133,urge,駆り立てる、～に…するよう説得する、推進する、衝動
5134,urgency,緊急、切迫
5135,urgent,緊急の
5136,usage,用法、語法、習慣
5137,used,中古の、（to do）以前は～した；（be - to）に慣れている
5138,useless,役に立たない、無駄な、劣っている
5139,usually,たいてい
5140,utensil,（特に台所の）用具、（一般に）道具
5141,utility,公共事業、公共料金、実用性
5142,utilize,利用する
5143,utmost,最高の、最大の、最大限
5144,utter,(言葉など)を発する、表現する、全くの、徹底的な
5145,utterance,発言
5146,utterly,まったく
5147,vacant,空いている、からの、うつろな
5148,vacation,休暇
5149,vaccine,ワクチン
5150,vacuum,真空状態、空虚、電気掃除機、掃除機をかける
5151,vague,あいまいな、ぼんやりとした
5152,vain,無駄な、骨折り損の、価値のない、うぬぼれの強い
5153,valence,原子価
5154,valid,妥当な、正当な、有効な、合法的な、効力がある
5155,validate,を立証（実証）する、を認可（公認）する
5156,validity,妥当性
5157,valley,谷（間）、流域
5158,value,（複数）価値観、価値、重要性、評価する
5159,vandalism,破壊、損傷
5160,vandalize,破壊する
5161,vanish,消える、消滅する、薄れる
5162,vapor,蒸気、実体のないもの
5163,variability,変わりやすいこと、変異性
5164,variable,変わりやすい
5165,variation,変異、変化、差異
5166,various,さまざまな、いくつかの
5167,vary,さまざまである、変わる、変える
5168,vast,膨大な、広大な
5169,vault,金庫室 とびこえる
5170,vegetation,植物、植生
5171,vehicle,乗り物； 伝達手段、媒体、原動力
5172,vein,血管、静脈、特質
5173,velocity,速度
5174,vend,売る、を売る
5175,vending,販売
5176,vending machine,自動販売機
5177,vendor,物売り、行商人、自動販売機
5178,venture,冒険（的事業）、思い切って～する
5179,venue,会場、開催地
5180,Venus,金星
5181,verb,動詞
5182,verbal,言葉の、口頭での、逐語的な
5183,verdict,評決、決定、意見
5184,verge,瀬戸際、端
5185,verify,正しいことを証明する、確かめる
5186,verse,韻文、詩（の一行）、聖書の一節
5187,version,～版、型、翻訳、説明、報告、表現、解釈
5188,versus,対～、～に対して
5189,vertebrate,"脊椎動物, 脊椎動物の"
5190,vertical,垂直の、縦方向の
5191,vessel,船舶、容器、（体液が通る）脈管
5192,veterinarian,獣医
5193,via,経由して、によって
5194,viable,（計画などが）実行可能な
5195,vibrant,活気に満ちた
5196,vice,悪、欠点
5197,vicinity,近所
5198,vicious,残忍な、乱暴な、悪意のある、意地の悪い
5199,victim,犠牲者、被害者、えじき、いけにえ
5200,victorious,勝利を得た、勝ち誇った
5201,victory,勝利、征服
5202,view,眺め、見解
5203,viewpoint,観点、立場、見える地点
5204,vigilant,慎重な、油断のない
5205,vigor,活力、精力、元気、力強さ、迫力
5206,vigorous,精力的な、激しい、活力のある
5207,vintage,年代物の、ビンテージ物の、時期
5208,violate,破る、妨害する
5209,violation,違反、侵害
5210,violence,暴力
5211,violent,激しい、暴力的な
5212,virtual,仮想の、事実上の
5213,virtually,ほとんど、実質的には
5214,virtue,美徳、長所、効能
5215,virtuous,徳の高い、高潔な、自らの徳を誇示した
5216,virus,ウィルス、コンピュータウィルス
5217,visibility,視界、視野、目に見えること
5218,visible,目に見える、明白な
5219,vision,視力、視覚、洞察力、先見性
5220,visual,視覚の、目に見える
5221,visualize,を心に思い浮かべる、を視覚化する、想像する
5222,vital,生命に関する、極めて重要な、不可欠な、活気のある
5223,vitamin,ビタミン
5224,vivid,鮮やかな、強烈な、はっきりした、生き生きとした
5225,vocabulary,語彙
5226,vocal,声の、発声の、はっきりものを言う
5227,vocation,職業、天職、召命
5228,vocational,職業の、職業訓練の（ための）
5229,void,無効の
5230,volcano,火山
5231,volume,量、容積、音量、１冊
5232,voluntarily,自発的に
5233,voluntary,自発的な、無償の
5234,volunteer,ボランティア
5235,vomit,吐く、もどす
5236,vote,投票する、投票、選挙権
5237,voucher,クーポン券、商品券
5238,vow,誓約する、誓う、誓い
5239,vowel,母音(字)
5240,voyage,船旅（をする）、航海（する）
5241,vulgar,下品な、粗野な、悪趣味の
5242,vulnerable,傷つきやすい、弱い
5243,vulture,ハゲタカ、コンドル
5244,wacky,風変わりな、ばかげた
5245,wag,（尾などを）振る；（尾などが）揺れる
5246,wage,（肉体労働に対する）賃金
5247,wait,"待つ, 仕える, 給仕する"
5248,wake,目が覚める、（眠っている人）を起こす
5249,wallet,札入れ
5250,walnut,クルミ
5251,wander,歩き回る、それる、はぐれる
5252,wane,[自] （力・程度・色などが）衰える，（月が）欠ける
5253,ward,行政区、病棟
5254,warehouse,倉庫、問屋
5255,warfare,戦争状態、武力衝突、闘争
5256,warmth,温かさ
5257,warn,警告［注意］する
5258,warning,警告
5259,warrant,正当と認める、保証する、根拠、保証、証明書
5260,warranty,(商品の)保証、保証書、正当な理由〔根拠〕
5261,warrior,戦士、勇士
5262,waste,浪費、荒れ地、廃棄物、廃物の、不毛の、浪費する
5263,waterfall,滝
5264,wavelength,波長
5265,waver,(心が)揺れ動く、迷う
5266,way,道、方向、付近、方法、はるかに
5267,weak,弱い
5268,wealth,財産、富、裕福、豊富な、資源
5269,wealthy,裕福な、豊富な
5270,weapon,兵器、武器
5271,weaponry,武器類
5272,wear,身につけている、すり減らす、使い果たす、疲れさせる
5273,wearable,着用できる、着やすい
5274,weary,ひどく疲れた、飽き飽きして、非常に疲れる、うんざりする
5275,weave,織る、(巣)を張る、(計画など)を作り上げる
5276,web,クモの巣、(インターネット上の)ネットワーク、ウェブ
5277,website,ウェブサイト、ホームページ
5278,wed,と結婚する、を（～と）結婚させる（to）
5279,weed,雑草、役に立たない人(物)、(雑草)を抜く、～を取り除く
5280,weep,すすり泣く、しくしく泣く、嘆く
5281,weigh,重さを量る、比較検討する
5282,weight,重量、重要さ
5283,weird,不可思議な、変な、奇妙な、神秘的な
5284,welfare,福祉（事業）、繁栄、幸福
5285,well-being,複利、健康、幸福
5286,west,西（部）（の）
5287,wetland,湿地
5288,whale,クジラ
5289,whatever,～することは何でも、何が（何を）～しようとも
5290,whatsoever,全く、少しでも
5291,wheat,小麦
5292,wheel,ハンドル、車輪
5293,wheelchair,車椅子
5294,whenever,～するときはいつでも、いつ～しようとも
5295,whereas,その一方で、～だけれども
5296,wherever,～するところはどこでも、どこへ（に）～しようとも
5297,whether,～かどうか、～であろうとなかろうと
5298,while,する間に、の間ずっと、その一方で、時間
5299,whisper,ささやく、ささやき
5300,whistle,笛
5301,whole,全体の、まるごとの
5302,wholesale,卸売り
5303,wholesome,健康に良い
5304,wholly,完全に、全く
5305,wicked,邪悪な、いたずらな、とてもひどい
5306,wide,(幅・範囲・視野が)広い
5307,widespread,広範囲にわたる、広く普及した
5308,width,幅、横幅、一定幅に切った材料
5309,wield,巧みに使う
5310,wild,荒野、大自然、野生の、荒涼とした、乱暴な
5311,wilderness,荒野、（庭・町などの）放置された部分
5312,wildfire,野火、山火事
5313,wildlife,(集合的に)野生生物
5314,will,意志、遺書
5315,willing,～する気がある、快くやる
5316,willingness,快く～すること（to do）、積極的な気持ち
5317,willpower,意志力
5318,win,勝つ； ～（試合など）に勝つ； を獲得する
5319,wind,風、動向、巻く、曲がりくねって進む
5320,wipe,拭く、(wipe outで)絶滅させる
5321,wire,針金、ケーブル
5322,wireless,無線（電信）の、ラジオの
5323,wisdom,知恵、賢さ、金言、名言、学問、博識
5324,wise,（判断・行為などが）賢い
5325,wish,願う、～だといいと思う、願い
5326,wit,機知、機転、機知に富む人、(～s)平静
5327,witch,魔女
5328,withdraw,引っ込める、をかせる、引き出す
5329,wither,しおれる、枯れる、元気を失う、しおれさせる
5330,withhold,保留する、（感情など）をおさえる
5331,within,の内部に、の範囲内で、～以内に
5332,withstand,に耐える、に持ちこたえる、耐える、抵抗する
5333,witness,目撃者、証人、証拠、証言
5334,witty,機知に富んだ
5335,wolf,オオカミ
5336,wonder,不思議、驚異、不思議に思う（at）、…かしらと思う
5337,wood,木材、森、薪
5338,workforce,（通例the）総労働人口、労働力
5339,workout,運動、(運動競技の)練習
5340,workplace,仕事場
5341,workshop,研修会、セミナー
5342,worldwide,世界的な、世界中で（に）
5343,worm,虫
5344,worry,心配する、悩む
5345,worsen,悪化させる、悪化する
5346,worship,崇拝する、賛美する、礼拝に出る、賛美、尊敬、崇拝
5347,worth,～の価値がある
5348,worthless,価値のない、役に立たない
5349,worthwhile,価値がある、立派な
5350,wound,（銃弾・刃物などによる）傷、痛手
5351,wrap,包む、巻き付ける
5352,wreck,難破、残骸、台無しにする、大破させる
5353,wrecked,難破した
5354,wretched,悲惨な
5355,wrinkle,しわ、妙案、助言
5356,wrist,手首
5357,wrongdoing,悪事（を働くこと）、犯罪
5358,yard,ヤード（約0.914m）、庭
5359,yardstick,基準、尺度
5360,yawn,あくび(をする)
5361,yearn,熱望する
5362,yell,大声で叫ぶ、エールを送る、大声、エール
5363,yield,屈する、産出する、収穫高
5364,youngster,子供
5365,youth,若者、若さ、青年時代
5366,zealous,熱心な、熱狂的な
5367,zinc,亜鉛
5368,zone,区域、地帯`,
  },
];
  for (let i = 1; i < lines.length; i++) { // skip header
    // Handle CSV with possible commas inside quoted fields
    const line = lines[i];
    const parts = parseCSVLine(line);
    if (parts.length >= 3) {
      const word = parts[1].trim();
      const meaning = parts.slice(2).join(', ').trim();
      if (word && meaning) {
        words.push({ word, meanings: [meaning] });
      }
    }
  }
  return words;
}

// Simple CSV line parser that handles quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i
  {\
    id: 'tangoou',\
    name: '単語王2202',\
    csv: \$csvContent\,\
  },
  {\
    id: 'leap',\
    name: 'Leap',\
    csv: \$csvContent\,\
  },
  {\
    id: 'chimera',\
    name: 'キメラ',\
    csv: \$csvContent\,\
  },
  {\
    id: 'passtan',\
    name: 'パス単準１級',\
    csv: \$csvContent\,\
  },
  {\
    id: 'system',\
    name: 'システム英単語',\
    csv: \$csvContent\,\
  },
  {\
    id: 'target',\
    name: 'ターゲット1900',\
    csv: \$csvContent\,\
  },

  {
    id: 'leap',
    name: 'Leap',
    csv: `番号,単語,意味
1,agree,[自] ①賛成する ②（主語の中で）意見が一致する ③（with ～）（気候，食べ物が）（～に）合う
2,oppose,[他] ～に反対する
3,advise,[他] ～に忠告する
4,tip,[名] ①助言，ヒント ②チップ ③（足や山などの）先，先端（いずれも〈可算〉）
5,discuss,[他] ①～について話し合う，議論する ②～を話題に出す
6,blame,[他] ～に責任があるとする
7,argue,[他] ①（that SV）～と主張する [自] ②（with ～）（～と）言い争う
8,claim,[他] ①（that SV）～と主張する ②～を要求する，主張する [名] ③主張，要求
9,complain,[自] ①文句を言う，苦情を言う ②（of ～）（病気などを）訴える
10,offer,[他] ①～を申し出る [名] ②申し出 ③値引き
11,suggest,[他] ①～を示唆する ②～を提案する
12,recommend,[他] ～を推薦する，勧める
13,grateful,[形] 感謝している
14,apologize,[自] （to ～）（～に）謝る
15,excuse,[名] ①言い訳 [他] ②～を許す ③（A from B）（B からA）を免除する
16,celebrate,[他] ①（特別な日、出来事）を祝う ②（儀式など）を挙行する，執り行う
17,congratulate,[他] （人）を祝う，～にお祝いを述べる
18,admire,[他] ～を称賛する，～に感心する
19,impress,[他] ～に感銘を与える，～を感心させる
20,award,[名] ①賞 [他] ②～を授与する
21,explain,[他] ～を説明する
22,describe,[他] ～を説明する
23,communicate,[自] ①（with ～）（～と）意思の疎通をはかる [他] ②～を伝える
24,express,[他] ①（意見，気持ち）を表現する [名] ②急行（列車，バス）
25,promise,[名] ①約束 [他] ②～を約束する
26,information,[名] 情報〈不可算〉
27,technology,[名] （科学）技術
28,research,[名] ①（学術）研究 [他] ②～を研究する
29,material,[名] ①材料，生地 ②資料，教材 [形] ③物質的な ④重大な
30,artificial,[形] 人工的な
31,electric,[形] 電気の，電動の
32,invent,[他] ①～を発明する ②（話など）をでっち上げる
33,discover,[他] ①～を発見する ②（that SV）～を知る，～に気がつく ③（知るという意味で）～に出会う
34,develop,[自] ①発達する [他] ②～を発達させる ③～を開発する ④（話，考え）を発展させる ⑤（病気）にかかる
35,skill,[名] 技術，力
36,ability,[名] 能力
37,talent,[名] 才能
38,effort,[名] 努力
39,practice,[名] ①練習 ②実践 ③慣習 [他] ④～を練習する ⑤～を実践する
40,achieve,[他] ～を達成する
41,manage,[他] ①（to do）何とかして～する ②～を経営する，管理する
42,improve,[他] ①～を改善する，磨く [自] ②よくなる
43,produce,[他] ①～を生産する，産出する ②（見せるために）～を取り出す [名] ③農作物〈不可算〉
44,create,[他] ①～を創造する ②～を引き起こす
45,establish,[他] ①～を確立する，定着させる ②～を設立する
46,form,[他] ①～を形成する [名] ②形態 ③書式
47,save,[他] ①（時間，手間）を省く ②～を貯金する ③（命など）を救う [前] ④～を除いて（＝except）
48,medicine,[名] ①（for ～）（～の）薬 ②医学（＝medical science）
49,patient,[名] ①患者 [形] ②忍耐強い
50,condition,[名] ①状態，容態 ②（通例 ―s）（周囲の）状況，条件
51,medical,[形] ①医療の ②医学の
52,stress,[名] ①ストレス ②（on ～）（～に対する）強調 [他] ③～を強調する
53,suffer,[自] ①（from ～）（病気などで）苦しむ [他] ②（苦痛，損害）を経験する
54,exercise,[名] ①運動 ②（―s）練習 [自] ③運動する [他] ④～を行使する
55,breathe,[自] 呼吸する，息をする
56,thirsty,[形] ①のどが渇いた ②（for ～）（～を）切望して
57,physical,[形] ①身体的な ②物理的な
58,fever,[名] ①（体温の）熱 ②熱狂
59,strength,[名] ①（physical ―）体力 ②力
60,tear,[名] ①（通例 ―s）涙〈可算〉 [他] ②（up）～を引き裂く
61,taste,[自] ①～の味がする [他] ②～の味をみる [名] ③味 ④好み
62,rule,[名] ①規則 [他] ②～を支配する
63,role,[名] 役割
64,habit,[名] 習慣，癖
65,custom,[名] ①習慣 ②（―s）税関、関税
66,tradition,[名] 伝統
67,society,[名] ①社会〈不可算〉 ②（ある具体的な）社会〈可算〉 ③（one's ―）～と同席すること ④協会
68,law,[名] ①（the ―）（集合的に）法律，国法 ②（個々の）法律 ③（科学などの）法則
69,ancestor,[名] 祖先
70,population,[名] ①人口，個体数 ②（一定の地域に住む）住民
71,native,[形] ①母国の，その土地の [名] ②（ある土地の）生まれの人
72,abroad,[副] 海外へ，海外で
73,local,[形] ①その土地の，地元の ②地方の [名] ③地元の人
74,survey,[名] ①調査〈可算〉 [他] ②～を調査する
75,value,[名] ①価値 ②（―s）価値観 ③お買い得品〈不可算〉 [他] ④～を重んじる
76,treasure,[名] ①財宝，宝 ②大事な物［人］ [他] ③（思い出など）を大事にする
77,fashion,[名] ①流行 ②流儀，やり方 [他] ③（手などで）～を作る
78,public,[名] ①（the ―）大衆 [形] ②公共の，公の
79,evidence,[名] 証拠〈不可算〉
80,vote,[名] ①投票（数)[自] ②投票する
81,government,[名] 政府
82,nation,[名] ①国家 ②（the ―)国民
83,capital,[名] ①首都 ②資本 [形] ③重大な，死に値する
84,state,[名] ①州 ②状態 ③国家 [他] ④（意見，情報）を述べる
85,political,[形] 政治的な，政治の
86,price,[名] ①価格 ②（―s）物価 ③代償
87,sum,[名] ①（修飾語を伴って）金額 ②合計 ③（簡単な）計算 [他] ④（up）～を要約する
88,budget,[名] ①予算 [形] ②安い
89,fee,[名] ①（会費，遊園地などの）料金 ②（専門職への）謝礼
90,fare,[名] 運賃
91,bill,[名] ①勘定 ②請求書 ③〈米〉紙幣 ④法案
92,trade,[名] ①貿易 ②（the ～ trade）～業 ③商売 [他] ④～を交換する
93,wealth,[名] ①富，財産〈不可算〉 ②（a ― of ～）豊富な～
94,economy,[名] ①経済 ②節約
95,cost,[他] ①（費用）を要する，～がかかる ②～を犠牲にする [名] ③費用，犠牲
96,company,[名] ①会社 ②（one's ―）一緒にいること ③仲間 ④来客
97,task,[名] 仕事〈可算〉
98,earn,[他] ①（金）を稼ぐ，もうける ②（評判など）を得る
99,hurt,[自] ①（身体の部位が）痛む [他] ②（身体，感情）を傷つける
100,injure,[他] ①～を痛める ②～をけがさせる
101,damage,[他] ①～に損害を与える [名] ②損害，被害〈不可算〉 ③（―s）賠償金
102,destroy,[他] ①～を（完全に）破壊する ②～を殺す，全滅させる
103,ruin,[他] ①～を台無しにする ②～を破滅させる [名] ③（―s）廃墟，荒廃
104,danger,[名] 危険
105,neighbor,[名] ①近所の人 ②（a next-door ―）隣の人
106,audience,[名] 聴衆，観客
107,crowd,[名] 群衆
108,author,[名] ①著者 ②（主に文学作品の）作家
109,staff,[名] （集合的に）職員，従業員
110,clerk,[名] ①〈米〉店員 ②事務員，社員
111,customer,[名] 客
112,passenger,[名] 乗客
113,elderly,[形] ①年配の ②（the ―）（総称的に）年配の人々
114,female,[形] ①女性の ②（動物）雌の [名] ③女性，雌
115,head,[自] ①向かう [他] ②～を率いる
116,follow,[他] ①～の後について行く，～に続く ②（忠告，方針など）に従う
117,wander,[自] 歩き回る，さまよう
118,travel,[自] ①旅行する，移動する ②（光，音などが）進む
119,pass,[他] ①～を通り過ぎる ②～を抜く ③（試験）に受かる ④（（人）A）（人）に（A を）渡す [自] ⑤（時が）過ぎる [名] ⑥通行証
120,likely,[形] ①（to do）～しそうだ，可能性が高い [副] ②おそらく
121,natural,[形] ①当然の ②自然の ③生まれながらの
122,certain,[形] ①確かな ②（名詞の前で）ある～
123,probably,[副] おそらく
124,face,[他] ①～に直面する ②〈方向〉～向きである [名] ③顔，体面、文字盤
125,avoid,[他] ～を避ける
126,solve,[他] ～を解決する
127,trouble,[名] ①問題，ごたごた（通例〈不可算〉)[他] ②～を困らせる
128,issue,[名] ①問題 ②（雑誌の）号 [他] ③（切手など）を発行する
129,cheer,[他] ①（on）～に声援を送る ②（up）～を励ます [名] ③声援，励まし ④（―s）乾杯
130,encourage,[他] ①（A to do）（A）に（～するよう）促す，奨励する ②～を励ます
131,support,[他] ①～を支持する ②（家族など）を養う ③（理論など）を立証する [名] ④支持，支援<不可算>
132,prevent,[他] ①（A from B）（AがBするの）を妨げる ②～を予防する
133,deny,[他] ①～を否定する ②〈SVO1O2〉（O1）に（O2を）与えない
134,enable,[他] （A to do）（A）に［が］（～することを）可能にする
135,succeed,[自] ①（in ～）（～に）成功する ②（to ～）（家業などを）継ぐ
136,miss,[他] ①～を逃す ②～を休む ③～を恋しく思う
137,fail,[自] ①（in［at］～）（～に）失敗する ②（to do）～できない [他] ③（試験）に落ちる ④（人）に役に立たない
138,mistake,[名] ①間違い [他] ②（A for B）（A）を（B と）間違える
139,check,[他] ①～を調べる ②～を阻止する [名] ③小切手 ④勘定書 ⑤検査，点検 ⑥抑制
140,hide,[他] ①～を隠す [自] ②隠れる
141,draw,[他] ①（線で絵など）を描く ②（注意）を引く ③～を引っ張る，集める
142,join,[他] ①（クラブ，団体など）に加わる ②～をつなぐ ③（食事などを）～とともにする [自] ④（議論，活動などに）参加する
143,throw,[他] ①～を投げる ②（away［out］）～を捨てる ③（パーティなど）を催す [名] ④投げること
144,operate,[他] ①（機械など）を操作する [自] ②手術する ③（機械などが）作動する，（組織が）運営される
145,repair,[他] ①～を修理する ②～を修復する [名] ③修理，修復
146,sew,[他] ①～を縫う ②（on）（ボタンなど）を縫いつける
147,raise,[他] ①～を上げる ②（子ども，作物）を育てる ③（お金，資金）を集める ④（問題）を提起する [名]⑤賃上げ，昇給
148,serve,[他] ①（飲食物）を出す ②～に役立つ [自] ③役立つ
149,pour,[他] ①～を注ぐ [自] ②降りそそぐ
150,spill,[他] ①～をこぼす [名] ②（石油などの）流出
151,pretend,[自] （to do / that SV）（～する/ ～である）ふりをする
152,behave,[自] ふるまう
153,bear,[他] ①（can ―）～に耐える ②～を持つ、運ぶ ③～を産む
154,explore,[他] ①～を探検する，（街など）を探索する ②（問題など）を探る
155,happen,[自] ①（to ～）（～に）起こる ②（to do）偶然～する
156,appear,[自] ①現れる ②（to be ～）～のように思える
157,remain,[自] ①～のままでいる ②残る
158,survive,[自] ①生き残る [他] ②～から生き延びる，～の後も存続する
159,belong,[自] （to ～）（～に）所属している
160,represent,[他] ①～を代表する ②（記号などが）を表す ③～を表現する
161,base,[他] ①～の基礎を置く [名] ②基礎（の部分），基盤 ③基地
162,include,[他] ～を含む
163,contain,[他] ①～を含む ②（主に否定で）～を抑える
164,own,[形] （所有格の後で）①自分自身の ②（名詞的に）自分自身のもの [他] ③～を所有している
165,share,[他] ①～を共有する ②（考えなど）を（人に）伝える [名] ③共有 ④分け前
166,collect,[他] ①（同種の物）を集める ②～を徴収する，回収する
167,gather,[他] ①～を集める [自] ②集まる
168,history,[名] ①歴史 ②履歴，前歴，病歴
169,subject,[名] ①科目 ②話題 ③被験者 [形] ④（be ― to ～）～を受けやすい
170,education,[名] 教育
171,knowledge,[名] 知識，知っていること
172,uniform,[名] ①制服 [形] ②同一の，一定の
173,grade,[名] ①（小，中，高の）学年 ②等級 ③成績
174,senior,[名] ①（高校，大学の）最上級生 [形] ②高齢者の ③（地位が）上位の
175,graduate,[自] （from ～）（～を）卒業する
176,decide,[他] ①（to do）（～すること）を決定する，決心する [自] ②（on ～）（～を）決める
177,judge,[他] ①～を判断する [名] ②裁判官，審判（員）
178,quit,[他] ～を（完全に）やめる
179,retire,[自] （from ～）（～を）引退する，退職する
180,review,[名] ①再検討 ②（新聞などの）批評 ③復習
181,choose,[他] ①～を選ぶ [自] ②選ぶ
182,imagine,[他] ～を想像する
183,guess,[他] ①～を推測する [名] ②推測
184,expect,[他] ①～を予期する ②（A of［from］ B）（B にA）を期待する ③（be ―ing）（～を）身ごもっている（※③は[自]も可）
185,predict,[他] ～を予測する
186,remember,[他] ①（doing）（過去にしたこと）を覚えている ②（to do）（～すること）を覚えている ③（me to ～）（～に）よろしく伝える
187,remind,[他] ①（A of B）（A）に（B のことを）思い出させる ②（（人）to do）（人）に～するように念を押す
188,realize,[他] ①～を（はっきり）理解する ②（夢，計画など）を実現する
189,appreciate,[他] ①～を（正しく）理解する ②～のよさがわかる ③～に感謝する
190,accept,[他] ～を受け入れる
191,consider,[他] ①～をよく考える，考慮する ②（人の気持ち）を思いやる ③（A （to be［as］)B)（A）を（B と）みなす
192,mind,[自] ①気にする [名] ②精神，頭脳 ③（才能，知性のある）人
193,wonder,[他] ①（wh―節 / if SV）～かなと思う [自] ②（at ～）（～に）驚く
194,seem,[自] ～のように思われる
195,compare,"[他] ①（A with［to, and］ B）（A）を（B と）比較する ②（A to B）（A）を（B に）例える [自] ③（with［to］～）（～に）匹敵する"
196,concentrate,[自] ①（on ～）（～に）集中する [他] ②（A on B）（A）を（B に）集中させる
197,focus,[自] ①（on ～）（～に）焦点を当てる，力を注ぐ [名] ②焦点
198,allow,[他] ①（人が）～を許可する ②（物が）～を可能にする
199,admit,[他] ①～を認める ②～の入場［入学］を許可する
200,ground,[名] ①地面 ②根拠
201,pollution,[名] 汚染，公害〈不可算〉
202,sight,[名] ①光景 ②視力
203,view,[名] ①眺め，景色〈可算〉 ②見解，見方 [他] ③（A as B）（A）を（B と）みなす
204,landscape,[名] ①風景 ②（the ―）（政治，社会の）情勢
205,nature,[名] ①（無冠詞）自然 ②（しばしばthe ― of ～)（～の）性質
206,seed,[名] ①種 ②シード選手
207,plant,[名] ①植物 ②（大規模な）工場、発電所 [他] ③～を植える
208,bloom,[自] ①（花が）咲く [名] ②開花
209,harvest,[名] ①収穫 [他] ②～を収穫する ③（臓器，体液など）を摘出する
210,insect,[名] 昆虫
211,earthquake,[名] 地震
212,temperature,[名] ①温度，気温 ②体温
213,degree,[名] ①（温度などの）度 ②程度 ③学位
214,flood,[名] ①洪水 <可算>[他] ②～を水浸しにする
215,freeze,[自] ①凍る，凍りつく [他] ②～を凍らせる
216,reflect,[他] ①～を反射する ②～を反映する [自] ③（on ～）（～を）熟考する
217,polite,[形] （人，言動が）礼儀正しい
218,rude,[形] （言葉、行為が）無礼な，不作法な
219,lonely,[形] 孤独な
220,lazy,[形] ①（やる気がなく）怠惰な，いい加減な ②（名詞の前で）くつろいだ
221,strict,[形] 厳しい
222,ugly,[形] 醜い
223,intelligent,[形] 知的な，賢い
224,silly,[形] ばかな
225,nervous,[形] ①あがって，落ち着かない ②神経質な，臆病な ③（身体の）神経の
226,awake,[形] 目を覚まして
227,alone,[副] ①1人で [形] ②（名詞＋alone）～だけ
228,attitude,[名] 態度，姿勢
229,character,[名] ①性格，特徴 ②登場人物 ③文字
230,characteristic,[名] ①特徴〈可算〉 [形] ②特有の，特徴的な
231,feature,[名] ①特徴 ②特集記事 [他] ③～を特集する
232,detail,[名] ①詳細 ②（建物などの）細部
233,advantage,[名] （over ～）（～に対する）利点
234,fault,[名] ①（ちょっとした）欠点，不具合〈可算〉 ②（one's ―）責任〈不可算〉 ③断層
235,quality,[名] ①質〈不可算〉 ②（通例―s）（人間の）資質
236,correct,[形] ①正確な，正しい [他] ②～を訂正する，矯正する
237,ideal,[形] ①理想的な，申し分のない [名] ②理想，理想的な姿
238,fair,[形] ①公正な，公平な [名] ②品評会，見本市
239,appropriate,[形] 適切な
240,famous,[形] ①（for one's ～）（～で）有名な ②（as ～）（～として）有名な
241,elementary,[形] 初歩的な，基本の
242,major,[形] ①主要な [自] ②（in ～）（～を）専攻する [名] ③専攻
243,matter,[自] ①重要である [名] ②（修飾語を伴い）物質 <不可算>③（―s）事態，状況
244,bright,[形] ①明るい ②（主に子どもや若者が）賢い
245,brilliant,[形] ①輝いている ②すばらしい
246,lively,[形] 生き生きとした
247,comfortable,[形] ①（物が）快適な ②（人が）心地よい
248,pleasant,[形] （人にとって）楽しい，心地よい
249,convenient,[形] ①都合がよい ②近くて便利がよい
250,FALSE,[形] ①誤った ②偽の
251,terrible,[形] ①ひどい ②苦手で
252,awful,[形] ひどい，不快な
253,thin,[形] ①薄い ②（病的に）やせた ③（毛が）薄い
254,tight,[形] ①引き締まった，きつい ②厳しい
255,loose,[形] ①ゆるい ②解き放たれた
256,raw,[形] 生の，加工されていない
257,empty,[形] ①空の，中身のない [他] ②～を空にする
258,smooth,[形] ①滑らかな ②順調な [他] ③（服のしわ）をのばす，（髪）をなでつける
259,direct,[形] ①直接的な [他] ②～を指揮［監督，演出］する ③（注意など）を向ける ④～に道を教える
260,familiar,[形] ①知られた ②（人が）（よく）知っている
261,similar,[形] （to ～）（～に）似た
262,differ,[自] 異なる
263,vary,[自] さまざまだ，変わる
264,specific,[形] ①特定の ②明確な，具体的な
265,common,[形] ①普及した，普通の ②（主に名詞の前で）共通の
266,unusual,[形] 珍しい
267,add,[他] ①～を加える [自] ②（to ～）（～を）増やす
268,increase,[自] ①増える [他] ②～を増やす [名] ③（in ～）（～の）増加
269,reduce,[他] ①～を減らす ②（A to B)A をB にする
270,divide,[他] ①～を分割する ②（by ～）（～によって）（数字）を割る
271,count,[他] ①～を数える [自]②数える ③重要である ④（on ～）（～を）（全面的に）当てにする
272,weigh,[自] ①～の重さがある [他] ②～の重さを量る ③～を（比較）検討する
273,quarter,[名] ①④分の①，15分，25セント ②（都市のある特定な）地域
274,lot,[名] ①（a ― of ～）多くの～ ②（副詞的に）（a ―）とても ③（one's）（～の）状況，運命 ④（何らかの目的を持つ）土地
275,pile,[名] ①積み重ね，山 ②多量 [他] ③～を積み重ねる
276,rate,[名] ①割合，速さ ②（ホテルなどの一定の）料金 [他] ③～を評価する
277,figure,[名] ①数字 ②人物 ③スタイル，体つき ④図 [自] ⑤目立つ
278,lack,[名] ①（（a）― of ～）（～の）不足 [他] ②～を欠いている
279,extra,[形] ①余分な，追加の，臨時の [名] ②余分な［追加された］もの
280,ready,[形] ①用意ができている ②（be ～ to do）進んで～する
281,prepare,[他] ①～の準備をする，用意をする [自] ②準備をする，用意をする [形] ③（be ―d to do）（～する）準備ができている
282,adjust,[自] ①（to ～）（～に）慣れる [他] ②～を調整する
283,apply,[自] ①（to ～）（～に）当てはまる ②（for ～）（～に）申し込む [他] ③～を当てはめる，応用する ④（薬，口紅など）を塗る
284,suit,[他] ①（人）に適している，好都合だ ②（服装，色が人）に似合う [名] ③訴訟（＝lawsuit)④スーツ
285,case,[名] ①場合 ②（the ―）事実 ③（犯罪）事件 ④症例 ⑤（make a ―）主張（する）
286,scene,[名] ①（劇，小説などの）場面 ②（事故）現場 ③（the ～ scene）～（業）界
287,chance,[名] ①（to do）（～する）機会 ②（of ～ / that SV）（～の/ ～する）可能性
288,opportunity,[名] （よい）機会，好機
289,experience,[名] ①経験 ②（個々の）体験 [他] ③～を経験する
290,time,[名] ①（漠然とした）時間 ②（ある長さの）時間 ③回数 ④倍 ⑤（―s）情勢，時代 ⑥（接続詞的に（the)next ―）次に～するとき
291,spring,[名] ①春 ②泉，温泉 [自] ③飛び出る，突然出現する
292,minute,[名] ①（時間の）分 ②（a ―）ちょっとの間 ③（―s）議事録 [形] ④とても小さい，細かい [接] ⑤（the ―）～するとすぐに
293,age,[名] ①年齢 ②時代 ③（―s）長い間 [自] ④高齢化する
294,generation,[名] ①世代 ②生み出すこと ③発電
295,anniversary,[名] 記念日
296,recently,[副] 最近，近ごろ
297,used,[助] ①（to ～）以前は～だった，よく～したものだ [形] ②（be ― to doing）（～することに）慣れている ③中古の
298,early,[副] ①（時間，時期が）早く，初期に ②（予定より）早く [形] ③早い，初期の
299,first,[形] ①第①の ②（for the ― time）初めて [副] ③初めて ④（文頭で）まず第①に（＝firstly)[名]⑤（at ―）最初のうちは
300,latest,[形] （the ―）最新の
301,modern,[形] ①現代の ②近代的な
302,ancient,[形] ①古代の ②古びた
303,spend,[他] ①（時間）を費やす ②（お金）を使う
304,delay,[他] ①～を遅らせる [名] ②遅延，延期
305,borrow,[他] ～を借りる
306,lend,[他] ①（無償で）～を貸す ②（銀行が利子をつけて）を貸す
307,rent,[他] ①～を借りる ②（A to B）（A）を（B に）賃貸しする [名] ③家賃，賃貸料，使用料
308,provide,[他] （A with B）（AにB）を供給する，与える
309,board,[名] ①（細長い）板 ②（幹部などによる）委員会 [他] ③～に乗る
310,garbage,[名] ごみ〈不可算〉
311,item,[名] ①品物 ②（集合名詞を数えるときに用いる）...点、個 ③（リストなどの）項目
312,wheel,[名] ①車輪 ②（the ―）ハンドル [他] ③（車輪のついたもの）を動かす
313,note,[名] ①メモ ②〈英〉紙幣 [他] ③（that SV）（～ということ）を指摘する ④～に注意を払う
314,present,[名] ①プレゼント ②現在 [形] ③現在の ④出席して，存在して [他] ⑤～を贈る，提示する
315,bargain,[名] ①買い得品<可算> [自] （商談などで）交渉する
316,stuff,[名] ①（漠然とした）もの [他] ②～を詰める
317,string,[名] ①ひも ②（a ― of ～）一連の～ ③（ギターなどの）弦
318,leisure,[名] ①余暇 ②（形容詞的に）余暇の
319,diet,[名] ①食事 ②規定食 ③（D―)（日本の）国会
320,furniture,[名] 家具〈不可算〉
321,refrigerator,[名] 冷蔵庫
322,traffic,[名] 交通（量）〈不可算〉
323,sell,[他] ①～を売る [自] ②売れる
324,pay,[他] ①（A for B)（B の代金としてA）を支払う [自] ②（for A)（A の代金を）支払う ③（仕事などが）割に合う [名] ④給料
325,wear,[他] ①～を身につけている ②～をすり減らす [自] ③すり減る
326,clothes,[名] 服〈複数扱い〉
327,marry,[他] ①～と結婚する [形] ②（―ied）結婚している
328,greet,[他] ～に挨拶する，出迎える
329,order,[他] ①～を注文する ②（医者や上官などが）～に命令する [名] ③注文 ④命令 ⑤順序 ⑥秩序
330,room,[名] ①部屋 ②余地，空間〈不可算〉
331,story,[名] 階
332,site,[名] ①用地 ②現場，場所 ③（史跡などの）跡
333,yard,[名] ①（主に〈米〉）庭 ②ヤード（＝約0.9 m）
334,bottom,[名] ①底 ②一番下，最下位 ③尻
335,line,[名] ①列 ②行，線 ③電話回線 ④セリフ [自] ⑤（―up）並ぶ
336,row,[名] ①列 [他] ②（ボート）をこぐ
337,background,[名] ①背景 ②経歴，生い立ち
338,direction,[名] ①方向，方角 ②（―s）道順 ③指示
339,culture,[名] ①文化 ②培養，養殖 ③教養 [他] ④～を耕す，栽培［養殖］する
340,art,[名] ①芸術 ②（何かを行う）技術 ③（liberal ―s）一般教養
341,cartoon,[名] 漫画
342,novel,[名] ①小説 [形] ②斬新な
343,instrument,[名] ①楽器 ②器具
344,tune,[名] ①曲 [自] ②（番組に）チャンネルを合わせる [他] ③～の調子を合わせる
345,sentence,[名] ①（ ①つ①つの）文 ②判決 [他] ③（A to B）（A）を（B）の刑にする
346,article,[名] ①記事 ②品物 ③冠詞 ④条項
347,passage,[名] ①（文章などの）一節 ②（時の）経過，移動
348,vocabulary,[名] 語彙
349,rumor,[名] うわさ
350,spell,[他] ①～をつづる [名] ②呪文 ③（天気などのある一続きの）期間
351,pronounce,[他] ①（単語など）を発音する ②（判決など）を宣告する，～と断言する
352,sign,[名] ①兆候，印 ②標識，看板，掲示 [他] ③～を署名する
353,mean,[他] ①～を意味する ②（to do）～するつもりだ [形] ③意地悪な
354,publish,[他] ①～を出版する ②（公式に結果など）を発表する
355,display,[他] ①～を展示する ②（実力など）を発揮する ③～を誇示する [名] ④展示，表現，誇示
356,trust,[他] ①～を信頼する [名] ②信頼，信用
357,depend,[自] ①（物，事が主語）（on ～）（～）次第である ②（人が主語）（on ～）（～に）頼っている
358,rely,[自] （on ～）（～に）頼る
359,pray,[自] 祈る
360,beg,[他] ①～を嘆願する [自] ②求める
361,prefer,[他] （A to B)（B よりA）を好む
362,weep,[自] しくしく泣く
363,hate,[他] ～を嫌う
364,worry,[自] ①心配をする [名] ②心配（事）
365,anxious,[形] ①（about ～）（～を）心配して ②（to do / for ～）（～を）切望して
366,satisfy,[他] ①～を満足させる ②（必要性，空腹など）を満たす
367,annoy,[他] ～を苛立たせる
368,bother,[他] ①～に面倒をかける ②（to do）わざわざ～する [名] ③面倒なもの
369,disturb,[他] ①（うるさくして）～に迷惑をかける ②（平和など）を乱す
370,frighten,[他] ～を怯えさせる
371,regret,[他] ①～を後悔する ②（to do）残念ながら～しないといけない [名] ③後悔
372,favor,[名] ①親切な行為 ②支持
373,interest,[名] ①関心 ②（―s）利益 ③（銀行などの）利子
374,pity,[名] ①残念なこと〈可算〉 ②哀れみ〈不可算〉
375,due,[形] ①（due to （名詞））（名詞）が原因で ②締め切りの ③到着［出産］予定の
376,reason,[名] ①理由 ②理性 [他] ③～を推理する [自] ④思考する，判断する
377,result,[名] ①結果 [自] ②（in ～）結果として（～に）なる ③（from ～）（～の）結果として生じる
378,effect,[名] 効果，影響，結果
379,influence,[名] ①影響（力)[他] ②～に影響を与える
380,end,[自]（end up doing）結局～することになる [名] ②端、終わり ③（最終的な）目的
381,cause,[他] ①～を引き起こす [名] ②原因
382,affect,[他] （直接的に）～に影響を与える，作用する
383,way,[名] ①方法 ②（in ～ way）（～の）点（で)③道 [副] ④はるかに
384,manner,[名] ①方法 ②流儀，態度 ③（―s）マナー
385,purpose,[名] 目的
386,sake,[名] ①（for ～）ため ②日本酒
387,right,[副] ①（場所や時の副詞（句）を修飾して）ちょうど [形] ②正しい，適切な ③右の [名] ④（to ～）（～の）権利
388,complete,[形] ①完全な [他] ②～を完成させる
389,hardly,[副] ①（程度）ほとんど～ない ②（― ever）めったに～ない
390,almost,[副] ほとんど
391,partly,[副] ある程度，部分的に
392,indeed,[副] ①（強調として）実際に，本当に ②（but を伴って）確かに～
393,even,[副] ①さえも ②（比較級の前で）さらに [形] ③偶数の ④均一の ⑤（数字が）ちょうどの
394,exactly,[副] ①正確に ②〈会話で〉そのとおり
395,gradually,[副] 徐々に
396,therefore,[副] それゆえに
397,instead,[副] ①代わりに ②（of ～）（～の）代わりに
398,until,[前] ①～まで（ずっと)[接] ②～まで（ずっと）
399,besides,[前] ①～に加えて [副] ②おまけに
400,except,[前] ①～を除いて ②（for ～）（～を）除いて
401,debate,[名] ①討論 [他] ②～を討論する
402,criticize,[他] ～を批判する
403,accuse,[他] ①～を非難する ②～を告訴する
404,insist,[自] ①（on ～）（～と）言い張る，（強く）主張する [他] ②～と主張する、を求める
405,object,[自] ①（to ～）（～に）反対する [名] ②物 ③目的 ④（嘲笑，欲望などの）対象
406,protest,[自] ①（against ～）（～に対して）抗議する [名] ②抗議
407,controversial,[形] 論争を招く，物議をかもす
408,bound,[形] ①（to do）きっと～（する，～する［である］に違いない)②（for ～）～行きで
409,bet,[他] ①（that SV）きっと～だと思う ②～を賭ける
410,demand,[他] ①～を（強く）要求する [名] ②（for ～）（～への）要求，需要
411,desire,[名] ①願望 [他] ②～を強く望む
412,praise,[他] ①（A for B）（A）を（B のことで）褒める，称える [名] ②賞賛
413,honor,[名] ①名誉，栄誉 [他] ②～を敬う
414,chat,[自] ①おしゃべりする [名] ②おしゃべり
415,refer,[自] （to ～）①（人が主語）（～に）言及する，参照する ②（物が主語）（～を）示す
416,mention,[他] ～について述べる，言及する
417,convey,[他] ①～を伝える ②（乗客，音，病気など）を運ぶ
418,demonstrate,[他] ～を（はっきり）示す，実演する
419,emphasize,[他] ～を強調する
420,exaggerate,[他] ①～を誇張する [自] ②誇張する，大げさに言う
421,reply,[自] ①（to ～）（～に）返事をする，答える [名] ②返事，答え
422,respond,[自] ①（to ～）（手紙や問いなどに）返答する ②（to ～）（～に）対応する，反応する
423,whisper,[自] ①ささやく [名] ②ささやき（声）
424,remark,[名] ①発言 [他] ②～と発言する
425,observe,[他] ①～を観察する ②（that SV）（気づいたことを）～と述べる ③（規則など）を遵守する ④（記念日など）を祝う
426,theory,[名] ①理論 ②（学）説
427,analysis,[名] 分析
428,phenomenon,[名] ①現象 ②特異なもの，天才（①②ともに<可算>）
429,device,[名] 装置<可算>
430,experiment,[名] ①実験 [自] ②実験する
431,chemical,[名] ①（通例 ―s）化学物質 [形] ②化学の
432,fuel,[名] ①燃料 [他] ②（感情など）を大きくする
433,nuclear,[形] 原子力の，核の
434,statistics,[名] ①統計（値）〈複数扱い〉 ②統計学〈不可算〉
435,pursue,[他] ①～を追求する，続ける ②～を追跡する
436,accomplish,[他] ～をやり遂げる
437,overcome,[他] ～を克服する
438,fulfill,[他] ①（義務，願望など）を果たす ②（必要など）を満たす
439,devote,[他] （A to B)（A）を（B に）ささげる
440,strive,[自] 努力する
441,aim,[自] ①狙う [他] ②（―ed at ～）～向けだ [名] ③狙い，目的
442,challenge,[名] ①難問，課題<可算> [他] ②～に異議を唱える
443,trial,[名] ①試み ②裁判 ③試練
444,dizzy,[形] めまいがして
445,appetite,[名] 食欲
446,starve,[自] ①餓死する ②（be ―ing）とてもお腹が空いている
447,mental,[形] ①精神の ②知力の
448,rest,[名] ①休憩 ②（the ―）残り [自] ③（横になったりして）休む ④（on ～）（～）次第だ [他] ⑤～を休ませる
449,surgery,[名] ①手術 ②外科（①②ともに〈不可算〉)
450,disease,[名] 病気
451,stomachache,[名] 腹痛
452,symptom,[名] ①（通例 ―s）症状 ②兆候
453,cancer,[名] ①がん ②（C―）かに座
454,ambulance,[名] 救急車
455,recover,[自] ①（from ～）（～から）回復する [他] ②（盗品など）を取り戻す
456,sore,[形] ①（のどや筋肉が）痛い ②（話題など）触れてほしくない，心が痛む
457,swell,[自] ①（手足などが）腫れる ②（風船，費用などが）膨らむ
458,cough,[自] ①咳をする [名] ②咳〈可算〉
459,bleed,[自] 出血する
460,faint,[形] ①（色，光などが）かすかな [自] ②気絶する [名] ③気絶
461,exhaust,[他] ①～を疲れ果てさせる ②～を使い果たす [名] ③排出，排気ガス
462,cure,[他] ①～を治療する [名] ②治療法
463,disabled,[形] ①障がいのある [名] ②（the ―）（集合的に）障がいのある人
464,stiff,[形] ①（筋肉などが）凝った，（動かすと）痛い ②堅い
465,muscle,[名] 筋肉
466,tongue,[名] ①舌 ②言語，言葉 ③（have a ～ tongue）話し方
467,sense,[名] ①感覚 ②分別 ③（言葉の）意味 [他] ④（何となく）～を感じる
468,sweat,[名] ①汗（通例〈不可算〉)[自] ②汗をかく
469,gender,[名] 性，性別
470,nationality,[名] 国籍
471,citizen,[名] ①市民 ②国民
472,civil,[形] ①（一般）市民の ②国内の ③礼儀正しい
473,racial,[形] 人種の，民族の
474,rural,[形] 田舎の
475,domestic,[形] ①国内の ②家庭内の
476,global,[形] （全）世界的な
477,suburb,[名] （通例the ―s）郊外
478,border,[名] ①国境（地帯），境界 [他] ②～を縁取る
479,burden,[名] 重荷，負担
480,impact,[名] ①（on ～）（～への）影響 ②（物体間の）衝撃 [自] ③（on ～）（～に）影響を及ぼす
481,status,[名] ①地位 ②（特定の時点の）状況
482,equal,[形] ①（to ～）（～に）等しい，平等な [他]②～に等しい
483,relationship,[名] ①関係 ②親密な関係 （①②ともに〈可算〉）
484,reputation,[名] （人，物の）評判〈可算〉
485,trend,[名] ①（世の中の）風潮，傾向 ②流行
486,service,[名] ①（政府あるいは企業による）事業，制度 ②（電車，バスの）便 ③サービス，接客〈不可算〉
487,religion,[名] 宗教
488,moral,[形] ①道徳的な [名] ②（物語の）教訓 ③（―s）道徳
489,standard,[名] ①基準，水準 [形] ②標準の
490,prosperity,[名] 繁栄
491,crisis,[名] 危機
492,prejudice,[名] ①偏見，先入観 [他] ②～に偏見をもたせる
493,discrimination,[名] ①差別 ②識別（①②ともに<不可算>）
494,charity,[名] ①慈善（事業）〈不可算〉 ②慈善団体〈可算〉 ③（形容詞的に）慈善のための
495,benefit,[名] ①恩恵 ②（―s）手当 [自] ③（from ～）（～から）恩恵を得る [他] ④～に恩恵を与える
496,welfare,[名] ①福祉 ②（健康なども含めた）幸福 ③生活保護（①②③いずれも<不可算>）
497,community,[名] （地域）社会，共同体（の人々）<可算>
498,individual,[名] ①個人，個体 [形] ②個人の，個々の
499,official,[名] ①役人，役員 [形] ②公式の
500,immigrant,[名] （外国からの）移民
501,volunteer,[名] ①ボランティア [自] ②（to do）（～することを）自発的に申し出る
502,interact,[自] （with～）（～と）交流する、相互作用する
503,contribute,[自] （to ～）①（～に）貢献する ②（～の）一因となる [他] ③（A to B）（A）を（B に）寄付する，提供する
504,abolish,[他] ～を廃止する
505,impose,[他] （A on B）（A）を（B に）課す，押しつける
506,access,[名] ①利用する権利 ②（場所への）接近方法
507,duty,[名] ①義務 ②関税
508,responsible,[形] ①（人が主語）責任がある ②（物が主語）原因となっている
509,policy,[名] ①政策 ②方針 ③保険契約，約款
510,elect,[他] ～を（選挙で）選ぶ
511,industry,[名] ①工業 ②（the ～ industry）産業，業界 ③勤勉
512,income,[名] 収入
513,profit,[名] 利益，利潤
514,tax,[名] 税金（〈米〉→〈可算〉 〈英〉→〈不可算〉）
515,expense,[名] ①費用，経費 ②（at the ― of ～）（～を）犠牲（にして）
516,debt,[名] 借金
517,deposit,[名] ①預金 ②頭金，保証金 ③埋蔵物 、堆積物 [他] ④～を預ける
518,charge,[名] ①料金 ②（主にin ―）責任，管理 ③（against ～）（～に対する）非難，告訴 [他] ④～を請求する ⑤～を告訴する ⑥～を充電する
519,wage,[名] ①賃金<可算> [他] ②（闘争，運動など）を行う
520,recession,[名] 不況，不景気
521,consume,[他] ～を消費する
522,waste,[他] ①～を浪費する [名] ②浪費，無駄 ③廃棄物〈不可算〉
523,invest,[他] ①（A in B）（A）を（B に）投資する ②（A with B）（A）に（B を）与える
524,import,[他] ①～を輸入する [名] ②輸入，輸入品
525,financial,[形] 財政的な，金銭的な
526,hire,[他] ①～を（一時的に）雇う ②（金を払って短期間）～を借りる
527,employ,[他] ①（人）を雇う ②（物，事）を用いる
528,resign,[自] ①（as ～）（～を）辞職する [他] ②（地位など）を辞める
529,qualify,[自] ①（for ～）（～の）資格がある ②（as ～）（～としての）資格を得る [他] ③～に資格を与える
530,assign,[他] ①～を割り当てる ②～を配属する
531,occupation,[名] ①職業〈可算〉 ②占有，占領〈不可算〉
532,career,[名] ①職業 ②経歴
533,profession,[名] ①（専門的な）職業 ②（the ―）同業者集団
534,unemployment,[名] ①失業 ②失業率（＝― rate），失業者数 （①②ともに〈不可算〉）
535,document,[名] ①書類，資料 [他] ②～を記録する
536,department,[名] ①（組織の）部門，課 ②（大学の）学科 ③（米国などの）省
537,branch,[名] ①支店，支局 ②（学問の）部門 ③枝
538,retail,[名] ①小売り〈不可算〉 [自] ②小売りされている
539,colleague,[名] （from ～）（～の）同僚
540,system,[名] ①制度，組織 ②体系 （①②ともに〈可算〉）
541,structure,[名] 構造
542,architecture,[名] 建築（様式）〈不可算〉
543,construction,[名] 建設〈不可算〉
544,function,[名] ①機能 [自] ②機能する
545,surface,[名] ①表面<可算> [自] ②表面化する
546,aspect,[名] 側面<可算>
547,edge,[名] ①端 ②（ナイフなどの）刃 ③優位
548,makeup,[名] ①（物の）構成、構造 ②（人の）資質 ③化粧 ④（― exam）追試験
549,consist,[自] ①（of ～）（～で）構成されている ②（in ～）（～に）ある
550,compose,[他] ①～を構成する，組み立てる ②～を作曲［作文］する ③～を落ち着かせる
551,attach,[他] ①～をくっつける，添付する ②～に愛着を持たせる
552,connect,[他] ①～をつなげる ②～を関連づける [自] ③つながる
553,relate,[他] ①（A to B）（A）を（B に）関連づける ②～を（順序立てて）話す [自] ③（to ～）（～に）理解を示す
554,associate,[他] ①（A with B）（A）を（B と）関連づける，（A）から（B を）連想する [自] ②（with ～)（～と）付き合う [名] ③同僚，共同経営者
555,stick,[他] ①～を貼り付ける ②（舌や脚）を出す [自] ③（to）（主義などを）守る，固執する
556,thief,[名] 泥棒
557,crime,[名] 犯罪
558,motive,[名] 動機
559,punish,[他] （（人）for ～）（人）を（～の理由で）罰する
560,violate,[他] ①（法律など）に違反する ②（権利など）を侵害する
561,legal,[形] ①合法の ②法律の，法的な
562,enemy,[名] ①敵<可算> ②（形容詞的に）敵の
563,conflict,[名] ①対立，紛争 ②葛藤 [自] ③（with ～）（～と）矛盾する
564,compete,[自] ①競争する ②（in ～）（競技などに）参加する
565,defeat,[他] ①（相手）を打ち負かす [名] ②敗北
566,victim,[名] 犠牲者
567,obstacle,[名]（to ～）（～に対する）障害〈可算〉
568,harm,[名] ①害〈不可算〉 [他] ②～に害を与える
569,invade,[他] ①（プライバシーなど）を侵害する ②（国など）に侵入する，～を侵略する
570,endanger,[他] ～を危険にさらす
571,interrupt,[他] ①～を中断する ②～を遮る [自] ③人の話を遮る
572,spoil,[他] ①～を台無しにする ②（子ども）を甘やかす
573,spectator,[名] 観客〈可算〉
574,relative,[名] ①（家族も含めて）親戚 [形] ②相対的な
575,departure,[名] ①出発 ②逸脱
576,destination,[名] ①目的地 ②（tourist ―）観光地，旅行先（①②ともに<可算>）
577,transportation,[名] 交通機関〈不可算〉
578,vehicle,[名] ①（エンジンの付いた）車両 ②（思想，意見の）伝達手段
579,baggage,[名]（旅行時の）手荷物<不可算>
580,via,[前] ①～経由で ②～によって
581,lead,[自] ①（to ～）（～に）至る [他] ②（a ～ life）（～な生活）を送る ③（A to do）A に～させる [名] ④鉛，（シャーペンなどの）芯
582,rise,[自] ①上がる，昇る [名] ②上昇
583,flow,[自] ①流れる [名] ②流れ
584,burst,[自] ①破裂する，爆発する ②（慣用句で）突然～し始める
585,melt,[自] ①（固体が）溶ける [他] ②～を溶かす
586,commute,[自] ①通勤[通学]する [名] ②通勤[通学]（距離）
587,accompany,[他] ①（人が主語）～と一緒に行く ②（物が主語）～に伴う
588,emit,[他]（ガス、熱、光など）を排出する
589,progress,[名] ①進歩，前進 〈不可算〉 [自] ②進歩する，進む
590,advance,[名] ①進歩，前進 〈可算〉 [自] ②（軍隊などが）前進する，進歩する [形] ③事前の
591,deal,[自] ①（with～）（～を）扱う [名] ②取り引き
592,handle,[他] ①～を扱う ②（手で）～を扱う，触れる [名] ③取っ手
593,treat,[他] ①（副詞を伴って）～を扱う ②（病人，病気）を治療する ③（A to B)（A)に（Bを）おごる [名] ④楽しみ
594,clue,[名] （to ～）（～の）手がかり
595,restrict,[他] ～を制限する
596,limit,[他] ①（数量，範囲）を制限する [名] ②制限
597,forbid,[他] ～を禁じる
598,ban,[名] ①禁止〈可算〉 [他] ②～を禁止する
599,refuse,[他] ①（to do）～するのを拒む ②～を断る
600,reject,[他] ①～を拒絶する ②（人）を拒む、除け者にする
601,persuade,[他] （A to do）（A）を説得して～させる
602,convince,[他] ①（A of B）（A）に（Bを）確信させる，（A that SV）（A）に（～を）確信させる ②（A to do）（A）を説得して～させる
603,inspire,[他] ①～を奮起させる，かき立てる ②（作品）に創作のヒントを与える
604,discourage,[他] ～のやる気をなくさせる，落胆させる
605,promote,[他] ①～を促進する ②（be［get］―d to ～）（～に）出世［昇進］する
606,boost,[他] ～を促進させる，増大させる
607,expand,[自] ①拡大する，膨張する [他] ②～を拡大する，膨張させる
608,extend,[他] ①～を延長する，広げる [自] ②伸びる，広がる
609,broaden,[他] ①～を広げる [自] ②広がる
610,spread,[他] ①～を広げる [自] ②広がる [名] ③広がり
611,tie,[他] ①（荷物など）を縛る ②（ひも，ネクタイなど）を結ぶ [名] ③ネクタイ（＝necktie)④（家族などの）きずな
612,fasten,[他] ①～を固定する ②（ボタンなど）をかける，留める
613,fix,[他] ①～を固定する ②～を修理する ③（主に 〈米〉）（食事，飲み物）を作る
614,install,[他] ①（機械など）を設置する ②～をインストールする
615,resist,[他] ①～を我慢する ②～に抵抗する
616,obey,[他] ～に従う
617,engage,[自] ①（in ～）（活動に）従事する ②（with ～）（理解のために、人や考えに）関与する [他] ③（関心、注意など）を引く
618,bump,[自] （into ～）①（～に）ぶつかる ②（～に）偶然出会う
619,bend,[自] ①身をかがめる [他] ②～を曲げる [名] ③（道の）カーブ
620,hug,[他] ①（人）を （愛情こめて）抱きしめる [名] ②抱擁
621,stare,[自] ①（at ～）（～を）じっと見つめる [名] ②凝視
622,gaze,[自] ①（at［on］～）（～を）見つめる [名] ②視線，凝視
623,glance,[自] ①ちらりと見る [名] ②ちらりと見ること
624,glimpse,[他] ①～がちらりと見える [名] ②ちらりと見えること
625,stretch,[他] ①（手足や体）を伸ばす，広げる [自] ②伸びる，広がる [名] ③（ひと続きの）広がり
626,stumble,[自] ①つまずく ②（across［into］～）（～に）偶然出会う
627,press,[他] ①～を（強く）押す ②～を押しつける，勧める [名] ③（the ―）報道機関，出版
628,drag,[他] ～を（ずるずると）引きずる
629,lean,[自] ①（against［on］～）（～に）寄りかかる ②（forward）身を乗り出す [形] ③（健康的に）痩せている
630,scratch,[他] ①～をひっかく，かく [名] ②ひっかき傷
631,bow,[自] ①おじぎする [名] ②おじぎ
632,nod,[自] ①うなずく ②（off）うたた寝する [名] ③うなずき，会釈
633,sigh,[自] ①ため息をつく [名] ②ため息
634,yawn,[自] ①あくびをする [名] ②あくび
635,sneeze,[自] くしゃみをする
636,bury,[他] ①～を埋める ②～を埋葬する
637,perform,[他] ①～を遂行する ②～を演じる，演奏する [自] ③（副詞を伴い）やる
638,adopt,[他] ①～を採用する ②～を養子にする、（動物など）を引き取る
639,escape,[自] ①（from ～）（～から）逃れる [他] ②～を避ける [名] ③逃亡
640,scatter,[他] ①～をまき散らす [自] ②（群衆などが）散る
641,fold,[他] ①～を折る ②（up）～を折りたたむ ③（腕）を組む [自] ④折りたためる
642,hang,[他] ①～を掛ける ②～を絞首刑にする [自] ③ぶら下がる
643,release,[他] ①～を解放する ②（映画など）を発表する，出す ③（ガスなど）を放出する [名] ④解放，発売
644,strike,[他] ①～を打つ ②（災害が）～を襲う ③（考えが人）に思い浮かぶ ④（A as B）（A）に（B という）印象を与える [名] ⑤ストライキ
645,beat,[他] ①～を打つ ②～に勝つ
646,protect,[他] ～を守る，保護する
647,twist,[他] ①～を（ねじ）曲げる ②（体の一部）をひねる，捻挫する
648,skip,[他] ～をサボる，抜かす
649,expose,[他] ①～をさらす ②（秘密，犯罪など）を暴露する
650,stir,[他] ①（液体など）を混ぜる ②（―up ）（感情など）を呼び覚ます
651,shake,[他] ①～を振る ②～を揺さぶる [自] ③（恐怖，寒さで）震える
652,polish,[他] ～を磨く
653,attend,[他] ①～に出席する，通う [自] ②（to ～）（～に）注意を向ける ③（to ～）（～を）世話する
654,imitate,[他] ～をまねる
655,conduct,[他] ①～を行う ②（電気，熱）を伝える [名] ③行為
656,struggle,[自] ①苦闘する，もがく [名] ②苦闘，もがくこと〈可算〉
657,burn,[自] ①焼ける [他] ②～を燃やす
658,cheat,[自] ①ごまかす [他] ②～をだます
659,participate,[自] （in ～）（～に）参加する
660,exist,[自] 存在する
661,arise,[自] 生じる
662,occur,[自] ①生じる ②（to （人））（考えなどが（人）に）思いつく
663,involve,[他] ①（be ―d in ～）（事件などに）巻き込まれる ②（be ―d in ～）（子育てなどに）参加する ③～を伴う
664,require,[他] ～を必要とする
665,counterpart,[名] （to ～）（～に）対応する［（～と）同等の］人［物，事］
666,advent,[名] ①到来 ②（the A―）キリストの降臨
667,maintain,[他] ①～を維持する ②（that SV）（～）を（強く）主張する
668,last,[自] ①（時間的に）続く ②（服などが）長持ちする [形] （the last ～）③この前の～，最後の～ ④もっとも～でない [名] ⑤（at ―）ついに
669,persist,[自] ①持続する，残る ②（in［with］～）（～を）貫く，（～に）固執する
670,examine,[他] ①～を調査する ②～を検査する
671,gain,[他] ①～を増す ②～を得る [名] ③利益，増加
672,obtain,[他] （資格，許可，情報など）を得る
673,acquire,[他] ①～を習得する ②～を獲得する ③～を買収する
674,search,[他] ①（A for B)（B（物）を求めてA（場所））を捜す [名] ②捜索，調査
675,logical,[形] 論理的な
676,scholarship,[名] ①奨学金〈可算〉 ②学問、（人文科学の）学識〈不可算〉
677,instruction,[名] （通例―s）指示
678,determine,[他] ①～を決める，～に大きく影響する ②（be ―d to do）～することを決意している ③（原因など）を特定する
679,conclude,[他] ①（that SV）～と結論を下す
680,distinguish,[他] ～を区別する
681,classify,[他] ～を分類する
682,estimate,[他] ①～を推定する，見積もる [名] ②（for ～）（～の）見積もり
683,organize,[他] ①（考えなど）をまとめる ②～を組織化する，取りまとめる
684,recognize,[他] ①（知り合いなど）が誰だかわかる ②（that SV）～を認識する
685,suppose,[他] ①（be ―d to do）～することになっている ②～と思う，仮定する
686,assume,[他] ①～と思い込む，決めつける ②～を引き受ける
687,care,[自] ①（否定文で）気にする ②世話をする [名] ③世話，心配
688,approve,[自] ①（of ～）（～を）認める，承認する [他] ②～を承認する
689,notice,[他] ①～に気がついている [名] ②通知，掲示，注意
690,aware,[形] 気づいている
691,conscious,[形] ①意識している，気づいている ②意識がある
692,concerned,[形] ①（with［about］～）（～に）関心を持っている，重視している ②（with ～）（～を）扱っている ③（about［for］～）（～を）懸念している
693,regard,[他] ①（A as B）（A）を（B と）みなす ②（副詞を伴い）～を評価する [名] ③（in ―）点 ④（―s）よろしくという挨拶
694,commit,[他] ①（oneself to ～ / be ―ed to ～）～に専念する ②（A to B)（A）を（B に）委ねる，充てる ③（犯罪など）を犯す
695,doubt,[他] ①～を疑う ②（that SV）～とは思わない [名] ③疑い
696,memorize,[他] ～を暗記する
697,forgive,[他] （人，過ち）を許す
698,grant,[他] ①（take ～ for granted）～を当然のことと思う ②（権利など）を与える [名] ③交付，補助金
699,recall,[他] ①～を思い出す ②（商品）を回収する，リコールする
700,outlook,[名] ①（人生，世界などに対する）考え方 ②（経済，天候などの）見通し
701,perspective,[名] ①（経験などで得られる）視点〈可算〉 ②（大局的な）見方，遠近法〈不可算〉
702,abandon,[他] ～を捨てる，放棄する
703,eliminate,[他] ①（不要な人，物，事）を排除する ②（be ―d）敗退する
704,rid,[他] （get ― of ～）①（不要品）を処分する ②～を取り除く
705,remove,[他] ①～を取り除く，取り去る ②（衣服）を脱ぐ
706,resource,[名] ①（―s）（石油などの）資源，（人，国の）財産 ②（―s）（困難に立ち向かう）力量 ③（万一の頼みの）手段
707,conservation,[名] ①保護 ②保存
708,preserve,[他] ①（自然など）を保護する ②（景観，平和，食品など）を保つ
709,disaster,[名] ①災害 ②大失敗
710,planet,[名] ①惑星 ②（the ―）地球
711,environment,[名] 環境，周囲（の状況）
712,horizon,[名] ①水平線，地平線 ②（―s）視野
713,layer,[名] （大気や地面などの）層 <可算>
714,agriculture,[名] 農業〈不可算〉
715,crop,[名] ①作物 ②収穫（高)[自] ③（up）生じる
716,soil,[名] 土，土壌
717,weed,[名] ①雑草，海草 [他] ②～の雑草を抜く
718,pollen,[名] 花粉
719,drown,[自] 溺れ死ぬ
720,leak,[自] ①漏れる [他] ②～を漏らす [名] ③漏れ
721,climate,[名] ①気候 ②（政治，経済，文化の）状況
722,atmosphere,[名] ①（the ―）大気 ②雰囲気 ③（the（Earth's）―）大気圏
723,forecast,[名] ①予報 [他] ②～を予報する
724,humid,[形] 湿気が多い
725,tropical,[形] 熱帯の
726,solar,[形] 太陽の
727,species,[名] 種〈単複同形〉
728,pesticide,[名] （虫や小動物などの）殺虫剤、駆除剤
729,extinct,[形] 絶滅した
730,feed,[他] ①～にえさを与える ②（子どもなど）を養う [自] ③（on ～）（～を）常食とする
731,energetic,[形] （人，運動などが）活発な
732,greedy,[形] 貪欲な
733,brave,[形] 勇敢な
734,generous,[形] 気前のよい
735,intellectual,[形] 知的な
736,curious,[形] ①（人が主語）好奇心が強い ②（物が主語）奇妙な，好奇心をそそる
737,imaginative,[形] 想像力豊かな
738,afford,[他] ①（can ―）～する余裕がある ②（SVO1O2）（O1に）O2を与える
739,eager,[形] 熱心な
740,selfish,[形] 利己的な，自分勝手な
741,aggressive,[形] ①攻撃的な ②積極的な
742,cruel,[形] 残酷な
743,addicted,[形] ～の中毒になっている
744,stubborn,[形] 頑固な
745,bold,[形] 大胆な
746,guilty,[形] ①申し訳なく思う，罪の意識がある ②（of ～）（～の）罪を犯した
747,innocent,[形] ①（of ～）（～に関して）無実の ②無邪気な
748,sincere,[形] ①（心から）誠実な ②（言動が）心からの，偽りのない
749,modest,[形] ①（人が）謙虚な ②（物が）大きくない，高くない
750,stupid,[形] ばかな
751,indifferent,[形] 無関心で
752,punctual,[形] （約束などの）時間を守る
753,coward,[名] 臆病者
754,precise,[形] 正確な，精密な
755,accurate,[形] 正確な
756,proper,[形] 適切な
757,tidy,[形] ①（主に〈英〉）きちんとした，整然とした [他] ②～を整頓する
758,efficient,[形] ①能率的な，無駄がない ②（人が）有能な
759,reasonable,[形] ①理にかなった ②（値段が）手ごろな
760,significant,[形] ①重要な、有意な ②（数量，増減などが）かなりの
761,precious,[形] ①（時間や命などが）貴重な ②（宝石などが）高価な
762,essential,[形] ①不可欠な [名] ②（―s）不可欠なもの
763,fundamental,[形] ①根本的な，基本的な [名] ②（―s）基本事項
764,outweigh,[他] （価値・重要性・影響力で）～に勝る
765,critical,[形] ①重大な，危機的な状況の ②批判的な
766,serious,[形] ①深刻な ②（人が）真剣な，本気の
767,complex,[形] ①複雑な [名] ②複合体（の建物)③強迫観念
768,complicated,[形] 複雑な、ややこしい
769,delicate,[形] ①繊細な，微妙な ②（人が）虚弱な
770,plain,[形] ①明白な，わかりやすい ②質素な [名] ③平野，原野
771,obvious,[形] 明白な
772,remarkable,[形] 注目すべき，すばらしい
773,outstanding,[形] 傑出した，目立った
774,various,[形] さまざまな
775,diversity,[名] 多様性
776,sort,[名] ①種（類)②（副詞的に）（― of）多少 [他] ③～を分類する
777,marvelous,[形] 驚くべき、素晴らしい
778,active,[形] 積極的な，活発な
779,positive,[形] ①前向きな，積極的な ②確信している
780,pure,[形] ①純粋な ②（水，空気が）澄んだ
781,steady,[形] 着実な，一定の
782,flexible,[形] 柔軟な，融通のきく
783,ripe,[形] 熟した
784,stable,[形] ①安定した [名] ②馬小屋，きゅう舎
785,negative,[形] 否定的な，否定の
786,vague,[形] 曖昧な，漠然とした
787,weird,[形] 変な
788,rough,[形] ①（表面が）粗い ②おおざっぱな ③（海，天候などが）荒れている
789,severe,[形] ①（天候，批判，罰則などが）厳しい ②（けが，問題などが）ひどい
790,passive,[形] 受動的な，消極的な
791,vain,[形] ①（in ―）無駄に ②（努力などが）無駄な ③うぬぼれの強い
792,fake,[形] ①偽の，偽造の [名]②偽造品
793,risky,[形] 危険な，危うい
794,odd,[形] ①奇妙な ②奇数の ③半端な，雑多な [名] ④〈英〉（the ―s）可能性
795,ignorant,[形] 無知の
796,contrast,[名] ①対比 [他] ②～を対比する [自]③対照をなす
797,valid,[形] ①（理由，主張などが）妥当な，正当な ②（切符などが）有効な
798,rare,[形] 珍しい
799,casual,[形] ①気楽な ②ふとした，何気ない
800,available,[形] ①手に入る，利用できる ②（人の予定が）空いている
801,practical,[形] ①（人，知識が）現実的な，実際の ②（発明，道具などが）実用的な，実践的な
802,abstract,[形] ①抽象的な [名] ②（論文などの）要旨
803,brand-new,[形] 新品の，真新しい
804,secondhand,[形] ①中古の ②間接的な
805,rapid,[形] ①急速な [名] ②（―s）急流
806,urgent,[形] 緊急の，差し迫った
807,shallow,[形] ①浅い ②（人，言動などが）浅はかな
808,sharp,[形] ①（変化，方向転換などが）急激な ②（言葉が）きつい ③（刃物，感覚，人などが）鋭い [副] ④（時刻が）きっちりで
809,calm,[形] ①落ち着いた [自] ②落ち着く [他] ③～を落ち着かせる
810,naked,[形] （人が）裸の，むき出しの
811,independent,[形] ①独立した，無所属の [名] ②無所属の人
812,tense,[形] ①張り詰めた ②（人が）緊張した [名] ③時制
813,narrow,[形] ①狭い [他] ②～を狭くする，細める
814,vacant,[形] 空いている，使用されていない
815,vivid,[形] ①（記憶，描写などが）鮮明な ②（色が）鮮明な
816,awkward,[形] ①ぎこちない ②気まずい ③扱いにくい
817,objective,[形] ①客観的な [名] ②目標
818,manual,[形] ①手を使う，身体を使う ②手動の [名] ③手引き書
819,alike,[形] ①似ている [副] ②（A and B ―）（A もB も）同様に
820,alien,[形] ①異質な ②外国（人）の、地球圏外の
821,tend,[自] （to do）～する傾向にある
822,deserve,[他] ～に値する
823,fragment,[名] 破片〈可算〉
824,range,[名] ①範囲 [自] ②（from A to B）（A からB の）範囲に及ぶ
825,scale,[名] ①規模 ②（―s）体重計 ③うろこ
826,unique,[形] ①（to ～）（～に）特有の，独自の ②独特の
827,particular,[形] ①ある特定の，特有の ②（about ～）（～の）好みがうるさい [名] ③（in ―）特に（＝particularly）
828,typical,[形] 典型的な
829,general,[形] ①一般的な，全体の [名] ②大将，将軍
830,ordinary,[形] 平凡な，ふつうの
831,account,[自] （for ～）①（割合を）占める ②（～の原因を）説明する [名] ③説明 ④口座
832,calculate,[他] ～を計算する
833,measure,[他] ①～を測る [自] ②～の寸法がある [名] ③（―s）手段
834,decline,[自] ①減る，衰退する [他] ②～を断る [名] ③衰退，減少
835,split,[他] ①～を割る ②～を分裂させる [自] ③分裂する [名] ④分裂，裂け目，割れ目
836,volume,[名] ①容積，体積 ②ボリューム，音量 ③（全集などの）1巻
837,proportion,[名] ①比率 ②部分 ③（―s）規模，大きさ
838,dozen,[名] ①ダース ②（―s of ～）数十の～
839,amount,[名] ①量 [自] （to ～）②（合計が）～に達する ③結局～になる
840,mass,[名] ①大量 ②（the ―es）大衆 ③かたまり ④質量 ⑤（M―）ミサ
841,shortage,[名] 不足〈可算〉
842,enormous,[形] 莫大な，巨大な
843,spare,[形] ①余分な，予備の [他] ②（時間やお金，労力）を割く ③～を惜しむ
844,arrange,[他] ①～を手配する、～の段取りをつける ②～を整理する
845,adapt,[自] ①適応する [他] ②～を適応させる
846,match,[他] ①～と調和する ②～に匹敵する [名] ③釣り合う人［物］，好敵手
847,fit,[他] ①（サイズが人）に合う [形] ②健康な ③（to do）（～するのに）適した
848,emergency,[名] ①緊急事態 ②（形容詞的に）緊急の
849,occasion,[名] ①場合 ②行事，祝い事
850,accidental,[形] 偶然の、偶発的な
851,current,[形] ①最新の，今の ②流通して [名] ③流れ，風潮
852,temporary,[形] 一時的な
853,permanent,[形] 永久的な
854,previous,[形] （時間，順序で）前の，以前の
855,former,[名] ①（the ―）前者 [形] ②元の、前の、旧
856,contemporary,[形] ①現代の ②同時代の [名] ③同時代の人
857,lately,[副] 最近
858,immediately,[副] ①すぐに ②直接に
859,deadline,[名]（for ～）（～の）締め切り <可算>
860,decade,[名] 10年
861,supply,[他] ①～を供給する [名] ②供給
862,replace,[他] ①～に取って代わる ②（A with B）（A）を（B に）取り替える
863,exchange,[他] ①～を交換する [名] ②交換
864,substitute,[他] ①（A for B)（B の）代わりに（A）を用いる [自] ②（for ～）（～の）代わりになる，代わりをする [形] ③代わりの [名] ④（for ～）（～の）代用品，代理人
865,submit,[他] ①（願書，辞表など）を提出する [自] ②（to ～）（～に）服従する
866,alternative,[名] ①（to ～）（～の）代わりのもの ②選択肢 [形] ③代わりの、既存のものとは違う
867,deliver,[他] ①～を配達する ②（演説など）をする
868,enclose,[他] ①～を同封する ②～を囲む，閉じ込める
869,envelope,[名] 封筒
870,trick,[名] ①（悪意のない）いたずら ②（巧妙な）手口，策略 ③芸，手品 ④（of ～）秘けつ [他] ⑤～をだます
871,load,[名] ①荷（物）〈可算〉 [他] ②（A with B）（A）に（B を）積む
872,content,[名] ①中身，内容 [形] ②（with ～）（～に）満足して
873,household,[名] ①（集合的に）所帯，家庭〈可算〉 [形] ②家庭の
874,good,[名] ①（―s）商品 ②利益 [形] ③（a ― many ～）かなりの
875,luxury,[名] ①高級（品），ぜいたく品 ②（形容詞的に）豪華な，ぜいたくな
876,credit,[名] ①（― card）クレジットカード ②功績，手柄 ③（大学の）単位 [他] ④～の功績を認める
877,questionnaire,[名] アンケート
878,reservation,[名] ①予約 ②慎重な姿勢
879,fuss,[名] 大騒ぎ
880,reward,[名] ①報酬，褒美 ，懸賞金 [他] ②～に褒美を与える，報いる
881,farewell,[名] 別れ（のあいさつ）
882,reception,[名] ①もてなし，歓迎会 ②（ホテルの）フロント ③受信状況
883,portion,[名] ①（食事の）1盛り ②（食堂などでの）1人前 ③一部
884,laundry,[名] ①〈米〉洗濯 ②〈米〉洗濯物 ③クリーニング店（＝a cleaner's）
885,nap,[名] ①昼寝，仮眠 [自] ②昼寝をする，仮眠をとる
886,wake,[自] ①目が覚める [他] ②（眠っている人）を起こす
887,vending machine,[名] 自動販売機
888,grocery,[名] ①食料雑貨店 ②（―ies）食料雑貨類
889,appointment,[名] ①（病院などの）予約，（面会の）約束 ②（役職などの）任命，指名
890,consult,[他] ①～に相談する ②（辞書）を引く [自] ③（with ～）（～に）相談する
891,register,[他] ①～を登録する，記録する [自] ②（for ～）（授業などに）登録する ③（ホテルなどで）記帳する [名] ④登録（票），登録簿
892,dye,[他] ①～を染める [名] ②染料
893,subscribe,[自] ①（to ～）（～を）定期購読する，加入している ②（主に否定文で）（to ～）（考えなどを）支持する
894,guarantee,[他] ①～を保証する [名] ②保証（期間）
895,wipe,[他] ①～を拭く ②～を一掃する，壊滅させる
896,sweep,[他] ①（床，地面）を掃く ②（風，波などが）～を押し流す
897,transfer,[自] ①（電車などを）乗り換える ②転勤［転校，移籍］する [他] ③（物，活動拠点など）を移す，～を転勤［転属］させる ④（銀行で）～を振り込む
898,divorce,[自] ①離婚する [他] ②～と離婚する [名] ③離婚
899,fate,[名] 運命，宿命
900,destiny,[名] 運命
901,flavor,[名] 風味，味〈可算〉
902,perfume,[名] ①香り ②香水
903,ingredient,[名] ①（料理などの）材料 ②（何かを達成するための）要因 ③成分
904,bitter,[形] ①苦い，つらい ②憤慨して
905,aisle,[名] 通路
906,track,[名] ①足跡，小道 ②（鉄道の）線路，プラットホーム [他] ③～を追跡する
907,district,[名] 地区
908,facility,[名] ①施設，設備 ②能力，器用さ
909,height,[名] ①高さ ②高い所 ③最盛期
910,distant,[形] 遠い
911,locate,[他] ①（be ―d）～に位置している，ある ②～の場所を見つける
912,occupy,[他] ～を占める
913,surround,[他] ～を取り囲む，包囲する
914,classical,[形] ①（音楽，バレエ，ダンスなどで）クラシックの ②古典的な
915,civilization,[名] 文明
916,heritage,[名] 遺産
917,script,[名] ①台本，脚本 ②（ある言語の）文字 ③（手書きの）文字
918,tale,[名] 話
919,literature,[名] ①文学 ②文献 （①②ともに〈不可算〉）
920,tragedy,[名] 悲劇〈可算〉
921,poetry,[名] 詩〈不可算〉
922,biography,[名] 伝記
923,term,[名] ①用語，言葉 ②（long［short］などを伴い）期間，学期，任期 ③（be on ～ ―s）（～の）間柄（である)④（―s）（契約などの）条件
924,proverb,[名] 諺
925,dialect,[名] 方言
926,fluent,[形] 流暢な
927,translate,[他] ①～を翻訳する [自] ②（into ～）（結果として）～に変わる
928,define,[他] ①～を定義する ②～を規定する
929,interpret,[他] ①～を解釈する ②～を通訳する [自] ③通訳する
930,quote,[他] ①～を引用する ②～に価格を提示する [名] ③引用文 ④提示価格，見積り
931,literally,[副] 文字どおりに
932,indicate,[他] ①（データなどが）～を示す ②～を指し示す
933,reveal,[他] ～を明らかにする，暴露する
934,announce,[他] ～を発表する
935,broadcast,[他] ①～を放送する [名] ②（１回の）放送
936,prove,[他] ①～を証明する ②（to be ～）～だとわかる
937,advertise,[他] ～を宣伝する
938,clarify,[他] ～を明らかにする
939,seek,[他] ①～を求める ②（to do）～しようと努める
940,entertain,[他] ①～を楽しませる ②～をもてなす
941,amuse,[他] ～を楽しませる
942,attract,[他] ～を引きつける，魅了する
943,fascinate,[他] ～を魅了する，～にとても興味をもたせる
944,absorb,[他] ①（be ―ed in ～）～に没頭する ②～を吸収する
945,fond,[他] ①（be ― of～）（～が）好きだ ②懐かしい
946,scare,[他] ～をおびえさせる
947,alarm,[他] ①～をぎょっとさせる [名] ②恐怖，不安
948,amaze,[他] ～を驚かせる
949,irritate,[他] （長期にわたって）～をいらいらさせる
950,upset,[他] ①～を動揺させる ②（均衡など）を乱す [形] ③動揺して，腹を立てて
951,puzzle,[他] ①～を当惑させる [名] ②難問，パズル
952,confuse,[他] ①～を混乱させる，困惑させる ②（A with［and］ B)（A）を（Bと）混同する
953,bore,[他] ～をうんざりさせる，退屈させる
954,frustrate,[他] ①～を欲求不満にさせる ②（計画など）を挫折させる
955,disappoint,[他] ～を失望させる
956,embarrass,[他] ～に恥ずかしい思いをさせる，困惑させる
957,ashamed,[形] 恥ずかしい
958,uneasy,[形] 不安な，胸騒ぎがする
959,hesitate,[自] ためらう
960,reluctant,[形] （to do）（～するのは）気が進まない
961,tremble,[自] 震える
962,boast,[自] ①自慢する [他] ②（場所や組織が）～を誇りにしている
963,jealous,[形] （of ～）（～に）嫉妬した
964,envy,[他] ①～を羨ましく思う [名] ②羨望
965,yell,[自] ①叫ぶ，大声をあげる [名] ②叫び，わめき声
966,respect,[他] ①（人）を尊敬する ②（物）を尊重する [名] ③（for ～）（～に対する）尊敬，尊重 ④（in ―）点
967,despair,[名] 絶望
968,emotion,[名] （特に強い）感情〈可算〉
969,sympathy,[名] ①同情 ②共感
970,shame,[名] ①残念なこと ②恥
971,confidence,[名] ①自信 ②（in ～）（～に対する）信頼
972,courage,[名] 勇気
973,passion,[名] 情熱
974,sorrow,[名] 悲しみ
975,ignore,[他] （人，物）を無視する
976,offend,[他] （人，物が）～を怒らせる，～の気分を害する
977,depress,[他] ～を憂うつにさせる，落ち込ませる
978,owe,[他] （A to B)①（A）は（B の）おかげだ ②（A）を（Bに）借りている
979,fear,[名] ①恐怖 [他] ②～を恐れる ③～を心配する
980,method,[名] 方法
981,medium,[名] ①（情報伝達）手段，媒体，メディア [形] ②中間の
982,means,[名] ①手段〈単複同形〉 ②（特定な表現で）財産，収入
983,extent,[名] 程度
984,extremely,[副] 極度に，非常に
985,total,[形] ①全体の ②（a ―）まったくの [名] ③合計
986,largely,[副] ①大部分は ②主に
987,moderate,[形] 適度な，節度のある
988,somewhat,[副] いくぶん
989,subtle,[形] かすかな
990,possibly,[副] ①ひょっとすると ②（cannot ―）どうしても（～できない）
991,eventually,[副] 最終的に，ついに
992,necessarily,[副] （not ―）必ずしも（～ない）
993,frankly,[副] 率直に
994,ironically,[副] 皮肉なことに
995,moreover,[副] その上
996,otherwise,[副] ①さもなければ ②ほかの点では ③ほかの方法で
997,regardless,[副] （of ～）（～とは）無関係に
998,worth,[前] ①～の価値がある ②（― doing）（～する）価値がある [名] ③価値，（～）相当
999,according to,[前] ①（調査，人の話など）によれば ②（能力など）に応じて
1000,despite,[前] ～にもかかわらず
1001,propose,[他] ①～を提案する [自] ②（to ～）（～に）結婚を申し込む
1002,dismiss,[他] ①（意見や考えなど）を退ける ②～を解雇する
1003,bless,[他] ～を祝福する
1004,glory,[名] 栄光
1005,compliment,[名] ①褒め言葉，賛辞 [他] ②～を褒める
1006,feast,[名] ①宴会，祝宴 ②とても楽しいこと，喜ばせるもの
1007,declare,[他] ①～を宣言する ②（税関や税務署で）～を申告する
1008,highlight,[他] ①～を強調する [名] ②呼び物，目玉商品，ハイライト
1009,imply,[他] ～をほのめかす，（暗に）～を意味する
1010,recite,[他] ～を暗唱する
1011,ray,[名] ①光線 ②放射線 ③（a ― of）一縷の，わずかな
1012,radiation,[名] 放射線
1013,laboratory,[名] 研究室，研究所
1014,oxygen,[名] 酸素
1015,molecule,[名] 分子
1016,compound,[名] ①化合物 [形] ②複合的な
1017,tissue,[名] ①組織 ②ティッシュペーパー
1018,cell,[名] ①細胞 ②電池 ③独房 （①②③いずれも〈可算〉)
1019,gene,[名] 遺伝子〈可算〉
1020,substance,[名] ①物質 ②本質，根拠 <不可算>
1021,solid,[形] ①固体の ②ぎっしり詰まった [名] ③固体
1022,satellite,[名] ①（月などの）衛星 ②人工衛星
1023,orbit,[名] ①軌道 [他] ②（惑星などが）～を周回する
1024,launch,[他] ①（ロケットなど）を打ち上げる ②（運動，事業など）を始める [名] ③打ち上げ，開始，発売
1025,attempt,[名] ①試み [他] ②（to do）（～しようと）試みる
1026,capacity,[名] ①能力 ②容量，収容力
1027,capable,[形] ①（of ～）（～する）力がある ②有能な
1028,attain,[他] ①（人が主語）～を達成する ②（物，人が主語）～に到達する
1029,desperate,[形] ①必死の ②（状況が）絶望的な
1030,dedicate,[他] （A to B）（A）を（B に）捧げる
1031,pain,[名] ①苦痛 ②（―s）苦労
1032,strain,[名] ①（心身の）負担，無理 [他] ②（目や筋肉など）を痛める
1033,remedy,[名] ①治療法，治療薬 ②改善策，対策（①②いずれも〈可算〉）
1034,pharmacy,[名] （調剤）薬局
1035,physician,[名] ①〈米〉医師 ②〈英〉内科医
1036,disorder,[名] （心身の）不調
1037,pregnant,[形] 妊娠した
1038,clinical,[形] 臨床の
1039,heal,[他] ①～を治す [自] ②治る
1040,infect,[他] （人，動物，地域）に感染させる，伝染する
1041,ankle,[名] 足首
1042,thumb,[名] 親指
1043,forehead,[名] 額，おでこ
1044,chin,[名] 下あご，あごの先端
1045,chest,[名] ①胸（部)②（大きな木の）箱，密閉容器
1046,breast,[名] （主に女性の）胸，乳房
1047,lung,[名] 肺〈可算〉
1048,organ,[名] ①臓器，(動植物の)器官 ②(楽器)オルガン（①②ともに<可算>）
1049,vision,[名] ①視力，視野 ②未来像 ③未来を見通す力，先見の明
1050,skeleton,[名] 骸骨，骨格
1051,sensation,[名] ①感覚 ②（説明し難い）感情
1052,code,[名] ①（服装などの）規定 ②暗号
1053,agenda,[名] 議題，協議事項
1054,liberty,[名] 自由
1055,committee,[名] 委員会
1056,humanity,[名] ①（集合的に）人類 ②（the ―ies）人文科学 ③人間性
1057,mankind,[名] （集合的に）人類
1058,authority,[名] ①権威 ②権力 ③（―ies）当局
1059,justice,[名] 正義
1060,insurance,[名] 保険〈不可算〉
1061,hardship,[名] （主に経済的）苦難
1062,poverty,[名] 貧困〈不可算〉
1063,chaos,[名] 大混乱，混沌〈不可算〉
1064,isolation,[名] 孤立，分離，孤独感
1065,region,[名] 地域
1066,proof,[名] ①証拠，証明〈不可算〉 [形] ②（複合語で）～を防ぐ，～に耐える
1067,warranty,[名] 保証
1068,principle,[名] ①原理，原則 ②主義，信念
1069,origin,[名] 起源
1070,setting,[名] ①環境，状況 ②（小説，劇，機械などの）設定，舞台（①②ともに<可算>）
1071,mission,[名] ①任務，使命 ②使節団 ③（主にキリスト教の）布教（団）
1072,project,[名] ①計画，企画 [他] ②（予算など）を見積もる ③～を投影する
1073,monument,[名] 記念碑，遺跡，史跡
1074,revolution,[名] 革命
1075,contract,[名] ①契約 [他] ②～を契約する ③（病気）に感染する
1076,infrastructure,[名] インフラ、基本的施設
1077,negotiate,[自] ①（with ～）（～と）交渉する [他] ②（交渉の上で，条件など）を取り決める
1078,cooperate,[自] （with ～）（～と）協力する，（in ～）（～を）協力する
1079,restore,[他] ①（治安など）を回復する ②（古い建物，絵など）を修復する
1080,found,[他] ～を創立する
1081,conservative,[形] 保守的な
1082,affair,[名] ①（―s）情勢 ②（スキャンダラスな）事件 ③情事，浮気
1083,agency,[名] ①（政府）機関 ②代理店
1084,council,[名] 議会
1085,kingdom,[名] ①（the ～ kingdom）～界，社会 ②王国
1086,republic,[名] 共和国
1087,empire,[名] 帝国
1088,aid,[名] 援助，救援物資〈不可算〉
1089,reform,[名] 改革
1090,minister,[名] ①大臣 ②牧師
1091,parliament,[名] 議会
1092,territory,[名] ①領土 ②（動物などの）縄張り，（学問などの）領域
1093,poll,[名] ①（政治関連の）世論調査 ②投票 [他] ③（票）を得る
1094,fortune,[名] ①財産 ②運
1095,property,[名] ①（主に集合的）財産，資産 ②（物質の）特性 ③（建物を含む）所有地
1096,fund,[名] ①（―s）資金 ②基金 [他] ③～に資金を出す
1097,stock,[名] ①株（式)②在庫品，蓄え
1098,labor,[名] ①労働 ②（集合的に）労働者 ③努力，陣痛
1099,overwork,[自] ①働きすぎる [他] ②～を働かせすぎる，酷使する [名] ③過労
1100,firm,[名] ①会社 [形] ②（土台，信念などが）固い ③（体が）引き締まった
1101,union,[名] ①労働組合 ②合併 ③連邦
1102,administration,[名] ①経営，運営 ②行政 ③政権 （①②は〈不可算〉）
1103,secretary,[名] ①秘書 ②（米国の各省の）長官，事務局長
1104,editor,[名] （新聞，雑誌などの）編集長，（書籍の）編集者
1105,client,[名] ①依頼人 ②（サービス業の）取引先
1106,recruit,[他] ①（団体・組織が）～を新規採用する [名] ②新兵，新人
1107,basis,[名] ①基礎，根拠 ②（on a ～ basis）（～を）基準（として）
1108,element,[名] ①（最も重要な）要素，（化学の）元素 ②（the ―s）自然の力，悪天候 ③（an ― of ～）少しの～
1109,constitute,[他] ①（主語が複数）～を構成する ②（主語が単数）～である
1110,unify,[他] ～を統一する
1111,combine,[他] ①（A with B)（A）を（B と）結びつける，同時に行う [自] ②結びつく
1112,unite,[自] ①団結する [他] ②～を団結させる
1113,link,[名] ①関連、つながり [他] ②（A to B）（A）を（Bに）関連づける
1114,relevant,[形] 関連のある，重要な
1115,murder,[名] ①殺人 ②（形容詞的に）殺人の [他] ③（計画的に）～を殺す
1116,arrest,[他] ①～を逮捕する [名] ②逮捕，（医学用語）停止
1117,prison,[名] 刑務所
1118,vice,[名] ①（売春，麻薬などの）犯罪〈不可算〉 ②悪徳 [形] ③副～
1119,witness,[名] ①目撃者，証人 ②証言 [他] ③～を目撃する
1120,bullet,[名] 弾丸
1121,sword,[名] 剣
1122,wound,[名] ①傷 [他] ②～を傷つける
1123,triumph,[名] ①勝利 [自] ②勝利する
1124,military,[形] 軍事的な
1125,strategy,[名] 戦略
1126,conquer,[他] ①（国や地域）を征服する ②（病気や恐怖など）を克服する
1127,defend,[他] （A from B）（B からA）を守る
1128,dominate,[他] ～を支配する
1129,rob,[他] ①（銀行など）を襲う ②（A of B）（A）から（B を）奪う
1130,deprive,[他] （A of B)（A）から（B を）奪う
1131,devastate,[他] ①（町など）を壊滅させる ②（人）を打ちのめす
1132,crash,[自] ①激突する ②（飛行機が）墜落する [名] ③激突，墜落
1133,hazard,[名] 危険（になり得るもの）<可算>
1134,debris,[名] 破片，残骸
1135,orphan,[名] 孤児
1136,slave,[名] ①奴隷 ②（to ～）（比喩的に）（～の）奴隷
1137,acquaintance,[名] ①知人 ②面識，（ちょっとした）知識
1138,merchant,[名] 商人
1139,resident,[名] ①住人，居住者 ②滞在者 [形] ③住んでいる
1140,crew,[名] ①（集合的に）乗組員 ②（取材などの）チーム
1141,chase,[他] ①～を追いかける [名] ②追跡
1142,proceed,[自] ①（順を追って）進む ②（to do）（さらに続けて）～する
1143,fade,[自] （色，記憶などが）薄れる
1144,dissolve,[自] ①溶ける [他] ②～を溶かす ③（議会など）を解散する
1145,float,[自] ①浮かぶ [他] ②～を浮かべる
1146,sink,[自] ①沈む [他] ②～を沈める [名] ③（台所の）流し
1147,bounce,[自] ①（ボールなどが）跳ねる [他] ②（宛先不明で）～を返送する
1148,transform,[他] ①～を（大幅に）変える [自] ②（大幅に）変形する，変身する
1149,shift,[名] ①（考え方の）転換 ②（勤務の）交替
1150,modify,[他] ～を修正する
1151,revise,[他] （制度，予測，論文など）を修正する，改正する
1152,enhance,[他] ～を向上させる
1153,lower,[他] ～を下げる
1154,voyage,[名] 航海，船旅
1155,confirm,[他] ①～を確認する ②～を裏付ける
1156,ensure,[他] ～を確実にする
1157,address,[他] ①～に取り組む ②～に呼びかける [名] ③演説 ④住所
1158,approach,[名] ①（to ～）（～への）取り組み方，接近 [他] ②～に取り組む，接近する
1159,resolve,[他] ①～を解決する ②（to do）（～する）決心をする
1160,settle,[他] ①（紛争など）を解決する ②～を置く，据える [自] ③定住する ④（on ～）（～を）決める
1161,enrich,[他] ～を豊かにする
1162,warn,[他] ①～に警告する [自] ②（of[against]～）（～に対して）警告する
1163,force,[他] ①～に強いる [名] ②力，武力
1164,appeal,[自] ①（to ～）（～に）訴える [名] ②魅力，人気 ③（for ～）（～に対する）訴え
1165,applause,[名] 拍手〈不可算〉
1166,leap,[自] ①跳ぶ [名] ②躍進，急増
1167,grab,[他] ①（ぐいっと）～をつかむ ②（急いで食事，睡眠）をとる
1168,seize,[他] ①～をつかむ ②（麻薬など）を押収する，（犯人）を捕らえる
1169,cast,[他] ①～を投げる ②（光など）を投げかける ③～に役を与える
1170,stun,[他] ①～を気絶させる ②～をぼう然とさせる
1171,illuminate,[他] ①～を照らす ②（問題など）を解明する
1172,uncover,[他] ～を明らかにする，暴く
1173,mend,[他] ～を修繕する
1174,react,[自] （to ～）（～に）反応する
1175,endure,[他] （長期にわたり）～に耐える
1176,bind,[他] ～を結びつける，縛る
1177,encounter,[他] ①～に偶然出会う ②（問題，反対など）に遭う [名] ③出会い
1178,trace,[他] ①～を捜し出す ②～の追跡調査をする [名] ③（微妙な）跡
1179,undergo,[他] ～を経験する
1180,seal,[他] ①～を密封する [名] ②（personal ―）印鑑，ハンコ
1181,incorporate,[他] ～を取り入れる
1182,emerge,[自] ①（隠れていたものが）現れる ②（国家などが）台頭する
1183,unfold,[自] ①展開する，はっきりしてくる [他] ②～を広げる
1184,derive,[自] ①（from ～）（～に）由来する [他] ②～を引き出す，得る
1185,generate,[他] （電気，利益など）を生み出す
1186,possess,[他] ～を所有している
1187,retain,[他] ～を保持する
1188,secure,[他] ①（場所，地位，契約など）を確保する [形] ②安全で，守られて
1189,capture,[他] ①～を捕らえる [名] ②捕獲，（敵地の）攻略
1190,monitor,[他] ①～を監視する [名] ②（コンピュータの）画面
1191,investigate,[他] ①（研究班などが）～を調査する ②（警察が）～を捜査する
1192,detect,[他] ～を探知する，（病気など）を発見する，（うそなど）を見抜く
1193,inquiry,[名] ①（into ～）（～の）調査 ②質問，問い合わせ
1194,specialize,[自] （in ～)①〈英〉（～を）専攻する ②（～を）専門にする
1195,semester,[名] （米，日本などの２学期制の）学期
1196,biology,[名] 生物学
1197,ecology,[名] 生態（学）
1198,philosophy,[名] ①（学問としての）哲学〈不可算〉 ②人生哲学，考え方〈可算〉
1199,geography,[名] 地理（学）
1200,institution,[名] ①（大学，病院などの）機関 ②（結婚などの）制度
1201,faculty,[名] ①（生まれ持った）能力 ②（大学の）学部 ③（大学の）全教員
1202,intermediate,[形] ①（授業・教材が）中級の ②中間の
1203,notion,[名] 考え
1204,concept,[名] 概念，考え
1205,meditation,[名] ①瞑想 ②熟考
1206,insight,[名] ①（into ～）（～に対する）洞察（力)②見識
1207,caution,[名] ①用心 ②警告 [他] ③～に注意［警告］を与える
1208,will,[名] ①意志 ②遺書
1209,option,[名] 選択肢，選択（の自由）
1210,prospect,[名] 見通し
1211,cherish,[他] ～を大切にする，胸に抱く
1212,intend,[他] （to do）～するつもりだ
1213,suspect,[他] ①（that SV）～ではないかと思う ②～に嫌疑をかける [名] ③容疑者
1214,identify,[他] ①～を特定する，《生物》～を同定する ②（A with B）（A）を（B と）同一視する [自] ③（with ～）（～と）一体感をもつ，（～に）なりきる
1215,permit,[他] ①～を許可する [名] ②許可証
1216,acknowledge,[他] ～を認める
1217,perceive,[他] ①（A as B）（A）を（B だと）認識する ②～を知覚する
1218,evaluate,[他] ～を（正しく）評価する
1219,cultivate,[他] ①～を耕す ②～を育む ③～を磨く
1220,shade,[名] ①日陰，（絵画，写真の）陰の部分，ブラインド ②（ーs）（意味などの）わずかな違い
1221,breeze,[名] そよ風
1222,desert,[名] ①砂漠 [他] ②～を見捨てる
1223,fog,[名] 霧
1224,moisture,[名] 湿気，水分
1225,damp,[形] 湿った，じめじめした
1226,path,[名] （小）道
1227,trail,[名] ①山道 ②跡 ③（a ― of destruction）（破壊の）爪跡
1228,stream,[名] ①小川 ②（a ― of ～）（～の）流れ
1229,tide,[名] ①潮（の干満），潮流 ②時流
1230,reef,[名] （岩や砂の）礁
1231,habitat,[名] 生息地
1232,volcano,[名] 火山
1233,mine,[名] ①鉱山 ②地雷（＝landmine）
1234,swallow,[名] ①ツバメ [他] ②～を飲み込む
1235,web,[名] ①（クモの）巣 ②インターネット（www＝the World Wide Web）
1236,mosquito,[名] 蚊
1237,cattle,[名] ウシ
1238,kitten,[名] 子ネコ
1239,organism,[名] 生物
1240,wildlife,[名] 野生生物
1241,beast,[名] 野獣
1242,ape,[名] 類人猿
1243,flock,[名] ①（鳥，羊の）群れ [自] ②群れる
1244,vein,[名] 静脈
1245,breed,[自] ①繁殖する [他] ②～を繁殖させる ③～を引き起こす [名] ④品種，血統
1246,reproduce,[自] ①繁殖する [他] ②～を繁殖させる ③（音，絵など）を再現する
1247,talkative,[形] おしゃべりの
1248,earnest,[形] ①真面目な [名] ②（in ―）真面目（に）
1249,diligent,[形] 勤勉な
1250,principal,[形] ①主要な [名] ②〈米〉校長
1251,prime,[形] ①（目標，容疑者などが）最重要な [名] ②素数
1252,definite,[形] 明確な
1253,evident,[形] 明らかな
1254,prominent,[形] ①（物が）目立った ②（人が）著名な，重要な
1255,marked,[形] （名詞の前で）際立った，著しい
1256,grace,[名] ①優美さ ②（say ―）（食事の前後の）感謝の祈り（をささげる）
1257,charm,[名] ①魅力 ②（a good ― luck ―）お守り，まじない
1258,fancy,[形] ①高級な [他] ②〈英〉～が欲しい，～したい ③～と思う
1259,rational,[形] 理性的な
1260,magnificent,[形] 壮大な，素晴らしい
1261,superior,[形] ①（be ― to ～）（～）より優れている [名] ②上役，上司
1262,loyal,[形] （to ～）（～に）忠実な
1263,horrible,[形] （物，天気などが）とてもひどい，ぞっとする
1264,miserable,[形] 悲惨な，とても不幸な
1265,dull,[形] ①退屈な ②切れ味が悪い ③（人，感覚などが）鈍い
1266,nasty,[形] （人，物，発言などが）不快な
1267,insane,[形] 正気でない
1268,ridiculous,[形] ばかげた
1269,rotten,[形] 腐った
1270,notorious,[形] （for ～）（～で）悪名高い
1271,evil,[形] ①（道徳的に）悪い [名] ②悪
1272,mess,[名] ①乱雑 [自] ②（with ～）（～を）からかう，ちょっかいを出す
1273,vast,[形] ①（地域，土地が）広大な ②（数量が）莫大な
1274,huge,[形] 巨大な
1275,tiny,[形] とても小さな
1276,sphere,[名] ①球体 ②領域，範囲
1277,strip,[名] ①細長い一片 [他] ②（罰として）～から奪う [自] ③裸になる
1278,vessel,[名] ①（血液などを通す）管 ②（大型の）船
1279,internal,[形] ①内部の，体内の ②国内の
1280,mobile,[形] ①流動的な [名] ②携帯電話
1281,steep,[形] ①（坂などが）険しい ②（増減が）急な，（価格などが）異常に高い
1282,intense,[形] （感情，競争などが）強烈な
1283,inevitable,[形] 避けられない，必然的な
1284,neutral,[形] ①中立の [名] ②中立
1285,brief,[形] ①手短な，簡潔な [名] ②要約
1286,bare,[形] ①むき出しの ②最低限の
1287,mutual,[形] ①（感情，行為が）相互の ②（友だち，趣味などが）共通の
1288,potential,[形] ①潜在的な [名] ②潜在能力，可能性〈不可算〉
1289,tough,[形] ①たくましい，頑強な ②骨の折れる，厳しい
1290,conventional,[形] 従来の，慣習的な
1291,supreme,[形] 最高の
1292,resemble,[他] ～に似ている
1293,contrary,[名] ①（on the ―）それどころか [副] ②（― to A）（A とは）反対に [形] ③（（名詞)to the ―）それとは反対の～
1294,category,[名] 範疇
1295,scope,[名] 範囲
1296,given,[形] ①（時間，量などが）定められた [前] ②～を考慮すると
1297,peculiar,[形] ①（to ～）（～に）固有の ②独特な，変な
1298,sufficient,[形] 十分な
1299,numerous,[形] 多くの
1300,substantial,[形] ①かなりの，たくさんの ②内容のある，重要な
1301,unit,[名] 単位
1302,diameter,[名] 直径
1303,arithmetic,[名] 算術
1304,quantity,[名] 量
1305,deficiency,[名] 欠乏，不足
1306,maximum,[名] 最大限
1307,bunch,[名] (花や鍵などの)束，(ブドウなどの)房
1308,lessen,[他] ～を減らす
1309,era,[名] 時代
1310,session,[名] ①（活動の）期間 ②（議会などの）会期 ③（ある活動の）集まり
1311,pause,[名] ①休止 [自] ②休止する
1312,annual,[形] ①年に1度の ②1年間の（予算，収入など）
1313,eternal,[形] （命や若さなど）永遠の
1314,initial,[形] ①最初の [名] ②頭文字，イニシャル
1315,prior,[形] ①（to ～）～より前の ②（時間・順序が）前の
1316,subsequent,[形] （to ～）（～に）続いて起こる
1317,meanwhile,[副] ①その間 ②（対比を示して）その一方で
1318,routine,[名] ①決まりきった仕事 [形] ②日常の
1319,souvenir,[名] 土産，記念品
1320,brick,[名] ①れんが ②〈英〉（おもちゃの）積み木
1321,pole,[名] ①棒，さお，柱 ②（天体，地球の）極
1322,mischief,[名] いたずら〈不可算〉
1323,superstition,[名] 迷信
1324,storage,[名] 貯蔵，保管〈不可算〉
1325,shelter,[名] ①避難（所)②住居
1326,garment,[名] 衣類
1327,canal,[名] 運河
1328,cabinet,[名] ①戸棚 ②（the C―）内閣
1329,incident,[名] （主に不快な）出来事
1330,circumstance,[名] （通例 ―s）状況，事情
1331,fetch,[他] （主に〈英〉）～を取って来る
1332,distribute,[他] ①～を分配する，配る ②（be ―d）分布している
1333,purchase,[他] ①～を購入する [名] ②購入（品）
1334,statue,[名] 像
1335,sculpture,[名] 彫刻
1336,myth,[名] ①（俗説という意味での）神話 ②（古代の）神話
1337,craft,[名] ①工芸（品)②（職人の）技術 ③船，乗り物（単複同形）
1338,journal,[名] ①雑誌，専門誌 ②（公的な）日誌，日記
1339,encyclopedia,[名] 百科事典
1340,heaven,[名] ①天国 ②（the ―s）空
1341,funeral,[名] 葬式
1342,soul,[名] ①魂 ②（慣用句あるいは否定文で）人
1343,priest,[名] 神父，僧侶，牧師，聖職者
1344,faith,[名] ①（主に宗教上の）信仰 ②信頼
1345,sacred,[形] 神聖な
1346,divine,[形] 神の
1347,Muslim,[名] イスラム教徒
1348,context,[名] ①文脈 ②状況
1349,singular,[形] ①単数の ②（褒めて）比類なき ③奇妙な
1350,command,[名] ①言語を操る力 ②命令 [他] ③～を集める ④～を見渡せる
1351,instance,[名] 例
1352,dialogue,[名] ①（本，劇，映画の中の）会話 ②対談，対話
1353,usage,[名] 語法
1354,vowel,[名] 母音
1355,pronoun,[名] 代名詞
1356,accent,[名] ①訛 ②アクセント
1357,outline,[動] ～の要点を述べる，～の輪郭を描く
1358,remote,[形] ①（地理的に）辺鄙な ②（時間，関係などが）遠い
1359,ambition,[名] （強い）願望，野望
1360,temper,[名] ①気性 ②（熟語で）平静（な気分）
1361,affection,[名] 愛情
1362,enthusiasm,[名] 情熱，熱意
1363,rage,[名] ①激怒 [自] ②（戦争，病気が）激しく続く，猛威をふるう
1364,incredible,[形] 信じられない
1365,chuckle,[自] ①くすくす笑う [名] ②くすくす笑うこと
1366,dare,[他] ①（to do）思い切って～する [助] ②（do）思い切って～する
1367,scream,[自] ①悲鳴を上げる [名] ②悲鳴
1368,soothe,[他] ①（人）をなだめる ②（痛みなど）をやわらげる
1369,tempt,[他] ～を誘惑する
1370,scold,[他] ～を叱る
1371,oppress,[他] ～を圧迫する，虐げる
1372,threaten,[他] ①～を脅かす ②（to do）～すると脅す ③～の恐れがある
1373,mourn,[他] ～を嘆く，悼む
1374,sacrifice,[他] ①～を犠牲にする [名] ②犠牲
1375,curse,[名] ①災いの元 ②呪い [他] ③～を呪う，ののしる
1376,stem,[自] ①（from ～）（～が）原因である [名] ②茎，幹，ワイングラスの脚
1377,trigger,[他] ①～のきっかけになる，～を誘発する [名] ②（銃の）引き金
1378,consequence,[名] ①結果 ②（of ―)重要性
1379,process,[名] ①過程 [他] ②～を加工する，処理する
1380,resort,[自] ①（to ～）（～に）訴える [名] ②行楽地 ③手段
1381,formula,[名] ①方法 ②秘けつ ③（数学，化学などの）式，公式
1382,procedure,[名] 手続き，手順
1383,extraordinary,[形] ①並外れた ②臨時の（会議など)③特命の（大使など）
1384,absolute,[形] 絶対的な
1385,overwhelming,[形] 圧倒的な
1386,altogether,[副] ①完全に ②全部で
1387,entire,[形] すべての
1388,tremendous,[形] すさまじい
1389,sheer,[形] ①（数量やサイズを強調して）とてつもない～の ②まったくの
1390,partial,[形] ①部分的な ②不公平な ③（to ～）（～が）大好きで
1391,barely,[副] ①かろうじて ②ほとんど～ない
1392,approximately,[副] （数量が）おおよそ，約
1393,frequently,[副] 頻繁に
1394,apparently,[副] ①見たところでは ②<口語>どうやら～らしい
1395,merely,[副] ①（主に名詞の前で）～にすぎない ②（動詞などの前で）単に
1396,nevertheless,[副] それにもかかわらず
1397,somehow,[副] ①何らかの方法で ②何らかの理由で，どういうわけか
1398,thus,[副] ①それゆえ（に)②このように
1399,afterward(s),[副] ①（文頭で）その後 ②（～afterward）～の後
1400,on behalf of ～,[熟] ①～を代表して ②～のため
1401,assert,[他] ～と断定する，～を主張する
1402,defy,[他] ①～に逆らう ②～を拒む
1403,condemn,[他] ①～を非難する ②～に (刑の)宣告をする ③～を強いる
1404,cite,[他] ～を引き合いに出す，引用する
1405,illustrate,[他] ①(例で)～を説明する，例証する ②～に挿絵を入れる，～を図解する
1406,refute,[他] ～を論駁する，～に反論する
1407,sue,[他] ～を訴える
1408,articulate,[他] ①(考えなど)をはっきり述べる [形] ②考えを明確に表現できる
1409,version,[名] ①(個人的な)解釈，意見 ②(製品などの)～版
1410,advocate,[名] ①提唱者，支持者 [他] ②～を主張する，支持する
1411,breakthrough,[名] 飛躍的進歩，大発見
1412,evolution,[名] 進化
1413,innovation,[名] 革新
1414,probe,[名] ①探査機 [他] ②～を調査する
1415,fluid,[名] ①流体 [形] ②流動的な，なめらかな
1416,particle,[名] ①粒子 ②(not a ― of A)(Aの)かけら (もない)
1417,gravity,[名] ①重力 ②重大さ
1418,hypothesis,[名] 仮説
1419,specimen,[名] ①標本 ②サンプル
1420,microbe,[名] 微生物
1421,poison,[名] 毒
1422,acid,[形] ①酸性の ②辛辣な
1423,toxic,[形] 有害な，有毒な
1424,endeavor,[名] ①努力，試み [他] ②～を (懸命に)努力する，試みる
1425,doom,[他] (be ―ed to ～)～の運命にある
1426,manufacture,[他] ①～を製造する [名] ②製造，製品
1427,yield,[他] ①～を産出する [自] ②(to ～)(～に)屈する [名] ③産出量
1428,duplicate,[他] ①～を複製する [名] ②複製品 [形] ③複製の
1429,assemble,[他] ①～を組み立てる [自] ②集まる
1430,mold,[他] ①～を (型に入れて)作る ②(人格，意見など)を形成する
1431,coin,[他] ①～を作り出す [名] ②硬貨
1432,therapy,[名] 治療 (法)
1433,injection,[名] 注射
1434,dose,[名] (１回分の)服用量
1435,sanitation,[名] 衛生
1436,germ,[名] 細菌，ばい菌〈可算〉
1437,tumor,[名] 腫瘍〈可算〉
1438,stroke,[名] (脳)卒中，(強い)発作
1439,agony,[名] 苦痛
1440,plague,[名] ①(大規模な)疫病，伝染病，災害 [他] ②～を苦しめる
1441,fatigue,[名] (ひどい)疲労〈不可算〉
1442,diagnosis,[名] 診断
1443,mortality,[名] ①(― rate)死亡率 ②死すべき運命
1444,nursing,[名] 看護
1445,chronic,[形] 慢性の
1446,immune,[形] 免疫の (ある)
1447,terminal,[形] ①(病気が)末期の [名] ②終着 [始発] 駅 (の建物)，ターミナルビル
1448,sound,[形] ①(身体・精神が)健全な ②(土台・理解などが)堅実な
1449,respiratory,[形] 呼吸の
1450,choke,[自] ①(on ～)(～で)息が詰まる，窒息する [他] ②～を窒息させる
1451,paralyze,[他] ～を麻痺させる
1452,prescribe,[他] ①(薬など)を処方する ②(行為など)を指示する
1453,digest,[他] ①～を消化する ②～を理解する [名] ③要約
1454,weary,[形] ①(極度に)疲れている ②うんざり [飽き飽き] している
1455,nourish,[他] ①～に栄養を与える ②(考えなど)を抱く
1456,appalling,[形] ぞっとするような
1457,flesh,[名] (人､動物の皮､骨に対する)肉
1458,limb,[名] 手足 (の①本)
1459,erect,[形] ①直立した [他] ②～を建てる
1460,spinal,[形] 脊椎の
1461,suck,[他] ～を吸う
1462,shrug,[他] ①(肩)をすくめる [自] ②肩をすくめる
1463,compensate,[他] (A for B)(A)に (Bを)補償する
1464,abuse,[名] ①虐待 ②乱用 [他] ③～を悪用する
1465,bias,[名] 偏見
1466,prestige,[名] 名声，威信
1467,privilege,[名] 特権
1468,feat,[名] 偉業
1469,dignity,[名] 威厳
1470,virtue,[名] ①美徳 ②(人，物の個々の)長所 ③(by ― of ～)～のために
1471,aristocracy,[名] (通例 the～)貴族 (階級，社会)
1472,rebel,[名] ①反逆者 [自] ②(against ～)(～に)反逆する，反抗する
1473,scheme,[名] ①〈英〉計画 ②陰謀
1474,convention,[名] ①会議，大会 ②慣習 ③条約
1475,conference,[名] (on ～)(～に関する)会議
1476,consent,[名] ①合意 [自] ②(to ～)(～に)合意する
1477,initiative,[名] ①新構想，新計画 ②主導権
1478,province,[名] ①(カナダなどの)州，(中国の)省 ②(the ―s)地方
1479,colony,[名] ①植民地 ②(アリなどの)群落
1480,frontier,[名] ①辺境，(主に〈英〉)国境 ②(the ―s)最前線
1481,treaty,[名] 条約
1482,tribe,[名] 部族，種族
1483,pension,[名] 年金〈可算〉
1484,stake,[名] ①(have a ― in ～)(～に)利害関係 (を持つ)②(at ―)危険 ③(―s)賭け金，配当金
1485,coverage,[名] ①報道 ②(保険の)補償 (範囲)
1486,obligation,[名] ①(社会に対する)責務 ②(個人に対する)恩義
1487,hygiene,[名] 衛生 (状態)，衛生学
1488,supervisor,[名] (人・活動などの)監督者
1489,norm,[名] ①(the ―)普通のこと ②(―s)規範
1490,patent,[名] ①特許 (権)[他] ②～の特許をとる [形] ③明白な，見えすいた
1491,primitive,[形] 原始的な，未開の
1492,ethnic,[形] 民族の，民族的な
1493,anonymous,[形] 匿名の
1494,metropolitan,[形] 大都市の
1495,entitled,[形] ①(to ～)(～の)権利がある ②～と題された
1496,demographic,[形] ①人口統計上の [名] ②(―群の人々から成る)年齢層
1497,donate,[他] ①～を寄付する ②(臓器など)を提供する
1498,flourish,[自] 栄える
1499,conform,[自] (to ～)(～に)合わせる
1500,comply,[自] (with ～)(～に)従う， 遵守する
1501,legislation,[名] (集合的に)法律〈不可算〉
1502,testimony,[名] (法廷などでの)証言
1503,jury,[名] 陪審 (員団)
1504,legitimate,[形] ①正当な ②合法の
1505,enforce,[他] ①～を施行する ②～を強制する
1506,regime,[名] 政権，政治体制
1507,bureaucracy,[名] ①官僚制度，官僚主義 ②(集合的に)官僚
1508,corruption,[名] 腐敗，汚職
1509,tyranny,[名] ①圧政，専制政治 ②暴虐 (な行為)
1510,sanction,[名] ①(―s)制裁 ②(公的な)認可
1511,candidate,[名] (for ～)(～の)候補 (者)，(～になりそうな)人 [物]
1512,senator,[名] 〈米〉(しばしば S―)上院議員
1513,ambassador,[名] 大使
1514,diplomat,[名] 外交官
1515,refugee,[名] 難民
1516,ally,[名] ①同盟国，協力者 [自] ②(with ～)(～と)提携する
1517,reign,[名] ①(君主などの)統治 (期間)[自] ②君臨する
1518,federal,[形] 連邦の
1519,communist,[形] ①共産主義(者)の [名] ②共産主義者
1520,municipal,[形] 市(営)の，地方自治の
1521,estate,[名] ①(全)財産 ②地所
1522,asset,[名] 財産，資産
1523,revenue,[名] (国などの)歳入，(事業などの)収益
1524,deficit,[名] (会社，国の)赤字
1525,commerce,[名] 商業
1526,output,[名] ①生産高 ②(エンジン，発電機などの)出力
1527,subsidy,[名] 補助金
1528,transaction,[名] 取り引き
1529,bankrupt,[形] 倒産した，破産した
1530,monetary,[形] ①貨幣の ②金銭的な
1531,corporation,[名] 企業，法人
1532,enterprise,[名] ①企業 ②(冒険的な)事業
1533,venture,[名] ①(ベンチャー)事業 [自] ②危険を冒して行く
1534,headquarters,[名] 本社，本部
1535,personnel,[名] ①(官庁，会社などの)全職員〈複数扱い〉 ②人事
1536,entrepreneur,[名] 起業家
1537,predecessor,[名] 前任者，以前あったもの
1538,toil,[自] ①(長時間)骨折って働く [名] ②骨の折れる仕事
1539,undertake,[他] (仕事など)を引き受ける，始める
1540,merge,[自] ①合併する [他] ②～を合併させる
1541,comprise,[他] ①～から成る ②(割合)を占める
1542,component,[名] 構成要素，成分，(車などの)部品
1543,framework,[名] ①枠組 ②骨組み
1544,prototype,[名] ①(of [for] ～)(～の)原型 ②試作品 ③典型
1545,dimension,[名] ①(問題などの)側面，要因，次元 ②(―s)寸法，大きさ
1546,margin,[名] ①余白，欄外 ②(票などの)差 ③端
1547,excel,[自] (in [at] ～)( ～において)優れている
1548,contradict,[他] ①～と矛盾する ②～に反論する
1549,consensus,[名] (意見や証言などの)合意，総意
1550,converse,[名] ①正反対 [形] ②正反対の [自] ③(with ～)(～と)会話する
1551,inequality,[名] 不平等
1552,equivalent,[形] ①等しい [名] ②同等のもの
1553,compatible,[形] (with ～)(～と)適合する，互換性がある
1554,identical,[形] 同一の，うり二つの
1555,correspond,[自] ①(to [with] ～)(～と)一致する ②(with ～)(～と)(メールや手紙で)やりとりをする
1556,random,[形] 無作為の，でたらめの
1557,warrior,[名] 戦士
1558,assault,[名] 襲撃，暴行
1559,troop,[名] (―s)軍隊
1560,shield,[名] (against ～)(～に対する)盾、防御物
1561,torture,[名] ①拷問 ②辛いこと [他] ③～を拷問にかける
1562,dispute,[名] ①論争，紛争 [他] ②～に異議を唱える
1563,combat,[名] ①戦闘 [他] ②～と戦う
1564,tactics,[名] 戦術
1565,quarrel,[自] ①(with ～)(～と)口論する [名] ②口論
1566,contend,[自] ①（with ～）（～と）戦う [他] ②（that SV）（～と）（強く）主張する
1567,slaughter,[他] ～を虐殺する，（食肉用に）殺す
1568,suppress,[他] ①（反乱，暴動）を鎮圧する ②（笑い，怒り）を抑える
1569,surrender,[自] ①（to ～）（～に）降伏する [他] ②～を引き渡す
1570,hostile,[形] ①敵意のある ②敵の ③（環境などが）厳しい
1571,wreck,[名] ①（乗り物，家の）残骸 ②（健康を損ね）ボロボロの人
1572,toll,[名] ①犠牲[死者]者（数），被害 ②（高速道路などの）通行料 ③通話料
1573,disrupt,[他] （活動の進行など）をかき乱す
1574,interfere,[自] （with ～）（～を）邪魔する，干渉する
1575,confront,[他] ①（困難などが人）に立ちふさがる ②（人が困難など）に直面する，立ち向かう
1576,explode,[自] ①爆発する ②爆発的に増加する
1577,collide,[自] （with ～）（～と）衝突する
1578,nephew,[名] 甥
1579,infant,[名] （主に歩く前の）幼児
1580,spouse,[名] 配偶者
1581,heir,[名] 相続人，後継者
1582,folk,[名] ①人々 [形] ②民間（起源）の
1583,peer,[名] ①（―s）同等の人，同輩 [自] ②（よく見えなくて）じっと見る
1584,recipient,[名] 受け取る人，被移植者
1585,navigate,[自] ①（旅などで）進路を決める [他] ②～を克服して進む，～を航行する
1586,flee,[自] 逃亡する
1587,retreat,[自] ①退く [名] ②撤退，退却
1588,crawl,[自] 這って進む，（渋滞などで）這うように進む
1589,hover,[自] ①（鳥などが）空中にとどまる ②うろつく，さまよう
1590,drift,[自] 漂う
1591,alter,[他] ～を変える
1592,convert,[他] ①（A into B）（A）を（B に）転換する ②～を改宗させる
1593,overtake,[他] ～を追い越す
1594,dispatch,[他]（使者・軍隊など）を派遣する，（物資など）を送る
1595,shrink,[自] ①縮む ②（数量が）減る [他] ③～を縮ませる，減らす
1596,wither,[自] しおれる，しぼむ
1597,descend,[自] 降下する
1598,accelerate,[他] ～を加速する
1599,fluctuate,[自] （数値，物価が）変動する
1600,distort,[他] ～を歪める
1601,crack,[自] ①割れる，砕ける ②（パンと）音を出す [他] ③～を割る，砕く [名] ④割れ目
1602,transition,[名] 移り変わり，推移
1603,game-changer,[名] 革命的なこと[人・物]
1604,reinforce,[他] ～を補強する
1605,foster,[他] ①（才能など）を育成する ②～の里親になる [形] ③里親の
1606,breakdown,[名] ①崩壊 ②故障 ③衰弱
1607,collapse,[自] ①崩壊する，倒れる [名] ②崩壊，倒れること
1608,render,[他] ①（SVOC）（O）を（C）にする ②（援助など）を与える
1609,impair,[他] （人間の機能など）を低下させる，損なう
1610,undermine,[他] ～を弱める，揺るがす
1611,cope,[自] （with～）（～に）対処する
1612,tackle,[他] ～に取り組む
1613,demolish,[他]（建物など）を取り壊す
1614,confine,[他] ①～を閉じ込める ②（活動など）を制限する
1615,designate,[他] （通例，受け身で）～を指定する
1616,regulate,[他] ①（主に規則によって）～を規制する ②（機器など）を調整する
1617,refrain,[自] （from ～）（～を）控える
1618,prohibit,[他] ～を禁じる
1619,halt,[他] ①～を止める [自] ②止まる [名] ③停止
1620,constraint,[名] 制約
1621,stimulate,[他] ～を刺激する
1622,animate,[他] ①～を活気づける ②～をアニメ化する
1623,spur,[他] ①～を駆り立てる，促す [名] ②拍車，刺激，動機
1624,urge,[他] ①～をせき立てる，～に強く勧める [名] ②（何かがしたい）衝動
1625,compel,[他] （A to do）（A）に（～することを）強制する
1626,blur,[他] ①～をぼやかす [自] ②ぼやける
1627,divert,[他] ①（川など）の方向を変える ②（注意など）をそらす
1628,reverse,[他] ①～を逆転する，覆す [名] ②逆 [形] ③逆の
1629,overshadow,[他] ～の影を薄くさせる
1630,worsen,[他] ～を悪化させる
1631,jeopardize,[他]（生命，経歴，制度など）を危険にさらす
1632,supplement,[他] ①（栄養，収入など）を補う [名] ②補充，栄養補助食品 ③付録
1633,pose,[他] ～をもたらす
1634,induce,[他] ①～を引き起こす ②((人)to do)(人)に～するよう説得する
1635,betray,[他] ①～を裏切る ②～を漏らす，（うっかり）さらけ出す
1636,bully,[他] ①～をいじめる [名] ②いじめっ子
1637,disregard,[他] ～を無視する
1638,squeeze,[他] ①（果汁など）を搾る ②（手，指で）～を強く押す
1639,rub,[他] ①～をこする [自] ②(against ～)( ～に)こすりつける
1640,smash,[他] ～を粉砕する
1641,insert,[他] ①～を差し込む ②（語句など）を書き込む
1642,detach,[他] （A from B)（A）を（B から）切り離す
1643,withdraw,[他] ①～を引っ込める ②（預金など）を引き出す [自] ③退く
1644,compile,[他] ～をまとめる，(辞書などを)編纂する
1645,browse,[自] ①拾い読みする [他] ②～を拾い読みする
1646,manipulate,[他] ～を操作する
1647,implement,[他] ①(契約，計画など)を実行する [名] ②(単純な)道具
1648,execute,[他] ①～を遂行する，実行する ②～を処刑する
1649,host,[他] ①(大会など)を主催する [名] ②(a ― of)多くの ③(客を接待する)主人(*女性も含む)，主催者，開催地，≪生物≫宿主
1650,mount,[他] ①～を据え付ける ②(馬，自転車)に乗る [自] ③増加する
1651,discharge,[他] ①～を排出する ②(職務，任地などから)～を解放する
1652,drain,[他] ①～の水を抜く ②～の水分を切る [自] ③(液体が)流出する，乾く
1653,soak,[他] ①～を浸す ②(up)(日光，考えなど)を吸収する
1654,dip,[他] ①～を（ちょっと）つける，浸す ②～を少し下げる
1655,suspend,[他] ①～を吊るす ②～を中断する ③～を停職［停学］にする
1656,extract,[他] ①～を取り出す，抽出する [名] ②抽出したもの，抜粋
1657,slap,[他] ～を平手打ちする
1658,embrace,[他] ①～を抱擁する ②(思想など)を受け入れる
1659,embark,[自] (on ～)(～に)着手する，乗り込む
1660,intervene,[自] (in ～)( ～に)介入する
1661,penetrate,[他] ①～に入り込む ②～を貫通する [自] ③貫通する，入る
1662,intrude,[自] (on～)(～に)立ち入る
1663,utilize,[他] ～を利用する
1664,embed,[他] (in...)(...に)～を埋め込む
1665,allocate,[他] ～を割り当てる
1666,coordinate,[他] (活動など)をうまく調整する
1667,blink,[自] まばたきする
1668,spin,[自] ①ぐるぐる回る [他] ②～を回す ③～を紡ぐ
1669,rotate,[自] ①回転する [他] ②～を回転させる
1670,scramble,[自] 急いで動く
1671,vanish,[自] 消える
1672,snap,[自] ①ポキンと折れる [他] ②～をポキンと折る、～をパチンと鳴らす
1673,rattle,[自] ①ガタガタ鳴る [他] ②～を鳴らす [名] ③ガラガラ
1674,cease,[他] (to do [doing])～しなくなる
1675,haste,[名] 急ぐこと〈不可算〉
1676,conceal,[他] ～を隠す
1677,disguise,[他] ①～を(偽装して)隠す ②(oneself as ～)～に変装する [名] ③変装
1678,deceive,[他] ～をだます
1679,neglect,[他] ①～を怠る，放置する ②(子ども)の世話をしない [名] ③放置
1680,evacuate,[他] (しばしば受動態で)～を避難させる
1681,coincide,[自] ①(with ～)(～と)同時に起きる ②(with ～)(～と)一致する
1682,prevail,[自] ①(考え，習慣などが)普及している ②(最後に人，考えが)優勢となる
1683,sustain,[他] (生命など)を維持する，支える
1684,linger,[自] ①(いつまでも)残る ②(on)長居する
1685,revive,[自] ①生き返る，よみがえる [他] ②～を生き返らせる
1686,resume,[他] ①～を再開する [自] ②再開する [名] ③〈米〉履歴書 ④概要，レジュメ
1687,outbreak,[名] 発生，勃発
1688,inspect,[他] ～を検査する
1689,expedition,[名] ①(研究・探求・戦争目的の)探検，遠征 ②探検隊
1690,enroll,[自] ①(in ～)(～に)入学する [他] ②(be ―ed)在籍している
1691,discipline,[他] ①(体罰などで)～を躾ける [名] ②躾，規律 ③(学問)分野
1692,tuition,[名] ①〈米〉授業料 ②(少人数での)授業
1693,ethic,[名] ①(―s)(社会や職業上の)倫理(観)②(伝統的に守られた)倫理
1694,psychology,[名] ①心理学 ②心理
1695,astronomy,[名] 天文学
1696,archaeologist,[名] 考古学者
1697,thesis,[名] ①論文 ([複数形]theses) ②(正式な議論などの)テーマ
1698,dormitory,[名] 寮
1699,grasp,[他] ①～を理解する ②～をつかむ [名] ③理解，つかむこと
1700,anticipate,[他] ①～を予想する ②～を期待する
1701,foresee,[他] ～を予知する
1702,infer,[他] (A from B)(B からA)を推測する
1703,deduce,[他] (A from B)(B からA)を推定する
1704,deem,[他] (Ｏ (to be)Ｃ)ＯをＣだと思う
1705,ponder,[他] ～を熟考する
1706,assure,[他] ～に保証する，確信させる
1707,assess,[他] ～を評価する，査定する
1708,concede,[他] (譲歩して)～を認める
1709,compromise,[自] ①妥協する [他] ②(主義など)を曲げる [名] ③妥協
1710,comprehend,[他] ～を(十分に)理解している
1711,reconcile,[他] ①(A with B)(A)を(B と)調和させる，和解させる ②(oneself to ～)(～を)仕方なく受け入れる
1712,instill,[他] (思想など)を(徐々に)教える，～を植え付ける
1713,alert,[形] ①油断のない，用心深い [名] ②(公的な)警告
1714,cognitive,[形] 認知の
1715,intuition,[名] 直感
1716,vow,[名] ①誓い [他] ②～を誓う
1717,nightmare,[名] ①悪夢 ②悪夢のようなこと
1718,stereotype,[名] 固定観念
1719,illusion,[名] 幻想
1720,criterion,[名] 基準
1721,ideology,[名] イデオロギー，(政治・経済的)思想
1722,tolerate,[他] ～を大目に見る，我慢する
1723,overlook,[他] ①～を(うっかり)見落とす ②(人の欠点やミスなど)を見逃す，大目に見る ③(場所が)～を見渡す
1724,conceive,[他] ①～を思い浮かべる ②～を妊娠する [自] ③(of ～)(～を)想像する
1725,misunderstand,[他] (人，人の言うこと)を誤解している
1726,keen,[形] ①(頭脳，感性などが)鋭い ②(be ― on ～)(～に)熱中して，好きで
1727,subjective,[形] 主観的な
1728,compulsory,[形] ①義務的な ②規定の
1729,relieve,[他] ①～を取り除く ②～を安心させる
1730,trim,[他]①～を刈り込む，切り取る [形] ②こぎれいな
1731,disposal,[名] ①処分，廃棄 ②(at one's ―)～を自由にする
1732,scent,[名] ①(花，果物の良い)香り ②(動物が残したそれ自身の)臭い
1733,grain,[名] ①穀物 ②粒，少量
1734,wheat,[名] 小麦〈不可算〉
1735,deforestation,[名] 森林伐採
1736,drought,[名] 干ばつ
1737,irrigation,[名] 灌漑
1738,spectacle,[名] ①(きわめて印象的な)光景 ②(大がかりな)見せ物
1739,altitude,[名] 標高，高度
1740,catastrophe,[名] 大災害，災難
1741,wilderness,[名] 荒野，野原
1742,decay,[名] ①腐敗 [自] ②腐敗する，衰える
1743,erosion,[名] 侵食
1744,flame,[名] 炎
1745,galaxy,[名] 銀河
1746,chill,[名] ①寒気 [他] ②～を冷やす
1747,thermal,[形] 熱の
1748,fertile,[形] 肥沃な，肥えた
1749,fossil,[形] ①化石化した [名] ②化石
1750,exploit,[他] ①(自然の力など)を利用する ②～を搾取する
1751,contaminate,[他] ～を汚染する
1752,erupt,[自] (火山などが)噴火する
1753,roar,[自] ①ほえる [名] ②うなり声，怒号，轟音
1754,inhabit,[他] ～に生息している，ある
1755,nurture,[他] ①～を育てる [名] ②養育，教育
1756,owl,[名] フクロウ
1757,instinct,[名] 本能
1758,prey,[名] ①餌食 [自] ②(on ～)餌食にする
1759,anatomy,[名] ①解剖(学)②(解剖学的に見た動植物の)構造
1760,mammal,[名] 哺乳動物，哺乳類
1761,predator,[名] 捕食動物，捕食者
1762,hybrid,[名] 交配種，雑種，ハイブリッド
1763,skull,[名] 頭蓋骨〈可算〉
1764,timber,[名] (主に<英>)材木
1765,textile,[名] ①織物 [形] ②織物の
1766,fabric,[名] ①布地，織物 ②組織，構造
1767,mill,[名] 製造工場
1768,weave,[他] ①～を織る ②～を編む
1769,competent,[形] 有能な
1770,optimistic,[形] 楽観的な
1771,patriotic,[形] (人，言動などが)愛国的な
1772,noble,[形] ①高潔な ②貴族の [名] ③貴族〈可算〉
1773,naughty,[形] いたずらな
1774,arrogant,[形] 傲慢な
1775,vigorous,[形] ①(人，活動が)精力的な ②活発な
1776,humble,[形] ①控えめな ②卑しい，貧しい
1777,eligible,[形] 資格のある
1778,courtesy,[名] 礼儀正しさ
1779,resilient,[形] 回復の早い，回復力のある
1780,inclined,[形] ①(be ～ to do)～する傾向がある ②～したい気持ちだ
1781,haunt,[他] ①(亡霊，考えなどが)～につきまとう，出没する [名] ②好んで行く場所，たまり場
1782,intent,[形] ①(on ～)(～に)没頭した，決心した [名] ②意図
1783,indulge,[自] ①(in ～)(～に)ふける [他] ②～を思いのままにさせる
1784,flaw,[名] 傷，欠点
1785,defect,[名] 欠陥
1786,trait,[名] 特性
1787,analogy,[名] 類似点，類推，例え
1788,parallel,[名] ①類似(物)[形] ②(to ～)(～と)平行の，類似した
1789,indispensable,[形] 不可欠な
1790,crucial,[形] (極めて)重大な
1791,grave,[形] ①重大な [名] ②墓(穴)
1792,primary,[形] ①主な，第①の ②初期の，原始の
1793,vital,[形] 不可欠な，きわめて重要な
1794,integral,[形] ①不可欠な ②完全な
1795,profound,[形] 深い
1796,grim,[形] (状況などが)厳しい
1797,fierce,[形] ①(競争，嵐などが)激しい ②どう猛な
1798,harsh,[形] 厳しい
1799,acute,[形] ①深刻な ②(知能，知覚などが)鋭い ③急性の
1800,ambiguous,[形] 曖昧な
1801,misleading,[形] 誤解を招く，紛らわしい
1802,obscure,[形] ①ぼやけた，わかりにくい ②無名の
1803,mature,[形] ①成熟した，熟成した [自] ②成熟する，熟成する
1804,neat,[形] きちんとした
1805,decent,[形] まともな，きちんとした
1806,straightforward,[形] ①(方法などが)わかりやすい ②(人や行動が)率直な
1807,sophisticated,[形] ①(機械，システムが)高度な ②洗練された，教養のある
1808,elaborate,[形] ①手の込んだ，凝った [他] ②～を苦労して作り上げる [自] ③(on ～)(～を)詳しく話す
1809,prompt,[形] ①迅速な [他] ②～に促す
1810,swift,[形] 素早い
1811,mighty,[形] 強力な
1812,explicit,[形] (発言や文章などが)明確な
1813,authentic,[形] 本物の
1814,wit,[名] 機知，機知に富んだ人
1815,thrive,[自] ①(会社などが)好調である，繁栄する ②(動[植]物などが)健康に育つ
1816,dim,[形] ①薄暗い ②(記憶などが)ぼんやりした [他] ③～を暗くする
1817,gloomy,[形] ①薄暗い ②陰気な，悲観的な
1818,barren,[形] 不毛な
1819,idle,[形] ①(仕事がなく)何もしていない ②怠惰な [他] ③(away)(～を)何もしないでいる
1820,adverse,[形] (何かを行うのに)不都合な，悪い
1821,tiresome,[形] 退屈な，うんざりする
1822,clumsy,[形] 無器用な
1823,foul,[形] ①(味，臭いなどが)不快な [名] ②(スポーツなどの)違反，ファウル
1824,shabby,[形] みすぼらしい，おんぼろの
1825,outrageous,[形] 常軌を逸した，奇想天外な
1826,absurd,[形] ばかげた
1827,fragile,[形] 壊れやすい，もろい
1828,vulnerable,[形] ①傷つきやすい，弱い ②(非難，攻撃を)受けやすい，(病気に)かかりやすい
1829,static,[形] 静的な，(経済などで)変化のない，活気のない
1830,innate,[形] (才能などが)先天的な，生まれつきの
1831,exotic,[形] ①(動[植]物が)外来の ②異国情緒のある
1832,tame,[形] ①飼い慣らされた，従順な [他] ②～を飼い慣らす
1833,manifest,[形] ①明らかな [他] ②(姿勢，感情など)を明らかにする
1834,dense,[形] 密集した，(霧などが)濃い
1835,transparent,[形] 透明な
1836,consistent,[形] ①(with ～)矛盾のない，一致している ②安定した，不変の
1837,coherent,[形] 一貫している
1838,universal,[形] 普遍的な
1839,underlying,[形] 根底にある
1840,spontaneous,[形] 自然発生的な
1841,mock,[形] ①模擬の，見せかけの [他] ②(からかって)～をまねる ③～をあざける
1842,collective,[形] 集団の、共同の
1843,vertical,[形] 垂直の，縦の
1844,ongoing,[形] 進行中の，継続中の
1845,tender,[形] ①(肉などが)柔らかい ②(愛情があり)優しい ③(皮膚などが)弱い
1846,upright,[副] ①直立して [形] ②直立した
1847,ease,[名] ①簡単さ [他] ②(痛み，心配など)を和らげる，楽にする
1848,rust,[名] ①さび〈不可算〉 [自] ②さびる
1849,stain,[名] ①シミ，汚れ [他] ②～にシミをつける，～を汚す
1850,rag,[名] ぼろ切れ
1851,texture,[名] 感触、手触り
1852,preliminary,[形] ①予備的な，事前の ②予選の [名] ③予選
1853,mandatory,[形] 義務的な
1854,indigenous,[形] (動[植]物，民族が)固有の
1855,respective,[形] それぞれの
1856,multiply,[他] ①～を増やす ②(A by B)(A)に(B を)掛ける [自] ③増える
1857,soar,[自] ①(価格，温度が)急上昇する ②(鳥が)舞い上がる
1858,diminish,[自] 減少する
1859,accumulate,[他] ①～を蓄積する [自] ②蓄積する
1860,exceed,[他] ～を越える
1861,abundant,[形] 豊富な
1862,ample,[形] 豊富な
1863,gross,[形] ①総計の ②(食べ物，行動などが)ひどい
1864,infinite,[形] 無限の
1865,sole,[形] ①唯一の [名] ②足の裏，靴底
1866,heap,[名] ①(積み重ねられたものの)山 ②(a ― of ～)たくさんの～
1867,fraction,[名] ①少量 ②分数，端数
1868,simultaneous,[形] 同時の
1869,medieval,[形] 中世の
1870,dawn,[名] ①夜明け [自] ②夜が明ける ③(on ～)(～に)わかり始める
1871,span,[名] ①(継続した)期間 ②(集中力，注意力，機械の持続)期間
1872,adolescent,[名] ①思春期の若者 [形] ②思春期の
1873,millennium,[名] 1000年間
1874,expire,[自] 期限が切れる
1875,postpone,[他] ～を延期する
1876,periodically,[副] 定期的に，周期的に，時折
1877,array,[名] (an ― of ～)さまざまな，多彩な
1878,realm,[名] 領域，領土
1879,domain,[名] 領域
1880,boundary,[名] 境界(線)
1881,spectrum,[名] ①(思想・活動などの)範囲 ②(光の)スペクトル
1882,equip,[他] ①～を装備させる，備え付ける ②(人)に(知識や能力などを)身につけさせる
1883,transmit,[他] ①～を送る，伝える ②(病気など)をうつす
1884,endow,[他] ～を授ける
1885,inherit,[他] ～を受け継ぐ
1886,retrieve,[他] ①～を回収する，取り戻す ②(ファイルなど)を検索する
1887,displace,[他] ①～に取って代わる ②(戦争，災害などで)～を(故郷などから)追い出す
1888,bond,[名] ①きずな ②公債，社債 (①②ともに〈可算〉)
1889,hospitality,[名] もてなし，歓迎
1890,certificate,[名] 証明書，免許状，鑑定書
1891,brochure,[名] パンフレット
1892,outlet,[名] ①(電気の)コンセント ②(販売)店 ③(感情などの)はけ口
1893,accommodation,[名] (<米>―s)宿泊施設
1894,haven,[名] 避難所、保護区
1895,venue,[名] 開催地，会場
1896,intersection,[名] 交差点
1897,pavement,[名] (主に<英>)歩道
1898,pedestrian,[名] 歩行者
1899,excursion,[名] 小旅行，遠足
1900,shipping,[名] (商品の)発送
1901,thread,[名] ①糸 [他] ②～に糸を通す
1902,ornament,[名] (小さな)飾り，置物
1903,cosmetic,[名] ①(―s)化粧品 [形] ②美容の，化粧(用)の
1904,chamber,[名] ①部屋 ②(協会などの)会議所，議院
1905,commodity,[名] ①商品 ②有用なもの
1906,dwell,[自] ①住む ②(on ～)(～をくどくど)考える
1907,acoustic,[形] ①音響の ②(アンプを用いない)アコースティックの
1908,recipe,[名] ①レシピ，調理法 ②秘訣，原因
1909,intake,[名] 摂取(量)
1910,precede,[他] ～に先行する
1911,phase,[名] 段階，位相
1912,priority,[名] 優先(事項)
1913,premise,[名] ①前提 ②(―s)(建物を含めた)敷地
1914,tomb,[名] 墓，古墳
1915,legend,[名] ①伝説，言い伝え ②伝説的人物
1916,masterpiece,[名] 傑作
1917,ritual,[名] ①(宗教的)儀式 [形] ②儀式の
1918,worship,[名] ①崇拝，礼拝 [他] ②～を崇拝する [自] ③(神社などに)お参りする
1919,doctrine,[名] (宗教上などの)教義
1920,legacy,[名] 遺産〈可算〉
1921,sin,[名] (宗教上，道徳上の)罪
1922,swear,[自] ①誓う ②罵る
1923,confess,[自] ①（to ～）（～を）白状する [他] ②～を認める
1924,carve,[他] ～を彫る，刻む
1925,murmur,[自] つぶやく
1926,verbal,[形] 言葉による
1927,oral,[形] ①口述の ②口の
1928,eloquent,[形] 雄弁な
1929,linguistic,[形] 言語の，言語学の
1930,metaphor,[名] 隠喩，比喩
1931,prose,[名] 散文
1932,narrative,[名] 語り，物語
1933,plot,[名] ①（小説，演劇などの）筋 ②悪だくみ，陰謀
1934,draft,[名] ①下書き，草稿 [他] ②～を徴兵する [形] ③（― beer）生の（ビール）
1935,manuscript,[名] (手書きの)原稿，写本
1936,paradox,[名] 逆説
1937,slang,[名] （集合的に）俗語
1938,riddle,[名] なぞなぞ，謎〈可算〉
1939,exhibit,[他] ①～を展示する ②～を示す [名] ③展示物，展覧会
1940,portray,[他] ～を描く
1941,depict,[他] (主に文字や絵や彫刻などで)～を描く
1942,landmark,[名] ①目印，名所 ②画期的な出来事
1943,tease,[他] ～をからかう，冷やかす
1944,delight,[他] ①～を喜ばせる [名] ②（大）喜び
1945,astonish,[他] ～を（とても）驚かせる
1946,dread,[他] ①～を恐れる [名] ②恐怖
1947,attribute,[他] ①（A to B)（A）を（B）のせいだとする [名] ②特性，属性
1948,console,[他] ～を慰める
1949,arouse,[他] ～を呼び起こす
1950,distract,[他] ①（注意，意識など）をそらす ②～の気を紛らす
1951,startle,[他] ～を驚かせる
1952,thrill,[他] ①～をぞくぞく［わくわく］させる [名] ②スリル
1953,humiliate,[他] ～に恥をかかせる
1954,adore,[他] ～を熱愛している
1955,utter,[他] ①（叫び声など）を発する [形] ②まったくの
1956,exclaim,[自] （驚き，怒りなどで）叫ぶ
1957,shed,[他] ①（涙など）を流す ②（光）を当てる ③（不要なもの）～を取り除く ④（ヘビなどが）（皮）を脱ぐ，（木が葉っぱ）を落とす
1958,resent,[他] ～に憤慨する
1959,plead,[自] ①（with ～）（～に）懇願する [他] ②～を申し立てる
1960,yearn,[自] ①切望する [他] ②～を切望する
1961,long,[自] （for ～）（～を）切望する
1962,immerse,[他] (A in B)(BにA)を没頭させる
1963,bewilder,[他] （通例，受け身）～を当惑させる
1964,despise,[他] ～を軽蔑する
1965,willing,[形] （be ― to do）嫌がらずに～する
1966,furious,[形] 激怒した
1967,intimate,[形] ①親密な ②（知識などが）深い
1968,aesthetic,[形] ①美的な ②審美眼がある
1969,conscience,[名] 良心
1970,mercy,[名] ①慈悲，情け ②幸運
1971,compassion,[名] 同情，思いやり
1972,impulse,[名] 衝動
1973,aspiration,[名] 熱望
1974,grief,[名] （人の死などに対する）深い悲しみ
1975,contempt,[名] 軽蔑
1976,insult,[名] ①侮辱 [他] ②～を侮辱する
1977,nuisance,[名] 迷惑（になるもの）
1978,surge,[名] ①(感情などの)高まり ②(数字など)急増
1979,incentive,[名] 励み
1980,outcome,[名] 結果
1981,factor,[名] 要因
1982,liable,[形] ①（to do）～しがちだ ②（to ～）（病気などに）かかりやすい ③（for ～）（～に対して）（法的に）責任がある
1983,thorough,[形] 完全な，徹底的な
1984,adequate,[形] 十分な，適切な
1985,overall,[形] ①全体的な，全面的な [副] ②全体的に，全面的に
1986,ultimate,[形] 究極の，最終の
1987,genuine,[形] ①（感情が）心からの ②（絵画などが）本物の
1988,slight,[形] わずかな
1989,radical,[形] ①根本的な，抜本的な ②過激な
1990,trivial,[形] ささいな
1991,potent,[形] 強力な
1992,likewise,[副] 同様に，同じように
1993,virtually,[副] 事実上，ほとんど
1994,abruptly,[副] 不意に，突然
1995,deliberately,[副] ①故意に ②慎重に
1996,exclusively,[副] もっぱら，～専用で
1997,hence,[副] だから，それゆえに
1998,namely,[副] すなわち
1999,allegedly,[副] (本当かどうかはわからないが)伝えられるところによると
2000,whereas,[接] ～だが一方
2001,roam,[自] 歩き回る
2002,stroll,[自] 散策する
2003,circulate,[自] ①循環する [他] ②～を循環させる
2004,wane,[自] （力・程度・色などが）衰える，（月が）欠ける
2005,deteriorate,[自] 悪化する
2006,plunge,[自] ①（into ～）（～に）突っ込む [他] ②（A into B）（A）を（B に）突っ込む
2007,backfire,[自] 裏目に出る
2008,cram,[自] ①詰め込み勉強をする [他] ②～を詰め込む
2009,speculate,[自] ①推測する ②（株・土地などに）投機をする
2010,evaporate,[自] 蒸発する
2011,vomit,[自] ①吐く [他] ②～を吐く
2012,frown,[自] （at ～）（～に）眉をひそめる，（on ～）（～に）難色を示す
2013,hatch,[自] ①（卵から）かえる，孵化する [他] ②（卵から）～をかえす ③（計画など）を企てる
2014,cling,[自] （to ～）（～に）固執する，しがみつく
2015,adhere,[自] （to ～）（規則，主義，法律などに）忠実に従う
2016,collaborate,[自] （to do）共同して働く
2017,lag,[自] （behind ～）（～に）遅れる
2018,cater,[自] ①料理を提供する ②（to ～）（～の要望などに）応える
2019,flush,[自] （ほおなどが）紅潮する [他] ②～を水で流す
2020,ascribe,[他] （A to B）（A）の原因は（B にある）と主張する
2021,endorse,[他] （計画，候補者など）を支持する
2022,disclose,[他] ～を公表する，暴く
2023,improvise,[他] ～を即興で作る［歌う，演奏する］
2024,transplant,[他] ①（花や木，器官など）を移植する [名] ②移植
2025,encompass,[他] ～を含む
2026,forge,[他] ①（関係など）を築く ②～を偽造する
2027,entangle,[他] （be［get］ ―ed in［with］ ～)～に絡まる
2028,entail,[他] （必然的に）～を伴う
2029,herald,[他] ～の先触れをする
2030,surpass,[他] ～を上回る
2031,transcend,[他] （経験・理解などの限界）を超える
2032,flatter,[他] ～にお世辞を言う
2033,enact,[他] （法律など）を制定する
2034,amend,[他] （憲法・法律など）を修正する
2035,kidnap,[他] ～を誘拐する
2036,smuggle,[他] ～を密輸する
2037,convict,[他] ①～に有罪判決を下す [名] ②有罪判決を受けた者
2038,hinder,[他] ～を妨げる
2039,inflict,[他] （A on B）（BにA（痛み，打撃など））を与える
2040,alleviate,[他] （苦痛・困難など）を軽減する
2041,eradicate,[他] ～を根絶する
2042,expel,[他] ～を追放する，～を退学処分にする
2043,omit,[他] ～を省く
2044,discard,[他] （不用品）を捨てる
2045,curb,[他] ①～を抑制する [名] ②縁石
2046,restrain,[他] ～を抑制する
2047,inhibit,[他] ～を抑制する
2048,hamper,[他] （しばしば受身形で）を妨げる，邪魔をする
2049,lure,[他] ①～を誘い込む [名] ②魅力，誘惑
2050,reassure,[他] ～を安心させる
2051,dictate,[他] ①～を書き取らせる ②～を命令する，規定する
2052,provoke,[他] ①（非難など）を引き起こす ②（意図的に）～を怒らせる
2053,refine,[他] ～を洗練させる
2054,enlighten,[他] ～を啓蒙する
2055,unleash,[他] （怒りなど）を爆発させる，～の束縛を解く
2056,prolong,[他] （時間・期間・感情など）を長引かせる
2057,mitigate,[他] （苦痛・影響・罰など）～を緩和する
2058,grind,[他] （穀物，肉など）を挽く
2059,withstand,[他] ～に耐える
2060,exert,[他] （力，影響力など）を働かせる
2061,summon,[他] ①～を呼ぶ，召喚する，喚問する ②（勇気など）を奮い立たせる
2062,thrust,[他] ①～を強く押しつける ②（刃物で）～を突き刺す
2063,pierce,[他] ～を突き刺す，～を突き通す
2064,harness,[他] （自然の力など）を利用する
2065,excavate,[他] ～を発掘する
2066,evade,[他] ～を逃れる
2067,embody,[他] ～を具体化する
2068,assimilate,[他] ①（食物，考えなど）を吸収する ②（言語，民族など）を同化する
2069,discern,[他] ～を見分ける
2070,scrutinize,[他] ～を詳細に調べる，精査する
2071,streamline,[他] （作業・組織など）～を合理化する
2072,mentor,[他] ①～を指導する [名] ②（会社，大学などでの）指導者
2073,contemplate,[他] ～を熟考する
2074,conjecture,[他] ～を推測する
2075,presume,[他] ①（人が主語）～と推定する ②（計画などが主語）～を前提とする
2076,gauge,[他] ～を（慎重に）判断する，評価する
2077,verify,[他] （事実かどうか）を確かめる，検証する
2078,pledge,[他] ～を誓う
2079,dismay,[他] ①～を狼狽させる[名] ②狼狽
2080,lament,[他] ～を深く悲しむ，嘆く
2081,perplex,[他] ～を困惑させる
2082,disgust,[他] ①～に嫌悪を抱かせる[名] ②嫌悪
2083,evoke,[他] ～を呼び起こす
2084,harbor,[他] ①（悪意・疑いなど）を心に抱く ②（菌など）を住まわせる
2085,friction,[名] 摩擦
2086,mutation,[名] 突然変異
2087,heredity,[名] 遺伝
2088,synthesis,[名] 合成，統合
2089,veterinarian,[名] 獣医
2090,epidemic,[名] （大）流行
2091,obesity,[名] （病的な）肥満
2092,neuron,[名] ニューロン，神経単位
2093,dementia,[名] 認知症
2094,diabetes,[名] 糖尿病
2095,placebo,[名] 偽薬，プラシーボ
2096,malnutrition,[名] 栄養失調
2097,dehydration,[名] 脱水（症状）
2098,abortion,[名] （妊娠）中絶（手術）
2099,antibiotic,[名] （通例 ―s）抗生物質
2100,psychiatry,[名] 精神科，精神医学
2101,cardiologist,[名] 心臓専門医
2102,kidney,[名] 腎臓
2103,posture,[名] 姿勢
2104,metabolism,[名] （新陳）代謝，代謝作用
2105,famine,[名] 飢饉
2106,riot,[名] 暴動〈可算〉
2107,asylum,[名] 亡命
2108,workforce,[名] 労働人口，総労働力
2109,prefecture,[名] 県，府
2110,hierarchy,[名] 階層構造
2111,autonomy,[名] 自治（権），自主性
2112,delegation,[名] 代表団，使節団
2113,congress,[名] （米国などの）議会，会議
2114,census,[名] 国勢［公的］調査
2115,monarch,[名] 君主
2116,monopoly,[名] 独占（権，品），独占企業
2117,surplus,[名] ①余剰 ②（会計・財政）余剰金，黒字
2118,expertise,[名] 専門的知識，専門的技術〈不可算〉
2119,quota,[名] ノルマ，割り当て
2120,subordinate,[名] ①部下 [形] ②下位の
2121,warehouse,[名] 倉庫，〈英〉問屋
2122,peasant,[名] （個々の）小作農
2123,correlation,[名] 相関（関係）
2124,asymmetry,[名] 非対称，不釣り合い
2125,disparity,[名] 相違，不均衡
2126,divergence,[名] 逸脱，相違，《数学》発散
2127,clash,[名] ①衝突，対立 [自] ②（with ～）衝突する
2128,persecution,[名] 迫害
2129,genocide,[名] 大量虐殺
2130,atrocity,[名] 残虐行為
2131,bribe,[名] 賄賂
2132,culprit,[名] ①（具体的な犯罪の）犯人 ②（何かの問題の）元凶
2133,hostage,[名] 人質
2134,conspiracy,[名] 陰謀
2135,peril,[名] （大きな）危機
2136,pitfall,[名] （通例 ―s）落とし穴，隠れた危険
2137,itinerary,[名] 旅程（表）
2138,upheaval,[名] 大変動
2139,commencement,[名] ①開始 ②〈米〉（高校・大学の）卒業式，学位授与式
2140,threshold,[名] （新しいものの）始まり
2141,onset,[名] （通例良くないことの）始まり
2142,momentum,[名] 勢い，はずみ
2143,deterrent,[名] 抑止するもの
2144,geometry,[名] 幾何学
2145,anthropologist,[名] （文化）人類学者
2146,internship,[名] 実務研修，医学研修
2147,paradigm,[名] 理論的枠組，パラダイム
2148,altruism,[名] 利他主義
2149,claustrophobia,[名] 閉所恐怖症
2150,Antarctic,[名] （the ―）南極（地方）
2151,latitude,[名] 緯度（省略形 lat.）
2152,odor,[名] （不快な）臭い
2153,meadow,[名] 草地，牧草地
2154,calamity,[名] （大きな）災害
2155,precipitation,[名] 降水（量），〈化学〉沈殿
2156,meteor,[名] 流星，隕石
2157,asteroid,[名] 小惑星
2158,eclipse,[名] （日食，月食などの）食
2159,glacier,[名] 氷河
2160,peninsula,[名] 半島
2161,hemisphere,[名] 半球
2162,lump,[名] ①かたまり，しこり [他] ②（together）～をひとかたまりにする
2163,cluster,[名] （同種の）集団，（植物の）房
2164,offspring,[名] （集合的に）（人間・動物の）子，子孫
2165,livestock,[名] 家畜〈不可算〉
2166,carnivore,[名] 肉食動物〈可算〉
2167,vertebrate,[名] ①脊椎動物 [形] ②脊椎動物の
2168,primate,[名] 霊長類
2169,parasite,[名] 寄生虫［動物，植物］
2170,cortex,[名] 皮質
2171,sibling,[名] 兄弟姉妹
2172,extrovert,[名] 外交的な人
2173,stigma,[名] 汚名
2174,plight,[名] 窮状，苦境
2175,turmoil,[名] 混乱
2176,fallacy,[名] 誤びゅう
2177,loophole,[名] 抜け穴
2178,congestion,[名] 混雑，充血
2179,vacuum,[名] ①真空（状態），（政治などの）空白 [他] ②～に掃除機をかける
2180,digit,[名] 桁
2181,bulk,[名] （the ― of ～）（～の）大半
2182,longevity,[名] 長寿，（在職期間などが）長いこと
2183,detour,[名] 回り道
2184,sewage,[名] 下水，（下水の）汚物，汚水
2185,landfill,[名] 埋め立て〈不可算〉，埋め立て地〈可算〉
2186,appliance,[名] （家庭用）器具
2187,cuisine,[名] （独特の）料理（法）
2188,beverage,[名] （通例 ―s）飲料
2189,staple,[名] ①必需食料品，主要作物 [形] ②主要な
2190,scenario,[名] （予想される）筋書き，事態，科学的モデル
2191,autograph,[名] （有名人などの）サイン
2192,archive,[名] ①（―s）（集合的に）記録文書，公文書 ②公文書保管庫
2193,rhetoric,[名] ①美辞麗句，修辞（法)[形] ②修辞的な
2194,connotation,[名] 言外の意味，含意
2195,anecdote,[名] 逸話，秘話
2196,lord,[名] ①（通例 the Lord）神 ②高位の貴族，支配者
2197,saint,[名] ①聖人 ②（S―）（人名の前で）聖...
2198,prophet,[名] 預言者，予言者
2199,pilgrim,[名] 巡礼者
2200,salvation,[名] 救済
2201,artifact,[名] （考古学的価値のある）人工遺物，出土品（〈英〉artefact）
2202,token,[名] ①（as a ― of）（～の）しるし（として)②（バスなどで使われる）代用硬貨，トークン ③〈英〉商品引換券
2203,cue,[名] 合図、キュー
2204,quest,[名] 探求
2205,melancholy,[名] 憂うつ，ふさぎ込み
2206,self-esteem,[名] 自尊心
2207,empathy,[名] 共感（能力），感情移入
2208,precaution,[名] 用心，予防策
2209,distress,[名] ①苦しみ，苦難 [他] ②～を苦しめる
2210,apprehension,[名] ①不安 ②逮捕
2211,scorn,[名] 軽蔑
2212,menace,[名] （to ～）（～にとっての）厄介なもの［人］，脅威
2213,sentiment,[名] 感情
2214,verge,[名] ①瀬戸際，寸前 ②道路べり，（場所の）縁
2215,plausible,[形] （説明，言い訳などが）もっともらしい
2216,holistic,[形] 全体（論）的な
2217,contagious,[形] 感染（性）の
2218,vocal,[形] ①発声の ②（about ～）（～について）遠慮なく意見を述べる
2219,sensory,[形] 感覚の
2220,numb,[形] （寒さや麻酔などで）麻痺している，感覚を失った
2221,physiological,[形] 生理的な
2222,bilateral,[形] 二国間の，双方の
2223,feudal,[形] （主に欧州の）封建制の
2224,imperial,[形] 帝国の
2225,complementary,[形] 相補的な
2226,pertinent,[形] ①（直接）関連のある ②適切な
2227,intrinsic,[形] 固有の，本来備わっている
2228,unprecedented,[形] 前例のない，空前の
2229,tentative,[形] 仮の，試験的な
2230,drastic,[形] 抜本的な，思い切った
2231,ubiquitous,[形] 偏在している，至る所にある
2232,pervasive,[形] 広く行き渡った
2233,exponential,[形] （増加が）指数関数的な，急激な
2234,perpetual,[形] 絶え間ない，永続する
2235,future-oriented,[形] 未来志向の
2236,intact,[形] 無傷の
2237,maternal,[形] 母の，母親らしい
2238,masculine,[形] 男性的な
2239,juvenile,[形] 青少年の
2240,intelligible,[形] 理解できる
2241,dairy,[形] 酪農（業）の
2242,stray,[形] （動物などが）家のない，道に迷った
2243,dormant,[形] （火山などが）休止状態の，眠っている
2244,comprehensive,[形] 包括的な
2245,edible,[形] 食用の
2246,perishable,[形] （食べ物などが）腐りやすい
2247,naive,[形] 世間知らずの，愚直な
2248,zealous,[形] 熱心な
2249,timid,[形] 臆病な
2250,delinquent,[形] 非行の
2251,sober,[形] ①（酒に）酔っていない ②（人，習慣などが）真面目な
2252,obstinate,[形] 頑固な，強情な
2253,solitary,[形] ①（人が）孤高の ②ただひとつの
2254,vulgar,[形] ①（人，行動が）品がない ②（冗談などが）卑わいな
2255,skeptical,[形] 懐疑的な
2256,accustomed,[形] （to ～）（～に）慣れている
2257,obsessed,[形] （with［by］ ～）（～に）取りつかれて，頭が一杯で
2258,preoccupied,[形] （with ～）（～に）夢中になった，（～で）頭がいっぱいで
2259,prone,[形] （be ― to do）（好ましくないことを）～しがちである
2260,apt,[形] （be ― to do）（本来的に）～する傾向がある
2261,empirical,[形] 経験［実験］による
2262,susceptible,[形] （to ～）（～の）影響を受けやすい
2263,pivotal,[形] 極めて重要な
2264,fabulous,[形] ①とても素敵な ②莫大な
2265,splendid,[形] 素晴らしい
2266,intriguing,[形] 興味深い
2267,ingenious,[形] 独創的な
2268,affluent,[形] 裕福な
2269,renowned,[形] 有名な
2270,eminent,[形] 著名な，地位が高い
2271,conspicuous,[形] 目立つ
2272,adept,[形] （at ～）（～に）熟練した
2273,proficient,[形] 熟達した
2274,immense,[形] 莫大な，膨大な
2275,unanimous,[形] 満場一致の
2276,reckless,[形] 無謀な
2277,futile,[形] 無駄な
2278,brutal,[形] 残忍な
2279,ominous,[形] 不吉な
2280,detrimental,[形] （to ～）（～に）有害な
2281,wicked,[形] 邪悪な
2282,cynical,[形] 冷笑的な
2283,savage,[形] （とても）容赦ない，どう猛な
2284,arbitrary,[形] 独断的な，勝手な
2285,monotonous,[形] 単調な
2286,crude,[形] ①粗末な，粗野な ②加工されていない
2287,extravagant,[形] 法外な，金遣いが荒い
2288,obsolete,[形] 廃れた
2289,devoid,[形] （of ～）（～を完全に）欠いている
2290,scarce,[形] 乏しい
2291,solemn,[形] ①（場所，祝祭が）厳粛な，（音楽が）荘厳な ②（態度が）真面目な
2292,rigid,[形] ①硬い ②（規則・行為・人などが）厳格な
2293,robust,[形] がっしりした，（経済が）活発な
2294,tangible,[形] 触れられる，明確な
2295,superficial,[形] 表面的な
2296,spatial,[形] 空間の
2297,hollow,[形] ①空洞の ②（物の表面が）くぼんだ ③うわべだけの
2298,homogeneous,[形] 均質の，同種の
2299,feasible,[形] （計画・方法などが）実現［実行］可能な
2300,viable,[形] （計画などが）実行可能な`,
  },
  {
    id: 'target',
    name: 'ターゲット1900',
    csv: `番号,単語,意味
1,create,を創り出す；を引き起こす
2,increase,増加する（⇔ decrease ⇒ 223）；を増やす
3,improve,を向上させる；よくなる
4,mean,を意味する；（...する）つもりである（to do）
5,own,を所有している；（事実・罪など）を認める
6,include,を含む（⇔ exclude ⇒ 1009）
7,consider,を見なす；について考える
8,allow,を許す；を与える；（～を）考慮に入れる（for）
9,suggest,を提案する；を暗示する
10,produce,を生産する；を取り出す
11,decide,を決める；に決着をつける
12,offer,を提供する，申し出る
13,require,を要求する；を必要とする
14,share,を共有する；を分担する
15,store,を保存する；を蓄える
16,tend,傾向がある；を世話する
17,concern,〔受身形で〕心配している；〔受身形で〕（～に）関係する（with）；に関連する
18,describe,について述べる，を説明する
19,involve,を関与させる；を伴う
20,reduce,を減らす；を（～に）変える（to）
21,design,を設計する；を計画する
22,force,に強いる；を強要する
23,limit,を制限［規制］する
24,bear,に耐える（≒ endure ⇒ 824）；を負う；を産む；を（心に）抱く
25,affect,に影響を及ぼす（≒ influence ⇒ 49）；を感動させる
26,deal,〔deal withで〕を処理する；〔deal inで〕を商う；を分配する
27,avoid,を避ける
28,relate,を関連づける；（～に）関連する（to）
29,realize,に気づく；を実現する
30,encourage,を奨励する；を励ます（⇔ discourage ⇒ 706）
31,compare,を比較する；を（～に）たとえる（to）
32,measure,を測る；を（比較して）評価する
33,exist,存在する；生存する
34,mark,に印をつける；を（記号で）示す；に汚れをつける
35,challenge,に異議を唱える；（人）に挑む
36,depend,頼る；～次第である
37,object,反対する；（...）と言って反対する（that節）
38,demand,を要求する
39,found,を設立する；（理論など）を（～に基づいて）築く（on）
40,complete,を完成させる，仕上げる
41,idea,考え，思いつき；理解；見解；概念
42,accord,一致；合意，協定
43,company,会社；〔集合的に〕仲間；（仲間と）一緒にいること；一座
44,interest,興味；利子；利害
45,research,（～についての）研究，調査（into / on / in）
46,cause,原因（⇔ effect ⇒ 48）；理由；大義
47,reason,理由；（...する）根拠（to do）；理性；分別
48,effect,影響，効果；結果
49,influence,影響（力）
50,situation,状況；（人の置かれた）立場
51,environment,環境（≒ surroundings）
52,skill,技能；熟練
53,matter,事柄；問題；〔～s〕事態；〔the ～〕困難；物質
54,view,（～についての）見解（on / about）；（～に対する）（特定の）見方（of）；眺め
55,value,価値；価格；評価；〔～s〕価値観
56,species,（生物の）種；種類
57,thought,考え；思考
58,knowledge,知識；知っていること；認識
59,memory,記憶（力）；（～の）思い出（of）
60,practice,実践，実行；（社会の）慣習；練習
61,benefit,利益，恩恵；給付金
62,theory,学説；理論；原理；推測
63,issue,問題（点）；発行（物）；発表
64,experiment,（～を対象とする）実験（on）
65,article,記事；条項；品物
66,focus,焦点；関心の的
67,subject,話題；科目；主題；被験者
68,project,計画；事業；研究計画
69,quality,質（⇔ quantity ⇒ 471）；特質
70,role,役割；（俳優などの）役
71,term,（専門）用語；〔～s〕条件；〔～s〕間柄；学期
72,statement,声明；主張；明細書
73,material,材料，素材；資料；生地
74,evidence,証拠
75,source,（～の）源，根源（of）；出所，情報源
76,community,（共同）社会，～界；地域社会；地域住民
77,technology,科学技術；応用技術
78,culture,文化；教養；耕作；養殖；培養
79,appropriate,（～に）適切な（for / to）
80,likely,ありそうな（⇔ unlikely ありそうもない）
81,possible,可能な；可能性のある
82,individual,個々の；個人の
83,public,公の（⇔ private 私的な）；公衆の；公開の
84,common,共通の；普通の；一般の
85,certain,確信して；確かな；ある；一定の
86,similar,似ている，類似した；同様の
87,recent,最近の
88,major,主要な；大きい（ほうの）；長調の
89,patient,忍耐強い；勤勉な
90,particular,特定の；特別の；（～について）やかましい（about）
91,physical,身体の（⇔ mental ⇒ 183）；物質的な；物理学の
92,various,さまざまな；いくつかの
93,available,手に入る；利用できる；手が空いている
94,native,出生地の；原産の；生得の
95,political,政治（上）の
96,due,予定された；（支払）期日で；しかるべき
97,blank,空白の；無表情な；がらんとした
98,ancient,古代の；昔からの
99,correct,正しい；適切な
100,despite,～にもかかわらず（≒ in spite of）
101,notice,に気づく
102,refer,言及する，関連する；参照する
103,approach,に近づく；に取り組む
104,wonder,かなと思う；（に）驚く（at）
105,imagine,（を）想像する；（を）推測する
106,recognize,を識別できる；を認める
107,solve,を解く，解明する；（困難など）を解決する
108,occur,起こる；心に浮かぶ；現れる
109,argue,"と主張する（≒ claim ⇒ 110, maintain ⇒ 206）；議論する"
110,claim,と主張する；を（自分のものとして）要求する
111,express,を表す，述べる
112,draw,を引き出す；を引く；を描く；近づく
113,waste,を浪費する，無駄にする
114,advance,を進歩させる；を進める；進歩する；進む
115,spread,を広める；広がる
116,prepare,を準備する；を調理する；（～のために）準備をする（for）
117,gain,を獲得する；（を）増す
118,achieve,を達成する；を成し遂げる
119,establish,を確立する；を設立する
120,supply,を供給する
121,suppose,と思う；と仮定する
122,perform,（を）行う；（を）演じる，（を）演奏する
123,prefer,のほうを好む
124,determine,を決定する；を正確に知る
125,treat,を扱う；を治療する
126,prove,を証明する；判明する，わかる
127,apply,を適用［応用］する；申し込む；（～に）適用される（to / in）
128,mention,に言及する；と言う
129,communicate,（～と）情報交換をする（with）；を伝達する
130,contain,を含む；を収容する；（感情など）を抑える
131,contact,と連絡を取る；接触する
132,regard,を見なす；を見る；を評価する
133,respect,を尊敬する；を尊重する
134,search,捜す；を捜索する；を詳しく調べる
135,connect,をつなぐ；を関連づける
136,decline,減少する；衰退する；を断る
137,prevent,を妨げる；を防ぐ
138,suffer,苦しむ；患う；（苦痛など）を経験する
139,survive,を切り抜けて生き残る；より長生きする；生き延びる
140,publish,を出版する；を公表する
141,opportunity,機会（≒ chance）
142,task,（課せられた）仕事，作業；課題；タスク
143,industry,産業；勤勉（≒ diligence）
144,medium,（情報伝達の）媒体；手段
145,economy,経済（状態）；経済圏；節約
146,policy,政策，方針；（個人の）主義
147,account,説明；勘定；口座
148,trade,貿易；商売，取引
149,model,模範；モデル；模型；型
150,figure,数字；姿；人物；図表
151,cell,細胞；独房；電池
152,image,印象，イメージ；画像；像
153,emotion,感情，情動；感動
154,stress,ストレス；圧力；強調
155,decade,10年間
156,range,範囲；射程距離；（同類の）組
157,character,性格，個性；特徴；登場人物；文字
158,advantage,利点；優勢；有利
159,phrase,句；成句；言葉遣い
160,damage,損害，損傷；〔～s〕損害賠償金
161,impact,影響；（激しい）衝突；衝撃（力）
162,method,方法；体系；秩序
163,resource,〔通例～s〕資源；〔通例～s〕資金；才覚
164,region,地域；領域；部位
165,medicine,薬；医学
166,detail,〔～s〕詳細（な情報），細部
167,feature,特徴；〔通例～s〕顔つき；特集記事［番組］
168,function,機能；関数
169,access,利用，入手；接近（の機会・方法・権利）
170,item,品目，項目；（同種の中の）～個；（短い）記事
171,income,収入；所得
172,attitude,態度；考え方，心構え
173,site,用地，場所；跡地；（ウェブ）サイト
174,aspect,（物事の）側面；観点；様相
175,structure,構造；体系；構造物
176,habit,習慣，癖
177,link,関連，つながり；（2地点を結ぶ）交通手段；リンク
178,instance,（具体的な）例，実例；（特定の）場合
179,positive,肯定的な；積極的な；確信して；（検査結果が）陽性の
180,negative,否定的な；消極的な；（検査結果が）陰性の
181,complex,複雑な；複合（体）の
182,current,現在の；現代の；通用している
183,mental,精神の；知能の；頭の中で行う
184,specific,特定の；明確な，具体的な；（～に）特有の（to）
185,significant,重要な，重大な；意義深い
186,essential,（～に）必要不可欠な（to / for）；本質的な
187,official,公用の；公式の；役所の
188,financial,財政（上）の；財界の
189,academic,学問の；大学の
190,aware,気づいて，知って
191,worth,（...する）に値する（doing）；の価値がある
192,potential,潜在的な；可能性を秘めた
193,active,積極的な；活動的な；効力のある
194,digital,デジタル方式の；デジタル［数字］表示の
195,mobile,可動［移動］式の；流動性のある
196,novel,斬新な，目新しい
197,plastic,柔軟な；プラスチックの，ビニールの
198,chemical,化学の，化学的な
199,necessary,必要な（≒ essential ⇒ 186）
200,eventually,結局（は）
201,identify,を特定する；を（～と）同一視する（with）
202,represent,を表す；を代表する；に相当する
203,indicate,を指し示す；を述べる
204,manage,をなんとか成し遂げる；を管理する
205,attend,に出席する；（を）世話する；（～に）対処［対応］する（to）
206,maintain,を維持する；と主張する；を養う
207,survey,を調査する；をじろじろ見る；を概観する
208,replace,に取って代わる；を取り替える
209,sort,を（～に）分類する（into）；を（～から）えり分ける（from）
210,conduct,（調査・実験など）を実施する；を導く
211,associate,を結び付けて考える；（～と）交際する（with）
212,attempt,を試みる，企てる
213,promote,を促進する；〔通例受身形で〕昇進する
214,earn,を稼ぐ；を得る；をもたらす
215,unite,を団結させる；（を）結合する；団結する
216,feed,に食べ物［乳］を与える；に（～を）供給［補給］する（with）；餌を食べる
217,seek,を追い求める；（助けなど）を要請する
218,observe,に気づく；を観察する；を遵守する
219,reveal,を明らかにする；を見せる
220,estimate,と推定する；を見積もる；を評価する
221,reflect,を反映する；（を）反射する；（を）熟考する
222,attract,を引きつける
223,decrease,減少する（⇔ increase ⇒ 2）；を減らす
224,ignore,を無視する
225,match,（と）合う；に匹敵する；一致する
226,define,を定義する；を明確にする
227,adapt,適応する；を（～に）適合させる（to）
228,contribute,貢献する，一因となる；（を）寄付する；（を）寄稿する
229,exchange,（を）交換する；両替する
230,display,を示す；を発揮する；を展示［陳列］する
231,respond,反応する；答える
232,hide,を隠す（≒ conceal ⇒ 1116）；隠れる
233,doubt,ではないと思う；を疑う
234,remove,を取り除く；を解雇する
235,wind,（ねじなど）を巻く；（道などが）曲がりくねる；巻きつく
236,assume,を当然のことと思う，と仮定する；（権力など）を手に入れる；（責任など）を引き受ける
237,relax,くつろぐ；緩む；をくつろがせる；を緩める
238,satisfy,を満足させる；（条件など）を満たす
239,desire,を強く望む
240,succeed,（～に）成功する（in）；（～を）継承する（to）
241,concept,概念；考え；（商品・販売の）コンセプト
242,fashion,流行，ファッション；方法，流儀
243,device,装置，機器；方策；デバイス
244,charge,料金；世話；管理；告発
245,contrast,（～との）対照（with / to）
246,colleague,（職場の）同僚
247,pain,苦痛，痛み；苦悩；〔～s〕骨折り
248,bill,請求書；【英】勘定書（≒ 【米】check）；法案
249,content,内容，中身；コンテンツ
250,section,部門；部分；地区；欄
251,audience,〔集合的に〕聴衆，観客；視聴者
252,surface,表面；〔the ～〕外見
253,crop,〔しばしば～s〕作物；収穫高
254,topic,話題，トピック；主題
255,technique,技術；技巧；手法
256,status,地位；状態
257,option,選択（の自由）；選択肢
258,reward,報酬；報い
259,race,人種；民族；競争
260,crime,罪，犯罪；違法行為
261,conflict,争い；論争；不一致
262,struggle,闘い；懸命の努力
263,context,状況，背景；文脈
264,debate,討論，論争；討論会
265,fuel,燃料；勢いを増加させるもの
266,pollution,汚染，公害
267,trend,（～への）傾向（toward）；流行
268,balance,均衡，バランス；（体の）平衡；残高
269,traffic,交通；通行；交通［輸送］量；（不正）取引
270,strategy,戦略
271,basis,基礎；根拠；基準
272,consequence,〔通例～s〕結果；重大性
273,aim,目的，目標；狙い
274,ancestor,祖先（⇔ descendant 子孫）；原型
275,gene,遺伝子
276,track,跡；軌道；【米】（鉄道の）番線；走路
277,revolution,革命；回転；（天体の）公転（⇔ rotation 自転）
278,progress,進歩；前進
279,cognitive,認知の
280,ideal,理想的な；観念的な
281,efficient,効率的な；有能な
282,universal,普遍的な；宇宙の；万能の
283,vast,莫大な；広大な
284,extra,追加の，余分の；別勘定の
285,entire,全体の，全部の（≒ whole）；完全な
286,familiar,精通している；よく知られている
287,obvious,明らかな（≒ clear）
288,moral,道徳（上）の，倫理的な；道徳的な
289,ordinary,一般の，普通の；並の
290,equal,（～に）等しい（to）；匹敵する；平等な
291,previous,以前の，前の
292,FALSE,間違った；虚偽の；偽の
293,rare,まれな，珍しい；希少な
294,legal,法律の；合法の（⇔ illegal 違法の）
295,independent,（～から）独立した（of / from）
296,extreme,極端な；極度の，過激な
297,actual,実際の，現実の
298,willing,いとわない，かまわないと思う
299,urban,都市の；都会的な（⇔ rural ⇒ 387）
300,whereas,～するのに（対し），～する一方
301,predict,を予言［予測］する
302,examine,を調べる；を診察する；を尋問する
303,trust,を信頼する；を（信頼して）託す
304,stick,を動けなくする；を突き刺す；（～に）くっつく（to / on）
305,emerge,現れる；明らかになる；台頭する
306,vary,さまざまである；変わる；を変える
307,release,を放出する；を解放する；を発表する
308,divide,を分ける；分かれる
309,enable,（人）が...できるようにする；を可能にする
310,judge,（を）判断する；に判決を下す
311,rely,頼る（≒ depend ⇒ 36）
312,engage,を従事させる；を（～として）雇う（as）；（～に）従事する（in / with）
313,shift,を変える，移す；変わる；移動する
314,adopt,を採用する；（態度など）をとる；を養子にする
315,acquire,を得る；を習得する
316,expand,（を）拡大する；（を）詳説する
317,refuse,を拒む；を断る；拒絶する
318,strike,の心を打つ；を襲う；を打つ；（に）ぶつかる
319,repeat,（を）繰り返す；を復唱する
320,consume,を消費する；を食べる，飲む
321,confuse,を混同する；を当惑させる
322,select,を選ぶ，えり抜く
323,evolve,（徐々に）発展する；進化する
324,convince,を納得［確信］させる
325,recall,を思い出す；を呼び戻す
326,destroy,を破壊する；（人）を破滅させる
327,preserve,を保存する；を保持する；を保護する
328,organize,を準備する；を組織する
329,warn,（人）に（～を）警告［注意］する（of / against）
330,address,（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）
331,operate,を操作する；機能する；手術する
332,participate,参加する
333,surround,を取り巻く；にまつわる
334,flow,流れる；（～から）生じる（from）
335,bore,（人）を退屈させる，うんざりさせる
336,complain,（と）不平［苦情］を言う；訴える
337,host,を主催する；のホスト役を務める
338,combine,を（～と）結び付ける（with）；（～と）結び付く（with）
339,extend,を伸［延］ばす；伸びる；及ぶ
340,appreciate,を正当に評価する；を鑑賞する；を感謝する
341,target,（到達・攻撃）目標；的
342,element,要素，成分；元素；〔an / ofで〕少しの
343,principle,原則，原理；主義，信条
344,phenomenon,現象
345,atmosphere,〔the ～〕大気；雰囲気
346,origin,起源；源
347,personality,個性，性格
348,capacity,（最大）容量，収容能力；（潜在）能力
349,profit,利益；収益（率）；得
350,circumstance,〔通例～s〕状況，事情；境遇
351,manner,〔～s〕作法；方法；物腰
352,threat,脅威；（悪い）兆し；脅迫
353,resident,居住者；滞在者
354,wealth,富；資源；富裕
355,institution,機関；協会；施設；制度
356,authority,〔通例 the ～ties〕（関係）当局；権威；権限
357,vote,投票；投票結果；〔the ～〕選挙権
358,sight,光景；〔the ～s〕名所；見（え）ること；視野；視力
359,campaign,運動；軍事行動
360,fund,〔しばしば～s〕基金，資金
361,web,〔the W-〕ウェブ；（クモの）巣
362,symbol,象徴，シンボル；記号；標章
363,analysis,分析（結果）（⇔ synthesis ⇒ 1868）
364,version,（本・製品などの）版；解釈
365,perspective,観点，見方；大局観；遠近法
366,crisis,危機
367,disaster,災害；惨事
368,lecture,講義，講演；説教
369,psychology,心理学；心理（状態）
370,gender,（社会的・文化的）性，性別
371,custom,（社会的な）慣習；〔～s〕税関；〔～s〕関税
372,court,裁判所，法廷；裁判；宮廷；中庭
373,desert,砂漠；不毛の地
374,soil,土地，土壌；（悪事などの）温床
375,agriculture,農業；農学，畜産
376,fossil,化石；時代遅れの人［物］
377,document,（公）文書，書類；記録，資料
378,vocabulary,語彙
379,intelligent,聡明な；知能を有する
380,conscious,意識して，気づいて（≒ aware）
381,capable,能力がある；有能な
382,accurate,正確な；精密な
383,fundamental,基本的な；必須の
384,artificial,人工の（⇔ natural 自然の）；不自然な
385,firm,確固たる；堅固な；安定した
386,overall,総合的な；全体的な
387,rural,田舎の（⇔ urban ⇒ 299），田園の
388,military,軍の，軍事（用）の
389,nuclear,核の，原子力の
390,biological,生物学（上）の
391,constant,絶え間ない；一定の
392,severe,（人・規律・事態・天気などが）厳しい；猛烈な
393,visual,視覚の；目に見える
394,enormous,莫大な，巨大な
395,convenient,便利な，都合のいい
396,domestic,家庭の；国内の；（動物が）飼いならされた
397,mass,大規模な，大量の；大衆（向け）の
398,typical,典型的な；（～に）特有の（of）
399,overseas,海外へ［に，で］（≒ abroad）
400,nevertheless,それにもかかわらず（≒ nonetheless ⇒ 1000）
401,demonstrate,を論証［証明］する；デモをする
402,behave,振る舞う；作動する
403,educate,を教育する；に教える；（能力など）を養う
404,purchase,を購入する
405,recommend,を勧める
406,admit,（を）（しぶしぶ）認める；に（～への）入場［入学など］を認める（to / into）
407,generate,を生み出す；（電気など）を発生させる
408,explore,（を）調査［探究］する；（を）探検［探査］する
409,amaze,をびっくりさせる
410,tear,を引き裂く；裂ける
411,settle,を解決する；（に）移り住む；を落ち着かせる
412,afford,を持つ［する］余裕がある；を与える
413,conclude,と結論づける；を締めくくる；を締結する
414,advertise,を宣伝する；（～を求める）広告を出す（for）
415,encounter,に遭遇する；に（思いがけず）出会う
416,remind,に思い出させる
417,locate,〔受身形で〕位置する；の位置を探し当てる
418,aid,を援助する，助ける（≒ help）
419,bite,（を）かむ，（に）かみつく；（を）刺す
420,deliver,を配達する；（演説・講義）をする；子を産む
421,perceive,に気づく；を知覚する；を理解する
422,distinguish,を区別する
423,imply,を暗に意味する；を必然的に伴う
424,handle,を処理する，扱う；を論じる；を商う
425,praise,を（～のことで）賞賛する（for）；賛美する
426,appeal,訴える；抗議する；（上級審に）上訴する
427,insist,（を）強く主張する；要求する
428,compete,競う；〔通例否定文で〕（～に）匹敵する（with）
429,rank,を位置づける，評価する；（ある地位に）位置する
430,deny,を否定する；を拒む
431,reject,を拒否する
432,intend,を意図する
433,expose,をさらす；を暴露する；を露出する
434,favor,に賛成する；を好む；をひいきする
435,inspire,（人）を奮起させる；を喚起する
436,propose,を提案する；をもくろむ；結婚を申し込む
437,spell,（語）をつづる；という語になる
438,breathe,呼吸する；を吸う
439,repair,を修理する（≒ fix）；を修復する
440,consist,（～から）成る（of）；（～に）ある（in）
441,comment,意見，コメント；批判
442,instruction,〔通例～s〕指示；〔～s〕（製品の）使用書
443,religion,宗教；信条；信仰（心）
444,neighborhood,地域；近所
445,laboratory,実験室，研究室
446,presence,存在；出席；面前
447,confidence,自信；信頼；秘密
448,harm,害，損害
449,instrument,器具；楽器（≒ musical instrument）
450,category,部類，区分；範疇
451,capital,資本；首都；大文字（≒ capital letter）
452,outcome,結果（≒ result）；成果
453,notion,概念，観念；見解；意向
454,review,（書物などの）論評；再調査；【米】復習
455,trait,特性（≒ feature）
456,diversity,多様性；相違点
457,victim,犠牲（者），被害者
458,occasion,場合，時；行事；機会
459,facility,施設，設備；機能；才能
460,stock,在庫品；蓄え；株
461,conference,会議；協議
462,humanity,人類；人間性；人情；〔（the） ～ties〕人文科学
463,dialect,方言
464,proportion,割合；部分；釣り合い
465,tip,助言，秘訣；チップ；先端
466,lawyer,弁護士
467,stuff,（漠然と）物；素材；素質
468,comfort,快適さ；慰め
469,philosophy,哲学；原理；人生観
470,mammal,哺乳動物
471,quantity,量（⇔ quality ⇒ 69）；分量
472,landscape,風景；領域；状況
473,tribe,部族；仲間
474,organ,器官，臓器；組織；（パイプ）オルガン
475,trial,試み，（品質・性能などの）試験；裁判；試用期間
476,norm,規範；標準
477,code,規範；暗号；法典
478,substance,物質；実体；趣旨
479,multiple,多様な；種々雑多な
480,numerous,非常に数の多い
481,narrow,狭い；細い；限られた
482,widespread,広範囲にわたる；広く普及した
483,sufficient,（～に；...するのに）十分な（for；to do）
484,proper,適切な；正式の；〔名詞の後ろで〕主要な；（～に）固有の（to）
485,linguistic,言語の，言語学の
486,annual,年1回の，例年の；1年間の
487,contemporary,現代の；同時代の；同年輩の
488,contrary,（～と）反対の（to）
489,strict,（規則などが）厳しい；厳格な
490,civil,市民の；民間の；民事の（⇔ criminal 刑事の）
491,odd,奇妙な（≒ strange）；奇数の
492,unknown,不明の；（～に）知られていない（to），無名の
493,superior,よりすぐれた（⇔ inferior ⇒ 1092）
494,sensitive,敏感な；神経質な；微妙な
495,violent,（人・気質などが）激しい；暴力的な
496,virtual,仮想の；事実上の
497,regardless,（～に）かまわない，無頓着な（of）
498,immediate,即座の；当面の；すぐそばの；直接の
499,crucial,重要な
500,somewhat,いくぶん，多少
501,interpret,を解釈する；（を）通訳する
502,translate,を翻訳する；を（～に）変える（into）
503,concentrate,（を）集中する
504,request,に（...するように）頼む（to do）；を要請する
505,criticize,を批判する；を批評する
506,overcome,を克服する
507,obtain,を得る
508,inform,に知らせる；情報を提供する
509,ensure,を確実にする（≒ make sure）；を守る
510,announce,を発表［公表］する，知らせる；（物事が）を告げる
511,grant,（人）に（許可・権利など）を与える；を認める
512,freeze,凍る；を凍らせる；（計画・資金など）を凍結する
513,oppose,に反対する；を対抗［対比］させる
514,differ,異なる
515,hate,をひどく嫌う；を残念に思う
516,emphasize,を強調する；を重視する
517,employ,を雇う（≒ give ～ a job）；を使う（≒ use）
518,credit,（功績など）を（～に）帰する（to）；を信じる
519,transform,を変える；変わる
520,construct,を建設する（＝ build）；を構成する
521,arise,生じる
522,beat,を打ち負かす；（を）打つ，たたく
523,regret,を後悔する
524,alter,を変える；変わる（≒ change）
525,absorb,を吸収する；を併合する；を夢中にさせる
526,disappoint,を失望させる；（希望など）をくじく
527,cure,を治す；を取り除く；（病気が）治る
528,transport,を輸送する；を運ぶ
529,rush,急いで行く；性急に行動する；をせき立てる
530,hang,を掛ける；を絞首刑にする；垂れ（下が）る
531,blame,を責める；の責任を負わせる
532,ban,を（法的に）禁止する；を締め出す
533,fascinate,を魅了する
534,recover,回復する；を取り戻す
535,celebrate,を祝う；を挙行する
536,manufacture,を製造する；をでっち上げる
537,interact,影響し合う；相互に作用する
538,arrange,の段取りをつける；を手配する；を配置する
539,adjust,を調整する；を適合させる；順応する
540,confirm,を確認する；を裏づける
541,insight,見識，理解（力）；洞察力
542,innovation,革新；新機軸
543,budget,予算；経費
544,fee,料金；謝礼
545,expense,〔～s〕経費；費用；犠牲
546,debt,借金，負債；恩義
547,loan,貸付金，融資；貸すこと
548,duty,義務；〔しばしば～ties〕職務；関税
549,alarm,不安，恐れ；警報装置
550,emergency,緊急（事態）
551,democracy,民主主義，民主政治；民主国家
552,minister,大臣；（プロテスタント系の）聖職者
553,fellow,仲間，同僚；同級生；男
554,candidate,（～の）候補（者）（for）；志願者
555,corporation,（大）企業；法人
556,stereotype,固定観念；決まり文句
557,route,道（筋）；路線，ルート；（～の）手段（to）
558,disorder,障害，（心身の）不調；混乱
559,depression,憂うつ；うつ病；不況；低気圧
560,weapon,兵器，武器（≒ arms）
561,immigration,（他国からの）移民，移住；入国管理
562,barrier,（～に対する）障壁（against / to）；防壁
563,disadvantage,不利（な点）；障害；（信用などの）損失
564,mood,気分；機嫌；雰囲気
565,motion,動き，動作；運動；動議
566,routine,決まり切った仕事；いつもの手順
567,discipline,規律，しつけ；訓練；懲戒；学問分野
568,myth,作り話；神話
569,hypothesis,仮説；憶測
570,physician,【主に米】 医師（≒ doctor）；内科医
571,client,顧客（≒ customer）；（弁護士などの）依頼人
572,colony,植民地；集団居住地；（動植物の）コロニー
573,statistics,統計；統計学
574,grain,穀物；粒；きめ
575,ingredient,材料，成分；（成功の）要因
576,treasure,宝物，財宝；財産
577,contract,契約（書）；協定
578,welfare,福祉，幸福
579,prime,主要な，最も重要な；最適な；極上の
580,curious,好奇心の強い；奇妙な
581,dramatic,劇的な；演劇の
582,distinct,明らかに異なる；明瞭な
583,anxious,心配して；切望して
584,vital,必要不可欠な；活気のある；生命にかかわる
585,conventional,従来の；月並みな
586,abstract,抽象的な（⇔ concrete ⇒ 783）
587,minor,重要でない；小さい（⇔ major ⇒ 88）
588,extraordinary,並はずれた；異常な，驚くべき
589,stable,安定した（⇔ unstable 不安定な）；動じない
590,flexible,融通の利く，柔軟な
591,brief,簡潔な；短い
592,aggressive,攻撃的な；意欲的な
593,visible,（目に）見える（⇔ invisible 見えない）；明白な
594,unexpected,思いがけない，不意の
595,ethnic,民族の，人種の；民族特有の
596,alien,（～にとって）異質の（to）；外国の；宇宙人の
597,initial,初めの
598,exact,正確な；まさにその
599,precise,正確な（≒ exact）；精密な；まさにその
600,latter,後者の（⇔ former 前者の），後半の
601,commit,〔commit oneselfまたは受身形で〕献身する；（罪など）を犯す；を投入する
602,stimulate,を刺激する
603,enhance,（価値など）を高める，増す
604,pursue,を追求する；に従事する
605,react,反応する；化学反応を起こす
606,disagree,不賛成である；意見が食い違う
607,stare,じっと見る；を見つめる
608,abandon,を捨てる；を放棄する，断念する
609,quit,をやめる；（場所）を去る
610,capture,をとらえる；をとりこにする
611,transfer,を移す；を伝える；移る；乗り換える
612,bother,を悩ます；（～を）気にかける（about / with）
613,persuade,を説得する；に確信させる
614,rent,を賃借りする；を賃貸しする
615,breed,を繁殖させる，育てる；繁殖する
616,invest,（を）投資する；に（～を）与える（with）
617,reserve,を予約する；を取っておく；（判断など）を保留する
618,trace,（足跡・起源など）をたどる；を捜し出す
619,illustrate,を説明する；に挿絵を入れる
620,advise,に忠告［助言］する；（を）助言する
621,convey,を伝える；を運ぶ，運搬する
622,attach,を（取り）付ける；を付与する
623,stretch,を伸ばす；を広げる；伸びる；及ぶ
624,puzzle,を当惑させる
625,disturb,をかき乱す；を妨害する；を動揺させる
626,crash,衝突する，墜落する；をぶつけて壊す
627,cope,うまく処理する
628,permit,を許可する（≒ allow）（⇔ forbid ⇒ 1013）
629,impress,を感動させる；に印象を与える
630,suspect,ではないかと思う；（人）を疑う
631,upset,を動揺させる；をだめにする
632,frighten,（人）を怖がらせる
633,import,を輸入する（⇔ export （を）輸出する）；を取り込む
634,export,（を）輸出する（⇔ import を輸入する）
635,investigate,を調査する；を究明する；（～を）調査する（into）
636,monitor,を監視する；を傍受する
637,calculate,を計算する；を予測する
638,eliminate,を取り除く
639,ease,を軽減する；和らぐ；緩む
640,launch,を開始する；を売り出す；を発射する
641,sequence,連続；一連（のもの）
642,therapy,療法；心理療法
643,symptom,症状；兆候（≒ sign）
644,incident,出来事，事件；紛争
645,witness,目撃者（≒ eyewitness）；証人；証拠，証言
646,sum,（金）額；合計；要点
647,burden,負担；（重い）義務；積み荷
648,tone,口調；音色；雰囲気；色調
649,honor,光栄；名誉（⇔ dishonor 不名誉）；敬意
650,award,（～の）賞（for）；（証書などの）授与
651,priority,優先（事項）
652,logic,論理；道理；論理学
653,minimum,最小限度（⇔ maximum ⇒ 965）
654,exception,（～の）例外（to）
655,clue,（～の）手がかり（to / about）；（パズルの）ヒント
656,bond,絆；債券；束縛；接着剤
657,virus,ウイルス；（感染症の）病原体
658,surgery,（外科）手術；外科，外科医学
659,insurance,保険；保険料；保険金
660,frame,枠，（額）縁；骨組み；体格
661,shelter,避難（所），保護
662,territory,領土；（活動の）領域；（動物の）テリトリー
663,boundary,境界（線）；〔通例～ries〕限界
664,habitat,生息地；（人の）居住地
665,district,地区；行政区
666,conservation,（動植物などの）保護；保存
667,harvest,収穫（物）；収穫期；漁獲高
668,predator,捕食動物；略奪者
669,trap,わな；苦境
670,trick,こつ；策略；いたずら；芸当
671,fault,〔通例one's ～〕責任；欠点；誤り
672,discount,割引
673,bias,偏見；傾向
674,cooperation,協力，共同
675,patent,特許（権）；特許品
676,dialogue,対話，会話；意見の交換
677,component,構成要素；部品
678,reputation,評判；名声
679,verbal,言葉の；口頭での；動詞の
680,internal,内部の（⇔ external ⇒ 989）；国内の；内面的な
681,solid,しっかりした；硬い；固体の
682,remote,（～から）遠く離れた（from）；かけ離れた
683,principal,主要な；資本金の
684,sophisticated,高性能の，精巧な；洗練された
685,equivalent,等しい，相当する
686,rational,理性的な；合理的な
687,relevant,関係がある；適切な
688,absolute,絶対的な（⇔ relative 相対的な）
689,frequent,頻繁な
690,permanent,永続的な（⇔ temporary ⇒ 793）
691,intense,強烈な；熱烈な
692,meaningful,意味のある
693,evil,邪悪な；有害な
694,extinct,絶滅した；廃止された
695,random,無作為の；手当たり次第の
696,raw,生の；未加工の
697,rude,無礼な（⇔ polite 礼儀正しい）；粗野な
698,mere,単なる，ほんの
699,tropical,熱帯の
700,forth,前へ，先へ；それ以降
701,possess,を所有している；の心をとらえる
702,dominate,を支配する；（～より）優勢である（over）
703,guarantee,を保証する
704,melt,溶ける；なごむ；を溶かす
705,embarrass,に恥ずかしい思いをさせる
706,discourage,（人）にやる気をなくさせる；を落胆させる（⇔ encourage ⇒ 30）
707,detect,を感知する；を見つけ出す；に気づく
708,devote,をささげる
709,urge,に（強く）促す；を強く主張する；を駆り立てる
710,lend,を貸す（⇔ borrow を借りる）；（人）に（助言・援助など）を与える
711,restrict,を制限する
712,isolate,を孤立させる
713,accompany,に同行する；に付随する
714,exhaust,を疲れ果てさせる；を使い尽くす；排気する
715,annoy,を悩ます；〔受身形で〕腹が立つ
716,endanger,を危険にさらす
717,acknowledge,（事実など）を認める（≒ admit ⇒ 406）；に謝意を表す
718,admire,に（～のことで）敬服［感心］する（for）
719,evaluate,を評価する；を査定する
720,declare,を宣言する；を申告する
721,secure,を確保する；を守る
722,specialize,専門とする；【英】（～を）専攻する（in）（≒ 【米】major）
723,attribute,（結果など）を（～に）帰する（to）
724,pretend,（の）ふりをする
725,bury,を埋める；を埋葬する；を隠す
726,reverse,を逆転させる；を反対にする
727,resist,に抵抗する；〔通例否定文で〕を我慢する
728,scare,をおびえさせる；を脅す
729,imitate,をまねる；を模造する
730,assist,（を）援助する；を手伝う
731,resemble,に似ている
732,retire,（～から）引退する，退職する（from）；退く
733,neglect,をおろそかにする，怠る；を無視する
734,collapse,崩壊する；（人が）倒れる；を折り畳む
735,reform,を改革する；を改心させる
736,protest,（に）抗議する；を主張する
737,owe,に借りがある；のおかげである
738,sustain,を持続させる；を支える
739,assign,を割り当てる；を（～に）配属する（to）
740,accomplish,を成し遂げる
741,wisdom,知恵；賢明さ；学識
742,literacy,読み書きの能力；（特定分野の）知識
743,heritage,遺産
744,mission,使命；（外交）使節団；布教
745,license,免許（証）；許可
746,elite,〔通例the ～〕〔集合的に〕エリート
747,layer,層
748,motor,モーター；原動力
749,protein,たんぱく質
750,profession,職業；専門職；同業者仲間
751,editor,編集者；編集長
752,agent,仲介者，代理人；薬剤
753,globe,地球（≒ earth）；世界；球
754,haven,避難所，保護区；港
755,row,列；（建物が並ぶ）通り
756,sacrifice,犠牲；いけにえ
757,means,〔単数・複数扱い〕手段；〔複数扱い〕資力，収入
758,session,集まり；（議会の）会期；（開会中の）議会
759,league,（競技）連盟；同盟
760,contest,コンテスト，競技（会）；争い
761,guard,警備員；警備隊；監視，警戒
762,opponent,（試合・論争などの）相手；反対者
763,glance,（～を）ちらっと見ること（at）
764,divorce,離婚；分離
765,tissue,（生物の）組織；ティッシュペーパー
766,liquid,液体
767,inequality,不平等；不公平な事柄
768,prejudice,（～に対する）偏見（against）（≒ bias）
769,justice,公正，正義；司法
770,guideline,指針，ガイドライン；指導基準
771,platform,プラットフォーム；演壇；舞台
772,sector,（社会・経済などの）部門，セクター；（都市内の）地域
773,channel,チャンネル；伝達経路；海峡
774,glacier,氷河
775,primate,霊長目の動物
776,usage,（使）用法；語法；習慣
777,fortune,財産；幸運（≒ luck）；運命
778,correlation,相互関係，相関（関係）
779,artistic,芸術的な
780,literary,文学の；文語の（⇔ colloquial 口語体の）
781,classic,第一級の；典型的な；定番の
782,liberal,自由主義の；寛大な；一般教養の
783,concrete,具体的な（⇔ abstract ⇒ 586）；有形の
784,slight,わずかな；取るに足らない
785,federal,連邦（政府）の
786,primitive,原始的な；未開の
787,unfamiliar,（～に）不慣れな（with）；（～に）（よく）知られていない（to）
788,subtle,微妙な；（気体などが）希薄な
789,plain,明らかな；平易な；飾りのない；率直な
790,marine,海の；船舶の
791,apparent,明白な；一見～らしい
792,reluctant,気が進まない，嫌がる（⇔ willing ⇒ 298）
793,temporary,一時的な（⇔ permanent ⇒ 690）
794,guilty,罪悪感のある；（～について）有罪の（of）
795,royal,王の
796,pure,純粋な；潔白な；まったくの
797,incredible,信じられない；すばらしい
798,eager,（～を）熱望して（for）；熱心な
799,adequate,十分な；適切な（⇔ inadequate 不適切な）
800,via,～経由で；～の媒介で
801,assess,を評価する；を査定する
802,approve,賛成する；を承認する
803,remark,と述べる；（～について）意見を述べる（on / upon）
804,pose,（危険）を引き起こす；（問題など）を提起する；ポーズをとる；（～を）装う（as）
805,yield,をもたらす；を（～に）譲る（to）；（～に）屈する（to）
806,exhibit,を示す，見せる；を展示する
807,distribute,を（～に）分配する（to）；〔受身形で〕分布する
808,command,を命じる；を指揮する；（景色）を見渡せる
809,occupy,（空間・時間）を占める；を占領する
810,pop,ひょいと動く；不意に現れる；ポンとはじける
811,pile,を積み重ねる；積み重なる
812,greet,に挨拶する；を迎える
813,apologize,（～に；～のことで）謝る（to；for）；弁明する
814,frustrate,をいら立たせる；（計画・希望など）を挫折させる
815,relieve,を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する
816,derive,由来する；を引き出す；を推論する
817,deserve,に値する
818,peer,（～を）じっと見る（at / into）
819,defeat,を負かす（≒ beat）；を失敗させる
820,convert,を変える；を改宗［転向］させる；を交換する
821,wed,と結婚する；を（～と）結婚させる（to）
822,delight,を喜ばせる；（～を）大いに喜ぶ（in）
823,boost,を押し上げる；を増加させる
824,endure,に耐える（≒ put up with）；（に）持ちこたえる
825,correspond,一致する；（～に）相当する（to）；文通する
826,impose,を課す；を押しつける
827,rescue,を救う
828,resolve,を解決する；を決意する；を議決する
829,register,を記録する，登録する；（～に）登録する（for）
830,interrupt,を中断させる；（の）邪魔をする
831,rid,から（～を）取り除く，除去する（of）
832,prohibit,を禁止する
833,compose,を構成する；を創作する；を鎮静する
834,misunderstand,（を）誤解する
835,punish,を罰する；に損傷を与える
836,ruin,をだめにする；を破滅させる；破滅する
837,defend,を防御する；を弁護する
838,embrace,を受け入れる；（を）抱擁する；を包含する
839,modify,を修正する；を緩和する
840,qualify,（人）に資格を与える；資格がある
841,passion,情熱；熱中；激怒
842,enthusiasm,（～への）熱情，熱意（for）
843,phase,段階，局面；側面
844,mode,方式；気分；形態；流行
845,span,期間；範囲
846,gravity,重力，引力；重量；重大さ
847,orbit,軌道；（活動・勢力などの）範囲
848,asteroid,小惑星（≒ minor planet）；ヒトデ（＝ starfish）
849,core,核心；芯
850,soul,精神；魂，霊魂；生気
851,nerve,神経；〔～s〕神経過敏；（...する）度胸（to do）
852,infection,感染（症）
853,mall,【主に米】 モール，ショッピングセンター
854,grocery,〔～ies〕食料雑貨；食料雑貨店
855,humor,ユーモア；気分，機嫌；気質
856,instinct,本能；勘，直感；（自然に起こる）衝動
857,faith,（～への）信頼（in）；信仰（心）
858,courage,勇気
859,incentive,動機（づけ）；報奨金
860,prospect,見込み；〔～s〕（未来への）展望；有望な人
861,obstacle,（～に対する）障害（物）（to）
862,architecture,建築；建築様式；構造
863,stem,（草木の）茎，幹
864,illusion,錯覚，思い違い；幻想
865,discrimination,（～に対する）差別（against）；区別
866,shame,恥；残念なこと
867,drought,干ばつ；（慢性的な）不足
868,flavor,風味；特色
869,portion,部分；1人前；割り当て
870,recipe,調理法，レシピ；手順；秘訣
871,luxury,ぜいたく（品）；〔形容詞的に〕豪華な
872,chip,小片，破片；欠けた箇所；集積回路
873,ritual,儀式；（日常の）習慣的行為
874,sake,〔for the ～ ofで〕のために，の目的で；に免じて
875,prefecture,（日本の）県，府；（フランスなどの）県
876,council,（地方）議会；評議会；（公の）会議
877,administration,管理（部）；行政；政府（機関）
878,curriculum,教育課程，カリキュラム
879,precious,貴重な；高価な（≒ valuable）
880,generous,寛大な；気前のよい（⇔ stingy けちな）；豊富な
881,casual,何気ない；形式ばらない
882,optimistic,楽観的な（⇔ pessimistic ⇒ 1593）
883,rough,粗い；大まかな；乱暴な
884,unpleasant,不愉快な；不親切な，無礼な
885,Arctic,北極の（⇔ Antarctic 南極の）
886,ultimate,究極の
887,deaf,耳が聞こえない（≒ hard of hearing）
888,genuine,"本物の（≒ authentic ⇒ 1580, real）；偽りのない"
889,manual,体［手］を使う；手の；手動式の
890,mechanical,機械の；機械的な
891,instant,即時の，すぐの；即席の
892,spare,余分の，予備の
893,immune,（～に対して）免疫を持つ（to）；（～を）免れた（from）
894,harsh,厳しい；（光・色・味などが）不快な
895,collective,集団の，共同の
896,inevitable,避けられない
897,profound,重大な；深い；難解な
898,steady,着実な，一定の；安定した
899,mature,成熟した（⇔ immature 未熟な）；熟した
900,likewise,同様に（≒ in the same way）
901,chase,（を）追跡する；（を）追求する
902,sue,を告訴する；（～を求めて）訴訟を起こす（for）
903,gaze,じっと見る
904,slip,滑る；滑り落ちる；そっと動く
905,load,に積む；に負わせる
906,overwhelm,を圧倒する；を（精神的に）打ちのめす
907,wander,歩き回る；それる；はぐれる
908,float,漂う，浮かぶ；を浮かべる
909,pour,を注ぐ；激しく降る；押し寄せる
910,substitute,を代わりに使う；（～の）代理をする（for）
911,pronounce,を発音する；を宣言する
912,shrink,縮む，縮小する；減少する；ひるむ
913,restore,を回復させる；を修復する
914,trigger,を引き起こす；のきっかけとなる
915,grab,をつかむ；を横取りする；を急いで食べる
916,retain,を保持する；を覚えている
917,reproduce,を複製する；を繁殖させる；繁殖する
918,bob,上下に動く；急に動く；を上下に動かす
919,entertain,を楽しませる；をもてなす
920,interfere,干渉する，介入する；邪魔する
921,cultivate,を養う；を耕す；を栽培する
922,underlie,の根底にある
923,anticipate,を予期する；楽しみに待つ
924,justify,を正当化する
925,regulate,を規制する；を調整する
926,scan,を走査［スキャン］する；をざっと見る；を注意深く調べる
927,classify,を分類する；を機密扱いにする
928,submit,を提出する；〔submit oneselfで〕（～に）従う（to）
929,pause,（一時的に）中止する；（一瞬）立ち止まる
930,lean,傾く；寄りかかる；をもたせかける
931,bump,ぶつかる；をぶつける
932,fold,を折り畳む；（両腕）を組む；（折り）畳める
933,hesitate,躊躇する，ためらう
934,pump,（液体・気体）をポンプで送り込む；をくみ出す；を注ぎ込む
935,mount,を据えつける；に着手する；（自転車など）に乗る；増える
936,exceed,を超える；に勝る
937,undergo,を経験する；（手術など）を受ける；に耐える
938,confront,に立ち向かう；（困難などが）に立ちはだかる
939,consult,（に）相談する；を参照する
940,fulfill,を実現させる；を果たす；を満たす
941,privilege,特権，特典
942,formation,形成；構成（物）；隊列
943,dimension,側面，局面；次元；寸法
944,neuron,ニューロン，神経単位
945,sensation,感覚；大評判
946,chart,図，グラフ；海図；ヒットチャート
947,geography,〔the ～〕地理；地理学
948,panel,（専門家の）一団；討論者一同；羽目板
949,semester,【主に米】 （2学期制の）学期
950,workforce,労働人口，総労働力；全従業員（数）
951,mill,製造工場；製粉所；粉ひき機
952,abuse,乱用；虐待
953,vice,（道徳上の）悪（⇔ virtue ⇒ 1078）；欠点
954,fate,運命；結末；最期
955,tragedy,悲劇（的な事態）（⇔ comedy 喜劇）
956,scenario,（予想される）筋書き，事態；脚本
957,allergy,アレルギー
958,wound,（銃弾・刃物などによる）傷；痛手
959,antibiotic,〔通例～s〕抗生物質
960,vaccine,ワクチン
961,metaphor,隠喩；比喩
962,folk,人々；〔～s〕皆さん；〔one's ～s〕家族
963,fare,（乗り物の）料金
964,transition,移り変わり；過渡期
965,maximum,最大限（⇔ minimum ⇒ 653）
966,galaxy,星雲，銀河；〔the G～〕銀河系
967,mineral,鉱物；ミネラル
968,skeleton,骨格；骨組み；概略
969,counterpart,相当する物［人］
970,stroke,脳卒中；（ボールを）打つこと；（雷などの）一撃
971,pedestrian,歩行者
972,trail,（野山などの）小道；跡；手がかり
973,ecology,生態学；生態系；環境保護
974,sibling,きょうだい（の1人）
975,ratio,比率
976,mixture,混合（物）
977,charm,魅力；お守り
978,ambition,（～に対する）願望，野望（for）；野心
979,prominent,卓越した；目立つ
980,radical,急進的な；根本的な
981,prompt,即座の，迅速な
982,informal,形式ばらない，略式の（⇔ formal 正式の）；（言葉が）くだけた
983,mutual,相互の；共通の
984,neutral,中立の；（特徴・表情などが）はっきりしない
985,alert,警戒して；敏速な
986,magnetic,磁気の；磁石の；人を引きつける
987,polar,極地の；電極の
988,fluent,流ちょうな
989,external,外部の（⇔ internal ⇒ 680）；対外的な
990,passive,受動的な；消極的な
991,awful,ひどい；嫌な；ものすごい
992,unrelated,無関係の；血縁関係がない
993,cruel,残酷な；むごい
994,fake,偽の；見せかけだけの
995,vulnerable,（攻撃などに）弱い，もろい；傷つきやすい
996,urgent,緊急の
997,spiritual,精神の（⇔ material ⇒ 73）；霊的な
998,modest,謙虚な（≒ humble）；適度な；質素な
999,keen,熱心な；鋭敏な；（感情・関心などが）強い
1000,nonetheless,それにもかかわらず，それでもなお（≒ nevertheless）
1001,negotiate,交渉する；を（交渉して）取り決める
1002,grasp,を把握［理解］する；をしっかり握る
1003,donate,を寄付する；（臓器・血液）を提供する
1004,arrest,を逮捕する；を止める；（注意）を引く
1005,crack,ひびが入る；にひびを入れる
1006,tap,を軽くたたく；（液体）を出す；を盗聴する
1007,split,を分割する；を分担する；分裂する
1008,forecast,を予想［予測］する
1009,exclude,を除外する（⇔include を含む）
1010,overlook,を見落とす；を大目に見る；を見渡す
1011,burst,破裂する；（～を）突然始める（into）
1012,heal,（人・傷など）を治す；治る
1013,forbid,を禁じる（⇔permit 許可する）
1014,install,をインストールする；を設置する；を就任させる
1015,diminish,を減らす；減少する（≒decrease）
1016,cite,を引き合いに出す；を引用する
1017,quote,を引用する；を引き合いに出す
1018,dispute,に異議を唱える；（を）議論する
1019,highlight,を目立たせる、強調する
1020,distract,（注意など）をそらす
1021,cheat,をだます；不正をする
1022,foster,をはぐくむ；を養育する；を心に抱く
1023,obey,に従う；に服従する
1024,bend,を曲げる；を屈服させる；曲がる
1025,deprive,から（権利などを）奪う
1026,govern,（を）統治する、支配する
1027,log,〔log onで〕ログオンする；を記録する
1028,transmit,を伝える；（電波・信号など）を送る
1029,bully,をいじめる；を脅す
1030,leap,跳ぶ；さっと動く；急上昇する
1031,astonish,を驚かす
1032,thrill,をぞくぞくさせる；わくわくする
1033,nod,うなずく；会釈する；うとうとする
1034,bow,おじぎする；屈服する
1035,blend,を混ぜる；を調和させる；（～に）溶け込む（into）
1036,complicate,を複雑にする
1037,pitch,を投げる；倒れる；縦揺れする
1038,persist,続く；固執する
1039,dedicate,をささげる；を献呈する
1040,equip,に備えつける
1041,premise,前提；〔～s〕（建物を含めた）構内、敷地
1042,input,入力（情報）、投入；（情報・時間などの）提供
1043,merit,利点（⇔demerit 欠点）；功績；真価
1044,sympathy,同情；（～に対する）共感（with/for）
1045,compliment,賛辞；表敬
1046,infrastructure,インフラ、基本的施設；（経済）基盤
1047,ray,光線；ひらめき、一筋の光明
1048,distress,苦悩；苦痛；困窮
1049,joint,関節；接合（部）
1050,expedition,遠征（隊）、探検（隊）
1051,adolescent,青年；青年期の
1052,shade,（日）陰；色合い；日よけ；微妙な相違
1053,jury,陪審（員団）；審査員団
1054,ethic,倫理、道徳；〔～s〕倫理［道徳］規範
1055,penalty,（刑）罰；罰金；ペナルティー
1056,faculty,能力、機能；学部；教授陣
1057,scheme,計画（≒plan）；体系；陰謀
1058,nutrition,栄養（の摂取）
1059,particle,（微）粒子；ほんのわずか
1060,molecule,分子；微粒子
1061,nationality,国籍；国民；国民性
1062,poll,世論調査；投票（数）
1063,clinic,診療所、クリニック；（病院内の）～科
1064,dementia,認知症
1065,fatigue,疲労（≒exhaustion）
1066,dilemma,ジレンマ、板ばさみ
1067,queue,【英】（順番を待つ）列
1068,curve,（道路などの）カーブ；曲線
1069,narrative,物語、話；（小説の）叙述部分、地の文
1070,fingerprint,指紋
1071,file,ファイル；（書類の）とじ込み
1072,wilderness,荒野；（庭・町などの）放置された部分
1073,pesticide,殺虫剤；除草剤（≒herbicide）
1074,panic,パニック（状態）；狼狽
1075,fabric,織物、布（地）；構造
1076,fantasy,空想；幻想；幻想的作品
1077,fancy,（気まぐれな）好み；空想；思いつき
1078,virtue,美徳（⇔vice 悪）；長所；効能
1079,grateful,感謝している
1080,valid,妥当な；有効な
1081,elaborate,入念な；凝った
1082,moderate,適度な；穏健な
1083,dynamic,活動的な、精力的な；動的な（⇔static 静的な）
1084,brave,勇敢な（⇔cowardly 臆病な）；見事な
1085,brilliant,すばらしい；才能にあふれた；きらめく
1086,tremendous,途方もない、莫大な；すばらしい
1087,oral,口頭の
1088,innocent,無罪の（⇔guilty 有罪の）；無邪気な；無知の
1089,subsequent,その後の
1090,shallow,浅い（⇔deep 深い）；浅薄な
1091,indifferent,無関心な（≒uninterested）
1092,inferior,より劣った（⇔superior よりすぐれた）
1093,awkward,気まずい；ぎこちない；厄介な
1094,obese,肥満した
1095,pregnant,妊娠した；（～で）満ちている（with）
1096,intimate,親密な；密接な
1097,medieval,中世の；時代遅れの
1098,sacred,神聖な（≒holy）；宗教的な；厳粛な
1099,simultaneously,（～と）同時に（with）；一斉に
1100,versus,〔A ～ Bで〕A対B；AかBか
1101,proceed,進む，進行する；（～を）続行する（with）
1102,orient,（人）を（環境などに）慣らす（to）；〔受身形で〕（関心などが）（～に）向いている（to / toward）
1103,surf,（インターネット上の情報など）を見て回る；サーフィンをする
1104,filter,をろ過する；を取り除く
1105,bind,を縛る；を束縛する；を結び付ける
1106,resort,（好ましくない手段に）訴える，頼る（to）
1107,reinforce,を強化する；を補強する
1108,accumulate,を蓄積する，集める；積もる
1109,bet,と確信する，断言する；（金などを）かける
1110,advocate,を主張する；を擁護する
1111,constitute,を構成する；になる，に等しい
1112,undertake,を引き受ける；を保証する；に着手する
1113,grip,を握る；をとらえる
1114,dismiss,（意見など）を退ける；を解雇する
1115,fade,薄れる；衰える
1116,conceal,を隠す（≒ hide）；を秘密にする（⇔uncover ⇒ 1236）
1117,chew,（を）かむ；をかみ砕く
1118,swallow,（を）飲み込む；をうのみにする；に耐える
1119,seal,を密閉する；に封をする
1120,migrate,移住する；（鳥などが）渡る
1121,exaggerate,（を）誇張する；を強調する
1122,accuse,を非難する；を告訴する
1123,vanish,消える（≒ disappear）
1124,polish,を磨く；を洗練させる
1125,wipe,を拭く；を拭き取る；を消し去る
1126,sweep,（を）掃く；を一掃する；さっと通過する
1127,mislead,を誤解させる，欺く；（人）を間違った方向に導く
1128,spoil,を台無しにする；を甘やかす；だめになる
1129,compound,を悪化させる；を合成する；を混合する
1130,explode,爆発する；急増する；を論破する
1131,disgust,をむかつかせる；に愛想を尽かせる
1132,commute,通勤［通学］する
1133,decorate,を装飾する
1134,postpone,を延期する（≒ put off）
1135,cease,をやめる；終わる
1136,compromise,妥協する；を危うくする
1137,elect,を選出する
1138,extract,を取り［搾り］出す；を抜粋する
1139,inherit,を受け継ぐ；を相続する
1140,rear,（人・動物・植物）を育てる（≒ raise）
1141,empathy,感情移入，共感
1142,cue,合図；手がかり；（次の演技の）キュー
1143,enterprise,企業，事業；企画；進取の気性
1144,output,生産（高）；出力；排出（量）
1145,congress,（米国などの）議会；会議
1146,millennium,千年間，千年紀
1147,mankind,人類
1148,Muslim,イスラム教徒
1149,estate,（動産・不動産などの）財産；私有地
1150,landmine,地雷
1151,caution,用心；警告
1152,controversy,論争
1153,consensus,総意；（意見の）一致
1154,retail,小売り（⇔ wholesale 卸売り）
1155,fiber,繊維（質）；本質；精神力
1156,scent,（よい）香り；香水
1157,beverage,（水以外の）飲み物，飲料
1158,supplement,栄養補助剤，サプリメント；補足
1159,diabetes,糖尿病
1160,province,州，省；〔the ～s〕地方；分野
1161,reef,（岩や砂の）礁；暗礁
1162,microbe,微生物；細菌
1163,excess,過剰，超過
1164,gallery,美術館，画廊；観客，ギャラリー；回廊
1165,fame,名声
1166,deadline,締め切り
1167,undergraduate,学部学生
1168,slavery,奴隷制度；苦役
1169,prey,獲物；犠牲者
1170,mess,散らかった状態［物］；混乱状態
1171,recession,不況；後退
1172,retreat,後退，退却；（計画・決定などの）撤回
1173,grave,墓；〔通例the ～〕死
1174,column,コラム；（新聞などの）欄；円柱；（縦）列
1175,scenery,〔集合的に〕景色；背景
1176,plot,（小説などの）筋；陰謀
1177,sculpture,彫刻（作品）
1178,tablet,タブレット（型情報端末）；錠剤；平板
1179,dense,密集した，密度の高い；（霧などが）濃い
1180,exotic,外来の；異国風の
1181,acid,酸性の；酸っぱい；辛辣な
1182,bitter,苦い，つらい；辛辣な；怒りっぽい
1183,sensible,賢明な；実用的な；顕著な
1184,noble,高貴な；堂々とした；高潔な
1185,vague,漠然とした，あいまいな；おぼろげな
1186,parallel,（～と）平行［並行］の（to）；類似した
1187,tense,張り詰めた，緊張した
1188,vertical,垂直の（⇔ horizontal 水平な）；縦方向の
1189,indigenous,原産の，先住の；（その土地に）固有の
1190,aboriginal,〔通例A～〕アボリジニの；原生の，先住の
1191,seasonal,季節の，季節的な
1192,abundant,豊富な；（～に）富む（in）
1193,hybrid,ハイブリッドの；雑種の；混成の
1194,irrelevant,（～にとって）無関係の（to）；見当違いの
1195,ridiculous,ばかげた；法外な
1196,fairy,妖精の（ような）
1197,sensory,感覚の
1198,chronic,慢性の（⇔ acute ⇒ 1486）；長引く；常習の
1199,voluntary,自発的な（⇔ compulsory ⇒ 1384）；無償の
1200,inclined,傾向がある；傾いた
1201,infer,を推論する，推測する
1202,esteem,を尊敬する；を見なす
1203,tackle,に取り組む；と（～のことで）話をつける（about / on）
1204,venture,危険を冒して進む；を思い切ってする
1205,accelerate,を加速させる，促進する；加速する
1206,accustom,（人）を慣れさせる
1207,amuse,をおもしろがらせる，楽しませる
1208,flourish,繁栄する；繁茂する；を振りかざす
1209,thrive,繁栄する，うまくいく；繁茂する
1210,nurture,をはぐくむ；を養成する
1211,click,（を）クリックする；をカチッと鳴らす；カチッと音がする
1212,spin,回転する；を回転させる；（糸）を紡ぐ
1213,clip,を切り抜く；を（はさみで）切り取る；をクリップで留める
1214,drag,を引きずる；ぐずぐずする
1215,cast,を投じる；に役を当てる
1216,scatter,をまき散らす；分散する
1217,tempt,を（...する）気にさせる（to do）；を引きつける
1218,withdraw,を引き出す；を撤回する；撤退する
1219,yawn,あくびをする
1220,blink,まばたきする；点滅する；（目）をまたたく
1221,dye,を染める；染まる
1222,spill,をこぼす；こぼれる
1223,irritate,をいらいらさせる；をひりひりさせる
1224,insult,を侮辱する（≒ affront）
1225,enforce,を施行［実施］する；を（～に）強制する（on / upon）
1226,rob,から（金品を）奪う
1227,drain,（液体）を流出させる；（液体が）流れ出る
1228,suspend,を停職［停学，出場停止］にする；を一時的に中断する
1229,drift,漂う；さまよう；を押し流す
1230,forgive,を許す；を免除する
1231,revise,を修正する；を改訂する
1232,recruit,を募る；に新人を補充する
1233,twist,をねじる，ひねる；を歪曲する
1234,crush,を押しつぶす；を弾圧する；を絞り出す
1235,pin,をピンで留める；を突き刺す
1236,uncover,を暴く（⇔ conceal ⇒ 1116）；を 発掘する
1237,exploit,を活用する；を搾取する，につけ込む
1238,implement,を実行［実施］する
1239,integrate,を統合する；融合する
1240,incorporate,を取り入れる；を法人にする；合併する
1241,profile,人物の紹介；横顔；輪郭
1242,appetite,食欲；欲求
1243,impulse,衝動；刺激
1244,script,台本；筆跡
1245,anniversary,（～周年）記念日
1246,pension,年金
1247,temper,気質，気性；機嫌；かんしゃく
1248,cortex,皮質；樹皮
1249,syndrome,症候群；～現象
1250,chamber,（特定の目的の）部屋；議場；〔the ～〕議院
1251,utility,公共事業；公共料金；実用性
1252,cattle,〔集合的に〕牛
1253,herd,（牛などの）群れ；群衆
1254,fluid,流動体，液体
1255,pity,残念なこと；哀れみ
1256,priest,聖職者
1257,acquaintance,知人；面識；知識
1258,offspring,子孫，子；成果
1259,famine,飢饉；（食糧・物資の）ひどい不足
1260,deforestation,森林伐採
1261,jail,刑務所，拘置所（≒ prison）
1262,commodity,商品；有用なもの
1263,format,書式，形式；（本などの）型
1264,recipient,受け取る人；（臓器などの）被提供者
1265,drill,訓練；（反復）練習；ドリル，錐
1266,inability,無能，無力
1267,republic,共和国；共和制
1268,combat,戦闘；対立
1269,debris,（破壊された後の）残骸，瓦礫；がらくた
1270,bug,病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥
1271,fraction,わずか（≒ bit），一部；分数
1272,index,指標；索引；指数
1273,intuition,直観（力），直感
1274,motive,動機
1275,consent,同意，承諾
1276,hierarchy,（社会の）階層制；〔the ～〕支配層
1277,monument,記念碑，遺跡；金字塔
1278,asset,〔通例～s〕資産；価値のあるもの；利点
1279,decent,まずまずの；きちんとした；上品な
1280,competent,有能な；適任の；満足できる
1281,straightforward,単純な；率直な
1282,cosmetic,化粧の，美容の；うわべの
1283,delicate,繊細な；扱いにくい；もろい
1284,interior,室内の；内部の（⇔ exterior 外部の）
1285,transparent,透明な；明快な
1286,aesthetic,美的な；美学の
1287,deliberate,故意の；慎重な
1288,demographic,人口統計学の
1289,prehistoric,有史以前の；旧式な
1290,innate,生まれながらの；固有の
1291,mild,穏やかな；（程度が）軽い
1292,toxic,有毒な；中毒性の
1293,ashamed,恥じて
1294,humble,謙虚な；質素な；身分が低い
1295,peculiar,特有の；特異な
1296,steep,（傾斜が）急な；急激な；法外な
1297,trivial,ささいな，取るに足りない
1298,magnificent,壮大な；見事な
1299,wireless,無線（電信）の，ラジオの
1300,ongoing,継続している，進行中の
1301,assure,に自信を持って言う；を保証する
1302,precede,に先行する；に優先する
1303,revive,を復活させる；復活する
1304,compel,に強いる
1305,blossom,花が咲く（≒ bloom）；発展する
1306,terrify,を怖がらせる；を脅かす
1307,violate,（法律・規則など）に違反する；を侵害する
1308,suppress,を抑える；を抑圧する
1309,deceive,をだます（≒ take in）
1310,manipulate,を（巧みに）操る；を改ざんする
1311,starve,飢える；（～を）渇望する（for）；を飢えさせる
1312,flee,（から）逃げる
1313,whisper,（を）ささやく
1314,yell,叫ぶ，どなる
1315,deposit,を置く；を預ける；を堆積させる
1316,confine,を限定する；〔通例受身形で〕閉じ込められる
1317,swing,を揺らす，振る；揺れる；（行動に）さっと移る
1318,prolong,を長引かせる
1319,depict,を描く
1320,outline,の要点を述べる；の輪郭を描く
1321,shed,を捨て去る；（光など）を放つ；（涙・血）を流す
1322,emit,（光・熱など）を出す，排出する；（信号）を送る
1323,renew,を更新する；（資源）を再生する
1324,utilize,を利用する（≒ make use of）
1325,assert,を主張する
1326,strain,に負担をかける；を緊張させる；を漉す
1327,strive,努力する；争う
1328,dare,あえて［思い切って］...する
1329,boast,を誇る；（を）自慢する
1330,startle,をびっくりさせる（≒ surprise）
1331,offend,の気分を害する；（に）違反する
1332,compute,（を）計算する；コンピューターを使う
1333,assemble,を集める；を組み立てる；集まる
1334,worsen,を悪化させる；悪化する（≒ deteriorate）
1335,flip,を（ぱっと）裏返す；を軽くはじく
1336,rub,（を）こする；（～に）を塗る（on / over）
1337,descend,（を）降りる（⇔ ascend ⇒ 1839）；受け継がれる
1338,compensate,補償する（≒ make up）；に償う
1339,comprise,から成る；を構成する
1340,prevail,普及している；支配的である；（～に）打ち勝つ（over）
1341,quest,探究
1342,dignity,尊厳；威厳
1343,criterion,（判断・評価の）基準
1344,paradox,逆説；矛盾
1345,parliament,（英国などの）議会；国会議員（団）
1346,legislation,法律；立法
1347,agenda,協議事項（リスト）；議事日程（表）；（政治上の）課題
1348,mainstream,（活動・思潮などの）主流；大勢
1349,troop,〔～s〕軍隊；集団
1350,epidemic,流行（病）；蔓延
1351,outbreak,発生，勃発
1352,chaos,混沌，大混乱
1353,nightmare,悪夢（のような状況）；不安感
1354,horror,恐怖；強い嫌悪；嫌な物［人］
1355,cluster,集団；（植物の）房，束
1356,pollen,花粉
1357,hive,ミツバチの巣（箱）；人の集まる所
1358,irrigation,灌漑
1359,dose,（薬の1回分の）服用量；放射線の1回の照射量
1360,suicide,自殺；自殺的行為
1361,feast,祝宴；大ごちそう；楽しみ
1362,cuisine,（独特の）料理，料理法
1363,rumor,うわさ
1364,proverb,ことわざ（≒ saying）
1365,signature,署名；特徴
1366,formula,方法，解決策；公式
1367,tuition,【主に米】 授業料（＝ 【英】tuition fees）；（個人）指導
1368,intake,摂取量；受け入れ数；取り入れること
1369,spectrum,スペクトル；（波動・変動の）範囲
1370,kidney,腎臓
1371,gear,用具（一式），器具；歯車；ギア
1372,aisle,（座席間などの）通路
1373,grief,深い悲しみ
1374,destiny,運命
1375,skull,頭骨，頭蓋骨；頭脳
1376,tomb,墓
1377,monk,修道士，僧（⇔ nun 修道女，尼）
1378,worship,崇拝，礼拝（式）；賛美
1379,outstanding,際立った；未払いの；未解決の
1380,unprecedented,前例のない；空前の
1381,infinite,無限の（⇔ finite 有限の）；無数の
1382,worthwhile,価値がある；立派な
1383,indispensable,不可欠な（⇔ dispensable なくてもすむ）
1384,compulsory,義務的な，強制的な（⇔ voluntary ⇒ 1199）
1385,probable,十分にありそうな
1386,ambiguous,あいまいな；多義的な
1387,obscure,（世に）知られていない；不明瞭な
1388,skeptical,（～に）懐疑的な（of ⇒ about）
1389,fragile,壊れやすい；虚弱な
1390,static,静的な（⇔ dynamic ⇒ 1083）；動きのない
1391,gradual,徐々の，緩やかな
1392,vocal,声の，発声の；はっきりものを言う
1393,vivid,鮮やかな；生き生きとした
1394,imperial,帝国の；皇帝の
1395,hostile,敵意のある（⇔friendly 友好的な）
1396,superficial,表面的な
1397,scarce,乏しい；珍しい
1398,gross,総計の；甚だしい；粗野な
1399,inherent,生来の，本来的に備わっている
1400,notable,注目に値する；著名な
1401,update,を最新のものにする；をアップデートする
1402,refresh,（気分）をさわやかにする；（記憶など）を新たにする；を最新のものにする
1403,bloom,花が咲く；栄える
1404,conquer,を征服する；を克服する
1405,induce,を引き起こす；を説得する
1406,attain,を獲得する，達成する；に達する
1407,spray,を吹きかける，に吹きつける
1408,retrieve,（情報）を検索する；を取り戻す；を回復する
1409,portray,を描く；（の役）を演じる
1410,scratch,を引っかく；を取り消す，削除する
1411,designate,を指定する；を任命する
1412,contradict,と矛盾する；に反対意見を言う
1413,sigh,ため息をつく
1414,disrupt,を混乱させる；を分裂させる
1415,depart,出発する；（～から）それる（from）
1416,navigate,（を）誘導する；（を）操縦する；（を）航行する
1417,beg,に（～を）切に頼む（for）；（を）懇願する
1418,inhabit,に住んでいる；に宿る，存する
1419,diagnose,（を）診断する
1420,comprehend,を理解する
1421,oblige,に義務づける；に恩恵を施す
1422,cram,に詰め込む；詰め込み勉強をする
1423,flock,群がる，集まる
1424,underestimate,（を）過小評価する（⇔ overestimate （を）過大評価する）；（を）軽く見る；を少なく見積もる
1425,clarify,を明確にする
1426,spark,を引き起こす；を刺激する；スパークする
1427,seize,をつかむ；を奪い取る；を没収する
1428,soar,急上昇する；空高く飛ぶ
1429,glow,光り［照り］輝く；赤く燃える；紅潮する
1430,disguise,を（～に）変装させる（as）；を偽る
1431,distort,を歪める；歪む
1432,undermine,を徐々にむしばむ；を侵食する
1433,abolish,を廃止する（≒ do away with）
1434,strip,を［から］取り去る；を裸にする
1435,dispose,〔dispose ofで〕を処分する；を（...する）気にさせる（to do）；を配置する
1436,dump,を投棄する；をどさっと落とす
1437,weave,を織る；（計画・物語など）を作り上げる
1438,refine,を洗練する；を精製する
1439,enrich,を豊かにする；（物質）を濃縮化する
1440,coordinate,を調整する；を組織する；（服など）をコーディネートする
1441,headline,（新聞などの）見出し
1442,internship,【米】 実務［医学］研修；研修期間
1443,outlet,直売店，特売店；はけ口；【米】（電気の）コンセント（≒ 【英】socket）
1444,remedy,治療（法）；治療薬；解決法
1445,pill,錠剤，丸薬；〔the ～〕ピル，経口避妊薬
1446,reception,反応；宴会；受付；受信（状態）
1447,transaction,（商）取引；（人と人との）交流
1448,mutation,突然変異（体）；変化
1449,dairy,〔集合的に〕乳製品；乳製品加工所［販売者］
1450,compassion,同情
1451,posture,姿勢；心構え
1452,curse,悪態，ののしりの言葉；呪い；〔通例a ～〕災い
1453,funeral,葬式
1454,census,国勢調査；交通調査
1455,encyclopedia,百科事典
1456,cereal,〔通例～s〕穀物；シリアル（穀物加工食品）
1457,fragment,断片
1458,patch,（～の）部分，斑点；継ぎ；貼り薬
1459,rubbish,【英】 ごみ（≒ 【米】garbage）；つまらないもの
1460,maze,迷路（≒ labyrinth）；複雑に込み入ったもの
1461,outlook,見解；見通し；眺め
1462,breakthrough,大発見，飛躍的進歩
1463,triumph,勝利；勝利の喜び；偉業
1464,ally,同盟国；提携者；援助者；盟友
1465,spectator,（試合などの）観客
1466,sphere,領域；球体；天体
1467,county,【米】 郡；【英】州
1468,behalf,利益，味方
1469,interval,（時間の）間隔；合間；隔たり；小休止
1470,circulation,循環；流通；（新聞・雑誌の）発行部数
1471,blade,刃；（プロペラなどの）羽根；（草などの）葉
1472,theft,窃盗（罪）
1473,vacuum,真空；空虚
1474,collision,衝突；対立
1475,bargain,買い得品；取引；契約
1476,landmark,（ある場所の）目印；画期的な出来事
1477,revenue,歳入（⇔ expenditure 歳出）；収益
1478,treaty,（国家間の）条約；協定
1479,supreme,最高の
1480,thorough,徹底的な；まったくの
1481,naked,裸の
1482,sincere,心からの；誠実な
1483,tame,飼いならされた，人に慣れた；退屈な
1484,insufficient,不十分な；不適当な
1485,dim,薄暗い；ぼんやりした
1486,acute,（痛み・感情などが）激しい；（知覚などが）鋭い；急性の（⇔ chronic ⇒ 1198）
1487,disabled,障害のある；障害者用の
1488,metropolitan,大都市の，首都圏の
1489,monetary,金銭的な；金融の
1490,alternate,代わりの（≒ alternative）；交互の
1491,partial,部分的な；不公平な（⇔impartial 公平な）
1492,divine,神の；神にささげる
1493,drastic,徹底的な，抜本的な；極端な
1494,fierce,猛烈な；どう猛な
1495,sole,唯一の；単独の；独占的な
1496,spontaneous,自然発生的な；自発的な
1497,spatial,空間の
1498,neat,きちんとした；見事な
1499,tidy,きちんとした，整頓された；相当の
1500,loyal,（～に）忠実な（to）；誠実な
1501,bless,に恩恵を与える；に感謝する
1502,regain,を取り戻す
1503,conform,順応する；一致する
1504,enroll,登録する，入会する；を登録させる
1505,entitle,に権利を与える；に題名をつける
1506,halt,を止める；止まる
1507,provoke,（感情・行動など）を引き起こす；を挑発する
1508,invade,を侵略する；を侵害する；（場所）に殺到する
1509,squeeze,押し入る；を押し込む；（を）搾る；（を）強く押す
1510,crawl,はう；ゆっくり進む
1511,digest,を消化する；を理解する；を要約する
1512,utter,（声）を発する；（考えなど）を述べる
1513,refrain,控える
1514,populate,に住む，の住民である；に人を住まわせる
1515,accommodate,を収容する；を（～に）適応させる（to）
1516,steer,（を）操縦する；を（～へ）向ける（to）
1517,drown,溺死する；を水浸しにする
1518,dip,を浸す；（手など）を（～に）突っ込む（into / in）；下がる
1519,soak,を浸す；をずぶぬれにする；浸る
1520,stir,をかき回す；を揺り動かす
1521,transplant,を移植する；を移住させる
1522,reassure,を安心させる
1523,resume,（を）再開する；を取り戻す
1524,speculate,（と）推測する；投機する
1525,surpass,を上回る
1526,appoint,を任命する；（日時・場所など）を指定する
1527,intrigue,に興味を持たせる；陰謀を企てる
1528,decay,腐敗する（≒ rot）；（徐々に）衰える
1529,contaminate,を汚染する；を堕落させる
1530,swell,膨張する，腫れる；を膨らませる
1531,delete,を削除する，消す
1532,tolerate,を許容する，我慢する（≒ put up with）
1533,envy,をうらやむ
1534,pray,（を）祈る
1535,confess,（を）告白する
1536,resign,（を）辞任する；を放棄する
1537,dissolve,（を）溶かす；（議会など）を解散する；（契約など）を解消する；溶ける
1538,unfold,（閉じたもの）を開く；を明らかにする；開く；明らかになる
1539,awaken,を目覚めさせる；（～から）覚める（from）
1540,conceive,（を）思いつく；と想像する；（を）妊娠する
1541,entrepreneur,起業家，事業家
1542,stake,利害関係；〔通例～s〕賭け金；杭
1543,surplus,余剰（⇔ shortage 不足），過剰；黒字
1544,inflation,インフレ（ーション）；（物価の）高騰
1545,sweatshop,搾取工場
1546,clash,衝突；対立；かち合うこと；ガチャンという音
1547,sociology,社会学
1548,ideology,イデオロギー，思想傾向
1549,margin,余白；差；利ざや
1550,realm,領域；領土
1551,domain,分野；領域；ドメイン（＝ domain name）
1552,algorithm,アルゴリズム；問題解決の手順
1553,prairie,大草原
1554,frontier,〔通例the ～s〕最先端；〔the ～〕 【米】辺境地；国境
1555,bullet,銃弾
1556,shield,盾，防御物
1557,despair,絶望
1558,radiation,放射能，放射線
1559,placebo,偽薬，プラシーボ；気休め
1560,nursery,託児所；苗床
1561,spouse,配偶者
1562,makeup,化粧；化粧品；構成；性質
1563,mummy,ミイラ；【英】ママ，お母さん（＝ 【米】mommy）
1564,flesh,（人・動物の）肉；果肉
1565,limb,手足
1566,odor,におい；気配
1567,laundry,洗濯（物）；クリーニング店
1568,tide,潮（の干満）；動向
1569,questionnaire,アンケート
1570,nonsense,ばかげた物［話，考え］；無意味な言葉
1571,revenge,復讐
1572,intellect,知性；〔the ～（s）〕知識人
1573,hospitality,親切なもてなし，歓待；受容性
1574,librarian,司書，図書館員
1575,manuscript,（手書きの）原稿；写本
1576,obsession,（考えなどに）取りつかれること；妄想；強迫観念
1577,hygiene,衛生（状態）；健康法
1578,paradigm,理論的枠組み，パラダイム；模範
1579,legitimate,合法的な；妥当な
1580,authentic,本物の；信頼できる
1581,empirical,経験的な；経験主義の
1582,immense,膨大な
1583,absurd,ばかげた；不合理な
1584,weird,異様な（≒ bizarre），奇妙な
1585,accidental,偶然の；過失による
1586,uneasy,不安な；落ち着かない；ぎこちない
1587,jealous,嫉妬深い；用心深い
1588,feminine,女らしい（⇔ masculine ⇒ 1681）
1589,swift,素早い
1590,hollow,空洞の；空虚な；うわべだけの
1591,crude,大まかな；粗野な；未精製の
1592,sore,痛い；腹が立って
1593,pessimistic,悲観的な（⇔ optimistic ⇒ 882）
1594,vain,無駄な；うぬぼれた
1595,susceptible,（～の）影響を受けやすい（to）；感染しやすい
1596,edible,食用の，食べられる
1597,sheer,純然たる，真の；すごい；（布が）薄地の
1598,explicit,明白な（⇔ implicit ⇒ 1795）；率直な
1599,prone,（～に）なりやすい（to）；（...する）傾向がある（to do）
1600,affluent,裕福な；豊富な
1601,collaborate,共同して働く；（～に）協力する（with）
1602,exert,を及ぼす；（力など）を行使する
1603,excel,（～で）秀でている（in / at）；に勝る
1604,prosper,栄える，成功する；繁殖する
1605,surge,殺到する；（感情が）こみ上げる；急騰する
1606,intervene,（～に）介入する（in）；介在する
1607,insert,を挿入する
1608,overtake,を追い抜く；に追いつく（≒ catch up with）；（災難・強い感情などが）を襲う
1609,snap,をパチンと鳴らす；をポキッと折る；ポキッと折れる；パチンと音を立てる
1610,carve,を彫る；を切り開く；（肉）を切り分ける
1611,addict,〔受身形で〕（～の）中毒になる（to）；（～に）凝る
1612,condemn,を非難する；〔受身形で〕（～の刑を）宣告される（to）
1613,convict,に有罪を宣告する
1614,dictate,を指図する；を書き取らせる；を規定する
1615,prescribe,（薬など）を処方する；を規定する
1616,inhibit,を抑制する；を妨げる
1617,stray,はぐれる，（道に）迷う
1618,roam,（を）歩き回る；放浪する
1619,enclose,を同封する；を取り囲む
1620,execute,を実行する；を処刑する
1621,coincide,同時に起こる；一致する
1622,lag,遅れる；徐々に弱まる
1623,cling,しがみつく；くっつく
1624,erase,を消す
1625,grind,（穀物など）をひく
1626,knit,を編む；を結合する；編み物をする
1627,inquire,（を）尋ねる
1628,betray,をうっかり表す；を裏切る
1629,leak,漏れる；を漏らす
1630,smash,を粉砕する；を強打する；粉々に壊れる；激突する
1631,bounce,跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される
1632,sprawl,（都市などが）不規則に広がる；だらしなく手足を伸ばす
1633,converse,（～と）会話をする（with）
1634,recite,を暗唱する；を詳述する
1635,disregard,を無視する；を軽視する
1636,frown,眉をひそめる
1637,evoke,を呼び起こす
1638,pledge,を誓う，約束する；を与えることを約束する
1639,aspire,（～を）熱望する（to）
1640,contemplate,（を）熟考する；を予想する
1641,grace,優美，優雅；分別；（神の）恩寵
1642,enlightenment,啓蒙，啓発
1643,commerce,商業；貿易
1644,draft,下書き；為替手形；隙間風
1645,barrel,バレル（液量の単位）；たる
1646,timber,【英】 木材（≒ 【米】lumber）；樹木
1647,garment,衣服
1648,thread,糸；（議論などの）筋道
1649,cabinet,〔しばしばthe C-〕内閣；戸棚
1650,bureau,（官庁の）局；事務局；案内所
1651,autonomy,（個人の）自律；自治（権）；自治体
1652,toll,損害（の程度）；死傷者数；通行料
1653,discourse,話し合い，会話；講演；論説
1654,superstition,迷信
1655,glimpse,ちらりと見えること
1656,arithmetic,計算；算数
1657,glossary,用語小辞典；用語集
1658,archive,〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ
1659,legacy,遺産
1660,anthropology,人類学
1661,rage,激怒；猛威
1662,sorrow,悲しみ
1663,psychiatrist,精神科医
1664,ward,行政区；病棟
1665,stall,露店；エンスト；失速
1666,flame,炎；情熱
1667,moisture,水分；湿気
1668,irony,皮肉
1669,warrior,戦士
1670,astronomy,天文学
1671,probe,（無人）宇宙探査機；（～の）精査（into）；探り針
1672,altitude,高度，標高
1673,tumor,腫瘍；腫れ物
1674,defect,欠陥；不足
1675,sanitation,公衆衛生（学）；下水［衛生］設備
1676,longevity,長寿；寿命；長年勤続
1677,scope,（活動・能力などの）範囲；余地
1678,sentiment,感情；感想；感傷
1679,plausible,もっともらしい
1680,vigorous,精力的な；激しい；活力のある
1681,masculine,男らしい（⇔ feminine ⇒ 1588）
1682,rigid,厳しい；硬直した
1683,adverse,不都合な；逆の
1684,coherent,一貫した，筋の通った；結束した
1685,literal,文字どおりの；逐語的な；散文的な
1686,arbitrary,恣意的な；独断的な
1687,anonymous,匿名の
1688,antique,骨董の，アンティークの；古風な
1689,eternal,永遠の；不変の
1690,intermediate,中級の；中間の
1691,subordinate,（～より）下位の（to）；副次的な
1692,gloomy,陰気な；薄暗い；悲観的な
1693,thermal,熱の，熱による；保温用の
1694,faint,かすかな；めまいがする；弱々しい
1695,naive,お人よしの，愚直な；純朴な
1696,apt,（...する）傾向がある（to do）；適切な；利発な
1697,arrogant,横柄な，傲慢な
1698,extrovert,外向的な；社交的な
1699,conspicuous,目立つ
1700,intact,損なわれていない，手つかずの
1701,embody,を具現する；を包含する
1702,illuminate,を照らす；を解明する
1703,console,を慰める
1704,verify,の正しさを証明［確認］する
1705,disclose,を公表する，暴く
1706,stack,を積む，積み重ねる；〔～ upで〕（車が）渋滞する
1707,rotate,回転する；循環する；を回転させる
1708,constrain,に（...することを）強いる（to do）；を抑える
1709,hinder,を妨げる
1710,withstand,に耐える
1711,tweet,（を）ツイートする，つぶやく
1712,sneeze,くしゃみをする
1713,erupt,（火山が）噴火する；勃発する
1714,blur,をぼかす；を曇らせる；をあいまいにする
1715,overlap,（一部）重なる；（と）重複［共通］する
1716,embed,〔通例受身形で〕埋め込まれる，はめ込まれる
1717,displace,に取って代わる（≒ replace）；を移動させる
1718,render,を（ある状態に）する；（援助など）を与える
1719,plunge,（～に）（を）突っ込む（into）；没頭する；陥る
1720,surrender,を放棄する，引き渡す；（～に）屈する（to）
1721,plug,〔plug inで〕のプラグを電源に差し込む；を（～で）ふさぐ（with）
1722,suck,（を）吸う；（を）しゃぶる
1723,mock,をばかにする（≒ make fun of）；のまねをしてからかう
1724,tease,（を）からかう；をいじめる
1725,soothe,をなだめる；を和らげる
1726,stain,を汚す；に着色する
1727,shun,を避ける
1728,stumble,よろけながら歩く；（～に）つまずく（on / over）
1729,flush,を紅潮させる；を水で流す；紅潮する
1730,impair,を損なう
1731,presume,と思う；と推定する；を前提とする
1732,contend,と主張する；競う
1733,roar,うなる，ほえる；大笑いする
1734,haunt,（記憶・考えなどが）につきまとう；（幽霊などが）に出る；によく行く
1735,divert,（注意など）をそらす；を迂回させる；（資金など）を転用する
1736,await,を待つ（≒ wait for）
1737,fetch,を（行って）持って［連れて］くる
1738,unify,を統合［統一］する；統一される
1739,inspect,を点検する；を視察する
1740,entail,を伴う，引き起こす；（...すること）を含む（doing）
1741,tactics,作戦，方策；戦術，戦法
1742,feat,偉業，功績；妙技
1743,prestige,名声；〔形容詞的に〕名声のある
1744,analogy,類推；類似
1745,conscience,良心；分別
1746,textile,織物；繊維（産業）
1747,deficit,赤字，不足；欠陥
1748,plague,疫病；（害虫などの）異常発生
1749,hazard,危険（要素）；偶然
1750,metabolism,（新陳）代謝，代謝作用
1751,paralysis,麻痺；〔比喩的に〕麻痺（状態）
1752,grid,（電気などの）供給網；格子（模様）；碁盤目
1753,carriage,馬車；車両（＝ 【米】car）；立ち居振舞い；【英】輸送
1754,friction,不和；摩擦
1755,rebel,反逆者
1756,regime,政権，政体；体制
1757,monopoly,独占（権）
1758,staple,必需食品；主要産物
1759,merchandise,商品
1760,vendor,物売り，行商人；自動販売機
1761,supervisor,監督者；指導教員
1762,predecessor,前任者（⇔ successor 後継者）；前のもの
1763,personnel,〔集合的に〕職員，社員
1764,vessel,船舶；容器；（体液が通る）脈管
1765,liver,肝臓
1766,duration,（時間の）継続，持続（時間）
1767,certificate,証明書；免許状
1768,geometry,幾何学
1769,symmetry,（左右）対称（⇔ asymmetry 非対称）；調和
1770,biography,伝記
1771,masterpiece,傑作
1772,rhyme,押韻詩；韻；〔通例～s〕詩歌
1773,premium,保険料；プレミア；景品
1774,breakdown,崩壊；（神経）衰弱；故障；内訳
1775,courtesy,礼儀正しさ；好意；優遇
1776,protocol,（条約）議定書；外交儀礼；プロトコル
1777,specimen,標本；実例
1778,thesis,論文；命題，テーゼ
1779,eligible,適格の，資格のある；（結婚相手として）望ましい
1780,intrinsic,固有の，本質的な（⇔ extrinsic 非本質的な）
1781,diligent,勤勉な；入念な
1782,vocational,職業の，職業訓練の（ための）
1783,bankrupt,破産宣告を受けた；破綻している
1784,stern,厳しい；いかめしい
1785,stubborn,頑固な，強情な（≒ obstinate）；手に負えない
1786,maternal,母の，母親らしい（⇔ paternal 父の）；妊婦の
1787,fertile,肥沃な（⇔ barren 不毛の）；多産の
1788,ripe,熟した；成熟した
1789,stiff,硬直した，凝った；堅い
1790,obsolete,廃れた，使われなくなった；古くなった
1791,vacant,空いている
1792,acoustic,音響の；聴覚の；（楽器が）アコースティックの
1793,preliminary,予備の，準備の
1794,approximate,おおよその
1795,implicit,暗黙の（⇔ explicit ⇒ 1598）；内在する
1796,punctual,時間を守る
1797,compatible,矛盾しない；互換性のある；気が合う
1798,ample,十分すぎるほどの；広い
1799,pervasive,隅々に広がった；浸透する；充満する
1800,ubiquitous,至る所にある
1801,deduce,を推測する，演繹する
1802,simulate,を模擬実験する；を装う；をまねる
1803,merge,（を）合併する；を融合させる；溶け込む
1804,penetrate,（に）浸透する；（に）進出する；（を）貫く；（を）見抜く
1805,cater,（の）料理をまかなう；（要望などに）応える
1806,assault,に暴行する；を攻撃する
1807,torture,を拷問にかける；を苦しめる
1808,bleed,出血する
1809,erect,を建てる；を直立させる
1810,cherish,を大切にする；を心に抱く
1811,arouse,（感情など）を引き起こす；を目覚めさせる
1812,doom,〔通例受身形で〕運命にある
1813,mourn,（を）悼む（≒ grieve）；（を）嘆く
1814,dread,をひどく恐れる
1815,nourish,に栄養を与える；をはぐくむ
1816,inject,（人）に注射する，を注入する；を導入する
1817,swear,（～を）ののしる（at）；（を）誓う（≒ vow）
1818,bid,（～に）の値をつける（for ⇒ on）；（挨拶）を述べる
1819,corrupt,を堕落させる；を買収する；堕落する
1820,preoccupy,の心を奪う，を夢中にさせる
1821,browse,（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く
1822,compile,を編集する；（資料など）をまとめる
1823,allocate,を割り当てる，分配する
1824,offset,を相殺する，埋め合わせる；をオフセット印刷にする
1825,restrain,を制止する；を規制する
1826,comply,従う，応じる
1827,expire,期限が切れる
1828,embark,（～に）乗り出す（on）；乗船［搭乗］する
1829,flap,パタパタ動く；羽ばたく（≒ flutter）；をパタパタ動かす
1830,furnish,に（～を）備えつける（with）
1831,forge,を偽造する；（関係など）を築く；を鍛造する
1832,thrust,を押しつける；を突き刺す；押し進む
1833,dispatch,を派遣する；を発送する；を処理する
1834,resent,に憤慨する
1835,reconcile,を（～と）一致させる（with）；を和解させる
1836,allege,を主張する
1837,oppress,を抑圧［迫害］する；を悩ませる
1838,expel,を追放する；を吐き出す
1839,ascend,（を）上がる（⇔ descend ⇒ 1337）
1840,commence,始まる；を開始する；...し始める（to do / doing）⇒ commence work 仕事［作業］を始める
1841,advent,〔the ～〕出現，到来
1842,reign,治世；統治
1843,diplomacy,外交（的手腕）
1844,embassy,大使館；大使一行
1845,exile,亡命（者）；（国外）追放
1846,refuge,避難（所）；保護
1847,plight,窮状（＝ predicament）；（悪い）状態
1848,solitude,ひとりでいること；孤独
1849,fallacy,誤った考え，誤信；錯誤
1850,latitude,緯度；（行動・思想などの）許容範囲
1851,eclipse,（日食・月食などの）食；（名声などの）失墜
1852,basin,流域；盆地，海盆；洗面器［台］
1853,erosion,浸食；衰退
1854,archaeology,考古学
1855,errand,（人の）使い，使い走り；用件
1856,mercy,慈悲；〔通例a ～〕幸運
1857,rhetoric,修辞（法）；美辞麗句
1858,verse,韻文（⇔ prose 散文）；詩
1859,congestion,混雑
1860,sewage,下水
1861,complement,（～の）補完物，補足（to）；（文法の）補語
1862,subsidy,補助金；報奨金
1863,mortgage,住宅ローン；抵当（権）
1864,attorney,【米】 弁護士；代理人
1865,outfit,衣装一式；装備［道具］一式；組織
1866,bulk,〔the ～〕（～の）大半（of）；大きさ；大量
1867,reunion,再会（の集い）；再結合
1868,synthesis,合成；総合（⇔ analysis ⇒ 363）
1869,mold,鋳型；鋳物；性格；かび
1870,thirst,（のどの）渇き；（～に対する）渇望（for）
1871,greed,強欲
1872,bribe,賄賂
1873,contempt,軽蔑；恥辱
1874,texture,感触，手触り；本質；質感
1875,orphan,孤児
1876,harassment,嫌がらせ，ハラスメント
1877,hay,干し草
1878,doctrine,教義；【米】（政策上の）主義
1879,holistic,全体論の；（医療が）ホリスティックの
1880,liable,しがちな；（～を）受けやすい（to）；責任がある
1881,earnest,まじめな，熱心な
1882,intelligible,（簡単に）理解できる
1883,abrupt,突然の（≒ sudden）
1884,reckless,無謀な；（～を）顧みない（of）
1885,furious,激怒した；猛烈な
1886,eloquent,雄弁な；説得力のある
1887,juvenile,青少年の
1888,notorious,悪名高い（≒ infamous）
1889,timid,臆病な；内気な
1890,humid,湿気のある（≒ muggy 蒸し暑い）
1891,contagious,感染（性）の；病気を伝染する
1892,cynical,冷笑的な，皮肉な
1893,dumb,ばかげた；口のきけない；無言の
1894,monotonous,単調な
1895,perpetual,永続的な；ひっきりなしの
1896,dizzy,目まいがする；当惑した
1897,weary,疲れ果てた；（～に）うんざりした（of）
1898,numb,麻痺した，無感覚な；ぼう然とした
1899,mortal,致命的な（≒ fatal）；死すべき（運命の）（⇔ immortal 不死の）
1900,zealous,熱心な；熱狂的な`,
  },
  {
    id: 'system',
    name: 'システム英単語',
    csv: `番号,単語,意味
1,follow,～の後に続く、～に従う
2,consider,～を考慮する
3,increase,増える、～を増やす
4,expect,～を予期する
5,decide,～することを決意する
6,develop,発達する、～を発達させる
7,provide,～を供給する、与える
8,continue,続く、～を続ける
9,include,～を含む、含める
10,remain,ままでいる
11,reach,～に着く、～に達する
12,allow,～を許可する
13,force,～を強制する
14,offer,～を申し出る
15,realize,～を悟る
16,suggest,～と提案する、～をほのめかす
17,require,～を必要とする
18,worry,心配する
19,wonder,～かと疑問に思う
20,cost,～を要する
21,tend,～する傾向がある、～しがちである
22,depend,～に依存する、～しだいで決まる
23,share,～を分け合う、共有する
24,demand,～を要求する
25,support,～を支持する
26,hire,～を雇う
27,regard,AをBだと思う、みなす
28,base,AがBに基づいている
29,improve,～を向上させる
30,recognize,～を認める
31,notice,～に気づく
32,suppose,～だと思う
33,raise,～を上げる、～を育てる
34,prefer,～をより好む
35,cheer,～を励ます
36,suffer,～を経験する、受ける、苦しむ
37,describe,～を描写する、～の特徴を説明する
38,prevent,～をさまたげる
39,reduce,～を減らす
40,mistake,～を誤解する、まちがえる
41,prepare,～の準備をする
42,encourage,はげます
43,prove,～だとわかる
44,treat,～をあつかう
45,establish,～を設立する、創立する
46,relate,関係がある
47,compare,～を比較する、～をたとえる
48,spread,～を広げる；広がる
49,refer,～を指示する
50,supply,～を供給する
51,gain,～を得る
52,destroy,～を破壊する
53,apply,当てはまる、申し込む
54,seek,～を求める
55,search,～を捜す
56,claim,～と主張する
57,draw,～を引っぱる
58,refuse,～を断る
59,respond,～に返答する
60,mention,～について述べる
61,judge,～を判断する
62,approach,～に接近する；～に取り組む；方法
63,admit,～を認める
64,reflect,～を反映する、～を反射する
65,perform,～を行う、～を遂行する
66,bore,～をうんざりさせる
67,survive,生き残る
68,represent,～を表す
69,argue,～と主張する
70,grant,～を認める、～を与える
71,indicate,～を指し示す
72,belong,所属している
73,acquire,～を習得する
74,reply,返事をする
75,feed,～にエサをやる
76,escape,逃げる
77,replace,～に取って代わる、～を取り替える
78,reveal,～を明らかにする
79,surround,～を取り囲む
80,suit,～に合う
81,estimate,～を推定する
82,aim,～をねらう
83,earn,～をもうける、かせぐ
84,decline,衰退する、低下する、～を辞退する
85,afford,～をする余裕がある
86,confuse,～を当惑させる
87,graduate,～を卒業する
88,vary,変わる、さまざまである
89,remove,～を移す、取り去る
90,insist,～と主張する、言い張る
91,examine,～を調査する
92,remind,ＡにＢを思い出させる
93,contribute,～に貢献する、～の一因となる、AをBに寄付する
94,warn,～に警告する
95,connect,～をつなぐ
96,match,～に匹敵する、～に調和する
97,focus,焦点を合わせる
98,reject,～を断る
99,convince,～を納得させる、確信させる
100,associate,AをBに関連づける、AからBを連想する
101,rush,急いで行く
102,stress,～を強調する
103,attract,～を引きつける
104,rely,Aに頼る
105,regret,～を後悔する
106,adopt,～を採用する
107,shake,～を振る
108,hurt,～を傷つける
109,operate,作動する、～を操作する、手術する
110,extend,～を広げる、延長する
111,blame,～を非難する、～のせいにする
112,consist,Aで構成されている
113,persuade,～を説得する
114,admire,～に感心する
115,disappoint,～を失望させる
116,expand,拡大する
117,preserve,～を保護する
118,struggle,苦闘する、もがく
119,arrange,～の手はずを整える、～を配列する
120,disturb,～を妨げる
121,employ,～を雇う、～を用いる
122,engage,Aに従事する、Aを行う
123,abandon,～を捨てる
124,display,～を展示する、～を表す
125,encounter,～に偶然出会う
126,amuse,～を楽しませる
127,bother,～に面倒をかける、困らせる
128,concentrate,集中する
129,adapt,～を適応させる、適応する
130,puzzle,～を当惑させる
131,appeal,Aに訴える、～を引きつける
132,combine,～を結合させる
133,delay,～を遅らせる
134,repair,～を修理する
135,fascinate,～を夢中にさせる
136,pardon,～を許す
137,import,～を輸入する
138,remark,述べる
139,reserve,～を予約する、～を取っておく
140,amaze,～を驚嘆させる
141,frighten,～をおびえさせる
142,release,～を解放する、～を発表する
143,rent,～を賃借りする
144,recover,Aから回復する
145,suspect,～ではないかと思う、～を疑う
146,deliver,～を配達する、渡す、～をする
147,identify,～の正体をつきとめる、Aと共感する
148,locate,位置する
149,manufacture,～を製造する
150,occupy,～を占める
151,own,～を所有している
152,expose,ＡをＢにさらす
153,translate,～を翻訳する
154,cure,～を治療する
155,perceive,～を知覚する
156,adjust,～に慣れる、調節して合わせる
157,alarm,～をぎょっとさせる、おびえさせる
158,assist,～を助ける、～を手伝う
159,freeze,凍りつく
160,spoil,～を台無しにする
161,shift,～を変える
162,embarrass,～を困惑させる、～に恥ずかしい思いをさせる
163,approve,賛成する；～を承認する
164,weigh,～の重さがある、～を比較検討する、よく考える
165,stretch,～を広げる
166,participate,Aに参加する
167,exhibit,～を展示する
168,owe,AのことはBのおかげだ
169,celebrate,～を祝う
170,decorate,～を装飾する
171,forgive,～を許す
172,seat,(be seated)座っている
173,injure,～を傷つける
174,sew,～を縫う
175,result,結果
176,feature,特徴
177,society,社会、協会、団体
178,wheel,車輪、ハンドル
179,value,価値
180,effect,効果、影響、結果
181,individual,個人
182,influence,影響
183,fee,謝礼、料金
184,rate,割合、速度
185,sign,印、兆候
186,service,公共事業、業務
187,advance,前進、進歩
188,laughter,笑い
189,material,物質
190,industry,工業
191,attempt,試み
192,trade,貿易
193,progress,進歩、前進
194,excuse,言い訳
195,custom,習慣、税関
196,passage,一節、経過、通行
197,economy,経済
198,track,小道、足跡
199,transportation,交通機関、輸送
200,official,役人
201,sight,見ること、光景、視力
202,taste,味、好み
203,range,範囲
204,appointment,約束、予約
205,patient,患者、忍耐強い
206,project,計画
207,favor,好意
208,appearance,外見、様子、出現
209,risk,危険
210,benefit,利益
211,resident,住民
212,relative,親族、親戚
213,region,地域
214,characteristic,特徴
215,pain,苦痛
216,twin,双子の一方、双生児
217,occasion,場合、機会
218,principle,原理、原則
219,department,部門、学科
220,duty,義務、関税
221,scene,場面、現場
222,jam,渋滞
223,spirit,精神
224,medium,手段
225,mass,一般大衆、多くの
226,audience,聴衆、観客
227,element,要素、元素
228,climate,気候
229,revolution,革命
230,quarter,4分の1
231,furniture,家具
232,brain,脳
233,atmosphere,大気、雰囲気
234,property,財産
235,reward,報酬
236,security,安全
237,delight,大喜び
238,desert,砂漠
239,background,背景、生い立ち、経歴
240,trend,傾向
241,vote,投票
242,impact,影響、衝撃
243,institution,機関、制度
244,interaction,交流
245,alternative,代わりのもの
246,harm,害
247,agency,機関、代理店
248,capacity,能力
249,minister,大臣
250,volunteer,ボランティア
251,access,利用する権利
252,quantity,量
253,branch,枝、支店、支局、部門、分野
254,common,共通の、普通の
255,rough,荒い、大雑把な
256,likely,ありそうな、～する可能性が高い
257,serious,深刻な
258,particular,ある特定の、特有の
259,available,手に入る、利用できる
260,bilingual,二言語使用の
261,ready,用意ができた
262,correct,正しい
263,familiar,熟知している、くわしい
264,physical,身体の、肉体の
265,worth,～の価値がある
266,involved,～に関係している、参加している
267,fantastic,すばらしい
268,private,個人の、私的な
269,obvious,明白な
270,native,母国の
271,complex,複雑な
272,willing,～する気がある、～してもかまわない
273,current,最新の
274,male,男の
275,proper,適切な
276,capable,～する能力がある
277,independent,独立した
278,positive,積極的な
279,pleasant,楽しい
280,significant,重要な
281,former,前の
282,chemical,化学的な
283,upset,動揺している
284,previous,前の
285,calm,冷静な
286,specific,特定の
287,conscious,意識している
288,superior,よりすぐれている
289,efficient,効率がいい
290,fundamental,基本的な
291,narrow,狭い
292,reasonable,理にかなった
293,nervous,神経質な、不安な
294,alike,似ている
295,domestic,家庭の、国内の
296,negative,否定の
297,moral,道徳的な
298,eager,熱望している
299,remarkable,すばらしい
300,evil,悪い
301,awake,目を覚まして
302,aged,年老いた
303,anxious,心配して、切望して
304,tough,たくましい、骨の折れる
305,nuclear,核の、原子力の
306,legal,合法の、法律の
307,curious,好奇心の強い
308,civil,一般市民の
309,recent,最近の
310,senior,上級の、先輩の
311,afterward,その後
312,nearly,ほとんど
313,therefore,それゆえに
314,exactly,正確に
315,possibly,ひょっとすると、どうしてもVできない
316,contrary,反対に
317,occasionally,時々
318,somehow,どういうわけか、なぜか
319,seldom,めったに～ない
320,thus,それゆえ、そのように
321,throughout,いたる所に
322,unlike,～と違って
323,besides,～に加えて
324,beyond,～の向こうに；～できる範囲をこえて
325,within,～以内で
326,nor,～もない
327,unless,～しない限り
328,except,～を除いて
329,ought,～すべきである
330,in spite of,～にもかかわらず
331,whether,～かどうか、～であろうとなかろうと
332,explain,～を説明する
333,accept,～を受け入れる
334,produce,～を生産する
335,exist,存在する
336,express,～を表現する
337,add,～を加える
338,avoid,～を避ける
339,marry,～と結婚する
340,protect,～を守る
341,affect,～に影響する
342,determine,～を決定する
343,solve,～を解決する
344,contain,～を含んでいる
345,discuss,～を議論する
346,ignore,～を無視する
347,guess,～を推測する
348,exchange,交換する
349,satisfy,～を満たす
350,complain,苦情を言う
351,achieve,～を達成する
352,enable,～を可能にする
353,intend,つもりだ
354,obtain,～を得る
355,divide,分割する
356,annoy,～をいらいらさせる
357,differ,異なる
358,educate,～を教育する
359,borrow,～を借りる
360,invent,～を発明する
361,promote,～を促進する
362,advise,～に忠告する
363,retire,辞める
364,permit,～を許す
365,recommend,～を勧める
366,apologize,謝る
367,inform,～に知らせる
368,oppose,～に反対する
369,trust,～を信用する
370,select,～を選ぶ
371,praise,～をほめる
372,handle,～に対処する
373,propose,～を提案する
374,breathe,～を呼吸する
375,criticize,～を非難する
376,overcome,～に打ち勝つ
377,possess,～を持っている
378,predict,～を予言する
379,publish,～を出版する
380,floating,浮かぶ
381,recall,～を思い出す
382,explore,～を探検する
383,pretend,ふりをする
384,absorb,～を吸収する
385,resemble,～に似ている
386,tear,～を引き裂く
387,consume,～を消費する
388,compete,競争する
389,quit,～をやめる
390,announce,～を発表する
391,react,反応する
392,wander,歩き回る
393,text,メールを送る
394,generate,～を生み出す
395,score,～を取る
396,government,政府
397,knowledge,知識
398,nation,国
399,effort,努力
400,period,時代
401,population,人口
402,purpose,目的
403,behavior,行動
404,lack,不足
405,skill,技術
406,quality,質
407,environment,環境
408,role,役割
409,attitude,態度
410,author,筆者
411,research,研究
412,opportunity,機会
413,source,源
414,carbon,炭素
415,shape,形
416,advantage,利点
417,method,方法
418,habit,習慣
419,detail,細部
420,distance,距離
421,crowd,群衆
422,instance,例
423,desire,願望
424,standard,水準
425,task,仕事
426,generation,世代
427,responsibility,責任
428,experiment,実験
429,athlete,運動選手
430,decade,10年
431,loss,損失
432,fever,熱
433,theory,理論
434,statement,記述
435,professor,教授
436,function,機能
437,surface,表面
438,envelope,封筒
439,organization,組織
440,policy,政策
441,resource,資源
442,contrast,対比
443,flood,洪水
444,mate,連れ合い
445,goods,商品
446,creature,動物
447,structure,構造
448,tradition,伝統
449,weight,体重
450,charity,慈善
451,citizen,市民
452,impression,印象
453,cartoon,マンガ
454,career,経歴
455,site,用地
456,passenger,乗客
457,violence,暴力
458,income,所得
459,temperature,気温
460,majority,大多数
461,origin,起源
462,literature,文学
463,equipment,設備
464,stranger,見知らぬ人
465,strength,強さ
466,planet,惑星
467,fiction,小説
468,religion,宗教
469,pollution,汚染
470,wealth,富
471,document,文書
472,profit,もうけ
473,technique,技術
474,emotion,感情
475,phenomenon,現象
476,horror,恐怖
477,ladder,はしご
478,billion,十億
479,status,地位
480,youth,若者
481,confidence,自信
482,edge,周辺
483,household,家庭
484,scholar,学者
485,survey,調査
486,vocabulary,語彙
487,enemy,敵
488,construction,建設
489,lecture,講義
490,instruction,指示
491,crisis,危機
492,instrument,器具
493,crop,作物
494,weapon,兵器
495,device,装置
496,path,道
497,earthquake,地震
498,stream,小川
499,notion,概念
500,yard,庭
501,victim,犠牲者
502,fuel,燃料
503,ancestor,祖先
504,soil,土壌
505,debate,討論
506,crime,犯罪
507,colleague,同僚
508,shelf,棚
509,analysis,分析
510,universe,宇宙
511,electricity,電気
512,insect,昆虫
513,web,巣
514,storm,嵐
515,plenty,十分な
516,agriculture,農業
517,gene,遺伝子
518,evidence,証拠
519,consequence,結果
520,infant,幼児
521,leisure,暇
522,cell,細胞
523,talent,才能
524,advertising,広告
525,extent,程度
526,garbage,ごみ
527,general,一般
528,various,さまざまな
529,similar,似ている
530,complete,完全な
531,sharp,急激な
532,expensive,高価な
533,political,政治的な
534,aware,気づいている
535,ancient,古代の
536,medical,医学の
537,essential,不可欠だ
538,huge,巨大な
539,terrible,ひどい
540,practical,実用的な
541,entire,全
542,favorite,いちばん好きな
543,comfortable,快適な
544,minor,小さい
545,typical,典型的な
546,ideal,理想的な
547,principal,主要な
548,appropriate,適切な
549,empty,からの
550,rapid,急速な
551,mental,精神の
552,excellent,すばらしい
553,convenient,都合がいい
554,potential,潜在的な
555,financial,財政的な
556,enormous,莫大な
557,rare,珍しい
558,artificial,人工
559,tiny,ちっちゃな
560,considerable,かなりの
561,sensitive,敏感な
562,intellectual,知的な
563,thirsty,のどが渇く
564,polite,礼儀正しい
565,accurate,正確な
566,rude,失礼な
567,sufficient,十分な
568,urban,都会の
569,temporary,一時的な
570,primitive,原始的な
571,permanent,永久
572,elderly,高齢の
573,severe,厳しい
574,brief,簡潔な
575,mobile,流動的な
576,latest,最新の
577,military,軍事的な
578,strict,厳しい
579,solid,固体の
580,stupid,ばかな
581,biological,生物
582,probably,おそらく
583,hardly,ほとんど～ない
584,immediately,すぐに
585,eventually,ついに
586,frequently,しばしば
587,extremely,非常に
588,gradually,だんだん
589,instantly,すぐに
590,nevertheless,それにもかかわらず
591,moreover,その上
592,relatively,比較的
593,apparently,一見
594,definitely,絶対
595,largely,主に
596,mostly,大部分は
597,approximately,およそ
598,overnight,一晩
599,accidentally,偶然
600,despite,にもかかわらず
601,proceed,進む
602,ensure,～を確実にする
603,interpret,～を解釈する
604,cease,～しなくなる
605,ban,（公式に）～を禁止する
606,obey,～に従う
607,eliminate,(不要なもの)を除去する
608,resist,～に抵抗する
609,accompany,〈人〉に同伴する
610,commit,〈罪など〉を犯す、～をゆだねる、委任する、(本気で)取り組む
611,pursue,～を追求する
612,demonstrate,(証明などが)～を明らかに示す
613,bet,きっと～だと思う
614,ruin,～を台無しにする、破滅させる
615,threaten,～を脅迫する
616,attach,AをBにくっつける
617,reverse,～を反対にする、逆転する
618,restrict,～を制限する
619,compose,～を組み立てる
620,lean,よりかかる、もたれる
621,substitute,～を代わりに用いる
622,trace,～の跡をたどる
623,interrupt,～を妨げる
624,confront,～の前に立ちふさがる、～に立ち向かう
625,illustrate,～を（例で）示す
626,arrest,～を逮捕する
627,stimulate,～を刺激する
628,assure,（～を）保証する
629,consult,～に相談する、～を参照する
630,depress,～を憂鬱にさせる
631,crash,激突する
632,inspire,～を奮起させる、やる気にさせる
633,specialize,Aを専門にする、専攻する
634,cultivate,(植物)を栽培する、(感情・能力などを)育む
635,fulfill,(約束・夢など)を果たす
636,transmit,～を送る、伝える
637,found,～を創立する、設立する
638,clap,(手など)をたたく
639,burst,破裂する、突然～しだす
640,bow,おじぎする
641,dismiss,(考えなど)を無視する、(人)を解雇する、解散する
642,breed,～を繁殖させる、繁殖する
643,prohibit,〈法・団体が〉～を禁じる
644,oblige,～に強いる
645,qualify,Aに適任である
646,invest,（金）を投資する
647,grasp,～を理解する
648,collapse,崩壊する
649,overlook,～を見落とす、～を見逃す
650,accuse,～を非難する
651,frustrate,〈人〉を欲求不満にさせる
652,deprive,AからBを奪う
653,astonish,～を驚嘆させる
654,register,～を登録する
655,correspond,一致する
656,cast,～を投げる
657,attribute,AはBのおかげだと思う
658,neglect,～を無視する、怠る
659,starve,飢える
660,resolve,(問題など)を解決する
661,impose,AをBに課す、押し付ける
662,convert,～を転換する
663,scare,～をおびえさせる
664,constitute,～を構成する、占める、～である
665,appoint,～を任命する
666,imply,～を(暗に)意味する
667,assign,(仕事・物)を割り当てる
668,nod,うなずく
669,elect,～を選挙で選ぶ
670,transfer,～を移す
671,rob,AからBを奪う
672,capture,～を捕らえる
673,undertake,（仕事など）を引き受ける
674,drown,おぼれ死ぬ
675,split,～を割る、分裂する
676,resort,Aに訴える
677,descend,下る、降りる
678,irritate,～をいらだたせる
679,pronounce,〈単語など〉を発音する
680,equip,～を装備させる
681,cheat,いかさまをする
682,emerge,〈隠れていたものが〉現れる
683,devote,～をささげる
684,heal,〈けがなど〉を治す、治る
685,urge,～に強く迫る、～を説得する
686,envy,～をうらやむ
687,chase,～を追いかける
688,prompt,～を促す
689,withdraw,～を引っ込める、引きこもる、退く、(預金など)を引き出す
690,detect,～を探知する、～を発見する
691,interfere,Aを邪魔する
692,kid,冗談を言う、からかう
693,launch,(ロケットなど)を打ち上げる
694,endanger,～を危険にさらす
695,foster,～を促進する、育成する
696,diminish,減少する、衰える、～を減らす
697,spill,～をこぼす
698,infect,〈人〉に感染する
699,stem,Aから生じる、Aに由来する
700,tap,～を軽くたたく
701,embrace,受け入れる、含む
702,proportion,比率
703,contract,契約
704,chest,胸
705,treasure,財宝
706,stock,株(式)
707,facility,設備、施設
708,sum,金額、合計、要約
709,rank,地位
710,democracy,民主主義、民主国家
711,emergency,緊急事態
712,protest,抗議
713,immigrant,移民
714,vehicle,車、乗り物、手段
715,routine,決まりきった仕事、日課
716,stuff,物
717,row,列
718,profile,プロフィール、人物紹介、横顔
719,dawn,夜明け
720,welfare,福祉
721,perspective,見方
722,enthusiasm,熱意、情熱
723,faith,信頼
724,occupation,職業、占領
725,witness,証人、目撃者
726,kingdom,王国
727,equivalent,同等のもの、相当するもの
728,objective,目的、目標、客観的な
729,pile,積み重ね
730,shelter,避難(所)
731,trial,試み、裁判
732,honor,名誉
733,territory,領土、なわ張り
734,frame,わく
735,border,国境地帯
736,statistics,統計(学)
737,enterprise,企業、事業
738,context,文脈、状況
739,load,荷物
740,grain,穀物
741,review,再検討
742,prejudice,偏見
743,strain,負担
744,trap,わな、閉じ込められる、わなにかける
745,temper,気性
746,slave,奴隷
747,wound,傷
748,divorce,離婚
749,tune,曲
750,height,高さ、最盛期
751,faculty,学部、能力
752,span,期間
753,dimension,側面、要素、次元
754,version,型、...版、翻訳、説明
755,parallel,類似(物)、匹敵するもの
756,horizon,地平線
757,acquaintance,知人
758,burden,重荷
759,basis,基礎、根拠、方式、やり方
760,poison,毒
761,constitution,憲法
762,administration,経営、行政
763,charm,魅力
764,organ,臓器、器官
765,prey,獲物、えじき
766,venture,冒険的事業
767,mission,使命、任務
768,inquiry,調査、質問、問い合わせ
769,award,賞
770,strip,細長い一片
771,distress,苦しみ、悲嘆、苦難
772,circulation,循環、流通、発行部数
773,shade,陰、日陰
774,stereotype,典型的なイメージ、類型、固定観念
775,client,依頼人
776,output,生産高
777,lord,神
778,convention,慣習、しきたり、会議、大会
779,mine,鉱山
780,craft,工芸、技術、巧みに作る
781,core,中心、核心
782,stroke,脳卒中、発作、打撃、一撃、なでる
783,frontier,国境
784,peer,同僚、じっと見る
785,vessel,血管、船、器
786,disability,障害
787,gravity,重力
788,ethic,倫理(学)
789,terminal,終点
790,tide,潮流、潮の干満
791,abuse,虐待
792,guilty,有罪の、罪の意識がある
793,vital,きわめて重要な、必要な、活気のある
794,fellow,仲間の
795,contemporary,現代の
796,annual,年に１度の、１年間の
797,accustomed,慣れた
798,steady,しっかりした
799,dull,退屈させる
800,keen,熱望して、鋭い
801,loose,ゆるい
802,delicate,繊細な、微妙で難しい
803,internal,内部の、国内の
804,casual,形式ばらない、気楽な
805,mature,成熟した
806,concrete,具体的な
807,awful,ひどい
808,exhausted,疲れ切っている
809,overall,全面的な、全体的な
810,tight,引き締まった、きつい
811,prime,最も重要な、主要な
812,genuine,本物の、真の、心からの
813,modest,控えめな、謙虚な、わずかな
814,intimate,親密な
815,minimum,最小限の
816,sophisticated,高度な
817,latter,後者の
818,bitter,苦い、つらい、腹を立てた
819,peculiar,独特の、固有の
820,passive,受動的な、消極的な
821,ethnic,民族的な、民族の
822,noble,高貴な
823,vain,むだな
824,innocent,無罪の、罪のない、無邪気な
825,underlying,根本的な
826,alien,外国の、異質な
827,relevant,関連のある
828,inclined,Ｖする傾向がある、Ｖしたい気がある
829,awkward,気まずい
830,brilliant,すばらしい
831,desperate,必死の
832,refreshing,さわやかな
833,thrilled,とてもうれしい
834,inner,内側の
835,consistent,矛盾のない、一致した
836,plain,明白な、わかりやすい
837,vivid,鮮やかな
838,miserable,惨めな
839,substantial,相当な、多大な
840,fond,Aが好きだ
841,FALSE,まちがいの
842,lazy,怠惰な
843,precisely,正確に、まさに、ちょうど
844,meanwhile,その間に
845,altogether,完全に
846,lately,最近
847,barely,かろうじて
848,scarcely,ほとんど～ない
849,accordingly,それ相応に
850,deliberately,わざと
851,beneath,～の下で
852,whereas,～だが一方
853,declare,～を宣言する
854,alter,～を変える
855,arise,生じる
856,transform,変える
857,defeat,～を打ち負かす
858,investigate,～を調査する
859,distinguish,～を見分ける
860,bury,～を埋める
861,cope,うまく対処する
862,occur,起こる
863,accomplish,～をやりとげる
864,hesitate,ためらう
865,endure,～に耐える
866,conclude,～と結論づける
867,guarantee,～を保証する
868,dominate,～を支配する
869,confirm,～を裏付ける
870,greet,～にあいさつする
871,entertain,～を楽しませる
872,defend,～を守る
873,forbid,～を禁じる
874,broadcast,～を放送する
875,sacrifice,～を犠牲にする
876,punish,～を罰する
877,glance,ちらりと見る
878,retain,～を保持する
879,calculate,～を計算する
880,sinking,沈む
881,rescue,～を救助する
882,beg,～と乞う
883,define,定義する
884,deceive,～をだます
885,convey,～を伝える
886,sustain,～を維持する
887,purchase,～を購入する
888,fade,薄れる
889,regulate,～を規制する
890,distribute,～を分配する
891,enhance,～を向上させる
892,chat,おしゃべりする
893,exceed,～を超える
894,wipe,～をふく
895,cooperate,協力する
896,inherit,～を受け継ぐ
897,unite,～を団結させる
898,leap,跳ぶ
899,exaggerate,～を誇張する
900,conquer,～を征服する
901,melt,溶ける
902,invade,～に侵入する
903,modify,～を修正する
904,scatter,～をばらまく
905,undergo,～を経験する
906,evaluate,～を評価する
907,bend,身をかがめる
908,derive,由来する
909,screaming,悲鳴をあげる
910,gaze,見つめる
911,pray,祈る
912,polish,～を磨く
913,classify,分類する
914,assert,～と主張する
915,grab,～をつかむ
916,fold,～を折りたたむ
917,sweep,～を掃く
918,whisper,ささやく
919,imitate,～をまねる
920,stare,じっと見る
921,emphasize,～を強調する
922,rid,～を取り除く
923,pour,～を注ぐ
924,vanish,消える
925,restore,～を修復する
926,deserve,当然だ
927,laboratory,研究所
928,conference,会議
929,continent,大陸
930,insurance,保険
931,crew,乗組員たち
932,poverty,貧乏
933,shortage,不足
934,affair,情勢
935,exception,例外
936,wage,賃金
937,wisdom,知恵
938,tax,税金
939,evolution,進化
940,barrier,壁
941,category,範ちゅう
942,unit,単位
943,reputation,評判
944,virtue,美徳
945,courage,勇気
946,sympathy,同情
947,union,組合
948,civilization,文明
949,volume,冊
950,blossom,花
951,era,時代
952,dispute,紛争
953,tourism,観光
954,mankind,人類
955,murder,殺人
956,landscape,風景
957,destination,目的地
958,tale,話
959,reform,改革
960,muscle,筋肉
961,prospect,見通し
962,corporation,企業
963,colony,植民地
964,quarrel,口論
965,profession,職業
966,aspect,側面
967,pause,休止
968,conflict,対立
969,privilege,特権
970,prosperity,繁栄
971,genius,天才
972,seed,種
973,symptom,症状
974,merit,長所
975,layer,層
976,clue,手がかり
977,circumstances,状況
978,district,地区
979,prison,刑務所
980,companion,仲間
981,executive,重役
982,justice,正義
983,procedure,手続き
984,ray,光線
985,heaven,天国
986,luxury,贅沢
987,oxygen,酸素
988,fund,資金
989,theme,主題、テーマ
990,boundary,境界
991,ambition,熱望
992,forecast,予報
993,psychology,心理学
994,labor,労働
995,committee,委員会
996,physician,医者
997,philosophy,哲学
998,affection,愛情
999,candidate,候補
1000,bomb,爆弾
1001,priority,優先
1002,obstacle,障害
1003,appetite,食欲
1004,tension,緊張
1005,tribe,部族
1006,budget,予算
1007,campaign,運動、キャンペーン
1008,sorrow,悲しみ
1009,satellite,衛星
1010,insight,洞察
1011,cough,せき
1012,fate,運命
1013,scheme,計画
1014,insult,侮辱
1015,inhabitant,住民
1016,fossil,化石
1017,motive,動機
1018,instinct,本能
1019,legend,伝説
1020,empire,帝国
1021,suburb,郊外
1022,architecture,建築
1023,passion,情熱
1024,cancer,ガン
1025,logic,論理
1026,dozen,ダース
1027,harvest,収穫
1028,ingredient,材料
1029,hypothesis,仮説
1030,voyage,航海
1031,editor,編集者
1032,option,選択の自由
1033,hemisphere,半球
1034,mechanism,仕組み
1035,anthropologist,人類学者
1036,tragedy,悲劇
1037,antibiotic,抗生物質
1038,fare,運賃
1039,debt,借金
1040,curriculum,教育課程
1041,component,構成要素
1042,wheat,小麦
1043,usage,語法
1044,castle,城
1045,famine,飢饉
1046,extinction,絶滅
1047,purse,財布
1048,folk,民族
1049,explosion,爆発
1050,portion,部分
1051,organism,生物
1052,merchant,商人
1053,myth,神話
1054,incident,出来事
1055,wildlife,野生生物
1056,congress,議会
1057,bay,湾
1058,penalty,刑
1059,heritage,遺産
1060,diversity,多様性
1061,thumb,親指
1062,geography,地理
1063,factor,要因
1064,discrimination,差別
1065,virus,ウイルス
1066,statue,像
1067,priest,神父
1068,pioneer,先駆者
1069,trait,特徴
1070,bond,きずな
1071,grocery,食料品
1072,secretary,秘書
1073,dialect,方言
1074,astronomy,天文学
1075,youngster,子供
1076,substance,物質
1077,finding,発見
1078,strategy,戦略
1079,lung,肺
1080,opponent,敵
1081,ritual,儀式
1082,outcome,結果
1083,conservation,環境保護
1084,mammal,哺乳類
1085,telescope,望遠鏡
1086,refugee,難民
1087,code,規則
1088,flavor,風味
1089,particle,粒子
1090,nursing,看護
1091,suicide,自殺
1092,habitat,生息地
1093,bullying,いじめ
1094,dinosaur,恐竜
1095,council,議会
1096,gender,性別
1097,surgery,手術
1098,innovation,革新
1099,protein,タンパク質
1100,nutrition,栄養
1101,disaster,災害
1102,emission,排出
1103,ape,類人猿
1104,molecule,分子
1105,sweat,汗
1106,transplant,移植
1107,species,種
1108,tip,先
1109,cattle,牛
1110,density,密度
1111,concept,概念
1112,pale,青白い
1113,precious,貴重な
1114,loyal,忠実な
1115,isolated,孤立している
1116,generous,気前のよい
1117,tropical,熱帯
1118,reluctant,したがらない
1119,vague,漠然とした
1120,vast,広大な
1121,numerous,たくさんの
1122,rural,田舎の
1123,widespread,広まっている
1124,complicated,複雑な
1125,visible,目に見える
1126,raw,生の
1127,remote,へんぴな
1128,urgent,緊急の
1129,silly,ばかな
1130,striking,いちじるしい
1131,adequate,十分な
1132,extraordinary,並外れた
1133,odd,おかしな
1134,abstract,抽象的な
1135,mutual,相互の
1136,excessive,過度の
1137,ashamed,恥ずかしい
1138,tremendous,とてつもない
1139,inevitable,避けられない
1140,pure,純
1141,stable,安定した
1142,indifferent,無関心だ
1143,aggressive,攻撃的な
1144,ultimate,究極の
1145,shy,内気な
1146,solar,太陽
1147,profound,深い
1148,subtle,微妙な
1149,conservative,保守
1150,brave,勇敢な
1151,intense,強烈な
1152,alcoholic,アルコールの
1153,manual,手を使う
1154,cruel,残酷な
1155,rational,理性的な
1156,initial,最初の
1157,immune,免疫
1158,linguistic,言語の
1159,crucial,重大な
1160,verbal,言葉による
1161,optimistic,楽観的な
1162,flexible,柔軟な
1163,grateful,感謝している
1164,lively,生き生きとした
1165,overwhelming,圧倒的な
1166,abundant,豊富な
1167,selfish,利己的な
1168,ugly,みにくい
1169,racial,人種の
1170,prominent,有名な
1171,controversial,物議を呼ぶ
1172,federal,連邦の
1173,ridiculous,ばかげた
1174,imaginary,架空の
1175,harsh,厳しい
1176,random,無作為な
1177,adolescent,思春期の
1178,up-to-date,最新の
1179,liberal,自由主義の
1180,prior,前の
1181,moderate,適度な
1182,fluent,流ちょうな
1183,elaborate,手の込んだ
1184,incredible,信じられない
1185,radical,根本的な
1186,acid,酸性の
1187,deaf,耳が不自由な
1188,medieval,中世の
1189,ecological,生態
1190,slight,少しの
1191,ignorant,無知な
1192,cognitive,認知
1193,absolutely,絶対に
1194,virtually,ほとんど
1195,somewhat,多少
1196,merely,単に
1197,literally,文字通り
1198,seemingly,一見
1199,regardless,関係なく
1200,thoroughly,徹底的に
1201,submit,Aに服従する、提出する
1202,tempt,誘惑する、する気にさせる
1203,resign,辞職する
1204,conform,従う
1205,confine,限定する
1206,assemble,組み立てる
1207,dedicate,ささげる
1208,advocate,主張する
1209,thrive,繁栄する
1210,provoke,引き起こす
1211,dictate,命じる、要求する、決定する
1212,exploit,利用する、開発する
1213,surrender,降伏する
1214,reproduce,再生する、複製する、繁殖する[させる]
1215,acknowledge,認める
1216,swell,ふくらむ
1217,shed,落とす
1218,wind,曲がる
1219,cite,引き合いに出す
1220,digest,消化する
1221,skip,とばす、抜かす
1222,bind,縛る、束縛する
1223,dissolve,溶解する
1224,implement,実行する
1225,steer,操縦する
1226,congratulate,祝福する
1227,designate,指定する
1228,violate,破る、違反する
1229,presume,推定する、思う
1230,recruit,（新人を）入れる
1231,coincide,同時に起きる、重なる
1232,enforce,施行する
1233,displace,とってかわる、故郷から追い出す
1234,shrink,縮む、縮ませる、減る
1235,betray,裏切る、もらす
1236,comprise,構成される、構成する、占める
1237,indulge,ふける
1238,penetrate,入り込む
1239,devastate,壊滅させる
1240,plunge,突っ込む
1241,bounce,はね返る
1242,contradict,矛盾する
1243,prescribe,処方する
1244,oppress,しいたげる
1245,cherish,胸に抱く
1246,illuminate,照らす、解明する
1247,trigger,きっかけになる
1248,commute,通勤する、通学する
1249,induce,誘う
1250,utilize,利用する
1251,snap,ポキンと折れる、ポキンと折る
1252,donate,提供する
1253,hatch,（卵?ヒナ）かえす、かえる
1254,enclose,囲む
1255,prevail,普及している、広まる
1256,sigh,ため息をつく
1257,leak,漏れる、漏らす
1258,compel,強制する
1259,crush,押しつぶす
1260,comprehend,理解する
1261,negotiate,交渉する
1262,persist,持続する、残る
1263,multiply,増やす、増える、掛ける
1264,conceive,想像する
1265,compensate,埋め合わせる
1266,suspend,中止する、つるす
1267,stir,かきたてる
1268,soak,浸す、びしょぬれにする、吸収する
1269,refine,洗練する、磨きをかける
1270,arouse,刺激する、かき立てる
1271,precede,先行する
1272,render,OをCにする、変える
1273,mount,すえつける、乗る
1274,retreat,退く
1275,startle,驚かせる
1276,dare,する勇気がある
1277,sphere,領域、範囲
1278,sequence,連続、順番、順序
1279,deposit,預金、頭金、堆積物
1280,poll,世論調査、投票
1281,caution,用心
1282,rage,激怒、怒り
1283,formula,式、公式、方法、秘訣、解決策
1284,plot,筋、たくらみ、陰謀
1285,scope,範囲
1286,norm,規範
1287,disgust,嫌悪
1288,compromise,妥協
1289,supervisor,監督者
1290,paradox,逆説
1291,tissue,（生物の）組織；ティッシュペーパー
1292,breakdown,崩壊
1293,initiative,構想、主導権、
1294,fabric,織物、布
1295,publicity,宣伝、広告
1296,summit,頂上、頂点、首脳会議
1297,flock,群れ
1298,plague,疫病
1299,haste,急ぐこと
1300,nap,うたた寝
1301,ally,同盟国
1302,draft,下書き、草稿
1303,spectacle,光景
1304,premise,前提
1305,asset,財産
1306,lag,遅れ
1307,therapy,療法、治療法
1308,reception,もてなし
1309,compound,化合物
1310,blessing,ありがたいもの、恵み
1311,sensation,感覚、感じ
1312,recession,不景気、不況
1313,pole,棒、極
1314,outlook,態度、考え方、見通し、見込み
1315,endeavor,活動
1316,mercy,慈悲、情け
1317,counterpart,相当するもの
1318,session,期間、討論
1319,spectrum,変動範囲、領域
1320,junk,くず、がらくた
1321,worship,崇拝
1322,apt,しがちである、する傾向がある
1323,humble,謙虚な、粗末な
1324,entitled,得る権利がある、題された
1325,valid,妥当な、正当な
1326,faint,かすかな
1327,stiff,堅い
1328,obscure,わかりにくい
1329,fierce,激しい
1330,acute,（問題が）深刻な、（感覚・痛みが）鋭い
1331,idle,（仕事がなくて）何もしていない
1332,crude,粗末な、粗野な
1333,jealous,嫉妬深い、羨ましい
1334,pregnant,妊娠している
1335,liable,しがちである、可能性が高い
1336,stubborn,頑固な
1337,decent,まともな
1338,marvelous,驚くべき
1339,misleading,誤解を招く
1340,synthetic,合成の
1341,classical,クラシックの
1342,Muslim,イスラム教の
1343,anticipate,予想する
1344,rub,こする
1345,dispose,処理する
1346,refrain,控える
1347,accumulate,蓄積する
1348,boost,活気づける
1349,drag,引きずる
1350,revise,修正する
1351,scratch,かく
1352,roar,ほえる
1353,quote,引用する
1354,bloom,咲く
1355,insert,差し込む
1356,awaiting,待つ
1357,dread,恐れる
1358,conceal,隠す
1359,enrich,豊かにする
1360,cling,固執する
1361,surpass,まさる
1362,suppress,抑える
1363,portray,描く
1364,soaring,急上昇する
1365,drain,排出する
1366,glow,ボーッと光る
1367,migrate,移住する
1368,exclaim,叫ぶ
1369,exert,及ぼす
1370,disguise,隠す
1371,accelerate,加速する
1372,dwell,住む
1373,integrate,融けこませる
1374,weep,泣く
1375,reassure,安心させる
1376,crawl,はって進む
1377,restrain,抑制する
1378,resent,腹を立てる
1379,yell,大声で叫ぶ
1380,assess,評価する
1381,carve,彫る
1382,halt,止める
1383,inspect,検査する
1384,tackle,取り組む
1385,omit,省く
1386,chew,かむ
1387,resume,再開する
1388,mold,作る
1389,accommodate,収容できる
1390,erase,消す
1391,inferred,推量する
1392,revive,生き返らせる
1393,contemplate,考える
1394,rotate,回転する
1395,disrupt,かき乱す
1396,navigate,進路を決める
1397,ache,痛む
1398,discard,捨てる
1399,incorporate,取り入れる
1400,overtake,追い越す
1401,supplement,補う
1402,manipulate,操作する
1403,nourish,養う
1404,squeeze,しぼる
1405,depict,描く
1406,distract,そらす
1407,disclose,暴露する
1408,enroll,入学する
1409,nurture,育てる
1410,speculate,推測する
1411,prolong,延ばす
1412,execute,処刑する
1413,uncover,明らかにする
1414,tremble,震える
1415,seize,つかむ
1416,abolish,廃止する
1417,scold,しかる
1418,attain,達成する
1419,utter,発する
1420,flee,逃げる
1421,offending,怒らせる
1422,confess,告白する
1423,postpone,延期する
1424,drift,漂う
1425,weave,織る
1426,install,備えつける
1427,twist,ねじ曲げる
1428,extract,取り出す
1429,bump,ぶつかる
1430,despise,軽蔑する
1431,tolerate,我慢する
1432,boast,自慢する
1433,flourishing,栄えている
1434,disregard,無視する
1435,tease,からかう
1436,reinforce,強める
1437,strive,努力する
1438,coordinate,合わせる
1439,yawn,あくびをする
1440,hug,抱きしめる
1441,combat,戦う
1442,knit,編む
1443,fatigue,疲労
1444,fame,名声
1445,mess,めちゃくちゃ
1446,dignity,尊厳
1447,canal,運河
1448,drought,干ばつ
1449,despair,絶望
1450,interval,間隔
1451,luggage,荷物
1452,behalf,代表して
1453,impulse,衝動
1454,debris,破片
1455,beast,野獣
1456,superstition,迷信
1457,illusion,幻想、錯覚
1458,thread,糸
1459,intake,摂取量
1460,feast,宴会
1461,transition,移り変わり
1462,misery,悲惨さ
1463,radiation,放射線
1464,log,丸太
1465,consensus,合意
1466,deed,行い
1467,proverb,ことわざ
1468,compliment,ほめ言葉
1469,flame,炎
1470,anniversary,記念日
1471,conscience,良心
1472,expedition,探検
1473,offspring,子孫
1474,allowance,こづかい
1475,headline,大見出し
1476,treaty,条約
1477,monument,記念碑
1478,worm,虫
1479,remedy,治療法
1480,encyclopedia,百科事典
1481,glimpse,ちらり
1482,personnel,職員
1483,triumph,勝利
1484,arithmetic,算数
1485,self-esteem,自尊心
1486,microbe,微生物
1487,odds,可能性
1488,chaos,混沌
1489,destiny,運命
1490,diameter,直径
1491,lottery,宝くじ
1492,souvenir,みやげ物
1493,trail,小道
1494,ratio,比率
1495,sword,剣
1496,whistle,笛
1497,sentiment,感情
1498,chore,雑用
1499,courtesy,礼儀
1500,mayor,市長
1501,surveillance,監視、見張り
1502,trash,ごみ
1503,prestige,名声
1504,headquarters,本部、本社
1505,wilderness,荒野
1506,orbit,軌道
1507,bias,偏見
1508,republic,共和国
1509,bargain,掘り出し物
1510,domain,領域
1511,fragment,破片
1512,galaxy,星雲
1513,lap,ひざ
1514,deadline,締め切り
1515,bullet,弾丸
1516,pedestrian,歩行者
1517,wit,機知
1518,nuisance,迷惑
1519,criteria,基準
1520,hardship,苦難
1521,glory,栄光
1522,pavement,歩道
1523,navy,海軍
1524,script,台本
1525,pension,年金
1526,province,州
1527,surplus,余剰
1528,moisture,水分
1529,patch,あて布
1530,altitude,高度、標高
1531,thermometer,温度計
1532,tuition,授業料
1533,troop,軍隊
1534,primate,霊長類
1535,flaw,欠陥
1536,nephew,甥
1537,garment,衣服、衣類
1538,diagnosis,診断
1539,commerce,商業
1540,antiquity,古代、古物
1541,fraction,ほんの一部
1542,irony,皮肉
1543,nightmare,悪夢
1544,defect,欠陥
1545,certificate,証明書
1546,decay,腐敗
1547,erosion,浸食
1548,recipe,秘けつ
1549,skeleton,骨格
1550,grace,優雅さ
1551,landmark,名所
1552,dementia,認知症
1553,flesh,肉
1554,collision,衝突、対立
1555,hazard,危険なもの
1556,tomb,墓
1557,injection,注射
1558,breakthrough,飛躍的進歩
1559,leather,革
1560,jewelry,宝石
1561,cue,合図
1562,ambulance,救急車
1563,estate,不動産
1564,commodity,商品
1565,departure,出発
1566,phase,段階
1567,thief,泥棒
1568,saint,聖
1569,sculpture,彫刻
1570,grief,悲しみ
1571,lane,車線
1572,predator,捕食動物
1573,fluid,流体
1574,incentive,はげみ
1575,bride,花嫁
1576,intervention,介入
1577,margin,差
1578,biography,伝記
1579,consent,同意
1580,volcano,火山
1581,rebel,反逆者
1582,metaphor,比喩
1583,legislation,法律
1584,lightning,雷
1585,pesticide,殺虫剤
1586,column,コラム
1587,rumor,うわさ
1588,dust,ほこり
1589,dialogue,対話
1590,kindergarten,幼稚園
1591,diabetes,糖尿病
1592,obesity,肥満
1593,patent,特許
1594,chapter,章
1595,palace,宮殿
1596,laundry,洗濯
1597,ward,病棟
1598,outbreak,ぼっ発
1599,equation,方程式
1600,archaeologist,考古学者
1601,corruption,腐敗
1602,germ,細菌
1603,revenue,収入
1604,spouse,配偶者
1605,epidemic,流行
1606,mortality,死亡
1607,syndrome,症候群
1608,retail,小売り
1609,dose,量
1610,beverage,飲み物
1611,metabolism,新陳代謝
1612,hybrid,交配種
1613,scent,香り
1614,inflammation,炎症
1615,pill,薬
1616,grave,重大な
1617,fertile,肥えた
1618,hostile,反感を持つ
1619,indispensable,不可欠な
1620,oriented,志向の
1621,splendid,すばらしい
1622,competent,有能な
1623,supreme,最高の
1624,straightforward,わかりやすい
1625,sacred,聖
1626,bold,大胆な
1627,uneasy,不安な
1628,neat,きちんとした
1629,shallow,浅い
1630,fake,偽物の
1631,superficial,表面的な
1632,absurd,ばかげた
1633,fragile,壊れやすい
1634,respectable,ちゃんとした
1635,magnificent,すばらしい
1636,infinite,無限の
1637,comprehensive,包括的な
1638,steep,険しい
1639,gross,総
1640,subsequent,次に起こる
1641,sincere,心からの
1642,toxic,有毒な
1643,neutral,中立の
1644,diligent,勤勉な
1645,sore,痛い
1646,contaminated,汚染された
1647,ambiguous,あいまいな
1648,oral,口述の
1649,restless,落ち着かない
1650,rotten,腐った
1651,vigorous,精力的な
1652,immense,莫大な
1653,metropolitan,大都市の
1654,punctual,時間をきっちり守る
1655,solitary,孤独な
1656,collective,集団
1657,diplomatic,外交の
1658,nasty,不快な
1659,helpless,無力な
1660,explicit,明確な、はっきりした
1661,bankrupt,破産した
1662,eternal,永遠の
1663,sole,唯一の
1664,sour,すっぱい
1665,notable,注目すべき
1666,affluent,裕福な
1667,naked,裸の
1668,vocal,発声
1669,feminine,女性の
1670,vacant,空いている
1671,exotic,外来の
1672,rigid,厳格な
1673,humid,蒸し暑い
1674,outstanding,傑出した
1675,addicted,中毒である
1676,vulnerable,受けやすい
1677,spontaneous,自然に起こる
1678,greedy,貪欲な
1679,trivial,ささいな
1680,per capita,一人当たりの
1681,inherent,元から伴う
1682,promising,前途有望な
1683,physiological,生理的な
1684,clinical,臨床
1685,chronic,慢性の
1686,geological,地質学的な
1687,countless,無数の
1688,innate,先天的な
1689,alert,用心する
1690,autonomous,自動運転
1691,simultaneously,同時に
1692,utterly,まったく
1693,drastically,劇的に
1694,necessarily,必ずしも
1695,thereby,そうすることで
1696,frankly,率直に
1697,namely,すなわち
1698,hence,だから
1699,via,経由で
1700,owing,のために
1701,clarify,明らかにする
1702,smash,粉々に砕く
1703,mourn,悲しむ
1704,summon,呼ぶ
1705,shatter,粉々にする
1706,linger,残る
1707,lament,嘆く
1708,endowed,恵まれる
1709,rejoice,喜ぶ
1710,allocate,配分する
1711,slap,ピシャリと打つ
1712,contend,主張する
1713,swear,誓う
1714,discern,識別する
1715,degrade,悪化させる
1716,erect,築く
1717,testify,証言する
1718,spur,駆りたてる
1719,roam,歩き回る
1720,frown,まゆをひそめる
1721,lure,呼び込む
1722,defy,逆らう
1723,stroll,ぶらつく
1724,rattle,がたがた鳴らす
1725,reconcile,調和させる
1726,blur,ぼやかす
1727,soothe,なだめる
1728,impair,低下させる
1729,comply,従う
1730,pierce,穴をあける
1731,stumble,つまずく
1732,hinder,さまたげる
1733,mock,あざける
1734,embody,具現する
1735,stalk,忍び寄る
1736,proclaim,宣言する
1737,applaud,拍手する
1738,inflict,与える
1739,merge,合併する
1740,evacuated,避難した
1741,undone,元に戻る
1742,poke,突く
1743,haunted,つきまとわれる
1744,adhere,固く守る
1745,compile,まとめる
1746,wither,しぼむ
1747,stun,びっくりさせる
1748,choke,のどがつまる
1749,deteriorate,悪化する
1750,dump,捨てる
1751,murmur,つぶやく
1752,delete,削除する
1753,inhibit,阻害する
1754,divert,そらす
1755,tame,飼いならす
1756,reap,手に入れる
1757,affirm,断言する
1758,immersed,浸る
1759,expire,期限が切れる
1760,embark,乗り出す
1761,vow,誓う
1762,foresee,予知する
1763,adore,崇拝する
1764,yearn,切望する
1765,undermine,弱める
1766,suck,吸う
1767,pledge,誓う
1768,intrude,立ち入る
1769,sue,訴える
1770,distort,歪曲する
1771,extinguish,消す
1772,preach,説教する
1773,curb,抑制する
1774,withstand,耐える
1775,dip,浸す
1776,recite,暗唱する
1777,thrust,押し込む
1778,plead,嘆願する
1779,humiliate,恥をかかせる
1780,discharge,放出する
1781,condemn,非難する
1782,retrieve,検索する
1783,shrug,肩をすくめる
1784,evoke,呼び起こす
1785,fetch,取ってくる
1786,flatter,お世辞を言う
1787,prose,散文
1788,textile,織物
1789,timber,材木
1790,masterpiece,傑作
1791,riot,暴動
1792,carriage,車両
1793,apparatus,装置
1794,fuss,大騒ぎ
1795,deficiency,欠乏
1796,heir,相続人
1797,equator,赤道
1798,petroleum,石油
1799,witch,魔女
1800,vapor,蒸気
1801,probe,探査機
1802,expertise,専門知識
1803,scorn,軽蔑
1804,prophet,預言者
1805,breeze,そよ風
1806,sin,罪
1807,surge,急増
1808,complement,補うもの
1809,queue,列
1810,stake,賭け金
1811,ambassador,大使
1812,jury,陪審員
1813,cluster,集団
1814,lump,こぶ
1815,meadow,牧草地
1816,feat,偉業
1817,temperament,気質
1818,chill,寒気
1819,appliance,器具
1820,predecessor,前任者
1821,entity,存在
1822,hospitality,もてなし
1823,narrative,話
1824,segment,部分、区分
1825,catastrophe,大災害
1826,monarch,君主、皇帝
1827,constraint,制約
1828,amendment,改正、修正
1829,cosmos,宇宙
1830,aisle,通路
1831,hierarchy,階級制度
1832,toll,通行料
1833,transaction,取引
1834,burglar,強盗
1835,tyranny,圧政
1836,parasite,寄生生物
1837,intuition,直感
1838,communist,共産主義の
1839,legacy,遺産
1840,vein,静脈
1841,discourse,論説
1842,dairy,乳製品、酪農
1843,artifact,工芸品
1844,outlet,はけ口
1845,apprehension,不安
1846,melancholy,憂うつ
1847,novelty,目新しさ
1848,specimen,標本
1849,hygiene,衛生
1850,tactics,戦術
1851,monopoly,独占
1852,token,印
1853,aristocracy,貴族階級
1854,revenge,復讐
1855,activist,活動家
1856,rhetoric,美辞麗句
1857,entrepreneur,起業家
1858,census,国勢調査
1859,verge,瀬戸際
1860,advent,出現、到来
1861,analogy,類似点
1862,irrigation,灌漑
1863,coverage,報道
1864,cuisine,料理
1865,menace,脅威
1866,peril,危険
1867,limb,手足
1868,assault,攻撃
1869,hatred,憎しみ
1870,autonomy,自主性
1871,cram,塾
1872,subsidy,補助金
1873,empathy,共感
1874,slang,俗語
1875,posture,姿勢
1876,ideology,イデオロギー
1877,curse,災いのもと
1878,tumor,腫瘍
1879,intersection,交差点
1880,duration,期間
1881,deforestation,森林破壊
1882,precaution,用心
1883,bunch,ひとたばの
1884,shortcoming,欠点
1885,aspiration,熱望
1886,psychiatrist,精神科医
1887,shipping,発送
1888,senator,上院議員
1889,statesman,政治家
1890,subordinate,部下
1891,vacuum,空白
1892,quest,探究
1893,meditation,瞑想
1894,subscriber,加入者
1895,riddle,謎
1896,rag,ぼろ
1897,rust,さび
1898,sanitation,衛生
1899,midst,まっただ中
1900,mischief,いたずら
1901,proficiency,検定
1902,recollection,記憶
1903,latitude,緯
1904,friction,摩擦
1905,botanist,植物学者
1906,heredity,遺伝
1907,contempt,軽蔑
1908,anatomy,構造
1909,integrity,誠実
1910,cargo,貨物
1911,bribe,わいろ
1912,eruption,噴火
1913,funeral,葬式
1914,deficit,赤字
1915,bulk,大部分
1916,millionaire,百万長者
1917,ash,灰
1918,realm,領域
1919,plantation,農園
1920,plow,すき
1921,vending,販売
1922,orphan,孤児
1923,neuron,神経細胞
1924,vegetation,植生
1925,warrior,戦士
1926,mutation,突然変異
1927,sewage,下水
1928,paradigm,理論的枠組
1929,protocol,議定書
1930,skyscraper,高層ビル
1931,accord,一致
1932,bureaucrat,官僚
1933,array,多彩
1934,clash,衝突
1935,torture,拷問
1936,reign,統治
1937,thesis,論文
1938,digit,桁
1939,agenda,課題
1940,onset,発症
1941,peasant,小作農
1942,ultraviolet,紫外
1943,renowned,有名な
1944,transparent,透き通った
1945,dim,薄暗い
1946,legitimate,正当な
1947,adverse,悪
1948,swift,すばやい
1949,naive,世間知らずの
1950,dumb,ばか
1951,gloomy,暗い
1952,furious,激怒した
1953,earnest,まじめな
1954,terrific,すばらしい
1955,vertical,垂直な
1956,wicked,邪悪な
1957,subjective,主観的な
1958,enlightened,進んだ考えの
1959,authentic,本物の
1960,brutal,残忍な
1961,dizzy,めまい
1962,sheer,まったくの
1963,naughty,いたずらな
1964,damp,湿った
1965,static,静的な
1966,doomed,運命にある
1967,respiratory,呼吸器に関する、呼吸の
1968,innumerable,無数の
1969,clumsy,不器用な
1970,aesthetic,美的
1971,obsessed,とりつかれている
1972,detached,切り離された
1973,wrecked,難破した
1974,reckless,無謀な
1975,arrogant,傲慢な
1976,preoccupied,頭がいっぱいだ
1977,gigantic,巨大な
1978,conspicuous,顕著な
1979,slender,すらりとした
1980,manifest,明らかな
1981,tidy,きちんと
1982,skeptical,懐疑的な
1983,notorious,悪名高い
1984,anonymous,匿名の
1985,monotonous,単調な
1986,ample,豊富に
1987,trim,こぎれいな
1988,savage,野蛮な
1989,coherent,一貫した
1990,eloquent,雄弁な
1991,foul,不快な
1992,juvenile,青少年の
1993,compulsory,義務的な
1994,prone,やすい
1995,arbitrary,勝手な
1996,ingenious,独創的な
1997,divine,神聖なる
1998,tender,やさしい
1999,outraged,憤慨している
2000,intrinsic,本来の
2001,paralyzed,麻痺している
2002,compatible,適合する
2003,patriotic,愛国的な
2004,eminent,名高い
2005,potent,強力な
2006,insane,正気を失っている
2007,staple,主要な
2008,secondhand,間接
2009,indigenous,先住
2010,utmost,最も
2011,integral,不可欠な
2012,intricate,複雑な
2013,demographic,人口統計の
2014,mighty,強力な
2015,intact,無傷の
2016,intent,決意をしている
2017,intriguing,興味深い
2018,merry,陽気な
2019,perpetual,永続する
2020,spinal,脊椎の
2021,susceptible,かかりやすい
2022,mandatory,義務的な
2023,upright,まっすぐに
2024,abruptly,不意に
2025,conversely,逆に
2026,predominantly,主に
2027,lest,～しないように`,
  },
  {
    id: 'passtan',
    name: 'パス単準１級',
    csv: `番号,英単語,意味
1,last,続く、持続する、(天候・体力・食品などが)持ちこたえる
2,affect,に影響を及ぼす；を感動させる
3,claim,と主張する；を（自分のものとして）要求する
4,ship,を出荷する、を輸送する
5,issue,問題（点）；発行（物）；発表
6,purchase,を購入する
7,occur,起こる；心に浮かぶ；現れる
8,deal,を処理する；を商う；を分配する
9,consume,を消費する；を食べる，飲む
10,present,を提示する、を進呈する
11,fire,を解雇する、を首にする
12,regard,を見なす；を見る；を評価する
13,fine,に罰金を科す
14,transfer,を移す；を伝える；移る；乗り換える
15,decline,減少する；衰退する；を断る
16,eliminate,を取り除く
17,indicate,を指し示す；を述べる
18,ensure,を確実にする（≒make sure）；を守る
19,expand,（を）拡大する；（を）詳説する
20,address,（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）
21,identify,を特定する；を（～と）同一視する（with）
22,construct,を建設する（＝build）；を構成する
23,invest,（を）投資する；に（～を）与える（with）
24,obtain,を得る
25,struggle,闘い；懸命の努力
26,counter,～と反論する、～に反対する
27,associate,を結び付けて考える；（～と）交際する（with）
28,register,を記録する，登録する；（～に）登録する（for）
29,reveal,を明らかにする；を見せる
30,species,（生物の）種；種類
31,diet,(日常の)食べ物、療養食
32,site,用地，場所；跡地；（ウェブ）サイト
33,cell,細胞；独房；電池
34,facility,施設，設備；機能；才能
35,practice,実践，実行；（社会の）慣習；練習
36,resident,居住者；滞在者
37,option,選択（の自由）；選択肢
38,organ,器官，臓器；組織；（パイプ）オルガン
39,critic,批判する人、批評家
40,region,地域；領域；部位
41,tax,税金、税
42,access,利用，入手；接近（の機会・方法・権利）
43,virus,ウイルス；（感染症の）病原体
44,bill,請求書；【英】勘定書（≒【米】check）；法案
45,evidence,証拠
46,attempt,を試みる，企てる
47,account,説明；勘定；口座
48,theory,学説；理論；原理；推測
49,factor,要因、要素
50,stock,在庫品；蓄え；株
51,chemical,化学の，化学的な
52,media,マスメディア、マスコミ
53,income,収入；所得
54,supply,を供給する
55,shortage,不足、欠如
56,poverty,貧困、欠乏
57,criminal,犯人、犯罪者
58,budget,予算；経費
59,authority,〔通例 the ～ties〕（関係）当局；権威；権限
60,genome,ゲノム
61,atmosphere,〔the ～〕大気；雰囲気
62,aid,を援助する，助ける（≒help）
63,measure,措置、程度、基準
64,subject,話題；科目；主題；被験者
65,decade,10年間
66,weapon,兵器，武器（≒arms）
67,nutrient,栄養分、栄養になるもの
68,expense,〔～s〕経費；費用；犠牲
69,structure,構造；体系；構造物
70,adolescent,青年
71,procedure,手順、手続き
72,minimum,最小限度
73,fuel,燃料；勢いを増加させるもの
74,resource,〔通例～s〕資源；〔通例～s〕資金；才覚
75,regulation,規則、規制
76,contract,契約（書）；協定
77,insurance,保険；保険料；保険金
78,employment,雇用、職
79,ban,を（法的に）禁止する；を締め出す
80,vehicle,車、(特に陸上の)乗り物、輸送機関、伝達手段
81,soil,土地，土壌；（悪事などの）温床
82,cargo,(主に船・飛行機の)積荷、貨物
83,aircraft,航空機、飛行機
84,current,現在の；現代の；通用している
85,political,政治（上）の
86,significant,重要な，重大な；意義深い
87,effective,効果的な、有効な
88,military,軍の，軍事（用）の
89,due,予定された；（支払）期日で；しかるべき
90,essential,（～に）必要不可欠な（to/for）；本質的な
91,illegal,違法の、非合法の
92,immune,（～に対して）免疫を持つ（to）；（～を）免れた（from）
93,numerous,非常に数の多い
94,extreme,極端な；極度の，過激な
95,general,全体の、一般的な
96,agricultural,農業の、農耕の
97,overall,総合的な；全体的な
98,additional,追加の、付加的な
99,entire,全体の，全部の（≒whole）；完全な
100,severe,（人・規律・事態・天気などが）厳しい；猛烈な
101,alter,を変える；変わる（≒change）
102,adopt,を採用する；（態度など）をとる；を養子にする
103,vote,投票；投票結果；〔the ～〕選挙権
104,determine,を決定する；を正確に知る
105,enable,（人）が...できるようにする；を可能にする
106,conduct,（調査・実験など）を実施する；を導く
107,direct,を案内する、を指揮する
108,absorb,を吸収する；を併合する；を夢中にさせる
109,imply,を暗に意味する；を必然的に伴う
110,operate,を操作する；機能する；手術する
111,demonstrate,を論証［証明］する；デモをする
112,boost,を押し上げる；を増加させる
113,prove,を証明する；判明する，わかる
114,monitor,を監視する；を傍受する
115,defeat,を負かす（≒beat）；を失敗させる
116,protest,（に）抗議する；を主張する
117,target,（到達・攻撃）目標；的
118,preserve,を保存する；を保持する；を保護する
119,oppose,に反対する；を対抗［対比］させる
120,migrate,移住する；（鳥などが）渡る
121,analyze,を分析する
122,discourage,（人）にやる気をなくさせる；を落胆させる
123,confirm,を確認する；を裏づける
124,intend,を意図する
125,predict,を予言［予測］する
126,extend,を伸［延］ばす；伸びる；及ぶ
127,figure,数字；姿；人物；図表
128,transportation,交通[輸送]機関、輸送
129,institution,機関；協会；施設；制度
130,theft,窃盗（罪）
131,candidate,（～の）候補（者）（for）；志願者
132,mammal,哺乳動物
133,economist,経済学者
134,protein,たんぱく質
135,immigrant,(外国からの)移住者、移民
136,property,不動産、財産、特性
137,fund,〔しばしば～s〕基金，資金
138,habitat,生息地；（人の）居住地
139,symptom,症状；兆候（≒sign）
140,eruption,勃発、噴火
141,quantity,量；分量
142,ad,広告
143,saving,節約、倹約、預金(額)、蓄え
144,territory,領土；（活動の）領域；（動物の）テリトリー
145,threat,脅威；（悪い）兆し；脅迫
146,sufferer,苦しむ人、被災者、病人
147,emission,排気、放出(物)
148,executive,重役、幹部、経営者
149,strategy,戦略
150,riot,暴動
151,district,地区；行政区
152,election,選挙
153,medication,(医師が処方した)薬、医薬品、薬物治療
154,breed,を繁殖させる，育てる；繁殖する
155,conflict,争い；論争；不一致
156,productivity,生産性
157,organism,有機体、生物
158,representative,代表者、代理人
159,warehouse,倉庫
160,refund,返金、払い戻し(金)
161,tuition,【主に米】 授業料；（個人）指導
162,range,範囲、領域
163,victim,犠牲（者），被害者
164,dose,（薬の1回分の）服用量；放射線の1回の照射量
165,mainland,本土
166,waterfall,滝
167,satellite,人工衛星、衛星
168,evolution,進化、発展、展開
169,prey,獲物；犠牲者
170,bystander,傍観者
171,creature,生き物、(特に人以外の)動物
172,civilization,文明
173,tribe,部族；仲間
174,permission,許可、承認
175,barrier,（～に対する）障壁（against/to）；防壁
176,wage,賃金、給料
177,drone,ドローン、(無線操作の)無人機
178,appearance,外観、出現
179,embassy,大使館；大使一行
180,skeleton,骨格；骨組み；概略
181,wildlife,野生生物
182,potential,潜在的な；可能性を秘めた
183,limited,限定された、わずかの
184,rural,田舎の（⇔urban），田園の
185,advanced,進歩した、前進した、上級の
186,beneficial,有益な、有利な
187,genetic,遺伝子の
188,radical,急進的な；根本的な
189,hostile,敵意のある（⇔friendly 友好的な）
190,fit,健康な、元気な、ふさわしい
191,long-term,長期にわたる、長期的な
192,Arctic,北極の
193,minor,重要でない；小さい
194,risky,危険な
195,complex,複雑な、複合(体)の
196,competitive,競争力のある、格安の、競争の
197,immediate,即座の；当面の；すぐそばの；直接の
198,religious,宗教(上)の、信仰があつい
199,related,関連した、関係のある
200,affordable,手頃な、安価な
201,donate,を寄付する；（臓器・血液）を提供する
202,lessen,を減らす
203,manufacture,を製造する；をでっち上げる
204,commute,通勤［通学］する
205,exaggerate,（を）誇張する；を強調する
206,suspect,ではないかと思う；（人）を疑う
207,acquire,を得る；を習得する
208,reintroduce,(動植物など)をかつての分布域に再導入する、(制度など)を復活させる
209,reschedule,の日時を変更する
210,adapt,適応する；を（～に）適合させる（to）
211,generate,を生み出す；（電気など）を発生させる
212,guarantee,を保証する
213,dump,を投棄する；をどさっと落とす
214,update,を最新のものにする；をアップデートする
215,classify,を分類する；を機密扱いにする
216,acknowledge,"（事実など）を認める（≒admit, accept）；に謝意を表す"
217,enforce,を施行［実施］する；を（～に）強制する（on/upon）
218,renew,を更新する；（資源）を再生する
219,overlook,を見落とす；を大目に見る；を見渡す
220,evaluate,を評価する；を査定する
221,commit,献身する；（罪など）を犯す；を投入する
222,argument,議論、口論
223,archaeologist,考古学者
224,reputation,評判；名声
225,fossil,化石；時代遅れの人［物］
226,status,地位；状態
227,contrast,（～との）対照（with/to）
228,workplace,職場
229,equality,平等
230,colleague,（職場の）同僚
231,assistance,援助、支援
232,luxury,ぜいたく（品）；〔形容詞的に〕豪華な
233,outbreak,発生，勃発
234,council,（地方）議会；評議会；（公の）会議
235,pottery,陶器類、焼き物類
236,assignment,任務、宿題、割り当て
237,particle,（微）粒子；ほんのわずか
238,radiation,放射能，放射線
239,priority,優先（事項）
240,content,内容，中身；コンテンツ
241,destination,(旅行などの)目的地、行き先
242,mine,鉱山、地雷
243,injury,傷害、けが
244,lottery,宝くじ、抽選
245,feature,特徴、特集記事
246,labor,労働、労働力
247,diabetes,糖尿病
248,bulb,電球、球根
249,r?sum?,履歴書[≒CV]、要約
250,mud,ぬかるみ、泥
251,psychology,心理学；心理（状態）
252,corporation,（大）企業；法人
253,ecosystem,生態系
254,promotion,昇進、促進、販売促進
255,administration,管理（部）；行政；政府（機関）
256,complaint,苦情、不平
257,debt,借金，負債；恩義
258,requirement,必要条件、必需品
259,workforce,労働人口，総労働力；全従業員（数）
260,preference,他より好むこと、好み
261,refugee,難民、亡命者
262,inhabitant,居住者、住民
263,subscription,予約購読(料)、寄付(金)
264,recipient,受け取る人；（臓器などの）被提供者
265,shift,を変える，移す；変わる；移動する
266,vessel,船舶；容器；（体液が通る）脈管
267,ingredient,材料，成分；（成功の）要因
268,qualified,有能な、資格のある、適任の
269,widespread,広範囲にわたる；広く普及した
270,alternative,代替の、どちらか一方の
271,harsh,厳しい；（光・色・味などが）不快な
272,enormous,莫大な，巨大な
273,specific,明確な、特定の
274,artificial,人工の（⇔natural 自然の）；不自然な
275,toxic,有毒な；中毒性の
276,flexible,融通の利く，柔軟な
277,latest,最新の、最近の
278,former,以前の、元の
279,capable,能力がある；有能な
280,practical,実践的な、実際的な
281,mechanical,機械の；機械的な
282,federal,連邦（政府）の
283,aggressive,攻撃的な；意欲的な
284,adequate,十分な；適切な
285,unexpected,思いがけない，不意の
286,attractive,魅力的な
287,sufficient,"十分な（for ～に, to do ～するのに）"
288,costly,費用のかかる、高価な、犠牲[損失、労力]の大きな
289,eventually,ついに(は)、結局(は)
290,otherwise,そうでなければ、そのほかの点では
291,previously,以前に
292,relatively,比較的(に)、相対的に
293,consequently,その結果(として)、従って
294,constantly,絶えず、常に
295,typically,通常、概して、典型的に
296,barely,かろうじて、ほとんど～ない
297,despite,～にもかかわらず
298,per,～につき、～ごとに
299,beneath,～の下に[の]
300,whereas,～するのに（対し），～する一方
301,post,(インターネットで)(情報・メッセージ)を投稿する、(ビラなど)を張る
302,reject,を拒否する
303,consult,（に）相談する；を参照する
304,obey,に従う；に服従する
305,engage,を従事させる；を（～として）雇う（as）；（～に）従事する（in/with）
306,restore,を回復させる；を修復する
307,colonize,を植民地化する、を入植させる
308,interact,影響し合う；相互に作用する
309,inspire,（人）を奮起させる；を喚起する
310,sue,を告訴する；（～を求めて）訴訟を起こす（for）
311,estimate,～と推定する、を見積もる
312,strengthen,を(より)強くする
313,carve,を彫る；を切り開く；（肉）を切り分ける
314,convince,を納得［確信］させる
315,propose,を提案する；をもくろむ；結婚を申し込む
316,blame,を責める；の責任を負わせる
317,collapse,崩壊する；（人が）倒れる；を折り畳む
318,import,を輸入する；を取り込む
319,load,に積む；に負わせる
320,pollute,を汚染する
321,spot,(特定の)場所、斑点、しみ
322,prescription,処方箋、処方
323,duty,義務；〔しばしば～ties〕職務；関税
324,union,組合、統合、団結
325,concept,概念
326,root,根本、源、(植物の)根
327,survival,生き残ること、生き延びること
328,maintenance,保守、整備、維持
329,formation,形成；構成（物）；隊列
330,educator,教育者、教師
331,kidney,腎臓
332,nutrition,栄養（の摂取）
333,brand,ブランド、銘柄
334,storage,保管、貯蔵(法)、収容力
335,firm,確固たる；堅固な；安定した
336,statistics,統計；統計学
337,toll,損害（の程度）；死傷者数；通行料
338,tip,助言，秘訣；チップ；先端
339,CEO,最高経営責任者
340,circumstance,〔通例～s〕状況，事情；境遇
341,outsider,部外者、門外漢
342,reduction,減少、削減
343,settlement,開拓地、解決、合意
344,divorce,離婚；分離
345,likelihood,可能性、見込み
346,livestock,(牛・羊・豚などの)家畜(類)
347,possession,所有物、財産、所有
348,plot,（小説などの）筋；陰謀
349,category,部類，区分；範疇
350,welfare,福祉，幸福
351,moisture,水分；湿気
352,obesity,（病的な)肥満
353,grant,（人）に（許可・権利など）を与える；を認める
354,layer,層
355,secretary,秘書
356,anxiety,不安、心配
357,ownership,所有権、所有者であること
358,foundation,基礎、基盤
359,division,不和、分割、部門、仕切り
360,establishment,設立、制定、組織
361,conservation,（動植物などの）保護；保存
362,murder,殺人
363,presence,存在；出席；面前
364,paradox,逆説；矛盾
365,prisoner,囚人
366,surgeon,外科医
367,frequency,頻度、しばしば起こること
368,port,港
369,reception,反応；宴会；受付；受信（状態）
370,coworker,同僚、仕事仲間
371,rust,さび
372,athletics,スポーツ、運動競技
373,voyage,(ゆったりした長い)旅、船旅
374,ecologist,生態学者、環境保護論者
375,soul,精神；魂，霊魂；生気
376,isolated,孤立した、孤独な
377,biased,偏った、偏見を持った
378,multiple,多様な；種々雑多な
379,critical,批判的な、重大な
380,remote,（～から）遠く離れた（from）；かけ離れた
381,encouraging,勇気づける、望みを持たせる
382,underground,地下の、秘密の
383,stable,安定した；動じない
384,domestic,家庭の；国内の；（動物が）飼いならされた
385,shallow,浅い（⇔deep 深い）；浅薄な
386,willing,～するのをいとわない、快く～する
387,superior,よりすぐれた
388,profitable,利益になる、有益な
389,solid,しっかりした；硬い；固体の
390,tremendous,途方もない，莫大な；すばらしい
391,intellectual,知的な、知性の
392,chief,主な、最高位の
393,steady,着実な，一定の；安定した
394,evil,邪悪な；有害な
395,coastal,沿岸(地方)の
396,dairy,〔集合的に〕乳製品；乳製品加工所［販売者］
397,digestive,消化の
398,loyal,（～に）忠実な（to）；誠実な
399,sensory,感覚の
400,fancy,（気まぐれな）好み；空想；思いつき
401,spoil,を台無しにする；を甘やかす；だめになる
402,stimulate,を刺激する
403,distract,（注意など）をそらす
404,bargain,買い得品；取引；契約
405,emerge,明らかになる、現れる
406,browse,（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く
407,define,を定義する、を明確に示す
408,adjust,を調整する；を適合させる；順応する
409,deserve,に値する
410,undergo,を経験する；（手術など）を受ける；に耐える
411,contradict,と矛盾する；に反対意見を言う
412,withdraw,を引き出す；を撤回する；撤退する
413,accompany,に同行する；に付随する
414,infect,(人)を感染させる、を汚染する
415,rebel,反逆者
416,convert,を変える；を改宗［転向］させる；を交換する
417,calculate,を計算する；を予測する
418,utilize,を利用する（≒make use of）
419,admit,～と(しぶしぶ)認める、を中に入れる
420,punish,を罰する；に損傷を与える
421,approve,賛成する；を承認する
422,owe,に借りがある；のおかげである
423,proceed,進む，進行する；（～を）続行する（with）
424,navigate,（を）誘導する；（を）操縦する；（を）航行する
425,postpone,を延期する（≒put off）
426,swallow,（を）飲み込む；をうのみにする；に耐える
427,tailor,を合わせて作る
428,overhear,を偶然耳にする
429,consequence,結果、重要さ
430,application,申請書、申し込み、適用
431,workout,運動、(運動競技の)練習
432,obstacle,（～に対する）障害（物）（to）
433,treaty,（国家間の）条約；協定
434,deforestation,森林伐採
435,infrastructure,基本的施設；（経済）基盤
436,contribution,貢献、寄付(金)
437,congestion,混雑
438,exposure,身をさらすこと、暴露
439,blow,強打、打撃、災難
440,participation,参加
441,crisis,危機、難局
442,ancestor,先祖、祖先
443,architect,建築家、設計者
444,existence,存在、生存
445,deposit,を置く；を預ける；を堆積させる
446,finance,金融、財政(学)
447,awareness,認識、意識
448,intake,摂取量；受け入れ数；取り入れること
449,witness,目撃者；証人；証拠，証言
450,coverage,報道、(保険の)補償範囲、適用範囲
451,lawsuit,(民事)訴訟
452,session,集まり；（議会の）会期；（開会中の）議会
453,means,〔単数・複数扱い〕手段；〔複数扱い〕資力，収入
454,pioneer,先駆者、草分け、(未開地の)開拓者
455,satisfaction,満足
456,basis,根拠、基礎
457,element,(構成)要素、成分
458,phenomenon,現象、事象
459,scale,規模、程度
460,journal,(専門)雑誌、日刊[週刊]新聞
461,grain,穀物；粒；きめ
462,continent,大陸、(イギリスから見て)ヨーロッパ大陸
463,headquarters,本社、(軍・警察・会社などの)本部
464,globalization,国際化
465,brochure,パンフレット、小冊子
466,inspection,検査、点検
467,attendance,出席[入場]者数、出席
468,copper,銅
469,dozen,12(個)、１ダース
470,flu,インフルエンザ
471,burial,埋葬
472,mold,鋳型；鋳物；性格；かび
473,patch,（～の）部分，斑点；継ぎ；貼り薬
474,diagram,図(表)
475,placement,(就職先・学校・里親などの)斡旋、配置
476,shame,恥；残念なこと
477,wheelchair,車椅子
478,experienced,熟練した
479,initial,初めの
480,mainstream,（活動・思潮などの）主流；大勢
481,appropriate,適切な
482,fake,偽の；見せかけだけの
483,alert,警戒して；敏速な
484,fatal,致命的な、破滅的な
485,nutritious,栄養になる
486,sophisticated,高性能の，精巧な；洗練された
487,automatic,自動の
488,raw,生の；未加工の
489,slight,わずかな；取るに足らない
490,man-made,(物質などが)合成の、人工の
491,aging,高齢化が進む、老朽化している
492,spiritual,精神の（⇔material）；霊的な
493,endangered,(動植物が)絶滅の危機にある
494,sticky,ねばねばの、粘着性の
495,fertile,肥沃な（⇔barren 不毛の）；多産の
496,elsewhere,どこかほかのところへ[に、へ]
497,altogether,完全に
498,strictly,厳格に、厳しく
499,beforehand,前もって、あらかじめ
500,likewise,同様に（≒in the same way）
501,detect,を感知する；を見つけ出す；に気づく
502,combat,戦闘；対立
503,pose,（危険）を引き起こす；（問題など）を提起する；（～を）装う（as）
504,emphasize,を強調する；を重視する
505,highlight,を目立たせる，強調する
506,resist,に抵抗する；〔通例否定文で〕を我慢する
507,exceed,を超える；に勝る
508,relocate,(住居・事務所・住民など)を移転[移動]させる
509,disprove,の誤りを証明する、の反証を挙げる
510,crawl,はう；ゆっくり進む
511,foster,をはぐくむ；を養育する；を心に抱く
512,harass,を絶えず悩ます、を苦しめる
513,magnify,を拡大する、を誇張する
514,sneak,こっそり動く
515,stray,はぐれる，（道に）迷う
516,worsen,を悪化させる；悪化する（≒deteriorate）
517,advocate,を主張する；を擁護する
518,evacuate,を避難させる、から立ち退く
519,verify,の正しさを証明［確認］する
520,abuse,乱用；虐待
521,scatter,をまき散らす；分散する
522,endorse,を推奨する
523,modify,を修正する；を緩和する
524,penetrate,（に）浸透する；（に）進出する；（を）貫く；（を）見抜く
525,conform,順応する；一致する
526,leave,休暇
527,tissue,（生物の）組織
528,gut,腸、消化管、内臓
529,lightning,雷、稲妻
530,camel,ラクダ、黄褐色
531,antioxidant,抗酸化物質、酸化防止剤
532,disorder,障害，（心身の）不調；混乱
533,cattle,〔集合的に〕牛
534,oath,誓い、誓約
535,monument,記念碑，遺跡；金字塔
536,heating,暖房(装置)
537,germ,細菌、病原菌
538,legend,伝説、言い伝え、伝説的な人物
539,auditorium,(学校の)講堂、公会堂
540,therapy,療法；心理療法
541,heritage,遺産
542,invasion,侵害、侵入
543,instruction,(製品の)使用書、指示、教育
544,extinction,(家系・種などの)絶滅、消滅
545,creativity,創造性、独創性
546,plantation,(熱帯・亜熱帯の)(大)農園
547,drought,干ばつ；（慢性的な）不足
548,wealth,財産、富、豊富
549,reminder,思い出させるもの、記念物[品]
550,inquiry,問い合わせ、質問、調査
551,investigation,(詳しい)調査、研究
552,boundary,境界（線）；〔通例～ries〕限界
553,compartment,(列車・客室などの仕切った)区画[部屋]
554,substitute,を代わりに使う；（～の）代理をする（for）
555,hybrid,雑種の；混成の
556,characteristic,特徴
557,routine,決まり切った仕事；いつもの手順
558,edge,優勢、刃、端
559,incident,出来事，事件；紛争
560,clue,（～の）手がかり（to/about）；（パズルの）ヒント
561,removal,除去、移動
562,outcome,結果
563,altitude,高度，標高
564,closure,(工場・学校などの)閉鎖
565,compound,を悪化させる；を合成する；を混合する
566,surplus,余剰（⇔shortage 不足），過剰；黒字
567,vaccine,ワクチン
568,reference,言及、参照
569,obligation,義務、責任
570,ritual,儀式；（日常の）習慣的行為
571,mean,意地の悪い、不親切な
572,coral,サンゴ(製)の
573,novel,斬新な、目新しい
574,relevant,関係がある；適切な
575,efficient,効率的な、有能な
576,fragile,壊れやすい；虚弱な
577,impressive,印象的な、感動的な
578,offensive,不快な、攻撃的な
579,distinct,明らかに異なる；明瞭な
580,temporary,一時的な（⇔permanent）
581,arrogant,横柄な，傲慢な
582,spacious,広々とした
583,reasonable,筋の通った、分別のある、(値段などが)手ごろな
584,substantial,(数量などが)かなりの、重要な、実質的な
585,disabled,障害のある；障害者用の
586,straightforward,単純な；率直な
587,tame,飼いならされた，人に慣れた；退屈な
588,mandatory,義務的な、強制的な、命令の
589,edible,食用の，食べられる
590,outstanding,際立った；未払いの；未解決の
591,deadly,致命的な、命にかかわる
592,petty,低級の、心の狭い、取るに足らない
593,definitely,間違いなく、確かに
594,roughly,おおよそ、乱暴に
595,virtually,ほとんど、実質的に
596,apparently,(真偽のほどはともかく)聞いた[見た]ところでは、どうやら
597,unfairly,不当に、不公平に
598,briefly,少しの間に、簡潔に
599,aside,わきに、別にして、考慮に入れないで
600,legally,法的に、合法的に
601,resort,（好ましくない手段に）訴える，頼る（to）
602,submit,を提出する；（～に）従う（to）
603,originate,由来する、生じる、始まる
604,regret,を後悔する、を遺憾に思う
605,cooperate,協力する
606,revise,を修正する；を改訂する
607,restrict,を制限する
608,occupy,（空間・時間）を占める；を占領する
609,fade,薄れる；衰える
610,relieve,を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する
611,suppress,を抑える；を抑圧する
612,starve,飢える；（～を）渇望する（for）；を飢えさせる
613,scratch,を引っかく；を取り消す，削除する
614,unite,団結する、一体化する
615,grip,を握る；をとらえる
616,surrender,を放棄する，引き渡す；（～に）屈する（to）
617,twist,をねじる，ひねる；を歪曲する
618,remodel,を改装する、を改造する
619,triple,３倍になる、を３倍にする
620,drown,溺死する；を水浸しにする
621,lean,傾く；寄りかかる；をもたせかける
622,soak,を浸す；をずぶぬれにする；浸る
623,hover,(鳥・昆虫・ヘリコプターなどが)空中(の一点)に止まる
624,interrupt,を中断させる；（の）邪魔をする
625,socialize,(社会的に)交際する
626,termite,シロアリ
627,microbe,微生物；細菌
628,beverage,（水以外の）飲み物，飲料
629,paperwork,(必要)書類、書類事務
630,descendant,子孫
631,sculpture,彫刻（作品）
632,handout,(講演・授業などの)配布物、プリント
633,replacement,交換、交替、代わりの人[もの]
634,minister,大臣
635,stream,小川
636,predator,捕食動物；略奪者
637,observer,監視員、観察者
638,commission,代理手数料、歩合、委員会
639,committee,委員会
640,junk,がらくた、つまらないもの
641,departure,出発
642,description,描写、説明
643,supervisor,監督者；指導教員
644,guidance,指導、案内
645,landscape,眺め、風景、景色
646,crew,(船の)乗組員、(飛行機・列車などの)乗務員
647,drain,（液体）を流出させる；（液体が）流れ出る
648,stereotype,固定観念、ステレオタイプ
649,edition,(刊行物の)版
650,graphic,図、挿絵
651,pathway,小道、細道
652,reunion,再会（の集い）；再結合
653,cliff,崖、絶壁
654,coordinator,コーディネーター、取りまとめ役、責任者
655,depth,深さ、深み
656,liver,肝臓
657,monopoly,独占（権）
658,usage,（使）用法；語法；習慣
659,chart,図，グラフ；海図；ヒットチャート
660,expectancy,期待、見込み
661,nowhere,どの場所も～ない
662,courthouse,裁判所(の建物)
663,cove,入江、小湾
664,dock,埠頭、波止場、(艦船の)ドック
665,ministry,省
666,inflammation,炎症、点火、引火
667,cholesterol,コレステロール
668,gender,(社会的・文化的)性別、ジェンダー
669,depression,うつ病、意気消沈、不景気
670,stem,（草木の）茎，幹
671,personnel,〔集合的に〕職員，社員
672,controversy,論争
673,recognition,(人・物が)それと分かること、認めること、認識
674,applicant,応募者、志願者
675,anthropologist,人類学者
676,sewage,下水
677,acceptable,受け入れられる、容認できる
678,nuclear,原子力利用の、核エネルギーの
679,moral,道徳(上)の、倫理的な
680,marine,海の；船舶の
681,conventional,伝統的な、型にはまった
682,awful,ひどい；嫌な；ものすごい
683,consistent,着実な、安定した、首尾一貫した
684,primitive,原始的な；未開の
685,mature,成熟した；熟した
686,unfamiliar,（～に）不慣れな（with）；（～に）（よく）知られていない（to）
687,impractical,実用的ではない、非現実的な
688,unpredictable,変わりやすい、予測できない
689,misleading,誤解させる、紛らわしい
690,plentiful,豊富な、十分な
691,Mediterranean,地中海(沿岸地域)の
692,unsafe,安全でない、危険な
693,bare,露出した、裸の
694,feeble,病弱な、(体が)弱々しい
695,horrible,実にひどい、ぞっとする
696,scenic,景色の良い
697,supplementary,補足の、追加の
698,nosy,詮索好きな、おせっかいな
699,intermediate,中級の；中間の
700,universal,(あらゆる人に)共通の、全員の、普遍的な
701,capture,を捕らえる、を捕虜にする
702,arise,起こる、出現する
703,implement,を実行［実施］する
704,reproduce,を複製する；を繁殖させる；繁殖する
705,seize,をつかむ；を奪い取る；を没収する
706,dominate,を支配する、優勢である
707,complicate,を複雑にする
708,scan,を走査する；をざっと見る；を注意深く調べる
709,negotiate,交渉する；を（交渉して）取り決める
710,illustrate,を説明する、を例示する
711,encounter,に遭遇する
712,confine,を限定する；〔通例受身形で〕閉じ込められる
713,transmit,を伝える；（電波・信号など）を送る
714,administer,を管理する、を経営する、を治める、(治療)を施す
715,ease,を和らげる、緩和する
716,resume,（を）再開する；を取り戻す
717,pursue,を追跡する、を追求する
718,decay,腐敗する（≒rot）；（徐々に）衰える
719,shrink,縮む，縮小する；減少する；ひるむ
720,cherish,を大切にする；を心に抱く
721,launch,を売り出す、を開始する、(ロケットなど)を発射する
722,accommodate,を収容する；を（～に）適応させる（to）
723,withstand,に耐える
724,halt,を止める；止まる
725,transform,を大きく変える
726,transplant,を移植する；を移住させる
727,retail,小売り（⇔wholesale 卸売り）
728,abandon,を捨てる、を放棄する
729,developer,宅地造成業者、開発者
730,circulation,循環；流通；（新聞・雑誌の）発行部数
731,appliance,(特に家庭用の)器具
732,bond,きずな、債券、契約
733,circuit,周回すること、回路、巡回
734,innovation,(技術)革新、新機軸
735,infant,幼児、乳児
736,transaction,（商）取引；（人と人との）交流
737,celebrity,有名人、著名人
738,checkup,健康診断、検査
739,makeup,化粧；化粧品；構成；性質
740,respondent,(調査・アンケートなどの)回答者
741,well-being,健康、幸福
742,flaw,欠点、傷、ひび
743,strain,に負担をかける；を緊張させる；を漉す
744,rivalry,ライバル意識、競争
745,publicity,一般に知られること、評判、宣伝
746,consent,同意，承諾
747,addiction,依存
748,profession,職業；専門職；同業者仲間
749,sacrifice,犠牲；いけにえ
750,nerve,神経；〔～s〕神経過敏；（...する）度胸（to do）
751,assumption,(確証のない)仮定、想定、思い込み
752,context,文脈、背景、状況
753,era,時代
754,trait,特徴、特色
755,voucher,クーポン券、商品券
756,draft,下書き；為替手形；隙間風
757,blaze,炎、強いか輝き
758,currency,通貨、普及
759,stance,立場、対処の姿勢
760,fluid,流動体，液体
761,dispute,に異議を唱える；（を）議論する
762,counterpart,相当する物［人］
763,perception,認識、知覚
764,custody,親権、保護、管理、拘留
765,venue,会場、開催地
766,dread,をひどく恐れる
767,incentive,動機（づけ）；報奨金
768,disgust,をむかつかせる；に愛想を尽かせる
769,province,州，省；〔the ～s〕地方；分野
770,proponent,支持者
771,commercial,商業(上)の、営利的な
772,excessive,過度の、法外な
773,vulnerable,（攻撃などに）弱い，もろい；傷つきやすい
774,protective,保護する、守ろうとする
775,secure,安全な、確かな
776,obvious,明らかな
777,reluctant,気が進まない，嫌がる（⇔willing）
778,confident,確信して、自信に満ちた
779,intelligent,知能の高い、利口な
780,barren,不毛の、作物ができない
781,epidemic,流行（病）；蔓延
782,reliable,信頼できる
783,curious,好奇心の強い、詮索好きな
784,hasty,急ぎの、早まった
785,behavioral,行動の
786,bulky,かさばった、扱いにくいほど大きい
787,faulty,(機械・装置などが)欠陥のある
788,hectic,やたらと忙しい
789,knowledgeable,よく知っている、物知りの
790,tense,張り詰めた，緊張した
791,intact,損なわれていない，手つかずの
792,comprehensive,包括的な、広範囲にわたる
793,hesitant,ためらいがちな
794,scarce,乏しい；珍しい
795,defensive,防御的な
796,permanently,永遠に、いつも
797,nonetheless,それにもかかわらず，それでもなお
798,primarily,主として、初めに
799,intentionally,故意に、意図的に
800,abruptly,突然に
801,outsource,を外注する、を業務委託する
802,applaud,に拍手する、を賞賛する
803,bribe,賄賂
804,replicate,(同一実験など)を繰り返す、を複製する
805,stroll,散歩する、ぶらぶら歩く
806,swell,膨張する，腫れる；を膨らませる
807,uphold,を支持する、を確認する、を維持する
808,vomit,吐く、もどす
809,expire,期限が切れる
810,recruit,を募る；に新人を補充する
811,enhance,を高める、を増す
812,accumulate,を蓄積する，集める；積もる
813,designate,を指定する；を任命する
814,conceal,を隠す（≒hide）；を秘密にする
815,disregard,を無視する；を軽視する
816,accelerate,を加速させる，促進する；加速する
817,revive,を復活させる；復活する
818,enact,(法案)を制定する、を通過させる
819,exert,を及ぼす；（力など）を行使する
820,leak,漏れる；を漏らす
821,jail,刑務所，拘置所（≒prison）
822,reform,を改革する、を改善する
823,declare,を宣言する、を断言する
824,outline,の要点を述べる；の輪郭を描く
825,annoy,をいらいらさせる、を悩ます
826,interfere,干渉する，介入する；邪魔する
827,nest,(鳥の)巣
828,founder,創設者
829,biologist,生物学者
830,arrangement,準備、配置、取り決め
831,landfill,ごみ埋め立て地
832,trunk,(木の)幹、(象の)鼻、(自動車の)
833,principle,(個人の)主義、信条、原則
834,series,連続、一続き
835,independence,独立、自立
836,exploration,探検、調査
837,justice,正義、公正、司法、裁判
838,humanity,人類
839,involvement,関与、巻き込まれること
840,accounting,経理、会計(学)
841,discrimination,（～に対する）差別（against）；区別
842,inequality,不平等
843,master,修士
844,millennium,千年間，千年紀
845,refusal,拒否、拒絶
846,wound,（銃弾・刃物などによる）傷；痛手
847,absence,不在、欠席
848,distribution,分配、配給
849,wilderness,荒野；（庭・町などの）放置された部分
850,concentration,濃度、集中、専念
851,craft,工芸品、(手先でする)作業
852,crust,地殻、パンの耳、(動物の)甲殻
853,basement,地階、地下室
854,janitor,(アパート・ビル・学校などの)用務員、管理人
855,prejudice,偏見、先入観
856,prosperity,繁栄、繁盛
857,robbery,強盗(事件)
858,warranty,保証(書)
859,appetite,食欲；欲求
860,bullet,銃弾
861,preparation,準備、支度
862,citizenship,市民権、公民権、市民[国民]であること
863,stale,(パンなどが)堅くなった、鮮度の落ちた、陳腐な
864,disadvantaged,(経済的・社会的に)恵まれない
865,ongoing,継続している，進行中の
866,sturdy,頑丈な、たくましい、不屈の
867,unauthorized,権限のない、(公的に)認可されていない
868,verbal,口頭での、言葉の[に関する]
869,weary,疲れ果てた；（～に）うんざりした（of）
870,equivalent,相当する、同等の
871,intense,極度の、激しい
872,consecutive,連続した
873,noticeable,著しい、目立つ
874,crucial,重大な、決定的な
875,electrical,電気の、電気を扱う
876,steep,（傾斜が）急な；急激な；法外な
877,civil,(軍人・官史に対して)民間の、一般市民の
878,supreme,最高の
879,elite,えり抜きの
880,broad,(幅の)広い、広範囲な
881,industrial,産業の、工業の
882,allied,連合の、同盟を組んだ
883,external,外部の；対外的な
884,mere,ほんの、単なる
885,latter,後半の、後ろの方の、後者の
886,presidential,大統領の[による]、社長の
887,ethical,倫理(上)の、道徳の
888,realistic,現実的な、実際的な
889,harmless,害のない
890,underlying,潜在的な、根本的な
891,urgent,緊急の
892,complimentary,無料の、賞賛する
893,eager,熱望して、熱心な
894,loudly,大声で、騒々しく
895,accordingly,それ相応に、従って、そんなわけで
896,occasionally,ときどき
897,smoothly,順調に、滑らかに
898,frankly,率直に、正直に
899,notably,とりわけ
900,continuously,連続して、継続して
901,compel,（人）に強いて～させる
902,distinguish,区別する、を区別する
903,heighten,を高める、を増大させる
904,ruin,を台無しにする、を駄目にする
905,equip,に備えつける
906,export,を輸出する
907,glance,ちらりと見る
908,notify,に知らせる
909,overdo,を使い過ぎる、をやり過ぎる
910,pierce,に穴を開ける、を突き通す
911,overestimate,を過大評価する[見積もる]
912,raid,(警察が)に手入れを行う、(軍隊が)を襲撃する
913,recall,を思い出す、(商品など)を回収する
914,simplify,を簡単にする
915,wrinkle,(顔などに)しわを寄せる、(衣装など)にしわを作る
916,conspire,陰謀を企てる、共謀する
917,imitate,をまねる、を見習う
918,inhale,を吸い込む
919,overrate,過大評価される
920,sympathize,同情する
921,glide,滑らかに動く、音もなく移動する
922,kidnap,を誘拐する
923,pretend,のつもりになる、～するふりをする
924,simmer,(煮立たない程度に)こことこ煮える[≒boil gently]
925,thaw,解凍される、溶ける
926,unfold,（閉じたもの）を開く；を明らかにする；開く；明らかになる
927,detain,を勾留[留置]する、(人)を引き留める
928,puncture,(タイヤ)をパンクさせる、に穴をあける
929,strangle,(発展・活動など)を抑圧する、を窒息させる
930,hygiene,衛生（状態）；健康法
931,oppression,抑圧、虐待
932,collaboration,合作、共同、協力
933,harbor,港、避難所
934,lawn,芝生
935,pedestrian,歩行者
936,racism,人種差別(主義[政策])
937,summit,(先進国)首脳会議、サミット、(山などの)頂上
938,bug,病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥
939,dirt,汚れ、泥、ほこり
940,maternity,妊産婦の、母であること
941,stroke,脳卒中；（ボールを）打つこと；（雷などの）一撃
942,tale,(事実・伝説・架空の)話、(文学作品としての)物語
943,certainty,確実性、確信
944,imbalance,不均衡、アンバランス
945,incidence,発生(率)
946,pit,穴、くぼみ
947,texture,感触，手触り；本質；質感
948,thumb,(手の)親指
949,undergraduate,学部学生
950,wisdom,知恵、賢明さ
951,bride,花嫁、新婦
952,dictator,独裁者、専制君主
953,signature,署名；特徴
954,testament,あかし、証拠
955,attachment,添付ファイル、添付書類
956,bachelor,独身の男性、学士
957,blister,水ぶくれ
958,blockade,(港などの)封鎖、経済[通信]封鎖
959,condo,分譲マンション
960,invoice,明細請求書、納品書
961,leisure,自由な時間、余暇
962,meditation,瞑想、黙想
963,procession,(儀式などの)行列、行進
964,unrest,(社会的な)混乱、不安、(心の)動揺
965,equator,赤道
966,exhausted,疲れ果てた
967,problematic,問題のある、疑わしい
968,desirable,望ましい
969,geological,地質(学)上の
970,rash,早まった、軽率な
971,solitary,ひとりの、孤独の
972,uneven,でこぼこな、平でない
973,antique,骨董の，アンティークの；古風な
974,dense,密集した，密度の高い；（霧などが）濃い
975,economical,経済的な、安上がりな
976,fictional,架空の、フィクションの
977,gradual,徐々の，緩やかな
978,intimate,親密な；密接な
979,lengthy,長い、長時間の
980,ultimate,最終の、究極の
981,victorious,勝利を得た、勝ち誇った
982,witty,機知に富んだ
983,blurry,ぼやけた、不鮮明な
984,exceptional,例外的に優れた、まれな
985,finite,有限の、限られた
986,on-the-job,実地の、職場での
987,vacant,空いている
988,cheery,陽気な、元気な
989,cowardly,卑怯な、臆病な
990,immeasurable,計り知れない、果てしない、広大な
991,impaired,～に障害のある、弱った、損なわれた
992,impassable,(川・道などが)通行できない、(困難・障害などが)克服できない
993,inactive,不活発な、停止中の
994,inconvenient,不便な、不都合な
995,superstitious,迷信深い、迷信の
996,unpleasant,不愉快な、いやな
997,wicked,悪意のある、意地の悪い
998,ecological,環境の、生態(学)の
999,imaginary,想像上の、架空の
1000,ripe,熟した；成熟した
1001,disguise,を（～に）変装させる（as）；を偽る
1002,curb,を抑制する、を制御する
1003,restrain,を制止する；を規制する
1004,stumble,よろけながら歩く；（～に）つまずく（on/over）
1005,diminish,を減らす；減少する（≒decrease）
1006,rotate,回転する；循環する；を回転させる
1007,compress,を要約する、を短縮する、を圧縮して詰め込む
1008,decode,(暗号・符号)を解読する
1009,offset,を相殺する，埋め合わせる；をオフセット印刷にする
1010,bid,（～に）の値をつける（for/on）；（挨拶）を述べる
1011,burst,破裂する；（～を）突然始める（into）
1012,overtake,を追い抜く；に追いつく（≒catch up with）；（災難・強い感情などが）を襲う
1013,retain,を保持する
1014,litter,(場所)を散らかす
1015,prohibit,を禁止する
1016,discipline,を罰する、を訓練する
1017,yield,を産出する、屈する、(権利など)を譲る
1018,sweep,（を）掃く；を一掃する；さっと通過する
1019,dictate,を指図する；を書き取らせる；を規定する
1020,inject,（人）に注射する，を注入する；を導入する
1021,urge,に熱心に勧める
1022,mimic,をまねる
1023,roam,（を）歩き回る；放浪する
1024,assess,を査定する、を評価する
1025,boast,を誇る；（を）自慢する
1026,drag,を引きずる；ぐずぐずする
1027,repay,を返済する
1028,overthrow,(政府・体制など)を打倒する
1029,fulfill,(約束・任務など)を果たす、(条件・要求など)を満たす
1030,doom,〔通例受身形で〕運命にある
1031,affiliate,を提携させる、を合併する
1032,assault,に暴行する；を攻撃する
1033,testimony,証言、証拠
1034,errand,（人の）使い，使い走り；用件
1035,friction,不和；摩擦
1036,coalition,連立、合同
1037,influx,(人・物の)殺到、(水・空気の)流入
1038,curse,悪態，ののしりの言葉；呪い；〔通例a ～〕災い
1039,app,アプリ
1040,visibility,視界、視野、目に見えること
1041,fabric,織物，布（地）；構造
1042,collision,衝突；対立
1043,dioxide,二酸化物
1044,orbit,軌道
1045,trial,裁判、試験、試み
1046,literacy,(特定分野の)知識、技能、読み書きの能力
1047,scheme,計画（≒plan）；体系；陰謀
1048,completion,完了、完成
1049,expertise,専門的知識[技術、意見]
1050,diploma,卒業[修了]証書、(学位・資格の)証明書
1051,livelihood,生計、生活手段
1052,motive,動機
1053,recession,不況；後退
1054,surrounding,周囲の状況、環境
1055,fortune,財産、幸運、運命
1056,token,(気持ちなどの)しるし、記念品
1057,trace,跡、形跡
1058,venture,危険を冒して進む；を思い切ってする
1059,physician,内科医、医師
1060,perspective,観点
1061,physics,物理学
1062,legislation,法律；立法
1063,barn,家畜小屋、(農家の)納屋
1064,daring,大胆な、勇敢な
1065,transparent,透明な；明快な
1066,tragic,悲惨な、悲劇的な
1067,sinister,邪悪な、不吉な
1068,striking,著しい、目立つ
1069,plural,複数の、2つ[2人]以上の、複数形の
1070,vital,必要不可欠な
1071,sensitive,敏感な、傷つきやすい
1072,remarkable,注目に値する、著しい
1073,minimal,最小(限度)の
1074,bankrupt,破産宣告を受けた；破綻している
1075,authentic,本物の；信頼できる
1076,moderate,適度な；穏健な
1077,alien,異質の、外国の
1078,prompt,迅速な
1079,random,無作為の、任意の
1080,decisive,決定的な、断固たる
1081,inevitable,避けられない、必然的な
1082,acid,酸性の；酸っぱい；辛辣な
1083,climatic,気候(上)の、風土の
1084,incredible,信じられない、驚くほどの
1085,precise,正確な、厳格な
1086,invaluable,極めて貴重な[高価]な
1087,stern,厳しい；いかめしい
1088,indifferent,無関心な（≒uninterested）
1089,charitable,慈善の、慈悲深い
1090,massive,大量の、大規模な、巨大な
1091,comparable,匹敵する、同様の
1092,irrational,不合理な
1093,cynical,冷笑的な，皮肉な
1094,overly,あまりに、過度に
1095,literally,文字どおり、まさしく
1096,voluntarily,自発的に
1097,technically,厳密に(言えば)、専門[技術]的に
1098,wholly,完全に、全く
1099,approximately,おおよそ、ほぼ
1100,uniquely,比類なく、独特に
1101,bewilder,（通例受身形で）当惑する
1102,clutch,をぐっとつかむ
1103,discard,を捨てる
1104,enlist,入隊する、参加する、(支持・協力)を得る
1105,heed,(助言・警告など)に注意する
1106,liberate,を解放する
1107,overlap,（一部）重なる；（と）重複［共通］する
1108,reconstruct,を再建する、を改変する
1109,shriek,悲鳴をあげる、甲高い声[音]を出す
1110,sprain,(足首・手首など)をくじく、を捻挫する
1111,resent,に憤慨する
1112,thrive,繁栄する，うまくいく；繁茂する
1113,embrace,を抱擁する、を(喜んで)受け入れる
1114,excel,（～で）秀でている（in/at）；に勝る
1115,enroll,登録する，入会する；を登録させる
1116,retrieve,（情報）を検索する；を取り戻す；を回復する
1117,degrade,の面目を失わせる、の質[価値]を低下させる
1118,reconcile,を（～と）一致させる（with）；を和解させる
1119,contaminate,を汚染する；を堕落させる
1120,disrupt,を混乱させる；を分裂させる
1121,divert,（注意など）をそらす；を迂回させる；（資金など）を転用する
1122,grumble,不平を述べる
1123,provoke,（感情・行動など）を引き起こす；を挑発する
1124,outweigh,より価値がある、より重い
1125,crave,(を)切望する
1126,sustain,を持続させる、を支える
1127,disclose,を公表する，暴く
1128,tempt,を（...する）気にさせる（to do）；を引きつける
1129,resign,（を）辞任する；を放棄する
1130,dismiss,を解雇する、(意見など)を退ける
1131,surpass,を上回る
1132,bounce,跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される
1133,bureau,（官庁の）局；事務局；案内所
1134,dependency,依存、従属
1135,discomfort,不快、不便
1136,drawback,欠点、不利な点
1137,feast,祝宴；大ごちそう；楽しみ
1138,hydrogen,水素
1139,modernization,近代化、現代化、最新式化
1140,objective,目的、目標
1141,poll,世論調査、投票(数)、投票所
1142,ration,(食料・物資などの)割当(量)
1143,revenue,歳入（⇔expenditure 歳出）；収益
1144,scholarship,奨学金、学識
1145,upbringing,(子供の)養育、しつけ
1146,compliment,賛辞
1147,excerpt,抜粋、引用
1148,faith,信仰(心)、信用
1149,segment,部分、区分
1150,downturn,(景気などの)下降(状態)
1151,temper,気質，気性；機嫌；かんしゃく
1152,fragment,断片
1153,intersection,(進路の)交差点
1154,anarchy,無秩序、無政府状態
1155,breakup,(人間関係の)解消、別れ
1156,privilege,特権
1157,exemption,(義務・責任などの)免除
1158,monarch,君主
1159,narrative,話、物語
1160,sensation,漠然とした感じ、感覚、大騒ぎ
1161,apprentice,見習い(工)、初心者
1162,chore,雑用、家事、いやな仕事
1163,dehydration,脱水(症状)
1164,questionable,疑わしい
1165,outdated,時代[流行]遅れの、旧式の
1166,forthcoming,来るべき
1167,gross,総計の；甚だしい；粗野な
1168,overdue,支払期限を過ぎた、(予定の日時より)遅れた
1169,contemporary,現代の、現代的な、同時代の
1170,drastic,徹底的な，抜本的な；極端な
1171,conditional,～しだいの、条件付きの
1172,subjective,主観的な
1173,exotic,外来の；異国風の
1174,intensive,集中的な、徹底的な
1175,obscure,（世に）知られていない；不明瞭な
1176,tedious,退屈な
1177,exclusive,高級な、排他的な
1178,decent,まずまずの；きちんとした；上品な
1179,considerate,思いやりのある
1180,durable,長持ちする、丈夫な
1181,perpetual,永続的な；ひっきりなしの
1182,proficient,堪能な、熟達した
1183,acoustic,音響の；聴覚の；（楽器が）アコースティックの
1184,biographical,伝記の
1185,botanical,植物の、植物学(上)の
1186,brutal,残酷な、無情な
1187,commendable,賞賛されるべき、立派な
1188,desperate,絶望的な、強く望んで、必死の
1189,extravagant,浪費する、(要求などが)過度な
1190,filthy,汚い、不潔な
1191,serene,穏やかな、平静な
1192,valid,法律的に有効な、理にかなった
1193,inherent,生来の，本来的に備わっている
1194,merely,単なる、ただの、単に
1195,somehow,何とかして、とにかく
1196,subsequently,その後、続いて
1197,deliberately,故意に、慎重に
1198,gently,優しく、静かに
1199,via,～の手段によって、～経由で
1200,alongside,～と一緒に、～と並んで
1201,portray,を描く；（の役）を演じる
1202,dispatch,を派遣する；を発送する；を処理する
1203,quote,が～と述べたと伝える、を引用する
1204,amend,を改正する、を修正する
1205,betray,をうっかり表す；を裏切る
1206,wither,(植物などが)しおれる
1207,omit,を省略する
1208,fabricate,をでっち上げる、を組み立てる
1209,violate,（法律・規則など）に違反する；を侵害する
1210,allege,を主張する
1211,integrate,を統合する；融合する
1212,underestimate,（を）過小評価する；（を）軽く見る；を少なく見積もる
1213,escort,を護衛[護送]する、に付き添う
1214,facilitate,を促進する、を容易にする
1215,initiate,を新たに始める
1216,convey,を伝える、を運ぶ
1217,populate,に住む，の住民である；に人を住まわせる
1218,reinforce,を補強する、を強化する
1219,attain,を獲得する，達成する；に達する
1220,cheat,(試験で)カンニングをする、をだます
1221,deceive,をだます（≒take in）
1222,frustrate,に不満を抱かせる、を挫折させる
1223,subsidize,に補助金[助成金]を支給する
1224,alternate,代わりの；交互の
1225,dedicate,を捧げる
1226,endeavor,～しようと(懸命に)努力する、を(真剣に)試みる
1227,intrigue,に興味を持たせる；陰謀を企てる
1228,soar,急上昇する；空高く飛ぶ
1229,tease,（を）からかう；をいじめる
1230,confer,(賞・学位・栄誉・権利など)を授与する、相談する
1231,forbid,を禁じる
1232,nod,(頭)を軽く下げる、うなずく
1233,oblige,に義務づける；に恩恵を施す
1234,discontent,不満
1235,disposal,処分、売却
1236,exile,亡命（者）；（国外）追放
1237,foe,敵
1238,itinerary,旅行の日程、旅行計画
1239,persecution,迫害
1240,publication,出版(物)、発行
1241,riddle,なぞなぞ、不可解な人[もの、事実]
1242,sanitation,公衆衛生（学）；下水［衛生］設備
1243,component,構成部品[部分、要素]
1244,quota,割当量[数]、ノルマ
1245,cuisine,（独特の）料理，料理法
1246,detour,迂回(路)、回り道
1247,inmate,(刑務所などの)収容者、入院患者
1248,fatigue,(相当の)疲労
1249,uproar,大騒ぎ、騒動
1250,coincidence,偶然の一致
1251,correspondence,通信、一致
1252,ballot,投票、投票用紙、投票総数
1253,competence,能力、資格
1254,enterprise,事業、企業
1255,hazard,危険（要素）；偶然
1256,explosion,爆発、急激な増加
1257,famine,飢饉；（食糧・物資の）ひどい不足
1258,acceptance,受諾、受け取り
1259,leftover,(特に食事の)残りもの
1260,apprehension,不安、懸念
1261,wreck,残骸、難破(船)
1262,landmark,（ある場所の）目印；画期的な出来事
1263,dweller,居住者
1264,geometry,幾何学
1265,standby,(いざというとき)頼りになるもの(人)、交替要因
1266,diversity,多様性
1267,accuracy,正確さ、的確さ
1268,tap,(水道などの)蛇口
1269,brick,れんが
1270,bay,入江、湾
1271,lenient,寛大な
1272,stubborn,頑固な，強情な（≒obstinate）；手に負えない
1273,clumsy,不器用な
1274,perilous,とても危険な
1275,adverse,不都合な；逆の
1276,persistent,執拗な、固執する、持続する
1277,outrageous,法外な、途方もない、けしからぬ
1278,skeptical,（～に）懐疑的な（of/about）
1279,legitimate,合法的な；妥当な
1280,corrupt,を堕落させる；を買収する；堕落する
1281,experimental,実験の、実験[試験]的な
1282,improper,不適切な、無作法な
1283,spontaneous,自然発生的な；自発的な
1284,unconditional,無条件の、絶対的な
1285,counterfeit,偽造の、偽の
1286,dizzy,目まいがする；当惑した
1287,sustainable,持続できる、維持できる
1288,democratic,民主主義の、民主的な
1289,conservative,保守的な
1290,fundamental,基本的な、必須の
1291,ambitious,(計画などが)野心的な、(人が)大志を抱いた
1292,concrete,具体的な、明確な、コンクリート製の
1293,cruel,残酷な
1294,inferior,劣悪な、劣った
1295,ample,十分すぎるほどの；広い
1296,inaccurate,不正確な、誤りのある
1297,inadequate,不十分な、不適当な
1298,inappropriate,ふさわしくない、不適当な
1299,uncertain,はっきり分からない、(人が)確信がない
1300,vague,あいまいな、不明確な
1301,retreat,引っ込む、退く
1302,revolt,暴動[反乱]を起こす、をむかむかさせる
1303,deflect,(人の注意・非難など)をそらす、の方向を変えさせる
1304,demote,を降格する
1305,despise,を軽蔑する、をひどく嫌う
1306,grasp,を理解する、をしっかりと握る
1307,summon,を呼び出す、を召喚する、(議会など)を招集する
1308,expel,を追放する；を吐き出す
1309,redeem,(失敗・欠点など)を補う、を埋め合わせる
1310,comprise,から成る；を構成する
1311,prevail,普及している；支配的である；（～に）打ち勝つ（over）
1312,eject,を取り出す、を追い出す
1313,falsify,を偽造する
1314,obstruct,をふさぐ、を妨害する
1315,depict,を描く
1316,tremble,震える
1317,confess,（を）告白する
1318,stare,じっと見つめる
1319,ache,痛む、うずく
1320,reflect,を反映する、を反射する、熟考する
1321,assert,を主張する
1322,impose,(規則・税・罰金など)を課[科]す、を押しつける
1323,interpret,を解釈する、を通訳する
1324,devote,(努力・時間など)を捧げる、に専念する
1325,deteriorate,(状況・質など)が悪化する
1326,contemplate,（を）熟考する；を予想する
1327,delegate,(権限・責任など)を委譲[委任]する、(人)を代表として派遣する
1328,propel,を進ませる、(人)を駆り立てる
1329,recede,後退する、退く
1330,scrape,(泥・ペンキ・さびなど)をこすり取る、の表面をこする
1331,smash,を粉砕する；を強打する；粉々に壊れる；激突する
1332,scold,(特に子供)をしかる
1333,amuse,を楽しませる
1334,overhaul,(システムなど)を総点検する、を分解修理する
1335,herd,(牛・羊などの)群
1336,bait,誘惑物、(釣り針・わなにつける)餌
1337,petition,請願(書)、嘆願(書)
1338,ransom,身代金、(身代金などによる)解放
1339,fragrance,芳香
1340,insight,見識、洞察力
1341,conquest,征服、(欠点・課題などの)克服
1342,sincerity,誠実
1343,tariff,関税
1344,sanction,制裁(措置)、認可
1345,sphere,領域；球体；天体
1346,outcast,見捨てられた人、浮浪者
1347,affair,事情、事柄、問題
1348,scandal,スキャンダル、不正行為
1349,allergy,アレルギー
1350,destruction,破壊、破滅
1351,peasant,(発展途上国などの)小作人、貧農
1352,burden,負担、重荷、荷物
1353,faculty,(大学・学部の)教授陣、学部、才能、能力
1354,tactics,作戦，方策；戦術，戦法
1355,fare,(乗り物の)運賃、料金
1356,manner,方法、風習、行儀、作法
1357,correlation,相互[相関]関係
1358,weed,雑草、草
1359,command,命令、指図、(外国語などを)自由に使える能力
1360,quarter,４分の１、(都市の特定の)地区、四半期
1361,availability,(入手の)可能性、有用[有効]性
1362,caution,用心、注意、警戒、警告
1363,prevention,予防、防止、妨害
1364,reptile,爬虫類(動物)
1365,fate,運命、(最終的な)結末
1366,inclination,意向、願望、好み
1367,scorn,軽蔑、侮蔑
1368,contempt,軽蔑；恥辱
1369,domain,分野；領域；ドメイン
1370,pillar,柱、支柱
1371,tender,柔らかい、優しい
1372,awkward,ばつの悪い、気まずい、ぎこちない
1373,fierce,猛烈な；どう猛な
1374,peculiar,変な、特有の
1375,genuine,本物の
1376,vigorous,精力的な；激しい；活力のある
1377,gloomy,陰気な；薄暗い；悲観的な
1378,medieval,中世の
1379,subtle,微妙な、かすかな
1380,rigid,厳しい；硬直した
1381,coarse,粗い、粗野な
1382,humble,謙虚な、地位[身分]などが低い
1383,slack,たるんだ、(商売などが)不活発な
1384,trivial,取るに足らない
1385,mutual,相互の
1386,redundant,不要な、余分な、(表現などが)冗長な
1387,premature,早過ぎる、(判断などが)早まった
1388,attentive,注意深い
1389,integral,不可欠な、必要な
1390,memorable,忘れられない、記憶すべき
1391,persuasive,説得力のある
1392,prevalent,蔓延している、広く行き渡っている
1393,unaware,気づかないで、知らないで
1394,worthwhile,(時間・労力・金をかける)価値のある
1395,amazing,驚くべき
1396,eligible,適格の，資格のある；（結婚相手として）望ましい
1397,vicious,悪意[敵意]のある、乱暴な
1398,invisible,見えない
1399,invalid,(法的に)無効な
1400,rotten,(食べ物などが)腐った、(道徳的に)腐敗した
1401,plague,疫病；（害虫などの）異常発生
1402,sponsor,に資金を提供する、を後援する
1403,honor,を賞賛する、に与える、を尊敬する
1404,remark,～と述べる
1405,incorporate,を取り[組み]入れる
1406,resolve,(問題など)を解決する、を決意する
1407,sway,(ゆっくりと)揺れる、動揺する
1408,inherit,(遺伝で)を受け継ぐ、を相続する
1409,pile,を大量に積む、を積み重ねる、積み重なる
1410,renovate,を改修[改築]する
1411,maximize,を最大限にする
1412,uncover,(遺跡など)を発掘する、の覆いを取る、を明るみに出す
1413,mislead,に誤った考えを持たせる、を欺く
1414,opt,選ぶ
1415,outnumber,より数で勝る
1416,presume,と思う；と推定する；を前提とする
1417,refine,を洗練する；を精製する
1418,stir,をかき回す；を揺り動かす
1419,strive,懸命に努力する
1420,thrill,をわくわく[ぞくぞく]させる
1421,tighten,を固く締める、を強化する
1422,arouse,（感情など）を引き起こす；を目覚めさせる
1423,buzz,(場所が)ざわつく、どよめく
1424,converge,集まる、集中する
1425,deduct,を控除する、を減じる
1426,disconnect,(人)のインターネットへの接続を切る、の接続を断つ
1427,gossip,うわさ話をする
1428,wander,(当てもなく)歩き回る、ぶらつく
1429,suck,（を）吸う；（を）しゃぶる
1430,dye,を～色に染める、を染める
1431,trespass,(不法)侵入する、侵害する
1432,graze,(家畜などが)牧草を食べる
1433,entrust,AにBを任せる
1434,peer,同僚、仲間、同等[対等]の者
1435,molecule,分子、微粒子
1436,meantime,その間
1437,merit,価値、優秀さ、長所
1438,prospect,見込み、見通し、期待
1439,chatter,くだらないおしゃべり
1440,funeral,葬式
1441,methodology,方法論、研究方法
1442,bundle,束、包み
1443,burglar,強盗、泥棒
1444,canyon,峡谷
1445,duration,（時間の）継続，持続（時間）
1446,fountain,噴水、源泉、湧き水
1447,genius,天賦の才、天才(的な人)
1448,grassland,牧草地、草原
1449,interval,（時間の）間隔；合間；隔たり；小休止
1450,longevity,長寿；寿命；長年勤続
1451,mode,方法、様式
1452,needle,針、縫い針、編み針
1453,organizer,主催者、まとめ役、幹事
1454,rehearsal,(劇・音楽などの)リハーサル、下げいこ
1455,servant,(特に住み込みの)使用人、召使
1456,sociology,社会学
1457,spectacle,(印象的な)光景、壮観、見もの
1458,norm,標準、規範、典型
1459,certificate,証明書；免許状
1460,vice,悪習、悪
1461,knot,結び目、結び方
1462,rubber,ゴム、ゴム製品
1463,asteroid,小惑星
1464,syndrome,症候群、シンドローム
1465,detention,拘置、留置
1466,distress,苦悩、苦痛
1467,ignition,(エンジンの)点火装置、点火
1468,esteem,尊敬、尊重
1469,hospitality,親切なもてなし，歓待；受容性
1470,legacy,遺産
1471,sane,(考え方などが)健全な、分別のある、正気の
1472,doubtful,(物・事が)疑わしい、(人が)疑わしく思う
1473,favorable,好意的な、好ましい
1474,generous,気前のよい、寛大な
1475,hollow,空洞の；空虚な；うわべだけの
1476,internal,内部の、内側の、国内の
1477,interpersonal,人間[対人]関係の
1478,staple,必需食品；主要産物
1479,tolerant,寛容な、包容力のある
1480,folk,民間(起源)の、民衆の
1481,furious,激怒した；猛烈な
1482,ironic,皮肉な、反語的な
1483,pale,(人・顔色などが)青白い、血の気を失った、(色が)淡い、薄い
1484,pregnant,妊娠した
1485,rewarding,満足感が得られる、報われる
1486,sacred,神聖な、聖なる、宗教的な
1487,terrific,素晴らしい、すてきな
1488,abridged,簡約[短縮]された
1489,dull,退屈な、頭が鈍い
1490,faint,かすかな；めまいがする；弱々しい
1491,irresponsible,無責任な
1492,notorious,悪名高い（≒infamous）
1493,recurrent,(周期的に)繰り返される、(病気などが)再発する
1494,irresistible,抵抗できない、非常に魅力的な
1495,binding,拘束力のある、義務を負わせる
1496,dejected,落胆した、元気のない
1497,fictitious,架空の、偽りの
1498,gracious,親切な、丁寧な
1499,upcoming,やがて起ころう[現れよう]としている、来るべき
1500,abundant,豊富な
1501,grind,（穀物など）をひく
1502,archive,〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ
1503,devise,を考案する
1504,precede,に先行する
1505,horrify,を怖がらせる
1506,lodge,(苦情・抗議など)を申し出る、を預ける、を泊める
1507,mediate,調停する、仲裁する
1508,mingle,付き合う、仲間に入る、混ざる
1509,perspire,汗をかく
1510,concede,(しぶしぶ)～と認める
1511,hinder,を妨げる
1512,waver,(心が)揺れ動く、迷う
1513,formulate,(計画など)を(注意深く)まとめる、を明確に述べる
1514,exhale,(息・煙・言葉など)を吐き出す
1515,rebound,(ボールなどが)跳ね返る
1516,gratify,を喜ばせる、を満足させる
1517,pledge,を誓う，約束する；を与えることを約束する
1518,fasten,をしっかり留める、を固定する
1519,relay,を伝達する、を取り次ぐ、を中継で送る
1520,align,を一直線に並べる
1521,ascend,（を）上がる
1522,gaze,じっと見る
1523,adore,が大好きである、を敬愛する
1524,chill,(食べ物・飲み物など)を冷やす、冷える
1525,curve,カーブする、曲がる
1526,deflate,(タイヤ・風船などが)しぼむ、をしぼませる
1527,detach,を分離する、を取り外す
1528,enclose,を同封する；を取り囲む
1529,fetch,を（行って）持って［連れて］くる
1530,proclaim,を宣言する
1531,forge,を偽造する；（関係など）を築く；を鍛造する
1532,outburst,(火山・怒り・笑いなど)の爆発
1533,dimension,局面、寸法、規模、次元
1534,swarm,大群
1535,sequel,続編、結果
1536,artifact,人工遺物、工芸品
1537,mercy,慈悲；〔通例a ～〕幸運
1538,successor,後継者、相続人
1539,triumph,(大)勝利、成功
1540,clause,(法律・条約などの)条項、(文の)節
1541,analogy,類推；類似
1542,downfall,破滅、転落、(雨・雪などの)大降り
1543,fusion,融合(物)、(政府などの)連立
1544,fracture,骨折、割れ目、裂け目
1545,menace,困りもの、危険人物、脅威
1546,setback,(進歩・発展の)妨げ、支障
1547,empathy,共感、感情移入
1548,tumble,転倒、(株価などの)暴落
1549,diameter,直径
1550,momentum,勢い、はずみ
1551,troop,軍隊、兵隊
1552,pharmacy,薬屋、薬局
1553,nightmare,悪夢、(悪夢のような)恐ろしい経験
1554,slope,坂、斜面
1555,glacier,氷河
1556,grief,(死などに対する)深い悲しみ、悲痛
1557,misery,惨めさ、悲惨さ
1558,accent,なまり、方言
1559,ambassador,大使
1560,autopsy,検死
1561,blast,爆発、爆破、突風
1562,courtesy,礼儀正しさ；好意；優遇
1563,deed,(意図的な)行為、行い
1564,discourse,話し合い，会話；講演；論説
1565,impulse,衝動
1566,jar,(広口の)びん、つぼ
1567,sibling,兄弟姉妹(の１人)
1568,enthusiasm,熱狂、熱中
1569,treasure,宝物、貴重品
1570,horizontal,水平な
1571,indefinite,限定されない、不定の、はっきりしない
1572,vulgar,下品な、無作法な
1573,resilient,回復力のある、弾力(性)ある
1574,aquatic,(動植物が)水生の、水の
1575,insistent,強く主張する、執拗な
1576,frantic,大急ぎの、気が狂いそうな
1577,deceptive,人を惑わすような
1578,illogical,筋の通らない、不合理な
1579,elaborate,精巧な、入念な
1580,mellow,(性格が)円熟した、柔らかくて豊かな[美しい]
1581,boundless,無限の
1582,cordial,心温まる、心からの
1583,seasonal,季節(ごと)の
1584,sour,酸っぱい
1585,swift,素早い
1586,cumulative,累積する、しだいに増加する
1587,savage,残酷な、凶暴な
1588,admirable,賞賛に値する、素晴らしい
1589,informative,有益な、情報[知識]を提供する
1590,proportional,釣り合った、比例した
1591,simultaneous,同時に起こる
1592,static,変化[進歩]のない
1593,uneasy,不安な、心配な、落ち着かない
1594,unequal,(権利などが)不平等な
1595,autonomous,自治の、自主的な
1596,bold,大胆な、勇敢な
1597,pessimistic,悲観的な
1598,repetitive,繰り返しの
1599,respiratory,呼吸器に関する、呼吸の
1600,coherent,一貫した，筋の通った；結束した
1601,account for ～,(割合・分量など)を占める、～(の理由)を説明する
1602,accuse A of B,AをBの罪で告訴する、AをBの理由で非難する
1603,act on ～,(忠告・情報など)に従って行動する、～に影響を及ぼす
1604,act out ～,(物語・経験など)を身振りで実演する
1605,add up to ～,(合計が)～になる、結局～ということになる
1606,adhere to ～,(信念・規則など)を順守する、～に固執する
1607,air out ～,(部屋など)を換気する、(衣類・寝具など)を外気に当てる
1608,all but,ほとんど
1609,allow for ～,～を考慮に入れる、～を見込む
1610,answer for ～,～の責任を負う、～の罰を受ける
1611,aspire to do ～,～することを熱望[切望]する
1612,attribute A to B,AをBのせいと考える
1613,back down,撤回する、敗北[非]を認める
1614,back off,手を引く、撤回する、後退する
1615,back up ～,～を裏付ける、～を支援する、(ファイルなど)のコピーを取る
1616,back on ～,～を当てにする
1617,be committed to ～,～に献身している
1618,be destined to do ～,～する運命である
1619,(be) free of ～,(料金・税金など)がない、～免除されている
1620,be obsessed with ～,(妄想・固定観念など)に取りつかれている
1621,be subject to ～,(病気など)にかかりやすい、(影響など)を受けやすい
1622,blast off,打ち上げられる、発射される
1623,blow up,(かんかんに)怒る、爆発する
1624,bounce back,(打撃・病気などから)回復する、立ち直る
1625,branch off,(話題が)変わる、(わき道に)それる
1626,break away from ～,(伝統・習慣など)を断つ、(束縛など)から逃れる
1627,break down,決裂する、失敗する、故障する
1628,break off ～,～を中断する、～を急にやめる
1629,break out,勃発する、(伝染病などが)発生する
1630,bring about ～,～を引き起こす、～を招く
1631,bring down ～,(人・政府など)を(打ち)倒す
1632,bring off ～,～をやってのける、～を成し遂げる
1633,bring on ～,(災い・病気など)をもたらす
1634,bring out ～,(才能・性質など)を引き出す、～を発揮させる
1635,bump into ～,～にばったり出会う
1636,burn out ～,(人)を疲れ果てさせる、～を燃え尽きさせる
1637,by means of ～,～用いて、～によって
1638,call for ～,～を必要とする、～を要求する
1639,call off ～,～を中止する
1640,call on ～,～を訪ねる、(人)に頼む
1641,carry away ～,無我夢中になる、～を持ち去る
1642,carry through ～,～を成し遂げる、～を成就させる
1643,catch up on ～,(近況など)について新しい情報を知る、～の遅れを取り戻す
1644,check off ～,～にチェックマークをつける
1645,chip in ～,(金・労力などを)出し合う
1646,clean out ～,～の中をきれいにする、～を空にする
1647,clear out ～,～の中身を出してきれいに片付ける、～を空にする
1648,clear up (～),(誤解など)を解く、(問題など)を解明する、～片付ける、晴れる
1649,close in (on ～),(～を)包囲する、(～に)追ってくる
1650,come after ～,～の後をつける、～を追跡する
1651,come before ～,(問題などが)(法廷など)で審議される、(法廷など)に出頭する
1652,come down to ～,要するに～ということになる
1653,come down with ～,(軽い病気)にかかる
1654,come into ～,～の状態になる
1655,come off,結局～になる、行われる
1656,come through,要求に応える、伝えられる
1657,comply with ～,(規則・基準など)に従う
1658,contribute to ～,～の一因となる、～に寄与[貢献]する～に寄付する
1659,cope with ～,～うまく処理する、～に対処する
1660,count for ～,～の価値がある
1661,count on ～,～を当てにする
1662,cover for ～,～の代わり[代理]を務める
1663,cover up ～,～(の事実)を隠す、～を秘密にする
1664,crack up,神経が参る、気が変になる、大笑いする
1665,cross out ～,～を線を引いて消す
1666,cut back (on ～),(～を)削減[縮小]する
1667,cut down (on ～),(～を)減らす
1668,cut in (on ～),(話などに)割り込む、さえぎる
1669,deal in ～,(商品)を商う、(仕事など)に従事する
1670,deprive A of B,AからBを奪う
1671,die down,静まる、衰える
1672,die out,絶滅する
1673,dispose of ～,～を処分する、を捨てる
1674,do away with ～,～を廃止する、～を取り除く
1675,drag on,(会議などがだらだらと)長引く
1676,drag out ～,～を(必要以上に)長引かせる
1677,draw on ～,(技術・経験など)に頼る、～を利用する
1678,draw up ～,(計画)を立てる、(報告書など)を作成する
1679,dream up ～,(奇抜な考え・計画など)を思いつく、～を考え出す
1680,drive off [away] ～,～を追い払う
1681,drive up ～,(価格など)を急速に上昇させる
1682,drop back (to ～),(～に)後退する、順位が下がる
1683,drop out (of ～),(活動・集団から)身を引く、(学校を)中途退学する
1684,ease into ～,(仕事など)に徐々に慣れる
1685,eat up ～,～を使い果たす、～を食べ尽くす
1686,embark on [upon] ～,(事業など)に乗り出す、～に着手する
1687,endear A to B,AをBに慕わせる
1688,even up ～,～を等しくする、～を均等にする
1689,face off,対決する
1690,fall away,減少する、弱まる、衰える
1691,fall back on ～,～を当てにする
1692,fall for ～,(うまい話・売り込みなど)に乗せられる、～に強く引きつけられる
1693,fall off,(数・量が)減少する、(質が)低下する
1694,fall on ～,(責任・仕事などが)～に降りかかる、(記念日などが)～に当たる
1695,fall through,(計画などが)駄目になる、失敗する
1696,fall under ～,(影響・監督など)を受ける
1697,feel for ～,～に同情する、～を思いやる
1698,figure out ～,～を理解する、～を解決する
1699,fill out ～,(書類)に必要事項を記入する
1700,fire up ～,～始動させる、～に火をつける
1701,fit into ～,～に溶け込む、～に収まる
1702,fix up ～,～を修理する、～を改装する
1703,for all ～,～にもかかわらず、～を考慮しても
1704,for the time being,当分の間(は)、さしあたり
1705,force down ～,(感情など)を抑える
1706,free up ～,～を自由化する、～解放する
1707,frown on [upon] ～,～に難色を示す、～に不賛成の意を表す
1708,gear up ～,準備をする
1709,get around (～),あちこち動き回る、歩き回る、～をうまく避ける、～を逃れる
1710,get around to doing ～,～をする余裕[暇]ができる
1711,get away with ～,～を(罰などを受けずに)うまくやる
1712,get by ～,何とかやっていく、通り抜ける
1713,get down to ～,～本気で取りかかる
1714,get in on ～,～に参加する、～に加わる
1715,get into ～,(本・映画・音楽など)に夢中になる、(ある状態)になる
1716,get on with ～,(仕事など)を続ける、(人)とうまくやっていく
1717,give away ～,(秘密・答えなど)をばらす、～をただで与える、～を安く売る
1718,give in (to ～),(～に)降参する、屈する、負ける
1719,give off ～,(光・音・においなど)を発する
1720,give A over to B,AをBに預ける、AをBに引き渡す
1721,give rise to ～,～の原因となる、(悪い事態)を生じさせる
1722,go back on ～,(約束など)を破る
1723,go for ～,～を選ぶ
1724,grow into ～,(成長して)(服など)を着られるようになる
1725,grow on ～,(人)の気にいるようになる、(習慣などが)～の身につてくる
1726,grow out of ～,(成長して)(行為・習慣など)から脱する、～から生じる
1727,hand down ～,(伝統・慣習など)を(後世に)伝える、(判決など)を言い渡す
1728,hand off ～,～を任せる、～を引き渡す
1729,hand out A (to B),(Bに)Aを配る
1730,hang around (～),(～を)ぶらつく、うろつく
1731,hang on,(少し)待つ、電話を切らずにおく
1732,hang up ～,(電話を)切る
1733,head off (～),～を阻止する、～を回避する、出かける、立ち去る
1734,head out,出かける、立ち去る
1735,hold back ～,～を抑えておく
1736,hold off ～,～を引き延ばす、～を延期する
1737,hold out (～),(敵・逆境・圧力などに)もちこたえる、～を差し出す
1738,hold over ～,続映[続演]される、～を延期する
1739,in a row,連続で
1740,in favor of ～,～に賛成して、～を支持して
1741,in response to ～,～に応えて、～に応じて
1742,in terms of ～,～の観点から
1743,in the event of ～,(万一)～の場合には
1744,in vain,無駄に、効果なく、～にすぐ飛びつく
1745,jump at ～,～にすぐ飛びつく
1746,keep track of ～,(人の動向・情勢など)に注意している、～の跡をたどる
1747,keep up with ～,(時勢・流行・人・仕事・勉強など)に遅れずについていく
1748,kick around ～,(計画・提案など)をあれこれ検討する
1749,kick in,(薬などが)効き始める、機能し始める
1750,kick off A (with B),(Bで)Aを開始する
1751,kick A out (of B),(Bから)Aを追い出す[首にする]
1752,knock down ～,～を取り壊す、～を解体する、～を殴り倒す
1753,lay into ～,～を厳しく非難する、～を攻撃する
1754,lay off ～,(一時的にまたは永久に) ～を解雇する
1755,leave off (～),(～を)やめる
1756,let alone ～,まして～、～は言うまでもなく
1757,let down ～,～を失望させる、～(の期待・信頼)を裏切る
1758,let out ～,(声など)を出す、(感情)を表す、～を外に出す
1759,let up,手を緩める、(望ましくないことが)弱まる、(風雨などが)やむ
1760,level off [out],横ばいになる、安定する
1761,lift off,(飛行機などが)離陸する
1762,live up to ～,(期待など)に応える、(規範など)に従って行動する
1763,lock in ～,～を固定する、(鍵をかけて)～を閉じ込める
1764,look down on ～,～を見下す、～を軽蔑する
1765,make (both) ends meet,(収支を合わせて)収入内で何とかやりくりする
1766,make do with ～,(あり合わせのもの)で済ます
1767,make it,間に合う、成功する、(会合などに)出席できる
1768,make out (～),～を理解する、うまくやる
1769,make over ～,～を作り変える、～変身させる
1770,mark down ～,～を値下げする、～を書き留める
1771,mark out ～,(線などで)～を区画する、～を区切る
1772,miss out on ～,(機会・好機など)を逸する
1773,narrow down ～,(範囲など)を制限する、～を狭くする
1774,on a ～ basis,～の基準で、～の原則で
1775,on [in] behalf of A,Aを代表して、Aに代わって
1776,on the contrary,それどころか、まるで反対で
1777,on the spot,その場で、即座に
1778,on the verge of ～,～の間際[寸前]で
1779,over the hump,難局を脱して、峠を越して
1780,owing to ～,～のために、～の理由で
1781,pack up,(仕事などが終わって)持ち物をまとめる、荷造りする
1782,pass for ～,～で通る、～と見なされる
1783,pass off A (as B),Aを(Bだと)偽る
1784,pass A on (to B),A(もの・情報・病気・利益など)を(Bに)伝える[渡す]
1785,pass out,気絶する
1786,pay off ～,(借金など)を全部支払う
1787,phase out ～,～を段階的に廃止[排除]する
1788,pick over ～,～念入りに調べて選ぶ、～を吟味する
1789,pick through ～,～の中をくまなく探す
1790,pile up,(仕事・借金などが)どんどんたまる、山積する
1791,pin down ～,～を押さえつける、～を動けなくする
1792,play down ～,～を(実際より)重要でないように見せようとする
1793,play out (～),(物事・状況が)展開する、徐々に進展する、～を最後まで演じる
1794,play up ～,～を誇張する、～強調する
1795,point to ～,(状況・証拠などが)～を示す、(大事な点・理由など)を指摘する
1796,pull back (～),後退する、～を後退させる、思いとどまる
1797,pull in ～,(観客・客など)を引きつける、(利益・金など)を得る
1798,pull off ～,(困難なこと)をやってのける
1799,pull through ～,(病気・苦境など)を切り抜ける
1800,push for ～,～を要求する、～を得ようと努める
1801,push through ～,(議案など)を通す、～を突き進む
1802,put down ～,(金額)を手付金として払う、～を書き留める
1803,put forth ～,(力など)を発揮する、(計画・案など)を提出する
1804,put toward ～,～を提案[提出]する
1805,put in ～,(設備など)を備え付ける、(金・時間・精力など)をつぎ込む
1806,put A through (to B),Aの電話を(Bに)つなぐ
1807,read off ～,(リストなど)を読み上げる
1808,refrain from doing ～,～するのを控える、～するのをやめる
1809,regardless of ～,～に(も)かかわらず、～にかまわず
1810,roll in (～),(金など)がたくさんある、転がり込む、どっと集まる
1811,roll up ～,～をくるくると巻く、(そで・すそ)をまくり上げる
1812,round off ～,～を締めくくる、～をうまく終える
1813,round up ～,(散らばった人など)を集める、～を逮捕する
1814,rule out ～,～を排除する、～を除外する
1815,run against ～,～に不利になる
1816,run down ～,(車・運転手が)～をひく、～のことを悪く言う、～を突き止める
1817,run through ～,ざっと～を読み上げる[に目を通す]
1818,scoop up ～,～を抱き上げる、～をすくい上げる
1819,scratch out ～,～を削除する、やっと(生計)を立てる
1820,see about ～,～を検討する、～を手配する、～を何とかする
1821,see A off,(空港・駅などで)Aを見送る
1822,see through ～,～を見抜く、～を見破る、～を通して見る
1823,sell out,(期待を)裏切る、(ものが)売り切れる
1824,send for ～,(人・助けなど)を呼ぶ、～に来てもらう
1825,send out for ～,(食べ物)の出前を頼む
1826,set aside ～,(時間・金など)をとっておく、～をわきへどける
1827,set down ～,～を書き留める
1828,set in,(季節・流行・好ましくないものなどが)始まる、起こる
1829,set off (～),出発する、～を引き起こす、～を作動させる
1830,set out to do ～,～することに着手する、～し始める
1831,set up ～,(会合など)を準備する、～を設置する、(会社・組織など)を作る
1832,settle down,ゆったりとくつろぐ、落ち着く、定住する
1833,settle up (with ～),(～と)精算する、(～に)勘定を支払う
1834,shake up ～,～を刷新する、～を動揺させる、～を奮い立たせる
1835,show off (～),いいところを見せる、～を見せびらかす
1836,show up,現れる、やってくる
1837,sign up for ～,(署名して)～に参加する、(受講など)の届けを出す
1838,single out ～,～を(特に)選び出す
1839,sink in,十分に理解される、分かってもらう
1840,sit back,何もしないで[手をこまねいて]いる、くつろぐ、(いすに)深く座る
1841,sit by,(悪い事態を)黙って見ている、傍観する
1842,sit in,参加する、見学[参観]する、代理を務める
1843,skim over ～,～をざっと見る、～表面的に扱う
1844,slip by,(時・機会が)いつの間にか過ぎる
1845,smooth over ～,(話し合いをして)(問題・困難など)を処理しやすくする
1846,speak for ～,～を代表して意見を述べる、～を代弁する、～への支持を表明する
1847,split up (～),別れる、分裂する、～を分裂させる
1848,spring from ～,～から生じる、(人が)～の出である
1849,spring up,急に生まれる、急成長する
1850,stand down (as ～),(公職など)を辞任する
1851,stand for ～,～の略である、～を意味する、～を支持する
1852,stand up to ～,～に抵抗する、～に立ち向かう、～に耐える
1853,stay off ～,(健康のため)～を控える、～に近づかない
1854,step down [aside],辞任する
1855,stick around,そこらで待つ、帰らずにいる
1856,stick to [by] ～,(主義など)を堅持する、～をやり続ける
1857,stick up for ～,～をあくまでも擁護する、～を支持する
1858,stick with ～,～を最後までやり抜く、～を続けてする
1859,stir in ～,～を入れてかき混ぜる
1860,stir up ～,(騒ぎなど)を引き起こす、(想像力・記憶など)をかき立てる
1861,sum up ～,～を要約する
1862,take in ～,～を摂取する、(光景など)を観察する、～をだます、～を理解する
1863,tale on ～,(特にきつい仕事・責任)を引き受ける
1864,take over ～,～を引き継ぐ、～を買収する、～を占領する
1865,take up ～,～を趣味[職業・学問]として始める、(問題など)を取り上げる
1866,talk down to A,Aを見下した調子で話す
1867,talk A into doing ～,Aを説得して～させる
1868,talk up ～,(人・もの)を実際以上に興味深いもののように話す
1869,tear down ～,～を取り壊す、～を解体する、～を殴り倒す
1870,tell on ～,(特に子供が)～のことを告げ口する、～にこたえる
1871,the other way around,(方角・事情などが)逆に[で]
1872,throw off ～,(衣服など)をさっと脱ぐ[脱ぎ捨てる]、～を払いのける
1873,throw up (～),嘔吐する、(食べ物)を吐く
1874,tidy up ～,(部屋・家・机など)を片付ける、～を整理する
1875,tie up ～,忙しくて身動きできない、～を固く縛る
1876,tip over (～),ひっくり返る、倒れる、～をひっくり返す
1877,touch up ～,(絵・文章・化粧など)を手直しする、～を修正する
1878,track down ～,～を追跡して捕らえる、～を追い詰める
1879,trip up (A),Aをつまずかせる、つまずく、しくじる
1880,try out ～,～を試してみる、～の効果を試す
1881,tune in (to ～),(局・番組などに)テレビ[ラジオ]のチャンネルを合わせる
1882,tune up (～),(楽器)を調律する、(エンジン・機械など)を整備する、調律する
1883,turn around (～),(商売・経済など)を好転させる、～の向きを変える、好転する
1884,turn away ～,～を追い払う、(客など)の入場を断る、～を背ける
1885,turn in (～),～を提出する、寝る
1886,turn out,であることがわかる、集まる
1887,turn to ～,～に頼る、(犯罪・悪習など)に走る、～に取りかかる
1888,walk off [away] with ～,～を盗む、(賞など)をあっさり手に入れる
1889,wander off,はぐれる、(道路・場所から)外れる、(主題から)脱線する
1890,want for ～,～を欠いている
1891,wash away ～,～を洗い流す、(記憶・感情など)を洗い去る
1892,wash down ～,(食べ物など)を流し込む、～を洗い流す
1893,watch over ～,～の世話をする、～を見守る、～を監視する
1894,wear off,(薬効・印象・痛みなどが)しだいに弱まる、すり減ってなくなる
1895,wear out ～,～を疲れ果てさせる
1896,weigh on ～,～に重くのしかかる、～を圧迫する、～を苦しめる
1897,win over ～,～を説得する
1898,wipe out ～,～を消滅[絶滅]させる、～を撲滅する
1899,work out ～,(計画・対策など)を練る、(問題)を解決する、～を計算する
1900,wrap up ～,(仕事・交渉など)を滞りなく終える`,
  },
  {
    id: 'tangoou',
    name: '単語王2202',
    csv: `番号,英単語,意味
1,victory,勝利、征服
2,please,～を喜ばせる、～を満足させる；好む、欲する
3,party,党、政党；一行、仲間；当事者、関係者、共犯者；相手方；パーティー
4,overcome,～に打ち勝つ；～を克服する; (be overcome）うちのめされる
5,comprehend,～を理解する；～を包含する
6,able,できる (be able to V=can V)；有能な、能力のある
7,academic,学問の、学究的な；学園の、大学（教育）の
8,favor,好意、親切な行為；支持；～に賛成する；～をえこひいきする
9,bend,～を曲げる；曲がる
10,fluent,流暢な、緩やかな
11,improve,～を改良する、～を改善する；よくなる
12,advance,～を進める；～を昇進させる；前進、進歩；昇進
13,marvelous,驚くべき、不思議な；素晴らしい
14,grateful,感謝している
15,appreciate,～を正しく理解する；～を正しく評価する；～を鑑賞する；～を感謝する
16,content,（～に）満足して；満足している；（スピーチ、論文などの）内容、中身
17,congratulate,～を祝う；～におめでとうと言う；～にお祝いを言う
18,prosperity,繁栄、幸運
19,persist,固執する；主張し続ける；(辛抱強く)～し続ける；（慣習等が）存続する
20,flourish,繁栄する、生い茂る；活躍する
21,glorious,栄光ある、すばらしい、輝かしい、名誉な
22,thrive,栄える；うまくやっている；成長する
23,inborn,生まれつきの、生来の
24,inherent,本来備わっている、（～に）固有の
25,inherit,～を受け継ぐ、～を相続する
26,sermon,（教会での）説教；小言
27,bliss,至福
28,sacred,神聖な
29,ritual,（伝統的・宗教的な）儀式；日常の習慣的行為
30,advocate,～を主張する、唱える、支持する；支持者、主張・提唱者
31,knight,騎士
32,playwright,脚本家、劇作家
33,region,地域、地方；分野、領域；（身体の）部分
34,population,人口；住民；集団
35,custom,慣習；習慣；（商店などへの）愛顧；（～s）関税、税関
36,popular,人気のある；大衆的な、一般の、国民の
37,invite,～を招待する、～を誘う；～に（～することを）勧める
38,obtain,～を得る
39,greet,～にあいさつをする、～を歓迎する
40,violate,～に違反する、～を侵害する、～に暴行する
41,violent,激しい、乱暴な、暴力的な、猛烈な
42,unemployment,失業（状態）；失業率
43,fire,（労働者）を首にする；（銃など）を発射する
44,employ,～を雇う、～を用いる
45,demonstrate,～を（実例で）説明する、～を実演する、～を証明する
46,merchant,貿易商、商人
47,military,軍（隊）の；軍人の
48,weapon,武器、兵器
49,status,地位、身分；状況；高い社会的地位
50,purchase,～を購入する
51,garbage,ゴミ；くだらないもの
52,luxury,豪華なもの；贅沢（品）
53,domestic,家庭の、家庭的な；国内の；飼い慣らされた
54,realm,領域、分野；王国
55,democrat,民主主義者；民主党議員
56,salute,会釈する；敬礼する
57,dismiss,～を解雇する；～を捨てる；～を解散する；～を退ける
58,hierarchy,階級制度、ヒエラルキー; 支配層
59,republic,共和国；団体、社会
60,grocery,食料雑貨店、（～ies）食料雑貨（品）
61,peasant,小作農；農民
62,autocrat,独裁者、専制君主
63,monarch,君主、皇帝
64,regime,政権；（社会）制度、体制
65,absorb,～を吸収する；～の心を奪う；～を夢中にさせる
66,deal,扱う
67,gather,～を集める；～だとわかる；（～である）と推測する、（速度など）を増す
68,gaze,じっと見つめる、見つめる
69,glance,ちらりと見る、ざっと見る
70,glimpse,ちらりと見る、（～が）ちらりと見える
71,observe,（法律など）を守る；（祝祭日など）を祝う；～を観察する;～と言う
72,remind,（人）に思い出させる；～に（...を）気づかせる
73,remember,～を思い出す、～を覚えている；～のことをよろしくと伝える
74,include,～を含む、～を同封する
75,profit,利益
76,benefit,恩恵；利益
77,stare,じっと見つめる
78,recollect,～を思い出す
79,recall,～を思い出す；～を回収する
80,defend,～を守る、～を弁護する
81,offend,～を怒らせる、～を不快にさせる
82,miss,～に間に合わない；～しそこなう；～がないのを寂しく思う；(狙い)をはずす
83,presume,～を推定する；（～である）と思う
84,protest,～に抗議する
85,irritate,～をいらいらさせる
86,banish,～を追放する
87,vanish,（突然、または完全に）消える；（完全に）消滅する；薄れる
88,assault,攻撃、暴行
89,surrender,降伏する；（感情などに）身を任せる
90,dispute,（～について）論争する、議論する
91,repent,～を後悔する、～を残念に思う
92,reconcile,～を和解させる、～を調和させる；（運命・損失などに）甘んじる
93,agitate,～を動揺（興奮）させる、～を扇動する；～をかくはんする
94,manipulate,～を巧みに扱う、～をうまく処理する；(人、世論等）を操作する
95,persecute,～を迫害する；～を悩ます
96,provoke,～を怒らせる；(感情など）を起こさせる；～を駆り立てる
97,environment,（自然）環境、（周囲の）環境
98,atmosphere,雰囲気；大気；空気
99,hell,地獄
100,heaven,天国；（H～で）神
101,major,主要な；大多数の；重要な；より大きな
102,minor,小さな；重要でない、主要でない、下位の；たいしたことがない
103,harbor,港、湾；避難所、隠れ場所
104,subway,地下鉄（アメリカ用法）；地下道（イギリス用法）
105,tremendous,巨大な、莫大な；すさまじい、ものすごい
106,vast,広大な；莫大な
107,previous,以前の；（時間・順序的に）前の～、前回の～
108,eminent,著名な、すぐれた、卓越した
109,outstanding,目立った；傑出した；未解決の
110,missing,行方不明の；欠落した；欠けている
111,generous,寛大な、気前の良い；たくさんの
112,scarce,乏しい、不十分な、少ない、不足した
113,affluent,豊かな、裕福な、おびただしい
114,faint,かすかな、弱々しい、ぼんやりした、気を失いそうな
115,suburb,郊外、住宅地；(～s) 周辺、付近
116,astronomy,天文学
117,superficial,表面の、うわべだけの
118,shallow,浅い；浅はかな
119,conspicuous,目立つ；人目を引く
120,eternal,永遠の、永久の
121,transient,一時的な、つかの間の；短期滞在の
122,profound,（意味などが）深い、深遠な；難解な
123,legitimate,正当な；合法的な
124,invalid,無効の、根拠の薄い；病弱な
125,minute,非常に小さい、ささいな、詳細な
126,reckless,向こう見ずな；気にかけない
127,superfluous,過分の；無用の
128,prudent,用心深い；分別のある
129,arbitrary,任意の；独断的な
130,deprive,～から（～を）奪う、～から剥奪する
131,rob,～から（...を）奪う
132,own,～を持っている
133,owe,～に借りがある；～に負うている
134,perform,～を演奏・上演する；（仕事など）を行う、～を遂行する
135,decline,～を断る
136,increase,増加する；上昇する
137,fix,～を修理する；（食事など）を用意する；～を固定する；～を決める
138,wind,曲がりくねる
139,decide,～を決意する、（論争、問題など）に決着をつける、～を決める
140,determine,～を決意する、～を決心する、～を（はっきりと）決める
141,abolish,（法律、制度など）を廃止する
142,extend,～を延長する、～を拡大する；～を示す、～を施す
143,bury,～を埋める；～を埋葬する
144,dig,（～を）掘る、～を掘り出す
145,encounter,～に偶然出くわす；～に直面する
146,declare,～を宣言する、～と言明する、～と断言する
147,negotiate,交渉する、話し合う
148,grasp,～をつかむ；～を理解する
149,measure,～を測る、～を見積もる、～を示す；寸法：測定；（～s）手段、対策
150,discard,～を捨てる
151,abandon,～を放棄する；～をあきらめる；～を捨てる；～を見捨てる
152,enhance,（価値など）を高める
153,diminish,～を減少させる、～を小さくする
154,prolong,（時間・期間など）を延長する
155,overhear,～をふと耳にする
156,overlook,～を見落とす；～を大目に見る；～を見下ろす
157,pursue,～を追跡する；～を追求する；（仕事など）に従事する
158,warrant,～を保証する；（事）からすると～は当然のことである
159,compensate,～に（～を）補償する；～に埋め合わせをする；（～に）償う
160,paralyze,～を麻痺させる
161,groan,（絶望などで）うめく
162,witch,魔女
163,experience,経験、体験
164,sweat,汗；骨折りの仕事
165,summary,要約、大意
166,talent,才能、素質；才能のある人
167,storm,嵐、荒天
168,principle,原理、原則；本質、根元；（～s）基礎
169,principal,主要な、第一位の
170,purpose,目的；意図
171,psychology,心理学；心理（状態）；心理作戦
172,museum,博物館；美術館
173,notion,概念、考え、意見；気まぐれな考え
174,vary,変わる、変化する、異なる
175,doctrine,（宗教上の）教義；（政策上の）主義
176,district,地区、地方、地域
177,court,裁判所、宮廷、庭、（テニスなどの）コート
178,burden,重荷；荷物；負担；苦労
179,tribe,部族、種族
180,tragedy,悲劇、悲劇的な出来事
181,tension,緊張、不安、緊迫状態；張りの度合い
182,experiment,実験、試験
183,hostage,人質
184,friction,摩擦；あつれき、不和
185,fraction,断片；一部；分散
186,aristocracy,貴族政治；（the～) 貴族階級
187,agony,苦悩、苦しみ
188,agitator,扇動家
189,foe,敵
190,outbreak,（悪いことの）突発、発生；暴動、反乱
191,perseverance,忍耐、根気強さ
192,kidnap,～を誘拐する
193,tyranny,暴政、圧政；過酷
194,crisis,危機
195,compare,～を比較する；～をたとえる
196,enemy,敵
197,degree,学位；（温度・角度などの）度；程度、段階
198,junior,（～より）下級［年下・年少］の
199,senior,年上の；（役職、地位などが）上の
200,research,研究、調査
201,reason,理由、根拠；理性、思考力；道理
202,concern,関心事；関係；心配；懸念；（関係のある［心配すべき］）事柄
203,average,平均
204,absolute,完全な；全くの；絶対的な、絶対の
205,depart,出発する；はずれる
206,divorce,～と離婚する；～を（...から）分離する
207,vacant,（部屋・座席などが）空いている；からの；うつろな
208,endanger,～を危険にさらす
209,perish,死ぬ；消滅する；悪くなる
210,instinct,本能、天性
211,impulse,衝動；衝撃
212,compete,競争する；匹敵する
213,competent,能力のある、有能な
214,intimate,親密な、とても私的な、内心の
215,jealous,嫉妬深い；妬んで
216,terminate,～を終わらせる
217,shatter,粉々になる
218,peril,危険
219,intricate,入り組んだ、複雑な、はっきりしない
220,crush,～を押しつぶす
221,crash,衝突、墜落；すさまじい音；株価などの暴落
222,intervene,干渉する、仲裁する；（２つの時期などの間に）介在する
223,split,～を割る、～を裂く；～を分配する
224,infectious,伝染性の
225,devastating,壊滅的な被害をもたらす、壊滅的な
226,intuition,直観
227,harvest,収穫（物）、収穫量（高）
228,heir,相続人
229,numerous,多数の、多くの
230,fortune,運；幸運；繁栄；財産、富
231,gain,～を得る、～を増やす
232,resource,（～ｓ）資源、財源、貯蔵、手段；臨機応変の才、機転
233,search,～を捜す；～を所持品検査する
234,lesson,教訓；授業；（教科書の）課
235,fate,運命
236,discipline,訓練、修行、しつけ、規律；学科、学問領域
237,temple,寺院、神殿
238,learned,学問のある；博学な
239,genius,天才、非凡な才能
240,insight,洞察（力）
241,generate,～を生み出す；～を発生させる
242,fund,資金、基金
243,millionaire,百万長者、大富豪
244,multiply,～をどんどん増やす；～に（数）を掛ける
245,lessen,～を少なくする
246,endeavor,努力、試み
247,destiny,運命、宿命
248,religion,宗教、信仰；信条、主義
249,coherent,一貫した；筋の通った
250,cite,～を引用する
251,quote,～を引用する
252,thesis,主題、論題；命題；（学位）論文
253,verify,～が正しいことを証明する；～を確かめる
254,withhold,～を保留する；（感情など）をおさえる
255,hypothesis,仮説、前提
256,analogy,類推；類似
257,premier,首相
258,embassy,大使館
259,ambassador,大使
260,encourage,～を勇気づける、～を励ます、～を促進する
261,disappoint,～を失望させる、～をがっかりさせる
262,prefer,～を好む；～が好きだ
263,hate,～を憎む、～を嫌う、～が大嫌い
264,hatred,憎しみ、嫌悪
265,praise,～をほめる、～を賞賛する
266,demand,～を要求する；～を尋ねる
267,supply,～を供給する、～に与える；～を補充する
268,income,収入、所得
269,impose,（義務など）を課す、（意見など）を押しつける
270,tax,税金、重い負担
271,naked,裸の；むきだしの；ありのままの
272,muscle,筋肉；筋力、腕力、体力
273,obstacle,障害（物）、支障
274,interfere,干渉する、妨げる、邪魔［妨害］をする
275,efficient,効率的な、有能な、効率的に仕事をこなす
276,effect,影響、効果；結果；（結果を）もたらす
277,reputation,評判、名声、信望
278,widespread,広範囲に及ぶ
279,sole,唯一の；単独の
280,soul,魂、精神；人；情熱；本質的なもの
281,exclaim,叫ぶ
282,minister,大臣；牧師、聖職者
283,pray,祈る；～に懇願する
284,retreat,退却；休養の場所；退却する；引退する
285,sequence,連続（するもの）; 結果
286,meditate,深く考える；熟慮する；瞑想する
287,flatter,～にお世辞を言う、～にへつらう；～をうれしがらせる、～をおだてる
288,compliment,ほめ言葉；賛辞
289,supplement,補足、付録
290,traitor,反逆者、裏切り者
291,sneer,冷笑する
292,fanatical,狂信的な、熱狂的な
293,lose,～を失う；（試合など）に負ける；（体重など）を減らす
294,progress,前進、発展；経過
295,object,物、物体；対象；目的、目標；目的語
296,source,源；出所、原因
297,liquid,液体；流動体
298,spring,泉；春；バネ
299,perspective,観点、展望；遠近法
300,proceed,進む、前進する；続ける；向かう；手続きする、処分する
301,series,連続、続き
302,origin,起源、由来、発端；生まれ、血統
303,leave,～を置き忘れる；～を(...の状態)にしておく；～を任せる；～を置き去る；～を残す；～を出発する；出発する、退学する；休暇；許可
304,phase,（発達、変化の）段階、時期；（問題などの）面、側面；局面
305,melt,溶ける、やわらぐ、いなくなる、なくなる
306,extinct,（動物のある種族などが）絶滅した、消えた
307,descend,下る；伝わる、遺伝する
308,stretch,～を伸ばす；（手など）を差しのばす；～を誇張・曲解する
309,sink,沈む；衰える
310,shrink,縮む、減少する；しりごみする
311,shift,～を変える、～を移す
312,reform,～を改革する、～を刷新する
313,refine,～を精製する；（技術など）を磨く、～を洗練されたものにする
314,prevail,普及している；勝る、支配する；うまくいく
315,substance,物質、薬物；本質、中身；要旨、骨子
316,stuff,材料；（漠然と）物、こと；要素
317,symptom,徴候、兆し；症状
318,surplus,余剰、過剰；黒字、利益
319,surpass,～をしのぐ；～を越える
320,recede,後退する、手を引く
321,launch,（船）を進水させる；～を打ち上げる；～を開始する
322,ascribe,～を（...の）せいにする；～を（...の）作品とする
323,gauge,計器；標準寸法、規格
324,incentive,刺激、動機；報償（金）
325,rot,腐敗する
326,do,～に～をもたらす、役に立つ；～をする
327,announce,～を公表する；～と知らせる
328,operation,運転、操作；実施；作業、活動、生産過程；手術；軍事行動
329,behave,振る舞う；行儀よくする
330,attempt,～を試みる
331,guess,～と推測する、～を推測する、～を言い当てる
332,raise,（料金・程度など）を高くする、（体の一部）を上げる；～を育てる
333,raw,生の、加工していない；未熟な
334,want,（必要なものの）欠乏；貧困；必要
335,reduce,～を減少させる；～を弱める；～を変える
336,short,短い、不足して；背が低い；簡潔な
337,quit,～をやめる
338,swift,迅速な；即座の
339,cease,やむ、とまる
340,strike,～を打つ；（考えなどが人の心）に浮かぶ；（事が人）に印象を与える
341,chase,～を追跡する
342,arouse,～を刺激する；～を目覚めさせる；～をかきたてる
343,utilize,～を利用する；～を役立たせる
344,conduct,（道徳上の）行い；指導；行為；管理
345,pause,休止；句切り；ちゅうちょ
346,ascend,登る
347,nod,うなずく、会釈する；（うなずいて）同意を表す；いねむりする
348,accumulate,～を蓄積する、ためる
349,heap,（雑然と積まれた）山、かたまり
350,rust,さび
351,soar,舞い上がる；急上昇する
352,cultivate,～を耕作する；～を栽培［養殖］する；（才能など）をみがく；～を開墾する；（親交など）を築く；（精神・才能など）を養う
353,swell,ふくらむ、腫れる；（数量が）増加する
354,degrade,～の品位を下げる、～を降格する
355,soothe,～をなだめる；（痛みなど）を和らげる
356,accelerate,～を加速する；～を促進する
357,deteriorate,悪化する
358,nurture,～を養育する；～を育てる；～を教育する
359,renewable,更新［回復、再開］できる
360,handle,～を扱う；～を処理する；～を論じる；～に手を触れる
361,derive,～を引き出す
362,active,積極的な、能動的な；活動している、有効な
363,reach,～に着く、～に届く；～と連絡を取る
364,still,じっとしている、静かな
365,force,～に（～することを）強制する；～を強いる
366,run,競走に出る、立候補する；流れる；（～に）なる；走る；動く、作動する
367,enforce,（法律など）を施行する、～を強制する
368,bear,～を生む；～に耐える；～を持っている；～を身につける；～を運ぶ；～を支える
369,turn,回る；曲がる；向かう；（～に）なる；振り返る；変質する
370,action,行動、おこない、アクション
371,wipe,～をふく、～をぬぐう
372,withdraw,～を引っ込める、～を撤回する；（現金など）を引き出す
373,dare,あえて（～）する、～に立ち向かう、思い切って～する
374,extract,～を抜き出す、～を抜粋する
375,skip,はね回る；スキップする；拾い読みする
376,insert,挿入物、差込ページ、折り込み広告
377,deed,行為、行い
378,rear,後部、後ろ
379,interval,（時間の）間隔、周期；休止期間；（空間の）隔たり
380,lower,～を低くする；～をおろす
381,pose,ポーズをとる；ふりをする
382,creep,はう；忍び寄る
383,wither,（植物などが）しおれる；弱まる、衰える
384,leap,跳ぶ；(心が）おどる；（考えが）ひらめく
385,deficient,欠如した、不十分な、不足している
386,reinforce,～を補強する、～を強化する
387,exert,～を行使する［使う］、～を働かせる
388,scratch,～をひっかく；～を（...から）はがし取る；～を線を引いて消す
389,disguise,～を変装させる；～を隠す
390,cast,～を投げる；～に役を割りふる；～を投げかける
391,withstand,～によく耐える；～に持ちこたえる
392,undo,～をほどく ；～を元通りにする、～を取り消す
393,happen,起こる
394,aid,助け；補助器具
395,unite,～を結合する；～を団結させる、～をまとめる
396,assist,～を助ける、～を手伝う
397,arrange,～の手はずを整える；～をきちんとならべる；～を取り決める
398,arise,生じる、起こる
399,approach,～に近づく、～に接近する
400,polish,～を磨く；～を洗練する
401,occur,起こる；（考えなどが心に）浮かぶ
402,exercise,運動、練習、訓練；行使；（～s）式、儀式
403,beat,～を打つ；～を打ち負かす
404,bow,お辞儀をする
405,omit,～を除外する、～を省略する；～を（うっかり）忘れる
406,surface,表面、外観；水面；うわべ
407,site,場所、用地；遺跡
408,detach,～を切り離す、～を取り外す
409,conceal,～を隠す；～を秘密にする
410,inhabit,～に住む、～に生息している
411,possess,～を持っている；（魔物・考えなどが）～にとりつく
412,portion,一部；分け前；一人前
413,upright,まっすぐな、直立した；正しい
414,track,～の（足）跡を追う
415,trace,跡、形跡；ほんのわずかの、微量の；線、見取り図
416,sweep,～を掃く；～を押し流す；～をさっと通過する
417,commit,（罪など）を犯す；～を委託する；～を（～に）ゆだねる
418,overtake,～に追いつく、～と同じになる；～を上回る；～を不意に襲う
419,convert,～を変える；～を改宗させる
420,barren,（土地が）不毛の；内容のない；不妊の
421,rotate,回転する
422,haunt,（考えなどが）～につきまとう；（幽霊が）～に出没する；へしばしば行く
423,glue,～を（糊や接着剤で）接着する
424,bottom,底；下部；ふもと
425,part,部分、部品；役目、せりふ；分け前、分担；側、味方
426,occupy,～を占める、～を占拠する、～に（賃借で）住む
427,hide,～を隠す；～を秘密にする
428,place,～を置く；～を配置する
429,exist,存在する、ある
430,face,～に直面する、～に面する
431,focus,焦点、中心［対象］
432,store,～を蓄える
433,tie,ネクタイ(=necktie)；結び目；同点、引き分け；(～ｓ）つながり、関係
434,select,～を選び出す
435,seek,～を捜し求める；(～しようと）努める；～を求める
436,make,（～の）～になる；～を作る；～を（～の）状態にする；～に（～）させる
437,external,外部の
438,replace,～に取って代わる；～を取り替える；～を元の場所に戻す
439,mount,～を（～に）載せる［はめ込む］；（馬・自転車など）にまたがる［乗る］
440,exclude,～を排除［除外］する
441,lean,もたれる；よりかかる；傾く；頼る
442,row,（人や物の）列、並び
443,contrary,反対の；（～に）反する
444,consent,同意する
445,loyal,忠実な、誠実な、誠意のある
446,mutual,相互の；共通の
447,dominate,～を支配する
448,interact,相互に影響する、相互に意思を伝える、相互にやりとりする
449,solitary,孤独な；ひとりだけの；唯一の
450,counterpart,対応するもの；対の片方
451,cope,うまく処理する；うまく対処する
452,adhere,くっつく、粘着する；（意見、主義などに）固執する、背を向けない
453,static,静的な、元気のない
454,parallel,平行の；相当する、同様な；類似の
455,bilateral,相互の；二者［二国］間の
456,ally,同盟国；連合国
457,base,～の基礎［根拠］を置く
458,hold,～を入れている；～を開催する；～を抱く、持続する；～をとっておく
459,isolate,～を孤立させる、～を分離する、～を隔離する
460,divide,～を分割する、～を分離する、～を分ける、～を分類する
461,move,～を動かす；～を感動させる
462,point,要点；（位置、時間上の）点、瞬間；目的
463,ground,根拠、理由；土地、土壌、運動場、地面、地表
464,escape,逃げる
465,flight,（飛行機の）便、飛ぶこと、飛行；逃走、脱出
466,quarter,４分の１；15分；25セント；四半期；（４学期制の）学期；方角、場所
467,neighbor,近所の人、隣人、隣国（の人）；仲間
468,position,位置、場所；立場、形勢；地位、身分；姿勢；勤め口、職
469,besides,その上；さらに
470,remain,～のままである、～のままでいる；残る、とどまる
471,back,背中；後部
472,follow,～について行く；（忠告など）に従う、～を理解する
473,stick,～をくっつける；～を突き刺す
474,separate,～を引き離す；～に分ける
475,join,～に加わる；～をつなぐ；～に参加する
476,surround,～を取り囲む、～を取り巻く
477,enter,（場所）に入る、～を記入する；（活動など）に加わる
478,scatter,～をまき散らす；～を追い散らす
479,close,接近した；親密な；綿密な= careful
480,situation,位置；立場、状態；きわどい場面
481,spread,～を広げる；～を薄く塗る
482,lead,～を（～に）導く；（生活）を送る;～の先を行く；～を指揮する
483,direction,方向、指導
484,float,浮かぶ
485,narrow,（幅の）狭い；限られた；かろうじての
486,associate,～を連想する
487,react,反応する、作用する；反抗する
488,influence,影響、影響力
489,quarrel,口論；反目、不和
490,cover,～を含む；（ある距離）を行く；～を覆う；～を隠す；～（範囲）に及ぶ；～を扱う
491,resemble,～に似ている
492,affair,出来事；問題；仕事；（～s）事情
493,basis,基礎
494,support,～を支える；～を支持する;～を扶養する；～を裏付ける
495,room,（不可算扱い）空間、場所、可能性、余地、余裕；（可算扱い）部屋；（the～；集合的に）部屋にいる人々
496,delight,喜び、楽しみ
497,desire,要求、願望
498,satisfy,～を満足させる；（義務)を果たす；（基準など）に合致する；～にこたえる
499,fun,楽しいこと、愉快なこと［気分］、戯れ
500,indifferent,無関心な；どうでもよい；公平な
501,intend,～を意図する、～するつもりである
502,long,熱望する；思い焦がれる
503,mean,～を意味する；～を（～の）つもりで言う；～にとって重要性を持つ
504,mind,～を気にする；～を嫌がる；～の世話をする
505,familiar,よく知られている、なじみのある；精通している；ありふれた；親しい
506,shame,恥、恥ずかしさ；残念なこと
507,belong,所属する；（あるべきところに）ある
508,direct,～に道を教える、～を向ける、～に指図（指示）する
509,despise,～を軽蔑する、～をひどくきらう
510,boast,自慢する
511,stand,～を我慢する；～を立てる
512,complain,不平を言う
513,amaze,～をびっくりさせる、～を驚かす
514,ambitious,大望を抱いた；熱望している；野心的な
515,terrible,猛烈な、ひどい；恐ろしい；ひどく悪い
516,affect,～に影響を与える；～のふりをする；～を愛用する、～を好んで身につける；[通常受け身] ～の心を動かす
517,communicate,（意見・情報など）を伝える
518,cross,～を線を引いて消す；～を横切る；～と交差する
519,depend,頼る、依存する；左右される、（～によって）決まる
520,control,制御、抑制；支配、管理
521,companion,仲間；友達
522,avoid,～を避ける
523,attend,～に出席する、～に通う；～を世話する
524,argue,議論する；口論する、言い争う
525,appointment,任命；約束；職、任務
526,acquaintance,知人、知り合い；面識；知識；交際
527,accustomed,慣れる
528,accompany,～と一緒に行く；～に付随して生じる
529,free,無料の；自由な、ひまな；制約のない
530,serve,（目的・必要）にかなう；～に仕える；～に供給する；（食事など）を出す
531,treat,～を扱う；～を治療する；～におごる；～を（...と）みなす
532,submit,服従する
533,rely,（～に）頼る、（～を）あてにする
534,regard,～を（...と）みなす；～を評価する
535,disregard,～を無視する
536,meet,～を満たす；～にかなう；～と交差する；～と会う
537,introduce,～を紹介する；～を導入する
538,independent,独立した、関係がない、自立した
539,impact,衝撃、衝突；影響（力）
540,consensus,（意見の）一致；全体の意見の一致
541,cooperate,協力［協同］する
542,fascinate,～を魅惑する、～をうっとりさせる
543,involve,～を巻き込む、～を没頭させる、～が当然要求される、～を複雑にする、～を含む、～を意味する
544,cling,執着する；くっつく；しがみつく
545,remote,遠い；へんぴな；（時間が）遠く隔たった；かすかな
546,pierce,～を貫く、～を刺す；～の身にしみる、～を感動させる
547,equip,～に備え付ける、～に装備する；～に身につけさせる
548,enclose,～を囲う；～を同封する
549,vertical,垂直の；縦の
550,retain,～を保持する、～を維持する
551,debate,～を討論する、～を熟慮する
552,scream,金切り声を出す、叫ぶ、悲鳴をあげる
553,counsel,～に忠告する、（人）に～（するよう）勧める
554,sigh,ため息
555,review,再考；復習；論評、評判；報告、説明；回顧
556,entertain,～を楽しませる、～をもてなす；（申し出など）を考慮する、（疑念、考えなど）を心に抱く
557,whisper,～と小声で言う；～をこっそり言いふらす
558,survey,～を概観する、～を調査する、～を見渡す
559,narrate,～を（順序立てて）物語る、～を述べる
560,reply,返事をする；応じる
561,convey,～を運ぶ；（思想など）を伝える
562,inquire,～を尋ねる
563,interpret,～を解釈する、～を通訳する
564,consult,相談する；（対等関係で）協議する
565,excuse,～を許す；～の言い訳をする
566,comment,論評；解説；うわさ話
567,chat,おしゃべり
568,persuade,～を説得する；～を説得して...をさせる；～を...だと確信させる
569,bound,縛られた；きっと；確かに
570,neutral,中立の、中性の；はっきりしない、くすんだ
571,conform,従う、適合する、（基準を）満たす
572,combine,～を結合させる
573,discourage,～を落胆させる、～をがっかりさせる；～に思いとどまらせる
574,conceive,～を心に抱く；（～である）と考える
575,condemn,～を非難する；～に有罪判決を下す
576,reluctant,気が進まない；しぶしぶの
577,disgust,嫌悪
578,frustration,挫折；フラストレーション、欲求不満
579,sensation,大評判、物議；感覚
580,emotion,感情、感動
581,apathy,無感動、無関心；冷淡
582,antipathy,反感；嫌悪（感）
583,sympathy,同情、思いやり；共感、支援
584,participate,参加する；関わる；加わる
585,obey,～に従う、（規則など）を守る
586,relative,相対的な；比較上の；～に関連した、適切な；相互の
587,relate,～を関連づける；～を物語る
588,patriotic,愛国的な
589,share,～を共有する；～を分ける；～を（人に）話す
590,spare,～をなしですませる；～を取っておく；～を節約する；～をさく
591,tune,曲；調和、一致；気分、機嫌
592,alert,注意/警戒を怠らない；機敏な、敏捷（びんしょう）な
593,wonder,～かなと思う；～ということに驚く
594,endure,～に耐える、～を我慢する
595,relief,（苦痛などからの）解放；（苦痛などの後の）安堵；救援（物資）
596,passion,情熱、熱中、激情、愛情
597,impress,～に強い印象を与える；～を感動させる
598,tiresome,退屈な；骨の折れる、厄介な
599,tease,～をからかう、～をいじめる；～をじらす
600,tremble,震える；心配する
601,uneasy,不安な、落ち着かない
602,startle,～をびっくりさせる、～を飛び上がらせる
603,desperate,自暴自棄の、絶望的な；欲しくてたまらない、（～したくて）たまらない
604,sentiment,感傷；心情；意見
605,attitude,姿勢；態度；意見、考え方
606,confidence,信頼；自信、確信；秘密
607,smart,頭が良い；身なりがきちんとした
608,talkative,おしゃべりな、話好きな
609,vigorous,元気な；力強い、激しい
610,enthusiastic,熱狂的な、熱心な
611,liberal,自由主義の；気前のよい；寛大な
612,weep,すすり泣く、しくしく泣く；嘆く
613,upset,～の心を乱す；～の調子を狂わせる；～をひっくり返す；～をだめにする
614,despair,絶望
615,concentrate,～を集中する；～を（...に）集中させる
616,chart,図表；図
617,assimilate,～を同化する；～を吸収する；～を自分のものにする
618,assemble,～を集める；～を組み立てる
619,embrace,～を抱きしめる；～を含む；～に応じる
620,devoid,欠けた
621,reverse,逆の；裏の
622,pledge,～を誓う
623,plead,嘆願する; 申し立てる
624,oral,口頭の、口述の；口の
625,confess,～を告白する
626,colloquial,口語の
627,swear,～を誓う；～だと断言する
628,slang,俗語
629,roar,吠える、わめく；とどろく、鳴り響く；大笑いする
630,dialog,対話、会話
631,dialect,方言、地方語
632,chuckle,くすくす笑う
633,assert,～を断言する；（～である）と主張する；～を行使する
634,thrust,～を突き刺す；～を押し付ける；～を突き出す
635,bondage,（行動の自由の）束縛；捕らわれの身
636,scope,範囲；余地、自由
637,dictate,（文書など）を［...に］書きとらせる；～を命令する
638,yell,大声を出す、叫ぶ；エールを送る
639,render,～を（...に）する；（...に）～を与える；～を表現する
640,testify,～を証言する
641,recite,～を（聴衆の前で）朗読する、～を暗唱する；～を詳細に話す
642,verse,韻文；詩（の一行）；聖書の節（章を細分化した単位）
643,premise,前提、仮定
644,preface,序文；前置き
645,eloquent,雄弁な、説得力のある
646,locate,～の所在地を見つける；～の場所を定める
647,mingle,～を混ぜる
648,outer,外の～；客観的な
649,penetrate,～を貫く；～にしみ込む、広がる；～を見抜く、理解する；～に入り込む
650,underlie,～の下にある；～の基礎となる、～の背後にある
651,sore,痛い；悲しんだ、怒った
652,plunge,～を突っ込む；～を（・・・に）追い込む、陥れる
653,yearn,あこがれる；切望する；同情する
654,lament,～を嘆き悲しむ
655,depress,～を落胆させる；～を押し下げる；～を憂鬱にさせる
656,resent,～に憤慨する；～をひどく嫌う
657,deplore,～を嘆く
658,shudder,身震いする、ぞっとする
659,zeal,熱意、熱中
660,outrage,暴力; 激怒
661,whim,気まぐれの思いつき、でき心
662,staff,杖、棒；（集合的に）社員、職員、スタッフ
663,relevant,関連がある；適切な
664,emancipate,～を解放する
665,queue,列
666,indulge,～を甘やかす、～を満足させる、～にどんどん与える、～にふける
667,shed,（涙・血など）を流す；（葉など）を落とす；（光など）を投げかける
668,scared,おびえた；びっくりした
669,blush,（恥ずかしさなどで）顔を赤らめる
670,patron,（芸術などの）後援者；パトロン；常連客
671,obsess,（考えなどが）～にとりつく
672,proclaim,～を宣言する；～を（...だとはっきり）示す
673,satire,風刺、皮肉
674,mutter,つぶやく；ぶつぶつ不平を言う
675,denote,～を意味する
676,caricature,風刺画［文］；戯画；下手なまねごと
677,hemisphere,半球
678,subordinate,下位の；補助的な；従属する
679,frown,しかめ面をする、眉をひそめる
680,irony,皮肉、予想に反する結末
681,melancholy,憂うつ；哀愁
682,layer,（積み重ねたものの）層；地層
683,specimen,見本、標本
684,haughty,高慢な
685,impudent,ずうずうしい
686,pretend,～のふりをする、（～ということ）を装う
687,temperament,気質、気性
688,ancestor,先祖、祖先
689,territory,領土、領域
690,pity,哀れみ 、同情；残念なこと、遺憾なこと
691,temper,気質、気分；かんしゃく；平静な気分、落ち着き
692,blame,～を非難する；～に責任を負わせる；～を責める；～を（...の）せいにする
693,anxious,心配して；切望して
694,regret,～を後悔する、～を残念に思う
695,ashamed,恥ずかしがって、恥じている
696,touch,～を感動させる；～に触れる；～を扱う；～に影響を与える
697,ardent,激しい；熱心な
698,coward,臆病者
699,humble,謙遜した；卑しい；質素な
700,modest,謙虚な；（要求などが）控えめな；質素な、まあまあの
701,pacific,（the P～）太平洋
702,stubborn,頑固な；（行動が）断固とした、不屈の
703,identify,～が誰［何］であるかが分かる、～を同一のものとみなす；～を特定のもの［人］と確認する
704,feature,特徴、特色；顔立ち；目玉商品
705,wise,賢い、分別のある
706,clever,賢い；利口な；うまい；巧妙な
707,addict,中毒患者、（麻薬などの）常用者；愛好者
708,courteous,礼儀正しい
709,innate,生まれつきの
710,naughty,（子供が）いたずらな、わんぱくな；邪悪な
711,brutal,野蛮な；残酷な；残忍な；理性のない
712,conceit,うぬぼれ
713,discreet,思慮分別のある；目立たない
714,integrity,高潔さ、誠実さ；統一された状態
715,naive,世間知らずの；うぶな；単純な、だまされやすい
716,amiable,愛想のよい
717,temperate,節度のある、温和な
718,shrewd,抜け目のない；（洞察などが）鋭い
719,diligent,勤勉な
720,unique,唯一の、特有の；類のない
721,gentle,（性質などが）優しい、穏やかな
722,habit,習慣、癖
723,will,意志；遺書
724,idle,仕事をしていない、怠惰な
725,innocent,無邪気な；無罪の；悪気のない
726,lazy,怠惰な；無精な
727,willing,喜んで～する、快く～する；～するのをいとわない
728,patient,忍耐強い；我慢強い
729,wisdom,知恵、賢さ；金言、名言；学問、博識
730,nature,性質、本性；自然；種類
731,stupid,愚かな、ばかな、ばかげた
732,noble,気高い、高潔な；貴族の、高貴な
733,sincere,誠実な、心からの
734,nervous,神経の；神経質な、臆病な、あがった、緊張した
735,dumb,口がきけない ；おろかな
736,aggressive,攻撃的な、けんか腰の；積極的な
737,timid,臆病な、内気な
738,trait,特色；～気味
739,shortcoming,（～sで）欠点、短所
740,vanity,虚栄心、うぬぼれ
741,indignant,憤慨した
742,bewilder,～を当惑させる；～をうろたえさせる
743,rage,激怒；熱望；流行のもの
744,mourn,（死や不幸を）悲しむ、嘆く
745,fury,激しい怒り；（風雨などの）激しさ
746,astonish,～を驚かす
747,astound,～をびっくり仰天させる
748,aspire,（～することを）切望する；熱望する、求める
749,apprehension,気がかり、心配；理解
750,mischievous,いたずらな；有害な
751,arrogant,横柄な、尊大な、傲慢な
752,courage,勇気
753,shy,内気な、恥ずかしがりの
754,personality,個性、性格、人格；独特の雰囲気；有名人
755,serious,本気の、まじめな；重大な、深刻な
756,character,性格、個性、特徴；登場人物；人格；文字
757,polite,礼儀正しい、丁寧な；上品な、上流の
758,selfish,利己的な、わがままな、自分勝手な
759,proud,誇りを持って；（～を）誇って；（～を）自慢して
760,sound,（～に）思われる；（～に）聞こえる；（鐘などが）鳴る
761,general,世間一般の、一般的な；全体的な；大まかな
762,intense,強烈な、非常に強い、激しい
763,quantity,量
764,enormous,（形・程度などが）巨大な、莫大な
765,multitude,多数；（the～（s）で）大衆
766,expand,～を広げる、～を膨張させる
767,abound,豊富である；（場所などが）いっぱいである、（～で）満ちている
768,ample,たっぷりある、広大な
769,approximate,おおよその、近似の
770,score,得点；成績；20
771,supreme,（地位・性質などが）最高の；この上ない、究極の
772,trivial,ささいな、取るに足りない、ありふれた
773,acute,鋭い；深刻な；（痛みなどが）激しい；急性の
774,network,網状のもの；張り巡らされたもの；放送網；ネットワーク
775,feudal,封建制の
776,attorney,弁護士
777,board,板；会議；委員会；重役
778,candidate,候補者；志願者；立候補者
779,trial,試み、試験；裁判；試練、苦労
780,strategy,戦略、計画、方策
781,parliament,議会、国会；（P～で）英国議会
782,layman,（専門家に対して）しろうと；（聖職者に対して）平信徒
783,treaty,条約；交渉、約束
784,arm,腕；（～ｓで）武器
785,branch,"（一般に）枝；支店；部門 =division, section"
786,elect,～を選ぶ、～を選挙で選ぶ
787,function,機能、役割、働き；（公式な）式典、会合
788,govern,～を治める；～を支配する；～を左右する；～を抑制する
789,jail,刑務所；留置場；拘置所
790,official,公の、公式の；公務（上）の、お役所風の
791,personnel,（集合的に）社員；人事部
792,power,力、能力；権力；強国；（電気などの）エネルギー；体力、知力、精神力
793,social,社交的な；社会の、社会に関する、社会的な、社会生活を営む
794,word,短い会話；約束；単語、言葉；知らせ、消息
795,empire,帝国；大企業
796,institution,施設；（公共）機関、団体；制度、慣習
797,legal,合法的な；法律の；法的な
798,penalty,罰金；刑罰
799,revolution,革命、（思想などの）大変革；回転
800,royal,王室の、王の；王立の；風格のある
801,spectator,観客、見物人
802,statistics,［複数扱い］統計（の数字）；［単数扱い］統計学
803,system,装置、システム；制度、組織；体系；方法、学説、手順；体
804,troop,（移動する）群れ、一団；（～ｓ）軍隊、騎兵隊
805,vote,投票、票；選挙権；決議、決定
806,specialize,専門にする、専攻する
807,anarchy,無秩序
808,diversity,相違、多様性
809,bribe,賄賂
810,bureaucrat,官僚
811,census,国勢［ 市勢］ 調査；（主に人口の）一斉調査
812,committee,委員会
813,conservative,保守的な、控えめな
814,despotic,専制的な
815,superpower,超大国；強大な力
816,accordingly,それに応じて、それ相応に；したがって
817,factor,要因、要素
818,explain,～を説明する
819,define,～を定義する、～を明確に定める
820,convince,～を納得させる；～を確信させる
821,logical,論理的な、筋が通った；論理学（上）の
822,result,結果、（試験などの）成績
823,prove,～を証明する；～を試す
824,nevertheless,それにもかかわらず、それでもやはり
825,actually,実際に、（意外だが）実は、本当は
826,analysis,分析；解明
827,prestige,名声；威信
828,order,順序、等級；秩序、治安；命令；注文（品）；整理；正常、順調
829,lawyer,弁護士
830,investigate,～を調査する
831,infer,～を推論する
832,consequence,結果；重要性
833,conclude,（～である）と結論を下す；～を終える；～（発言など）を締めくくる；～（契約など）を締結する
834,inspect,～を検査する；～を調査する
835,eventually,結局は、ついに
836,examine,～を調べる；～に試験をする
837,bunch,束；集団、群れ
838,chairperson,議長；（会社などの）会長
839,snob,俗物；上流気取りの嫌な人
840,colleague,（仕事の）同僚
841,reign,統治、支配；君臨、治世
842,warfare,戦争状態、武力衝突；闘争
843,senator,上院議員
844,communist,共産主義者
845,summon,～を呼び出す、～を召集する
846,lure,魅力；おとり
847,welfare,幸福、繁栄、福祉；生活保護
848,crime,（刑法上の）犯罪
849,prison,刑務所；拘置所
850,famous,有名な
851,public,公の；公開の；公的な
852,state,状態；国家、州；威厳；地位、身分
853,political,政治の、政治的な、政治に関する
854,work,（不可算）仕事、労働；勉強、研究；職業、職場；（可算。通常～s）作品
855,agree,同意する、意見が一致する、賛成する；体質に合う
856,cause,原因；主義主張；理由；大義名分、目的
857,insist,～と主張する、～と言い張る；～を要求する
858,congress,（C～）（米国の）議会；国会；大会
859,illegal,不法な、違法な
860,statesman,政治家
861,nursery,託児所、保育園、子供部屋；園芸店、養殖場
862,prejudice,偏見；先入観
863,substitute,～を代わりに用いる、～を代用する
864,vocation,職業、天職；召命
865,facility,施設、設備；容易さ；才能
866,authority,権威、（...する）権限；権威者；当局；大家
867,diplomacy,外交；駆け引き
868,expert,専門家、熟達者
869,notwithstanding,それにもかかわらず
870,deduce,～を演えきする、（推理により結論）に達する
871,paradox,逆説；パラドックス；矛盾；矛盾しているようにみえること
872,criterion,（判断の）基準
873,administration,管理、経営、運営；行政、政府、政権
874,cabinet,（通例、the C～）内閣；飾り戸棚、キャビネット
875,dictator,独裁者
876,riot,暴動
877,sovereign,君主、主権者
878,municipal,地方自治体の；市町（営）の
879,baggage,手荷物；旅行荷物；（集合的に）（旅行時の）荷物
880,strength,力、強さ（のもと）
881,bomb,爆弾；大失敗
882,instrument,道具、器具；楽器
883,business,（自分自身に関する）事柄、こと；商売、事業；仕事、業務
884,case,実情；場合；事例；症例；症状；事件；事実；訴訟；容器
885,diet,（減量のための）食事制限、日常の食事；（the D～）国会
886,instance,例、実例；場合
887,line,職業；方針；短い手紙；線；列；（文の）行
888,VCR,ビデオデッキ（video cassete recorder の略）
889,shelf,棚
890,adequate,十分な、（ある目的のために）適切な
891,appropriate,適切な、ふさわしい
892,dense,（人が）密集した、密度の高い；濃い
893,drastic,徹底的な、思い切った、猛烈な、抜本的な
894,extravagant,仰々しい；金遣いの荒い、ぜいたくな
895,fertile,肥沃な；創造力豊かな；（動植物が）生殖力のある、多産な
896,flat,単調な；そっけない；平らな；断固とした；均一の
897,infinite,無限の
898,thorough,徹底的な、完全な；全くの；几帳面な
899,terrific,すばらしい；（量・程度が）ものすごい；恐ろしい
900,painstaking,骨の折れる、つらい；念入りな、丹精こめた
901,pulse,脈拍
902,cosmos,（the～で）宇宙；秩序；（植物）コスモス
903,muddy,泥の；濁った
904,particle,粒子；小さな粒
905,volcano,火山
906,thread,糸；（話などの）筋、続き
907,scissors,はさみ
908,apparatus,装置、器具
909,undue,過度の；不当な；支払期限が来ていない
910,proficient,熟達した、堪能な
911,dessert,（食後の）デザート
912,contain,～を中に入れている、～を収容する；～を抑える
913,feed,～にえさ［食べ物］を与える
914,incident,出来事、事件
915,bough,大枝.
916,material,材料、原料、資料、生地
917,matter,物質、物体；問題、事；困難；事情；重大さ
918,rate,割合、速度；料金
919,well-known,よく知られている
920,very,まさにその［この］、全くの
921,unit,単位
922,tough,かたい；丈夫な；難しい、困難な；不幸な
923,urge,～を駆り立てる ～に（・・・するよう）説得する ～を推進する、 衝動 欲求
924,press,～を押す ～を押し付ける ～に強く求める ～にアイロンをかける、 新聞 出版 押す事 アイロンがけをすること (the～)報道陣 報道機関
925,pressing,差し迫った
926,oblige,～に・・・をさせる ～に親切にする ～に恩恵を与える
927,incline,～を傾ける ～を（・・・する）気にさせる、 （心、ものが）傾く 傾斜する
928,compulsory,強制的な 義務的な 必修の
929,compel,～に（・・・することを）強制する ～を強いる
930,command,～に(・・・するよう）命令する ～を指揮する ～を支配する （景色など）を見渡す （同情、尊敬、指示など）を集める、 命令 支配 （言葉を）自由に操る力
931,claim,～を要求する （～である）と主張する （事故などが人名）を奪う、 （当然の権利としての）要求 （主張する）権利 主張
932,count,重要である
933,gross,総計の；大きな；ひどい
934,miniature,小模型、ミニチュア
935,sheer,まったくの；透き通った、薄い；切り立った
936,thermometer,温度計
937,stem,茎、幹；語幹
938,hydrogen,水素
939,oxygen,酸素
940,hygiene,衛生（学）
941,molecule,分子；微量
942,ozone,オゾン
943,abundant,豊富な；豊かな
944,badly,ひどく；とても；下手に；悪く
945,fast,（時計が）進んでいる；速い；しっかり固定した
946,empty,からの、人のいない、空いている、何もない
947,height,高さ、身長；高地；絶頂；丘、高台
948,range,範囲、幅；連なり
949,nearly,ほとんど；すんでのところで
950,accuse,～を訴える、～を非難する、～を責める
951,duty,義務、任務；責任；税、関税
952,contract,契約；契約書.
953,conference,会議；協議；協議会
954,editor,編集者
955,fabric,織物 布地 構造 骨組み
956,grain,穀物 穀粒 少量 微量 木目
957,mineral,鉱物 ミネラル、 鉱物を含んだ 鉱物の
958,profession,専門職 公言
959,professor,教授
960,project,企画 計画 事業 学習課題、 ～を計画する ～を映し出す ～を見積もる
961,sow,（種）をまく
962,trade,貿易 職業 商売、 貿易する 売買する、 ～を交換する ～を売買する
963,seemingly,うわべは 見たところは
964,utmost,最大の 最高の、 最大限
965,cough,咳をする
966,sneeze,くしゃみ
967,digest,～を消化する
968,dizzy,目まいがする、ふらふらする
969,heredity,遺伝
970,scar,傷跡、（けが等の）跡
971,surgeon,外科医
972,therapy,（薬や外科手術などを使わない）治療（法）
973,bishop,主教；司教
974,priest,司祭；聖職者
975,maternal,母の；母らしい
976,regular,定期的な、規則的な；一定の、いつもの；正規の
977,annual,年一回の、毎年の
978,ancient,古代の、昔の；昔からの；（物などが）とても古い
979,antique,骨董品の、年代物の；古風な
980,constant,絶え間のない；一定不変の
981,decade,10年間
982,immediate,即座の；すぐ隣の、近い；直接の
983,lately,最近.
984,recent,最近の；ごく新しい
985,last,最後の；この前の；最も（～）しそうにない
986,repeat,～を繰り返す；～を復唱する；～を口外する
987,constitute,～を構成する ～を制定する ～の構成要素である
988,decay,腐る 衰える、 腐敗 衰退
989,embody,（思想など）を具体化する
990,explode,爆発する ～を爆発させる
991,frame,校正 骨組み 骨格 枠 額縁、 ～を組み立てる ～を枠にはめる
992,pillar,柱 要所 中心的存在
993,gigantic,巨大な 莫大な
994,resolve,～を決心する ～を解決する ～を分析する、 決定する 決心する （・・・に）分解する
995,sew,～を縫う
996,stir,～をかき混ぜる ～をかき回す ～を奮起させる～を扇動させる
997,extraordinary,並外れた 普通ではない
998,mammal,哺乳動物；哺乳類
999,nourish,～を養う、～を育てる
1000,organ,（体の）器官；（政府などの）機関、組織；オルガン
1001,organism,有機体；生物；組織体
1002,disable,～の能力を奪う
1003,heal,（傷など）を治す
1004,slender,細長い、弱い、わずかな
1005,weary,疲れた；あきあきした
1006,ethnic,民族の、民族特有の
1007,restructure,～を再構築［再構成］する；～を再検討する
1008,ladder,はしご；出世への手段や道
1009,tongue,言語、言葉；舌；話しぶり
1010,throat,喉
1011,sight,視界；光景；見ること
1012,physical,身体の、肉体の；物質の、物理（学）の
1013,hand,筆跡；援助の手、人手；手；（時計などの）針
1014,female,女性の、雌の.
1015,male,男性の；雄の
1016,visible,目に見える
1017,vision,視力、視覚；洞察力；先見性、将来を見通す能力；幻、未来図
1018,blood,血；血統；血筋
1019,head,向かう、進む
1020,conventional,従来の；慣習的な；協定の
1021,agent,代理人 代理店 行為者
1022,sentence,～に判決を宣言する ～を刑に処す、 文 判決
1023,somewhat,いくらか
1024,flock,群れ、 群がる 集まる
1025,department,部門 課 局 売場 （米国政府の）省 学科
1026,pile,積み重ね 山 たくさん、 ～を積み重ねる ～を（・・・に）積む、 積みかさなる 殺到する
1027,subtle,微妙な かすかな 巧妙な 難解な 複雑な」鋭敏な
1028,steep,（坂などが）急な 険しい （値段が）法外
1029,scale,規模 段階 等級 縮尺 うろこ はかり、 ～を登る ～を（はかり・天秤で）はかる
1030,decent,まともな まあまあの 慎みのある かなりよい きちんとした
1031,drain,～の排水をする、～をからにする；～を消耗させる
1032,foster,～を育成する；（実子でない子供）を養育する；（希望など）を抱く
1033,needle,針、とがったもの
1034,manual,手動の、手の；（作業などが）人力を要する
1035,monopoly,独占、専売（権）；独占企業、専売会社
1036,organize,～を組織する；～体系づける；～を準備する；～を整える
1037,commodity,産物、商品、日用品
1038,blueprint,青写真［計画の具体的な進め方を説明するもの］、詳細な計画
1039,exquisite,この上なく優れた、たいへんすばらしい
1040,pathetic,哀れな；救いようのない
1041,age,年齢；老齢；時代；長い間
1042,infant,幼児、初心者
1043,childhood,少年［少女］時代；子供時代.
1044,youth,青春時代；若い人；若々しさ、未熟さ
1045,adopt,（方法など）を採用する；～を養子にする
1046,awake,～を眠りから覚ます
1047,challenge,やりがい（のある仕事）；課題；挑戦
1048,routine,決まり切った仕事、日課；いつもの手順
1049,chance,機会；可能性；見込み；偶然；（～s）形勢
1050,ceremony,儀式；式典；儀礼
1051,live,生きている；（演奏などが）生の；元気な、活気のある
1052,life,生物；生命；一生、人生；元気、活気；実物、本物
1053,spectacle,壮観 見もの 惨状 (～s)眼鏡
1054,athlete,運動選手 競技者 スポーツ選手
1055,race,人種 民族 人類 レース 競争 急ぐこと、 競争する 大急ぎでやる
1056,household,家族（全体） 世帯 家庭、 家庭の 家族の 家事の
1057,career,経歴 （一生続ける）職業 生涯 成功 出世
1058,offspring,子孫 成果 結果
1059,well-being,幸福 健康 福利
1060,funeral,葬式 葬儀
1061,elderly,初老の、 年配の
1062,perfume,香水；（快い）香り
1063,scent,（快い）香り；手掛かり
1064,stain,汚れ、しみ
1065,vogue,流行、人気
1066,fantasy,空想、幻想
1067,fancy,空想、（根拠のない）考え；好み；思いつき
1068,stimulate,～を刺激する；～を元気づける
1069,tempt,～を誘惑する、～を（...する）気にさせる；（神など）を怒らす
1070,illusion,錯覚、幻想、幻覚
1071,autograph,（有名人などの）サイン
1072,donation,寄付、寄贈
1073,geography,地理学；地形、地理
1074,continent,大陸；本土
1075,distant,遠い、距離のある；（関係が）冷ややかな
1076,globe,球体、世界、地球儀；（the～で）地球
1077,landscape,（陸地の）景色、風景、眺め
1078,summit,頂上、頂点；首脳会議、首脳
1079,moral,道徳上の；道徳的な、倫理的な、教訓的な
1080,promise,～を約束する；～の見込みがある
1081,truth,真実、事実；真理；誠実
1082,trust,～を信頼する、～を信用する；～に委託する
1083,responsible,責任がある、信頼できる;（～の）原因である
1084,border,境界（線） 国境 縁、 ～に接する ～に縁を付ける
1085,boundary,境界 限界
1086,colony,植民地 居留地 集落
1087,frontier,辺境 国境 先端（地） 最前線
1088,internal,内部の 国内の、 本質の (～s)内臓
1089,marine,海の 海に住む 海事の 海軍の、 海兵隊 海兵隊
1090,meadow,牧草地 草地
1091,path,小道 歩道 方針 生き方 進路
1092,peninsula,半島
1093,vacuum,真空（状態） 空虚 電気掃除機、 ～に掃除機をかける
1094,urban,都会の 都市の
1095,expedition,探検、遠征（ 隊）；迅速さ
1096,pavement,舗装；舗装道路
1097,avenue,大通り；（～に至る）道、手段、方法
1098,metropolis,首都；大都市
1099,orient,～の方向を見定める；～向けである；（～に）適応する
1100,domain,領土、領域
1101,province,（カナダ・豪州などの）州；（the～s）地方、田舎
1102,Antarctic,(the～）南極地方
1103,delinquency,非行
1104,exploit,（資源など）を開発する；～を搾取する、～を利用する
1105,exact,正確な、厳格な
1106,genuine,本物の；心からの；純粋な
1107,novel,目新しい；奇抜な
1108,ordinary,普通の、正規の；ありふれた、平凡な
1109,significant,重大な；意味のある
1110,right,ふさわしい、正当な；正しい；右の
1111,pure,純粋な；澄んだ；汚れのない
1112,peculiar,独特の、特有の；変な、妙な
1113,standard,基準、標準、水準
1114,vital,極めて重要な；不可欠な；生命に関する；活気のある
1115,worth,～の価値がある；～の財産を所有して
1116,linguistic,言語学（上）の 言葉の
1117,illustrate,～を例証する ～に挿絵を入れる ～を（図表などを使って）説明する
1118,illiterate,読み書きができない 無学の 教養のない
1119,version,～版 型 翻訳 説明 報告 表現 解釈
1120,revise,～を改定する ～を変更する
1121,theory,理論 学説
1122,theme,主題 テーマ 作文（の題） 主題歌
1123,sculpture,彫刻 彫刻作品、 ～を彫刻する、 彫刻する
1124,portrait,肖像画 描写
1125,masterpiece,傑作 代表作 名人芸
1126,monument,記念碑 遺跡 不滅の業績
1127,usage,使い方；語法；慣習
1128,document,文書（類）、書類、記録
1129,encyclopedia,百科事典
1130,enlighten,～を啓発する、～を啓蒙する；～を教える、～に知らせる
1131,plot,陰謀；（小説・劇などの）筋；小区画地
1132,statue,（彫）像
1133,geometry,幾何学
1134,legend,伝説、言い伝え；（絵などの）題、説明文；（地図、図表の）凡例
1135,renaissance,復興、復活；（the R ～）ルネッサンス、文芸復興
1136,prose,散文（体）
1137,found,～を設立する、～を（...の基礎の上に）作る
1138,disappear,消える、見えなくなる
1139,construct,～を組み立てる；～を建設する；（文・理論など）を構成する
1140,erect,（建物など）を建てる
1141,protect,～を保護する；～を守る
1142,recover,（失っていたもの）を取り戻す；～を回復する
1143,tear,～を引き裂く.
1144,ruin,～を破滅させる；～を台無しにする；～を崩壊させる
1145,mend,～を修理する、～を修繕する；（行儀など）を改める
1146,steady,しっかりした、固定した；変わらない；落ち着いた
1147,shape,形、姿；調子、状態
1148,structure,建物；構造、構成、組織、体系
1149,biography,伝記 電気文字
1150,fable,たとえ話 つくりばなし
1151,heritage,遺産
1152,canal,運河 水路
1153,barn,納屋 物置
1154,compose,～を構成する （文章や曲）を作る ～の心を落ち着ける
1155,establish,～を設立する ～を確立する
1156,spoil,～を台無しにする ～を甘やかしてダメにする ～を大事にする、 台無しにする （食物などが）だめになる、 強奪犯 略奪品
1157,restore,～を復活させる ～をもとの状態に戻す ～を回復する
1158,collapse,崩壊；衰弱；挫折
1159,fragment,破片、かけら
1160,compile,～を編集する
1161,modify,～を修正する；～を緩和する
1162,synthesis,総合、統合、合成
1163,knit,～を編む、～を組み合わせる；（まゆ）をよせる
1164,mold,～を型に入れて作る；（人格など）を形成する
1165,shelter,避難（所）、隠れ家、住まい
1166,condominium,｛米｝（分譲）マンション［共同住宅］
1167,suite,（ホテルの）スイートルーム；（オフィスビルなどの）一室；随行員
1168,skyscraper,超高層ビル
1169,afford,～を持つ（買う）余裕がある；～を与える、もたらす
1170,allowance,小遣い；手当；許可
1171,capital,大文字；資本；首都、州都
1172,poverty,貧困、不足、不毛
1173,wealth,財産、富；裕福；豊富な～；資源
1174,economy,経済、節約
1175,cost,（金額など）がかかる；～に犠牲を払わせる
1176,consume,～を消費する；～を使い果たす
1177,sum,合計；金額；大意
1178,earn,（働いてお金など）を稼ぐ、（名声など）を得る
1179,finance,～に融資する、～に資金を提供する
1180,provide,～を供給する；～に備える；～の規定を設ける
1181,immigrant,（他国からの）移民 （入国する）移民
1182,import,～を輸入する ～を取り入れる、 輸入（品）
1183,export,～を輸出する ～を外国に広める、 輸出 (～s)輸出品
1184,transfer,～を移動する ～を転任させる ～を（・・・に）譲渡する、 移転する 乗り換える、 移転 移動 乗り換え 振り込み 譲渡
1185,expense,費用 支出 経費 犠牲
1186,bill,請求書 法案 紙幣、 ～（人）に（支払を）請求する
1187,budget,予算 経費 予算案、 （時間、金額）をわりあてる、 予算を立てる
1188,debt,借金 恩義
1189,invest,～を投資する ～をつぎ込む （人）に（～を）与える
1190,enrich,～を豊かにする
1191,recession,景気後退
1192,revenue,（国家などの）歳入；収入
1193,transaction,（業務の）処理；取引；（～ｓ）議事録、学会などの紀要
1194,stock,在庫品；備え；株、株式
1195,barter,～を物々交換する
1196,deposit,預金；手付金、保証金
1197,charge,～に（料金などを）を請求する；～を非難する；～を告発する；（仕事など）を託す
1198,injection,注射；投入
1199,subdue,～を征服する；（感情）をおさえる；（声・照明）を弱める
1200,frugal,倹約な；質素な、貧弱な
1201,choice,選択肢；選択；選ぶこと；選ばれた物［人］
1202,keen,鋭い；鋭敏な、頭の切れる；熱心な
1203,loose,ゆるい；解き放たれた；束ねていない；節度のない
1204,subjective,主観的な
1205,casual,偶然の；気取らない；思いつきの；不用意な
1206,distinguish,～を区別する.
1207,admit,～を認める；～が（学校や組織などに）入ることを許可する
1208,justify,～を正当化する、～を弁明する
1209,fit,ふさわしい；適当な、適した；体の調子がよい
1210,label,～にラベルをはる；（人）にレッテルをはる
1211,suit,～に適する、～に似合う
1212,merit,長所 功績 （すぐれた）価値 賞点
1213,precious,高価な 貴重な 大切な
1214,indispensable,必要不可欠な
1215,brilliant,輝いた 素晴らしい 優秀な 鮮明な
1216,discriminate,差別する 識別する、 ～を区別する
1217,priceless,金では買えない とても高価な とても貴重な
1218,valid,妥当な 正当な 有効な 合法的な 効力がある
1219,secure,安全な 安心な 確保された 確実な、 ～を確保する ～を守る
1220,discern,～を見分ける
1221,credible,信頼できる
1222,deserve,～に値する ～を受ける価値がある
1223,shabby,ぼろぼろの、みすぼらしい
1224,futile,無駄な、無益な
1225,crucial,決定的な；重要な
1226,neat,きちんとした；手際のよい；すばらしい
1227,magnificent,壮大な、素晴らしい、荘厳な、華やかな
1228,assess,～を評価する；～を見積もる
1229,esteem,～を尊重する、～を（...だと）思う
1230,evaluate,～を評価する
1231,malice,悪意、敵意
1232,hypocrisy,偽善、偽善行為
1233,brain,脳、頭脳；（the ～）知識人［秀才］；（～s）知能、知的顧問
1234,breathe,呼吸をする
1235,deaf,耳が聞こえない、耳を貸さない
1236,fever,熱、高熱；熱狂
1237,thirsty,のどの渇いた；渇望する
1238,medicine,薬；医学
1239,weigh,～の重さを量る；～をよく考える；(be weighed) ～に打ちひしがれる
1240,seed,種をまく
1241,poison,毒、毒薬；弊害
1242,insect,昆虫
1243,temperature,温度、体温；高熱
1244,drug,薬 麻痺
1245,virus,ウィルス コンピュータウィルス
1246,laboratory,実験室 研究所 研究室
1247,cancer,癌 （社会などの）害悪
1248,handicapped,"身体障害の ハンディがある, 身体障害者"
1249,cure,～を治療する ～治す、 治療法 治療 解決策
1250,nutrition,栄養 滋養物
1251,pale,顔色が悪い （色の）淡い 薄い 迫力のない
1252,starve,飢える 餓死する 非常に腹が減る 渇望する
1253,strip,"～から（・・・を）はぎ取る ～を裸にする, 衣服を脱ぐ 裸になる"
1254,stress,～を強調する、 ストレス 緊張 圧力 強調 重点 アクセント
1255,subsequent,後の、次の
1256,spontaneous,自発的な、自然に起きる；進んでする
1257,simultaneous,同時の
1258,retrospect,追憶、思い出
1259,precede,～に先行する、～に優先する、～の前に（...を）置く
1260,postwar,戦後の
1261,meanwhile,その間に；一方では
1262,medieval,中世の；古めかしい
1263,plague,伝染病、疫病；災い、不幸
1264,wrinkle,しわ；妙案、助言
1265,appeal,訴える
1266,exchange,～を交換する、～を交換し合う；～を両替する
1267,pay,割に合う；見返りがある；利益をもたらす；（～の）代金を払う
1268,offer,～を提供する；（～すること）を申し出る；～を差し出す
1269,beg,～を請い求める；～に（～するように）懇願する
1270,reject,～を拒絶する、～を却下する.
1271,accept,～を受け取る；～を受け入れる；（考え、意見など）を認める
1272,require,～を必要とする；～を要求する
1273,refuse,～を拒絶する、～を（きっぱりと）断る
1274,prohibit,～を禁止する
1275,furnish,～に供給する、～に備え付ける
1276,study,書斎；研究；勉強
1277,knowledge,知識
1278,intelligent,知能の高い、頭の良い
1279,intellect,知性、知力
1280,attain,～を達成する；～に到達する
1281,hardly,ほとんど～ない
1282,likely,～しそうな；ありそうな；【限定用法】本当らしい、適当な
1283,apt,（～する）傾向のある、～しがちな；適切な；ふさわしい
1284,add,～を付け加える；～と付け加えて言う；～を合計する
1285,account,説明・釈明をする；割合を占める；原因となる
1286,lack,～を欠いている［持っていない］
1287,limit,～を制限する
1288,entire,全体の、全ての、完全な
1289,decrease,減少する、低下する.
1290,mere,単なる、ほんの
1291,obvious,明らかな、見てすぐわかる、分かり切った
1292,dull,（刃や痛みなどが）鈍い；退屈な；頭の悪い
1293,extreme,極端な、極度の
1294,namely,すなわち、つまり
1295,agriculture,農業
1296,industry,産業、工業; 勤勉
1297,bent,好み；傾向
1298,tradition,伝統、慣習；言い伝え
1299,practice,実行；練習；慣例；（医師や弁護士などの）業務
1300,harsh,厳しい 辛辣な どぎつい 不快な
1301,misfortune,不幸 不運
1302,seize,～をつかみ取る ～を差し押さえる ～を理解する (be ～ed with[by])（感情など）に襲われる
1303,refuge,避難 保護 避難所 隠れ家
1304,hardship,苦労 苦難
1305,famine,餓死 飢饉 食糧不足
1306,hazard,危険、 ～を危険にさらす
1307,available,利用できる 入手できる （人が）面会可能な 手の空いている
1308,contribute,貢献する 寄与する、 ～を寄付する ～を述べる
1309,register,～を記録 登録する ～を書留にする （感情など）を表す、 登録 記録[簿] レジ
1310,load,(荷など)を積む ～に詰め込む、 積み荷 重さ 負担 多量 多数
1311,resident,住民 居住者
1312,explore,～を探検する ～を調査する
1313,destination,目的地
1314,context,(文の)前後関係 文脈 背景 状況
1315,criticism,評論 批評 避難 批判
1316,chapter,(書類などの)章 支部 分会
1317,fairy,妖精の
1318,myth,神話 社会通念 作り話
1319,describe,～を描写する ～を（・・・だと）言う ～を説明する
1320,punctual,時間を厳守する 素早い きちょうめんな
1321,prior,(時間・順序が)前の 先の 優先する
1322,primitive,原始の 原始的な 単純な
1323,initial,最初の 初期の、 (姓名・語の)頭文字
1324,era,時代 年代
1325,epoch,新時代 時代
1326,dawn,夜明け (新しい時代などの)始まり、 (事実などが)わかり始める
1327,current,現在の 最新の 通用している、 流れ 傾向 潮流
1328,beforehand,前もって 事前に
1329,inflict,（苦痛、損害、罰など）を与える
1330,chaos,混乱；混とん
1331,catastrophe,惨事；大惨事；大災害；破局
1332,adversity,逆境；不運
1333,grab,～を不意につかむ、～をひったくる
1334,catch,～に間に合う；～に感染する；（～が...しているの）を見つける；～をつかむ
1335,capture,～を捕らえる
1336,endow,～に授ける、～に与える、～に寄付する
1337,mass,かたまり、多数［量］；（the ～es）一般大衆、庶民
1338,diameter,直径
1339,dimension,大きさ；特性、特質、局面
1340,equivalent,同等の、（～に）相当する
1341,virtually,実質的には、ほとんど
1342,massive,（大きさ・程度・量などが）極めて大きい
1343,moderate,適度な、節度のある；（考え方・思想が）穏健な
1344,unanimous,全員一致の；同意見の
1345,venture,冒険；ベンチャービジネス
1346,white-collar,オフィス労働の；サラリーマンの
1347,weave,～を織る；～をまとめ上げる
1348,dispense,～を分配する；（薬）を投与する；～を免ずる
1349,warehouse,倉庫；問屋
1350,textile,織物、布地
1351,reap,～を収穫する、～を刈り入れをする；（報いなど）を受ける
1352,craft,技術；商売；手工業；悪知恵；船舶、飛行機
1353,cattle,（集合的に）畜牛、牛
1354,ambulance,救急車
1355,calamity,災難；大惨事
1356,exterminate,～を根絶する
1357,menace,脅威
1358,smother,～をもみ消す；～を厚く包む；～を窒息させる
1359,perpetual,永久の；絶え間のない
1360,drudgery,骨の折れる仕事；つまらない仕事
1361,skill,技能、技術；熟練
1362,access,接近；（情報や施設などを）利用する権利
1363,sense,感覚；判断力、センス；良識；正気、意識；意味；価値、効果
1364,gift,天賦の才能；贈り物
1365,aware,（～に）気づいている、知っている
1366,curious,好奇心の強い；好奇心をそそる；奇妙な
1367,engage,～を従事させる、～を雇う、～をひきつける
1368,interest,関心、興味；利害（関係）；利子、利息
1369,eager,熱心な；熱望して、切望して
1370,amuse,～を楽しませる
1371,bore,～を退屈させる、～をうんざりさせる
1372,imagine,～を想像する、～を心に描く
1373,deliver,～を配達する、（演説など）をする、（子）を出産する
1374,passage,通行、通路；（文章や曲の）一節；経過、通過；廊下；旅行
1375,carriage,馬車；うば車（アメリカ用法）；〈鉄道の〉客車（イギリス用法）
1376,vehicle,乗物、輸送機関；手段、媒体
1377,traffic,交通、交通量.
1378,travel,通う；伝わる；次々に見る（思い浮かべる）；進む；旅行する
1379,transport,～を輸送する; （be～ed)夢中になる、いっぱいになる
1380,train,列；列車；連続、結果；衣服のすそ
1381,wander,さまよう；迷う
1382,park,～を駐車させる
1383,square,正方形;（四角い）広場；２乗
1384,jam,～をふさぐ；～に詰め込む；～を妨害する
1385,award,～を授与する、～を与える
1386,equal,等しい、匹敵する；耐えられる
1387,fame,名声
1388,honor,名誉、敬意、光栄
1389,unfair,不公平な、不当な；慣行に反した
1390,game,獲物；ゲーム、試合
1391,match,試合；マッチ
1392,inferior,（～より）劣って、（～より）下級の
1393,superior,より優れて、優れた；上級の、上の；高慢な
1394,defeat,～を打ち負かす、～に勝つ；～をくじく
1395,succeed,成功する、うまくいく；相続する、継承する
1396,cruel,残酷な；悲惨な；ひどい
1397,evil,悪い；有害な
1398,rude,無礼な、失礼な；粗雑な；未加工の
1399,infamous,悪名高い；不名誉な
1400,misunderstanding,誤解.
1401,mistake,～を間違える；～を誤解する
1402,FALSE,誤った、間違った；うその、偽りの、真実とは違う
1403,correct,正しい；適切な；正確な
1404,deceive,～をだます
1405,fine,～に罰金を科する
1406,judge,～を判断する；～であると判断する；～を裁く
1407,advantage,利益、利点、有利な立場
1408,reality,現実（性）、実体；本質
1409,doubt,疑い、疑念.
1410,belief,信念；確信；信じること；（～に対する）信頼
1411,aspect,側面；外観；顔つき
1412,annoy,～をいらいらさせる；～を悩ます
1413,forgive,（罪などをおかした人）を許す
1414,harm,損害、危害
1415,hurt,～の心を傷つける、～を傷つける
1416,ignore,～を無視する.
1417,struggle,苦闘、奮闘、努力、争い
1418,worry,心配する、悩む
1419,figure,姿、容姿；人物；数学、計算；図、図形
1420,break,休憩； 破損、骨折
1421,consist,（～から）成る［構成されている］；（～に）ある
1422,create,～を創造する
1423,decorate,～を飾る.
1424,destroy,～を破壊する、～を滅ぼす；～を殺す
1425,develop,～を発達させる、～を開発する、～を発育させる
1426,transform,～を変形させる、～を一変させる
1427,rest,残り（のもの）；休息、休憩；台；停止、静止
1428,disease,病気
1429,risk,危険、冒険
1430,maintain,～を主張する；～を維持する；（家族など）を扶養する；～を整備する
1431,repair,～を修理する；（健康など）を回復する; ～を償う
1432,process,過程、工程；方法、手順；経過、進展
1433,machinery,（集合的に）機械；組織
1434,goods,商品、品物
1435,artificial,人工の、人造の；不自然な
1436,invent,～を発明する；（話）をでっち上げる
1437,manufacture,製造；（～s）製品
1438,produce,～を製造する；～を生産する；～を産む；～を創作する；～を提出する
1439,task,仕事、任務
1440,paper,新聞；論文、レポート；証明書；紙
1441,wear,～をすり減らす、～を使い果たす；～を疲れさせる；～を身につけている
1442,waste,～を浪費する、～を無駄にする；～を荒廃させる；～を消耗させる
1443,yield,～を産出する；～を生ずる；～を明け渡す
1444,represent,～を表す［意味する］；～を代表する；～を描写する
1445,solid,個体の 頑丈な 確実な 充実した 濃い
1446,rigid,堅い 動かない 柔軟性のない 厳格な
1447,voluntary,自発的な 自然に生じる 任意の
1448,tame,飼いならされた 柔順な 耕作された、 ～を飼いならす (自然のちからなど)を制御する (色彩など)を和らげる
1449,flexible,柔軟な 柔らかい 融通のきく
1450,vague,あいまいな ぼんやりした うつろな かすかな
1451,stereotype,固定観念 型にはまった人[物]、 ～を型にはめる ～を形式化する
1452,tender,柔らかい もろい 弱い 優しい 親切な 触ると痛む 敏感な
1453,firm,堅固な しっかりした 安定した、 会社
1454,glittering,キラキラ輝く
1455,bright,明るい 輝いている 頭が良い
1456,positive,自信のある 肯定的な 積極的な 明確な 疑いのない
1457,negative,否定的な 打ち消しの 消極的な 負の、 否定 (写真の)ネガ
1458,conflict,(～との)闘争 衝突 (意見などの)対立 不一致、 (～と)矛盾する
1459,confront,～(困難など)に直面する ～と(対立関係で)向かい合う
1460,resist,～に抵抗する ～に敵対する ～に耐える
1461,conquer,～(領土など)を征服する ～を占める ～を克服する
1462,contradict,～と矛盾する (人の考えなど)を否定する
1463,coarse,粗雑な きめの粗い 下品な 卑猥な
1464,incredible,信じがたい 途方もない とてもすばらしい
1465,silly,愚かな バカバカしい
1466,ridiculous,ばかげた
1467,vain,無駄な 骨折り損の むなしい 価値のない うぬぼれの強い
1468,complicated,複雑な 入り組んだ
1469,complex,複雑な 複合的な、 合成物 脅迫概念 複合施設
1470,commonplace,平凡な つまらない 陳腐な、 平凡なこと 陳腐な言葉
1471,credit,信用 名誉 功績 クレジット (大学などの)単位、 ～を信じる
1472,prime,最も重要な 第一級の 主な 最初の
1473,splendid,豪華な 立派な
1474,burglar,泥棒 強盗
1475,conscience,良心
1476,guilt,罪 有罪 罪悪感
1477,arrest,～を逮捕する ～(の進行)を止める、 逮捕
1478,respect,点 細目 尊敬 重視 関心 関連、 ～を尊敬する ～を尊重する
1479,murder,～を殺害する、 殺人
1480,cheat,～をだます、 いかさまをする 不正をする、 不正行為 カンニング 詐欺師
1481,envy,～をうらやむ ～をねたむ、 ねたみ うらやむ気持ち
1482,insult,～を侮辱する ～をはずかしめる、 侮辱
1483,sorrow,悲しみ 後悔
1484,cheer,～を元気付ける ～にかっさいを送る、 元気を出す 歓声を上げる、 歓呼 励まし 喜び 元気
1485,confide,信頼する、 (秘密など)を人に打ち明ける ～を(～～～に)ゆだねる
1486,mercy,慈悲 親切 幸運 情け
1487,hostile,敵意のある 敵対的な 反感をもった 敵の
1488,hospitable,親切にもてなす 快く受け入れる 快適な
1489,grace,気品 優雅さ 好意 神の恵み 慈悲
1490,console,～を慰める
1491,bless,～を祝福する ～に恵みを与える
1492,grave,重大な 威厳のある 真面目な 厳粛な、 墓場
1493,rational,合理的な 理性的な
1494,radical,根本的な 急進的な 過激な
1495,eliminate,～を除去する ～を完全になくす ～を取り除く
1496,precise,正確な 明確な まさにその
1497,inevitable,避けられない 必然的な
1498,implicit,暗黙の
1499,feeble,弱々しい ひ弱な
1500,ugly,醜い 不快な けしからぬ
1501,rent,賃貸料 使用料 家賃、 ～を賃借りする ～を賃貸しする
1502,wage,(～s)賃金 給料
1503,promote,～を促進する ～を奨励する ～を昇進させる
1504,mechanical,機械的な 機械の、 メカニズム
1505,distribute,～を分配する ～を配布する ～を配送する
1506,corporation,企業 会社
1507,broadcast,～を放送[放映]する ～を言いふらす 吹聴する、 放送する、 放送された、 放送
1508,advertise,～を広告する ～を宣伝する ～を公にする、 広告 宣伝する 自己宣伝をする
1509,formidable,恐ろしい (仕事などが難しくて)手に負えない
1510,stink,悪臭がする (ひどく)臭い、 悪臭
1511,vulgar,下品な 粗野な 悪趣味の
1512,ambiguous,(色々な意味に取れる)あいまいな
1513,affirmative,肯定的な、 肯定 賛成
1514,fragile,壊れやすい もろい ひ弱な
1515,potent,力強い (薬などが)効力がある
1516,potential,可能な 潜在的な (発展、発達の)可能性がある、 可能性 潜在能力 潜在性
1517,stiff,堅い こわばった 断固とした 法外な
1518,capricious,気まぐれな
1519,ingenious,発明の才に富む 巧妙な 独創的な 利口な
1520,obstinate,頑固な しつこい
1521,mobile,動きやすい 移動可能な
1522,pedestrian,歩行者、 歩行者用の
1523,transition,推移 移り変わり 過渡期 変わり目
1524,emigrant,(他国への)移民
1525,migrate,移住する (鳥などが)渡る
1526,transplant,～を移植する ～を移動させる、 移植
1527,transmit,～を送る ～を伝える ～を伝染させる
1528,rush,急ぐ 急いでする、 (人)をせかす ～を急いでやる ～を突破、突進する、 あわただしさ
1529,excursion,遠足 団体の小旅行 脱線 逸脱
1530,locomotive,機関車
1531,yacht,ヨット クルーザー
1532,celebrate,～を祝う (人)を褒め称える ～を賛美する
1533,applaud,～に大きな拍手を送る
1534,collide,衝突する
1535,contend,争う 議論する、 ～を主張する
1536,opponent,(競技、討論などの)相手 敵 対抗者 反対者
1537,rival,競争相手 ライバル、 ～に匹敵する ～と互角に戦う
1538,strive,（～しようと）努力する
1539,revenge,～に復讐をする ～のあだを討つ、 復讐
1540,blunder,大失敗する、 大失敗
1541,avenge,～のあだを討つ
1542,humanity,人類 人間性 人間らしさ (the ～ies)人文科学
1543,humane,思いやりのある 人道的な
1544,err,誤りを犯す
1545,vice,悪徳 悪いこと、 (官職名の前につけて)副～ ～代理
1546,virtue,美徳 長所 (薬などの)ききめ
1547,bully,いじめ いじめっこ、 ～をいじめる
1548,abuse,～を誤用する ～を乱用する ～を虐待する、 虐待 乱用 誤用
1549,bias,偏見、 ～に偏見を持たせる ～に偏見をもたらす
1550,juvenile,青少年の 少年の、 少年 少女 青少年
1551,orphan,孤児
1552,amateur,素人 アマチュア、 未熟な アマチュアの
1553,compassion,おもいやり 哀れみ 同情
1554,charity,慈善(行為) 思いやり 慈善団体[基金] 慈善事業
1555,worship,～を崇拝する ～を賛美する、 礼拝に出る、 賛美 尊敬 崇拝
1556,animate,～を活気づける ～に生命を吹き込む
1557,cherish,～を大事にする ～を心に抱く ～を（ずっと）大事にする
1558,dedicate,～を捧げる
1559,enchant,～を魅了する ～に魔法をかける
1560,inspire,～を奮い立たせる ～を励ます ～に吹き込む ～に感動を与える
1561,allot,～を～に分配する ～を～に割り当てる ～を充当する
1562,ornament,装飾(品) 飾り
1563,metaphysical,形而上学的な きわめて抽象的な
1564,cottage,別荘 (郊外・田舎の)小さな家
1565,auditorium,講堂 公会堂 観客席
1566,cathedral,大聖堂
1567,corridor,(建物の)老化 通路
1568,ceiling,天井 (価格などの)上昇
1569,mess,混乱 取り散らかした状態、 ～を散らかす
1570,smash,～を粉々にする ～をバシッと打つ、 粉々になる 衝突する
1571,dispose,～を配列する ～を（～する）気にさせる
1572,transparent,透明な 見え透いた 明白な わかりやすい 率直な
1573,manifest,～を明らかにする ～を表す、 明らかな はっきりした
1574,illuminate,～を照明する ～を解明する
1575,eruption,噴火 発生 勃発
1576,comet,彗星
1577,barometer,気圧計 (世の中の動きなどを示す)指標 バロメーター
1578,gene,遺伝子
1579,germ,細菌
1580,worm,(ミミズなどの)虫
1581,botany,植物学
1582,cell,細胞 個室 (刑務所の)独房 電池
1583,stout,頑丈な しっかりした 太った 勇敢な
1584,prescribe,(薬、治療など)を処方する (規則など)を指示 規定する
1585,epidemic,伝染病の流行 (良くないことの)流行 蔓延、 (病気が)流行性の
1586,fiction,小説 フィクション 作り話 虚構
1587,conversation,会話
1588,article,記事 論文 品物 物 (契約などの)条件 冠詞
1589,pronounce,～を発音する ～を断言する ～を宣言する
1590,note,～に注意する ～に気づく ～に言及する ～を書き留める。 メモ 短い手紙 紙幣 注釈 記録 音符 (声の)調子
1591,mention,～だと述べる ～に言及する。 言及 軽く話題に触れること
1592,accent,なまり アクセント
1593,refer,言及する 参照する 調べる 呼ぶ。 ～に差し向ける
1594,tell,～を区別する ～を見分ける。 効く 影響する 効果がある
1595,translate,～を翻訳する ～を解釈する ～を(～～～に)移す
1596,utter,(言葉など)を発する ～を表現する。 全くの 徹底的な
1597,display,～を陳列する ～を示す ～を見せびらかす。 陳列 展示 (感情などを)表に出すこと
1598,art,芸術 美術 技術 こつ (～s)人文科学
1599,detail,細部 詳細 細かい部分
1600,confidential,内密の 機密の
1601,concrete,具体的な 有形の。コンクリート
1602,innumerable,無数の 数え切れないほどの
1603,exceed,～を超える ～より勝る
1604,exaggerate,～を誇張して言う
1605,savage,未開の 野蛮な 荒涼とした。野蛮人 野蛮な人
1606,curriculum,カリキュラム (学校の)教科課程
1607,concise,(言葉～文体などが)簡潔な
1608,bold,大胆な 怖いもの知らず ずうずうしい
1609,eccentric,常軌を逸した 一風変わった 変な
1610,insane,狂気の 正気ではない 非常識な
1611,charm,魅力 まじない お守り。～をうっとりさせる ～に魔法をかける ～を魅惑する
1612,perplex,～を当惑させる ～を悩ませる ～を複雑にする
1613,preoccupied,夢中になった 心を奪われている
1614,tedious,退屈な
1615,clumsy,(動作～態度などが)ぎこちない 不細工な (手先などが)不器用な
1616,sophisticated,洗練された 精巧な 教養のある
1617,lecture,講義 講演 説教。講義[講演]する。～に説教する
1618,letter,文字 手紙、 (～s)文字 学識
1619,poet,詩人
1620,vocabulary,語彙
1621,saying,ことわざ 格言 発言
1622,proverb,ことわざ 格言
1623,subject,主題 話題 教科 国民 家来 主語 被験者。 (～の)支配下にある (～に)かかりやすい (～を)受けやすい
1624,tale,話 物語
1625,thought,考え 思いつき 思想 思考 考えること 思いやり
1626,verbal,言葉の 言葉による 口頭の
1627,culture,文化 教養 洗練 耕作 栽培 飼育 芸術 文学
1628,prepare,～を用意する ～の支度(覚悟 心構え)をさせる ～を訓練する。準備する 覚悟する
1629,faculty,能力 才能 機能 (大学の)学部 教授陣
1630,particular,特定の 格別の 著しい 好みがうるさい 綿密な。個々の項目 (～s)詳細
1631,unexpected,思いがけない 不意の
1632,innovation,刷新 大発明 革命的な変化
1633,emerge,現れる
1634,abrupt,突然の ぶっきらぼうな
1635,burst,爆発する 突然始まる 破裂する。～を破裂[爆発]させる
1636,rouse,～を目覚めさせる ～を奮起させる
1637,coincide,一致する 同時に起こる
1638,dreadful,ひどい いやな 恐ろしい
1639,laborious,(仕事などが)骨の折れる 大変な 勤勉な 難解でおもしろくない
1640,fabulous,すばらしい
1641,unprecedented,先例のない 無比の
1642,prominent,有名な 卓越した 目立った 突き出た
1643,ripe,(果実などが)熟した 期が熟した 円熟した
1644,stern,厳格な 過酷な
1645,grim,きびしい 冷酷な 気味悪い
1646,vulnerable,傷つきやすい 攻撃されやすい
1647,nasty,不快な いやな 意地悪な 卑劣な
1648,folly,愚かさ 愚行
1649,respond,答える 反応する
1650,propose,～を提案する (～に結婚)を申し込む
1651,publish,～を出版する ～を発表する
1652,consider,～をよく考える ～を(～と)みなす ～をよく検討する ～を考慮する
1653,damage,損害 被害。 ～に損害(被害)を与える
1654,instruct,～に教える ～に指示する
1655,literal,文字通りの 文字の 正確な
1656,quest,探求。探し回る 追求する
1657,accurate,正確な 精密な 狂いのない
1658,school,学派 (魚などの)群れ 学校 専門学部。～を教育する
1659,scholar,学者
1660,philosophy,哲学 原理 人生観 考え方
1661,tone,音色 音調 調子 語調 気風 色合い。～をある調子にする
1662,alternative,二者択一 選択肢 代わりになるもの。新しい 型にはまらない どちらか一つを選ぶべき 代わりの
1663,sword,剣 刀 武力 権力 戦争
1664,fur,毛皮(製品)
1665,fluid,流動体。 流動体の 流動性の
1666,motive,動機 原動力となる
1667,wit,知力 機知 機転 ウィット 機知に富む人 機転のきく人 (～s)平静
1668,mental,心の 知的な 知能の 頭の中で考える 精神病の
1669,string,ひも 糸 一連 一列
1670,prosper,繁栄する 成功する
1671,bet,～を賭ける ～（という結果）に賭ける きっと～になると思う、 賭け
1672,controversy,論争 議論
1673,odds,(優劣などの)差 勝ち目 可能性
1674,triumph,勝利 大勝利、 勝利を得る 勝利を喜ぶ
1675,intent,熱中して 集中した、 意図 目的
1676,feat,偉業 妙技 芸当
1677,certificate,証明書 免許状
1678,toll,使用料 通行料 犠牲(者)
1679,tariff,関税 運賃 料金表
1680,fortnight,2週間
1681,climate,気候 風土 風潮
1682,humid,湿気の多い 湿った
1683,solar,太陽の 太陽光線を利用した
1684,crop,作物 収穫(量) ～を収穫する。(作物が)できる
1685,fuel,燃料
1686,technology,科学技術 科学的方法
1687,technique,技術 技法 手法 コツ
1688,tool,道具 工具 商売道具 手段
1689,way,道 進路 方向 付近 距離 やり方 方法 習慣 観点。ずっと はるかに
1690,architecture,建築学 建築物
1691,certain,ある(ひとつの[決まった]) 。 確信して (事が)確実な (～を)確信している
1692,manage,～を経営する ～を管理する ～を何とかやり遂げる まんまと～する
1693,sign,～に署名する ～に合図する。 符合 記号 しるし 兆候 身振り 合図 標識
1694,reserve,～を取っておく ～を予約する。蓄え 備蓄 遠慮
1695,preserve,～を保存する ～を保つ ～を保護する ～を保存加工する
1696,accommodate,～を宿泊させる ～を収容する ～をもてなす
1697,fatigue,疲労 疲れ。 ～を疲れさせる
1698,exhaust,～を疲れさせる ～を使い果たす
1699,drown,～を溺死させる。溺れ死ぬ ずぶ濡れになる
1700,soak,～を浸す ～をびしょぬれにする
1701,exhibit,～を展示する ～を示す (感情など)を表す[見せる]
1702,gangster,やくざ ギャング（の一人）
1703,corrupt,墜落した わいろのきく、 ～を墜落させる ～を買収する
1704,anguish,(精神的な)苦痛 非常な悲しみ
1705,torture,拷問 苦痛、 ～を拷問にかける ～をひどく苦しめる (言葉や経験)を曲解する
1706,gender,(社会的・文化的観点からの)性 性の差 性別 (文法の)性
1707,masculine,男性の 男らしい
1708,mortal,死ぬ運命にある 致命的な 人間の、 （～s）人間
1709,barbarian,野蛮な 未開の、 未開人
1710,radioactive,放射性の
1711,beverage,飲物(水を除くすべての飲み物[ジュース、コーヒー、アルコールなど])
1712,vapor,蒸気 実体のないもの
1713,bare,裸の むき出しの (物事などが)ありのままの ぎりぎりの 最低限の
1714,huge,巨大な 莫大な
1715,rough,ざらざらした 大ざっぱな おおまかな乱暴な
1716,thin,薄い 細い やせた まばらな 乏しい 水っぽい
1717,tight,きつい (予定などが)ぎっしり詰まった ケチな 厄介な 厳格な。 堅く しっかりと きつく 十分に
1718,tiny,とても小さな ごくわずかの
1719,thick,厚い 太い 込み合った (液体～気体が)濃い
1720,amount,総計 合計 総額 量 額。総額(～～～に)達する 結局(～～～に)なる
1721,brief,短時間の 簡潔な 簡単な。(人)に(状況などを)報告[発表]する 要約する。簡単な声明 要約
1722,smooth,なめらかな 順調な。～をなめらかにする
1723,deliberate,慎重な 意図的な 落ち着いた ゆっくりの。～を熟考する
1724,former,前の 以前の 前者の。(the～)前者
1725,pioneer,先駆者 開拓者。～を開拓する ～の先駆けとなる
1726,bearing,態度 関係 方向 忍耐
1727,reward,報酬 見返り 褒美。(人)に報いる ～に報酬を与える
1728,bother,～を困らせる ～に面倒をかける ～を悩ます。思い悩む 心配する。面倒 (a～)悩みの種
1729,forbid,～を禁止する ～に(～することを)禁じる
1730,privilege,特権 特典 名誉。～に特権を与える
1731,opportunity,機会 好機 チャンス
1732,rebel,反逆者 反抗者 謀反人。反乱を起こす 反抗する
1733,overwhelm,～を圧倒する ～を困惑させる
1734,trap,わな 策略、 ～を罠で捕らえる ～をだます ～を閉じ込める
1735,tact,こつ 機転 手触り
1736,stadium,スタジアム 球場
1737,estate,財源 (広大な)地所[屋敷]
1738,ecology,生態学 自然環境 エコロジー
1739,dwell,住む
1740,drought,干ばつ 日照り続き
1741,chilly,ひんやりとした (寒さで)ぞくぞくする
1742,souvenir,記念品 おみやげ
1743,lid,(箱・鍋などの)蓋 まぶた
1744,leather,革
1745,spirit,精神 霊魂 気迫 勇気
1746,species,種 種類 人類
1747,native,母国の その土地[土地]に生まれた 原産の。その土地で生まれた人 その土地の固有の動植物 原住民
1748,mankind,人類 人間
1749,alien,外国の 異質の ～になじみない ～と相容れない。外国人 宇宙人
1750,chemical,化学の 化学的な。化学薬品 薬品 化学物資 化学製品
1751,fashion,やり方 流行
1752,secretary,秘書 (米国)長官 (英国)大臣 書記(官)
1753,bank,土手 堤防 銀行
1754,address,あいさつ 演説 手際の良さ 住所 あて先。～に話しかける (心、注意力などを)～に注ぐ 向ける (問題など)に取り組む 解決のために努力する
1755,necessary,必要な 必然的な
1756,essential,不可欠の 本質的な。本質的要素
1757,imply,～を暗に意味する ～をほのめかす
1758,suggest,～を提案する ～をほのめかす ～を連想させる
1759,tidy,きちんとした きれい好きな 満足な (収入～仕事が)なかなかよい
1760,alter,～を変える
1761,adjust,～を適合させる ～を調節(調整)する (環境など)に慣れる。(～に)順応 適応する 慣れる
1762,superstition,迷信 偶像礼拝
1763,formula,公式 (決まった)方法 処方
1764,breed,(家畜など)を繁殖させる。繁殖する。(動植物の)品種
1765,bloom,(花が)咲く 栄える。(鑑賞用の)花 輝き 色つや 最盛期
1766,blossom,(果樹の)花が咲く 繁栄する 開花する。(食用果樹の)花 開花
1767,oppression,圧迫 圧制 圧迫感
1768,restrain,～を抑える ～に（・・・するのを）やめさせる
1769,reproach,～を非難する、 非難 叱責
1770,distort,(顔や事実など)をゆがめる （ものなど）をねじる
1771,alcohol,酒 アルコール
1772,stale,(食物などが)新鮮でない (表現などが)陳腐な
1773,appetite,食欲 欲求
1774,ingredient,原材料[中身] 成分 要素
1775,fossil,化石の、 化石
1776,erosion,浸食
1777,weed,雑草 役に立たない人(物)、 (雑草)を抜く ～を取り除く
1778,strict,厳格な 厳密な 全くの 完全な
1779,fair,公平な 公正な まあまあの かなりの 美しい 色白の 好天の。品評会 博覧会
1780,maximum,最大限 最高。最大限[最高]の
1781,plain,はっきりした 明らかな わかりやすい 質素な 簡素な。 平原 平野
1782,broad,広い 広範囲に及ぶ 大まかな
1783,immense,巨大な 莫大な
1784,largely,主として 大いに
1785,rare,まれな 珍しい すばらしい
1786,slight,わずかな ほっそりした 取るに足らない。侮辱
1787,sufficient,十分な
1788,so-called,いわゆる 世間でいう
1789,biology,生物学 生態
1790,atom,原子
1791,mosquito,蚊
1792,lightning,稲妻
1793,nuclear,核の 原子力の 核兵器の 中心の。核兵器
1794,ray,光線 輝き ひらめき
1795,satellite,衛星 人工衛星 衛星国家
1796,forecast,(天気など)を予報する。予報 予測
1797,soil,土 土地 土壌
1798,tide,潮(の干満) 傾向 流れ 栄枯盛衰 絶頂期 最悪時
1799,wicked,邪悪な いたずらな とてもひどい
1800,cunning,悪賢い ずるい、 ずるさ
1801,wretched,みじめな 哀れな
1802,random,でたらめの 手当たり次第の
1803,crude,天然のままの 大雑把な
1804,dreary,わびしい 退屈な
1805,tranquil,静かな 穏やかな 平静な
1806,exotic,めずらしい 異国風の 魅惑的な
1807,solemn,厳粛な 真面目な
1808,serene,(海・空などが)おだやかな 落ち着いた
1809,meager,やせた (質や量が)貧弱な (作品などが)無味乾燥な
1810,pollution,汚染、汚れ；公害
1811,wound,～を傷つける、～にけがを負わせる
1812,unfortunately,不幸にも、あいにく
1813,trouble,心配、苦労；迷惑、災難；短所；紛争、騒ぎ；病気；故障、不調
1814,tolerate,～を寛大に扱う；～を大目に見る；～に耐える
1815,survive,生き残る、なんとかやっていく
1816,suffer,（苦痛・損害など）を受ける
1817,flood,洪水、（人・物の）殺到、氾濫
1818,disaster,災害、惨事
1819,safe,安全な、確実な
1820,save,～を救う；～をたくわえる；～を省く；～を節約する；～をとっておく；～を保護する
1821,puzzle,～を困らせる；～を当惑させる
1822,shade,陰；（明暗、濃淡の）度合い；わずかな違い；微量
1823,vivid,鮮やかな、強烈な、はっきりした；生き生きとした
1824,reveal,～を明らかにする、（隠れているもの）を見せる、～を示す
1825,glow,（熱で）赤くなる、輝く
1826,grieve,深く悲しむ、嘆き悲しむ
1827,gloomy,憂鬱な、薄暗い
1828,fade,（色が）あせる、（音などが）消えていく、（花などが）しぼむ
1829,expose,～を暴露する、～をさらす
1830,wreck,破損；残骸；難破（船）
1831,torment,～をひどく苦しめる；～の意味をねじ曲げる
1832,execute,～を実行する、～を実際に行う；（人）を処刑する
1833,breakdown,故障；（精神的、肉体的な）衰弱；（交渉などの）決裂
1834,optimism,楽観主義、楽観
1835,pessimism,悲観（主義）；悲観論
1836,monotonous,単調な、退屈な
1837,dismal,気の滅入る、憂鬱な、陰鬱な、（気分的に）暗い
1838,dim,薄暗い；ぼやけた、おぼろげな
1839,terrorism,テロ行為；恐怖政治、恐怖状態
1840,ambivalence,相反［矛盾］する感情；両面価値
1841,skeptical,懐疑的な
1842,delay,～を遅らせる；～を延期する
1843,evolve,～を発展させる
1844,haste,急ぐこと、あわてること
1845,overnight,一晩で；一晩中；急に、突然
1846,period,期間；時期 、時代；ピリオド；授業の時限；月経（期間）
1847,rapid,急速な、速い
1848,permanent,（半）永久的な、永続する、耐久の；常置の、終身の
1849,postpone,～を延期する、～を後まわしにする
1850,present,（叙述用法）出席している、存在している；（限定用法）現在の
1851,term,学期、任期、期間；言葉、専門用語；条件、料金；(～s) 関係、仲
1852,suspend,～をつるす；～を一時的に中止する；～を停職（学）にする；～を保留する
1853,refrain,（～を）差し控える、慎む
1854,interrupt,～の邪魔をする、～に割り込む、～を中断する、
1855,hesitate,ためらう、躊躇する
1856,compromise,妥協（すること）、妥協案；歩み寄り
1857,divine,神の、神のような
1858,disturb,～をかき乱す、～を妨害する、～の邪魔をする
1859,awful,恐ろしい；おぞましい、ひどい
1860,awkward,不器用な；落ち着かない；やっかいな、扱いにくい、ぎこちない
1861,sustain,～を支える；～を維持する；（重さ・苦難など）に耐える；（害）を被る
1862,cautious,注意深い；用心している
1863,sanction,制裁（措置）；（法的）認可
1864,sober,酔っていない；節度のある; 真面目な
1865,sin,（宗教、道徳上の）罪
1866,pious,信心深い、敬虔な
1867,ethics,倫理学（観）；道徳（律）
1868,dogmatic,独断的な、（宗教などの）教義上の
1869,curse,のろい；ののしり言葉；災いのもと
1870,contempt,軽べつ
1871,linger,ぐずぐずする、なかなかなくならない、長引く、いつまでも物思いにふける
1872,sullen,むっつりした；（天気などが）陰気な
1873,nuisance,迷惑な行為や人；神経をいらいらさせる人（物）
1874,treasure,財宝、富、財産；貴重品；大事な人
1875,company,同席すること；仲間；来客；会社
1876,worldwide,世界的な
1877,wildlife,（集合的に）野生生物
1878,well,井戸；源泉；油井；くぼみ
1879,universal,普遍的な；全員の；万能の；宇宙の；世界中の
1880,planet,惑星；（our ～）（私たちの住む惑星）地球
1881,settle,定住する；落ち着く；沈む
1882,rural,田舎の；農村、田園の
1883,typhoon,台風
1884,tropical,熱帯の；熱烈な
1885,estimate,見積もり、見積もること
1886,assume,～を想定する；～を引き受ける；～を当然だと思う；～を装う;～の態度をとる
1887,witness,～を目撃する；～を証言する
1888,stable,安定した、しっかりした
1889,mission,任務、使命；使節団；伝道、布教
1890,assure,～を保証する；～に確信させる
1891,mine,鉱山；（知識などの）宝庫
1892,crew,乗組員、乗務員；一団
1893,coin,（新語など）をつくる；（硬貨）を鋳造する
1894,client,依頼人；（知的サービスを受ける）客
1895,drift,漂流する
1896,emission,（ガス・熱・光などの）排出、放出
1897,chore,日常の雑事、日課、つまらない仕事；（～s）毎日の決まりきった仕事
1898,nightmare,悪夢、恐ろしい出来事
1899,doom,～を運命づける
1900,cradle,ゆりかご；（the～で）幼年時代
1901,revive,生き返る；意識が回復する；よみがえる
1902,posterity,後世（の人々）；子孫
1903,ban,（法律などで）～を禁止する
1904,obsolete,すたれた、時代遅れの、古くさい
1905,bump,（ドンと）ぶつかる；（人に）ばったり会う
1906,delusion,妄想、錯覚；欺くこと
1907,apparent,［通常、叙述用法で］明白な；［通常、限定用法で］見たところ～らしい
1908,differ,異なる、意見が合わない、違う
1909,frank,率直な
1910,misleading,人の判断を誤らせる、誤解を招きやすい、まぎらわしい
1911,horrible,恐ろしい、身の毛のよだつような、ひどく不快な
1912,severe,厳しい、ひどい、厳格な
1913,value,価値（観）；重要性
1914,useless,役に立たない、無駄な；劣っている
1915,clear,澄んだ、晴れた；明らかな；はっきりした；確信した；妨げるものがない
1916,capable,（～することが）できる［能力がある］；有能な
1917,remove,～を取り除く；～を移動させる；～を脱ぐ；～を解任する、～を解雇する
1918,stream,小川；流れ
1919,roll,転がる；進む、走る
1920,assign,～を割り当てる；～を任命する
1921,suppress,～を抑える、～を鎮める；（笑いなど）を我慢する
1922,abstain,控える；棄権する (共にabstain fromの形で用いる）
1923,regulate,～を規制する；～を調整する
1924,confine,～を（...に）制限する；～（人）を（自由がきかない所に）閉じ込める
1925,resign,～を辞職する、～を断念する；～を放棄する；～に甘んじて従う
1926,restrict,～を制限する；～を（...に）限定する
1927,strain,緊張（状態）、負担；過労
1928,intrude,押し入る、入り込む；侵害する
1929,distract,～の気をそらす
1930,barrier,障害；防壁
1931,tuition,授業料；指導、教授
1932,fee,謝礼、料金
1933,digit,数字
1934,circulation,循環；流通；発行部数；（情報などが）広まること
1935,bankrupt,倒産した
1936,renounce,～を放棄する；～を絶交する
1937,obstruct,～を妨害する、～をふさぐ、～をさえぎる
1938,scene,場面；現場；眺め、光景；大騒ぎ
1939,typical,典型的な；特有の
1940,similar,類似した
1941,imitate,～を真似する、～を模倣する
1942,irrigation,灌漑（かんがい）
1943,desert,～を見捨てる
1944,sterile,不妊の；不毛の；殺菌した
1945,condition,状況；状態；条件
1946,circumstance,（周囲の）状況、事情；（経済的な）生活状態；（人の）境遇；生活事情
1947,wheat,小麦
1948,taste,味、味覚；好み、趣味
1949,clue,（問題などを解く）手がかり
1950,abstract,抽象的な
1951,gratitude,感謝の気持ち
1952,victim,犠牲者、被害者；えじき、いけにえ
1953,toil,骨折り仕事；苦労
1954,threat,脅迫、脅かすもの；（悪い）きざし
1955,suicide,自殺
1956,rescue,救助、救出
1957,up-to-date,現代的な；最新の
1958,temporary,一時の、つかの間の、仮の
1959,ultimate,究極（的）の；最終（的）の；最高の
1960,sometime,いつか、そのうち
1961,ruthless,情け容赦のない；毅然とした
1962,momentary,瞬間的な；つかの間の
1963,durable,長持ちする、耐久力のある
1964,convenient,（ものなどが）便利な；都合のよい；（場所などが）便利な；（駅などに）近い
1965,assent,賛成する
1966,disarm,～の武装解除をする；～を無力にする
1967,confound,～を困惑させる；～を混同する
1968,humility,謙遜
1969,grumble,不平を言う
1970,countenance,顔つき、容貌；落ち着き、平静
1971,prevent,～を防ぐ；(～が...するの）を妨げる
1972,remark,～と述べる；～に気づく、～に注意する
1973,recognize,～を認める；～に覚えがある；～が誰だかわかる；～を表彰する
1974,apply,～を適用する、～を応用する；（薬や化粧品など）を塗る
1975,care,（否定文、疑問文、条件文で）いやと思う；気にかける；（～を）気にする
1976,inform,～に知らせる
1977,comfort,快適さ；慰め；慰めをあたえてくれるもの［人］；安らぎ
1978,express,はっきりした；急行の、速達便の
1979,civilization,文明；文明化；文化的生活
1980,audience,聴衆、視聴者、聴衆者、読者
1981,delicate,繊細な、かよわい；（問題などが）微妙で扱いにくい；思いやりのある
1982,dead,まったく、突然、すっかり
1983,deceased,（the～）故人
1984,somebody,重要人物；大した人物、大物
1985,oppose,～に反対する；～を（～に）対立させる
1986,excel,より勝る、秀でている、卓越する
1987,defect,欠点、欠陥
1988,mature,大人の、成熟した；（果実などが）熟した
1989,flee,～から逃げる
1990,apologize,謝る、謝罪する
1991,scold,～を叱る
1992,ape,猿、類人猿
1993,anthropology,人類学
1994,adolescence,青春期［時代］、思春期；発展期
1995,contrive,～を考案する；～をたくらむ
1996,undergo,（不愉快なこと、苦しいこと）を経験する、（検査、治療など）を受ける
1997,stumble,つまずく、よろける；偶然出くわす
1998,speculate,推測する、熟考する；投機をする
1999,insure,～に保険をかける；～を保証する
2000,refrigerator,冷蔵庫
2001,pastime,気晴らし；娯楽、趣味
2002,fuss,騒ぎ立てる、ちやほやする、やきもきする
2003,throng,群衆、多数の人々
2004,questionnaire,アンケート（用紙）
2005,collect,～を集める（収集する）
2006,ready,準備ができて；喜んで［進んで］～する；即座の、巧みな
2007,hinder,～を妨げる、～の邪魔をする
2008,indicate,～を指し示す；～を明らかにする；～をほのめかす
2009,picture,イメージ；生き写し；絵；写真；映画
2010,suspect,～を怪しいと思う、～を疑う；（～だ）と思う；～に容疑をかける
2011,suppose,～だと思う、～だと仮定［推測］する；もし～だとしたら
2012,viewpoint,観点、立場；見える地点
2013,view,眺め、風景；視野、視界；意見、考え、意図；見通し；視力、視覚
2014,warn,～に警告する；～に通知する
2015,lend,（物・金・力など）を貸す
2016,per,～あたり、～につき
2017,borrow,～を借りる；（言葉など）を取り入れる；（もの）を（無料で）借りる
2018,singular,非凡な、まれにみる；単数の；別々の
2019,spell,（活動や天候の）期間、短い時間；呪文、魔法
2020,injure,～を傷つける、～に害を与える
2021,frighten,～をおびえさせる、～をびっくりさせる
2022,cynical,冷笑的な；皮肉な
2023,prey,えじき；犠牲
2024,flame,炎、激情
2025,reportedly,伝えられるところでは
2026,issue,～を発行する、（命令など）を発する；（政府などが）～を支給する
2027,retire,退職する；引き下がる；床につく
2028,scorn,～を軽蔑する
2029,riddle,謎、不可解なもの［人］
2030,prophecy,予言、預言
2031,outlook,眺望；見通し；見解、態度
2032,foretell,～を予言する
2033,foresee,～を予測する
2034,anticipate,～を予想する、～を予期する；～を楽しみにして待つ
2035,aviation,航空（学）
2036,pregnant,妊娠している；意味深長な、含蓄のある；～で満ちた
2037,carve,～を彫る；（運・人生など）を切り開く
2038,fulfill,～を果たす、（要求・目的）に添う、（要求など）を満たす
2039,deny,～を否定する、～を（...に）与えない
2040,approve,～に賛成する、～を是認する、～を承認する、～を認める
2041,punish,～を罰する
2042,alarm,～をはっとさせる；～を不安にさせる
2043,adapt,～を適応、順応させる
2044,fault,欠点；責任
2045,policy,政策、方針；手段；保険証書
2046,common,共通の；ありふれた；公共の；共有の
2047,community,地域社会；（利害などを共にする）共同社会、集団
2048,class,階級；階層；クラス；授業
2049,role,役割、任務；（役者の）役
2050,slave,奴隷
2051,electric,電気の、電動の
2052,phenomenon,現象；驚くべき事（物、才能、人）
2053,scheme,計画；たくらみ、陰謀
2054,timber,材木；森林
2055,tissue,（細胞からなる動植物の）組織；ティッシュペーパー
2056,commerce,商業；貿易；通商
2057,item,（ニュースなどの）ねた、記事；品物；品目、項目、箇条
2058,fundamental,基本的な、根本的な、抜本的な
2059,modernization,近代化、現代化
2060,creed,信条
2061,notorious,悪名高い；悪いことでよく知られた
2062,bald,（頭が）はげた、（木が）葉のない；味けのない、ありのままの
2063,resort,（手段に）訴える；（楽しい所へ）しばしば行く
2064,pension,年金、恩給
2065,output,生産高；（コンピューターなどの）出力
2066,classify,～を分類する
2067,immune,免疫のある、（～を）免れた
2068,vessel,容器、器；大型の船；（血）管
2069,blast,爆発；突風
2070,solve,（問題など）を解く、～を解決する
2071,grade,等級；学年；成績
2072,literate,読み書きのできる、教養のある、文学に通じた
2073,acknowledge,～を認める
2074,absurd,ばかげた、滑稽な； 不合理な
2075,aim,＜人が＞～することを目指す；狙う
2076,evidence,証拠、（事実を示す）形跡
2077,evident,明白な、明らかな
2078,specific,具体的な、明確な；特定の
2079,latter,後の方の；（時間的に）後半の～；後者の～
2080,frequent,たびたびの、頻繁に起こる
2081,contemporary,現代の；同時代の
2082,continue,～を続ける
2083,date,日付、デート
2084,reflect,熟考する、回想する
2085,misery,悲惨さ；苦痛、苦難；惨めさ、不幸
2086,blank,白紙の；無表情な；空白の
2087,odd,変わった；片方の；奇数の；端数の；少しの；臨時の
2088,perceive,～を（五感で）知覚する；～に気づく；～を理解する
2089,release,～を解放する；～を放つ；～を公開する；～を発売する
2090,attribute,～のせいにする；（作品など）を（...の）手によると考える
2091,invade,～に侵入する、～を侵害する
2092,fierce,どう猛な、激しい；厳しい
2093,trifle,くだらない物；少量
2094,outlet,出口；（感情などの）はけ口
2095,outcome,結果、成果
2096,embark,着手する；乗船する
2097,breakthrough,（科学上の）大発見；突破口
2098,birthrate,出生率
2099,compartment,区画；（鉄道の）仕切り客室
2100,abortion,（妊娠）中絶
2101,orbit,軌道、行路；範囲
2102,individual,個人的な、個々の、特有の、個性的な
2103,rumor,噂、風評
2104,ring,（鐘・ベル・電話などの）鳴る音、電話をかけること；指輪、輪
2105,occasion,場合、時；出来事；機会；行事、式；（～をする）理由、根拠
2106,lot,くじ；運命；区画；ひと山；（～な）やつ；たくさんのこと
2107,folk,人々；家族
2108,admire,～を賞賛する；～に感嘆する
2109,attract,～を引きつける、～を魅了する
2110,attach,～をくっつける、取り付ける；～に愛着を持たせる
2111,acquire,～を獲得する；～を習得する
2112,book,～を予約する
2113,tendency,傾向、風潮
2114,trend,傾向；流行
2115,upcoming,今度の、近づく、やってくる
2116,emergency,非常事態、緊急事態
2117,greed,どん欲、どん欲さ
2118,prospect,候補者；(～s)（成功する）見込み；将来性；可能性
2119,shrine,神社、祭壇
2120,emphasize,～を強調する、～に重点を置く
2121,contemplate,～を熟考する；～をじっと見つめる；～をよく考える
2122,predict,～を予言する；～と予測する
2123,notice,～に気づく；～に通知（通告）する；～に言及する
2124,resume,～を再び始める；～を取り戻す
2125,detect,～を見抜く、～を見つけ出す
2126,fetch,～をとってくる
2127,coerce,～を強制する
2128,undertake,～を引き受ける；～をはじめる
2129,partake,参加する；（～の）性質がいくぶんある
2130,grant,～を認める；～を与える、～をかなえる
2131,petrol,（イギリス用法）ガソリン
2132,dignity,威厳、気品、尊厳
2133,induce,～を説いて...する気にさせる；～を誘引する；～を帰納する
2134,bid,～に命令する；（競売、入札などで）値を付ける
2135,recommend,～を推薦する; ～に（～することを） 勧める
2136,permit,～を許す
2137,fail,～を怠る、～に役立たない；（試験など）を落とす
2138,expect,～を予期する；～を期待する；～だろうと思う
2139,achieve,～を成し遂げる；～を獲得する
2140,proper,適切な、ふさわしい；正式の；礼儀正しい
2141,objective,客観的な
2142,fruitful,実りの多い、有益な；肥沃な
2143,voyage,船旅、航海；人生行路
2144,wheel,車輪；（自動車の）ハンドル
2145,change,つり銭、小銭；変化；変更
2146,accomplish,～を成し遂げる；～を達成する
2147,faith,信頼、信用；信仰；誓約
2148,element,要素；元素；（the～sで）自然の力；少量、気味
2149,union,労働組合；結合、団結；一致；連邦
2150,calculate,～を計算する；～を予想する；～と判断［推定］する
2151,device,装置、工夫、道具；策略
2152,stroll,ぶらつく、散歩する、放浪する
2153,accessory,アクセサリー；装飾品；付属品
2154,leisure,余暇、自由時間
2155,enterprise,事業；企業；進取の気性
2156,quality,質、質の良さ；特性、特質
2157,qualify,～に資格を与える
2158,leak,漏れる
2159,dismay,～を狼狽させる、～を失望させる
2160,dissuade,～に（...することを）思いとどまらせる
2161,ensure,～を保証する、～を確保する、～を確実にする
2162,entitle,（人）に資格を与える、～に権利を与える；～に表題を付ける
2163,obscure,あいまいな、不明瞭な；無名の；人目に付かない、よく聞き取れない
2164,sacrifice,犠牲、いけにえ［捧げ物］
2165,confirm,～を確かめる；～（意見など）を（さらに強く）固める
2166,bestow,～を授ける、授与する
2167,install,（装置など）を取り付ける；～を任命する
2168,lumber,材木
2169,sour,すっぱい；不愉快な、気むずかしい
2170,confuse,～を混同する；～を当惑させる
2171,calm,（天候・海などが）穏やかな；（人・態度などが）冷静な
2172,ache,痛み
2173,ease,容易さ、気楽さ
2174,conscious,意識している；意識のある；意識して；気づいている；～に対する意識が高い［強い］；～を気にする；意識的［意図的］な
2175,earnest,まじめな、熱心な
2176,brave,勇気のある；勇敢な
2177,method,（組織だった）方法；筋道、体系、秩序
2178,manner,態度；方法、やり方；流儀、作風；（～s）行儀、作法；（～s）風習
2179,medium,中間；媒体、手段、方法；（複数形mediaで）報道機関、マス・メディア
2180,means,（単・複数扱い）手段、方法；（複数扱い）(生活手段としての）財産、収入
2181,correspond,一致する；相当する；文通する
2182,neglect,～を無視する、～を怠る；～に十分な世話をしない
2183,ascertain,～を確認する、～を確かめる
2184,prompt,～を促す、～を刺激する
2185,passive,消極的な、受け身の；言いなりになる；おとなしい
2186,pour,～を注ぐ；（言葉など）を浴びせる；～をどっと出す
2187,remedy,治療；改善策、方法
2188,elaborate,入念な、凝った
2189,guarantee,～を保証［約束］する
2190,commute,通勤、通学する
2191,fare,（交通機関の）運賃、料金
2192,reckon,～を計算する、～を（...だと）考える、～と推測する
2193,embarrass,～を当惑させる、～を困らせる、～に恥ずかしい思いをさせる
2194,distress,苦悩；貧困
2195,devote,～を捧げる、～を費やす
2196,detest,～をひどく嫌う
2197,betray,（秘密など）をもらす；～を裏切る；～が表情（表）に出す
2198,ponder,～を熟考する、～を（するかどうか）あれこれ考える
2199,sociology,社会学
2200,ideology,（政治的・社会的な）思想、イデオロギー
2201,asset,財産；貴重なもの
2202,subscribe,～を寄付する；～に署名する；予約購読する`,
  },
  {
    id: 'chimera',
    name: 'キメラ',
    csv: `番号,単語,意味
1,abandon,放棄する、あきらめる、捨てる
2,abdominal,腹部の、腹筋
3,abhor,忌み嫌う、憎悪する
4,ability,能力
5,able,できる、有能な、能力のある
6,abnormality,異常（性）
7,abolish,廃止する、撤廃する
8,aboriginal,原生の、先住の、アボリジニの
9,abort,中止する
10,abortion,妊娠中絶
11,abound,豊富である、～で満ちている
12,above,上(方)に、前述の
13,abridged,簡約[短縮]された
14,abroad,海外へ，海外で
15,abrupt,突然の、ぶっきらぼうな
16,abruptly,不意に、突然
17,absence,不在、欠席
18,absent,欠席して
19,absolute,絶対的な、完全な、全くの
20,absolutely,まったく、[返事]まったくその通りだ、絶対に
21,absorb,吸収する、夢中にさせる、理解する
22,absorption,没頭(in)、吸収
23,abstain,慎む
24,abstract,抽象的な
25,absurd,ばかげた、不合理な
26,abundance,豊富。大量
27,abundant,豊富な、～に富む
28,abuse,乱用(する)、虐待(する)、誤用(する)
29,academic,学問の、学究的な、学園の、大学（教育）の
30,academy,（大学などの）高等教育機関、専門学校
31,accelerate,加速させる、促進する、加速する
32,accent,なまり、アクセント
33,accept,受け取る、受け入れる、認める
34,acceptable,受け入れられる、容認できる
35,acceptance,受諾、受け取り
36,access,利用、入手、接近（の機会・方法・権利）、アクセスする
37,accessory,補助的な、付随する、[複]付属品
38,accident,(偶然の)事故、事件； 偶然
39,accidental,偶然の、過失による
40,accidentally,誤って、うっかり、偶然にも
41,acclaim,賞賛する
42,accommodate,収容する、宿泊させる、適応させる
43,accommodation,(<米>―s)宿泊施設
44,accompany,同行する、一緒に行く、随して起こる
45,accomplish,成し遂げる、達成する
46,accomplishment,完成、業績
47,accord,"一致、合意、協定、一致する, 調和する"
48,according,（according to）～に一致して、～に従って、～によれば
49,accordingly,それに応じて、それ相応に、したがって
50,account,占める、説明する、原因となる、説明、勘定、口座
51,accountable,（説明する）責任がある、説明可能な、理解できる
52,accounting,経理、会計(学)
53,accumulate,蓄積する、集める、積もる
54,accuracy,正確さ、精度
55,accurate,正確な、精密な、狂いのない
56,accusation,非難、告訴
57,accuse,訴える、非難する
58,accustom,（人）を慣れさせる
59,accustomed,慣れている
60,ache,痛む、切望する
61,achieve,達成する、成し遂げる、獲得する
62,achievement,学業（成績）、業績、達成
63,acid,酸、酸性の、酸味の、批判的な
64,acknowledge,（事実など）を認める、に謝意を表す
65,acknowledgment,感謝（のしるし）、承認、白状
66,acoustic,音響の、聴覚の、（楽器が）アコースティックの
67,acquaint,(詳しく)を知らせる、を知り合いにさせる
68,acquaintance,知人、知り合い、面識、知識、交際
69,acquainted,知り合いである
70,acquire,獲得する、習得する
71,acre,エーカー（約4047㎡)
72,act,行動する； 行動； 法令
73,activate,を活性化する、を作動させる
74,active,積極的な、能動的な、活動している、有効な
75,actively,積極的に、活発に
76,activist,活動家
77,activity,活動
78,actual,実際の、現実の
79,actualization,実現化
80,actually,実際に、（意外だが）実は、本当は
81,acute,鋭い、激しい、急性の
82,ad,広告
83,adapt,適応する、を（～に）適応させる（to）
84,adaptable,適応性のある、順応できる
85,adaptation,順応、適応
86,adaptive,適応性のある、適応できる
87,add,加える、付け加えて言う
88,addict,中毒患者、〔受身で〕（～の）中毒になる
89,addicted,中毒である
90,addiction,中毒、熱中
91,addictive,依存性の、中毒性の
92,additional,追加の、付加的な
93,additive,添加物
94,address,演説する、話しかける、取り組む、住所、演説、あいさつ
95,adept,（at ～）（～に）熟練した
96,adequate,十分な、適切な
97,adhere,くっつく、粘着する、固執する
98,adhesive,接着剤
99,adjective,形容詞、形容詞の
100,adjust,適応させる、適応する
101,administer,管理する、運営する
102,administration,管理、経営、運営、行政、政府、政権
103,admirable,賞賛に値する、素晴らしい
104,admiration,感嘆、賞賛
105,admire,賞賛する、感心する
106,admission,入場料
107,admit,認める、入場を認める
108,admittedly,明らかに
109,admonish,注意する
110,adolescent,青年、青年期の
111,adopt,採用する、（態度など）をとる、養子にする
112,adorable,非常にかわいい[いとしい]
113,adore,あこがれる、慕う、崇拝する
114,adrenalin,アドレナリン
115,adrift,漂って、目的を失って
116,adult,大人； 大人の
117,advance,進歩、前進、進歩させる（する）
118,advanced,進歩した、前進した、上級の
119,advantage,利益、利点、優勢、有利な立場
120,advent,出現、到来
121,adventure,冒険
122,adverse,逆の、不都合な、不利な、有害な、敵対的な
123,advertise,広告する、宣伝する、公にする
124,advertisement,広告
125,advertising,宣伝、広告
126,advise,忠告（助言）する
127,adviser,助言者、顧問、アドバイザー
128,advocate,主張する、唱える、支持する、支持者、主張・提唱者
129,aerospace,航空宇宙
130,aesthetic,美的な、美学の
131,affair,出来事、問題、仕事、（～s）事情
132,affect,影響を与える、～のふりをする、～を愛用する
133,affection,愛情
134,affectionate,愛情のこもった、やさしい
135,affiliate,を提携させる、を合併する
136,affirm,肯定する、断言する、肯定する、断言する
137,affirmative,肯定的な、肯定、賛成
138,afflict,(通常受動態で)を悩ませる、を苦しめる
139,affluent,（経済的に）豊かな、裕福な、おびただしい、豊富な
140,afford,（～を持てるだけの経済的）余裕がある、～を与える
141,affordable,手頃な、安価な
142,afterward,その後で、後に
143,age,年齢、年代、老年、（歴史上の）時代、年を取る
144,aged,年老いた
145,agency,機関、代理店
146,agenda,協議事項（リスト）、議事日程（表）、（政治上の）課題
147,agent,代理人、行為者、薬剤、（反応・変化を起こす）力
148,aggravate,悪化させる
149,aggression,攻撃性、侵略
150,aggressive,攻撃的な、けんか腰の、積極的な
151,aggressively,攻撃的に、積極的に
152,aging,高齢化が進む、老朽化している
153,agitate,動揺させる；先導する
154,agitation,動揺、興奮、扇動
155,agonize,苦悶する
156,agony,(心身の)苦痛、苦悩
157,agree,同意する、賛成する、合う
158,agreeable,好みに合う、感じのよい、同意する、ふさわしい
159,agricultural,農業の
160,agriculture,農業、農学、畜産
161,ahead,前方へ（に）、事前に、出世して
162,aid,支援、救援（物資）、を援助する、助けとなる
163,aim,目的、目標にする、狙う、努力する（to do）
164,aimlessly,当てもなく
165,air,空気、空中、様子、（複数）気取り
166,aircraft,航空機
167,airline,定期航空路、航空会社
168,aisle,(座席間などの)通路
169,akin,同様の、同種の、類似した
170,alarm,恐れ、目覚まし時計、警報、を驚かせる、不安にさせる
171,alarming,驚くべき、心配な
172,alcohol,酒、アルコール
173,alcoholic,アルコールの
174,alert,油断のない、警戒を怠らない、機敏な、注意を呼びかける
175,algae,藻、藻類
176,algebra,代数（学）
177,algorithm,アルゴリズム、問題解決の手順
178,alien,外国の、異質の、～と相容れない、外国人、宇宙人
179,alienate,遠ざける
180,align,を一直線に並べる
181,alignment,整列
182,alike,同様の（に）、似ている
183,alive,生きて、元気で
184,allegation,申し立て
185,allege,主張する
186,allegedly,伝えられるところによると
187,allergy,アレルギー
188,alleviate,軽くする、軽減する
189,alliance,同盟、提携
190,allied,連合の、同盟を組んだ
191,allocate,割り当てる、分配する
192,allot,分配する、割り当てる、充当する
193,allow,許す、認める、考慮に入れる（for）
194,allowance,小遣い、手当、許可
195,ally,同盟者〔国〕、結びつく、連合する、同盟する
196,almost,ほとんど
197,alone,1人で、（名詞＋alone）～だけ
198,alongside,横に、～と並んで、～と一緒に
199,aloof,離れて、よそよそしくて
200,aloud,声に出して
201,alter,変える、変わる
202,alteration,変更
203,alternate,代わりの、交互の、交替する、交互に現れる、交互にする
204,alternative,代替手段、選択肢、二者択一の、代わりの
205,although,…だが、…にもかかわらず
206,altitude,高度、標高、海抜
207,altogether,完全に、全く、要するに、合計して
208,altruism,利他主義
209,amateur,アマチュア、素人、未熟な、下手な
210,amaze,びっくりさせる、驚かせる
211,amazing,驚くべき
212,ambassador,大使、代表、使節
213,ambiguous,あいまいな、両義にとれる
214,ambition,願望、野望、野心
215,ambitious,大望を抱いた、熱望している、野心的な
216,ambivalent,矛盾する、相反する、どちらか決めかねて
217,ambulance,救急車
218,amend,修正する、改正する
219,amendment,改正、修正
220,amenity,生活を快適にするもの
221,amicable,友好的な
222,ammunition,弾薬
223,amnesty,恩赦
224,amount,量、合計、総額、総計～に達する、～に等しい
225,amphibian,両生動物；両生類の
226,ample,十分すぎるほどの、豊富な、広い、広大な
227,amplify,増幅する
228,amputee,切断手術を受けた患者
229,amuse,おもしろがらせる、楽しませる
230,amusement,娯楽、面白さ
231,analogy,類推、類似、類似点
232,analysis,分析（結果）、解明
233,analyze,分析する
234,anarchy,無秩序
235,anatomy,構造、解剖学
236,ancestor,祖先、先駆者、原型
237,ancestral,先祖伝来の、先駆者の、原型をなす
238,ancient,古代の、昔の、昔からの、（物などが）とても古い
239,anecdote,逸話
240,anger,怒り
241,angle,観点、角（度）
242,angry,怒って
243,anguish,苦悩させる、苦悩する、苦痛、悲しみ
244,animate,活気づける、駆り立てる、生きている、活発な
245,animation,アニメ(製作)、活気
246,ankle,足首
247,anniversary,（～周年）記念日
248,annotation,注釈
249,announce,発表［公表］する、知らせる、（物事が）を告げる
250,annoy,いらいらさせる、悩ます、〔受身形で〕腹が立つ
251,annoyance,いらだち、悩みの種
252,annual,１年間の、年１回の、例年の
253,anonymous,匿名の、無名の
254,anorexia,拒食症
255,ant,アリ
256,Antarctic,南極地方
257,Antarctica,南極大陸
258,anthem,賛美歌
259,anthropologist,人類学者
260,anthropology,人類学
261,antibiotic,〔通例～s〕抗生物質
262,anticipate,予想する、予期する、楽しみにして待つ
263,anticipation,期待、予期、予想
264,anticipatory,予期[予想]しての、見越しての
265,antioxidant,抗酸化物質、酸化防止剤
266,antique,骨董品の、年代物の、古風な
267,antiquity,古代、古物
268,anxiety,不安、心配
269,anxious,"心配している(about)、切望している(for, to do)"
270,anyhow,ともかく、いずれにせよ
271,anymore,（否定・疑問文）もはや（…できない）
272,anyway,（肯定文）とにかく、（否定文）どうしても
273,apart,離れて、個々に
274,apathy,無感動、無関心、冷淡
275,ape,猿、類人猿
276,apologize,謝る、弁明する
277,apology,謝罪
278,app,アプリ
279,appall,ぎょっとさせる
280,appalling,ぞっとするような
281,apparatus,装置、器具一式、機構
282,apparent,［叙述用法］明白な、［限定用法］見たところ～らしい
283,apparently,一見したところ～のようだ
284,appeal,訴える、求める、興味を引く、魅力、人気、訴え、要請
285,appear,～のように見える、現れる
286,appearance,外見、様子、出現
287,appetite,食欲、欲求
288,applaud,～に大きな拍手を送る
289,applause,拍手（喝采）
290,appliance,器具、電気製品
291,applicable,適用できる、応用できる、ふさわしい
292,applicant,応募者、志願者
293,application,申請書、申し込み、適用
294,apply,適用する、応用する、 申し込む(for～)、塗る、当てはまる
295,appoint,（役職に）を任命する、（時・場所など）を指定する
296,appointment,任命、約束、職、任務
297,appreciate,正しく理解する、正しく評価する、感謝する、鑑賞する
298,appreciative,感謝している
299,apprehension,不安、理解力、逮捕
300,apprentice,見習い(工)、初心者
301,approach,近づく、取り組む、取り組み(方)、接近（方法）
302,appropriate,適切な、ふさわしい
303,approve,賛成する、承認する
304,approximate,おおよその、近似の
305,approximately,おおよそ
306,apt,～しがちである、～する傾向がある、ふさわしい
307,aquatic,(動植物が)水生の、水の
308,arbitrary,任意の、勝手な、恣意的な、気まぐれな
309,arc,弧、弓形
310,archaeologist,考古学者
311,archaeology,考古学
312,archaic,古風な、古代の
313,archbishop,大司教
314,architect,建築家、設計者
315,architecture,建築(学)、建築技術
316,archive,公文書（保管所）、保存記録
317,Arctic,北極の
318,ardent,激しい、熱心な
319,area,部分、地域、分野
320,argue,と主張する、議論する
321,argument,議論、口論
322,arise,起きる、(～から)生じる(from～)
323,aristocracy,貴族政治、（the～)、貴族階級
324,aristocrat,貴族
325,aristocratic,貴族的な、貴族の、貴族政治の
326,arithmetic,算数の、算数
327,arms,武器、軍備
328,army,軍隊、陸軍
329,aroma,芳香、アロマ
330,arousal,興奮、目覚め
331,arouse,引き起こす、刺激する、目覚めさせる
332,arrange,手はずを整える、きちんと並べる、取り決める
333,arrangement,手配、配置、取り決め
334,array,多彩
335,arrest,逮捕する、止める、逮捕
336,arrival,到着
337,arrogance,傲慢さ、横柄さ
338,arrogant,ごう慢な、横柄な
339,arsenal,兵器庫
340,arsenic,ヒ素
341,art,芸術、美術、技術、こつ、(～s)人文科学
342,artery,動脈
343,arthritis,関節炎
344,article,記事、論文、品物、物、条件、冠詞
345,articulate,はっきり述べる、明瞭な
346,artifact,工芸品
347,artificial,人工の、不自然な
348,artistic,芸術的な
349,artistry,芸術的才能
350,arugula,ルッコラ
351,ascend,上がる、上げる
352,ascent,登ること、上昇
353,ascertain,確認する、確かめる
354,ascribe,～を（…の）せいにする、～を（…の）作品とする
355,ascription,原因があるとすること、理由付け
356,ash,灰
357,ashamed,恥ずかしがって、恥じている
358,aside,わきに、離して
359,asleep,眠って
360,aspect,（物事の）側面、観点、様相
361,aspiration,熱望
362,aspire,切望する、熱望する、求める
363,assassination,暗殺
364,assault,襲撃(する)、暴行(する)
365,assemble,集まる、集める、組み立てる
366,assent,同意する、同意、承諾
367,assert,断言する、主張する、行使する
368,assess,評価（判断）する、査定する
369,asset,有用なもの、貴重な存在、資産、財産
370,assiduous,勤勉な、熱心な
371,assign,割り当てる、配属する
372,assignment,任務、課題、割り当て
373,assimilate,同化する、吸収する、自分のものにする
374,assist,援助する、手伝う
375,assistance,援助、支援
376,assistant,助手
377,associate,結び付ける、連想する、交際する、仲間
378,assorted,詰め合わせの
379,assume,想定する、思い込む、（責任・任務）を引き受ける
380,assumption,(確証のない)仮定、想定、思い込み
381,assure,保証する、安心させる
382,asteroid,小惑星、ヒトデ
383,astonish,ひどく驚かせる
384,astonishing,驚くべき、びっくりするような
385,astound,びっくり仰天させる、愕然とさせる
386,astrology,占星術
387,astronaut,宇宙飛行士
388,astronomer,天文学者
389,astronomy,天文学
390,asylum,亡命
391,asymmetry,非対称，不釣り合い
392,athlete,運動選手、競技者、スポーツ選手
393,athletic,運動の得意な、スポーツの
394,athletics,スポーツ、運動競技
395,Atlantic,大西洋の
396,atlas,地図帳
397,atmosphere,大気、雰囲気
398,atom,原子
399,atrocity,残虐行為
400,attach,くっつける、取り付ける、愛着を持たせる
401,attachment,付着(物)、取り付け、愛着
402,attack,攻撃、非難、（病気などの）発作、を攻撃する、を非難する
403,attain,獲得する、達成する、に達する
404,attempt,試み、攻撃、を試みる、…しようとする
405,attend,出席する、注意して聞く(to～)、付き添う(on～)
406,attendance,出席[入場]者数、出席
407,attendant,付添人、世話人
408,attention,注目、注意、世話
409,attentive,注意深い
410,attitude,態度、考え方
411,attorney,弁護士、検事、（法定）代理人
412,attract,引きつける、魅了する
413,attraction,魅力、呼び物
414,attractive,魅力的な
415,attribute,～のせいにする、～のおかげと考える
416,auction,競売、オークション
417,audacious,大胆な、厚かましい
418,audible,聞こえる
419,audience,聴衆、観客、視聴者
420,auditor,監査役
421,auditorium,講堂、公会堂、観客席
422,authentic,本物の、確実な、信用できる
423,author,著者、作者
424,authority,関係当局、権威、権限
425,authorize,権限を与える
426,autobiography,自叙伝
427,autograph,（有名人などの）サイン
428,automatic,自動の、無意識な
429,automobile,自動車
430,autonomous,自動運転
431,autonomy,（個人の）自律、自治（権）、自治体
432,autopsy,検死
433,avail,利用する、活用する、役立つ
434,availability,(入手の)可能性、有用[有効]性
435,available,利用できる、入手できる、手の空いている
436,avenue,大通り、道、手段、方法
437,average,平均、平均的な
438,avert,避ける、防ぐ、（目・注目・顔を）そらす
439,aviation,航空
440,avoid,避ける
441,await,待つ、待ち受ける、待つ
442,awaiting,待つ
443,awake,目覚めて、気づいて、目が覚める、を起こす
444,awaken,目覚めさせる、覚める
445,award,賞（金）、（審査して）を授与する
446,aware,気づいている
447,awareness,認識、意識
448,awe,畏れ、畏敬の念、（be awed）畏敬の念を抱く
449,awesome,すごい、畏敬の念を起こさせる、荘厳な、恐ろしいほどの
450,awful,(光景などが）恐ろしい、ひどい
451,awkward,不器用な、落ち着かない、やっかいな、ぎこちない
452,axiom,原理、自明の理
453,axis,軸
454,bachelor,独身の男性、学士
455,backfire,[自] 裏目に出る
456,background,背景、生い立ち、経歴
457,backlog,未処理の山
458,bacteria,細菌、バクテリア
459,bacterium,バクテリア
460,badly,まずく、とても（欲しい）、ひどく
461,baggage,手荷物、旅行荷物、（集合的に）（旅行時の）荷物
462,bait,誘惑物、(釣り針・わなにつける)餌
463,balance,均衡、バランス、（体の）平衡、残高
464,bald,はげた、葉のない、味けのない、ありのままの
465,ballot,投票、投票用紙、投票総数
466,bamboo,竹
467,ban,禁止する、禁止（令）
468,bang,ドンとたたく、バタンと閉まる、ドカンという音
469,banish,追い出す、追放する
470,bank,銀行、土手
471,bankrupt,破産した、を破産させる
472,bankruptcy,破産
473,bar,棒、障害物、軽食堂、法廷、弁護士業、妨げる、除外する
474,bare,裸の、むき出しの、ありのままの、ぎりぎりの、最低限の
475,barely,かろうじて
476,bargain,買い得品、取引、契約
477,bark,吠える
478,barn,納屋、物置
479,barrel,バレル（液量の単位）、たる
480,barren,～の欠けた、（土地が）やせた、不毛の
481,barricade,バリケード
482,barrier,障壁、防壁
483,base,～の基礎［根拠］を置く
484,basement,地階、地下室
485,bashful,内気な
486,basic,基礎の、基礎知識
487,basin,流域、盆地、海盆、洗面器［台］
488,basis,基礎、根拠、方式、やり方
489,basket,かご、バスケット
490,bat,コウモリ、バット、バットで打つ
491,batch,一回分
492,bathe,入浴する（させる）
493,batter,を叩き壊す、乱打する
494,battery,電池
495,battle,戦う、戦闘
496,bay,入江、湾
497,bear,耐える、運ぶ、生む、身につける、持っている
498,bearable,耐えられる
499,beard,あごひげ
500,bearing,方向、関連、関係、(自分の)位置、物腰、態度
501,beast,獣、動物
502,beat,たたく、打ち負かすたたくこと、鼓動
503,beauty,美人、美しさ
504,beckon,手招きする、合図する
505,bee,（総称）ハチ、ミツバチ
506,beforehand,前もって、事前に
507,beg,切に頼む、懇願する
508,beggar,物乞い
509,behalf,利益、支持；（on behalf of） ～を代表して、～のため
510,behave,振る舞う、行儀よくする
511,behavior,行動、態度
512,behavioral,行動の
513,behind,後ろに、～よりも劣って
514,belief,信念、確信、信じること、信頼
515,belong,～に属する、～の所有である
516,benchmark,基準
517,bend,曲がる、かがむ、屈服する、を曲げる
518,beneath,～の下に
519,beneficial,有益な、有利な
520,benefit,恩恵、利益、利益を得る、に利益を与える
521,benevolent,親切な、善意の、寛大な、慈善の
522,benign,良性の、害のない； 有益な
523,besides,さらに、に加え、（否定文・疑問文で）以外に
524,bestow,授ける、与える
525,bet,賭け、考え、賭ける、予期する
526,betray,裏切る、（秘密など）をもらす、表情（表）に出す
527,beverage,飲み物、飲料
528,bewilder,うろたえさせる、当惑〔動転〕させる
529,beyond,～の向こうに、～できる範囲をこえて
530,bias,偏見、～に偏見を持たせる、～に偏見をもたらす
531,biased,偏った、偏見を持った
532,bible,聖書、必読書
533,bid,値をつける、（挨拶）を述べる
534,bilateral,相互の、二者［二国］間の
535,bilingual,２カ国語を話す（人）
536,bill,請求書、【英】勘定書、法案
537,billion,10億
538,bind,縛る、束縛する、結び付ける
539,binding,拘束力のある、義務を負わせる
540,biodiesel,バイオディーゼル
541,biodiversity,生物多様性
542,biographical,伝記の
543,biography,伝記、伝記文字
544,biological,生物学（上）の
545,biologist,生物学者
546,biology,生物学
547,birth,誕生
548,birthrate,出生率
549,bishop,司教
550,bit,（a～）少し
551,bite,かむ、かみつく、刺す
552,bitter,苦い、つらい、辛辣な、怒りっぽい
553,blade,刃、（プロペラなどの）羽根、（草などの）葉
554,blame,非難する、責任を負わせる
555,blank,空白の、無表情な、がらんとした
556,blast,爆破する、破滅させる
557,blaze,輝く、燃え立つ、炎、きらめき、（感情などの）激発
558,bleak,暗い
559,bleed,出血する
560,blend,混ぜる、調和させる、（～に）溶け込む
561,bless,祝福する、恵みを与える
562,blessing,恵み、ありがたいもの、承認、支持、神の加護
563,blindness,盲目、無知、無分別
564,blink,まばたく、まばたきをする、まばたき
565,bliss,この上ない喜び、至福、（bliss out）いい気分になる
566,blissful,至福の
567,blister,水ぶくれ
568,block,障害物、かたまり、区画、ふさぐ、妨害する
569,blockade,(港などの)封鎖、経済[通信]封鎖
570,bloom,栄える、咲く、花、開花的、最盛期
571,blossom,花が咲く、繁栄する、開花する、花、開花
572,blow,息を吐く、（風が）吹く、を吹く、打撃
573,blueprint,設計図
574,blunt,鈍い
575,blur,ぼかす、汚す、ぼやける、汚れる、ぼやけ、汚れ
576,blurry,ぼやけた、不鮮明な
577,blush,顔を赤らめる、恥ずかしく思う、赤面すること
578,board,板、委員会、に搭乗する
579,boast,自慢する、誇る、自慢（の種）、誇り
580,bob,上下に動く、急に動く、を上下に動かす
581,bodily,身体〔肉体〕上の、肉体的な
582,boil,煮る、沸騰する、煮える、沸騰する
583,bold,大胆な、怖いもの知らず、ずうずうしい
584,bomb,爆弾、大失敗
585,bombard,を責め立てる、を砲撃（爆撃）する
586,bomber,爆撃機
587,bond,きずなをくっつける
588,boom,大流行、にわか景気
589,boost,促進する、高める
590,border,境界（線）、国境、縁、～に接する、～に縁を付ける
591,bore,退屈させる、退屈な人（もの）
592,borrow,借りる、取り入れる
593,boss,社長、雇用主、上司
594,botanical,植物の、植物学(上)の
595,botanist,植物学者
596,botany,植物学
597,bother,悩ます、困らせる、邪魔する、思い悩む、面倒、悩みの種
598,bottom,底、最下部
599,bounce,跳ねる、反射する、を弾ませる、（メールが）返送される
600,bound,跳ぶように走る、はずむ、限界、束縛された、～行きの
601,boundary,境界(線)、限界
602,boundless,無限の
603,bout,短い期間、（病気などの）発症
604,bow,おじぎする、おじぎ
605,brace,支柱(で支える)、留め金、補強する
606,brag,自慢する
607,brain,脳、頭脳、知識人、知能、知的顧問
608,brainstorming,ブレインストーミング（自由にアイデアを出し合う問題解決法）
609,brainwashing,洗脳
610,branch,枝、支店、部門
611,brand,ブランド、銘柄
612,brand-new,新品の，真新しい
613,brave,勇敢な、見事な
614,breach,違反する
615,breadth,幅、広さ、範囲
616,breakdown,崩壊、破綻、悪化、分解、分析
617,breakout,発生、脱走、逃亡
618,breakthrough,大発見、突破口
619,breakup,(人間関係の)解消、別れ
620,breast,（主に女性の）胸，乳房
621,breathe,呼吸する
622,breed,産む、育てる、品種
623,breeze,そよ風
624,bribe,わいろ
625,brick,れんが
626,bride,花嫁
627,brief,短時間の、簡潔な、簡単な要点を伝える、要約
628,briefly,少しの間に、簡潔に
629,bright,明るい、輝いている、頭が良い
630,brightness,輝き、明るさ
631,brilliant,すばらしい、才能にあふれた、きらめく
632,brisk,元気な、活発な
633,British,イギリス人、イギリス（人）の
634,broad,広範囲に及ぶ、（幅・面積の）広い
635,broadcast,放送する、言いふらす、放送された、放送
636,broaden,～を広げる、広がる
637,brochure,パンフレット、小冊子
638,bronze,青銅、青銅（色）の
639,browse,拾い読みする、閲覧する
640,bruise,あざ、打撲傷、～に打撲を負わせる
641,brush,ブラシ、ブラシをかける
642,brutal,野蛮な、残酷な、残忍な、理性のない
643,brute,獣、動物
644,Buddhism,仏教
645,budget,予算、経費、予算案、（時間、金額）をわりあてる
646,bug,虫、（機械・プログラムの）欠陥
647,buildup,増加
648,bulb,電球、球根
649,bulk,大半、大きさ、大量
650,bulky,かさばった、扱いにくいほど大きい
651,bullet,弾丸
652,bully,いじめる、いじめっ子
653,bullying,いじめ
654,bump,（ドンと）ぶつかる、ばったり会う
655,bunch,束、集団、群れ
656,bundle,包み、を束ねる、を包みにする
657,burden,負担、（重い）義務、積み荷
658,bureau,（官庁の）局、事務局、案内所
659,bureaucracy,官僚、官僚主義
660,bureaucrat,官僚
661,burglar,泥棒、強盗
662,burglary,強盗
663,burial,埋葬
664,burn,焼く（焼ける）、燃やす（燃える）
665,burrow,墓穴
666,burst,爆発する、破裂させる、突然始まる、爆発
667,bury,埋める、埋葬する、隠す
668,bush,低木、茂み
669,business,事柄、こと、商売、事業、仕事、業務
670,bustle,喧噪
671,buzz,(場所が)ざわつく、どよめく
672,bypass,バイパス
673,bystander,傍観者
674,cabinet,内閣、飾り戸棚、キャビネット
675,cactus,サボテン
676,cafeteria,社員食堂、学食
677,cage,(鳥・獣を入れる)かご、檻
678,calamity,大災害、不幸
679,calculate,計算する、予想する、判断［推定］する
680,calling,転職、職業
681,calm,落ち着いた、平静、静まる、を静める
682,calorie,カロリー
683,camel,ラクダ、黄褐色
684,campaign,選挙活動、政治活動、軍事行動、促進販売
685,campus,構内、キャンパス
686,canal,運河
687,cancel,～を取り消す、中止する
688,cancer,癌、（社会などの）害悪
689,candid,率直な
690,candidate,候補（者）、志願者
691,candlepower,燭光<光度の単位>
692,canine,イヌ科の、イヌの
693,canyon,峡谷
694,capability,能力、処理能力、将来性
695,capable,能力がある、有能な
696,capacity,（最大）容量、収容能力、（潜在）能力
697,capita,頭
698,capital,資本(金)、首都、大文字、資本の、主要な、大文字の
699,caption,説明文、キャプション、字幕
700,captive,捕らわれの、監禁された
701,capture,(人・動物)を捕らえる、引きつける、逮捕
702,carbon,炭素
703,cardboard,段ボール、厚紙、ボール紙
704,cardiologist,心臓専門医
705,cardiovascular,心臓血管の
706,care,いやと思う、気にかける、
707,career,経歴、職業、生涯、成功、出世
708,carefully,注意深く
709,cargo,貨物
710,carnivore,肉食動物〈可算〉
711,carriage,馬車、うば車<米>、（鉄壁道の）客車<英>
712,cart,カート、手押し車、荷車、運ぶ
713,cartoon,漫画、アニメ
714,carve,彫る、切り開く、切り分ける
715,carving,彫刻（作品）
716,case,症例、実例、場合、事件、主張、論拠、(the)事実
717,cash,現金
718,cashier,レジ係、会計係
719,cast,投げ(かけ)る、役を割り当てる、配役
720,castle,城
721,casual,何気ない、無頓着な、偶然の、瞬時の
722,casualty,死傷者、人的損害、災難、大事故
723,catacomb,地下埋葬場
724,catastrophe,惨事、大惨事、大災害、破局
725,category,部類、区分、範疇
726,cater,食事を出す、必要な物を提供する、欲求を満たす
727,caterpillar,いも虫、毛虫
728,Catholic,カトリックの、カトリック教徒
729,cattle,ウシ
730,causal,原因となる、因果関係の
731,causally,原因となって
732,cause,原因、理由、大義
733,caution,用心、警告
734,cautious,注意深い、用心している
735,cave,洞窟
736,cavity,穴、空洞、腔、虫歯
737,cease,やめる、やむ、終わる
738,ceaseless,絶え間ない
739,ceiling,天井、（金額などの）上限
740,celebrate,祝う、褒め称える、賛美する
741,celebration,祝賀（会）、称賛
742,celebrity,有名人
743,celestial,天体の
744,cell,細胞、個室、(刑務所の)独房、電池
745,cemetery,（共同）墓地
746,censor,検閲する
747,censorship,検閲
748,census,国勢［市勢］調査、（主に人口の）一斉調査
749,cent,（単位としての）100、セント（1/100ドル）
750,center,中心、中央、（施設としての）センター
751,centralize,（権力など）を集中させる
752,century,世紀
753,CEO,最高経営責任者
754,cereal,〔通例～s〕穀物、シリアル（穀物加工食品）
755,ceremony,（儀）式、礼儀
756,certain,ある特定の、確信している
757,certainty,確実性、確信
758,certificate,証明書、に証明書を与える
759,certify,証明する
760,chain,連鎖、鎖、束縛、チェーン（店）
761,challenge,挑戦、難問、挑戦する、異議を唱える
762,chamber,部屋、議場、議院
763,chance,機会、偶然、見込み、たまたま～する（to do）
764,change,変える、変わる、変化、釣り銭、小銭
765,channel,経路、チャンネル、海峡
766,chaos,混乱、騒動、無秩序
767,chaotic,混沌とした
768,chapel,礼拝堂
769,chapter,(書類などの)章、支部、分会
770,character,性格、個性、特徴、登場人物、人格、文字
771,characteristic,特徴
772,charge,請求する、非難する、告発する、料金、告発、責任
773,charitable,慈善の、慈悲深い
774,charity,慈善(行為)、思いやり、慈善団体[基金]、慈善事業
775,charm,魅力、魔力、魔よけ、魔法をかける、魅惑する
776,chart,図、グラフ、海図、ヒットチャート
777,chase,追跡する、追求する
778,chat,おしゃべり、おしゃべりする
779,chatter,くだらないおしゃべり
780,cheap,安い、安っぽい
781,cheat,だます、不正をする、不正行為、カンニング
782,check,預かり所、検査、点検、小切手、調べる、阻止する
783,checkout,レジ、精算台、チェックアウト
784,checkup,健康診断、検査
785,cheek,ほお
786,cheer,元気付ける、声援を送る、元気づく、喝采、元気
787,cheery,陽気な、元気な
788,chemical,化学物質（製品）、化学の、科学的な
789,chemistry,科学
790,cherish,大切に心に抱く、育てる、かわいがる、心から愛する
791,chest,胸、箱、タンス
792,chew,かむ、をかみ砕く
793,chief,主要な、最高位の、長（官）
794,childbirth,出産、分娩
795,childhood,少年［少女］時代、子供時代.
796,chill,冷やす、怖がらせる、冷える、寒気を感じる、恐怖心
797,chimpanzee（chimp）,チンパンジー
798,chin,あご(の先端)
799,chip,薄切り、かけら、（半導体の）チップ
800,choir,聖歌隊
801,choke,窒息させる、抑える、
802,cholesterol,コレステロール
803,choose,選ぶ
804,chore,日常の雑事、日課、つまらない仕事
805,Christianity,キリスト教
806,chronic,慢性の、長引く、常習の
807,chronicle,年代記、記録、物語、年代記に記録する
808,chronological,年代順の
809,chuckle,くすくす笑う
810,chunk,塊
811,cigarette,（紙）巻きタバコ
812,circle,円
813,circuit,周回すること、回路、巡回
814,circulate,循環する、循環させる、流通させる
815,circulation,循環、流通、発行部数、（情報などが）広まること
816,circumstance,状況、事情、生活状態、境遇
817,circumstances,状況
818,cite,引用する、（例として）挙げる
819,citizen,市民
820,citizenship,市民権、公民権、市民[国民]であること
821,civil,市民の、民間の、民事の
822,civility,礼儀正しさ、丁寧さ
823,civilization,文明、文明化、文化的生活
824,civilize,を文明化する
825,claim,要求する、主張する、(人命を)奪う、要求、権利、主張
826,clap,拍手する、（手を）たたく、拍手
827,clarify,明らかにする、明らかになる
828,clash,対立〔衝突〕する、ガチャンと鳴る、衝突
829,class,階級、階層、クラス、授業
830,classic,傑作、古典、第一級の、典型的な、古典の
831,classical,クラシックの
832,classify,分類する、機密扱いにする
833,clause,(法律・条約などの)条項、(文の)節
834,claustrophobia,閉所恐怖症
835,clay,粘土
836,clearly,明らかに、はっきりと
837,clergy,聖職者
838,clerical,事務の、事務職の
839,clerk,事務員、職員、店員
840,clever,賢い、利口な、うまい、巧妙な
841,click,クリックする、カチッと鳴らす、カチッと音がする
842,client,顧客、依頼人
843,cliff,崖、絶壁
844,climate,気候
845,climatic,気候(上)の、風土の
846,climb,登る（こと）
847,cling,くっつく、固執する
848,clinic,診療所、クリニック、（病院内の）～科
849,clinical,臨床の、病院の
850,clink,カチン[チリン]と鳴る[鳴らす]
851,clip,切り抜く、切り取る、クリップで留める
852,clog,（管など）を詰まらせる
853,clone,クローン、模造する、まったく同じような人[もの]
854,close,接近した、親密な、綿密な、を閉める、閉まる
855,closure,(工場・学校などの)閉鎖
856,clothes,衣服
857,clue,手がかり、ヒント
858,clumsy,ぎこちない、不細工な、不器用な
859,cluster,集まり、群れ、房、集まる、群がる、を集める
860,clutch,ぎゅっとつかむ、しっかり握ること
861,clutter,散らかす
862,coal,石炭
863,coalition,連立、合同
864,coarse,粗雑な、きめの粗い、下品な、卑猥な
865,coast,海岸、沿岸
866,coastal,沿岸(地方)の
867,code,規定、法典、符号、暗号
868,coffin,棺桶
869,cognition,認識
870,cognitive,認識（認知）の
871,coherent,一貫した、筋の通った、結束した
872,coil,ぐるぐる巻く、丸くなる、巻いたもの
873,coin,（硬貨）を鋳造する、（新語など）を作る
874,coincide,合致〔一致〕する、同時に起こる
875,coincidence,偶然の一致
876,collaborate,共同して働く、協力する
877,collaboration,合作、共同、協力
878,collage,コラージュ
879,collapse,崩壊(する)、（病気などで突然）倒れる（こと）
880,colleague,（職場の）同僚
881,collect,集める、（人が）集まる
882,collective,集団の、共同の
883,collectively,集合的に、共同で
884,college,（単科）大学
885,collide,衝突する
886,collision,衝突、対立
887,colonize,を植民地化する、を入植させる
888,colony,植民地、集団居住地、（動植物の）コロニー
889,color-blind,人種差別をしない、色覚異常の
890,column,コラム、（新聞などの）欄、円柱、（縦）列
891,coma,昏睡（状態）
892,combat,と戦う、に立ち向かう、戦闘
893,combine,組み合わせる、兼ね備える、結合する
894,comedy,喜劇
895,comet,彗星
896,comfort,快適さ、慰め、慰めをあたえてくれるもの［人］、安らぎ
897,comfortable,快適な
898,command,命令(する)、指揮(する)、支配(する)、見渡す
899,commander,司令官
900,commemorate,記念する
901,commence,始まる、始める
902,commencement,開始；〈米〉（高校・大学の）卒業式，学位授与式
903,commend,を賞賛する
904,commendable,賞賛されるべき、立派な
905,comment,"論評する(on)、意見, 論評"
906,commerce,商業、貿易、通商
907,commercial,コマーシャル、商業の
908,commission,代理手数料、歩合、委員会
909,commit,献身する、捧げる、約束する、（罪を)犯す
910,commitment,公約、献身
911,committee,（集合的に）委員会、（全）委員
912,commodity,日用品、商品
913,common,共通の、ありふれた、公共の、共有の
914,commonplace,ごく普通の、陳腐な、よくある物事、ありきたりの意見
915,communal,共同の
916,communicate,情報交換をする、伝達する
917,communication,（情報・意見などの）伝達、意思疎通、通信（網）
918,communicative,話好きの、伝達の
919,communism,共産主義
920,communist,共産主義の
921,community,地域社会、（利害などを共にする）共同社会、集団
922,commute,通勤する、通学する
923,compact,凝縮させる、圧縮させる、ぎっしり詰まった、簡潔な
924,companion,連れ、仲間
925,company,会社、仲間、（仲間と）一緒にいること、一座
926,comparable,匹敵する、同様の
927,comparative,比較の、かなりの
928,compare,匹敵する、比較する、たとえる
929,compartment,区画、仕切り客室
930,compassion,おもいやり、哀れみ、同情
931,compassionate,哀れみ〔情け〕深い(toward)
932,compatible,矛盾しない、両立できる、仲良くやっていける
933,compel,～に…することを強いる
934,compensate,埋め合わせる、弁償する、償う
935,compete,競う、〔通例否定文で〕匹敵する
936,competence,能力、資格
937,competency,能力、適性
938,competent,有能な、能力のある、適格な
939,competing,相容れない、両立しない
940,competitive,競争の、競争力がある、競争心の強い
941,compile,編集する、（資料など）をまとめる
942,complain,不平［苦情］を言う、訴える
943,complaint,不平
944,complement,補完物、補足、補語
945,complementary,補足的な
946,complete,完成させる、仕上げる、完全な、完成した
947,completely,完全に
948,completion,完了、完成
949,complex,複雑な、複合的な、合成物、脅迫概念、複合施設
950,complexity,複雑さ
951,complicate,複雑にする
952,complicated,複雑な、入り組んだ
953,complication,複雑な事柄・余病・合併症
954,compliment,ほめ言葉、賛辞、お世辞を言う
955,complimentary,無料の、賞賛する
956,comply,従う、応じる、(基準・規則などに)沿う、合致する
957,component,構成要素、成分
958,compose,構成する、組み立てる、落ち着かせる
959,composed,落ち着いた
960,composite,異なる要素からなる、複合的な、合成物、複合物
961,composition,構成、（音楽などの）作品、作文
962,compost,たい肥
963,compound,複合の、混合物、化合物、を悪化させる、を混合する
964,comprehend,理解する、把握する
965,comprehension,理解力
966,comprehensive,包括的な
967,compress,を要約する、を短縮する、を圧縮して詰め込む
968,Compression,圧縮
969,comprise,構成される、構成する、占める
970,compromise,妥協（すること）、妥協案、歩み寄り
971,compulsion,衝動、強制力
972,compulsory,義務的な、強制的な
973,compute,計算する、コンピューターを使う
974,comrade,仲間
975,conceal,隠す、秘密にする
976,concede,仕方なく認める、敗北を認める
977,conceited,うぬぼれた
978,conceivable,(物・事が)考えられる、想像できる
979,conceive,思いつく、想像する、妊娠する
980,concentrate,専念（集中）する、集中させる
981,concentration,濃度、集中、専念
982,concept,概念、考え、（商品・販売の）コンセプト
983,concern,〔受身形で〕心配している、関係する
984,concerned,関心を持っている；扱っている；懸念している
985,concession,譲歩
986,concise,簡潔な
987,conclude,結論を下す、終える、締めくくる、締結する
988,conclusive,決定的な、確実な
989,concrete,具体的な、有形の
990,condemn,非難する、〔受身形で〕（～の刑を）宣告される
991,condensation,凝縮、凝結
992,condiment,香辛料
993,condition,条件、状況、状態、～を条件づける、制約する
994,conditional,～しだいの、条件付きの
995,condo,分譲マンション
996,conduct,行う、指揮する、案内する、行為、管理
997,cone,円すい
998,confer,(賞・学位・栄誉・権利など)を授与する、相談する
999,conference,会議、協議
1000,confess,白状する、認める
1001,confession,告白
1002,confide,打ち明ける、任せる、信頼する
1003,confidence,信頼、自信、確信、秘密
1004,confident,確信して、自信に満ちた
1005,confidential,秘密の
1006,configuration,配置、形状
1007,confine,制限する、閉じ込める
1008,confirm,確かめる、（意見などを）固める
1009,conflict,闘争、衝突、対立、不一致、矛盾する
1010,conform,従う、適合する、従わせる
1011,conformance,一致、適合、順応
1012,confront,直面する、向かい合う
1013,confuse,当惑させる、混同する
1014,congestion,混雑
1015,congratulate,祝う、おめでとうと言う
1016,congregate,集まる
1017,congress,（C～）（米国の）議会、国会、大会
1018,conjecture,推測
1019,connect,つなぐ、関連づける、つながる
1020,connotation,含蓄、言外にほのめかすこと、内包
1021,conquer,征服する、占める、克服する
1022,conquest,征服、(欠点・課題などの)克服
1023,conscience,良心、分別
1024,conscious,意識している、気づいている、意識が高い
1025,consecutive,連続した、引き続いて起こる、論理の一貫した
1026,consensus,（意見の）一致、全体の意見の一致
1027,consent,同意、承諾
1028,consequence,〔通例～s〕結果、重大性
1029,consequently,その結果
1030,conservation,（動植物などの）保護、保存
1031,conservationist,自然[環境]保護論者
1032,conservative,保守的な、控えめな
1033,conserve,保存する、保護する
1034,consider,よく考える、～を…とみなす
1035,considerable,かなりの
1036,considerate,思いやりのある
1037,consist,～から成る(of～)、～にある(in～)
1038,consistency,一貫性
1039,consistent,矛盾のない、一致した
1040,consistently,絶えず、一貫して
1041,console,慰める
1042,consolidate,合併する、強固にする
1043,consonant,子音(字)
1044,conspecific,同種の
1045,conspicuous,目立つ、人目を引く
1046,conspiracy,陰謀
1047,conspire,陰謀を企てる、共謀する
1048,constant,絶え間のない、一定不変の
1049,constantly,絶えず
1050,constellation,星座、一団
1051,constituent,構成要素、有権者、構成している、選挙権のある
1052,constitute,構成する、制定する
1053,constitution,憲法
1054,constrain,～に（…することを）強いる、を抑える
1055,constraint,制約
1056,construct,組み立てる、建設する、構成する
1057,construction,建設、建築物
1058,consult,（辞書など）を調べる、（専門家）に相談する
1059,consultant,顧問、コンサルタント、相談相手
1060,consultation,相談、協議
1061,consume,消費する
1062,consumption,消費、消費量
1063,contact,接触、連絡、と連絡をとる、と接触する
1064,contagious,感染（性）の、病気を伝染する
1065,contain,含む、収容する、抑える
1066,contaminate,汚染する、悪影響を及ぼす
1067,contaminated,汚染された
1068,contemplate,熟考する、じっと見つめる
1069,contemplation,熟考、沈思
1070,contemporary,現代の、同時代の、同時代の人
1071,contempt,侮辱、軽蔑
1072,contend,争う、議論する、を主張する
1073,content,満足している、内容、中身
1074,contented,満足した
1075,contentment,満足、幸福感
1076,contest,コンテスト、競技（会）、争い
1077,context,(文の)前後関係、文脈、背景、状況
1078,continent,大陸
1079,continue,続く、を続ける
1080,continuously,連続して、継続して
1081,contract,契約する、（病気）にかかる、縮める、契約（書）
1082,contradict,矛盾する、(人の考えなど)を否定する
1083,contradiction,否定、反対の主張、矛盾
1084,contradictory,矛盾した、反対の、議論好きな
1085,contrary,反対の、逆
1086,contrast,対比する、よい対照となる、対照、相違
1087,contribute,貢献する（to）、一因となる、寄付する、を提供する
1088,contribution,貢献、寄付(金)
1089,contrive,考案〔工夫〕する、たくらむ、うまく～する
1090,control,制御する、支配する、支配（力）、抑制
1091,control group,対照群、統制群
1092,controversial,物議を呼ぶ
1093,controversy,論争、議論
1094,convenient,便利な、都合のよい
1095,convention,慣習、しきたり、会議、大会
1096,conventional,従来の、慣習的な、協定の
1097,converge,集まる、集中する
1098,conversation,会話、対談
1099,converse,会話をする、逆の
1100,conversely,逆に、反対に、[文修飾]逆に言えば
1101,convert,変える、改宗［転向］させる、交換する
1102,convey,(感情・思考など)を伝える、を運ぶ
1103,convict,に有罪を宣告する
1104,conviction,確信、有罪判決
1105,convince,（人）を確信（納得）させる
1106,cooperate,協力する、協同する
1107,cooperation,協力、共同
1108,cooperative,協力的な
1109,coordinate,調整する、組織する、（服など）をコーディネートする
1110,coordinator,コーディネーター、取りまとめ役、責任者
1111,cope,うまく処理する、うまく対処する
1112,copper,銅
1113,copulate,交尾〔性交〕する
1114,copy,模倣する、複製する、写し、（本、新聞などの）1部
1115,copyright,著作権、版権、著作権のある
1116,coral,サンゴ(製)の
1117,cordial,心温まる、心からの
1118,core,中心、核心、（果物の）芯
1119,corporation,株式会社、企業、法人
1120,corpse,死体、死骸
1121,correct,正しい、適切な、を訂正する
1122,corrective,改める、正す、(薬が)中和する
1123,correlation,相互関係、相関（関係）
1124,correspond,合致する、相当する、文通する
1125,correspondence,通信、一致
1126,corridor,回廊(地帯)、通路、廊下
1127,corrode,腐食する
1128,corrupt,墜落した、わいろのきく、～を墜落させる、～を買収する
1129,corruption,腐敗、堕落
1130,cortex,皮質、樹皮
1131,cosmetic,化粧（用）の、美容（整形）の、（通例複数）化粧品
1132,cosmic,宇宙の
1133,cosmos,宇宙、秩序、コスモス
1134,cost,犠牲、費用、（費用が）かかる、（犠牲を）払わせる
1135,costly,損失［犠牲］の大きい、高価な、豪華な
1136,cough,せき(払い)、せき払いをする
1137,council,（地方）議会、評議会、（公の）会議
1138,counsel,忠告する、（人）に～（するよう）勧める
1139,count,数える、重要である、計算
1140,counter,～と反論する、～に反対する
1141,counterfeit,偽造の、偽の
1142,counterpart,対応するもの、対の片方
1143,countless,無数の
1144,countryside,（通例the）地方、田舎、田園地帯
1145,county,【米】郡、【英】州
1146,courage,勇気
1147,court,裁判所、宮廷、庭、（テニスなどの）コート
1148,courteous,礼儀正しい、思いやりがある、丁重な
1149,courtesy,礼儀正しさ、好意、優遇
1150,courthouse,裁判所(の建物)
1151,cousin,いとこ
1152,cove,入江、小湾
1153,cover,覆う、隠す、含む、（ある距離）を行く、（範囲）に及ぶ
1154,coverage,報道
1155,coward,臆病者
1156,cowardly,卑怯な、臆病な
1157,coworker,同僚、仕事仲間
1158,co-worker,同僚、仕事仲間
1159,cozy,居心地のよい
1160,crack,割れる（割る）、ぱちっと鳴る（鳴らす）、割れ目、隙間
1161,cradle,ゆりかご、（the～で）幼年時代
1162,craft,技術、商売、手工業、悪知恵、船舶、飛行機
1163,craftsman,職人、熟練工、工芸家
1164,cram,ぎっしり詰める、詰め込み勉強
1165,cramp,痙攣
1166,crash,衝突（墜落）する（させる）、衝突、墜落、故障
1167,crave,(を)切望する
1168,crawl,はう、ゆっくり進む
1169,crazy,夢中である（about）、正気でない
1170,create,創り出す、引き起こす
1171,creativity,創造性、独創性
1172,creature,動物
1173,credibility,信用
1174,credible,信用〔信頼〕できる、確実な、(成功などの)見込みのある
1175,credit,信用、名誉、功績、(大学などの)単位、信じる
1176,creditor,債権者、貸主
1177,creep,忍び込む、のろのろ進む、はう
1178,crest,頂上
1179,crew,乗組員、乗務員、一団
1180,crime,罪、犯罪、違法行為
1181,criminal,犯罪者、犯人
1182,crisis,危機
1183,crisp,パリパリした
1184,criteria,基準
1185,criterion,(価値判断の)基準、尺度(複：criteria)
1186,critic,批判する人、批評家
1187,critical,批判的な（of）、重大な、危機的な、批評的な
1188,critically,批評的に、非常に、決定的に、危険なほどに
1189,criticism,批判
1190,criticize,批判する、批評する
1191,crocodile,ワニ
1192,crooked,曲がった
1193,crop,作物、収穫(量)、～を収穫する、(作物が)できる
1194,cross,横切る、十字（路）、混合物
1195,crouch,しゃがむ
1196,crowd,群衆、（the）大衆、群がる、に群がる
1197,crucial,決定的な、必要不可欠の
1198,crude,雑な、荒削りな、こなれていない、（態度などが）露骨な
1199,cruel,残酷な、悲惨な、ひどい
1200,cruise,遊覧航海する、ぶらぶらする、を巡航する
1201,crumble,ぼろぼろ（になる）、崩壊する
1202,crummy,いやな、薄汚れた
1203,crush,押しつぶす、つぶれる、混雑
1204,crust,地殻、パンの耳、(動物の)甲殻
1205,crystal,結晶（の）、水晶（の）
1206,cue,合図、手がかり、（次の演技の）キュー
1207,cuisine,（独特の）料理、料理法
1208,culprit,（具体的な犯罪の）犯人、（何かの問題の）元凶
1209,cult,崇拝、熱狂
1210,cultivate,耕作する、栽培する、（才能など）をみがく、養う
1211,culture,文化、教養、洗練、耕作、栽培、飼育、芸術、文学
1212,cumulative,累積する、しだいに増加する
1213,cunning,悪賢い、ずるい、ずるさ
1214,curb,抑制する、拘束する、(歩道の)縁石
1215,cure,治療する、取り除く、治療
1216,curfew,門限
1217,curiosity,好奇心
1218,curious,好奇心の強い、好奇心をそそる、奇妙な
1219,currency,通貨、普及
1220,current,現在の、通用している、流れ
1221,curriculum,カリキュラム、(学校の)教科課程
1222,curse,呪い(の言葉)、ののしり、をののしる
1223,curve,（道路などの）カーブ、曲線
1224,custody,親権、保護、管理、拘留
1225,custom,慣習、習慣、（商店などへの）愛顧、（～s）関税、税関
1226,customary,習慣的な
1227,customer,顧客
1228,cyberspace,サイバースペース
1229,cycle,周期、循環、自転車に乗る、循環する
1230,cynical,軽蔑する、冷笑的な〔に〕、皮肉な、ひねくれた
1231,dagger,短剣
1232,daily,日常（の）、毎日（の）
1233,dairy,〔集合的に〕乳製品、乳製品加工所［販売者］
1234,damage,損害を与える、損害、損傷
1235,damp,湿った
1236,danger,危険、脅威
1237,dare,あえて（～）する、～に立ち向かう、思い切って～する
1238,daring,大胆な、勇敢な
1239,data,（単複両扱い）情報、データ（単数形はdatum）
1240,database,データベース、データの集積
1241,dawn,夜明け、始まり、わかり始める
1242,daylight,昼間、公表
1243,dazed,呆然とした
1244,dazzle,の目をくらます、目がくらむこと、輝き
1245,deadline,締め切り
1246,deadlock,行き詰まり
1247,deadly,致命的な、命にかかわる
1248,deaf,耳が聞こえない
1249,deal,扱う、対処する、分配する
1250,death,死（亡）
1251,debatable,議論の余地のある
1252,debate,議論、論争、討論する、論争する
1253,debris,（破壊された後の）残骸、瓦礫、がらくた
1254,debt,借金（状態）
1255,debut,デビュー、初舞台、デビューする
1256,decade,10年間
1257,decay,腐敗する、（徐々に）衰える
1258,deceased,死去した
1259,deceitfully,偽って、人を惑わすように
1260,deceive,だます
1261,decency,礼儀正しさ、良識
1262,decent,まともな、まあまあの、慎みのある、かなりよい、きちんとした
1263,deception,詐欺
1264,deceptive,人を惑わすような
1265,decide,決める、決意する、決着をつける
1266,decision,決定、決心
1267,decisive,決定的な、断固とした
1268,declaration,宣言、公表、申告
1269,declare,宣言する、言明する、断言する
1270,decline,減少、衰退、低下、減少する、衰退する、を断る
1271,decode,(暗号・符号)を解読する
1272,decorate,装飾する
1273,decoration,飾り、飾り付け、装飾品
1274,decrease,減少する、を減らす
1275,dedicate,ささげる
1276,dedicated,献身的な、熱心な
1277,deduce,推論[推定、演繹]する、(結論)を出す
1278,deduct,を控除する、を減じる
1279,deed,行為、行い
1280,deem,[他] (Ｏ (to be)Ｃ)ＯをＣだと思う
1281,deer,シカ（複数形も同形）
1282,default,初期設定、デフォルト、不履行
1283,defeat,失敗(させる)、敗北（させる）
1284,defect,欠陥、欠点、障害
1285,defective,欠陥のある
1286,defend,防御する、弁護する
1287,defendant,被告(人)
1288,defensive,防御的な
1289,defiant,挑戦（反抗）的な
1290,deficiency,不足、欠陥
1291,deficit,不足（額）、欠損
1292,define,定義する、明確に定める
1293,definite,明確な
1294,definitely,絶対
1295,definition,定義
1296,deflate,(タイヤ・風船などが)しぼむ、をしぼませる
1297,deflect,(人の注意・非難など)をそらす、の方向を変えさせる
1298,deforestation,森林破壊
1299,deformity,変形、奇形
1300,defy,逆らう、反抗する、挑む
1301,degrade,の品位を下げる、(価値・品質)を下げる、低下する
1302,degree,学位、（温度・角度などの）度、程度、段階
1303,dehydrate,を脱水する、(野菜など)から水分を抜く
1304,dehydration,脱水(症状)
1305,dejected,落胆した、元気のない
1306,delay,遅延、延期、を遅らせる、を延期する、のろのろする
1307,delegate,(権限など)を委任する、(人)を代表として派遣する
1308,delegation,代表派遣、使節
1309,delete,削除する、消す
1310,deliberate,慎重な、意図的な、落ち着いた、ゆっくりの、熟考する
1311,deliberately,故意に
1312,delicate,繊細な、かよわい、（問題などが）微妙で扱いにくい
1313,delight,大きな喜び、を大喜びさせる、楽しむ
1314,delinquent,非行の
1315,delirious,精神が錯乱した
1316,deliver,配達する、（演説など）をする、（子）を出産する
1317,demand,要求する、要求、需要
1318,dementia,認知症
1319,demise,消滅、終わり、死去
1320,democracy,民主主義、民主政治、民主国家
1321,democratic,民主主義の、民主的な
1322,demographic,人口統計学の
1323,demographics,人口統計の
1324,demolish,破壊する、粉砕する
1325,demonstrate,証明する、実演する、デモをする
1326,demote,を降格する
1327,denial,否定、拒否
1328,denounce,非難する、責める
1329,dense,密集した、濃い
1330,density,密度
1331,dent,へこみ
1332,deny,～を否定する、～を（…に）与えない
1333,depart,出発する、（～から）それる（from）
1334,department,部門、学科、～省、（百貨店などの）売り場
1335,departure,出発
1336,depend,頼る、依存する、左右される、（～によって）決まる
1337,dependency,依存、従属
1338,depict,描写する
1339,depiction,描写
1340,deplore,嘆き悲しむ、非難する
1341,deploy,を有効活用する、を配置する
1342,deposit,置く、預金する、預金、手付金、堆積物
1343,depot,倉庫
1344,deprecate,を非難する、に反対を唱える
1345,depress,落胆させる、押し下げる、憂鬱にさせる
1346,depression,憂うつ、うつ病、不況、低気圧
1347,depressive,憂うつな、うつ病の
1348,deprivation,喪失、欠乏、はく奪
1349,deprive,～から（～を）奪う、～から剥奪する
1350,depth,深さ
1351,derive,由来する、～を得る
1352,descend,（be ～ed）由来する、を降りる、伝わる
1353,descendant,子孫
1354,descent,下降、降下、下り坂、家系
1355,describe,描写する、～を（…だと）言う、説明する
1356,description,描写、説明
1357,desert,(見)捨てる、砂漠、不毛の
1358,deserted,人気のない
1359,deserve,～に値する、～を受ける価値がある
1360,design,設計する、設計（図）、デザイン、意図
1361,designate,指名する、指定する、指名された
1362,desirable,望ましい
1363,desire,欲望、要望、（強く）を望む
1364,desolate,寂しい、孤独な、荒れ果てた、みじめな、を寂しくさせる
1365,despair,絶望
1366,desperate,自暴自棄の、絶望的な、（～したくて）たまらない
1367,despise,軽蔑する、ひどくきらう
1368,despite,～にもかかわらず
1369,destination,目的地
1370,destined,運命である
1371,destiny,運命
1372,destroy,破壊する、滅ぼす、殺す
1373,destruction,破壊、破滅
1374,detach,切り離す、取り外す
1375,detached,切り離された
1376,detachment,超然、分離
1377,detail,詳細、細部
1378,detain,拘留する
1379,detect,感知する、見つけ出す、に気づく
1380,detention,拘置、留置
1381,deter,妨げる、思いとどまらせる
1382,deteriorate,悪化する、低下する
1383,determine,決意する、はっきりと決める
1384,deterrent,抑止するもの
1385,detonate,爆発する
1386,detour,迂回(路)、回り道
1387,detriment,損害、損失
1388,detrimental,（to ～）（～に）有害な
1389,devalue,（通貨を）切り下げる
1390,devastate,壊滅させる
1391,develop,発達する、を発達させる、を開発する、を発症する
1392,developer,宅地造成業者、開発者
1393,device,装置、機器、方策、デバイス
1394,devious,不誠実な
1395,devise,考案する
1396,devoid,欠いている、持っていない
1397,devote,充てる、ささげる
1398,devoted,献身的な、熱中している
1399,devour,むさぼり食う
1400,diabetes,糖尿病
1401,diagnose,診断する
1402,diagnosis,診断
1403,diagonally,斜めに、対角線的に
1404,diagram,図(表)
1405,dialect,方言、地方語
1406,dialogue,対話、会話、意見の交換
1407,diameter,直径、倍率
1408,diarrhea,下痢
1409,dictate,書きとらせる、命令する
1410,dictator,独裁者
1411,dictum,格言、意見
1412,diet,食事、ダイエット、食習慣、（the D-）国会
1413,dietary,食事の
1414,differ,異なる、意見が合わない、違う
1415,differently,異なって
1416,difficulty,困難(さ)
1417,diffuse,放散させる、流布させる、広まる、発散(流布)した
1418,dig,掘る、探求する
1419,digest,消化する、理解する、要約する
1420,digestion,消化（作用）
1421,digestive,消化の
1422,digit,数字
1423,digital,デジタル方式の、デジタル［数字］表示の
1424,dignity,威厳、気品、尊厳
1425,dilemma,ジレンマ、板挟み
1426,diligent,勤勉な、一生懸命な、念入りな、骨を折った
1427,dilution,希釈
1428,dim,ぼんやりした、かすかな
1429,dimension,局面、次元、寸法、重要性
1430,diminish,減らす、減少する
1431,dining,食事（をすること）
1432,dinosaur,恐竜
1433,dioxide,二酸化物
1434,dip,ちょっと浸る、浸す、沈む、ちょっと浸すこと、低下
1435,diploma,卒業〔終了〕証書、学位授与証
1436,diplomacy,外交（的手腕）
1437,diplomat,外交官
1438,diplomatic,外交的な、外交官の、外交的手腕に優れた、外交上の
1439,direct,道を教える、向ける、指図（指示）する
1440,direction,方向、指導
1441,directly,直接に
1442,dirt,汚れ、泥
1443,disability,障がい
1444,disabled,障がいのある、障がい者用の
1445,disadvantage,不利（な点）、障害、（信用などの）損失
1446,disadvantaged,(経済的・社会的に)恵まれない
1447,disagree,不賛成である、意見が食い違う
1448,disappear,消える、見えなくなる
1449,disappoint,失望させる、（希望など）をくじく
1450,disapprove,賛成しない、を認めない
1451,disarm,武装解除する
1452,disaster,（大）災害
1453,disastrous,悲惨な、災害を引き起こす
1454,disband,解散する
1455,discard,(不用品・習慣・友人など)を捨てる、放棄
1456,discern,見つける、見分ける、識別する
1457,discharge,放出する
1458,disciplinary,規律の、規律に関する、学科の
1459,discipline,訓練する、しつける、訓練、しつけ、規律
1460,disclose,公表する、暴く
1461,discomfort,不快、不便
1462,disconnect,(人)のインターネットへの接続を切る、の接続を断つ
1463,discontent,不満
1464,discord,不一致、不和
1465,discount,割引（率）、を割引する、（話など）軽視（無視）する
1466,discourage,やる気をなくさせる、落胆させる
1467,discouraging,がっかりさせる
1468,discourse,話し合い、会話、講演、論説
1469,discover,（偶然に）を発見する、に気づく
1470,discredit,に疑いをかける、の信憑性を失わせる
1471,discreet,思慮分別のある、目立たない
1472,discriminate,差別する、識別する、～を区別する
1473,discrimination,差別、区別
1474,discriminatory,差別的な
1475,discuss,～について話し合う
1476,disdain,軽蔑、を軽蔑する
1477,disease,病気
1478,disgrace,不名誉
1479,disguise,変装する、隠す、見せかけ、ごまかし
1480,disgust,嫌悪、をむかむかさせる
1481,dish,皿、（皿に盛った）料理
1482,dishonesty,不正(行為)、不正直
1483,dislike,嫌う、嫌悪
1484,dislocate,を脱臼させる、を混乱させる
1485,dismal,気分を暗くさせる
1486,dismantle,分解する
1487,dismay,ろうばいさせる、落胆させる、ろうばい、落胆
1488,dismayed,うろたえ
1489,dismiss,無視する、解雇する、解散する
1490,disobedient,従順でない、違反する
1491,disorder,障害、（心身の）不調、混乱
1492,disown,関係を否定する
1493,disparity,不釣り合い、相違
1494,dispatch,派遣する、発送する、処理する
1495,dispel,追い散らす
1496,dispense,分配する、配給する、施す、投薬する
1497,disperse,分散させる、散布する、広める、消散する
1498,displace,～に取って代わる、移動させる
1499,display,陳列する、示す、見せびらかす、展示、表に出すこと
1500,displeasure,不満、不快
1501,disposable,使い捨ての
1502,disposal,処分、処理、処分の自由、(人・物などの)配置
1503,dispose,処置する、処分する、配置する、～を…する気にさせる
1504,disprove,の誤りを証明する、の反証を挙げる
1505,dispute,討論、紛争を議論（論争）する、に反論する
1506,disregard,無視する、軽視する、無視、軽視
1507,disrupt,中断させる、混乱させる、分裂させる
1508,dissatisfied,不満な、不満そうな
1509,dissolve,溶かす、解散する、解消する、溶ける
1510,distance,距離
1511,distant,遠い、距離のある、（関係が）冷ややかな
1512,distinct,明らかに異なる、明瞭な
1513,distinctly,はっきりと、明確に、本当に
1514,distinguish,"区別する, 見分ける"
1515,distort,ゆがめる、ねじる
1516,distortion,ゆがみ、歪曲、ゆがめられた物〔状態〕
1517,distract,そらす
1518,distraction,気が散ること、気を散らすもの、気晴らし
1519,distress,苦悩、疲労、困窮、を苦悩させる
1520,distribute,分配する、〔受身形で〕分布する
1521,distribution,分配、配給
1522,district,地域、地区
1523,disturb,かき乱す、妨害する、邪魔をする
1524,disturbance,妨害、騒乱
1525,ditch,溝
1526,diverge,分岐する、分かれる、異なる
1527,divergence,逸脱，相違，《数学》発散
1528,diverse,さまざまな
1529,diversion,気晴らし、注意をそらすこと、目的変更、方向転換
1530,diversity,多様性、相違点
1531,divert,そらす、迂回させる、転用する
1532,divide,分割する、分離する、分ける、分類する
1533,divine,神の、神にささげる
1534,division,部門、分割、分配、割り算
1535,divorce,離婚する、～を（…から）分離する
1536,dizzy,めまいのする、目もくらむような
1537,do,～に～をもたらす、役に立つ、～をする
1538,dock,埠頭、波止場、(艦船の)ドック
1539,doctorate,博士号
1540,doctrine,教義、主義
1541,document,記録する、文書、記録
1542,dodge,を巧妙に逃れる
1543,dogma,教義、定説； 独断
1544,dollar,ドル、１ドル紙幣
1545,dolphin,イルカ
1546,domain,(活動・関心・知識などの)領域、分野、範囲、領地、領土
1547,domestic,家庭の、国内の、（動物が）飼いならされた
1548,domestication,飼いならすこと、順応
1549,dominance,支配、優勢
1550,dominant,支配的な、より優位にたつ
1551,dominate,支配する、優勢である
1552,donate,寄付する、贈与する、（臓器・血液）を提供する
1553,donation,寄贈〔寄付〕、(血液・臓器などの)提供
1554,donkey,ロバ
1555,doom,破滅、運命、死、を運命づける(to)
1556,doomed,運命にある
1557,dormant,（火山などが）休止状態の，眠っている
1558,dormitory,寮
1559,dose,（薬の1回分の）服用量
1560,dot,点、しみ
1561,doubly,二重に、二倍に
1562,doubt,疑う、～ではないと思う
1563,doubtful,疑わしい、疑っている
1564,downfall,破滅、転落、(雨・雪などの)大降り
1565,downplay,を軽く扱う
1566,downright,まったく、まったくの、率直な
1567,downtown,町の中心街、町の中心街へ
1568,downturn,(景気などの)下降(状態)
1569,dozen,ダース（12個）（の）
1570,draft,下書き、為替手形、すき間風
1571,drag,引きずる、のろのろと進む、だらだらと続く
1572,drain,排出させる、空にする、使い果たす、水がはける、徐々に尽きる
1573,drama,ドラマ、演劇
1574,dramatic,劇的な、演劇の
1575,drastic,徹底的な、思い切った、猛烈な、抜本的な
1576,drastically,劇的に
1577,draw,引く、描画する、近づく、引き分け
1578,drawback,欠点、不利な点
1579,dread,ひどく恐れる、恐怖
1580,dreadful,ひどい、いやな、恐ろしい
1581,dreary,わびしい、退屈な
1582,dress,衣服を着せる、ドレス、衣服
1583,drift,漂う、（知らぬ間に）移り変わる、漂流物
1584,drill,訓練、（反復）練習、ドリル、錐
1585,drive,駆り立てる、（車）を運転する、車で送る、衝動
1586,drizzle,霧雨（が降る）
1587,drone,ドローン、(無線操作の)無人機
1588,droop,垂れ下がる
1589,drought,干ばつ、（慢性的な）不足
1590,drown,溺死させる、溺れ死ぬ、ずぶ濡れになる
1591,drowsy,眠い
1592,drug,薬、麻薬
1593,dual,二の、二重の
1594,dubious,疑わしい、信用できない、疑っている
1595,due,～するはず、到着予定で、期限が来て、当然支払うべき、正当な
1596,dull,退屈な、（色などが）くすんだ、曇った
1597,dumb,口が利けない、ばかな、愚かな
1598,dump,捨てる、ドサッと落とす、ごみ捨て場、ごみの山
1599,dumping,（ごみなどの）投げ捨て、投棄
1600,duplicate,複製する
1601,durable,耐久性がある、長持ちする：（状況などが）長く続く
1602,duration,（時間の）継続、持続（時間）
1603,dust,ほこり
1604,Dutch,オランダ人[語](の)
1605,dutiful,忠実な
1606,duty,任務、義務、関税
1607,dwell,住む、宿る
1608,dweller,居住者
1609,dwindle,低下する、だんだん小さくなる
1610,dye,染料、染まる（染める）
1611,dynamic,活動的な、精力的な、動的な
1612,eager,熱望して、熱心な
1613,early,早く、初期に；早い、初期の
1614,earn,（働いてお金など）を稼ぐ、（名声など）を得る
1615,earnest,熱心な、真剣な、重大な、厳粛な
1616,earthquake,地震
1617,earthworm,ミミズ
1618,ease,容易さ、安楽さ、を和らげる、を取り除く
1619,east,東（部）（の）
1620,eccentric,常軌を逸した、一風変わった、変な
1621,echo,まねる、踏襲する、反響させる；こだま、反響、繰り返し
1622,eclipse,（日食・月食などの）食、（名声などの）失墜
1623,ecological,生態学の
1624,ecologist,生態学者、環境保護論者
1625,ecology,生態学、生態(系)、自然環境、エコロジー
1626,economic,経済(学)の
1627,economical,経済的な、安上がりな
1628,economist,経済学者
1629,economy,経済（状態）、経済圏、節約
1630,ecosystem,生態系
1631,ecstatic,有頂天の
1632,edge,端、ふち、刃（先）
1633,edible,食用の、食べられる
1634,edit,編集する
1635,edition,(刊行物の)版
1636,editor,編集者、編集長
1637,editorial,社説
1638,educate,教育する、に教える、（能力など）を養う
1639,education,教育
1640,educator,教育者、教師、教育学者(米)
1641,eel,ウナギ
1642,eerie,不気味な
1643,effect,影響、効果、結果、（結果を）もたらす
1644,effective,効果的な
1645,efficient,効率的な、有能な、効率的に仕事をこなす
1646,effort,努力
1647,ego,うぬぼれ、自我
1648,Egypt,エジプト
1649,eject,を取り出す、を追い出す
1650,elaborate,詳しく述べる、手の込んだ、複雑な
1651,elbow,ひじ
1652,elderly,初老の、年配の
1653,elect,～を選ぶ、～を選挙で選ぶ
1654,election,選挙、当選
1655,electric,電気の、電気で動く
1656,electrical,電気の、電気を扱う
1657,electricity,電気
1658,electrode,電極
1659,electronic,電子（工学）の
1660,elegant,優雅な、上品な
1661,element,要素、元素、基礎、自然の力
1662,elemental,すさまじい、根本的な、自然の
1663,elementary,初級の、基本的な
1664,elevate,を上げる、を昇進させる
1665,elevation,向上、昇進、上げること、標高
1666,elevator,エレベーター
1667,eligible,適格の、資格のある、（結婚相手として）望ましい
1668,eliminate,～を除去する、～を完全になくす、～を取り除く
1669,elite,〔通例the～〕〔集合的に〕エリート
1670,elk,ヘラジカ
1671,eloquent,雄弁な、よく表す(of)
1672,elsewhere,どこか他のところに
1673,embark,乗り込む、着手する
1674,embarrass,当惑させる、困らせる、恥ずかしい思いをさせる
1675,embassy,大使館、大使館員
1676,embed,〔通例受身形で〕埋め込まれる、はめ込まれる
1677,embody,（思想など）を具体化する
1678,embrace,含む、（考えなど）を受け入れる、（人）を抱きしめる
1679,emerge,現れる、明らかになる、抜け出す
1680,emergency,非常事態、緊急事態
1681,emigrate,移住する
1682,emigration,移住、移民団
1683,eminent,著名な、すぐれた、卓越した
1684,emission,放出（量）
1685,emit,放出する、出す、送る
1686,emotion,感情、情動、感動
1687,empathy,感情移入、共感
1688,emperor,皇帝
1689,emphasize,強調する、重点を置く
1690,empire,帝国、大企業
1691,empirical,実験〔実証・経験〕に基づいた
1692,employ,雇う、使う
1693,employee,従業員
1694,employment,雇用
1695,empower,権限を与える
1696,empty,空になる、を空にする、空の、空虚な
1697,emulate,見習う
1698,enable,（人）が…できるようにする、を可能にする
1699,enact,制定する
1700,encase,を入れる、を含む
1701,enchant,魅了する、魔法をかける
1702,enclose,同封する、取り囲む
1703,encompass,[他] ～を含む
1704,encounter,遭遇する、（思いがけず）出会う
1705,encourage,～を…するよう励ます、促進する
1706,encouraging,勇気づける、望みを持たせる
1707,encyclopedia,百科事典
1708,end,端、終了、目的、終わらせる、終わる
1709,endanger,危険にさらす
1710,endangered,絶滅の危機に瀕した
1711,endeavor,努める、努力
1712,endocrine,内分泌の
1713,endorse,を推奨する
1714,endow,授ける、与える、寄付する
1715,endowed,恵まれる
1716,endure,耐える、持ちこたえる
1717,enemy,敵（軍）
1718,energetic,（人，運動などが）活発な
1719,energy,エネルギー、活力
1720,enforce,施行［実施］する、強制する
1721,engage,引き付ける、雇う、従事させる、婚約させる、従事する
1722,engineering,工学(技術)
1723,enhance,高める、より良くする
1724,enjoyment,楽しみ、享受
1725,enlighten,啓発する、啓蒙する、教える、知らせる
1726,enlightened,進んだ考えの
1727,enlightenment,啓蒙、啓発
1728,enlist,入隊する、参加する、(支持・協力)を得る
1729,enormous,巨大な、莫大な
1730,enough,十分な、十分に、必要なだけの数量
1731,enrage,を憤慨させる
1732,enrich,豊かにする、濃縮化する
1733,enroll,登録する、入会する、を登録させる
1734,enrollment,登録
1735,ensue,続いて起こる
1736,ensure,確実にする、守る
1737,entail,伴う、引き起こす、含む
1738,entangle,もつれさせる、絡ませる、巻き込む
1739,enter,～に入る、～を記入する、～に加わる
1740,enterprise,企業、事業、企画、進取の気性
1741,entertain,楽しませる、もてなす、考慮する、心に抱く
1742,entertainment,娯楽、催し物、接待
1743,enthusiasm,熱情、熱意
1744,enthusiastic,熱狂的な、熱心な
1745,entice,誘惑する
1746,entire,全体の、全部の、完全な
1747,entirely,まったく
1748,entitle,資格を与える、権利を与える、表題を付ける
1749,entitled,得る権利がある、題された
1750,entity,存在、存在物、統一体
1751,entrepreneur,起業家、事業家
1752,entrust,AにBを任せる
1753,envelop,包む
1754,envelope,封筒
1755,envious,うらやんで、うらやましそうな
1756,environment,環境
1757,envision,を心に思い描く、を想像する
1758,envoy,使節
1759,envy,うらやむ、ねたむ、ねたみ、うらやむ気持ち
1760,epidemic,伝染病、伝染病の流行、伝染病の、流行の
1761,epidemiology,疫学、流行病学
1762,episode,出来事、エピソード、１話
1763,epoch,時代、画期的な出来事
1764,equal,等しい、匹敵する、平等な
1765,equality,平等、対等
1766,equate,等しいとみなす、等しくする
1767,equation,方程式、同一視、均衡
1768,equator,赤道
1769,equip,備え付ける、装備する、身につけさせる
1770,equipment,装備、備品
1771,equivalent,同等の、担当する、同等のもの
1772,era,（政治・歴史上重要な）時代
1773,eradicate,[他] ～を根絶する
1774,erase,消し取る、削除する
1775,erect,建てる、直立させる、直立した
1776,erode,腐食する； ～を腐食する、侵食する
1777,erosion,浸食、衰え
1778,errand,（人の）使い、使い走り、用件
1779,erratic,不規則な
1780,error,（基準から外れた）誤り
1781,erupt,（火山が）噴火する、勃発する
1782,eruption,噴出、噴火、発生
1783,escape,逃げる、免れる、脱出、逃避
1784,escort,を護衛[護送]する、に付き添う
1785,essay,（学生に課される）レポート、エッセイ
1786,essential,必要不可欠な、本質的な
1787,establish,設立する、確立する、立証する
1788,establishment,設立、制定、組織
1789,estate,財産、地所
1790,esteem,尊敬、尊重、評価、を尊ぶ、とみなす〔思う〕
1791,estimate,見積もる、判断（評価）する、見積もり（書）、判断
1792,estimation,評価、意見、判断
1793,eternal,永遠の、不変の
1794,eternity,永久、永遠
1795,ethic,倫理、道徳、倫理［道徳］規範
1796,ethical,倫理(上)の、道徳の
1797,ethics,倫理学（観）、道徳（律）
1798,ethnic,民族の、人種の、民族特有の
1799,euphoria,幸福感
1800,Europe,ヨーロッパ
1801,evacuate,を避難させる、から立ち退く
1802,evacuated,避難した
1803,evade,避ける、回避する
1804,evaluate,評価する、査定する
1805,evaporate,蒸発する、消散する、を蒸発させる
1806,even,…さえ、（比較級の前で）いっそう
1807,event,(重要な)出来事、事件
1808,eventually,結局、最終的に
1809,everyday,日常の、毎日の
1810,evidence,証拠、（事実を示す）形跡
1811,evident,明白な、明らかな
1812,evil,害悪、邪悪、邪悪な
1813,evoke,呼び起こす、引き起こす、誘い出す
1814,evolution,進化(論)、発展
1815,evolve,（徐々に）発展する、進化する
1816,exact,正確な、まさにその
1817,exactly,ちょうど、正確に
1818,exaggerate,誇張する、強調する、誇張する
1819,exaggeration,誇張
1820,examine,調べる、診察する、尋問する
1821,excavate,[他] ～を発掘する
1822,excavation,発掘
1823,exceed,～を超える、～より勝る
1824,excel,秀でている、に勝る、より優れている
1825,excellent,非常に優れた
1826,except,～を除いて、 ～以外は
1827,exception,例外
1828,exceptional,例外的に優れた、まれな
1829,excerpt,抜粋、引用
1830,excess,過剰、超過
1831,excessive,過度の
1832,exchange,交換する、交換し合う、両替する
1833,excite,興奮させる
1834,exclaim,（突然）叫ぶ
1835,exclude,除外する
1836,exclusive,高級な、排他的な
1837,exclusively,もっぱら，～専用で
1838,excursion,遠足、団体の小旅行、脱線、逸脱
1839,excuse,許す、言い訳をする
1840,execute,実行〔遂行〕する、死刑を執行する、処刑する
1841,executive,(経営)幹部、執行権のある、行政の
1842,exempt,免除する
1843,exemption,(義務・責任などの)免除
1844,exercise,課題、行使、練習、運動、行使する、運動させる[する]
1845,exert,（力など）を用いる、を行使する、努力する、尽力する
1846,exhale,(息・煙・言葉など)を吐き出す
1847,exhaust,疲れ果てさせる、使い尽くす、排気する
1848,exhausted,疲れ切っている
1849,exhibit,展示する、（感情や能力）を示す、展示（品）
1850,exile,国外追放、亡命、国外追放する
1851,exist,存在する、生存する
1852,existence,存在、生存
1853,exotic,異国風の、（動植物などが）外来の、風変わりな
1854,expand,拡大する、広がる、膨張する
1855,expect,予期する、～を期待する、～だろうと思う
1856,expectancy,期待、見込み
1857,expectation,期待、予期、予想
1858,expedition,遠征、探検隊、小旅行
1859,expel,追い出す、追い払う
1860,expend,（労力・金・時間など）を費やす、を消費する
1861,expenditure,支出
1862,expense,〔～s〕経費、費用、犠牲
1863,expensive,高価な
1864,experience,経験、体験
1865,experienced,熟練した
1866,experiment,実験
1867,experimental,実験の、実験[試験]的な
1868,expert,専門家、熟練者、熟達した
1869,expertise,専門知識、専門的意見
1870,expire,(契約などが)終了する、死ぬ、息を吐きだす
1871,explain,説明する
1872,explicit,明白な、率直な
1873,explode,爆発する、急増する、を論破する
1874,exploit,（資源など）を開発する、～を搾取する、～を利用する
1875,exploration,探検、調査
1876,explore,調査［探究］する、探検［探査］する
1877,explosion,爆発
1878,exponential,（増加が）指数関数的な，急激な
1879,export,輸出する、外国に広める、輸出、輸出品
1880,expose,さらす、暴露する、露出する
1881,exposure,身をさらすこと、暴露
1882,express,はっきりした、急行の、速達便の
1883,expression,表現、表情
1884,exquisite,この上なく優れた、たいへんすばらしい
1885,extend,延長する、～を拡大する、～を示す、～を施す
1886,extensive,広範囲の、大規模な
1887,extent,程度、範囲
1888,exterminate,根絶する、皆殺しにする
1889,external,外部の、対外的な
1890,extinct,（動物のある種族などが）絶滅した、消えた
1891,extinction,絶滅
1892,extinguish,消す、失わせる
1893,extra,追加の、余分の、別勘定の
1894,extract,抽出する、引き出す、抽出物、抜粋
1895,extraordinary,並はずれた、異常な、驚くべき
1896,extravagant,仰々しい、金遣いの荒い、ぜいたくな
1897,extreme,極端な、極度の、過激な
1898,extremely,非常に
1899,extrovert,外向的な、社交的な
1900,eyebrow,眉毛
1901,eyelash,まつげ
1902,eyelid,まぶた
1903,eyesight,視力、資格
1904,eyesore,目ざわりなもの
1905,fable,たとえ話、つくりばなし
1906,fabric,織物、織り方、基本構造[関係]
1907,fabricate,をでっち上げる、を組み立てる
1908,fabulous,すばらしい
1909,facade,うわべ、見せかけ
1910,face,～に直面する、～に面する
1911,facial,顔の
1912,facilitate,を促進する、を容易にする
1913,facilitated,促進された
1914,facility,施設、設備、容易さ、能力
1915,fact,事実
1916,factor,要因、因子
1917,factory,工場
1918,faculty,能力、才能、機能、(大学の)学部、教授陣
1919,fade,あせる、消えていく、しぼむ
1920,fail,失敗する、～しない、できない(to do)、役立たない
1921,failure,失敗
1922,faint,かすかな、弱々しい、ぼんやりした、気を失いそうな
1923,fair,公平な、公正な、まあまあの、かなりの、美しい、品評会
1924,fairly,かなり、適切（公平）に
1925,fairy,妖精の（ような）
1926,faith,信頼、信仰（心）
1927,fake,偽造する、のふりをする
1928,fallacy,誤った考え、誤信、錯誤
1929,FALSE,誤った、間違った、うその、偽りの、真実とは違う
1930,falsify,を偽造する
1931,fame,名声
1932,familiar,精通した、なじみのある
1933,familiarize,慣れさせる
1934,famine,飢饉、（食糧・物資の）ひどい不足
1935,famous,有名な
1936,fanatical,狂信的な、熱狂的な
1937,fancy,空想、好み、高価な、装飾的な、を想像する、を好む
1938,fantasize,空想する
1939,fantastic,すてきな、途方もない、架空の
1940,fantasy,空想、幻想、幻想的作品
1941,far,大いに、遠くへ、ほど遠い[=決して～でない]
1942,fare,（交通機関の）運賃
1943,farewell,お別れ
1944,farming,農業
1945,fascinate,魅惑する、うっとりさせる
1946,fascination,魅力、引きつけられること
1947,fashion,流行、ファッション、方法、流儀
1948,fast,速い、固定した、しっかりと、ぐっすりと、断食する
1949,fasten,しっかり留める
1950,fat,太っている、脂肪（分）
1951,fatal,致命的な、取り返しのつかない
1952,fatality,死亡者
1953,fate,運命、結末、最期
1954,fatigue,疲労
1955,fault,誤り、欠陥、欠点、（落度などの）責任
1956,faulty,(機械・装置などが)欠陥のある
1957,favor,好意、親切な行為、支持、賛成する、えこひいきする
1958,favorable,好意的な、好ましい
1959,favorite,お気に入りの（もの）
1960,fear,恐れる、気づかう、恐怖、心配
1961,feasible,（計画・方法などが）実現［実行］可能な
1962,feast,ごちそう、祝宴、祝祭(日)
1963,feat,功績、(熟練体力を要する)妙技、離れ業、偉業
1964,feather,羽、羽毛
1965,feature,特徴、（複数）顔立ち、呼び物、を呼び物とする
1966,featureless,特色のない、感じやすい
1967,federal,連邦（政府）の
1968,federation,連邦、連邦国家
1969,fee,（参加・入場の）料金、（専門職への）謝礼
1970,feeble,弱々しい、ひ弱な
1971,feed,食べ物［乳］を与える、供給する、餌を食べる
1972,feeling,感情、（漠然とした）感じ、感覚
1973,fellow,仲間、奴、同僚、同級生、男
1974,female,女性（の）、雌（の）
1975,feminine,女らしい
1976,ferocious,残忍な、ものすごい
1977,fertile,肥沃な、創造力豊かな、（動植物が）生殖力のある
1978,fertility,多産、繁殖能力（のあること）、肥沃なこと
1979,fertilizer,肥料
1980,fetch,取って来る、連れてくる、進路を取る、取って来ること
1981,feudal,封建時代［制度］の、封建的な
1982,fever,熱、熱狂
1983,fiber,繊維(の１本)、繊維質、食物繊維
1984,fiction,小説、フィクション、作り話、虚構
1985,fictional,架空の、フィクションの
1986,fictitious,架空の、偽りの
1987,field,場、畑、田、野原、競技場、分野
1988,fierce,どう猛な、激しい、厳しい
1989,fight,戦う、けんか、戦い
1990,figure,と思う、数字、姿、（～な）人物、図形
1991,file,(書類などの)ファイル、（書類などを）提出する
1992,fill,満たす、占める
1993,film,映画、フィルム
1994,filter,フィルター、濾過機、染み出る、を濾過する、を取り除く
1995,filthy,汚い、不潔な
1996,finale,終楽章、フィナーレ
1997,finally,とうとう、終わりにあたって
1998,finance,融資する、資金を提供する
1999,financial,財政（上）の、財界の
2000,finding,発見（物）、報告、判決
2001,fine,すばらしい、細かい、罰金、～に罰金を科す
2002,fingerprint,指紋
2003,finite,有限の、限られた
2004,fire,（労働者）を首にする、（銃など）を発射する
2005,fireplace,暖炉
2006,firm,堅固な、しっかりした、安定した、会社
2007,first,第一の；まず第一に；最初のうちは
2008,firsthand,直接の
2009,fisherman,漁師、釣り人
2010,fist,握りこぶし
2011,fit,合う、取りつける、適した、体調がよい、発作
2012,fix,修理する、（食事など）を用意する、固定する、決める
2013,flame,火炎、光彩、（顔・頬などが）赤らむ、（炎を上げて）燃える
2014,flap,パタパタ動く、羽ばたく、をパタパタ動かす
2015,flare,ぱっと燃え上がる
2016,flash,ひらめき、閃光、ひらめく、ぴかっと光る
2017,flat,単調な、そっけない、平らな、断固とした、均一の
2018,flatter,お世辞を言う、おべっかをつかう
2019,flattery,お世辞、おべっか
2020,flavor,風味、に風味をつける
2021,flaw,欠点、きず
2022,flee,逃げる、～から逃げる
2023,flesh,（人・動物の）肉、果肉
2024,flexible,柔軟な、柔らかい、融通のきく
2025,flight,（飛行機の）便、飛ぶこと、飛行、逃走、脱出
2026,flip,はじく、ひっくり返す、裏返す、切り替える
2027,float,浮く、漂う、浮かべる
2028,floating,浮かぶ
2029,flock,群れ、群衆、大群、一群、集まる、群れをなす
2030,flood,洪水、あふれる、水浸しにする、
2031,flourish,（文化などが）栄える、（植物などが）繁茂する
2032,flourishing,栄えている
2033,flow,流れる、流れ
2034,flu,インフルエンザ（influenzaの略）
2035,fluctuate,[自] （数値，物価が）変動する
2036,fluent,流暢な、緩やかな
2037,fluid,流体、流動性の：変わりやすい、(言葉が)流暢な
2038,fluoride,フッ化物
2039,flush,紅潮、上気、突然の高まり、水洗すること
2040,flutter,はばたきする、はためく、どきどきする、はばたき、動揺
2041,focus,集中させる、焦点を合わせる、焦点が合う、焦点、重点
2042,foe,敵
2043,fog,霧
2044,foil,を失敗に終わらせる、を挫折させる
2045,fold,包む、折りたたむ、（手足など）を組む
2046,folk,人々、〔～s〕皆さん、〔one's ～s〕家族
2047,folklore,民間伝承
2048,follow,従う、後について行く、後に起こる
2049,follow-up,追跡調査、追加、続行
2050,fond,Aが好きだ
2051,fool,愚か者、をばかにする
2052,forbid,禁止する
2053,force,～に無理やり…させる、力、（複数形で）軍隊
2054,forecast,予報する、予想する、予報、予想
2055,forehead,ひたい
2056,foreign,外国の、異質の
2057,foresee,（問題・事故など）を予知する
2058,foresight,先見の明、洞察力
2059,foretell,予言（予知）する
2060,forge,偽造する、（関係など）を築く、鍛造する
2061,forgive,(人・行為・罪など)を許す
2062,form,形（態）、申込用紙、を形作る、形になる
2063,formalize,を形式化する
2064,format,書式、形式、（本などの）型
2065,formation,形成、構成（物）、隊列
2066,former,前(者)の、（the）（２つのうちの）前者
2067,formerly,かつては、以前は
2068,formidable,手ごわい
2069,formula,(複～sまたはformulae)公式、決まったやり方
2070,formulate,(計画など)を(注意深く)まとめる、を明確に述べる
2071,forsake,見捨てる
2072,forth,前へ、先へ、それ以降
2073,forthcoming,来るべき
2074,fortuitous,偶然の、思いがけない
2075,fortune,財産、幸運、運命
2076,forward,前に、将来に向かって、(手紙・メール)を転送する
2077,fossil,化石、時代遅れの人［物］
2078,foster,促進する、養育する、里親（里子）の
2079,foul,不快な、汚い、反則の、反則
2080,found,設立する、基礎を築く
2081,foundation,基礎、設立
2082,founder,創設者
2083,fountain,噴水、泉
2084,fraction,わずか、一部、分数
2085,fracture,骨折、割れ目、裂け目
2086,fragile,壊れやすい、はかない
2087,fragment,破片、かけら
2088,fragrance,芳香
2089,fragrant,香りの良い
2090,frailty,もろさ
2091,frame,校正、骨組み、骨格、枠、額縁、組み立てる、枠にはめる
2092,framework,枠組、骨組み
2093,frank,率直な
2094,frankly,率直に
2095,frantic,大急ぎの、気が狂いそうな
2096,fraud,詐欺（行為）、（金銭などの）搾取、詐欺師、偽善者、偽物
2097,free,無料の、自由な、ひまな、制約のない
2098,freedom,自由
2099,freeze,凍る、を凍らせる、（計画・資金など）を凍結する
2100,freight,貨物、積み荷
2101,frequency,"頻度, 頻繁； 周波数"
2102,frequent,たびたびの、頻繁に起こる
2103,frequently,頻繁に
2104,fresh,新鮮な
2105,friction,摩擦、あつれき、不和
2106,friendship,友人関係、友情
2107,fright,(突然の・一時的な)恐怖(感)
2108,frighten,おびえさせる、びっくりさせる
2109,frontier,国境、辺境、未開拓分野、最先端
2110,frost,霧（が降りる）
2111,frown,眉をひそめる、眉をしかめること、しかめ面
2112,frugal,安上がりの、質素な、倹約する、無駄遣いしない、簡素な
2113,frustrate,いら立たせる、（計画・希望など）を挫折させる
2114,frustrated,いらいらしている
2115,fuel,燃料、勢いを増加させるもの
2116,fulfill,果たす、添う、満たす
2117,fully,全く、完全に
2118,fumigate,消毒する
2119,function,機能、役割、働き、式典、会合
2120,functional,機能的な
2121,fund,基金、資金
2122,fundamental,基本的な、必須の、基本
2123,fundamentally,基本的に、根本的に
2124,funeral,葬式
2125,fungus,（かび・キノコなどの）菌類
2126,fur,毛、毛皮
2127,furious,激怒した、猛烈な
2128,furnish,備え付ける、用意する
2129,furnished,家具付きの
2130,furniture,家具
2131,furthermore,さらに
2132,fury,激しい怒り、（風雨などの）激しさ
2133,fusion,融合、連立
2134,fuss,大騒ぎ、やきもきすること、騒ぎ立てる、やきもきする
2135,fussy,つまらないことにやきもきする、騒ぎ立てる
2136,futile,無益な、役に立たない、つまらない
2137,future-oriented,未来志向の
2138,gadget,機械器具
2139,gain,手に入れる、増す、良くなる、利益、増大
2140,galaxy,星雲、銀河、〔the G～〕銀河系
2141,gale,強風
2142,gallery,画廊、美術館、バルコニー、観客
2143,game-changer,革命的なこと[人・物]
2144,gangster,ギャングの一員、暴力団員
2145,gap,割れ目、（時間的）空白、（見解などの）相違
2146,garbage,（主に台所から出る）ゴミ
2147,gargle,うがいをする
2148,garment,衣服、衣類
2149,gas,ガス、気体、ガソリン
2150,gather,集める、わかる、推測する、増す、集まる
2151,gaudy,派手な
2152,gauge,基準、容積、計器、推し測る、慎重に判断する
2153,gaze,見つめる(こと)
2154,gear,用具（一式）、器具、歯車、ギア
2155,gender,性、性の差、性別
2156,gene,遺伝子
2157,general,世間一般の、一般的な、全体的な、大まかな
2158,generalization,一般化
2159,generally,一般的に、大体
2160,generate,生み出す、発生させる
2161,generation,世代
2162,generosity,寛大さ、気前の良さ
2163,generous,寛大な、気前のよい、豊富な
2164,genesis,起源、発生
2165,genetic,遺伝（子）の、発生の
2166,genetically,遺伝子的に、遺伝学的に
2167,genius,天才、才能
2168,genocide,大量虐殺
2169,genome,ゲノム
2170,genre,ジャンル、酒類
2171,gentle,優しい
2172,gently,優しく、静かに
2173,genuine,本物の、偽りのない
2174,genuinely,本当に、実に、心から、純粋に
2175,geographical,地理的な、地理学（上）の
2176,geography,地理、地理学
2177,geological,地質学的な
2178,geology,地質学、地質（構造）
2179,geometry,幾何学
2180,germ,細菌、病原菌、幼芽
2181,gesture,身ぶり
2182,ghost,幽霊、幻影
2183,giant,巨大な、巨人、偉人
2184,gift,贈り物、才能
2185,gifted,才能のある
2186,gigantic,巨大な、莫大な
2187,given,～を考慮すると、～と仮定すると、特定の、任意の
2188,glacier,氷河
2189,glance,ちらっと見ること
2190,glare,ぎらぎら光る、じっとにらむ、ぎらぎらする光、怒りのまなざし
2191,glass,ガラス、（a ～ of）コップ１杯の、（複数）めがね
2192,glide,滑らかに動く、音もなく移動する
2193,glimpse,ちらりと見る、（～が）ちらりと見える
2194,glitter,きらきら光る、輝き
2195,global,世界的な、全体的な
2196,globalization,国際化
2197,globe,球体、世界、地球儀、（the～で）地球
2198,gloomy,暗い、陰鬱な、悲観的な
2199,glorify,賛美する、称賛する、飾る、栄光を与える
2200,glory,栄光、壮観
2201,glossary,用語小辞典、用語集
2202,glossy,光沢のある
2203,glow,光り［照り］輝く、赤く燃える、紅潮する
2204,glue,貼り付ける、接着剤でつける、接着剤
2205,goad,を駆り立てる、駆り立てて～させる；駆り立てるもの、突き棒
2206,goal,名、目標、ゴール
2207,good,（―s）商品、利益、（a ― many ～）かなりの
2208,goods,商品
2209,goodwill,好意、厚意、親切心、信用、営業権
2210,gorgeous,華やかな、すばらしい
2211,gossip,うわさ話をする
2212,govern,治める、支配する、左右する、抑制する
2213,government,政府
2214,governor,知事
2215,grab,つかむ、横取りする、急いで食べる
2216,grace,気品、優雅さ、好意、神の恵み、慈悲
2217,gracious,親切な、丁寧な
2218,gradation,段階的変化、グラデーション
2219,grade,学年、程度、成績、を段階別にする
2220,gradual,徐々の、緩やかな
2221,gradually,だんだん
2222,graduate,卒業する（from）、卒業生、大学院生
2223,graffiti,落書き
2224,grain,穀物、穀粒、少量、微量、木目
2225,grammar,文法
2226,grammarian,文法家、文法学者
2227,grand,壮大な、偉大な
2228,grandparent,祖父（母）
2229,grant,（人）に（許可・権利など）を与える、を認める
2230,graphic,図、挿絵
2231,grasp,把握する、つかむ、つかむ（理解する）こと
2232,grass,（牧）草
2233,grassland,牧草地、草原
2234,grateful,感謝している
2235,gratification,満足(感)、喜び、満足を与えるもの
2236,gratify,喜ばせる
2237,gratitude,感謝(の気持ち)
2238,gratuity,チップ
2239,grave,重大な、威厳のある、真面目な、厳粛な、墓場
2240,graveyard,（教会の）墓地
2241,gravitate,引き寄せられる
2242,gravity,重力、引力、重量、重大さ
2243,graze,(家畜などが)牧草を食べる
2244,Greece,ギリシャ
2245,greed,どん欲、どん欲さ
2246,greedy,欲深い、貪欲な、食い意地の張った、がつがつした
2247,greenhouse,温室
2248,greet,あいさつをする、出迎える
2249,grid,（電気などの）供給網、格子（模様）、碁盤目
2250,grief,深い悲しみ
2251,grieve,深く苦しむ、深く悲しませる
2252,grim,（状況などが）暗い、（表情が）険しい
2253,grimace,しかめ面をする； しかめ面
2254,grind,（臼などで）挽く、すりつぶす、ギシギシ音を立てる
2255,grip,しっかりつかむ、しっかりつかむこと
2256,groan,うめく声、うなる音、文句、うめく
2257,grocery,食料雑貨店、食料品
2258,gross,ひどい、巨大な、全体の、総計
2259,ground,根拠、理由、土地、土壌、運動場、地面、地表
2260,growl,うなり声、うなる、不平を言う、どなる
2261,growth,発展、成長
2262,grumble,文句を言う、不平を言う、不満、苦情
2263,guarantee,保証する、保証
2264,guard,守る、見張る、警備（員）
2265,guardian,保護者、管理者
2266,guess,推測する、言い当てる
2267,guest,招待客、宿泊客
2268,guidance,指導、案内
2269,guide,案内する、指導する、案内人（書）、指針
2270,guideline,指針、指標、目標、ガイドライン
2271,guilty,罪悪感のある、有罪の
2272,gull,カモメ
2273,gulp,がぶがぶ飲む
2274,gun,拳銃
2275,gush,噴出する
2276,gust,突風、噴出、(感情の)爆発
2277,gut,腸、消化管、内臓
2278,guy,やつ、男
2279,gymnastics,（器械）体操
2280,habit,（個人の無意識的な）習慣、癖
2281,habitat,生息地、（人の）居住地
2282,habitual,習慣的な
2283,hail,ひょう、あられ
2284,halt,停止・中断させる[する]、停止、中断
2285,hamper,妨げる
2286,handful,（a～of…）１つかみの量の…
2287,handle,取っ手、つまみ、うまく扱う、操縦する
2288,handout,(講演・授業などの)配布物、プリント
2289,hang,つるす、掛ける、ぶら下がる
2290,happen,起こる
2291,harass,困らせる、悩ます
2292,harassment,嫌がらせ、ハラスメント
2293,harbor,港、湾、避難所、隠れ場所
2294,hardly,ほとんど…ない
2295,hardship,苦難、窮乏
2296,hardy,頑丈な、耐寒性の
2297,hare,野ウサギ
2298,harm,損害、危害、害する
2299,harmful,害のある
2300,harmless,害のない
2301,harmony,調和
2302,harness,[他] （自然の力など）を利用する
2303,harsh,厳しい、不快な
2304,harvest,収穫（物・期）、を収穫する
2305,haste,急ぐこと、あわてること
2306,hasty,急ぎの、早まった
2307,hatch,孵化させる、孵化する、たくらむ
2308,hate,憎む、嫌う
2309,hatred,憎しみ、憎悪、嫌悪
2310,haunt,につきまとう、出没する
2311,haunted,つきまとわれる
2312,haven,避難所、保護区、港
2313,hay,干し草
2314,hazard,危険、～を危険にさらす
2315,hazardous,危険な、冒険的な
2316,hazy,ぼんやりした、不明確な、かすんだ
2317,head,向かう、進む
2318,headache,頭痛（の種）
2319,headline,（新聞などの）見出し
2320,headquarters,本部、本社
2321,heal,治す、癒やす、治る、癒える
2322,healthful,健康によい
2323,healthy,健康な
2324,heap,（積み上げられた）山、堆積、積み上げる
2325,heating,暖房(装置)
2326,heaven,天国、（H～で）神
2327,hectic,やたらと忙しい
2328,heed,(助言・警告など)に注意する
2329,heel,かかと
2330,height,高さ、身長、高地、絶頂、丘、高台
2331,heighten,強める、増す、強まる、増す
2332,heir,相続人、継承者、後継者
2333,helpful,親切な、役に立つ
2334,helpless,無力な
2335,hemisphere,（地球の）半球、半球体
2336,hemp,麻、大麻
2337,hence,それゆえに
2338,herald,[他] ～の先触れをする
2339,herbivore,草食動物
2340,herd,群れ、集める
2341,hereditary,遺伝的な
2342,heredity,遺伝（形質）
2343,heritage,（文化的）遺産、伝統
2344,hero,英雄、主人公
2345,hesitant,ためらいがちな
2346,hesitate,ためらう
2347,hibernation,島民
2348,hide,隠す、隠れる
2349,hierarchy,階層制、支配層
2350,highlight,強調する、光を当てる
2351,highly,非常に、高く
2352,highway,幹線道路
2353,hinder,妨げる、邪魔になる、障害となる
2354,hinge,ちょうつがい
2355,hint,それとなく言う、ヒント、気配、(a ～ of)少量の
2356,hire,雇う
2357,history,歴史、歴史学、経歴
2358,hit,たたく、当たる、攻撃する、打撃
2359,hive,ミツバチの巣（箱）、人の集まる所
2360,hobby,趣味
2361,hole,穴
2362,holistic,全体論の、総合的な
2363,hollow,空洞の、空虚な、うわべだけの
2364,holly,セイヨウヒイラギ
2365,holy,神聖な
2366,homogeneous,均質の
2367,honest,正直な、率直な
2368,honor,名誉、名誉を与える、尊敬する
2369,honorable,尊敬すべき、立派な、高潔な
2370,horizon,地[水]平線、範囲
2371,horizontal,水平の
2372,hormonal,ホルモンの
2373,hormone,ホルモン
2374,horrible,恐ろしい、ひどく不快な
2375,horrify,ぞっとさせる
2376,horror,恐怖、強い嫌悪、嫌な物［人］
2377,hospitality,親切なもてなし、歓待、受容性
2378,host,主催する、のホスト役を務める
2379,hostage,人質
2380,hostile,敵意のある
2381,household,家族、家庭、世帯、家庭の
2382,hover,(鳥・昆虫・ヘリコプターなどが)空中(の一点)に止まる
2383,however,しかし、どんな～でも、どのように～しても
2384,hug,抱きしめること、抱き合う
2385,huge,膨大な、巨大な
2386,human,人間の、人情のある、人間
2387,humane,思いやりのある、人道的な
2388,humanitarian,人道主義の
2389,humanity,人類、人間性、人情、人文科学
2390,humankind,(単複両扱い)人類
2391,humble,(食事などが)質素な、乏しい、謙遜した
2392,humid,湿気のある
2393,humidity,湿気
2394,humiliate,に恥をかかせる、に屈辱を与える
2395,humility,謙虚さ、謙遜、卑下
2396,humor,ユーモア、気分、機嫌、気質
2397,hump,（ラクダなどの）こぶ
2398,hunger,渇望、飢え
2399,hunt,狩る、捜す、狩り、探索
2400,hurdle,障害
2401,hurt,にけがをさせる、の感情を害する、痛む
2402,hybrid,雑種、混成物、ハイブリッド車
2403,hydrogen,水素
2404,hydropower,水力発電
2405,hygiene,衛生（状態）、健康法
2406,hymn,賛美歌
2407,hypocrisy,偽善(行為)、見せかけ
2408,hypocritical,偽善の
2409,hypodermic,皮下（注射）の
2410,hypothesis,仮説、（議論の）前提
2411,hypothetical,仮説〔仮定〕の、仮説上の
2412,hysterical,ヒステリックな
2413,iceberg,氷山
2414,idea,考え、思いつき、理解、見解、概念
2415,ideal,理想的な、観念的な、理想
2416,idealistic,理想主義の
2417,identical,まったく同一の、同様の
2418,identify,同一のものとみなす、確認する
2419,Ideology,思想、イデオロギー
2420,idle,仕事がない、動いていない、無駄な
2421,ignition,(エンジンの)点火装置、点火
2422,ignorance,無知、無学
2423,ignorant,無知な
2424,ignore,"無視する, 知らないふりをする"
2425,illegal,違法の、不法の
2426,illiterate,読み書きのできない
2427,illness,病気
2428,illogical,筋の通らない、不合理な
2429,illuminate,明るくする、解明する
2430,illumination,証明、(複数形で)イルミネーション
2431,illusion,錯覚、思い違い、幻想
2432,illustrate,説明する、挿絵を入れる
2433,image,画像、像、印象、生き写し
2434,imagery,像、映像、比喩的表現
2435,imaginary,架空の
2436,imaginative,想像力豊かな
2437,imagine,想像する、推測する
2438,imbalance,不均衡、アンバランス
2439,imitate,真似する
2440,immeasurable,計り知れない、果てしない、広大な
2441,immediate,即座の、直接の
2442,immediately,即座に
2443,immense,巨大な、莫大な
2444,immerse,～を浸す、没頭させる
2445,immersed,浸る
2446,immigrant,移民
2447,immigrate,移住する
2448,immigration,移民、移住、入国管理
2449,immortality,不死、不滅
2450,immovable,動かせない
2451,immune,免疫を持つ、免れた
2452,immunity,免疫（性）
2453,impact,影響、衝突、衝撃（力）
2454,impair,害する、(価値など)を減じる
2455,impaired,～に障害のある、弱った、損なわれた
2456,impairment,障害、損傷
2457,impart,与える、伝える
2458,impartial,公平な
2459,impassable,(川・道などが)通行できない、(困難・障害などが)克服できない
2460,impatience,いらだち、じれったさ
2461,impede,邪魔する、妨げる
2462,imperative,必須の、急務の
2463,imperial,帝国の、皇帝の
2464,impersonal,人間味のない
2465,implant,を移植する、を教え込む、植え付ける
2466,implement,道具、手段、実行する
2467,implication,(裏の・言外の)意味、(予想される)影響、結果
2468,implicit,暗黙の、内在する
2469,imply,暗に意味する、ほのめかす
2470,import,輸入する、取り込む
2471,importance,重要性
2472,impose,課す、押しつける、つけこむ
2473,imposing,印象的な，人目を引く，堂々とした
2474,impotence,無力、無能、無気力
2475,impractical,実用的ではない、非現実的な
2476,impress,強い印象を与える、感動させる
2477,impression,印象、感動
2478,impressive,印象的な、感動的な
2479,imprisonment,投獄、収監
2480,improper,不適切な、無作法な
2481,improve,改善する、よくなる
2482,improvise,[他] ～を即興で作る［歌う，演奏する］
2483,impulse,衝動、刺激
2484,impulsive,衝動的な、感情にかられた
2485,in spite of,～にもかかわらず
2486,inability,無能、無力
2487,inaccurate,不正確な、誤りのある
2488,inactive,不活発な、停止中の
2489,inadequate,不十分な、不適当な
2490,inanimate,生命のない、活気のない
2491,inappropriate,ふさわしくない、不適当な
2492,inattentive,不注意な、怠慢な
2493,inborn,生まれつきの、生来の
2494,incautiously,不注意にも、うかつに
2495,incentive,刺激、動機、やる気を出させるもの
2496,inception,初め、発端
2497,incessant,絶え間のない
2498,inch,インチ（2.54cm）
2499,incidence,発生(率)
2500,incident,出来事、事件、紛争
2501,incisive,明敏な、鋭い
2502,inclination,意向、願望、好み
2503,incline,傾ける、～を…する気にさせる、傾く
2504,inclined,～する傾向がある
2505,include,含む
2506,including,を含めて
2507,inclusive,全てを含んだ
2508,income,収入、所得
2509,incompetent,無能な、無力な、無能力者
2510,incomprehensible,理解できない、わかりにくい
2511,inconsiderable,ささいな、わずかな
2512,inconsistent,一致していない、相反する
2513,inconvenience,に不便[迷惑]をかける；不便、迷惑、迷惑なもの[人]
2514,inconvenient,不便な、不都合な
2515,incorporate,取り入れる、組み込む
2516,increase,増加する、を増やす
2517,increasingly,ますます
2518,incredible,信じがたい、途方もない、とてもすばらしい
2519,incriminate,に罪を負わせる、を告発する
2520,incurable,不治の、治らない
2521,indebted,恩を受けている
2522,indeed,実際は、本当に、実に
2523,indefinite,不定の、ぼんやりした、不明瞭の
2524,independence,独立、自立
2525,independent,独立した
2526,index,指標、索引、指数、見出し
2527,indicate,指し示す、明らかにする、ほのめかす
2528,indication,兆候、指示
2529,indicative,指示する、暗示する
2530,indifferent,無関心な
2531,indigenous,固有の、現地の、生来備わった
2532,indigestion,消化不良、不消化
2533,indignation,憤慨
2534,indirect,間接の、まわりくどい
2535,indispensable,不可欠な
2536,indisputable,明白な、確実な
2537,individual,個人的な、個々の、特有の、個性的な
2538,induce,説得して～.させる(to do)、引き起こす
2539,indulge,没頭させる、甘やかす、～にふける
2540,indulgent,寛大な、甘い
2541,industrial,産業の
2542,industrialize,産業化する
2543,industry,産業、勤勉
2544,inefficient,非効率的な
2545,inept,不適切な
2546,inequality,不平等
2547,inevitable,避けられない、必然的な
2548,inevitably,必然的に
2549,infamous,いまわしい、悪名高い
2550,infant,（乳）幼児、（乳）幼児期の
2551,infect,感染する
2552,infection,感染（症）
2553,infectious,伝染性の
2554,infer,推論する、推測する
2555,inferior,より劣った
2556,inferiority,劣等、下位
2557,inferred,推量する
2558,infertility,不妊症
2559,infinite,無限の、無数の
2560,infinity,無限大
2561,inflammation,炎症
2562,inflate,ふくらませる、（物価）をつり上げる
2563,inflation,インフレ、高騰
2564,inflict,（苦痛、損害、罰など）を与える
2565,influence,影響を及ぼす、影響
2566,influential,影響力のある
2567,influx,(人・物の)殺到、(水・空気の)流入
2568,inform,知らせる、情報を提供する
2569,informal,形式ばらない、略式の、くだけた
2570,informant,情報提供者、内通者
2571,information,情報、案内（所）
2572,informative,有益な、情報[知識]を提供する
2573,infrastructure,インフラ、基本的施設、（経済）基盤
2574,ingenious,発明の才に富む、巧妙な、利口な
2575,ingenuity,創意、工夫、発明の才
2576,ingenuous,純真な、無邪気な
2577,ingest,摂取する
2578,ingredient,材料、成分
2579,inhabit,～に住んでいる、宿る
2580,inhabitant,住民、生息動物
2581,inhale,を吸い込む
2582,inherent,本来備わっている、固有の
2583,inherit,受け継ぐ、相続する
2584,inheritance,遺産
2585,inhibit,妨げる、～に…するのをやめさせる、抑制する物〔人〕
2586,inhospitable,もてなしの悪い、不愛想な、住むのに適さない
2587,initial,最初の、初期の、頭文字
2588,initially,初めのうちは、最初に
2589,initiate,を新たに始める
2590,initiative,構想、主導権、
2591,inject,注射する、注入する、導入する
2592,injection,注射、投入
2593,injure,傷つける、損なう
2594,injury,負傷、（名誉などを）傷つけること
2595,inland,内陸の
2596,inmate,(刑務所などの)収容者、入院患者
2597,innate,生まれつき持っている、固有の
2598,inner,内部の
2599,innocence,無罪、潔白
2600,innocent,無罪の、無邪気な、無知の
2601,innovation,刷新、大発明、革命的な変化
2602,innovative,革新的な
2603,innumerable,無数の、数え切れないほどの
2604,input,入力（情報）、投入、(情報の)提供
2605,inquire,尋ねる、調査する
2606,inquiry,調査、質問、問い合わせ
2607,insane,狂気の、正気ではない、非常識な
2608,inscription,碑文、刻むこと
2609,insect,昆虫
2610,insecurity,不安(感)、不安定（なもの）
2611,insert,挿入する、挿入物、折込広告
2612,inside,～の中に、内部の、内側
2613,insight,見識、理解（力）、洞察力
2614,insist,主張する、言い張る、要求する
2615,insistent,強く主張する、強要する、しつこい
2616,insoluble,不溶性の、解決できない
2617,insomnia,不眠症
2618,inspect,検査する、詳しく調べる
2619,inspection,検査、点検
2620,inspire,奮い立たせる、励ます、吹き込む、感動を与える
2621,install,インストールする、設置する、就任させる
2622,installment,分割払いの一回分
2623,instance,例、場合
2624,instant,即刻の、瞬間
2625,instantly,すぐに
2626,instead,その代わりに、そうではなくて
2627,instigate,推進する、扇動する
2628,instill,を徐々に教え込む、しみこませる
2629,instinct,本能、勘、直感、衝動
2630,institute,工科大学、研究所、協会
2631,institution,施設、（公共）機関、団体、制度、慣習
2632,institutional,制度(上)の、協会[学会]の
2633,instruct,に指示する、に教える
2634,instruction,指示、使用書
2635,instrument,器具、楽器
2636,instrumental,重要な役割を果たす
2637,insufficient,不十分な、不適当な
2638,insult,侮辱する、侮辱
2639,insurance,保険、保険料、保険金
2640,intact,無傷の、そっくり残って、完全な
2641,intake,摂取（量）、取り入れ
2642,integral,不可欠の、組み込まれた、内蔵型の、積分
2643,integrate,結合する、溶け込ませる、溶け込む
2644,integrity,高潔さ、誠実さ、統一された状態
2645,intellect,知性、〔the～(s)〕知識人
2646,intellectual,知的な、知識人
2647,intelligence,知性； 諜報
2648,intelligent,聡明な、知能を有する
2649,intelligible,理解可能な、判読可能な
2650,intend,～するつもりだ（to do）
2651,intense,強烈な、激しい
2652,intensity,強烈さ
2653,intensive,集中的な、強い、激しい
2654,intent,熱中して、集中した、意図、目的
2655,intention,意図
2656,intentionally,故意に、意図的に
2657,interact,相互に影響する、相互にやりとりする
2658,interaction,交流、相互作用
2659,interest,興味を起こさせる、興味、利益、利子
2660,interfere,妨げとなる、干渉する
2661,interior,室内の、内部の
2662,intermediate,中級の、中間の
2663,intermittently,断続的に、途切れ途切れに
2664,internal,内部の、国内の、内面的な
2665,international,国際的な、国家間の
2666,Internet,インターネット
2667,internship,【米】実務研修、研修期間
2668,interpersonal,人間[対人]関係の
2669,interpret,解釈する、通訳する
2670,interpretation,解釈、通訳
2671,interrogate,尋問する、取り調べる
2672,interrupt,邪魔をする、割り込む、中断する、
2673,intersect,交わる、横切る、区分する
2674,intersection,交差点
2675,interval,間隔、周期、休止期間
2676,intervene,干渉する、仲裁する、介在する
2677,intervention,介入、仲裁、干渉
2678,interview,インタビュー(する)、面接（する）
2679,intestine,腸
2680,intimate,親密な、とても私的な、内心の
2681,intimidate,脅す
2682,intoxicated,酒に酔った、熱狂した
2683,intricate,入り組んだ、複雑な、はっきりしない
2684,intrigue,の興味〔好奇心〕をそそる、陰謀
2685,intrigued,興味をそそられる
2686,intriguing,興味深い
2687,intrinsic,固有の、本来備わっている
2688,introduce,導入する、紹介する
2689,introspection,内省、自己反省
2690,intrude,押し入る、入り込む、侵害する
2691,intruder,侵入者
2692,intrusion,侵入、（意見などの）押しつけ
2693,intuition,直観(的洞察)
2694,invade,侵略する、侵害する、（場所）に殺到する
2695,invalid,(法的に)無効な、説得力のない
2696,invaluable,極めて貴重な[高価]な
2697,invariably,常に、いつも決まって
2698,invasion,侵害、侵入
2699,invent,発明する、（話）をでっちあげる
2700,inventive,独創的な
2701,inventory,目録、明細表
2702,invest,投資する、つぎ込む
2703,investigate,調査する、究明する、調査する
2704,investigation,(詳しい)調査、研究
2705,invincible,無敵の
2706,invisible,見えない
2707,invite,招待する、～に…～することを勧める
2708,invoice,明細請求書、納品書
2709,involuntary,無意識の、自由意志によらない、意志に反した
2710,involve,巻き込む、含む、没頭させる、複雑にする
2711,involved,関係している、参加している
2712,involvement,関与、巻き込まれること
2713,ion,イオン
2714,Ireland,アイルランド
2715,iron,鉄壁
2716,ironic,皮肉な
2717,ironically,皮肉にも
2718,irony,皮肉、予想に反する結末
2719,irrational,理性のない、不合理な
2720,irregular,不規則な
2721,irrelevant,無関係の、見当違いの
2722,irresistible,抵抗できない、非常に魅力的な
2723,irresponsible,無責任な
2724,irreversible,元に戻せない
2725,irrigation,灌漑（かんがい）
2726,irritate,いらいらさせる、ひりひりさせる
2727,irritation,いらだち
2728,island,島
2729,isolate,孤立させる、分離する、隔離する
2730,isolated,孤立している
2731,isolation,孤立，分離，孤独感
2732,issue,発行する、支給する、問題、(雑誌などの)号
2733,item,記事、品物、品目、項目、箇条
2734,itinerary,旅行の日程、旅行計画
2735,jail,刑務所、拘置所
2736,jam,詰め込む、動かなくする、込み合い、ジャム
2737,janitor,(アパート・ビル・学校などの)用務員、管理人
2738,jar,(広口の)びん、つぼ
2739,jaw,あご
2740,jealous,ねたんで、嫉妬して、嫉妬深い
2741,jeopardize,を危険にさらす
2742,jewelry,宝石
2743,join,～に加わる、～をつなぐ、～に参加する
2744,joint,共同の、接合、継ぎ目、関節、を接合する
2745,journal,(定期刊行)雑誌、日誌
2746,journalism,ジャーナリズム、報道
2747,journey,旅行
2748,joy,喜び
2749,judge,判断する、裁く、裁判官、審判
2750,jumble,ごちゃまぜにする
2751,jump,跳ぶ、飛び上がる、飛ばす、跳ぶこと
2752,junction,合流点
2753,junk,くず、がらくた
2754,Jupiter,木星
2755,jury,陪審（員団）、審査員団
2756,Justice,正義、公正、裁判（官）
2757,justify,弁明する、正答する
2758,justly,正当に、当然のことながら
2759,juvenile,青少年の、若い、未熟な、青少年
2760,keen,熱心な、鋭い、強い
2761,kick,蹴る（こと）
2762,kid,子供、冗談を言う
2763,kidnap,～を誘拐する
2764,kidney,腎臓
2765,kin,血縁、親族
2766,kindergarten,幼稚園
2767,kingdom,王国、（通例the）～界
2768,kinship,血族関係
2769,kitten,子ネコ
2770,knee,ひざ
2771,knit,編む、組み合わせる、（まゆ）をよせる
2772,knock,たたく、ノック（の音）、打つこと
2773,knot,結び目
2774,knowledge,知識、知っていること、認識
2775,knowledgeable,よく知っている、物知りの
2776,label,ラベル、表示、～に…とラベルを付ける
2777,labor,（つらい）労働
2778,laboratory,実験室、研究所、研究室
2779,lack,不足、～を欠いている
2780,ladder,はしご、（出世の）階段
2781,lag,遅れること、時間のずれ
2782,lament,悲しむ、嘆く、悲しむ
2783,landfill,ごみ埋め立て地
2784,landmark,目じるし、画期的事件、歴史的建造物
2785,landmine,地雷
2786,landscape,風景(画)、地形
2787,lane,車線
2788,lap,ひざ
2789,lapse,(時間の)経過、ちょっとした誤り
2790,laptop,ラップトップ、ノートパソコン
2791,largely,ほとんど、主として
2792,last,最後の、この前の、続く、長持ちする
2793,lately,最近.
2794,latest,最新の
2795,Latin,ラテン語、ラテン系の人、ラテン系の
2796,latitude,緯度、許容範囲
2797,latter,後者の、後半の、後者
2798,laugh,笑う
2799,laughter,笑い
2800,launch,開始する、打ち上げる、発射、開始
2801,laundry,洗濯（物）、クリーニング屋
2802,law,法(律)、（自然界の）法則
2803,lawn,芝生
2804,lawsuit,（民事）訴訟
2805,lawyer,弁護士
2806,lay,置く、横たえる、（卵）を産む
2807,layer,（積み重ねたものの）層、地層
2808,lazy,怠け者の、くつろいだ
2809,lead,導く、を率いる、（生活）を送る、先導
2810,leader,指導者、リーダー、先頭に立つ人
2811,leadership,リーダーの地位、指導者の資質
2812,leading,主要な、最も重要な、一流の、先頭の
2813,leaflet,ビラ、小冊子、小さい葉
2814,league,（競技）連盟、同盟
2815,leak,漏らす、漏れる、ひび、割れ、漏れ
2816,lean,やせた、傾く、上体を曲げる
2817,leap,跳ぶ、(心が）おどる、（考えが）ひらめく
2818,lease,賃貸借契約
2819,least,最小（少）（の）、最も～でない
2820,leather,革製の（なめし）革、革製品
2821,leave,残す、置き忘れる、放っておく、出発する、許可、休暇
2822,lecture,講義、講演、講義する
2823,leftover,(特に食事の)残りもの
2824,legacy,遺産、遺物
2825,legal,法律の、合法の
2826,legally,法的に、合法的に
2827,legend,伝説、言い伝え、（図表の）凡例
2828,legible,読みやすい
2829,legislate,法律を制定する
2830,legislation,法律、立法
2831,legitimate,合法的な、妥当な
2832,legitimately,正当に、合法的に
2833,leisure,暇、余暇
2834,lend,貸す、与える
2835,length,（物や時間の）長さ
2836,lengthy,長い、長たらしい
2837,lenient,寛大な
2838,leprosy,ハンセン病
2839,less,より少なく[い]
2840,lessen,～を少なくする
2841,lesser,より劣った、重要でない
2842,lesson,教訓、レッスン、授業
2843,lest,～しないように
2844,let,～が…するのを許す、～を…の状態にする
2845,lethal,死を引き起こす、死に至る(to)
2846,letter,文字、手紙、(～s)文字、学識
2847,level,水準、程度、高さ
2848,leverage,てこの作用、影響力
2849,lexicon,語彙（集）、辞書
2850,liable,～しやすい、～しがちな、法的責任のある
2851,liberal,自由主義の、寛大な、一般教養の
2852,liberate,を解放する
2853,liberty,（拘束などのない）自由
2854,librarian,司書、図書館員
2855,license,認可する、免許（証）
2856,lick,なめる、ひとなめ、少量
2857,lid,(箱・鍋などの)蓋、まぶた
2858,lie,横たわっている、ある、嘘をつく、嘘
2859,life,生命、一生、人生、生物、元気、活気
2860,lifelong,生涯を通じての、一生の
2861,lifestyle,ライフスタイル、生活様式
2862,lifetime,一生
2863,lift,持ち上げる、高揚させる、上がる（こと）、乗せること
2864,lightning,稲妻
2865,likelihood,見込み、ありそうなこと
2866,likely,～しそうな、ありそうな、本当らしい
2867,likeness,似ていること
2868,likewise,同様に
2869,limb,手足、四肢
2870,limestone,石灰岩
2871,limit,制限する、制限、限界
2872,limitation,制限
2873,limited,限定された、わずかの
2874,line,職業、方針、短い手紙、線、列、（文の）行
2875,linger,居残りする、立ち去りかねている、まとわりつく
2876,linguistic,言語学の、言葉の
2877,linguistics,言語学
2878,link,関連、つながり、交通手段、リンク
2879,linkage,関連、連鎖
2880,lint,糸くず、綿くず
2881,lip,唇
2882,liquid,液体（の）
2883,list,リスト（一覧表）、をリスト（一覧表）にする
2884,literacy,読み書きの能力、（ある分野の）知識能力
2885,literal,文字どおりの、逐語的な、散文的な
2886,literally,文字通り
2887,literary,文学の、文語の
2888,literate,読み書きのできる、教養のある、文学に通じた
2889,literature,文学、文献、印刷物
2890,litter,ごみ、乱雑な状態
2891,livelihood,生計、生活手段
2892,lively,生き生きとした
2893,liver,肝臓、レバー
2894,livestock,(牛・羊・豚などの)家畜(類)
2895,lizard,トカゲ
2896,load,(荷など)を積む、積み荷、負担、多量
2897,loan,借金、ローン、を貸し付ける
2898,loathe,ひどく嫌う
2899,lobby,圧力団体、（ホテルなどの）ロビー、ロビー活動をする
2900,local,"地域の, 地元の、地元の人"
2901,locate,見つける、〔受身形で〕位置する
2902,location,場所、位置
2903,lock,錠（をかける）
2904,locomotive,機関車
2905,lodge,(苦情・抗議など)を申し出る、を預ける、を泊める
2906,lofty,崇高な、高慢な、非常に高い
2907,log,丸太、記録する
2908,logging,伐採
2909,logic,論理（学）、必然性
2910,logical,論理的な、筋が通った、論理学（上）の
2911,lonely,孤独の、寂しい
2912,long,熱望する、思い焦がれる
2913,longevity,長寿、寿命、長年勤続
2914,longitude,経度
2915,long-lasting,長続きする
2916,long-term,長期にわたる、長期的な
2917,loophole,抜け穴
2918,loose,ゆるい、解き放たれた、節度のない
2919,lord,貴族、（L-）～卿、君主
2920,lose,失う、負ける、（体重など）を減らす
2921,loss,紛失、損害、死、敗北
2922,lot,くじ、運命、区画、ひと山、たくさんのこと
2923,lottery,宝くじ、くじ引き、運、めぐりあわせ
2924,loudly,大声で、騒々しく
2925,lovely,すてきな、美しい
2926,low,低い、少ない、低く、少なく
2927,lower,下げる、下部の、下級の
2928,loyal,忠実な、誠実な
2929,loyalty,忠誠
2930,luck,（幸）運
2931,luggage,手荷物、旅行カバン
2932,lump,こぶ、はれ、固まり
2933,lung,肺
2934,lure,誘惑する、(釣りの)疑似餌、魅力
2935,luxurious,豪華な、ぜいたくな
2936,luxury,ぜいたく（品）、豪華な
2937,lynx,オオヤマネコ
2938,machinery,機械(装置)
2939,mad,怒っている、熱中して、ばかげた
2940,magnetic,磁気の、磁石の、人を引きつける
2941,magnificent,壮大な、素晴らしい、荘厳な、華やかな
2942,magnify,拡大する、強める、誇張する
2943,mainland,本土
2944,mainly,主として
2945,mainstream,（活動・思潮などの）主流、大勢
2946,maintain,維持する、主張する、扶養する、整備する
2947,maintenance,保守、整備、維持
2948,majestic,威厳のある、雄大な
2949,major,重大な、主要な、大部分の、専攻する
2950,majority,大部分、多数派
2951,makeup,化粧、化粧品、構成、性質
2952,male,男性（の）、雄（の）
2953,malicious,悪意ある、意地の悪い
2954,mall,ショッピングセンター
2955,malnutrition,栄養失調
2956,mammal,哺乳動物、哺乳類
2957,manage,経営する、管理する、何とかやり遂げる
2958,management,経営(者)、取り扱い
2959,mandatory,義務的な、強制的な、(統治を)委任された
2960,manic,躁状態の
2961,manifest,明らかにする、表す、明らかな、はっきりした
2962,manipulate,巧みに扱う、うまく処理する、操作する
2963,mankind,（集合的に）人類
2964,man-made,(物質などが)合成の、人工の
2965,manner,態度、方法、やり方行儀、作法、風習
2966,manual,手動の、手の、人力を要する
2967,manufacture,製造する、でっち上げる
2968,manufacturer,製造業者（メーカー）
2969,manuscript,（手書きの）原稿、写本
2970,maple,カエデ、モミジ
2971,margin,余白、縁、差、利ざや
2972,marine,海の、海に住む、海軍の、海兵隊
2973,mark,印、標的、記号、点数、印をつける、示す、特徴づける
2974,marked,著しい、顕著な
2975,markedly,目立って、明らかに
2976,marketing,マーケティング
2977,marriage,結婚
2978,married,結婚している
2979,marry,～と結婚する
2980,Mars,火星
2981,marvel,驚く、驚くべき人、偉業
2982,marvelous,驚くべき、不思議な、素晴らしい
2983,masculine,男性的な、力強い、男性、男性形（の語）
2984,mask,隠す、仮面
2985,mass,かたまり、多数［量］、一般大衆、庶民
2986,massive,極めて大きい
2987,master,主人、名人、習得する
2988,masterpiece,傑作、代表作、名人芸
2989,match,調和する、匹敵する、試合、匹敵するもの
2990,mate,仲間、つれあい（＝妻・夫）、（動物が）つがう
2991,material,資料、原料、物質、物質の、肉体（上）の
2992,materialistic,物質主義の
2993,maternal,母の、母親らしい、妊婦の
2994,maternity,母性
2995,mathematics,数学
2996,mating,交尾、交配
2997,matter,事柄、問題、事態、困難、物質
2998,mature,成熟した、熟した
2999,maxim,格言、原理
3000,maximize,を最大限にする
3001,maximum,最大限
3002,mayor,市長、（自治体の）長
3003,maze,迷路、複雑に込み入ったもの
3004,meadow,牧草地、草地
3005,meal,食事
3006,mean,意味する、つもりで言う、重要な意味を持つ
3007,meaning,意味、意図
3008,meaningful,意味のある
3009,meaningless,無意味な、無益な
3010,means,（単・複数扱い）手段、方法、財産、収入
3011,meantime,その間
3012,meanwhile,一方、その間
3013,measles,はしか、麻疹
3014,measurably,かなり目に見えて
3015,measure,測る、見積もる、示す、測定、手段、対策
3016,mechanic,機械工
3017,mechanical,機械的な、機械の、メカニズム
3018,mechanism,仕組み
3019,media,メディア、媒体
3020,median,中央の、中間の
3021,mediate,調停する、仲介する、中間の
3022,mediator,仲介者、調停者
3023,medical,医学の、医療の
3024,medication,医薬、薬物医療
3025,medicine,医薬、医学
3026,medieval,中世の、時代遅れの
3027,mediocre,平凡な
3028,meditate,じっくり考える、瞑想する、企てる
3029,meditation,（通例the）瞑想、熟考（on）
3030,Mediterranean,地中海の
3031,medium,中間、媒体、手段、（複数形mediaで）報道機関
3032,meet,～を満たす、～にかなう、交差する
3033,melancholy,憂鬱な、もの悲しい、憂鬱、哀愁
3034,mellow,(性格が)円熟した、柔らかくて豊かな[美しい]
3035,melt,溶ける、和らぐを溶かす
3036,membership,会員であること、会員権、会員、構成員
3037,memoir,回顧録
3038,memorable,忘れられない、記憶すべき
3039,memorize,[他] ～を暗記する
3040,memory,記憶（力）、思い出
3041,menace,脅威を与える、脅迫する
3042,mend,修理する、改める
3043,mental,心の、知的な、知能の、頭の中で考える
3044,mention,述べる、言及する、言及、軽く話題に触れること
3045,mentor,～を指導する、（会社，大学などでの）指導者
3046,merchandise,商品、グッズ、販売を促進する、取引する
3047,merchant,商人、商業の
3048,merciful,慈悲深い、情け深い
3049,Mercury,水星
3050,mercy,慈悲、幸運
3051,mere,単なる、ほんの
3052,merely,単に
3053,merge,合併する、溶け込ませる、合併する
3054,merit,利点、功績、真価
3055,merry,陽気な
3056,mess,混乱、取り散らかした状態、散らかす
3057,metabolism,代謝、代謝作用
3058,metallurgy,治金（術）
3059,metaphor,隠喩、象徴
3060,meteor,流星，隕石
3061,meteorite,隕石
3062,method,方法、筋道、体系、秩序
3063,methodology,方法論、研究方法
3064,metropolis,首都、大都市
3065,metropolitan,大都市の、首都圏の
3066,Mexico,メキシコ
3067,microbe,微生物、細菌
3068,microscopic,顕微鏡でしか見えない、微小の
3069,microwave,マイクロ波、電子レンジ（にかける）
3070,midday,正午、真昼
3071,middle,中央（の）、中間（の）
3072,midst,まっただ中
3073,mighty,強大な、広大な、並外れた
3074,migrate,移住する、（鳥などが）渡る
3075,migration,移住、移動
3076,mild,穏やかな、まろやかな、（程度などが）軽い
3077,mile,マイル（約1.609ｋｍ）
3078,mileage,総マイル数、走行距離
3079,milestone,画期的な出来事
3080,military,軍隊（軍人）の、軍隊
3081,mill,製造工場、製粉所、粉ひき機
3082,millennium,千年(祭)
3083,millionaire,百万長者、大富豪
3084,mimic,をまねる
3085,mind,精神、頭脳、注意（力）、嫌がる
3086,mine,鉱山、（知識などの）宝庫
3087,mineral,鉱物、ミネラル、鉱物を含んだ、鉱物の
3088,mingle,混ぜる、混ぜ合わせる
3089,miniature,小型の
3090,minimal,最小(限度)の
3091,minimum,最小限度
3092,minister,大臣、職者
3093,ministry,省庁
3094,minor,小さな、重要でない
3095,minting,（貨幣の）鋳造
3096,minute,非常に小さい、ささいな、詳細な
3097,miracle,奇跡
3098,mirror,鏡
3099,miscellaneous,種々雑多な
3100,mischief,いたずら、害、いたずらっ子
3101,mischievous,いたずら好きな
3102,misconception,誤解、誤った考え
3103,misdeed,悪行、非行、犯罪
3104,miserable,惨めな
3105,misery,悲惨さ、苦痛、苦難、惨めさ、不幸
3106,misfortune,不幸、不運
3107,mislead,誤解させる、欺く、間違った方向に導く
3108,misleading,人の判断を誤らせる、まぎらわしい
3109,miss,しそこなう、間に合わない、外す、～がないのを寂しく思う
3110,mission,（特別）任務、使節（団）
3111,missionary,伝道者、布教者
3112,mistake,間違える、誤り
3113,mistakenly,間違って
3114,misunderstand,誤解する
3115,mitigate,[他] （苦痛・影響・罰など）～を緩和する
3116,mixture,混合、組み合わせ
3117,moan,うめき声を出す、不平を言う、嘆く、うめき声、不満
3118,mob,群衆、野次馬、集団、（受け身で）取り囲まれる
3119,mobile,動きやすい、移動式の、流動的な
3120,mobility,可動性、流動性
3121,mobilize,を結集する、を動員する
3122,mock,ばかにする、のまねをしてからかう
3123,mode,方式、気分、形態、流行
3124,model,模型、手本、モデル
3125,moderate,普通の、穏やかな、抑える、穏やかになる
3126,moderation,適度に
3127,modern,現代の、近代の
3128,modernization,近代化、現代化
3129,modest,謙虚な、控えめな、質素な、まあまあの
3130,modify,修正する
3131,moist,しっとりした、湿った
3132,moisture,水分、湿気
3133,mold,型に入れて作る、形成する
3134,molecule,分子、微粒子
3135,moment,(特定の)時、瞬間
3136,momentary,瞬間の
3137,momentum,力、勢い、運動量
3138,monarch,君主、皇帝
3139,monarchy,君主制、君主国
3140,monetary,金銭的な、金融の
3141,monitor,（監視）モニター、を監視する
3142,monk,修道士、僧
3143,monologue,独白
3144,monopoly,独占、専売（権）、独占企業、専売会社
3145,monotonous,単調な、一本調子の、退屈な
3146,monument,記念碑、遺跡、不滅の業績
3147,monumental,きわめて重要な、歴史的な、記念碑の
3148,mood,気分、雰囲気
3149,moral,道徳規範、道徳的な
3150,morality,道徳（性）
3151,morally,道徳的に、道義上
3152,moreover,さらに
3153,mortal,致命的な、死すべき（運命の）
3154,mortality,死亡
3155,mortgage,住宅ローン、抵当（権）
3156,mosquito,蚊
3157,moss,コケ
3158,mostly,主に、たいていは
3159,moth,ガ
3160,motion,動き、動作、運動、動議
3161,motivate,（人）に動機を与える
3162,motive,動機、原動力となる
3163,motor,モーター、原動力
3164,mount,載せる、はめ込む、またがる、乗る
3165,mourn,悲しみ嘆く
3166,movement,運動（団体）、動き、移動
3167,mud,泥
3168,muddle,混乱させる；もたもたする
3169,muddy,泥だらけの
3170,mule,ラバ
3171,multicultural,多文化〔民族〕からなる
3172,multiple,多様な、倍数の、倍数
3173,multiply,数を掛ける、増やす
3174,multitude,多数
3175,mumble,つぶやく
3176,mummy,ミイラ、お母さん
3177,mundane,平凡な
3178,municipal,地方自治体の、市町（営）の
3179,murder,～を殺害する、殺人
3180,murmur,かすかな音、つぶやき、ざわめく、ささやく
3181,muscle,筋肉、筋力、腕力、体力
3182,mush,をつぶす；つぶしてどろどろにしたもの
3183,Muslim,イスラム教徒、イスラム教の
3184,mutation,突然変異（体）、変化
3185,mutter,つぶやき、不平、つぶやく、不平を言う
3186,mutual,共通の、相互の
3187,mystery,不思議、神秘
3188,mystical,神秘的な、不可思議な
3189,myth,作り話、神話、誤った考え
3190,mythology,神話、神話学、（比喩的に）俗説、迷信
3191,na?ve,だまされやすい、単純な、純真な、無邪気な
3192,nail,釘、びょう、爪、釘で留める、捕まえる
3193,naive,騙されやすい、単純な、純真な、無邪気な
3194,naked,裸の、あからさまな、無防備の
3195,namely,すなわち、つまり
3196,nap,うたた寝する、（特に日中の）うたた寝
3197,narrative,物語、話、（小説の）叙述部分、地の文
3198,narrow,(幅・心・範囲が)狭い、辛うじての
3199,narrowly,かろうじて
3200,nasty,不快な、いやな、意地悪な、卑劣な
3201,nation,国家、国民
3202,nationalism,国家主義
3203,nationality,国籍、国民、国民性
3204,native,母国の、その土地に生まれた、原産の、原住民
3205,natural,当然の、自然の、生まれながらの
3206,nature,性質、（物事の）本質、自然（界）
3207,naughty,いたずらな、わんぱくな、邪悪な
3208,nauseous,吐き気がする
3209,navigate,航行する、操縦する、誘導する、うまく切り抜ける
3210,navigation,航海
3211,navy,海軍
3212,nearby,近くの、近くで
3213,nearly,ほとんど、すんでのところで
3214,neat,きちんとした、手際のよい、すばらしい
3215,necessarily,[否定文で]必ずしも（…ない）、必ず
3216,necessary,必要な
3217,nectar,(花の)蜜
3218,needle,針、とがったもの
3219,negative,否定的な、消極的な、負の、否定、(写真の)ネガ
3220,negativity,否定的態度、消極性
3221,neglect,軽視、怠慢、軽視する、放っておく、怠る
3222,negotiate,交渉する、を交渉して取り決める
3223,neighbor,近所の人、隣人、隣国（の人）、仲間
3224,neighborhood,地域、近所
3225,neither,どちらも…ない、Ｓもまた…ない
3226,nephew,甥
3227,Neptune,海王星
3228,nerve,神経、神経過敏、～する度胸
3229,nervous,神経の、神経質な、臆病な、あがった、緊張した
3230,nervousness,神経質、いらいらすること、臆病
3231,nest,（鳥・昆虫などの）巣
3232,net,正味の、掛け値なしの
3233,network,網状のもの、放送網、ネットワーク
3234,neurochemical,神経化学の
3235,neuron,神経単位（ニューロン）
3236,neuronal,神経単位の、ニューロンの
3237,neuroscience,神経科学
3238,neutral,中立の、はっきりしない
3239,nevertheless,それにもかかわらず
3240,nightmare,悪夢、悪夢のような経験〔事態〕
3241,nitrogen,窒素
3242,noble,気高い、貴族の、貴族
3243,nobody,誰も…ない、無名の人
3244,nod,うなずく、会釈する、いねむりする
3245,nominate,指名する
3246,none,どれも（誰も）…ない
3247,nonetheless,それにもかかわらず、それでもなお
3248,nonsense,ばかげた物［話、考え］、無意味な言葉
3249,nor,Ｓもまた…ない
3250,norm,規範、標準
3251,normal,標準の、正常な、標準
3252,north,北（部）（の）
3253,nostril,鼻の穴、鼻孔
3254,nosy,詮索好きな、おせっかいな
3255,notable,注目に値する、著名な
3256,notably,とりわけ
3257,note,注意する、気づく、メモ、紙幣、注釈、音符、(声の)調子
3258,notice,気づく、通知する、言及する
3259,noticeable,著しい、目立つ
3260,notify,知らせる、通知する
3261,notion,概念、考え、意見、気まぐれな考え
3262,notorious,悪名高い
3263,notwithstanding,それにもかかわらず
3264,nourish,に栄養を与える、を育てる
3265,novel,小説、斬新な
3266,novelty,目新しさ
3267,nowadays,近ごろは
3268,nowhere,どこにも…ない、実在しない場所
3269,noxious,有害な、有毒な
3270,nuance,に微妙な違いを与える；微妙な違い
3271,nuclear,核の、原子力の、中心の、核兵器
3272,nuisance,迷惑な行為や人
3273,numb,麻痺させる、無感覚になった、麻痺した
3274,numerous,非常に数の多い
3275,nun,修道女、尼僧
3276,nursery,託児所、保育園、子供部屋、園芸店、養殖場
3277,nursing,保育、看護
3278,nurture,～を養育する、～を育てる、～を教育する
3279,nutrient,栄養になる、滋養に富む、栄養物、栄養素
3280,nutrition,栄養（物・摂取）
3281,nutritional,栄養（上）の
3282,nutritious,栄養になる
3283,oath,誓い、誓約
3284,obedient,従順な、素直な
3285,obese,肥満した
3286,obesity,（病的）肥満
3287,obey,(命令・指示など)に従う
3288,object,反対する、（…）と言って反対する（that節）
3289,objectionable,不快な、反対すべき
3290,objective,目的、目標、客観的な
3291,obligation,義務、恩義
3292,obligatory,しなければならない、義務である
3293,oblige,～に…させる、～に親切にする、～に恩恵を与える
3294,obscure,あいまいな、不明瞭な、無名の、人目に付かない
3295,observance,（法・規則の）順守
3296,observant,観察の鋭い
3297,observe,観察する、を守る、（祝祭日など）を祝う、～と言う
3298,observer,監視員、観察者
3299,obsess,取りつく、（必要以上に）気にする
3300,obsessed,とりつかれている
3301,obsession,（考えなどに）取りつかれること、妄想、強迫観念
3302,obsolete,廃れた、使われなくなった、古くなった
3303,obstacle,障害（物）
3304,obstinate,頑固な、しつこい
3305,obstruct,妨害する、ふさぐ、さえぎる
3306,obtain,入手する
3307,obvious,明らかな、見てすぐわかる、分かり切った
3308,obviously,明らかに、当然ながら
3309,occasion,場合、時、出来事、機会、行事、（～する）根拠
3310,occasionally,時々
3311,occupancy,占有
3312,occupation,職業、占領
3313,occupy,占める、～に（賃借で）住む
3314,occur,起こる、（考えなどが）（突然）浮かぶ
3315,ocean,（通例the）大洋
3316,odd,変わった、片方の、奇数の、端数の、少しの
3317,odds,(優劣などの)差、勝ち目、可能性
3318,odor,におい、気配
3319,offend,の気分を害する、罪を犯す
3320,offending,怒らせる
3321,offensive,不快な、無礼な、攻撃的な
3322,offer,提供する、申し出る、差し出す
3323,office,地位、職場、事務所、研究室
3324,official,公の、公式の、公務（上）の、お役所風の
3325,offset,相殺する、埋め合わせする、埋め合わせ
3326,offspring,（単複両扱い）(人などの)子(孫)
3327,old-fashioned,時代（流行）遅れの
3328,ominous,不吉な
3329,omit,除外する、省略する、うっかり忘れる
3330,ongoing,継続している、進行中の
3331,online,オンラインの（で）
3332,onset,発症
3333,on-the-job,実地の、職場での
3334,onto,の上へ
3335,operate,操作する、動く、作用する、手術する
3336,opinion,意見
3337,opponent,相手、敵、対抗者、反対者
3338,opportunity,機会
3339,oppose,～に反対する、～を（…に）対立させる
3340,oppress,抑圧［迫害］する、悩ませる
3341,oppression,圧迫、圧制、圧迫感
3342,oppressive,重苦しい、過酷な、圧倒的な、暑苦しい
3343,opt,(他よりも～の方を)選択する、決める
3344,optimism,楽観主義
3345,optimistic,楽観的な
3346,option,選択肢、選択（権の自由）
3347,optional,任意の、選択が自由の
3348,oral,口頭での、口（内）の
3349,orbit,軌道、（活動・勢力などの）範囲
3350,ordeal,苦労、試練
3351,order,命令、注文、順番、秩序、を命令する、を注文する
3352,ordinary,普通の、正規の、ありふれた、平凡な
3353,organ,（体の）器官、（政府などの）機関、組織、オルガン
3354,organic,有機栽培の
3355,organism,有機体、生物、組織体
3356,organization,組織（化）、団体
3357,organize,組織する、体系づける、準備する、整える
3358,organizer,主催者、まとめ役、幹事
3359,orient,〔受身形で〕～に向いている、～に慣らす
3360,oriented,志向の
3361,origin,起源、由来、発端、生まれ、血統
3362,originally,元来は、初めは
3363,originate,由来する、生じる、始まる
3364,ornament,（室内・庭園の）装飾品、置物、を飾る
3365,orphan,孤児
3366,otherwise,さもなければ、その他の点で、違ったふうに、別のやり方で
3367,ought,～すべきである
3368,outbreak,（悪いことの）突発、発生、暴動、反乱
3369,outburst,(火山・怒り・笑いなど)の爆発
3370,outcast,見捨てられた人、浮浪者
3371,outcome,結果、成果
3372,outdated,時代遅れの、古くて役に立たない、期限切れの
3373,outer,外側の、中心から離れている
3374,outfit,衣服、用具一式、装備を用意する
3375,outgoing,社交的な、積極的な、引退する
3376,outlet,直売店、特売店、はけ口、（電気の）コンセント
3377,outline,概略、輪郭、要点を言う、輪郭をつける
3378,outlive,他の人より長生きする
3379,outlook,態度、考え方、見通し、見込み
3380,outnumber,に数でまさる
3381,outpace,～より速いペースで進む
3382,output,生産高、（コンピューターなどの）出力
3383,outraged,憤慨している
3384,outrageous,法外な、途方もない、けしからぬ
3385,outrageously,ひどく、法外に
3386,outset,最初
3387,outsider,部外者、門外漢
3388,outsmart,出し抜く
3389,outsource,を外注する、を業務委託する
3390,outstanding,際立った、未払いの、未解決の
3391,outweigh,より重要である、に勝る、より重い
3392,overall,全体の、全面（全般）的な、全体として
3393,overcast,覆い隠す；悲しみで包まれた
3394,overcome,打ち勝つ、克服する、[受け身で]うちのめされる
3395,overconfident,自信過剰な
3396,overdo,を使い過ぎる、をやり過ぎる
3397,overdue,支払期限を過ぎた、(予定の日時より)遅れた
3398,overestimate,を過大評価する[見積もる]
3399,overfishing,（魚の）乱獲
3400,overflow,あふれる、あふれ出ること[人・物]
3401,overhaul,(システムなど)を総点検する、を分解修理する
3402,overhear,ふと耳にする
3403,overlap,重なり合う、共通するところがある、重ね合わす、重複
3404,overlay,を覆う、を上塗りする
3405,overload,に負荷をかけすぎる
3406,overlook,見落とす、大目に見る、見下ろす
3407,overly,あまりに、過度に
3408,overnight,一晩で、一晩中、急に、突然
3409,overpower,を圧倒する
3410,overrate,過大評価される
3411,overseas,海外へ［に、で]
3412,oversee,（労働者・仕事・活動など)を監督する、を監視する
3413,overshadow,影を投げかける、～の影を薄くする
3414,oversight,見落とし、監督、管理
3415,overspend,（お金を）使いすぎる
3416,overstate,大げさに話す、誇張する
3417,overtake,～に追いつく、（災難・強い感情などが）を襲う
3418,overthrow,倒す、崩壊させる、崩壊、打倒、転覆
3419,overweight,太りすぎの
3420,overwhelm,圧倒する、打ちのめす
3421,overwhelming,圧倒的な
3422,overwork,働きすぎる、～を働かせすぎる，酷使する、過労
3423,owe,に借金がある、に恩を受けている
3424,owing,のために
3425,owl,フクロウ
3426,own,所有している、（事実・罪など）を認める
3427,ownership,所有権、所有者であること
3428,oxygen,酸素
3429,oyster,カキ
3430,pace,歩調、進度
3431,Pacific,太平洋
3432,pack,詰める、包む、衣類を詰める、1箱
3433,package,を荷造り（包装）する；包み、容器
3434,packet,パッケージ、包装、袋、多額の金：パケット
3435,pact,条約、協定
3436,pageant,野外劇、ページェント
3437,pain,苦痛、痛み、苦悩、〔～s〕骨折り
3438,painful,つらい、痛い
3439,painkiller,鎮痛剤
3440,painless,痛みのない、努力のいらない
3441,palace,宮殿
3442,pale,顔色が悪い、（色の）淡い、薄い、迫力のない
3443,palm,手のひら、ヤシ
3444,pandemic,全国（全世界）流行の、感染爆発の
3445,panel,(公開討論会の)出演者、パネル、専門家集団、委員会
3446,panic,大混乱、恐慌、をうろたえさせる、うろたえる
3447,panorama,全景、パノラマ
3448,pant,あえぐ、あえぎながら動く[言う]、あえぎ、息切れ
3449,paperwork,(必要)書類、書類事務
3450,paradigm,理論的枠組み
3451,paradox,逆説、パラドックス、矛盾
3452,paradoxically,逆説的に（言えば）、逆説的だが
3453,paragraph,段落
3454,parallel,平行な、類似の、類似点、平行に
3455,paralysis,麻痺、〔比喩的に〕麻痺（状態）
3456,paralyze,～を麻痺させる
3457,paralyzed,麻痺している
3458,paranoid,被害妄想的な
3459,paraphrase,言い換える
3460,parasite,寄生生物
3461,Pardon,～を許す
3462,parental,親の
3463,parliament,（英国などの）議会、国会議員（団）
3464,parody,パロディー
3465,parrot,オウム
3466,part,部分、部品、役目、せりふ、分け前、分担、側、味方
3467,partial,部分的な、不公平な
3468,participant,参加者
3469,participate,参加する、関わる、加わる
3470,participation,参加
3471,particle,（微）粒子、ほんのわずか
3472,particular,特定の、格別の、著しい、好みがうるさい、個々の項目
3473,partition,仕切り
3474,partly,部分的に、一部には
3475,pass,通過する、渡す、経過する、通る、亡くなる（away）、通行許可
3476,passage,通行、通路、（文章や曲の）一節、経過、通過、廊下、旅行
3477,passenger,乗客
3478,passion,情熱、熱中、激情、愛情
3479,passionate,情熱的な
3480,passive,消極的な、受け身の、言いなりになる、おとなしい
3481,past,過去、過去の、ここ～（年月など）の、を過ぎて
3482,pastime,気晴らし、娯楽
3483,pasture,牧草地、放牧地
3484,patch,部分、斑点、継ぎ、貼り薬
3485,patent,特許（権）、特許品、特許の、特許に関する、明白な
3486,path,小道、歩道、方針、生き方、進路
3487,pathetic,哀れな
3488,pathway,小道、細道
3489,patient,患者、忍耐強い
3490,patriot,愛国者
3491,patriotic,愛国的な
3492,patriotism,愛国主義
3493,patron,後援者、パトロン
3494,patronizing,見下すような、横柄な、恩着せがましい
3495,pattern,様式、模様
3496,pause,（一時的に）中止する、（一瞬）立ち止まる
3497,pave,舗装する
3498,pavement,舗装、舗装道路
3499,pavilion,（博覧会などの）パビリオン
3500,pay,支払う、（注意など）を払う、報いる、割に合う、給料
3501,paycheck,給与
3502,peaceful,平和（的）な
3503,peak,峰、頂上、最高潮
3504,pearl,真珠、貴重なもの[人]
3505,peasant,（昔または発展途上国の）小作農
3506,peculiar,特有の（to）、奇妙な
3507,pedestrian,歩行者、歩行者用の
3508,pedometer,歩数計、万歩計
3509,peer,同僚、同等の人、凝視する
3510,penalty,（刑）罰、罰金、ペナルティ
3511,pending,未解決の
3512,penetrate,貫く、しみ込む、広がる、見抜く、理解する、入り込む
3513,peninsula,半島
3514,pension,年金、恩給
3515,per,～あたり、～につき
3516,per capita,一人当たりの
3517,perceive,知覚する、気づく、理解する
3518,perception,認識、知覚
3519,perch,止まり木、止まる
3520,perfect,完全な、まったくの、を完成する
3521,perform,行う、上演する、演奏する
3522,performance,"実行, 業績, 演技, 演奏"
3523,perfume,香水、（快い）香り
3524,perhaps,ひょっとすると、だいたい
3525,peril,危険
3526,perilous,とても危険な
3527,perimeter,周囲
3528,period,期間、時期、時代、授業の時限、月経（期間）
3529,periodically,定期的に，周期的に，時折
3530,perish,死ぬ、滅びる、消滅する
3531,perishable,（食べ物などが）腐りやすい
3532,permanent,（半）永久的な、永続する、耐久の、常置の、終身の
3533,permanently,永遠に、いつも
3534,permeate,にしみ込む、浸透する、に行き渡る
3535,permission,許可、承認
3536,permit,許可する
3537,perpetual,永続的な、ひっきりなしの
3538,perpetuate,永続させる、不朽にする
3539,perplex,当惑させる、複雑にする、紛糾させる
3540,persecute,迫害〔虐待〕する、非常に困らせる
3541,persecution,迫害
3542,persevere,やり抜く、辛抱する
3543,persist,固執する、主張し続ける、～し続ける、存続する
3544,persistent,執拗な、固執する、持続する
3545,personal,個人的な
3546,personality,個性、性格、人格、独特の雰囲気、有名人
3547,personally,個人的に、個人的見解では、自分（自身）で
3548,personnel,社員、隊員、人事部
3549,perspective,観点、遠近法（感）、見通し
3550,perspire,汗をかく
3551,persuade,説得する、説得して～させる
3552,persuasive,説得力のある
3553,pertinent,（直接）関連のある、適切な
3554,pervade,に普及する
3555,pervasive,隅々に広がった、浸透する、充満する
3556,pessimistic,悲観的な
3557,pesticide,殺虫剤、除草剤
3558,petition,請願(書)、嘆願(書)
3559,petroleum,石油
3560,petty,ささいな
3561,pharmacist,薬剤師
3562,pharmacy,薬局
3563,phase,段階、時期、側面、局面
3564,phenomenon,現象、驚くべき事（物、才能、人）
3565,philosopher,哲学者
3566,philosophy,哲学、原理、人生観、考え方
3567,phobia,恐怖症
3568,phonetic,音声上の
3569,phosphorus,リン
3570,photo,写真
3571,phrase,句、成句、言葉遣い
3572,physical,身体の、物質的な、物理学の
3573,physician,医師、内科医
3574,physics,物理学
3575,physiological,生理学(上)の
3576,pick,（花、果実などを）摘む、選ぶ
3577,piece,（a～of…）１つの…、部品、楽曲
3578,pierce,貫く、刺す、身にしみる、感動させる
3579,pigment,色素、顔料
3580,pile,積み重ね、山、たくさん、積み重ねる、殺到する
3581,pilgrim,巡礼者
3582,pill,錠剤、丸薬、〔the～〕ピル、経口避妊薬
3583,pillar,柱、要所、中心的存在
3584,pin,ピンで留める、突き刺す
3585,pinch,つねる
3586,pine,マツ
3587,pinpoint,非常に正確な
3588,pioneer,先駆者、開拓者、～を開拓する、～の先駆けとなる
3589,pious,信心深い、宗教的な
3590,piracy,著作権〔特許権〕侵害、海賊行為、違法コピー
3591,pit,穴、くぼみ
3592,pitch,投げる、倒れる、縦揺れする
3593,pitfall,（通例 ―s）落とし穴，隠れた危険
3594,pity,哀れみ、残念なこと、を気の毒に思う
3595,pivotal,極めて重要な
3596,placebo,偽薬、プラシーボ、気休め
3597,placement,(就職先・学校・里親などの)斡旋、配置
3598,plague,疫病、（害虫などの）異常発生
3599,plain,はっきりした、わかりやすい、質素な、簡素な、平野
3600,plainly,明白に、明らかに、率直に、質素に
3601,planet,惑星、（our～）地球
3602,plant,植物、工場、を植える
3603,plantation,農園
3604,plaster,石こう
3605,plastic,プラスチック(の)、ビニール（の）
3606,plate,皿、（1人分の）料理、板、（地球表面の）プレート
3607,platform,プラットフォーム、演壇、舞台
3608,plausible,もっともらしい、妥当な
3609,playground,遊び場、運動場、行楽地、活動領域
3610,plea,懇願、嘆願
3611,plead,懇願する、嘆願する、と懇願する、（事件を）争う
3612,pleasant,楽しい、心地よい
3613,pleasure,楽しみ
3614,pledge,誓う、約束する、与えることを約束する、約束、誓約
3615,plentiful,豊富な、十分な
3616,plenty,たくさん、たくさんの～（of）
3617,plight,窮状、（悪い）状態
3618,plot,(物語などの)筋、たくらみ、（土地の）小区画
3619,plow,（耕作用の）すき
3620,pluck,摘む、引き抜く、むしりとる
3621,plug,プラグを電源に差し込む、ふさぐ
3622,plumbing,（建物の）配管設備
3623,plunder,略奪する、強奪する
3624,plunge,突進する、急に下り坂になる、突入、急な下落
3625,plural,複数の、2つ[2人]以上の、複数形の
3626,Pluto,冥王星
3627,poach,密漁する
3628,poacher,密漁[密猟]者
3629,poem,(１遍の)詩
3630,poet,詩人
3631,poetry,詩
3632,point,要点、（位置、時間上の）点、瞬間、目的
3633,poison,毒（物）
3634,poke,突く、突っ込む、突き出す、せっかいをやく、つつくこと
3635,polar,極地の、電極の
3636,pole,棒、（地球・天体の）極
3637,police,警察
3638,policy,政策、方針、（個人の）主義
3639,polish,（物・技量）を磨く
3640,polite,礼儀正しい、丁寧な、上品な、上流の
3641,political,政治の、政治的な、政治に関する
3642,politics,政治、政治学
3643,poll,世論調査、（the）投票、投票する
3644,pollen,花粉
3645,pollutant,汚染物質、汚染源
3646,pollute,汚染する
3647,polluted,汚染された
3648,pollution,汚染、公害
3649,pond,池
3650,ponder,熟考する、考えをめぐらせる
3651,poor,貧しい、粗末な、かわいそうな
3652,pop,飛び出る、ポンと置く（外す）、ポピュラーな
3653,popularity,人気、流行
3654,populate,に住む、の住民である、に人を住まわせる
3655,population,人口、（the）全住民、全個体数
3656,port,港（町）
3657,portable,持ち運びできる、携帯用
3658,portion,部分、1人前、割り当て
3659,portray,(人物・風景など)を描く、（言葉で）を描写する
3660,pose,（問題など）を提起する、ポーズをとる
3661,position,位置、場所、立場、形勢、地位、姿勢、勤め口、職
3662,positive,肯定的な、積極的な、確信して、陽性の
3663,possess,持っている、とりつく
3664,possession,所有物、財産、所有
3665,possible,あり得る、（事が）可能な
3666,possibly,ひょっとすると、[否定文で]どうしても～できない
3667,post,投函する、郵便（制度）、地位、柱
3668,posterior,(～より)後の(to～)
3669,postpone,延期する
3670,posture,姿勢、態度
3671,postwar,戦後の
3672,potent,有力な、影響〔説得〕力のある
3673,potential,可能な、潜在的な、能性がある、可能性、潜在能力
3674,pottery,陶器類、焼き物類
3675,pound,ポンド（重量の単位、イギリスの通貨単位）
3676,pour,注ぐ、どしゃ降りに降る、流れ出る
3677,poverty,貧困、不足、不毛
3678,power,力、能力、権力、強国、エネルギー
3679,powerful,強力な、影響力のある
3680,practical,"実用的な, 現実的な"
3681,practically,ほとんど、実際的に、事実上
3682,practice,実行、練習、慣例、（医師や弁護士などの）業務
3683,pragmatic,現実的な、実用的な、実用主義の
3684,prairie,大草原
3685,praise,賞賛する
3686,pray,祈る
3687,preach,説教する
3688,preacher,説教者、牧師
3689,precaution,用心
3690,precede,先行する、優先する、前に置く
3691,precedent,前例
3692,preceding,前の、先行する、前述の
3693,precious,貴重な、高価な
3694,precipitation,降水（量），〈化学〉沈殿
3695,precise,正確な、精密な、まさにその
3696,precisely,正確に、まさに、ちょうど
3697,precision,正確さ
3698,preclude,排除する、妨げる
3699,preconceived,あらかじめ考えた
3700,predate,以前からある
3701,predator,捕食動物、略奪者
3702,predecessor,前任者、前のもの
3703,predict,予言する、予測する
3704,predominantly,主に
3705,preemptive,先制の
3706,prefecture,（日本の）県、府、（フランスなどの）県
3707,prefer,～を好む、～が好きだ
3708,preference,他より好むこと、好み
3709,pregnancy,妊娠
3710,pregnant,妊娠している、意味深長な、含蓄のある
3711,prehistoric,有史以前の、旧式な
3712,prejudice,偏見
3713,preliminary,予備の、準備の
3714,premature,早過ぎる、(判断などが)早まった
3715,premise,前提、〔～s〕（建物を含めた）構内、敷地
3716,premium,保険料、プレミア、景品
3717,preoccupation,最大の関心事、没頭、夢中（にさせるもの）、先入観
3718,preoccupied,夢中になった、心を奪われている
3719,preoccupy,～の心を奪う、～を夢中にさせる
3720,preparation,準備
3721,prepare,用意する、心構えをさせる、訓練する、覚悟する
3722,prepayment,前払い
3723,prerequisite,必須条件、必要条件
3724,prescribe,処方する、指示する、規定する
3725,prescription,処方(箋)、命令、規定
3726,presence,存在、出席、面前
3727,present,現在の、出席して、贈り物、発表する、贈る
3728,preservative,保存料
3729,preserve,保存する、保つ、保護する
3730,president,社長、会長、学長、大統領
3731,presidential,大統領の[による]、社長の
3732,press,押す、押し付ける（こと）、新聞、報道陣
3733,pressure,圧力、重圧
3734,prestige,名声、〔形容詞的に〕名声のある
3735,prestigious,名声のある
3736,presumably,おそらく、思うには
3737,presume,と思う、と推定する、を前提とする
3738,pretend,～のふりをする、（～ということ）を装う
3739,pretense,ふり、見せかけ
3740,pretext,口実
3741,pretty,かなり、かわいらしい
3742,prevail,普及する、（提案、原理などが）打ち勝つ
3743,prevalent,蔓延している、広く行き渡っている
3744,prevent,防ぐ、(～が…するの）を妨げる
3745,prevention,予防、防止、妨害
3746,previous,以前の、前回の
3747,previously,以前に
3748,prewar,戦前の、戦前には
3749,prey,(動物の)獲物、餌食、捕食する（on）
3750,price,（品物の）値段、（複数）物価、代償
3751,pride,誇り、自尊心、自慢する
3752,priest,聖職者、僧侶
3753,primarily,主として、初めに
3754,primary,最も重要な、第一の、初等（教育）の
3755,primate,霊長類の動物
3756,prime,主要な、最も重要な、最適な、極上の
3757,primitive,原始的な、原始（時代）の
3758,principal,主要な、校長、主役
3759,principle,主義、方針、（自然の）原理、原則
3760,print,印刷する、出版する、印刷（物）
3761,prior,前の、優先的な
3762,priority,優先（事項）
3763,prison,刑務所、拘留所
3764,prisoner,囚人
3765,private,個人の、内密の、民間の
3766,privatize,民営化する
3767,privilege,特権、特典、名誉、～に特権を与える
3768,prize,賞（品）、貴重なもの
3769,probability,見込み
3770,probable,十分にありそうな
3771,probably,おそらく
3772,probation,執行猶予、保護観察
3773,probe,宇宙探査機、精査、探り針
3774,problematic,問題のある、疑わしい
3775,procedure,手続き、（一連の）措置
3776,proceed,進む、取りかかる、次に～する
3777,process,過程、工程、方法、手順、経過、進展
3778,procession,(儀式などの)行列、行進
3779,proclaim,～を宣言する、～を（…だとはっきり）示す
3780,produce,製造する、生産する、提出する
3781,productivity,生産性
3782,profess,公言する
3783,profession,職業、専門職、同業者仲間
3784,professional,専門的な、プロの
3785,professor,教授
3786,proficiency,熟達、技量
3787,proficient,熟達した、堪能な
3788,profile,の概略を示す、輪郭、横顔、プロフィール
3789,profit,利益、利益を得る（になる）
3790,profitable,利益になる、有益な
3791,profound,深い、重大な
3792,program,に組み込む、方向づける、をプログラムする；計画、番組(表)
3793,progress,前進する、進歩する、進歩、前進
3794,prohibit,禁止する、妨げる
3795,project,企画、事業、学習課題、計画する、映し出す、見積もる
3796,projection,予測
3797,proliferate,急増する、繁殖する
3798,prologue,プロローグ、序文
3799,prolong,（時間・期間など）を延長する
3800,prominence,目立つこと、卓越
3801,prominent,卓越した、目立った、（物理的に）突き出した
3802,promise,約束する、約束、見込み
3803,promising,前途有望な
3804,promote,促進する、奨励する、昇進させる
3805,promotion,昇進、促進、販売促進
3806,prompt,刺激する、即座の、機敏な
3807,prone,～しがちである、～をこうむりがちである
3808,pronoun,代名詞
3809,pronounce,発音する、断言する、宣言する
3810,pronunciation,発音
3811,proof,証拠
3812,propel,を進ませる、(人)を駆り立てる
3813,proper,適切な、正式の、主要な、固有の
3814,property,財産、所有物、特性
3815,prophecy,予言（すること）、予知能力
3816,prophet,預言者
3817,proponent,支持者
3818,proportion,割合、比例、つりあい、部分
3819,proportional,釣り合った、比例した
3820,propose,提案する、もくろむ、結婚を申し込む
3821,propriety,正当性、適当、礼儀
3822,prose,散文(体)
3823,prosecute,起訴する
3824,prospect,候補者、見込み、将来性、可能性
3825,prosper,栄える、成功する、繁殖する
3826,prosperity,繁栄
3827,prostate,前立腺
3828,protect,保護する、守る
3829,protective,保護する、守ろうとする
3830,protein,タンパク質
3831,protest,抗議、主張、に抗議する、を主張する、抗議する
3832,Protestant,プロテスタントの； 新教徒
3833,protocol,（条約）議定書、外交儀礼、プロトコル
3834,prototype,原型、試作品、典型
3835,proudly,誇らしげに、得意げに
3836,prove,証明する、 ～であると分かる
3837,proverb,ことわざ
3838,provide,"提供する、養う（for）、備える（for, against）"
3839,province,州、省、県、地方、分野
3840,provoke,怒らせる、(感情などを）起こさせる、駆り立てる
3841,proximity,近いこと
3842,prudent,分別のある、用心深い
3843,psychiatric,精神医学の
3844,psychiatrist,精神科医
3845,psychiatry,精神科，精神医学
3846,psychic,精神的な、神霊の、超自然的な
3847,psychologist,心理学者
3848,psychology,心理学、心理（状態）、心理作戦
3849,pub,居酒屋
3850,public,公の、公衆の、公開の
3851,publication,出版(物)、発行
3852,publicity,宣伝、広告
3853,publicize,公表する、宣伝する
3854,publish,発表する、出版する
3855,pull,引く、車を寄せる
3856,pulse,脈拍、鼓動
3857,pump,排出する、（ポンプで）くみ上げる、ポンプ
3858,punctual,時間を厳守する、時間に正確な（for）
3859,punctuality,時間厳守
3860,puncture,(タイヤ)をパンクさせる、に穴をあける
3861,punish,罰する、に損傷を与える
3862,punitive,刑罰の、罰する
3863,pupil,瞳、生徒、弟子
3864,purchase,（大きな物・高額な物）を買う、購入（品）
3865,pure,純粋な、潔白な、まったくの
3866,purpose,目的（of）
3867,purse,財布、ハンドバッグ
3868,pursue,追跡する、追求する、従事する
3869,pursuit,仕事、追跡、追求
3870,puzzle,困らせる、わからないこと、パズル
3871,quaint,古風で趣のある
3872,quake,震える、おののく、振動する、地震、震え
3873,qualified,有能な、資格のある、適任の
3874,qualify,（人）に資格を与える、資格がある
3875,quality,質、特質
3876,quantity,量、分量
3877,quantum,量子、量
3878,quarrel,口論、口喧嘩、口論する
3879,quarter,1/4、15分、25セント、四半期、場所
3880,quartz,水晶、石英、クォーツ
3881,quest,探索、探究(物)、捜し求める
3882,questionable,疑わしい
3883,questionnaire,アンケート（用紙）
3884,queue,列、行列、待ち行列、列を作る
3885,quick,素早い
3886,quit,（仕事など）をやめる
3887,quite,かなり、まったく
3888,quiver,おののく、(細かく)震える、を震わせる
3889,quota,割当量[数]、ノルマ
3890,quote,引用する、引き合いに出す
3891,r?sum?,履歴書[≒CV]、要約
3892,race,人種、民族、人類、競争、急ぐこと、大急ぎでやる
3893,racial,人種の、民族の
3894,racism,人種差別(主義[政策])
3895,racist,人種差別主義者
3896,radiation,放射（線）
3897,radical,根本的な、急進的な、過激な
3898,radically,根本的に、過激に
3899,radius,半径
3900,rag,ぼろ
3901,rage,激怒、猛威、熱狂、激怒する、猛威を振るう
3902,raid,急襲
3903,railroad,鉄壁道(線路)
3904,railway,鉄壁道
3905,rainfall,降雨（量）
3906,rainforest,（熱帯）雨林
3907,raise,育てる、上げる、提起する、集める
3908,rally,元気づける、復興する、（人）を集める、集会
3909,ram,雄羊
3910,rampage,凶暴な行動
3911,ranch,牧場
3912,random,無作為の、手当たり次第の
3913,randomly,無作為に、手当たり次第に、無計画に
3914,range,範囲、（範囲が）及ぶ、を並べる
3915,ranger,森林警備員
3916,rank,位置づける、位置する、階級、地位、列
3917,ransom,身代金、(身代金などによる)解放
3918,rapid,急速な、速い
3919,rapidity,素早さ、急速、敏速、速度
3920,rapidly,急激に、早く
3921,rare,まれな、珍しい、すばらしい
3922,rarely,めったに…(し)ない
3923,rash,早まった、軽率な
3924,rat,ネズミ
3925,rate,評価する、割合、速度、料金
3926,rather,かなり、むしろ、それどころか
3927,rating,評価、格付け
3928,ratio,割合、（２つの数量間の）比率
3929,ration,(食料・物資などの)割当(量)
3930,rational,理性的な、合理的な
3931,rattle,がたがた鳴らす
3932,raw,(食物が)生の、加工されていない
3933,ray,光線、ひらめき、一筋の光明
3934,reach,に着く、に達する、を取る、手を伸ばす、届く範囲
3935,react,反応する、反作用する
3936,readily,すぐに、容易に、快く
3937,ready,準備ができて、喜んで～する、即座の、巧みな
3938,real,"本当の, 本物の, 現実の"
3939,realistic,現実的な、実際的な
3940,realize,悟る、実現する
3941,realm,領域、分野、王国
3942,reap,刈り取る、収穫する、得る
3943,rear,育てる、後部、後部の
3944,reason,理由、根拠、理性、分別
3945,reasonable,合理的な、分別のある、（値段が）手ごろな
3946,reasoning,推論、理論、論拠
3947,reassure,安心させる
3948,rebel,反逆者、反抗者、謀反人、反乱を起こす、反抗する
3949,rebellion,反乱
3950,rebellious,反抗的な、反逆した、謀反を起こした
3951,rebound,(ボールなどが)跳ね返る
3952,recall,思い出す、呼び出す、思い出すこと
3953,recede,去っていく、薄れる、弱まる
3954,receive,受け取る、破る
3955,recent,最近の、ごく新しい
3956,recently,最近，近ごろ
3957,reception,反応、宴会、受付、受信（状態）
3958,receptive,受け入れる 包容力のある
3959,recess,休憩
3960,recession,(一時的な)不況
3961,recipe,調理法、レシピ、手順、秘訣
3962,recipient,受け取る人、（臓器などの）被提供者
3963,recital,リサイタル、独奏[独唱]会
3964,recite,（聴衆の前で）朗読する、暗唱する、詳細に話す
3965,reckless,無謀な、（～を）顧みない（of）
3966,reckon,思う、推測する、ざっと数える、計算する
3967,recognition,認識、承認
3968,recognize,認める、覚えがある、誰だかわかる、表彰する
3969,recollect,～を思い出す
3970,recollection,記憶
3971,recommend,推薦する、～に（…することを）、勧める
3972,reconcile,和解する、を和解させる、を調停する、を調和させる
3973,reconstruct,を再建する、を改変する
3974,record,記録する、記録（書類）、履歴、成績
3975,recover,（失っていたもの）を取り戻す、～を回復する
3976,recovery,回復、取り戻すこと
3977,recreation,レクリエーション、気晴らし
3978,recruit,募る、に新人を補充する
3979,recruitment,新規採用
3980,rectangle,長方形
3981,rectangular,長方形の
3982,recurrent,(周期的に)繰り返される、(病気などが)再発する
3983,redeem,(失敗・欠点など)を補う、を埋め合わせる
3984,reduce,減少させる、弱める、変える
3985,reduction,減少
3986,redundant,不要な、余分な、(表現などが)冗長な
3987,reef,（岩や砂の）礁、暗礁
3988,refer,言及する、参照する、関連がある
3989,referee,レフェリー、審判員
3990,reference,言及、参照
3991,referral,紹介
3992,refine,精製する、磨く、洗練する
3993,refined,洗練された、優雅な
3994,reflect,反映する、反射する、よく考える
3995,reflex,反射（運動）
3996,reforestation,植林、森林再生
3997,reform,改善[改革]する、改革(運動）
3998,refrain,差し控える、やめる
3999,reframe,を組み立て直す
4000,refresh,（気分）をさわやかにする、新たにする
4001,refreshing,さわやかな
4002,refrigerator,冷蔵庫
4003,refuge,避難、保護、避難所、隠れ家
4004,refugee,難民
4005,refund,返金、払い戻し(金)
4006,refusal,拒否、拒絶
4007,refuse,拒絶する、（きっぱりと）断る
4008,refute,[他] ～を論駁する，～に反論する
4009,regain,回復する、取り戻す、戻る、帰り着く
4010,regard,～を…とみなす、尊重する、敬意、注意
4011,regarding,に関して
4012,regardless,かまわない、無頓着な
4013,regime,政権、（社会）制度、体制
4014,region,地域、地方、分野、領域、（身体の）部分
4015,register,記録、登録する、書留にする、表す、登録
4016,regret,後悔（する）、残念（に思う）
4017,regular,定期的な、規則的な、一定の、いつもの
4018,regulate,規制する、調整する
4019,regulation,規則、規制
4020,regulator,規制者、調節装置
4021,rehearsal,(劇・音楽などの)リハーサル、下げいこ
4022,reign,治世、統治機関、君臨する
4023,reindeer,トナカイ
4024,reinforce,強化する、補強する
4025,reintroduce,～をかつての分布域に再導入する、～を復活させる
4026,reject,拒絶する
4027,rejoice,喜ぶ
4028,relapse,逆戻りする、再発する
4029,relate,関連づける、話す、関係がある
4030,related,関連した、関係のある
4031,relationship,関係、親密な関係
4032,relative,相対的な、比較上の、関連した、相互の
4033,relatively,比較的
4034,relax,くつろぐ、緩む、くつろがせる、緩める
4035,relay,継電器、交代要員、リレー競走、中継、伝達する
4036,release,放つ、解放する、発売する、放出、発表
4037,relentless,執拗な、情け容赦のない
4038,relevant,関連がある、適切な
4039,reliable,信頼できる
4040,relic,遺跡、遺品
4041,relieve,和らげる、安心する、を解放する
4042,religion,宗教、信条、信仰（心）
4043,religious,宗教(上)の、信仰があつい
4044,relocate,(住居・事務所・住民など)を移転[移動]させる
4045,reluctant,気が進まない、嫌がる
4046,rely,頼る
4047,remain,依然～のままである、とどまる、残り、遺跡
4048,remainder,残り
4049,remains,遺跡、遺構
4050,remark,述べる
4051,remarkable,すばらしい
4052,remedy,治療法、治療、治療薬
4053,remember,覚えている
4054,remind,思い出させる、気づかせる
4055,reminder,思い出させるもの、記念物[品]
4056,reminiscent,思い出させる
4057,remnant,残されたもの、遺物
4058,remodel,を改装する、を改造する
4059,remorseful,後悔に満ちた
4060,remote,遠い、へんぴな、遠く隔たった、かすかな
4061,removal,除去、移動
4062,remove,取り除く、移動させる、脱ぐ、解任する、解雇する
4063,renaissance,復興、復活、（the R～）ルネッサンス、文芸復興
4064,render,～を…にする、～に…を与える
4065,renew,更新する、再生する
4066,renounce,放棄する
4067,renovate,を改修[改築]する
4068,renowned,著名な、名声ある
4069,rent,賃貸料、使用料、家賃、賃借りする、賃貸しする
4070,repair,修理する、（健康など）を回復する、償う
4071,repay,を返済する
4072,repeal,廃止する
4073,repeat,繰り返す、復唱する、口外する
4074,repel,追い払う、退ける
4075,repetitive,繰り返しの
4076,replace,取って代わる、取り替える、元の場所に戻す
4077,replacement,交換、交替、代わりの人[もの]
4078,replenish,補充する
4079,replicate,(同一実験など)を繰り返す、を複製する
4080,reply,答える（to）、答え
4081,reportedly,伝えられるところによると、報道によれば
4082,represent,表す［意味する］、代表する、描写する
4083,representation,表現（描写）、代表
4084,representative,代表者、代理人
4085,reprint,を増刷（再版）する；増刷、再版
4086,reproduce,再生する、繁殖させる、繁殖する
4087,reproduction,生殖、繁殖
4088,reptile,爬虫類(動物)
4089,republic,共和国、団体、社会
4090,reputable,評判の良い
4091,reputation,名声、評判
4092,request,頼む、要請する
4093,require,必要とする、要求する
4094,requirement,必要条件、要求（物）
4095,reschedule,の日時を変更する
4096,rescue,救助、救済、（危険・束縛などから）を救う
4097,research,研究、調査
4098,researcher,研究者
4099,resemble,に似ている
4100,resent,憤慨する、ひどく嫌う
4101,resentful,憤慨した
4102,resentment,憤慨、恨み
4103,reservation,予約、慎重な姿勢
4104,reserve,蓄え、慎み、保護区、取っておく、予約する
4105,reside,住む
4106,residence,住居、居住
4107,resident,住民、滞在者
4108,residential,住宅の
4109,resign,辞職する、断念する、放棄する、甘んじて従う
4110,resignation,辞職
4111,resilient,弾力性のある； 回復力のある、立ち直りの早い
4112,resin,樹脂
4113,resist,に抵抗する、〔通例否定文で〕を我慢する
4114,resistance,抵抗（力）
4115,resistant,耐性のある、抵抗する
4116,resolute,断固とした、固く決心した
4117,resolve,決心する、解決する、分析する、決定する、分解する
4118,resort,（手段に）訴える、（楽しい所へ）行く
4119,resource,資源、財源、貯蔵、手段、臨機応変の才
4120,respect,点、尊敬、重視、関心、関連、尊重する
4121,respectable,ちゃんとした
4122,respective,それぞれの
4123,respiratory,呼吸器に関する、呼吸の
4124,respond,反応する、答える（to）
4125,respondent,(調査・アンケートなどの)回答者
4126,responsibility,責任
4127,responsible,責任がある、信頼できる、原因である
4128,responsibly,責任をもって
4129,responsiveness,反応がいいこと、反応性、敏感なこと
4130,rest,残り、休み、休む
4131,restate,を再び述べる、言い渡す
4132,restless,落ち着きのない、不安な、絶え間ない
4133,restore,復活させる、もとの状態に戻す、回復する
4134,restrain,抑える、やめさせる
4135,restrict,制限する
4136,result,終わる（in）、結果として起こる、結果、成績
4137,resume,再び始める、取り戻す、履歴書、要約
4138,resurgence,復活，再起
4139,retail,小売り
4140,retailer,小売業者、小売販売店
4141,retain,保持する、維持する
4142,retire,引退する、退職する、退く
4143,retrace,引き返す
4144,retreat,後退、撤退、後退する、逃げる
4145,retributive,報いの、応報の
4146,retrieve,取り戻す、回収する、回復する、救う
4147,retrospect,追憶、思い出
4148,return,戻す、戻る、戻り、返却、利益
4149,returnee,帰国子女
4150,reunion,再会（の集い）、再結合
4151,reveal,明らかにする、見せる、示す
4152,revenge,復讐をする、あだを討つ、復讐
4153,revenue,歳入、収益
4154,reverse,逆にする、一変させる、（the）逆の、逆の
4155,review,批評する、見直す、復習する、批評、再検討、復習
4156,revise,変更する、改訂する、復習する
4157,revitalize,新しい活力を与える
4158,revive,蘇生させる、復活させる、生き返る
4159,revoke,取り消す
4160,revolt,反逆する、むかつく
4161,revolution,革命、回転、（天体の）公転
4162,revolve,回転する
4163,reward,報酬、見返り、褒美、報いる
4164,rewarding,満足感が得られる、報われる
4165,rhetoric,修辞法、美辞麗句、説明
4166,rhinoceros,サイ
4167,rhyme,押韻詩、韻、詩歌
4168,rhythm,リズム
4169,rib,あばら骨
4170,rich,裕福な、豊富な（in）
4171,richness,豊富さ、肥沃であること、裕福であること
4172,rid,取り除く
4173,riddle,謎、不可解なもの［人］
4174,ridicule,あざ笑う
4175,ridiculous,ばかげた、法外な
4176,right,ふさわしい、正当な、正しい、右の
4177,righteous,正しい
4178,rightly,正当に、当然のことながら
4179,rigid,堅い、動かない、柔軟性のない、厳格な
4180,rigorous,厳しい
4181,ring,輪、指輪、音を鳴らす、電話をかける
4182,riot,暴動、騒動、暴動を起こす、浮かれ騒ぐ
4183,rip,引き裂く、裂ける
4184,ripe,熟した、期が熟した、円熟した
4185,ripen,成熟する
4186,rise,上昇、増加、上がる、起きる、出世する
4187,risk,危険(性)、危険にさらす、あえて～する
4188,risky,危険な
4189,rite,儀式
4190,ritual,儀式、日常の習慣的行為
4191,rival,競争相手、ライバル、匹敵する、互角に戦う
4192,rivalry,ライバル意識、競争
4193,road,道路
4194,roam,歩き回る、放浪
4195,roar,うなる、ほえる、どなる、大声で叫ぶ
4196,rob,～から…を奪う
4197,robbery,強盗(事件)
4198,robust,強力な、健全な、頑丈な
4199,role,役割、任務、（役者の）役
4200,roll,転がる、を転がす、を丸める
4201,romantic,空想的な、恋愛の、ロマン派の
4202,roof,屋根
4203,room,空間、場所、可能性、余地、余裕、部屋
4204,root,定着している、根付かせる、根拠、源
4205,rope,なわ、秘訣
4206,roster,名簿
4207,rot,腐る、堕落する、腐らせる、堕落させる、腐敗、悪化
4208,rotate,回転する、循環する、を回転させる
4209,rotten,腐った、不快な、堕落した
4210,rough,ざらざらした、大ざっぱな、おおまかな乱暴な
4211,roughly,おおよそ、乱暴に
4212,roundabout,遠回しの、婉曲な、回り道の
4213,route,道（筋）、路線、ルート、手段
4214,routine,決まり切った仕事、日課、いつもの手順
4215,routinely,いつものように、日常的に
4216,row,（横の）列、（船を）こぐ
4217,royal,王室の、王の、王立の、風格のある
4218,rub,こする、塗る
4219,rubber,(天然・合成の)ゴム
4220,rubbish,ごみ、つまらないもの
4221,rude,無礼な、粗野な
4222,ruin,破滅させる、台無しにする、破滅、廃墟、遺跡
4223,rule,規則、支配、支配する
4224,rumor,噂、風評
4225,run,走る、流れる、立候補する、運営する
4226,runway,滑走路
4227,rural,田舎の、田園の
4228,rush,急いで行く、せきたてる、忙しさ
4229,Russian,ロシア人〔語〕、ロシア（人、語）の
4230,rust,さび
4231,rusty,さびた
4232,ruthless,無慈悲な、断固とした、無茶な
4233,sacred,神聖な、宗教的な、厳粛な
4234,sacrifice,犠牲(的行為)、を犠牲にする
4235,sadness,悲しみ
4236,safari,サファリ
4237,sail,航行する、帆、航海
4238,saint,聖人、聖人のような人
4239,sake,〔for the sake ofで〕～のために、～に免じて
4240,salary,（月々の）給料
4241,sale,販売、（複数形で）売上高、特売
4242,salmon,サケ
4243,salute,敬礼する
4244,salvation,救済
4245,sample,サンプル、見本
4246,sanction,認める、許可する、認可、承認
4247,sanctuary,自然保護区
4248,sane,正気の、まともな、理にかなった
4249,sanitation,公衆衛生（学）、下水［衛生］設備
4250,satellite,衛星、人工衛星、衛星国家
4251,satisfaction,満足
4252,satisfy,満足させる、果たす、合致する、こたえる
4253,saturate,すっかりぬらす・満たす
4254,Saturn,土星
4255,savage,凶暴な、手厳しい、残酷(残忍)な人、不作法者
4256,save,救う、たくわえる、省く、節約する、保護する
4257,saving,節約、倹約、預金(額)、蓄え
4258,say,例えば
4259,scale,規模、段階、等級、縮尺、登る、はかる
4260,scam,詐欺、ぺてん
4261,scan,細かく調べる、ざっと見る、検査をする、綿密な検査
4262,scandal,スキャンダル、不正行為
4263,scant,乏しい、足りない
4264,scanty,不十分な
4265,scarce,乏しい、不十分な、少ない、不足した
4266,scarcely,ほとんど～ない
4267,scarcity,不足、欠乏
4268,scare,おびえさせる、脅す
4269,scatter,まき散らす分散する散布
4270,scenario,（予想される）筋書き、事態、脚本
4271,scene,場面、現場、眺め、光景、大騒ぎ
4272,scenery,景色、背景
4273,scenic,景色の良い
4274,scent,（快い）香り、手掛かり
4275,schedule,スケジュール、を予定する
4276,scheme,計画、悪だくみ、たくらむ
4277,scholar,"学者, 奨学生"
4278,scholarship,奨学金、学識
4279,scientific,科学的な、（自然）科学の
4280,scold,しかる
4281,scope,(活動などの)範囲、領域、機会
4282,score,（試合・試験の）得点、楽譜、得点する
4283,scorn,軽蔑、を軽蔑する、(軽蔑して)拒絶する
4284,scramble,[自] 急いで動く
4285,scrap,中止する、スクラップにする、切れ端
4286,scrape,(泥・ペンキ・さびなど)をこすり取る、の表面をこする
4287,scratch,ひっかく、はがし取る、線を引いて消す
4288,scream,(驚き・恐怖で)金切り声を出す、金切り声
4289,screaming,悲鳴をあげる
4290,script,文字〔体系〕、脚本、手書き、筆跡
4291,scrounge,あさり回る、くすねる、ねだる、せびる
4292,scrub,磨く
4293,scrutinize,～を綿密に調べる
4294,scrutiny,精査；監視
4295,sculpture,彫刻、彫刻作品、～を彫刻する、彫刻する
4296,scurvy,壊血病
4297,seabed,海底
4298,seal,密閉する、に封をする
4299,seamless,とぎれない、円滑な、継ぎ目のない
4300,search,探す、探求
4301,seasonal,季節の、季節的な
4302,seat,（be seated）座っている
4303,secluded,人里離れた
4304,second,二番目の、秒、(-s)おかわり
4305,secondhand,間接
4306,second-hand,間接の、また聞きの、中古の
4307,secret,秘密、秘訣、秘密の
4308,secretary,秘書、【米】長官、【英】大臣
4309,section,部分、区分、階級、（本などの）節
4310,sector,部門、分野、一部の集団
4311,secure,安全な、安心な、確保された、確保する
4312,security,安全、警備
4313,seed,種（種）をまく
4314,seek,捜し求める、～しようと努める
4315,seem,～のように思われる、見える
4316,seemingly,うわべは、見たところは
4317,segment,切片、部分、を分ける
4318,segregate,隔離する、分離〕する、隔離政策をとる
4319,seize,つかみ取る、差し押さえる、理解する、[受け身で]襲われる
4320,seldom,めったに～ない
4321,select,選ぶ、選り抜きの
4322,selective,選択的な
4323,self,自己
4324,self-esteem,自尊心
4325,selfish,利己的な
4326,sell,～を売る、売れる
4327,semester,(2学期制の)学期
4328,Senate,上院
4329,senator,上院議員
4330,senior,上位の、年上の、先輩の、年長者、最上級生
4331,sensation,大評判、物議、感覚
4332,sense,感覚、判断力、良識、正気、意識、意味
4333,sensible,賢明な、実用的な、顕著な
4334,sensitive,敏感な、神経質な、微妙な
4335,sensitivity,感じやすさ
4336,sensory,感覚の
4337,sentence,判決を宣言する、刑に処す、文、判決
4338,sentiment,感情、感想、感傷
4339,separate,分ける、離れた
4340,separation,分離
4341,sequel,続編、結果
4342,sequence,連続（するもの）、結果
4343,serene,穏やかな、平静な、(空が)澄みきった
4344,serial,連続した
4345,series,連続、シリーズもの
4346,serious,本気の、まじめな、重大な、深刻な
4347,sermon,（教会で行われる）説教
4348,servant,召使い
4349,serve,かなう、仕える、供給する、(食事など)を出す
4350,service,業務、奉仕、（バスなどの）便、公益事業
4351,session,集まり、（議会の）会期、（開会中の）議会
4352,set,設定する、置く、定める、ひとまとまり
4353,setback,(進歩・発展の)妨げ、支障
4354,setting,環境，状況；（小説，劇，機械などの）設定，舞台
4355,settle,落ち着く、定住する、を解決する、を決める
4356,settlement,開拓地、解決、合意
4357,settler,入植者、移民
4358,several,いくつかの、それぞれの、いろいろな
4359,severe,（人・規律・事態・天気などが）厳しい、猛烈な
4360,severely,ひどく、厳しく、激しく
4361,sew,縫う、ミシンをかける
4362,sewage,下水
4363,sewer,下水道
4364,sex,性(別)
4365,shabby,ぼろぼろの、みすぼらしい
4366,shade,陰、明暗・濃淡の度合い、わずかな違い
4367,shadow,影
4368,shake,揺れる、を揺り動かす
4369,shallow,浅い、浅薄な
4370,shame,恥、（a～）残念なこと
4371,shape,状態、（体）形
4372,share,共有する、分配する、分担する、割り当て、分け前
4373,shark,サメ
4374,sharp,利口な、聡明な、良く切れる、急激な
4375,sharply,急速に
4376,shatter,粉々に割る、打ち砕く、害する、粉々になる
4377,shed,(光など)を当てる、落とす、流す、小屋
4378,sheep,ヒツジ（複数形も同形）
4379,sheer,まったくの、険しい、まったく、垂直に
4380,sheet,１枚の紙、シーツ
4381,shelf,棚
4382,shell,（貝）殻
4383,shellfish,貝、甲殻類
4384,shelter,避難所、住まい、保護する、住まわせる
4385,shield,盾、防御物
4386,shift,変える、移る、変化、移動、交替（制）
4387,shine,磨く、照らす、輝く、光沢
4388,ship,を出荷する、を輸送する
4389,shipping,発送
4390,shipwreck,難破船
4391,shiver,(寒さなどで)身震いする
4392,shock,衝撃、に衝撃を与える
4393,shoot,撃つ
4394,shore,（海・湖・広い河川の）岸
4395,short,短い、不足して、背が低い、簡潔な
4396,shortage,不足
4397,shortcoming,欠点、短所
4398,shortfall,不足
4399,shorthand,簡潔な言い方、速記
4400,short-tempered,短気な
4401,shoulder,肩
4402,shout,大声で言う、叫ぶ、叫び
4403,shove,押す
4404,showdown,最後の対決
4405,shred,一片、断片
4406,shrewd,抜け目のない、（洞察などが）鋭い
4407,shriek,金切り声をあげる、甲高い声で言う、鋭い音
4408,shrine,神社、祭壇
4409,shrink,縮む、しりごみする、を縮める
4410,shrug,肩をすくめる
4411,shudder,身震いする、身震い、震え
4412,shun,避ける
4413,shuttered,シャッターの閉まった[付いた]
4414,shuttle,定期往復バス[列車、飛行機]
4415,shy,内気な、恥ずかしがりの
4416,sibling,きょうだい（の1人）
4417,sidewalk,歩道
4418,sigh,ため息(をつく)
4419,sight,光景、名所、見ること、視野、視力
4420,sign,署名する、合図する、記号、兆候、合図、標識
4421,signal,合図、信号（機）、に合図する
4422,signature,署名、特徴
4423,significance,意義、重要性
4424,significant,重要な、重大な、意義深い
4425,significantly,著しく、意味ありげに
4426,signify,を意味する；重要である
4427,silence,沈黙、静けさ
4428,silly,愚かな、バカバカしい
4429,similar,似ている、類似した、同様の
4430,simmer,(煮立たない程度に)こことこ煮える[≒boil gently]
4431,simple,単純な、質素な
4432,simplify,を簡単にする
4433,simply,ただ単に、簡単に、まったく、非常に
4434,simulate,模擬実験する、装う、まねる
4435,simultaneous,"同時の, 同時に起こる"
4436,simultaneously,同時に、一斉に
4437,sin,(道徳・宗教上の)罪
4438,sincere,正直な、心からの、偽りのない、誠実な、真剣な
4439,sincerity,誠実
4440,single,ただ１つの、個々の、独身の、１人用の
4441,singular,非凡な、まれにみる、単数の、別々の
4442,sinister,邪悪な、不吉な
4443,sink,沈む、崩れ落ちる、沈める
4444,sinking,沈む
4445,sip,一口飲む
4446,site,用地、場所、跡地、ウェブサイト
4447,situation,位置、立場、状態、きわどい場面
4448,sizzle,ジュージューと音を立てる
4449,skeleton,骨格、骨組み、概略
4450,skeptical,懐疑的な
4451,sketch,概要を述べる、スケッチする、概略
4452,skill,技能、技術
4453,skillful,熟練した、巧みな
4454,skin,皮膚、皮
4455,skip,跳ねまわる、軽く跳び越える、省く、省略
4456,skull,頭骨、頭蓋骨、頭脳
4457,skyscraper,超高層ビル
4458,slack,たるんだ、(商売などが)不活発な
4459,slam,バタンと閉める、酷評する
4460,slang,俗語
4461,slant,傾く
4462,slap,ぴしゃりとたたく、ぴしゃりと打つこと[音]、非難
4463,slaughter,虐殺する、虐殺
4464,slave,奴隷、とらわれている人
4465,slavery,奴隷制度、苦役
4466,slender,ほっそりした、わずかな
4467,slide,すべる[すべらせる]（こと）
4468,slight,わずかな、ほっそりした、取るに足らない
4469,slightly,わずかに
4470,slip,滑る、滑り落ちる、そっと動く
4471,slog,つらい仕事、強行軍；苦労して進む
4472,slope,坂、勾配
4473,slow,遅い、遅れている、遅くする
4474,sluggish,停滞した
4475,slump,前かがみになる、どすんと落ちる、衰える、不調
4476,sly,ずる賢い
4477,smart,頭が良い、身なりがきちんとした
4478,smash,粉々にする、激しくぶつかる
4479,smell,においをかぐ、においがする、におい
4480,smoke,煙、タバコを吸う
4481,smooth,なめらかな、順調な、なめらかにする
4482,smoothly,順調に、滑らかに
4483,smuggle,[他] ～を密輸する
4484,smuggler,密輸業者
4485,snap,パチンと鳴らす、ポキッと折る[折れる]
4486,snatch,ひったくる
4487,sneak,こっそり動く
4488,sneer,冷笑する
4489,sneeze,くしゃみをする
4490,sniff,くんくん嗅ぐ
4491,snore,いびきをかく
4492,soak,浸す、染み込む、吸収する
4493,soar,急上昇する、舞い上がる
4494,soaring,急上昇する
4495,sob,むせび泣く、すすり泣き
4496,sober,酔っていない、節度のある、真面目な
4497,so-called,いわゆる、世間でいう
4498,social,社交的な、社会の、社会的な
4499,socialism,社会主義
4500,socialize,社会に適合させる、付き合う
4501,society,社会、協会、団体
4502,socioeconomic,社会経済的な
4503,sociology,社会学
4504,sodium,ナトリウム、ソジウム
4505,soften,和らげる、柔らかくする、柔らかくなる
4506,software,ソフトウェア
4507,soil,土地、土壌
4508,solar,太陽の、太陽光線を利用した
4509,soldier,(陸軍の)軍人、兵士
4510,sole,唯一の、単独の、独占的な
4511,solemn,厳粛な、まじめな
4512,solid,固体、固体の、固い、しっかりした
4513,solitary,孤独な、ひとりだけの、唯一の
4514,solitude,ひとりでいること、孤独
4515,solstice,至、至点
4516,solve,解決する、解答する
4517,somebody,誰か、名のある人
4518,somehow,なんとかして、どういうわけか
4519,somewhat,いくぶん、多少
4520,somewhere,どこかで[へ]、およそ、ある場所
4521,sonar,音波探知機
4522,songbird,鳴き鳥
4523,soothe,なだめる、（苦痛を）和らげる
4524,sophisticated,洗練された、精巧な
4525,sophomore,(高校・大学の)二年生
4526,sore,痛い、悲しんだ、怒った
4527,sorrow,深い悲しみ
4528,sorrowful,悲観に暮れている、悲しい
4529,sort,分類する、えり分ける
4530,soul,魂、精神、人、情熱、本質的なもの
4531,sound,～に聞こえる、健全な、ぐっすりと、無事に
4532,sour,すっぱい、不愉快な、気むずかしい
4533,source,源、根源、出所、情報源
4534,south,南（の）
4535,souvenir,記念品、おみやげ
4536,sovereign,主権を有する、独立した、君主
4537,sow,（種）をまく
4538,soybean,大豆
4539,space,空間、場所、宇宙
4540,spacecraft,宇宙船
4541,spacious,広々とした、雄大な
4542,span,（時間の）長さ、期間
4543,spare,余分の、予備、（時間など）を割く、省く、惜しむ
4544,spark,火花、ひらめき、を引き起こす、火花を出す、輝く
4545,sparkle,火花を出す、輝く、火花、輝き
4546,sparrow,スズメ
4547,spatial,空間の、空間的な
4548,specialist,専門家
4549,specialize,専門とする、専攻する
4550,species,種（類）
4551,specific,特定の、明確な、具体的な、特有の
4552,specify,特定する
4553,specimen,標本、実例
4554,spectacle,壮観、見もの、惨状、(～s)眼鏡
4555,spectacular,壮観な、見ごたえのある
4556,spectator,（試合などの）観客
4557,spectrum,(変動する)範囲
4558,speculate,推測する、熟考する、投機をする
4559,speculation,推測、思索、投機
4560,spell,期間、短い時間、呪文、魔法
4561,spelling,つづり、語を正しくつづること[能力]
4562,spend,（時間）を費やす、（お金）を使う
4563,sperm,精子
4564,sphere,領域、球
4565,spill,こぼす
4566,spin,回転する、を回転させる、（糸）を紡ぐ
4567,spinal,脊椎の
4568,spine,背骨、脊柱
4569,spirit,霊、魂、精神、気分、気力
4570,spiritual,精神の）、霊的な
4571,spiteful,悪意のある
4572,spleen,脾臓
4573,splendid,すばらしい、豪華な
4574,splinter,とげ、破片
4575,split,分ける、分裂する、分裂、裂け目
4576,spoil,台無しにする、甘やかしてダメにする、戦利品
4577,sponsor,に資金を提供する、を後援する
4578,spontaneous,自発的な、任意の、無意識の、本能的な
4579,spot,点、場所、を見つける
4580,spotless,非の打ち所がない
4581,spouse,配偶者
4582,sprain,(足首・手首など)をくじく、を捻挫する
4583,sprawl,不規則に広がる、だらしなく手足を伸ばす
4584,spray,吹きかける、吹きつける
4585,spread,広げる、塗る、広がる、広がり、普及
4586,spring,泉、春、バネ
4587,sprout,発芽する
4588,spur,拍車をかける、駆り立てる
4589,square,正方形、四角（い広場）、正方形（四角）の
4590,squeeze,詰め込む、絞り出す、押し入る、席を詰める
4591,squid,イカ
4592,stability,安定、安定性
4593,stable,安定した、動じない
4594,stack,積み重ね、堆積、積む、積み重ねる
4595,staff,杖、棒、（集合的に）社員、職員、スタッフ
4596,stage,（発達の）段階、舞台
4597,stagger,ずらす、よろけさせる、動揺させる、よろける、よろめき
4598,stain,染料、しみ、きず
4599,stair,階段、(階段の)一段
4600,stake,利害関係、〔通例～s〕賭け金、杭
4601,stale,(食物などが)新鮮でない、(表現などが)陳腐な
4602,stalk,にこっそり近付く、の後をそっとつける、忍び寄る
4603,stall,露店、エンスト、失速
4604,stamina,スタミナ、持久力
4605,stance,立場、対処の姿勢
4606,standard,標準の、標準、基準
4607,standby,(いざというとき)頼りになるもの(人)、交替要因
4608,standpoint,観点、見地、立場
4609,standstill,停止、足踏み状態
4610,staple,主要な、主要産物〔商品〕
4611,stare,じっと見る(こと)
4612,startle,びっくりさせる
4613,starve,飢える、（～を）渇望する、を飢えさせる
4614,state,状態、国家、州、を述べる
4615,statement,声明、主張、明細書
4616,statesman,政治家
4617,static,活気のない、静的な、静電気の、雑音
4618,stationary,静止した
4619,statistic,統計
4620,statistics,統計（の数字）、統計学
4621,statue,像
4622,status,地位、身分、状況、高い社会的地位
4623,steady,しっかりした、固定した、変わらない、落ち着いた
4624,steal,（物）（こっそり）を盗む、（副詞句を伴って）そっと行く
4625,steam,蒸気
4626,steel,鋼鉄壁
4627,steep,（坂などが）急な、険しい、（値段が）法外
4628,steer,操縦する、進む、を運転する、を(ある方向に)向ける
4629,stem,生じる、由来する（from）、（草木の）茎（幹）
4630,step,一歩、足音、《～s》階段
4631,stereotype,固定観念、型にはまった人[物]、～を型にはめる
4632,sterile,殺菌した、不毛の、無益な
4633,stern,厳格な、いかめしい、断固とした
4634,stick,固執する、くっつく、刺さる、行き詰まる、棒きれ
4635,sticky,ねばねばの、粘着性の
4636,stiff,堅い、こわばった、断固とした、法外な
4637,stifle,抑える、押し殺す、止める、窒息死する、息が詰まる
4638,stigma,汚名
4639,still,じっとしている、静かな、まだ、それでも
4640,stimulate,刺激する、活気づける
4641,sting,刺す、刺すこと、痛み
4642,stingy,けちな、出し惜しみする、量がわずかな、少ない
4643,stir,かき混ぜる、奮起させる、駆り立てる、動く
4644,stock,株式、蓄え、在庫（品）、を貯蔵している
4645,stoically,冷静に
4646,stomach,胃、腹（部）
4647,stomachache,腹痛
4648,stopover,短期滞在（地）
4649,storage,保管、貯蔵(法)、収容力
4650,store,店、蓄える
4651,storm,嵐、荒天
4652,story,物語、～階建て
4653,stout,頑丈な
4654,straightforward,率直な、わかりやすい、まっすぐに
4655,strain,痛める、酷使する張り、緊張、ストレス
4656,strand,立ち往生させる
4657,stranger,知らない人、未経験者、不慣れな人
4658,strangle,(発展・活動など)を抑圧する、を窒息させる
4659,strategy,戦略、方策
4660,stray,横道へそれる、脱線する、道に迷った、はぐれた
4661,stream,小川、流れ
4662,streamline,[他] （作業・組織など）～を合理化する
4663,strength,強さ
4664,strengthen,を(より)強くする
4665,strenuous,激しい
4666,stress,強調する、ストレス、緊張、圧力、強調、重点
4667,stretch,伸ばす、及ぶ、伸びる、広がり、伸ばすこと
4668,strict,厳格な、厳密な、全くの、完全な
4669,strictly,厳格に、厳しく
4670,stride,大また、ひとまたぎ、大またに歩く、を大またで歩く
4671,strife,不和、口論
4672,strike,(考えなどが)心に浮かぶ、ぶつかる、打撃
4673,striking,いちじるしい
4674,string,ひと続き、ひも、糸
4675,strip,～から…をはぎ取る、裸にする、 衣服を脱ぐ
4676,strive,努力する、戦う
4677,stroke,脳卒中、打つこと、一撃
4678,stroll,ぶらぶら歩く、さまよう、をぶらつく、散歩
4679,structure,建物、構造、構成、組織、体系
4680,struggle,苦闘する、努力する、奮闘、努力
4681,stubborn,頑固な、強情な、手に負えない
4682,studio,スタジオ、放送室
4683,stuff,詰め込む材料、題材
4684,stumble,よろけながら歩く、つまずく
4685,stun,気絶させる、びっくり仰天させるを茫然とさせる
4686,stunned,あぜんとした
4687,stunt,妨げる
4688,stupid,愚かな、ばかな、ばかげた
4689,sturdy,頑丈な、たくましい、不屈の
4690,style,形式、型、文体
4691,subdue,征服する、おさえる、弱める
4692,subject,主題、国民、被験者、支配下にある、受けやすい
4693,subjection,服従 主観的
4694,subjective,主観的な
4695,sublime,荘厳な、崇高な
4696,submerge,水に浸す、潜水する
4697,submission,服従、提出
4698,submit,提出する、〔submit oneself〕服従する
4699,subordinate,従属している、下位の、二次的な、下位のもの
4700,subscribe,同意する、署名する、予約［定期］購読する
4701,subscriber,加入者
4702,subscription,予約購読(料)、寄付(金)
4703,subsequent,続いて起こる
4704,subsequently,その後、続いて
4705,subsidize,に補助金[助成金]を支給する
4706,subsidy,補助金、報奨金
4707,subsistence,生存、生計
4708,substance,物質、薬物、本質、中身、要旨、骨子
4709,substantial,相当な、多大な
4710,substitute,"代用する、代用品, 代理人"
4711,subtle,微妙な、かすかな、巧妙な、鋭敏な
4712,subtly,微妙に、かすかに、鋭敏に、ずるく
4713,subtract,減じる、引く
4714,suburb,郊外、周辺、付近
4715,subway,地下鉄壁[米]、地下道[英]
4716,subzero,氷点下の
4717,succeed,成功する、継承する
4718,success,成功
4719,successor,後任、後継者、取って代わるもの、次のもの
4720,suck,吸う、しゃぶる、吸い込む
4721,sudden,突然の
4722,sue,告訴する、訴訟を起こす
4723,suffer,苦しむ、害を受ける
4724,sufferer,苦しむ人、被災者、病人
4725,sufficiency,十分なこと、十分な状態
4726,sufficient,十分な
4727,suffocate,～を窒息させる
4728,suggest,提案する、示唆する
4729,suggestive,暗示的な、連想させる
4730,suicide,自殺、自殺的行為
4731,suit,適する、似合う、適合させる
4732,suitable,適切な
4733,suite,スイートルーム
4734,sulfur,硫黄
4735,sum,合計、金額、要点、要約する
4736,summit,頂上、頂点、首脳会議、首脳
4737,summon,呼び出す、召喚する、命じる、奮い起こす
4738,superb,壮麗な、すばらしい
4739,superficial,表面的な、浅はかな、皮相的な、浅い
4740,superior,よりすぐれた
4741,superiority,優越
4742,supernatural,超自然の
4743,superstition,迷信、偶像礼拝
4744,superstitious,迷信深い、迷信の
4745,supervise,監督〔管理〕する、監視する
4746,supervisor,監督者、指導教員
4747,supplement,補う、補うもの、栄養補助食品
4748,supplementary,補足の、追加の
4749,supply,供給（量）、必需品、を供給する
4750,support,支える、支持する、扶養する、裏付ける
4751,suppose,～だと思う、～だと推測する、もし～だとしたら
4752,supposedly,たぶん、おそらく
4753,suppress,抑える、鎮める、（笑いなど）を我慢する
4754,supreme,最高の、この上ない、究極の
4755,surcharge,追加料金
4756,surf,サーフィンする、（ネット上の情報など）を見て回る
4757,surface,表面、外観
4758,surge,殺到する、こみ上げる、急騰する
4759,surgeon,外科医、軍医
4760,surgery,（外科）手術、外科、外科医学
4761,surpass,超える、勝る、脅威を与える、脅迫する
4762,surplus,余り、余分の、さらなる、さらに進む
4763,surprise,驚き、驚かせること（もの）、を驚かせる
4764,surrender,放棄する、引き渡す、屈する
4765,surround,取り囲む、取り巻く
4766,surrounding,周囲の状況、環境
4767,surveillance,監視、見張り
4768,survey,調査、概観、を調査する、を概説する
4769,survival,生き残ること
4770,survive,生き延びる、切り抜ける、より長生きする
4771,susceptible,影響を受けやすい、感染しやすい
4772,suspect,疑う、～だと思う、容疑をかける
4773,suspend,つるす、一時的に中止する、停職（学）にする、保留する
4774,suspicious,疑わしい
4775,sustain,支える、維持する、耐える、被る
4776,sustainable,持続できる、維持できる
4777,swallow,飲み込む、飲み込むこと、ツバメ
4778,swamp,水浸しにする、に押し寄せる、沼(地)
4779,swap,交換する
4780,swarm,大群
4781,sway,揺れる、傾く、揺り動かす
4782,swear,ののしる、誓う
4783,sweat,汗をかく、汗
4784,sweatshop,搾取工場
4785,sweep,一掃(する)、掃除（する）、殺到する
4786,swell,ふくらむ、腫れる、（数量が）増加する
4787,swerve,急に向きを変える
4788,swift,迅速な、即座の
4789,swing,揺らす、振る、揺れる、（行動に）さっと移る
4790,switch,（仕事・考えなどを）変える、スイッチ、変化
4791,sword,剣、刀、武力、権力、戦争
4792,syllabus,講義一覧表、(講義などの)綱要
4793,symbol,象徴、シンボル、記号、標章
4794,symmetry,（左右）対称、調和
4795,sympathize,同情する
4796,sympathy,同情、共感
4797,symptom,症状、兆候
4798,synchronize,同一時刻にする
4799,syndrome,症候群、行動様式
4800,synonym,類義語、同義語、類義表現
4801,synthesis,合成、総合
4802,synthesize,総合する、合成する、合成して作り出す
4803,synthetic,合成の
4804,system,装置、制度、組織、体系、方法、学説
4805,tablet,タブレット（型情報端末）、錠剤、平板
4806,tackle,〔問題などに〕取り組む
4807,tactical,戦術の
4808,tactics,作戦、方策、戦術、戦法
4809,tag,ついて行く；に付け札をつける；付け札、タグ
4810,tail,しっぽ、後部
4811,tailor,を合わせて作る
4812,taint,汚す
4813,tale,話、うそ
4814,talent,才能、素質、才能のある人
4815,talkative,話好きの、おしゃべりな
4816,tame,飼いならす、柔順な
4817,tan,小麦色、日焼けした色、日焼けさせる
4818,tangible,触れることができる、明白な、具体的な
4819,tap,軽くたたく、（液体）を出す、盗聴する
4820,target,標的、達成目標、ねらう
4821,tariff,関税、運賃、料金表
4822,task,仕事、作業、課題
4823,taste,味、好み、～な味がする、味を見る
4824,tax,税（金）
4825,tear,裂く、引きはがす
4826,tease,からかう、いじめる、じらす
4827,technical,専門の、技術的な
4828,technically,厳密に(言えば)、専門[技術]的に
4829,technique,技術、技法、手法、コツ
4830,technology,科学技術、科学的方法
4831,tedious,うんざりする〔させる〕
4832,teenager,10代の若者
4833,telescope,望遠鏡
4834,temper,気質、気分、かんしゃく、平静な気分、落ち着き
4835,temperament,気質、気性
4836,temperate,穏やかな、節度のある
4837,temperature,温度、体温
4838,temple,寺院、神殿
4839,temporal,時間の、現世の、つかの間の
4840,temporary,一時的な
4841,tempt,誘惑する、～を…する気にさせる、怒らせる
4842,tempting,魅力的な
4843,tenant,賃借人
4844,tend,～する傾向がある（to do）
4845,tender,優しい、同情的な、柔らかい、きゃしゃな
4846,tense,緊張した、硬直した
4847,tension,緊張、不安、緊迫状態、張りの度合い
4848,tentative,仮の，試験的な
4849,term,期間、専門用語、条件、関係
4850,terminal,終点、最終の
4851,terminate,終わらせる、終わる
4852,termite,シロアリ
4853,terrain,地形、地勢
4854,terrible,ひどい、恐ろしい
4855,terrific,すばらしい、ものすごい
4856,terrify,怖がらせる、脅かす
4857,territory,領土、領域
4858,terror,恐怖
4859,terrorism,テロ行為、恐怖政治、恐怖状態
4860,test,テスト、判断基準
4861,testament,あかし、証拠
4862,testify,証言する
4863,testimony,証拠、証明、証言
4864,text,文章、メール、メールを送る
4865,textile,織物、繊維（産業）
4866,texture,感触、手触り、本質、質感
4867,thaw,解凍される、溶ける
4868,theater,劇場、映画館
4869,theft,窃盗（罪）
4870,theme,主題、テーマ、作文（の題）、主題歌
4871,theology,神学、神学体系、教義
4872,theory,学説、理論、原理、推測
4873,therapeutic,治療的な、（心身の）健康によい
4874,therapy,治療、療法
4875,thereby,それによって、それに関して
4876,therefore,したがって
4877,thermal,熱の、熱による、保温用の
4878,thermometer,温度計、体温計
4879,thermostat,自動温度調節装置、サーモスタット
4880,thesis,論文、主題
4881,thick,厚い、太い、濃い
4882,thief,泥棒
4883,thigh,大股
4884,thin,薄い、細い、やせた
4885,thirst,渇き、渇望
4886,thirsty,のどの渇いた、渇望する
4887,thorn,とげ、針
4888,thorough,徹底的な、完全な、全くの、几帳面な
4889,thoroughly,徹底的に
4890,thought,考え、思いつき、思想、思いやり
4891,thoughtful,思いやりのある、思慮〔注意〕深い
4892,thread,糸を通す、糸、筋、脈絡、縫うように進む
4893,threat,脅迫、脅かすもの、悪いきざし
4894,threaten,脅迫する
4895,threshold,出発点、発端、戸口、敷居
4896,thrifty,質素な、やりくりのうまい、繁盛して
4897,thrill,ぞくぞくする[させる]、ぞくぞく[わくわく]すること
4898,thrilled,とてもうれしい
4899,thrive,栄える、うまくやっている、成長する
4900,throne,王位、王権
4901,through,～にもかかわらず、（通例文尾で）でも
4902,throughout,通して、至る所に
4903,throw,～を投げる、催す、捨てる（away/out）
4904,thrust,ぐっと押す、押し付ける、強いる、突く、突き出る
4905,thumb,親指
4906,thus,したがって、だから、このように、次のように
4907,tick,にチェックの印をつける；カチカチと鳴る
4908,tickle,くすぐる
4909,tide,潮（の干満）、潮流、上げ潮
4910,tidy,きちんとした、満足な、なかなかよい
4911,tie,ネクタイ、結び目、同点、つながり
4912,tight,きつい、ぎっしり詰まった、ケチな、厄介な、厳格な、堅く
4913,tighten,を固く締める、を強化する
4914,timber,【英】木材
4915,time,時間、回数、倍、（―s）情勢，時代
4916,timetable,（乗物の）時刻表
4917,timid,臆病な、内気な
4918,tiny,とても小さい、ごくわずかの
4919,tip,先（端）、チップ、秘訣
4920,tiresome,退屈な、骨の折れる、厄介な
4921,tissue,組織、ティッシュペーパー
4922,title,肩書、タイトル、作品
4923,tobacco,（刻み）タバコ
4924,toddler,幼児
4925,toe,足の指、つま先
4926,toil,骨を折って働く、苦労して進む
4927,token,しるし、代用硬貨、商品券
4928,tolerable,許容できる、我慢できる
4929,tolerant,寛容な、包容力のある
4930,tolerate,耐える、抵抗力がある、黙認する、許す
4931,toll,損害（の程度）、死傷者数、通行料
4932,toll-free,（通行料・通話料が）無料の
4933,tomb,墓石、墓
4934,ton,(重量単位)トン、大量
4935,tone,音色、音調、調子、色合い、～の調子を変える
4936,tongue,言語、言葉、舌、話しぶり
4937,tool,道具、工具、商売道具、手段
4938,tooth,歯
4939,top,（通例the）頂上、最高位
4940,topic,話題、トピック、主題
4941,topple,を倒す、ぐらつく、ぐらついて倒れる
4942,torch,たいまつ
4943,torment,ひどく苦しめる、ねじ曲げる
4944,tornado,竜巻
4945,torture,拷問、苦痛、拷問にかける、ひどく苦しめる、曲解する
4946,total,まったくの、統計の、合計
4947,touchy,厄介な、敏感な
4948,tough,かたい、丈夫な、難しい、困難な、不幸な
4949,tour,（観光）旅行（見学）（をする）
4950,tourism,観光
4951,tout,しつこく勧める（勧誘する）
4952,toward,の方へ
4953,toxic,有毒な、中毒性の
4954,trace,跡、追跡する、見つけ出す
4955,track,追う、通った跡、走路、線路、小道
4956,tracker,追跡者（機器）
4957,tract,〔器官の〕管、道、大きな広がり
4958,trade,貿易、職業、商売、売買する、交換する
4959,tradition,伝統、慣習、伝説
4960,traffic,交通、通行、交通［輸送］量、取引
4961,trafficking,不正取引、密売
4962,tragedy,悲劇（的な事態）
4963,tragic,悲惨な、悲劇的な
4964,trail,追跡する、引きずる、跡、小道
4965,trait,（性格・習慣などの）特色
4966,traitor,裏切り者
4967,trance,催眠状態
4968,tranquil,穏やかな
4969,tranquility,平穏、静寂
4970,tranquilizer,精神安定剤
4971,transact,商取引を行う、処理する
4972,transaction,（業務の）処理、取引、議事録
4973,transcend,超越する、を超越する、をしのぐ
4974,transcription,書写 文字起こし
4975,transfer,移動(する)、譲渡(する)、移転(する)、乗り換え(る)
4976,transform,変形させる、一変させる
4977,transient,一時的な、束の間の、浮浪者、短期滞在客
4978,transition,推移、移り変わり、過渡期、変わり目
4979,transitional,移り変わる、移行の、過渡的な
4980,translate,翻訳する、解釈する、)移す
4981,translation,翻訳(書)、移行
4982,translucent,半透明の
4983,transmit,送る、伝える、伝染させる
4984,transmogrify,を一変させる
4985,transparent,透明な、見え透いた、明白な、わかりやすい、率直な
4986,transplant,移動させる、移植する、移植（手術）
4987,transport,輸送する、（be～ed)夢中になる、いっぱいになる
4988,transportation,交通機関、輸送
4989,trap,わな、策略、罠で捕らえる、だます、閉じ込める
4990,trash,ゴミ
4991,traumatic,トラウマになる、ショッキングな
4992,travel,旅行する、進む、（光・音などが）伝わる、旅行
4993,treacherous,不誠実な、裏切りの、当てにならない
4994,treasure,大事にする、宝物、貴重品
4995,treat,処理する、治療する、おごる、おごり、もてなし
4996,treaty,（国家間の）条約、協定
4997,tremble,震える、感動する、を動かす、震える、振動する
4998,tremendous,（数量・程度・強さなどが）ものすごい、素晴らしい
4999,trend,傾向、流行
5000,trespass,(不法)侵入する、侵害する
5001,trial,試み、（品質・性能などの）試験、裁判、試用期間
5002,triangle,三角形
5003,tribal,種族の、部族の
5004,tribe,部族、仲間
5005,trick,だます、計略、いたずら、秘訣、芸
5006,tricky,扱いにくい、こつのいる、ずるい、狡猾な
5007,trifle,ささいな事、くだらない物、少量
5008,trigger,誘発する、（銃の）引き金、誘因
5009,trim,切り取る
5010,triple,３倍になる、を３倍にする
5011,triumph,勝利、大勝利、勝利を得る、勝利を喜ぶ
5012,trivial,ささいな、取るに足りない、ありふれた
5013,troop,軍隊、兵士たち、一団、群れをなして進む
5014,tropic,熱帯地方、回帰線
5015,tropical,熱帯の、熱烈な
5016,trouble,困ること、問題（点）、骨折り、悩ませる、迷惑をかける
5017,trunk,(木の)幹、（自動車の）トランク
5018,trust,信頼、（財産などの）委託、を信頼する
5019,trustworthy,信頼〔信用〕できる、頼りになる、当てになる
5020,truth,真実、事実、真理、誠実
5021,tube,管、[英]地下鉄
5022,tuition,授業料、個人指導
5023,tumble,転ぶ、暴落する、倒す、ひっくり返す、転落、暴落
5024,tumor,腫瘍、はれ
5025,tumor/tumour,腫瘍、腫れ物
5026,tuna,マグロ
5027,tune,メロディ、曲、適応させる、合っている
5028,turmoil,混乱
5029,turn,変わる（える）、回転する（させる）、曲がる（げる）、順番
5030,turtle,カメ、ウミガメ
5031,tutor,家庭教師、個人電話、 個人的に教える
5032,tweet,つぶやく
5033,twin,双子の一方、対をなす
5034,twist,より合わせる、曲げる、ねじれ
5035,type,タイプ、型
5036,typical,典型的な、特有の
5037,typically,通常、概して、典型的に
5038,typify,の典型となる
5039,tyranny,暴政、暴虐、制圧、専制〔独裁〕政治
5040,tyrant,暴君、専制君主
5041,ubiquitous,至る所に存在する、どこにでも現れる
5042,ugly,醜い、不快な、けしからぬ
5043,ultimate,究極（的）の、最終（的）の、最高の
5044,ultimately,最終的に
5045,ultraviolet,紫外線、紫外線の
5046,unanimous,全員一致の、同意見の
5047,unanimously,満場一致で
5048,unauthorized,権限のない、(公的に)認可されていない
5049,unaware,気づかないで、知らないで
5050,uncertain,はっきり分からない、(人が)確信がない
5051,unchanged,変化していない、元のままの
5052,unconditional,無条件の、絶対的な
5053,uncover,暴く、発掘する
5054,underestimate,過小評価する、軽く見る、少なく見積もる
5055,underfed,栄養失調の
5056,undergo,経験する、受ける
5057,undergraduate,大学生
5058,underground,地下の（に、で）、地下（鉄壁）
5059,underlie,背後にある、基礎となる、下にある
5060,underlying,根本的な
5061,undermine,害する、傷つける、侵食する、下を掘る
5062,underrate,～を過小評価する
5063,underscore,に下線を引く、を強調する
5064,understandable,もっともな、当然の、理解できる、わかる
5065,understate,を控えめに言う
5066,undertake,引き受ける、保証する、に着手する
5067,undo,はずす、ほどく、元通りにする、帳消しにする、破滅させる
5068,undone,元に戻る
5069,undoubtedly,確かに、(文修飾)明らかに
5070,unearth,（偶然）～を見つける、～を発掘する
5071,unease,不安、心配
5072,uneasy,不安な、落ち着かない、ぎこちない
5073,unemployment,失業（状態）、失業率
5074,unequal,(権利などが)不平等な
5075,uneven,でこぼこな、平でない
5076,unexpected,思いがけない、不意の
5077,unfairly,不当に、不公平に
5078,unfamiliar,不慣れな、よく知られていない
5079,unfold,開く、明らかにする、開く、明らかになる
5080,unfortunately,残念なことに、不幸にも
5081,uniform,同一の、均等の、制服
5082,unify,統合［統一］する、統一される
5083,union,労働組合、結合、団結、一致、連邦
5084,unique,唯一の、特有の、類のない
5085,uniquely,比類なく、独特に
5086,unit,1個、1人、（構成などの）単位
5087,unite,結合する、団結させる、まとめる
5088,unity,結束、統合、単一（性）、一貫性
5089,universal,普遍的な、全員の、万能の、宇宙の、世界中の
5090,universe,宇宙
5091,university,（総合）大学
5092,unknown,不明の、（～に）知られていない（to）、無名の
5093,unleash,（抑えていたもの）を爆発させる
5094,unless,…でない限り
5095,unlike,と異なって、異なった
5096,unorthodox,型破りの
5097,unperturbed,心を乱されない、落ち着いた
5098,unpleasant,不愉快な、不親切な、無礼な
5099,unpopular,人気がない、不評の、はやらない
5100,unprecedented,前例のない、空前の
5101,unpredictable,変わりやすい、予測できない
5102,unproductive,非生産的な、良い結果を生まない
5103,unravel,解明する
5104,unrelated,無関係の、血縁関係がない
5105,unrest,(社会的な)混乱、不安、(心の)動揺
5106,unsafe,安全でない、危険な
5107,unsound,不健康な
5108,until,①～まで（ずっと)[接] ②～まで（ずっと）
5109,unusual,普通でない
5110,unveil,のベール(おおい)を取る、を明らかにする
5111,unwarranted,不当な、保証されていない、公認されていない
5112,unwittingly,知らずに、うっかり
5113,upbringing,(子供の)養育、しつけ
5114,upcoming,今度の、近づく、やってくる
5115,update,最新のものにする、アップデートする
5116,upgrade,改良する
5117,upheaval,大変、激変
5118,uphold,を支持する、を確認する、を維持する
5119,uplifting,高揚させる
5120,upper,上部の、上級の
5121,upright,まっすぐな、直立した、まっすぐに、直立して
5122,uproar,大騒ぎ、騒動
5123,uproot,根こそぎ引き抜く、根絶する
5124,upscale,高所得者層
5125,upset,あわてさせる、ひっくり返す、腹を立てて
5126,upside,良い面
5127,uptight,神経質な
5128,up-to-date,現代的な、最新の
5129,upturn,好転、上昇
5130,upward,上に向かって、上方への
5131,Uranus,天王星
5132,urban,都市の、都会的な
5133,urge,駆り立てる、～に…するよう説得する、推進する、衝動
5134,urgency,緊急、切迫
5135,urgent,緊急の
5136,usage,用法、語法、習慣
5137,used,中古の、（to do）以前は～した；（be - to）に慣れている
5138,useless,役に立たない、無駄な、劣っている
5139,usually,たいてい
5140,utensil,（特に台所の）用具、（一般に）道具
5141,utility,公共事業、公共料金、実用性
5142,utilize,利用する
5143,utmost,最高の、最大の、最大限
5144,utter,(言葉など)を発する、表現する、全くの、徹底的な
5145,utterance,発言
5146,utterly,まったく
5147,vacant,空いている、からの、うつろな
5148,vacation,休暇
5149,vaccine,ワクチン
5150,vacuum,真空状態、空虚、電気掃除機、掃除機をかける
5151,vague,あいまいな、ぼんやりとした
5152,vain,無駄な、骨折り損の、価値のない、うぬぼれの強い
5153,valence,原子価
5154,valid,妥当な、正当な、有効な、合法的な、効力がある
5155,validate,を立証（実証）する、を認可（公認）する
5156,validity,妥当性
5157,valley,谷（間）、流域
5158,value,（複数）価値観、価値、重要性、評価する
5159,vandalism,破壊、損傷
5160,vandalize,破壊する
5161,vanish,消える、消滅する、薄れる
5162,vapor,蒸気、実体のないもの
5163,variability,変わりやすいこと、変異性
5164,variable,変わりやすい
5165,variation,変異、変化、差異
5166,various,さまざまな、いくつかの
5167,vary,さまざまである、変わる、変える
5168,vast,膨大な、広大な
5169,vault,金庫室 とびこえる
5170,vegetation,植物、植生
5171,vehicle,乗り物； 伝達手段、媒体、原動力
5172,vein,血管、静脈、特質
5173,velocity,速度
5174,vend,売る、を売る
5175,vending,販売
5176,vending machine,自動販売機
5177,vendor,物売り、行商人、自動販売機
5178,venture,冒険（的事業）、思い切って～する
5179,venue,会場、開催地
5180,Venus,金星
5181,verb,動詞
5182,verbal,言葉の、口頭での、逐語的な
5183,verdict,評決、決定、意見
5184,verge,瀬戸際、端
5185,verify,正しいことを証明する、確かめる
5186,verse,韻文、詩（の一行）、聖書の一節
5187,version,～版、型、翻訳、説明、報告、表現、解釈
5188,versus,対～、～に対して
5189,vertebrate,"脊椎動物, 脊椎動物の"
5190,vertical,垂直の、縦方向の
5191,vessel,船舶、容器、（体液が通る）脈管
5192,veterinarian,獣医
5193,via,経由して、によって
5194,viable,（計画などが）実行可能な
5195,vibrant,活気に満ちた
5196,vice,悪、欠点
5197,vicinity,近所
5198,vicious,残忍な、乱暴な、悪意のある、意地の悪い
5199,victim,犠牲者、被害者、えじき、いけにえ
5200,victorious,勝利を得た、勝ち誇った
5201,victory,勝利、征服
5202,view,眺め、見解
5203,viewpoint,観点、立場、見える地点
5204,vigilant,慎重な、油断のない
5205,vigor,活力、精力、元気、力強さ、迫力
5206,vigorous,精力的な、激しい、活力のある
5207,vintage,年代物の、ビンテージ物の、時期
5208,violate,破る、妨害する
5209,violation,違反、侵害
5210,violence,暴力
5211,violent,激しい、暴力的な
5212,virtual,仮想の、事実上の
5213,virtually,ほとんど、実質的には
5214,virtue,美徳、長所、効能
5215,virtuous,徳の高い、高潔な、自らの徳を誇示した
5216,virus,ウィルス、コンピュータウィルス
5217,visibility,視界、視野、目に見えること
5218,visible,目に見える、明白な
5219,vision,視力、視覚、洞察力、先見性
5220,visual,視覚の、目に見える
5221,visualize,を心に思い浮かべる、を視覚化する、想像する
5222,vital,生命に関する、極めて重要な、不可欠な、活気のある
5223,vitamin,ビタミン
5224,vivid,鮮やかな、強烈な、はっきりした、生き生きとした
5225,vocabulary,語彙
5226,vocal,声の、発声の、はっきりものを言う
5227,vocation,職業、天職、召命
5228,vocational,職業の、職業訓練の（ための）
5229,void,無効の
5230,volcano,火山
5231,volume,量、容積、音量、１冊
5232,voluntarily,自発的に
5233,voluntary,自発的な、無償の
5234,volunteer,ボランティア
5235,vomit,吐く、もどす
5236,vote,投票する、投票、選挙権
5237,voucher,クーポン券、商品券
5238,vow,誓約する、誓う、誓い
5239,vowel,母音(字)
5240,voyage,船旅（をする）、航海（する）
5241,vulgar,下品な、粗野な、悪趣味の
5242,vulnerable,傷つきやすい、弱い
5243,vulture,ハゲタカ、コンドル
5244,wacky,風変わりな、ばかげた
5245,wag,（尾などを）振る；（尾などが）揺れる
5246,wage,（肉体労働に対する）賃金
5247,wait,"待つ, 仕える, 給仕する"
5248,wake,目が覚める、（眠っている人）を起こす
5249,wallet,札入れ
5250,walnut,クルミ
5251,wander,歩き回る、それる、はぐれる
5252,wane,[自] （力・程度・色などが）衰える，（月が）欠ける
5253,ward,行政区、病棟
5254,warehouse,倉庫、問屋
5255,warfare,戦争状態、武力衝突、闘争
5256,warmth,温かさ
5257,warn,警告［注意］する
5258,warning,警告
5259,warrant,正当と認める、保証する、根拠、保証、証明書
5260,warranty,(商品の)保証、保証書、正当な理由〔根拠〕
5261,warrior,戦士、勇士
5262,waste,浪費、荒れ地、廃棄物、廃物の、不毛の、浪費する
5263,waterfall,滝
5264,wavelength,波長
5265,waver,(心が)揺れ動く、迷う
5266,way,道、方向、付近、方法、はるかに
5267,weak,弱い
5268,wealth,財産、富、裕福、豊富な、資源
5269,wealthy,裕福な、豊富な
5270,weapon,兵器、武器
5271,weaponry,武器類
5272,wear,身につけている、すり減らす、使い果たす、疲れさせる
5273,wearable,着用できる、着やすい
5274,weary,ひどく疲れた、飽き飽きして、非常に疲れる、うんざりする
5275,weave,織る、(巣)を張る、(計画など)を作り上げる
5276,web,クモの巣、(インターネット上の)ネットワーク、ウェブ
5277,website,ウェブサイト、ホームページ
5278,wed,と結婚する、を（～と）結婚させる（to）
5279,weed,雑草、役に立たない人(物)、(雑草)を抜く、～を取り除く
5280,weep,すすり泣く、しくしく泣く、嘆く
5281,weigh,重さを量る、比較検討する
5282,weight,重量、重要さ
5283,weird,不可思議な、変な、奇妙な、神秘的な
5284,welfare,福祉（事業）、繁栄、幸福
5285,well-being,複利、健康、幸福
5286,west,西（部）（の）
5287,wetland,湿地
5288,whale,クジラ
5289,whatever,～することは何でも、何が（何を）～しようとも
5290,whatsoever,全く、少しでも
5291,wheat,小麦
5292,wheel,ハンドル、車輪
5293,wheelchair,車椅子
5294,whenever,～するときはいつでも、いつ～しようとも
5295,whereas,その一方で、～だけれども
5296,wherever,～するところはどこでも、どこへ（に）～しようとも
5297,whether,～かどうか、～であろうとなかろうと
5298,while,する間に、の間ずっと、その一方で、時間
5299,whisper,ささやく、ささやき
5300,whistle,笛
5301,whole,全体の、まるごとの
5302,wholesale,卸売り
5303,wholesome,健康に良い
5304,wholly,完全に、全く
5305,wicked,邪悪な、いたずらな、とてもひどい
5306,wide,(幅・範囲・視野が)広い
5307,widespread,広範囲にわたる、広く普及した
5308,width,幅、横幅、一定幅に切った材料
5309,wield,巧みに使う
5310,wild,荒野、大自然、野生の、荒涼とした、乱暴な
5311,wilderness,荒野、（庭・町などの）放置された部分
5312,wildfire,野火、山火事
5313,wildlife,(集合的に)野生生物
5314,will,意志、遺書
5315,willing,～する気がある、快くやる
5316,willingness,快く～すること（to do）、積極的な気持ち
5317,willpower,意志力
5318,win,勝つ； ～（試合など）に勝つ； を獲得する
5319,wind,風、動向、巻く、曲がりくねって進む
5320,wipe,拭く、(wipe outで)絶滅させる
5321,wire,針金、ケーブル
5322,wireless,無線（電信）の、ラジオの
5323,wisdom,知恵、賢さ、金言、名言、学問、博識
5324,wise,（判断・行為などが）賢い
5325,wish,願う、～だといいと思う、願い
5326,wit,機知、機転、機知に富む人、(～s)平静
5327,witch,魔女
5328,withdraw,引っ込める、をかせる、引き出す
5329,wither,しおれる、枯れる、元気を失う、しおれさせる
5330,withhold,保留する、（感情など）をおさえる
5331,within,の内部に、の範囲内で、～以内に
5332,withstand,に耐える、に持ちこたえる、耐える、抵抗する
5333,witness,目撃者、証人、証拠、証言
5334,witty,機知に富んだ
5335,wolf,オオカミ
5336,wonder,不思議、驚異、不思議に思う（at）、…かしらと思う
5337,wood,木材、森、薪
5338,workforce,（通例the）総労働人口、労働力
5339,workout,運動、(運動競技の)練習
5340,workplace,仕事場
5341,workshop,研修会、セミナー
5342,worldwide,世界的な、世界中で（に）
5343,worm,虫
5344,worry,心配する、悩む
5345,worsen,悪化させる、悪化する
5346,worship,崇拝する、賛美する、礼拝に出る、賛美、尊敬、崇拝
5347,worth,～の価値がある
5348,worthless,価値のない、役に立たない
5349,worthwhile,価値がある、立派な
5350,wound,（銃弾・刃物などによる）傷、痛手
5351,wrap,包む、巻き付ける
5352,wreck,難破、残骸、台無しにする、大破させる
5353,wrecked,難破した
5354,wretched,悲惨な
5355,wrinkle,しわ、妙案、助言
5356,wrist,手首
5357,wrongdoing,悪事（を働くこと）、犯罪
5358,yard,ヤード（約0.914m）、庭
5359,yardstick,基準、尺度
5360,yawn,あくび(をする)
5361,yearn,熱望する
5362,yell,大声で叫ぶ、エールを送る、大声、エール
5363,yield,屈する、産出する、収穫高
5364,youngster,子供
5365,youth,若者、若さ、青年時代
5366,zealous,熱心な、熱狂的な
5367,zinc,亜鉛
5368,zone,区域、地帯`,
  },
];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

// Pre-parse all data sets at script load time
VOCAB_DATA_SETS.forEach(ds => {
  ds.parsed = parseVocabularyCSV(ds.csv);
});