// ══════════════════════════════════════════════════════════════
//  External vocabulary data sets (プリセット単語帳)
//  Loaded on first run into IndexedDB
// ══════════════════════════════════════════════════════════════
const VOCAB_DATA_SETS = [
  {
    id: 'teppeki',
    name: '鉄壁',
    csv: `�ԍ�,�p�P��,�Ӗ�
1,vital,"(�``�ɂƂ���)���ɏd�v��(to, for�``)�G ������"
2,vivid,"���������Ƃ���, �N�₩��"
3,revive,"�``�𐶂��Ԃ点��, �����Ԃ�"
4,essential,"(�``�ɂƂ���)�d�v��, �K�v�s����(to, for�``)�G �{���I��"
5,indispensable,"(�``�ɂƂ���)�d�v��, �K�v�s����(to, for�``)"
6,crucial,"����I��, �ɂ߂ďd�v��"
7,significance,�d�v��
8,consequence,"����, �d�v��"
9,matter,"����, ���G �d�v�ł���"
10,count,�``�𐔂���G �d�v�ł���
11,make a difference,�d�v�ł���
12,trivial,"��������, ����ӂꂽ"
13,trifle,"�������Ȏ�, ������Ȃ���"
14,common,"���ʂ�, �悭����, ��ʓI��, ����ӂꂽ"
15,ordinary,"���ʂ�, �ʏ��, ����ӂꂽ"
16,familiar,(�``��)�悭�m��ꂽ(to�``)�G (�``��)���ʂ��Ă���(with�``)�G �e����
17,emphasize,�``���������
18,stress,"�``���������G �X�g���X, �d�_, ����"
19,neglect,"�``��(��������)�ӂ�, �``�𖳎�����"
20,ignore,"�``�𖳎�����, �``��m��Ȃ��ӂ�����"
21,eminent,������
22,prominent,�ڗ������G �L����
23,primary,"��1��, ��v��"
24,tiny,�����ۂ���
25,slight,"�킸����, ���ɑ���Ȃ�"
26,character,"���i, �l�i, ����, �o��l��, ����"
27,feature,"(�ڗ�����)����, �痧���G �``����W����, �Ăѕ��ɂ���"
28,trait,"����, ���F"
29,typical,"�T�^�I��, (�``)�炵��(of�``)"
30,unique,"(�``��)���L��(to�``), �Ǝ��́G �B���"
31,peculiar,(�``��)���L��(to�``)�G ���ς���
32,particular,"�����, ���ʂ�"
33,general,"�S�ʓI��, ��ʓI��"
34,specify,�``����肷��
35,distinguish,"�``��(�c��)��ʂ���, ��������(from�c)"
36,define,"�``���``����, ���m�ɂ���"
37,vague,"�B����, ���R�Ƃ���"
38,obscure,"�s���Ă�, �ڂ₯���G ���ɒm���Ă��Ȃ�"
39,ambiguous,"�B����, �ǂ���Ƃ�Ƃ��"
40,obvious,������
41,evident,������
42,apparent,"�����Ƃ����, ������"
43,respect,"���h, ���d, (in)�_, �����G �``�𑸌h����, ���d����"
44,aspect,"(in)����, �l��, �_"
45,detail,(in)�ڍ�
46,precise,���m��
47,accurate,���m��
48,structure,"�\��, �\��, ���i"
49,construct,"�``����݂���, �g�ݗ��Ă�"
50,destroy,"�``��j�󂷂�, �łڂ�"
51,architecture,"���z, ���z�w"
52,constitute,"�``��\������, ��߂�G �ݗ�����"
53,institute,"�``(�@���E���x)�𐧒肷��G ����, ������"
54,substitute,"�``��(�c�̑����)��p����(for�c)�G ��p�i, �㗝�l"
55,stable,���肵��
56,establish,"�``��ݗ�����, �m������"
57,subject,"�Ȗ�, ���, �Ɨ�, �b���G ����, �팱�ҁG (�``��)�]�����Ă���, ������₷��(to�``)"
58,subdue,"�``�𐪕�����, �x�z����, �}����"
59,submit,"�i�``��)���]����, �g��C����(to�``)�G �``�𕞏]������, ���o����"
60,substance,�����A����
61,fundamental,"���{�I��, ��b�I��, �d�v��"
62,fund,"����, ���"
63,found,�``��ݗ�����
64,foundation,"���, ��b, �y��"
65,profound,"�[��, �[����"
66,base,�y��A��b
67,basis,��b
68,ground,"�^����, �n��, ����, ���R"
69,superficial,����ׂ�
70,shallow,"�󂢁G ��͂���, ����ׂ�"
71,superb,"���΂炵��, ������"
72,supervise,"�``��Ď�����, �w������"
73,superstition,���M
74,core,"���S, �j�S�G (�ʕ���)�c"
75,surface,"�\��, �\�w"
76,internal,"��ʂ�, �����"
77,external,�O����
78,concentrate,(�``��)�W������(on�``)�G �``��(�c��)�W��������(on�c)
79,focus,"(�``��)�W������, �d�_��u��(on�``)�G �œ_"
80,compose,�``��\������G ��ȁE�앶����
81,consist,"(�``����)����(of�``), (�``�̒���)����, ���݂���(in�``)"
82,organize,�``��g�D����
83,element,"�v�f, ���f"
84,component,"�\���v�f, ����"
85,complex,"���G��, ������"
86,complicated,���G��
87,reveal,"�``�𖾂炩�ɂ���, �\�I����"
88,conceal,�``��B��
89,expose,�``����炷
90,impose,"�``��(�c��)�ۂ�, ��������(on[upon]�c)"
91,divide,�``�𕪊�����
92,diffuse,"�``��܂��U�炷, ���U����G �g�U����"
93,scatter,�``��܂��U�炷
94,spread,"�L����, ���y����"
95,bend,�``��Ȃ���
96,incline,"�``��X����, (�c������)�C�����ɂ�����(to do)"
97,lean,"(�``��)��肩����, ������(on[against]�``)"
98,erect,"�``�𒼗�������, ���Ă�G ��������"
99,emit,"�``����o����, �r�o����"
100,absorb,�``��z������
101,attract,"�``���(��)���t����, ��������"
102,extract,"�``�𔲂��o��, ���o����"
103,aim,"�ڕW, �ړI�G (�``��)�_��, �ڕW�Ƃ���(at�``)"
104,penetrate,"�``��ђʂ���, �``�ɐZ������G �ђʂ���ithrough�``�j"
105,thrust,"�``��(��������)�����t����, �˂�����, �˂��h��"
106,insert,�``��}������
107,grasp,"�``��͂�, ����G �������"
108,grab,�``��͂�
109,seize,"�``��͂�, (����Ȃǂ�)��P���G ��������"
110,drag,�``���������
111,cling,"�i�``��)�����݂�, �Ŏ�����(to�``)"
112,stick,"�_�G (�``��)������, �Ŏ�����(to�``)"
113,attach,�``���������G �������������
114,imitate,�``��^����
115,fold,�``��܂���
116,tear,�``�������
117,mold,"�``������ǂ�, �``������"
118,distort,�``��c�߂�
119,expand,�``��g�傷��G �g�傷��G �c������
120,shrink,�k��
121,swell,�c���
122,assemble,"�``��W�߂�, �g�ݗ��Ă�"
123,collect,�``��W�߂�G ��������
124,cram,�``��l�ߍ���
125,rotate,�``���]����G ��]����
126,twist,�``��Ђ˂�
127,upset,"�``��Ђ�����Ԃ�, ���h������, �{�点��G ���h����, �{����"
128,stir,�``������񂷁G ����
129,explode,��������
130,burst,��������
131,melt,�n����G �``��n����
132,leak,�R���G �``��R�炷
133,string,"�Ђ�, ��"
134,restrict,�``��(�c��)��������(to�c)
135,strict,�������G ������
136,distress,"��Y, �n��"
137,strain,"�ْ�, �d��, �i��, ����"
138,restrain,�``��}������
139,tense,"�ْ�����, �҂�ƒ�����"
140,extend,"�``��L�΂�, ��������"
141,intense,������
142,force,"��, ���́G �R���́G �``��(�c���邱�Ƃ�)��������(to do)"
143,compel,�``��(�c���邱�Ƃ�)������(to do)
144,oblige,"�``��(�c���邱�Ƃ�)�``���Â���, �]�V�Ȃ�������(to do)"
145,voluntary,�����I��
146,spontaneous,"�����I��, ���R�����I��"
147,free,���R�ȁG �����́G �ɂ�
148,liberty,���R
149,release,�``��������
150,capture,�``��߂炦��
151,prohibit,�``��ւ���G �``��(�c����̂�)�ւ���(from doing)
152,forbid,�``��ւ���
153,ban,�``��(���I��)�֎~����
154,permit,"�``�����, �``��(�c����̂�)������(to do)"
155,allow,�``��(�c����̂�)����(to do)
156,forgive,�``(�߂���Ƃ����l)�����
157,overlook,"�``���ڂɌ���, ����, �``������Ƃ�"
158,generous,"���e��, �C�O�̂悢"
159,tolerate,"�``����e����, �e�F����"
160,prevent,�``��h���G �``��(�c����̂�)�W����(from doing)
161,avoid,"�``(�]�܂����Ȃ����)������, (�����)�������(doing)"
162,hinder,�``��W����G �``��(�c����̂�)�W����(from doing)
163,refrain,"(�``����̂�)�����T����, ��������(from doing)"
164,interrupt,"�``�𒆒f����, �ז�����"
165,disrupt,"�``�𗐂�, ��������"
166,disturb,"�``��W����, �Y�܂���"
167,interfere,"(�``��)�ז�����, (��)������(with�``)"
168,cease,"�``���߂�, ���Ȃ��Ȃ�(to do, doing)"
169,halt,�``���~����G ��~
170,deprive,�``����(�c��)�D��(of�c)
171,rob,"�``����(�c��)�D��, ���D����(of�c)"
172,strip,"����(�c��)�͂����, ��������(of�c)"
173,remove,"��(�c����)��������, ��菜��(from�c)"
174,eliminate,"�``���菜��, �폜����"
175,get rid of,"�``���菜��, ��������"
176,dispose of,"�``���������, ��菜��"
177,do away with,"�``��̂Ă�, �p�~����"
178,discard,�``��̂Ă�
179,abandon,�``��̂Ă�
180,desert,"�``��̂Ă�, ���̂Ă�G ����"
181,provide,"�``��(���炩����)��������, �^����"
182,supply,�``(����Ȃ���)���������G ����
183,offer,"�``��(�c��)�񋟂���, �\���o��(to�c)�G ��, �\���o"
184,furnish,�``��(�c[�Ƌ�Ȃ�]��)�����t����(with�c)
185,equip,�``��(�c��)��������(with�c)
186,promote,�``�𑣐i����G ���i������
187,enhance,"�``����߂�, ��������"
188,accelerate,"�``���������, ���i����"
189,boost,"�``�𑣐i����, ���߂�"
190,urge,"�``��(�c����悤)�������Ă�(to do)�G �Փ�, �~�]"
191,encourage,"�``��(�c����悤)��܂�, ���i����(to do)"
192,project,"���, ���ƁG �``����ς��G ���e����"
193,enterprise,"���, ����, ���"
194,scheme,"�v��, �g�g��, ���x"
195,attempt,"����, ���G �``��(���悤��)���݂�(to do)"
196,purpose,�ړI
197,intention,�Ӑ}
198,destination,"�ړI�n, �s����"
199,ideal,���z�G �``���z�I��
200,practical,"���p�I��, �����I��"
201,real,"�{����, �{����, ������"
202,fantasy,��z
203,fancy,"��z�G �``��z������G ������, ��̍���"
204,illusion,���z�A���o
205,imagine,�``��z������
206,task,"�d��, �C��"
207,undertake,�``������󂯂�
208,cage,"�B, ����"
209,embark,"(�``��)�D�o����, ���肷��(on�``)"
210,hesitate,"(�``����̂�)���߂炤, �S�O����(to do)"
211,pursue,�``��ǂ����߂�
212,seek,�``��T�����߂�
213,strive,"(�``�𓾂悤��)�w�͂���, ��������(for�``)"
214,assign,"�``��(�c��)���蓖�Ă�, �ۂ�(to�c)"
215,in charge of,"�``��S������, �̐ӔC�҂�"
216,responsible,(�``�ɑ΂���)�ӔC�̂���(for�``)
217,execute,"�``����s����, �ʂ����``����Y����"
218,perform,"�``����s����, �ʂ���, �``�������, �㉉����"
219,performance,"���s, �Ɛ�, ���Z, ���t"
220,obstacle,"��Q, ��Q��"
221,adverse,"�t����, �s����"
222,hardship,"���, ��J"
223,burden,"�d��, ���S"
224,overcome,"�``����z����, ��������"
225,cope with,"�``�Ɏ��g��, �Ώ�����"
226,tackle,"�``�Ɏ��g��, ����������"
227,talent,�˔\
228,gift,"���蕨, (���܂����)�˔\"
229,ability,�\��
230,skill,"�Z�p, �\��"
231,capable,"(�``��, ����)�\�͂�����(of�``, of doing)"
232,capacity,"(���ݓI��)�\��, �󂯓����\��"
233,potential,"���ݔ\��, �\���G �``���ݓI�ɉ\��"
234,effort,�w��
235,struggle,"����, �w�́G ��������, �w�͂���"
236,endeavor,"�w��, ���݁G �w�͂���, ���݂�"
237,persist,"�˂΂�, �������咣����(in�``)"
238,persevere,�˂΂�
239,efficient,�����I��
240,fulfill,"�``(�``���E��)��ʂ���, ���s����"
241,attain,"�``��B������, ���B����"
242,achieve,�``��B������
243,accomplish,"�``�𐬂�������, ��������"
244,obtain,�``���ɓ����
245,gain,"�``�𓾂�, �``�𑝂��G ���v, ����"
246,acquire,"�``��l������, �g�ɂ���, �K������"
247,complete,"�``���������, ���S�ɂ���G ���S��, ��������"
248,temporary,"�ꎞ�I��, ����"
249,contemporary,"�������, �����"
250,permanent,"�s�ς�, �i������"
251,eternal,"�i�v��, �i����"
252,rare,"�H��, �߂����ɂȂ�"
253,once in a while,���܂�
254,occasion,"(on)�@��, �ꍇ, �o����"
255,now and then,���X
256,frequency,"�p�x, �p�ɁG ���g��"
257,constant,"�₦�ԂȂ�, ����"
258,perpetual,"�₦�ԂȂ�, �i�v��"
259,at the moment,���̂Ƃ����
260,at present,���̂Ƃ����
261,for the time being,�������΂炭��
262,rapid,�}����
263,immediate,�����́G ���ڂ�
264,prompt,"������, �f�����G �``��(�c����悤)����, �h������(to do)"
265,abruptly,"�s�ӂ�, �ˑR"
266,period,���ԁG ����G ����
267,age,"�N��, ����"
268,era,����
269,epoch,"�V����, ����̖��J��"
270,phase,"�ǖ�, ��, �i�K"
271,decade,10�N��
272,annual,"���N��, �N��1���"
273,anniversary,�L�O��
274,interval,(���ԁE��Ԃ�)�Ԋu
275,origin,"�N��, �o��"
276,initial,�ŏ���
277,former,"�ȑO��, �O�҂�"
278,previous,�O��
279,precede,�``����s����
280,posterior,(�``���)���(to�``)
281,prior,�i�``���j�O�́ito�``�j
282,advance,"�O�i����, �i�����G �i��"
283,simultaneous,"������, �����ɋN����"
284,coincide,"(�``��)�����ɋN����, ��v����(with�``)"
285,prolong,�``(����)���������
286,postpone,�``(�\��)��(�c�܂�)��������(till[until]�c)
287,delay,�``��x�点��G �x��
288,punctual,���Ԃɐ��m��
289,current,���́G ���ʂ��Ă���G ����
290,out of date,����x���
291,up to date,�ŐV��
292,ancient,"�Ñ��, ��̂�"
293,ancestor,��c
294,primitive,"���n�I��, ���J��, ��؂�"
295,economy,�o��
296,finance,"���, ����, �Z��"
297,recede,��ނ���
298,recession,"�s�i�C, �s��"
299,currency,"�ʉ�, ���y"
300,stock,"�݌�, ��, ����"
301,fortune,"�x, ��Y, �^"
302,wealth,�x
303,well off,"�T����, ��炵����������"
304,poverty,�n��
305,property,"��Y, ���L��, ����"
306,asset,��Y
307,estate,(��ɓy�n��)��Y
308,invest,�``�𓊎�����
309,entrepreneur,�N�Ɖ�
310,capital,"���{, ��s, �啶��"
311,interest,"����, ���q, ���v"
312,profit,���v
313,benefit,"���b, ���v�G �``�̗��v�ƂȂ�G ���v�𓾂�"
314,budget,"�\�Z, �ƌv"
315,purchase,�``��w������
316,afford,(�q�o�ϓI�E���ԓI�Ɂr�``����)�]�T������(to do)
317,available,"����ł���, ���p�ł���, �肪�����Ă���"
318,debt,�؋�
319,owe,"�``��(�c��)�؂�Ă���, ���b������(to�c)"
320,bankrupt,�j�Y����
321,save,"�``�𒙂߂�, �ߖ񂷂�G �Ȃ�, �``��~��"
322,spare,�``��Ƃ��Ă����G �Ȃ��ł��܂��G �ߖ񂷂�G �\����
323,deposit,����G ������G �``�𒙂߂�
324,withdraw,"�``������o��, �������߂�G ����������, �ނ�"
325,extravagant,"������̍r��, �ߓx��, �@�O��"
326,income,����
327,outcome,����
328,revenue,"�Γ�, ����"
329,cost,��p
330,expense,�o��
331,fee,(���Ƃւ�)�ӗ�G ����
332,fare,(��蕨��)�^��
333,area,"�n��, �̈�"
334,region,"�n��, �n��"
335,district,"�n��, ���"
336,quarter,"4�Ԃ��1, �n��, �E�G"
337,local,"�n���, �n���́G �n���̐l"
338,globe,"�n��, �n���V"
339,urban,�s�s�́A�s���
340,rural,�c�ɂ�
341,suburb,�x�O
342,border,"���E, ����"
343,boundary,���E(��)�A���E
344,territory,"�̓y, �Ȃ�΂�"
345,invade,"�``�ɐN������, �N������"
346,intrude,"(�``��)�N������(into, on�``)"
347,occupy,"�``���̂���, ��߂�"
348,migrate,�ړ�����A�ڏZ����
349,immigrate,�ڏZ����
350,emigrate,(���O��)�ڏZ����
351,settle,"��Z����G �``�𗎂���������, �������"
352,frontier,"�Ӌ�, �Ő�["
353,pioneer,"�J���, ���ҁG �``��J�񂷂�"
354,explore,�``��T������
355,include,�``��܂�
356,contain,�``��܂�
357,exclude,�``��(�c����)���O����(from�c)
358,isolate,�``��u������
359,enclose,"�``��͂�, ��������"
360,disclose,"�``��J������, �\��"
361,surround,�``����͂�
362,install,�``��ݒu����
363,introduce,"�``��Љ��, �``��(���߂�)��������"
364,locate,"�``(�̈ʒu)��˂��~�߂�, ������, �``��(����ꏊ��)�u��"
365,spot,"�ꏊ�G �``(�̈ʒu)��˂��~�߂�, ������"
366,search,"(�c����߂�)�``�̒���T��(for�c)�G �T��, �T��"
367,approach,"�``�ɐڋ߂���, �b��������"
368,remote,"�����́G �ւ�҂�, �l�����ꂽ"
369,apart,(�``����)�����(from�``)
370,aside,�e��
371,replace,�``�ɂƂ��đ���G �``��(�c��)�u��������(with�c)
372,site,�p�n�����A�T�C�g
373,realm,"�̈�, �̓y, ����"
374,domain,"�̈�, �̒n"
375,range,�͈�
376,scope,"(�����Ȃǂ�)�͈�, �̈�G �@��"
377,category,"���e, ���"
378,genre,�i�|�p�E���w�́j�W�������A���
379,margin,�]���A�]�T�A������
380,emerge,"�����, �o������"
381,arise,(�``����)������(from�``)
382,stem,(�``����)������(from�``)�G �s
383,branch,"�}�G �x�X, �x��, ����"
384,derive,(�``��)�R������(from�``)�G (�c����)�``������o��(from�c)
385,generate,"�``�𔭐�������, ���ݏo��"
386,flourish,�ɉh����
387,bloom,(�Ԃ�)�炭�G �h����G �J��
388,prosper,�ɉh����
389,thrive,�ɉh����
390,prevail,"���y����, �嗬�ƂȂ�"
391,glory,�h��
392,victory,����
393,triumph,"����, �听���G ��������"
394,fame,����
395,prestige,"��, �АM"
396,fade,"���ނ���, ����ɏ�����"
397,decline,���ނ���G �``(���ҁE�\���o)��f��
398,corrupt,"���p����, ���s�����G �``���������"
399,decay,"����, ���s����G ���s, ����"
400,rot,"����, ���s����"
401,bribe,�d�G
402,fraud,���\�A�s���s��
403,perish,"���ł���, ����"
404,vanish,"���ł���, ������"
405,ruin,"�j��, �p�ЁG �``��j�󂳂���, �䖳���ɂ���"
406,collapse,"���󂷂�, �����"
407,extinguish,�``(��)������G ���ł�����
408,catastrophe,"�j��, ��S��"
409,survive,�``�𐶂��c��
410,regard,"�``��(�c��)�݂Ȃ�(as�c), �``�𑸏d����, �Ɍh�ӂ𕥂��G ���h, �h��, �_"
411,account,"���, ��, ����, ����, �d�v���G (�``[���R]��)�������(for�``)�G (�``[����]��)��߂�(for�``)"
412,concern,"�``�Ɋ֌W����, �``��S�z������G �֌W, �S�z, ���O, �֐S"
413,anxious,"(�``��)�S�z���Ă���(about�``), (�``��)�ؖ]���Ă���(for�``, to do)"
414,attend,"�``�ɏo�Ȃ���G (�``��)���ӂ��ĕ���(to�``), (�``��)�t���Y��, �Ō삷��(on�``)"
415,apply,"�``��(�c��)�K�p����, ���p����(to�c)�G (�``��)���傷��, �u�肷��(for�``)"
416,reflect,"�``�𔽎˂���, ���f����G (�``��)�n�l����(on�``)"
417,wait,"(�``��)�҂�(for�``), (�``��)�d����, ���d����(on[upon]�``)"
418,due,"������ׂ�, ������, (��o�E�x����)������, �����\���"
419,odd,"���, ���[��, ���"
420,odds,"������, ���Z"
421,issue,"(���_�ƂȂ�)���, (�G���Ȃǂ�)���G �``�𔭍s����, ���z����"
422,term,"�p��, ����, �֌W, �܂荇��"
423,figure,"�p, �``, �}, �l��, �����G �l����"
424,state,"�B, ����, (�ꎞ�I��)��ԁG �``��q�ׂ�"
425,bear,"�``��Z��, �``�ɑς���"
426,case,"�ꍇ, ����, �i��(the), ����, ����, �{��, (�a�C��)�Ǘ�"
427,mean,"�``��Ӗ�����, �``���悤��(�Ӑ})����G �``�ڗ��, �Ӓn����"
428,means,"��i, ���@, ��Y"
429,represent,"�``���\����, �``��ے�����, �``��\��"
430,assume,"�``��z�肷��, �v������, �``(�ӔC, �C��)������󂯂�"
431,possess,"�``����L����, �``�Ɏ��߂�"
432,observe,"�``��ώ@����, �``(�@�E�K��)����"
433,swallow,���ݍ��ށA�L�ۂ݂ɂ���A�M����G �c�o��
434,company,"���, �ꏏ�ɂ��邱��, ����"
435,firm,"�ł�, �m�ł���G ���, ���"
436,enter,�``�ɓ���
437,receive,�``��󂯎��
438,accept,�``��󂯓����
439,refuse,�``����ۂ���G �``���悤�Ƃ��Ȃ�(to do)
440,reject,"�``����₷��, �͂˂���"
441,deny,�``��ے肷��
442,appear,"�����, �̂悤�Ɍ�����"
443,exist,"���݂���, ��������"
444,expect,�``��\�z����G ���҂���
445,except,"�``�������, �ȊO��"
446,improve,"�``����ǂ���, ���P����G ���P����, �ǂ��Ȃ�"
447,solve,"�``����, �������"
448,suppose,(�c����)�v��(that�c)�G �``��z�肷��
449,suggest,�``���Ă���G (�c�Ƃ������Ƃ�)�ÂɎ���(that�c)
450,propose,�``���Ă���
451,pretend,(�``����)�ӂ�����(to do)
452,doubt,�^���A�``��^��
453,belong,"(�``��)������, (�``��)���L�ł���(to�``)"
454,fail,"(�``��)���s����(in�``)�G (�``)���Ȃ�, �ł��Ȃ�(to do)"
455,enable,�``��(�c����̂�)�\�ɂ�����(to do)
456,prefer,�``����D��
457,marry,�``�ƌ�������
458,regret,�``��������
459,satisfy,�``�𖞑�������
460,disappoint,�``��������肳����
461,bore,�``��ދ�������
462,amaze,�``��т����肳����
463,astonish,�``��т����肳����
464,frighten,"�``��|���点��, ���т�������"
465,scare,�``��|���点��
466,cause,�����G �``������N����
467,factor,"�v��, �v�f"
468,result,���ʁG ���ʂƂ��Đ�����
469,lead,�``��(�c��)����(to�c)�G (�``��)�����N����(to�``)
470,favor,"�D��, �e�؂ȍs�ׁG �``��D��"
471,harm,"�Q, ���Q�G �``��Q����"
472,risk,"�댯, ���X�N�G �``��댯�ɂ��炷"
473,board,"��, �ψ���G �``(��蕨)�ɓ��悷��"
474,rise,"�オ��, ������G �㏸"
475,raise,"�``��グ��G ���₷, �``(�q���E�ƒ{)���Ă�"
476,lie,�������G ���݂���
477,lay,�``���������G �u��
478,exhibit,"�``��W������, �����G �W���i"
479,convenient,�֗��ȁG �s���̂悢
480,comfort,"���K���G �``��Ԃ߂�, ���C�Â���"
481,correct,"�������G �``(�ӂ�E���_)���������, ����"
482,salary,����
483,reputation,"�]��, ���킳"
484,rumor,"���킳, ����"
485,duty,�``��
486,opportunity,�@��
487,idle,������Ă��Ȃ��G ���p�́G ������Ȃ��ł���
488,calm,"��Â�, �����������G �``�𗎂���������"
489,curious,"�D��S�̂���G �D��S�������, ���"
490,cruel,�c����
491,official,"�����́G ������, ��l"
492,relate,�``��(�c��)�֘A�Â���(to�c)�``��b��
493,absolute,"��ΓI��, ���S��"
494,relevant,"(�``��)�֘A������(to�``), �K�؂�"
495,mutual,���݂�
496,associate,�``��(�c��)�֘A�Â���(with�c)�G �A�z����
497,conflict,"����, �ՓˁG �Η�����, �Փ˂���"
498,collision,�Փ�
499,friction,"���C, �s�a"
500,confront,�``�ɒ��ʂ���
501,oppose,�``�ɔ��΂���
502,object,"����, �Ώ�, �ړI�G (�``��)���΂���(to�``)"
503,contrary,(�``��)���΂�(to�``)
504,contrast,�Ώ�
505,contradict,"�``��ے肷��, �ɔ��_����, �Ɩ�������"
506,approve,"�``�Ɏ^������, ��F�߂�G (�``��)�^������, �F�߂�(of�``)"
507,consent,(�``��)���ӂ���(to�``)�G ����
508,correspond,"(�``��)��v����, ���v����(with�``)�G (�``��)�Ή�����(to�``)"
509,accord,"(�``��)��v����, ���a����(with�``)"
510,conform,"(�``��)�]��, ��������, ��v����(to�``)"
511,compatible,"(�``��)�����\��, �������Ȃ�(with�``)"
512,compare,"�``��(�c��)��r����(with, to�c)"
513,confuse,�``��(�c��)��������(with�c)�G �����������
514,equal,"(�``��)������, �C�G����, ���邾���̔\�͂�����(to�``)�G �``�ɓ�����"
515,equivalent,(�``��)������(to�``)�G �����̂��
516,counterpart,���������́E�l
517,resemble,�``�Ɏ��Ă���
518,diverse,���l��
519,differ,(�``��)(�c�̓_��)�قȂ�(from�``)(in�c)
520,vary,"�قȂ�, �ς��"
521,linguistic,�����
522,literary,���w��
523,literal,"�����ʂ��, ���``�ʂ��"
524,literate,"�ǂݏ������ł���, ���{�̂���"
525,letter,"�莆, ����"
526,dialogue,�Θb
527,monologue,�Ɣ�
528,logic,"�_��, �_���w"
529,apology,�Ӎ�
530,eloquent,�Y�ق�
531,biology,�����w
532,psychology,�S���w
533,analogy,�ސ�
534,verb,����
535,adjective,�``�e��
536,proverb,���Ƃ킴
537,oral,"������, ����"
538,utter,"�``(���t)�𔭂���G �``���S��, �S����"
539,refer,(�``��)���y����G (��)�Q�Ƃ���G (��)�w��(to�``)
540,consult,�``�ɑ��k����G (�����Ȃ�)��Q�Ƃ���
541,look up,�``(�P��Ȃ�)�𒲂ׂ�
542,mention,"�``�Ɍ��y����, ����ɂ���G ���y"
543,imply,"�``��ÂɈӖ�����, �܈ӂ���"
544,infer,�``�𐄎@����
545,interpret,�``���߂���G �ʖ󂷂�
546,describe,"�``��``�ʂ���, �������"
547,subscribe,(�``��)����w�ǂ���(to�``)
548,prescribe,�``(��)���������G �w������
549,manuscript,���e
550,criticize,�``��ᔻ����
551,critical,"����I��, ��]��"
552,crisis,��@
553,opinion,�ӌ�
554,remark,"�ӌ�, �_�]�G (�ӌ���)�q�ׂ�"
555,comment,"�ӌ�, �_�]�G (�ӌ���)�q�ׂ�"
556,prose,�U��
557,verse,"�C��, ��"
558,poetry,��
559,document,"����, ����"
560,narrative,"���, ����G �����"
561,plot,�؏����G ����A�A�d
562,quote,�``����p����
563,rhetoric,"�C���w, �������"
564,metaphor,"��g, �B�g"
565,irony,���
566,paradox,"�t��, ����"
567,dialect,����
568,accent,"�a��, ����"
569,pronounce,�``�𔭉�����
570,tongue,"��, ����, ���t"
571,text,���́G ���[���G ���[���𑗂�G �``�Ƀ��[���𑗂�
572,context,"����, �O��֌W, ��"
573,grammar,���@
574,vocabulary,"��b, �{�L���u�����["
575,research,"����, ����"
576,investigate,"�``�𒲍�����, ��������"
577,survey,"�``����n���G ��������G ����, �T��, ����"
578,inquire,(�``�ɂ���)�q�˂�(about�``)�G (�``��)��������(into�``)
579,theory,"���_, �w��"
580,method,(�̌n�I��)���@
581,hypothesis,����A�O��
582,experiment,����
583,detect,"�``����o����, ������"
584,thesis,�w�ʘ_��
585,statistics,���v
586,analyze,�``�𕪐͂���
587,laboratory,������
588,conclude,(�c��)���_�����(that�c)
589,prove,"�``��ؖ�����G (�``�ł����)������, ��������(to be�``)"
590,demonstrate,"�``����؂���, ��������"
591,illustrate,"�``���؂���, �}�Ő������"
592,estimate,�``����ς��G ���ς��
593,expert,"���ƁG (�``��)�n�B����(at, in�``)"
594,scholar,"�w��, ���w��"
595,academic,"�w���, ��w��"
596,specialize,"(�``��)��U����, ���ɂ���(in�``)"
597,geography,�n���w
598,geology,�n���w
599,geometry,�􉽊w
600,arithmetic,�Z��
601,astronomy,�V���w
602,astrology,�萯�p
603,botany,�A���w
604,anthropology,�l�ފw
605,discuss,"�``��b������, �c�_����"
606,agree,"(�``��)(with)�^������, (to)���ӂ���, ��v����"
607,argue,"�``��咣����, �_����G ��������"
608,maintain,"�``��ێ�����, �咣����"
609,assert,"�``��咣����, ��������"
610,claim,�v������A�咣����G �v���A�咣
611,insist,�v������A�咣����
612,exclaim,�``�Ƌ���
613,proclaim,�``��錾����
614,declare,�錾����
615,announce,�``����m����
616,exaggerate,"�``��֒�����, �傰���Ɍ���"
617,boast,"(of)��������, �@�ɂ�����"
618,controversy,"�_��, �c�_"
619,dispute,"�c�_�A�c�_����G �``��c�_����, ���_����"
620,debate,���_
621,conference,��c
622,negotiate,�����
623,complain,(�``�ɂ���)�s����q�ׂ�
624,grumble,�s�������
625,quarrel,"���_, �����܁G ���_����"
626,reconcile,"�``��a�������, �����肳����G �a�����"
627,convince,�``�Ɋm�M������A�[��������
628,persuade,�``�ɐ������
629,talk�``into doing,�``�ɐ������
630,advantage,"�L���ȓ_, �D�s��"
631,right,����
632,privilege,����
633,entitle,�``�Ɏ��i/������^����
634,qualify,�``�Ɏ��i��^����
635,require,"�``��v������, �K�v�Ƃ���"
636,call for,"�``��v������, �K�v�Ƃ���"
637,desire,"�~�], ��]"
638,demand,�v���G �``��v������
639,perspective,"�W�], ��̂̌���"
640,inspect,"�``��ڂ������ׂ�, ��������"
641,prospect,���ʂ��A�W�]
642,retrospect,�Ǒz�A��z
643,suspect,"�``��^��, �ɋC�t��, �e�^��"
644,speculate,�``�𐄑�����A�n�l����
645,spectacle,"������, ���i, �ዾ"
646,conspicuous,�ڗ���
647,proceed,�i�ށA����ɑ����ā``����
648,exceed,�``��z����A�D��
649,concede,�``��F�߂�A�������
650,succeed,��������A�``�̌��p���A�``�Ɏ����ŋN����
651,predict,�``��\������A�\������
652,indicate,�����A�w������
653,dictate,������点��A���߂���
654,dedicate,������
655,admit,�``��i���Ԃ��ԁj�F�߂�ithat�c�j�G �i�l[�̓���E���w]�j��󂯓����
656,commit,�``�i�߁j��Ƃ��A�``�Ɏ��g�ށA�``��񑩂���A�``�𖾌�����
657,omit,�Ȃ�
658,dismiss,�``���U����A��ق���G �``��ނ���A�p������
659,transmit,����A�``����
660,mission,�g���A�C��
661,transfer,�``��ړ�����G ��芷����A�]�΁i�Z�j����G �ړ��A��芷���A�]�΁i�Z�j
662,transport,�``��A������G �A���A��ʎ�i
663,transform,�``��ό``����A�ω�������
664,translate,�``��i�c�Ɂj�|�󂷂�iinto�j
665,transplant,�``��ڐA����G �ڐA
666,transparent,������
667,transition,�ڂ�ς��A�ߓn��
668,distribute,���z����
669,contribute,�v������
670,attribute,������A���A�����A����
671,assure,�ۏ؂���A�m�M������
672,reassure,���S������
673,ensure,�ۏ؂���A�m�ۂ���
674,insurance,�ی�
675,influence,�i�``�ɑ΂���j�e���ion�``�j�G �``�ɉe����y�ڂ�
676,impact,�i�``�ɑ΂���j�e���A�Ռ��ion�``�j
677,affect,�``�Ɂi���ځj�e���E���ʂ�y�ڂ�
678,effect,���ʁA�e��
679,affection,����
680,dominant,�x�z�I�ȁA���D�ʂɂ���
681,rule,�``��x�z����G �K��
682,regulate,�K������
683,control,�``��}������A�x�z����A���䂷��G �}���A�x�z�A����
684,bind,�S������
685,authority,���ЁA���́A�����G ����
686,author,����
687,exert,�``�i�͂Ȃǁj��s�g����A��������
688,exercise,���K�G �^���G �``�i�͂Ȃǁj��s�g����
689,obey,�]��
690,resist,�``�ɒ�R����
691,protest,�R�c�i����j
692,rebel,���t�ҁA���t����
693,conquer,��������
694,win,���G �``�i�����Ȃǁj�ɏ��G ��l������
695,defeat,�``������������G �s�k
696,beat,�``��i�J��Ԃ��j�@���A����������
697,lose,������G �``������G �i�����Ȃǁj�ɕ�����
698,surrender,�~������
699,yield,������A�Y�o����
700,depend,�i�``�Ɂj�ˑ�����G ���A���E�����ion�``�j
701,independent,�i�``����j�Ɨ����Ă���iof�``�j
702,rely,�i�``�Ɂj����A�i��j���Ăɂ���ion[upon]�``�j
703,count on,�``����Ăɂ���A����ɂ���
704,trust,�``��M�p����G �M�p
705,compete,��������
706,press,�����G �������߂�G �V���E�G���A��
707,impress,��ۂÂ���A����������
708,express,�\�ɏo���A�\������
709,oppress,��������A�s����
710,suppress,�}����A�}������
711,threat,�����A����
712,menace,����
713,tame,�����Ȃ炷�G �����Ȃ炳�ꂽ
714,superior,�``���D��Ă���(to)
715,inferior,�``������Ă���(to)
716,surpass,�``���D���A�``��z����
717,excel,�D���
718,perceive,�m�o����A�������G �F������
719,conceive,�l�������A�l�Ă���G �S�ɕ���
720,deceive,���܂�
721,sense,���o�G ���f�́A�v���G �Ӗ��G �``�Ɋ��Â�
722,sensitive,�q����(to�``)
723,sensible,���ʂ̂���A������
724,sensation,���o�G ���c�A����
725,visual,���o��
726,visible,�ڂɌ�����
727,revise,��������A�C������
728,devise,�l�Ă���
729,sight,���o�F���́G ���i�G ����
730,stare,�i���낶��j���߂�(at�``�j
731,gaze,�i�����Ƃ肵�āE�ځ[���Ɓj���߂�(at�``)
732,glance,�i�ӎ��I�Ɂj�����ƌ���(at�``)
733,glimpse,�i��R�j�����ƌ���A�_�Ԍ���
734,audible,��������
735,audience,���O�A�ϋq
736,scent,����
737,odor,�ɂ���
738,flavor,��
739,arouse,�``�i����Ȃǁj��ĂыN�����A�h������
740,evoke,�``�i����Ȃǁj��ĂыN�����A�Ăъo�܂�
741,provoke,�``�i�����Ȃǁj������N����
742,stimulate,�``��h������G ���i����
743,instinct,�{�\
744,impulse,�Փ�(to do)
745,embarrass,�p���������v���������A���f������
746,shame,�p�G �c�O�Ȃ���
747,nerve,�_�o
748,emotion,����
749,passion,��M
750,compassion,����A������
751,passive,�󂯐g�́A�󓮓I��
752,temper,�@���G ����S
753,delight,��сA�y����
754,rejoice,���
755,gratify,��΂���
756,anger,�{��
757,rage,�{��A�M��
758,fury,�{��
759,resent,���S����A���𗧂Ă�
760,annoy,�{�点��A�ނ��Ƃ�����
761,irritate,�՗�������
762,frustrate,�C���C��������A���]������
763,sorrow,�߂���
764,grief,�߂���
765,lament,�߂��ݒQ��
766,mourn,�߂��ݒQ��
767,despair,��]
768,devastate,�ł��̂߂�
769,entertain,�y���܂���G �S�ɕ����A�l������
770,amuse,�ʔ����点��
771,virtue,�����A����
772,virtual,���z�́G �������
773,vice,���A�����G ���``�A�㗝��
774,evil,�׈���
775,sin,��
776,crime,�ƍ�
777,ethics,�ϗ�
778,moral,������́A���_�I��
779,confess,��������A�F�߂�
780,punish,������(for�c)
781,penalty,�Y��
782,murder,�E�l�i����j
783,victim,�]���ҁA��Q��
784,offend,�{�点��
785,defend,�h�䂷��A�ٌ삷��
786,motive,���@
787,witness,�ؐl�A�ڌ��ҁG �ڌ�����
788,arrest,�ߕ߂���F�ߕ�
789,detain,�S������
790,accuse,����A���i����
791,blame,�ӔC������Ƃ���G �����ɂ���
792,fault,�ߎ��A�ӔC�G ����
793,condemn,�ӂ߂�A�Y��鍐����
794,court,�@��A�ٔ����G �{��
795,courtesy,��V�A��@
796,trial,�ٔ��A����
797,justice,�\���A���``�G �ٔ�
798,judge,���f����G �ٔ���
799,jury,���R���c
800,testify,�،�����
801,guilty,�L�߂�
802,innocent,���߂́A���׋C��
803,sentence,�����i������j
804,prison,�Y����
805,deter,�}�~����
806,violence,�\��
807,aggressive,�U���I��
808,legal,���@�́A�@����
809,violate,�ᔽ����A�Ƃ��A�N�Q����
810,unite,���т���
811,unity,�����A����
812,uniform,��l�ȁA�ψ��
813,universal,���ՓI��
814,union,�g��
815,reunion,�ĊJ�A������
816,sole,�B���
817,solitude,�Ǔ�
818,console,�Ԃ߂�
819,monotonous,�P����
820,monopoly,�Ɛ�A�ꔄ
821,combine,����������
822,dual,�Q�́A��d��
823,duplicate,��������
824,numerous,������
825,innumerable,������
826,infinite,������
827,quantity,��
828,quality,���A�i���A����
829,volume,�e�ρA�ʁA�����G (��^��)�{�A(�{��)�P���G ���ʂ́A�����΂���
830,amount,�ʁA���v�A���z�G �``�ɒB����A���ǁ``�ɂȂ�(to)
831,sum,���v�A�v�񂷂�
832,total,���S�ȁG ���v�́F���v
833,vast,����ȁA�L���
834,huge,����ȁA�ł�����
835,enormous,���ɑ傫���A�����
836,immense,����ȁA�c���
837,abundant,�L�x��
838,ample,�\���ȁA�����Ղ��
839,affluent,�x�T��
840,sufficient,�\����
841,adequate,�\����
842,major,��v�ȁA��U����
843,minor,�d�v�łȂ��A�������G �N����
844,maximum,�ő�
845,minimum,�ŏ�
846,magnificent,�s���
847,diminish,���炷�A����������
848,utmost,�ő��
849,increase,������G �``�𑝂₷�G ����
850,decrease,����G ���炷�G ����
851,reduce,�``����炷�A�팸����
852,accumulate,�~�ς���
853,add,������
854,subtract,����
855,multiply,�|����
856,multitude,����
857,calculate,�v�Z����
858,average,���ς́A���ʂ́G ����
859,altogether,�S���ŁG �S���A���S��
860,overall,�S�̂́A�S�ʂ́G �T����
861,approximately,�����悻
862,rational,�����I��
863,reason,���R�A�����G �����G �_���I�ɍl����
864,beast,�b�A����
865,brute,�b�A����
866,notion,�T�O�A�ϔO
867,abstract,���ۓI��
868,concrete,��̓I��
869,stereotype,�Œ�ϔO�A�X�e���I�^�C�v
870,prejudice,����ρA�Ό�
871,bias,�Ό�
872,view,���߁A�i�F�G �ӌ��G �݂Ȃ��A�l����
873,review,�������A��]
874,viewpoint,�ϓ_�A���n
875,standpoint,����A�ϓ_
876,outlook,����A�����A���ʂ�
877,optimistic,�y�ϓI��
878,pessimistic,�ߊϓI��
879,aware,�ӎ����Ă���
880,alert,�x�����Ă���G �x��
881,conscious,�ӎ����Ă���
882,conscience,�ǐS�A�P���̔��f��
883,recognize,���ʂ���A����ƕ�����G �F�߂�
884,cognition,�F��
885,knowledge,�m��
886,acknowledge,�F�߂�
887,identify,�g������肷��A���ꎋ����
888,intellect,�m��
889,intelligence,�m���G ����
890,intelligible,����\�ȁA���ǉ\��
891,wisdom,�������A�m�b
892,bright,���邢�A���̂���
893,brilliant,���̂����A�P������
894,smart,������
895,wit,�@�]�A�m��
896,insight,���@��
897,philosophy,�N�w�A�l����
898,comprehend,�������A�܂�
899,consider,�l������G �݂Ȃ�
900,contemplation,�n�l�A���v
901,meditate,�ґz����A�[���l����
902,recollect,�v���o��
903,recall,�v���o��
904,inform,�m�点��
905,remind,"�v���o������(of, that)"
906,infant,�c��
907,toddler,�c��
908,adolescent,�v�t���́A�\��́G �\��̎��
909,juvenile,���N������
910,adult,��l�G ��l��
911,elderly,�N�z�́A���N����
912,mature,���n�����G ���n����
913,pregnant,�D�P���Ă���
914,maternity,�ꐫ
915,birthrate,�o����
916,abortion,�D�P����
917,divorce,����
918,celebrate,�j��
919,career,�E��A�L�����A
920,background,�w�i�G �o��A��������
921,status,�Љ�I�n��
922,resign,(�r����)���E����G �f�O����
923,retire,��N�őސE����
924,quit,��߂�A���~����
925,farewell,���ʂ�
926,pension,�N��
927,funeral,����
928,tomb,��΁A��
929,bury,���߂�A��������
930,coffin,����
931,corpse,����
932,mortal,���ʉ^���ɂ���
933,inherit,��������
934,heir,�����l�A�Վ��
935,heritage,��Y
936,legacy,��Y�A�╨
937,offspring,�q�A�q��
938,inevitable,������Ȃ��A�K�R�I��
939,fate,�^���A�h��
940,individual,�l�G �l�́A�X��
941,personal,�l�I��
942,private,�l�I��
943,self,����
944,fellow,�l�A�z�G ���ԁA�����Ɠ�����ɂ���
945,male,�j���́G �j��
946,female,�����́G ����
947,masculine,�j�́A�j�炵��
948,feminine,���́A���炵��
949,gender,�W�F���_�[
950,sibling,�Z��
951,spouse,�z���
952,society,�Љ�G �Ќ�
953,community,�n��Љ�A������
954,communicate,(�``��)�ӎu�̑a�ʂ����(with)
955,acquainted,�m�荇���ł���
956,intimate,�e�����A�e����
957,hostile,�G�ӂ̂���
958,hospitality,���ҁA��ĂȂ�
959,sympathy,����
960,empathy,�����A����ړ�
961,pity,�����ށA�c�O�Ȃ���
962,mercy,���߁A������
963,envy,�����ށA�˂��݁G ������
964,jealous,���i����
965,contempt,�y��
966,scorn,�y��
967,despise,�y�̂���
968,look down on,�y�̂���
969,disgust,�����A�ނ�����
970,hatred,����
971,insult,���J�i����j
972,humiliate,���J��^����
973,curse,�􂤁A�̂̂���
974,endure,�ς���A�䖝����
975,durable,�ϋv���̂���
976,put up with,�ς���A�䖝����
977,compromise,�Ë��i����j
978,praise,�܎^�G �ق߂�
979,award,�܁G �܂�^����
980,reward,��V
981,compliment,�������i������j
982,flatter,�����Ă�
983,spoil,�Â₩���A�䖳���ɂ���
984,congratulate,�j���A���j����q�ׂ�
985,grateful,���ӂ��Ă���A���肪�����v��
986,appreciate,�������]������G ���ӂ���G �ӏ܂���
987,gratitude,����
988,admire,���S����A�܎^����
989,esteem,���h����A���d����
990,adore,���q����A�h������
991,dignity,�Ќ�
992,cooperate,���͂���
993,loyal,������
994,betray,���؂�G �\�I����
995,make fun of,���炩��
996,tease,�����߂�A���炩��
997,bully,�����߂�
998,bother,�Y�܂��A���f�������
999,nuisance,���f�s�ׁA���f�Ȑl
1000,value,���l�G ���l�ρG �``��d�񂶂�
1001,worth,�``�̉��l�̂���G ���l
1002,deserve,�``�ɒl����
1003,cherish,�``��厖�ɂ���
1004,treasure,�``��厖�ɂ���A��
1005,evaluate,�``��]������
1006,measure,�``�𑪒肷��G (�����)��A��i�A���x
1007,assess,�``����肷��
1008,standard,��A�W���A����
1009,norm,��A�K��
1010,criterion,��A�w�W
1011,test,�e�X�g�A���f�
1012,class,�N���X�A���ƁG �K���G ����
1013,sort,��ށG �``�𕪗ނ���
1014,alter,�``��ς���
1015,alternative,(��肤��)�I����A(�``��)���(to�``)�G �����
1016,option,�I���
1017,adopt,�``(����Ȃ�)��̗p����A�``��{�q�ɂ���
1018,decide,�``����肷��
1019,determine,�``����肷��
1020,resolve,�``����ӂ���A�``��������
1021,event,(�d�v��)�o�����A����
1022,incident,(�t������)�o�����A����
1023,accident,(��R��)���́A�����G ��R
1024,affair,�o�����A�����G �֐S���G �
1025,occur,�N����G (�``��)�v��������(to�``)
1026,take place,(�\�肳��Ă������Ƃ�)�N����A�s����
1027,situation,(���E�l���u����Ă���)��
1028,condition,�󋵁A�̒� �G ����G �``�����Â���A���񂷂�
1029,circumstance,�󋵁A��
1030,participate,�Q������(in�``)
1031,take part,�Q������(in�``)
1032,involve,�``��(�K�R�I��)�܂ށA�֗^������A�������ށA�����A�K�v�Ƃ���A����炷
1033,entail,�``�𔺂��A�K�v�Ƃ���G ��܈ӂ���
1034,engage,�``��]��������G (�``��)�]������(in�``)
1035,indulge,�``��v��������A�Â₩�� (�``��)�v������A�^��(in�``)
1036,devote,�``(��E���ԁE�J��)��(�c��)������A����
1037,act,�s������G �s���G �@��
1038,enact,�``(�@��)�𐧒肷��
1039,behave,�s������A�ӂ�܂�
1040,conduct,�``(�����E�����E�Ɩ��Ȃ�)��s���G �s��
1041,attitude,�ԓx�A�l����
1042,politics,�����A�����w
1043,principle,��``�A�����A�M��
1044,conserve,�``��ۑ�����A���
1045,progress,�i�� �i�����
1046,radical,�O��I�ȁA���{�I�ȁG �}�i�I�ȁA�ߌ���
1047,reform,���v
1048,regime,�����̐�
1049,democracy,�����``
1050,republic,���a��
1051,monarchy,�N�吭��
1052,aristocracy,�M���K���A�M���Љ�
1053,bureaucracy,�����A������``
1054,ideology,�C�f�I���M�[�A�v�l�X��
1055,communism,���Y��``
1056,socialism,�Љ��``
1057,nationalism,���Ǝ�``
1058,patriotism,������``
1059,govern,��������G ���肷��A���E����
1060,reign,�����A�����G �N�Ղ���
1061,tyranny,�ꐧ�����A�\��
1062,administer,�``��Ǘ�����A�^�c����
1063,policy,����A���j
1064,welfare,�����G �K��
1065,ministry,�Ȓ�
1066,minister,��b�G �q�t
1067,diplomat,�O���
1068,embassy,��g��
1069,ambassador,��g
1070,treaty,���
1071,legislate,�@���𐧒肷��
1072,congress,����A�c��G ��c
1073,Senate,��@
1074,parliament,����
1075,Diet,����A�c��
1076,council,�c��G �]�c��A�R�c��
1077,federal,(�č�)�A�M��
1078,bill,�������G �����G �@��
1079,abolish,�``��p�~����
1080,elect,�``��I�o����
1081,vote,(�``��)���[����(for�``)�G ���[
1082,poll,���[�G ���_����
1083,run for,�``�ɏo�n����
1084,mayor,�s��
1085,governor,�m��
1086,industry,�Y�ƁA�H�ƁG �Ε�
1087,sector,����
1088,agriculture,�_��
1089,cultivate,�``��k���G �``(�˔\�Ȃ�)�𖁂��E�{��
1090,culture,�����G ���{�G �͔|
1091,crop,�앨�A���n
1092,harvest,���n�A���n���G �``����n����
1093,soil,�y�A�y��
1094,fertile,�엀��
1095,barren,�s�т�
1096,irrigation,���
1097,grain,����
1098,wheat,����
1099,weed,�G��
1100,seed,��
1101,sow,�``(��)��܂�
1102,plow,�L�G �``��k��
1103,peasant,����_�A�_�v
1104,feed,�``�ɉa�E�H����^����
1105,breed,�``��ɐB������G�i��A����
1106,cattle,(�W���I��)��
1107,herd,(���Ȃǂ�)�Q��
1108,flock,(������)�Q��A�Q���
1109,ranch,�q��
1110,media,���f�B�A�A�}��
1111,mass,�W�c�A��O�A����
1112,broadcast,�``���������G ����
1113,journalism,�W���[�i���Y���A��
1114,article,�L���A�_���G (���)�i���G ����
1115,headline,���o��
1116,Internet,�C���^�[�l�b�g
1117,advertisement,�L��
1118,publish,�``��o�ł���A���\����
1119,edit,�``��ҏW����
1120,compile,�``��ҏW����A�P�ɏW�߂�
1121,cartoon,����A�A�j��
1122,manufacture,�����A���Y�G �``�𐻑�����
1123,produce,�``�𐶎Y����A���ݏo��
1124,create,�``��n������A���ݏo��
1125,consume,�``������
1126,trade,�f�ՁA����G �����G �E��
1127,deal,����G ��
1128,commerce,�ʏ��A�f��
1129,merchant,���l
1130,commodity,���i�G ���p�i
1131,retail,�������
1132,import,�``��A������G �A��(�i)
1133,export,�``��A�o����G �A�o(�i)
1134,employ,�``��ق��G �``��p����
1135,labor,�J��
1136,manage,�``��o�c����G �Ȃ�Ƃ����Ă�萋����
1137,contract,�_��G �``��_�񂷂�G �``(�a�C)�ɂ�����A���k����
1138,agent,�㗝�X�A�㗝�l�A�s�׎�
1139,medicine,��G ��w
1140,pharmacy,���
1141,surgery,�O�Ȏ�p
1142,vein,���ǁA�Ö�
1143,artery,����
1144,physical,�g�̂́G �����I��
1145,disease,�a�C
1146,symptom,����A�Ǐ�
1147,ache,(��������)�ɂ�
1148,acute,�s���A������
1149,sore,(�A�A�ؓ��Ȃǂ��q���q��)�ɂ�
1150,dizzy,�߂܂�������
1151,cough,�P�����G �P
1152,fever,�M
1153,paralyze,�``��Ⴢ�����
1154,patient,���ҁG �䖝����
1155,ambulance,�~�}��
1156,diagnose,�``��f�f����
1157,cure,�``(�a�C)�𒼂��A���Â���G ���Ö@
1158,heal,�``(����)������G (����)����
1159,treat,�``������A�ɐڂ���G �``����Â���G �``��(�c��)������(to �c)
1160,recover,(�``����)�񕜂���(from�``)�G �``����߂�
1161,operate,�쓮�E��p����G (�``��)��p����(on�``)�G �``�𑀍삷��
1162,go through,�``��o������
1163,cancer,��
1164,tumor,���
1165,diabetes,���A�a
1166,stroke,�]����
1167,virus,�E�C���X
1168,germ,�΂��ہA�׋�
1169,infect,�``�Ɋ���������
1170,epidemic,�``���a
1171,plague,�u�a�G �Г�
1172,vaccine,���N�``��
1173,defect,���ׁA���_�A��Q
1174,immune,(�``�ɑ΂���)�Ɖu�̂���(to�``)
1175,allergy,�A�����M�[
1176,gene,��``�q
1177,cell,�זE
1178,organism,����
1179,clone,�N���[���G �``�̃N���[������
1180,anatomy,��U�w
1181,chemistry,�Ȋw
1182,toxic,�L�ł�
1183,solid,�ő̂́A�ł��A���łȁG ���̂́G ���g�̋l�܂���
1184,liquid,�t�̂�
1185,vapor,���C�A�C��
1186,hydrogen,���f
1187,oxygen,�_�f
1188,atom,���q
1189,nuclear,�j�́A���q�͂�
1190,molecule,���q
1191,radiation,���˔\�A����
1192,religion,�@�� �M��
1193,faith,�M���A�M�A�M�O
1194,worship,���q�G �``�𐒔q����
1195,doctrine,���{�A�w��
1196,confidence,�M���A���M
1197,credit,�M�p�A�̎^�A�]���A����
1198,incredible,�M�����Ȃ�
1199,Buddhism,����
1200,Muslim,�C�X�������k�A�C�X��������
1201,Christianity,�L���X�g��
1202,Catholic,�J�g���b�N�́A�J�g���b�N���k
1203,Protestant,�v���e�X�^���g�́G �V���k
1204,priest,�q�t�A�i��
1205,clergy,���E��
1206,preach,����A�������
1207,pilgrim,�����
1208,divine,�_�́A�_�X����
1209,sacred,�_����
1210,sacrifice,�]���ɂ���G �]���G ������
1211,saint,���l�G ���l�̂悤�Ȑl
1212,holy,�_����
1213,shrine,�_��
1214,temple,���@�A�_�a
1215,ritual,�V��
1216,ceremony,�V���A���T
1217,swear,�����G �̂̂���
1218,bless,�j������
1219,enchant,���@�������G ��������
1220,witch,����
1221,spell,���
1222,haunt,�o�v����
1223,race,�l��G ����
1224,discriminate,���ʂ���A��ʂ���
1225,tribe,����
1226,ethnic,�����I��
1227,nationality,����
1228,native,�o���n�́A���Z����
1229,tradition,�``��
1230,custom,���K
1231,accustomed,����Ă���
1232,convention,���K�A���K�A��������G ���
1233,hierarchy,�K�����A�㉺�֌W
1234,folk,���O�A����
1235,myth,�_�b�G ����
1236,legend,�``��
1237,tragedy,�ߌ��A�S��
1238,environment,��
1239,species,(������)��G �l��
1240,evolve,�i������A���W����
1241,ecology,����(�n)�A���R���A���ی�
1242,nature,���R�G �{���G ����
1243,inherent,(�``��)�{��������Ă���(in�``)
1244,artificial,�l�H��
1245,preserve,�``��ی삷��A�ۑ�����
1246,develop,�``�𔭒B����A�J������G ���ǂ���G ���B����A���炷��
1247,sustain,�``��x����A�ێ�����
1248,atmosphere,��C�G ���͋C
1249,pollute,�``���������
1250,waste,���ʁA�Q��G �p�� �``��Q���
1251,garbage,�S�~
1252,trash,�S�~�G �``��̂Ă�
1253,rubbish,�S�~�A������Ȃ�����
1254,litter,�U�炩���A�S�~
1255,landscape,���i
1256,resource,�����A���
1257,fossil,����
1258,fuel,�R��
1259,petroleum,�Ζ�
1260,exhaust,�``��g���ʂ����A��ꂳ����
1261,global warming,�n�����g��
1262,greenhouse effect,��������
1263,carbon dioxide,��_���Y�f
1264,tropical rain forest,�M�щJ��
1265,acid rain,�_���J
1266,ozone layer,�I�]���w
1267,climate,�C��
1268,temperature,���x�A�C��
1269,humid,������
1270,moist,������
1271,phenomenon,����
1272,drought,���΂�
1273,disaster,�ЊQ�A�S��
1274,hemisphere,����
1275,continent,�嗤
1276,Arctic,�k�ɒn��
1277,pole,��
1278,latitude,�ܓx
1279,longitude,�o�x
1280,altitude,���x
1281,equator,�ԓ�
1282,nod,���Ȃ���
1283,bow,����������G ������
1284,sigh,���ߑ�����G ���ߑ�
1285,rub,�``�������
1286,yell,(�``�Ɍ�������)����(at�``)
1287,leap,���� ����A���
1288,fix,�``��Œ肷��G �``��C������
1289,pour,�``�𒍂��G ���ꍞ��
1290,dip,�``��(�y��)�Z��
1291,soak,�``��Z���A�т���G��ɂȂ�
1292,sip,�``��������
1293,cast,�``�𓊂���A����������
1294,shed,�``�𗬂��A���ڂ�
1295,spur,�``�ɔ��Ԃ������A��藧�Ă�
1296,blur,�``��ڂ₯������G �ڂ₯��
1297,cite,�``����p����
1298,rear,�``���Ă�
1299,beg,�``����肷��A����
1300,bet,�``��q����G �����Ɓc���Ǝv��
1301,sue,�``����i����
1302,dread,�``������G ���|
1303,vow,�``�𐾂��G ����
1304,chill,�``���₷�A�Ɋ��C�����������G ���C�A�₽��
1305,staff,�Ј��A�E��
1306,stuff,��́G �``��l�ߍ���
1307,crash,�Փ˂��� ���Ԃ����ĉ���
1308,clash,�Փ˂���A�Փ� ���u�J�``���v�ƂԂ���
1309,crush,�``��ׂ� ���u��������v�ƒׂ�
1310,flesh,��
1311,glow,�P���G �P��
1312,load,�ו��A���S�G �``��(�ו���)�ς�
1313,pray,�F��
1314,prey,�l���A�a�H�G �ߐH����
1315,flee,������G �``���瓦����
1316,dose,(��̂P���)���p��
1317,role,���
1318,roll,�]����G �``��]�����A����
1319,tale,�b�A����
1320,awe,�،h�A�ؕ|�G �ؕ|������
1321,feat,�̋ƁA�����
1322,deed,�s���A�s��
1323,clue,��|����A��
1324,path,�����A����
1325,aisle,�ʘH
1326,ray,�����A���ː�
1327,lump,(������)�����܂�
1328,bulk,�e�ρA�����G ����Ȃ��
1329,pile,(�Y��ɐςݏd�Ȃ���)�R
1330,heap,(�G�R�Ɛςݏd�Ȃ���)�R
1331,mess,���G�A���G
1332,fuss,�呛��
1333,mere,�P�Ȃ�A�ق��
1334,dull,�ދ��ȁG ���݂̓�
1335,ripe,�n�����A���n����
1336,bare,���́A�ނ��o���́G �Œ���́A�M���M����
1337,raw,���́A���H���Ă��Ȃ�
1338,net,�����́A�|���l�Ȃ���
1339,gross,���v��
1340,dim,���Â��A�ڂ���Ƃ���
1341,deaf,�����������Ȃ�
1342,dumb,���������Ȃ��G �n����
1343,weird,�ςȁA���
1344,sake,���߁A�ړI
1345,vain,���ʂȁA������
1346,dawn,�閾���G �n�܂� �邪������
1347,tend,(�``����)�X��������(to do)
1348,trend,�X���A����
1349,apt,�``�������ł���(to do)
1350,liable,(�``)�������ł���(to do)�G (�``�ɑ΂���)�@�I�ӔC������(for�``)
1351,prone,(�``)�������ł���(to do)�A(��)�����ނ肪���ł���(to�``)
1351,susceptible,(�``��)�e����󂯂₷���A(��)�����ނ肪���ł���(to�``)
1353,likely,(�``)�������ł���(to do)
1354,probable,���イ�Ԃ񂠂肦��
1355,possibly,���Ƃɂ��ƁG ���������G ��΂�(�c�Ȃ�)
1356,be about to do,���ɂ�``�������ł���
1357,on the verge of,���ɂ�``�������ł���
1358,on the brink of,���ɂ�``�������ł���
1359,eager,"(�``���邱�Ƃ�)�M�]���Ă���A������Ɂ``���������Ă���(to do, for �``)"
1360,willing,�i�``���邱�Ƃ�j���Ƃ�Ȃ��A�����``����(to do)
1361,reluctant,(�``����)�C���i�܂Ȃ�
1362,enthusiastic,(�``�ɑ΂�)�M�ӂ�����A�M�S��(about)
1363,keen,(�``��)�M�S��(on[upon]�``)�G �s��
1364,intent,(�``��)�M�S�ȁA�ꐶ������(on[upon])
1365,earnest,�܂��߂ȁA�^����
1366,aspire,"(�``���邱�Ƃ�)�M�]����(to do, for)"
1367,yearn,"(�``���邱�Ƃ�)�M�]����(to do, for)"
1368,long for,�``��҂��]�ށG ���������v��
1369,tempt,"�``��(�c����悤)�U�f����(to do, into doing)"
1370,fascinate,�``�𖣗�����
1371,appeal,���́A�l�C�G �i���A�v���G (�``��)�i����A�v������(to�``)
1372,charm,���́G ���
1373,respond,(�``��)��������A�Ԏ������(to)
1374,react,(�``��)��������(to)
1375,interact,(�``��)���ݍ�p����A�𗬂�����(with)
1376,adjust,(�``��)��������A�K������(to�``)�G �``��(�c��)�K��������(to�c)
1377,adapt,(�``��)��������A�K������(to�``)�G �``��(�c��)�K��������(to�c)
1378,shift,�ω��A�ڍs�G �V�t�g�A���Ζ����ԁG �ڂ�A�ς��
1379,fit,�����A�͂܂�G �``��(�T�C�Y��)�����G ���N�ȁA�̒����悢
1380,suit,�``�Ɏ������G (�s����)����
1381,match,�``��(�g�ݍ��킹��)�����G �ɕC�G����
1382,go with,�``��(�g�ݍ��킹��)�����G �``�ɓ��ӂ���A��󂯓����
1383,diet,�H���A�H�K��
1384,obese,�얞����
1385,weight,�d���A�̏d
1386,nutrition,�h�{
1387,nourish,�``�ɉh�{��^����A�{�炷��G ���
1388,nurture,�``��{�炷��A��Ă�G ��ށA���i����
1389,foster,�``��{�炷��G ��ށA���i����
1390,feast,���y��
1391,appetite,�H�~
1392,starve,�Q����A�󕠂ł���
1393,hunger,��
1394,thirst,�A�̊���
1395,greed,�×~
1396,famine,�Q�[
1397,ingredient,�H�ށA����
1398,digest,�``���������
1399,beverage,����
1400,habitat,�����n
1401,dwell,�Z�ށA�h��
1402,residence,�Z���A���Z
1403,accommodate,�``��h��������A���e����G ����������
1404,refuge,���A��
1405,shelter,���A�Z�܂��G �``��ی삷��A�Z�܂킹��
1406,clothes,�ߕ�
1407,fabric,�z�n
1408,thread,��
1409,weave,�``��D��
1410,wear,�``�𒅂Ă���G ����茸�炷
1411,disguise,�``��ϑ�����A�B���G �ϑ��A�B��
1412,naked,���́A�ނ��o����
1413,fashion,���s�G ���@�A����
1414,household,�ƒ�� �Ǝ�
1415,domestic,�ƒ��́G �����
1416,routine,����́A�����܂�� ����
1417,chore,�G�p
1418,commute,�ʋ΁E�ʊw����
1419,grocery,�H���G�ݕi
1420,greet,�``�Ɉ��A����A��o�}����
1421,souvenir,�i��Ɏ����̂��߂́j���y�Y�A�L�O�i
1422,degree,���x�G �w��
1423,extent,���x�A�͈�
1424,scale,�K�́A���x
1425,moderate,�K�x�́A�T���߂ȁG ���₩��
1426,temperate,�K�x�́A�ߓx�̂���G ���₩��
1427,proper,�K�x�́A�K�؂�
1428,appropriate,�K�؂�
1429,extreme,�ɒ[�� �ɒ[�A�Ɍ�
1430,tremendous,���܂����A�����
1431,excess,���߁A�ߏ��
1432,extra,�]���ȁA�Վ���
1433,gradual,���X��
1434,steady,���肵���A������
1435,sharply,�}����
1436,steep,(���z��)�}�ȁA������
1437,marked,�������A������
1438,partly,�����I�ɁA�ꕔ�ɂ�
1439,entire,�S�̂�
1440,fully,�S���A���S��
1441,thorough,���S�ȁA�O��I��
1442,ultimate,���ɂ́A�ŏI��
1443,terminal,�I�_�́A�ŏI��
1444,eventually,���ǂ́A�䂭�䂭��
1445,end up,���ǁ``�ɂȂ�idoing�j
1446,in the long run,�����ڂŌ���΁A���ǂ�
1447,for good,�i����
1448,rate,(at)�����A���x�G �``��]������
1449,proportion,�����A�䗦
1450,ratio,�䗦
1451,fraction,�ꕔ��
1452,portion,�ꕔ��
1453,fragment,�f�ЁA�j��
1454,segment,(�敪���ꂽ)����
1455,cluster,�Q��A�W�܂�
1456,partial,�����I�ȁG �΂����A�s������
1457,all in all,�S�ʓI�Ɍ��āA�T����
1458,on the whole,�T���āA�S�ʓI��
1459,by and large,�T���āA�S�ʓI��
1460,at large,�S�̂́G ��������
1461,at length,���X�ƁA�ڍׂɂ킽���āG ���ɂ�
1462,lack,�``������G ���@
1463,devoid,(�``��)�����Ă���(of)
1464,run out of,�``��؂炷�A�g���ʂ���
1465,short of,�``���s�����Ă���
1466,deficit,�s���A�Ԏ�
1467,scarce,�s�\���ȁA�R����
1468,vacant,�󂢂Ă���
1469,for want of,�``���Ȃ��̂ŁA�s������
1470,dense,���W�����A���x�̔Z��
1471,convey,�``(���E�Ӗ��Ȃ�)��``����G �^������
1472,impart,�``��(�c��)�^����A�``����(to �c)
1473,donate,�``��(�c��)��t����A���^����(to �c)
1474,endow,�``�ɗ^����A������
1475,distract,�``����炷�A�̋C����炷
1476,evade,�``������A������
1477,divert,�``����炷
1478,convert,�``��]������A���@�E�]��������
1479,expel,�``��ǂ��o��
1480,repel,�``��ǂ������A�ނ���
1481,disperse,�``��U�炷
1482,circulate,�z����G �``��z������G ���ʂ�����
1483,encounter,�``(�l�E���Ȃ�)�ɏo���킷�A��������G ����
1484,bump into,�``�ɂ΂�����Əo�
1485,come across,�``�ɋ�R�o��A���R������
1486,trace,�``����ǂ�G �k��G ���
1487,overwhelm,�``����|����A�ł��̂߂�
1488,overtake,�``�ɒǂ����A��ǂ��z���G (�Г�Ȃǂ�)��P��
1489,undergo,�``(�������ƁE�h�����ƁE�ω�)��o������
1490,descend,�����G �R������
1491,ascend,���
1492,plunge,������A��э���
1493,embrace,�``������G (�v�z�Ȃ�)��M�򂷂�A�̗p����
1494,embody,�``���̉�����
1495,render,�``��(�c)�ɂ��� ����ܕ��^(SVOC)�ŗp����
1496,modify,�``��C������A�ύX����
1497,restore,�``�𕜌�����A�񕜂���
1498,relieve,�``��������G ���S������
1499,retreat,�ދp����G �ދp
1500,retrieve,�``��������A���߂�
1501,resume,�``��ĊJ����G �ĊJ����G ������A�v��
1502,dissolve,�n�����G �``���U����
1503,erase,�``������A��������
1504,delete,�``������A��������
1505,wipe out,�``���������A��ł�����
1506,suspend,�``�𒈒݂�ɂ���G ��(��������)���~����A���f����
1507,choke,�``�𒂑�������A�l�܂点��G ����������
1508,suffocate,�``�𒂑�������
1509,squeeze,�``��i��A�i��o��
1510,spill,�``����ڂ�
1511,make up,(�``��)���ߍ�����A���߂�(for)�G (�``��)�����肷��G �``(�b)��ł����グ��G ���ς���
1512,compensate,(�``��)���ߍ��킹�����A�⏞����(for)
1513,make out,�``�𗝉����A���ǂ���
1514,make for,�``�֌������G �``(�̎���)�ɖ𗧂A�``��\�ɂ���
1515,turn out,�``�ł��邱�Ƃ�������A���ǂ���
1516,turn up,�����A�o�ꂷ��
1517,turn down,�``(�U���E�v��)��f��G �̉��ʂ������
1518,turn to,�``�ɗ���
1519,take in,�``��������G �������G ���x��
1520,take on,�``(�Ӗ��E�d�v��)��тт�G (�d��)������󂯂�
1521,take after,�``�Ɏ���
1522,take up,�``���߂�G ����グ��
1523,take over,�``(�d��)������p��
1524,take to,�``���D���ɂȂ�A�K���ɂȂ�
1525,put out,�``�����
1526,to put it �c / put �c,�c������
1527,do,�Ԃɍ����A�ǂ�
1528,make do with,�``�ŊԂɍ��킹��
1529,give away,�``��(������)����A(�閧�E�C����)�𖾂���
1530,give way,(�``)�ɋ�����A����đ�����(to)
1531,give in,(�``)�ɋ�����(to)
1532,give off,�``(���E�M�E����)�𔭂���
1533,come up with,�``��v����
1534,come about,������A�N����
1535,come into being,������
1536,come to,�ӎ���߂��G (�S����)�``�ɂȂ�
1537,come in handy,�֗��ł���A��ɗ���
1538,Come on.,���������A��k����
1539,go on to do,����ɑ����ā``����
1540,go off,��������
1541,Go ahead.,�ǂ���
1542,bring about,�``������N�����A����炷
1543,bring oneself to do,�``����C�ɂȂ�
1544,bring A home to B,A��B�ɕ����点��A����������
1545,get at,�``��������Ƃ���
1546,get by,�Ȃ�Ƃ���肭�肷��
1547,get �`` across,�``��``����A�������Ă�炤
1548,get away with,�i����󂯂��ɁE�΂ꂸ�Ɂj������������
1549,let go of,�``������
1550,let �`` in,�``�𒆂ɓ����
1551,let alone �� still less,�܂��Ă�?�Ȃ�
1552,pull up [over],�Ԃ��~�߂�
1553,make it,(�񑩁E�\��ʂ�)��萋����A�s�������A�Ԃɍ���
1554,That's it,����I��肾�G �܂��ɂ��ꂾ�A���̒ʂ肾
1555,That is that,����ł����܂����A���ꂾ���̂���
1556,make �`` of A,A��``�ƕ]������A���f����
1557,make the most of,�``��ő�����p����
1558,make the best of,�``��ł�����藘�p����
1559,make sure,�m���Ɂ``����G �``��m���߂�
1560,make ends meet,��肭�肷��A���K����킹��
1561,make believe,�``�̂ӂ�����A�^�������
1562,make a scene,�ЂƑ�������A�X�Ԃ�N��
1563,think much of,�``������]������
1564,think better of,�``��l�������A������
1565,think twice,�悭�l����
1566,on second thought,�l�������āA����ς�
1567,show off,�``������т炩����A�֎�����
1568,show up,�����A�o�ꂷ��
1569,see to,�``�ɑΏ�����A�̐��b�����A���z����
1570,see through,�``�i�R�Ȃǁj��������G �``��Ō�܂ł��ʂ��G (�l)��Ō�܂ŏ�����
1571,in the way of A / in A's way,A�̎ז��ɂȂ���
1572,make one's way,�O�i����
1573,find one's way,���ǂ蒅���A�����Ă���
1574,go out of one's way to do,�킴�킴�``����
1575,by way of,�``��o�R���āA�``�ɂ����
1576,have a way of doing,�``����Ȃ�����A�X��������
1577,under way,�i�s����
1578,true for [of],�``�ɓ��Ă͂܂�
1579,hold true [good],���Ă͂܂�A�ʗp����
1580,true to life,������������
1581,give rise to,�``�𐶂���A�����N����
1582,give birth to,�``��Y�ށG ������A�����N����
1583,put an end to,�``��I��点��
1584,take turns,��ւ���A���Ԃɂ��
1585,in turn,���ꂪ���x��
1586,in return,(�``��)���Ԃ���(for)
1587,out of the question,�_�O�ł���A�b�ɂȂ�Ȃ�
1588,in question,���ɂȂ��Ă���A����
1589,on end,������
1590,in a row,������
1591,so far,����(����)�܂ł̂Ƃ����
1592,go so far as to do,�``�܂ł���
1593,up to,(�ő��)�``�܂ŁG �``����ŁG �``(�ǂ��Ȃ�����)�ɏ]�����āA�``�����
1594,leave behind,�``��u���Y���A�c���Ă���
1595,leave out,�``��Ȃ��A���O����A�̂��҂ɂ���
1596,rule out,�``����O����
1597,back and forth,�s�����藈����
1598,upside down,�㉺�t���܂�
1599,inside out,���Ԃ���
1600,vice versa,���̋t�A�t��܂����l
1601,other way around,���ׂ��ׁA�t
1602,this and that,���ꂱ��A�l�X�Ȃ���
1603,for the good of,�``�̂��߂ɁA���v�ƂȂ�悤��
1604,as good as,�``����R
1605,get the better of,�``�ɏ���A�ł�����
1606,know better,�``����قǔn���ł͂Ȃ��A����ƕ��ʂ�����
1607,to the best of my knowledge,���̒m�����ł�
1608,to say the least,�T���߂Ɍ����Ă�
1609,take �`` for granted,���R�Ƃ݂Ȃ�
1610,take one's word for it,�``�̌������Ƃ�M����
1611,take it easy,�C�y�ɂ��
1612,keep up with,�``�ɒx�ꂸ�ɂ��Ă���
1613,catch up with,�``�ɒǂ���
1614,fall behind,�x���
1615,keep [stay] in touch with,�``�ƘA�����荇��
1616,look into,���ׂ�A��������
1617,look over,�``�ɂ����Ɩڂ�ʂ�
1618,look on [upon],�``��i�c�Ɓj�݂Ȃ�(as)
1619,pass on [down],�``��i�c�Ɂj��n���A�``����(to)
1620,pass for [as],�``�Ƃ��āi���ԂɁj�ʂ�A�ʗp����
1621,pass out,�C�₷��
1622,pass away,�S���Ȃ�
1623,reach (out) for,�``�Ɏ��L�΂�
1624,set out [off],(�``��)�o������(for)
1625,set �`` free,�``��������
1626,work out,�``�����A�l���o���G ���܂������G �g���[�j���O�����
1627,work on,�``(�d��)�Ɏ��g��
1628,pick up,�``��E���A���グ��G �``��Ԃɏ悹��A�ԂŌ}����G �``�𔃂��G �``(����E�m���Ȃ�)��g�ɕt����
1629,part with,�``�������A�ƕʂ��
1630,live on,�``�ɗ����Đ�����G ���H�Ƃ���
1631,fall back on,�``�ɗ���A��Ō�̋��菊�Ƃ���
1632,rest on,�``�ɗ���G �Ɋ�Â�
1633,cut down on,�``����炷�A�팸����
1634,point,�v�_�A������������
1635,to the point,�I��˂Ă���
1636,make a point of doing,�K���``���邱�Ƃɂ��Ă���G �``��d������
1637,keep an eye on,�``�������
1638,have an eye for,�``�����ڂ�����A�ӏ܊Ⴊ����
1639,turn a deaf ear to,�``�𕷂����Ƃ��Ȃ�
1640,make a face,�������߂�
1641,remain to do,�܂��``���Ă��Ȃ�
1642,have [be] yet to do,�܂��``���Ă��Ȃ�
1643,on behalf of,�``�ɑ����āA���\����
1644,second to none,�N�ɂ�����Ȃ�
1645,once and for all,�����Ō�ɁA�����ς��
1646,for once,���񂾂��́A�P��ł�������
1647,at stake,�댯�ɂ��炳��āG ���ƂȂ���
1648,in the wake of,�``�̌�ɑ�����
1649,Beats me.,������Ȃ�
1650,Serves you right.,���܂��݂�A���R�̕񂢂�
1651,Give me a break.,�悵�Ă���
1652,call it a day,�����͂���I���
1653,mental,���́A�m�͂́G ���_�́A�S��
1654,spirit,���_(��)�G �C���G �썰
1655,soul,���A���_�G �l
1656,material,�f�ށA�����G ��ށG ���ށG �����I��
1657,sane,���C��
1658,abuse,���p�A�s�ҁG �``�𗐗p����A�s�҂���
1659,addict,�``�𒆓łɂ�����G ���򒆓Ŏ�
1660,injure,�``�ɉ���������
1661,wound,�``�𕉏�������
1662,bleed,�o������
1663,scratch,�����������A�����菝�A�``���������
1664,bruise,�����A�Ŗo�� �``�ɑŖo�𕉂킹��
1665,suffer,�i�``�Łj�ꂵ�ށA�Y�ށifrom�j
1666,torture,����G �``����₷��A�Ђǂ��ꂵ�߂�
1667,torment,��ɁG �``��ꂵ�߂�
1668,vigor,����
1669,feeble,��X����
1670,pale,(�炪)�����A���F�������G (�F��)�W��
1671,fatigue,(�ɓx��)��J
1672,weary,(�``)�ɔ��Ă���A�O���O�����Ă���(of)
1673,tedious,�ދ���
1674,dreary,�ދ��ȁG ��̂�т���
1675,thumb,�e�w
1676,palm,��̂Ђ�
1677,wrist,���
1678,fist,���肱�Ԃ�
1679,elbow,�Ђ�
1680,muscle,�ؓ�
1681,thigh,���
1682,knee,�G
1683,heel,������
1684,ankle,����
1685,toe,���̎w�A�ܐ�
1686,to one's feet,�����āA��������Ԃ�
1687,chest,���G �^���X
1688,limb,�葫�A�l��
1689,forehead,�Ђ���
1690,eyebrow,����
1691,eyelid,�܂Ԃ�
1692,eyelash,�܂�
1693,beard,�����Ђ�
1694,jaw,����
1695,chin,����(�̐�[)
1696,cheek,�j
1697,tremble,(���|�E������)�k����G �k������
1698,shiver,(������)�k����
1699,wander,(�ړI��Ȃ�)���܂悤�A������
1700,roam,������A�p�j����G �``��p�j����
1701,stroll,(�Ԃ�Ԃ�)���
1702,stride,�ЂƂ܂����G �i��G ��҂ŕ��
1703,stumble,�܂����G (�``��)��R�ł��킷(on[upon])
1704,creep,�����A��������i��
1705,linger,(�������炸��)������������A�c������
1706,sniff,���񂭂�k���G �``�̂ɂ�����k��
1707,sneeze,������݂����
1708,snore,���т������
1709,sneer,(�``��)�����΂��A�@�ŏ΂�(at)
1710,shrug,��������߂�
1711,clear one's throat,�P��������
1712,frown,�����ߖʂ����G �����ߖ�
1713,grimace,�����ߖʂ����G �����ߖ�
1714,blink,�܂΂��������G �܂΂���
1715,yawn,�����т����
1716,mutter,�Ԃ₭
1717,murmur,�Ԃ₭
1718,mumble,�Ԃ₭
1719,whisper,�����₭
1720,shriek,��؂萺��グ��A����
1721,sob,�����苃��
1722,genuine,�{���́A�����́A�S�����
1723,authentic,�{���́A�{���
1724,fake,�U����
1725,FALSE,(�킴��)�Ԉ�����A�U��
1726,sincere,�S����́A������
1727,sheer,�S����
1728,elaborate,��̍��񂾁A���I��
1729,intricate,���G�ȁA���ݓ�����
1730,exquisite,���k�ȁA�f���炵��
1731,sophisticated,������ꂽ�G ���I��
1732,proficient,�n�B����
1733,negative,�ے�́A�ے�I�ȁA���ɓI�ȁA�}�C�i�X��
1734,affirmative,�m��́A�ϋɓI��
1735,positive,�ϋɓI�ȁA�v���X�́G �m�M���Ă���
1736,vertical,�����́A�c��
1737,horizontal,������
1738,parallel,(�``��)���s�́A�ގ�����(to�``)�G �ގ�(��)�A�C�G������
1739,indifferent,(�``�ɑ΂���)���֐S��(to)
1740,infamous,���������A�]��������
1741,notorious,���������A�]��������
1742,uneasy,���������Ȃ��A�s����
1743,awkward,���������Ȃ��A�C�܂����A�s��p�ȁA�������Ȃ�
1744,clumsy,�s��p�ȁA�������Ȃ�
1745,restless,�����������Ȃ��A���킵�Ȃ�
1746,relentless,���X�ȁA��e�͂̂Ȃ�
1747,ruthless,��e�͂̂Ȃ��A�⍓��
1748,reckless,������������
1749,stupid,�΂��ȁA�����
1750,silly,�΂���
1751,absurd,�΂������A���ɓK��Ȃ�
1752,ridiculous,�΂��΂�����
1753,fragile,���₷���A��낢
1754,vulnerable,�i�``�ɑ΂��āj�����₷���A�ア(to)
1755,delicate,�@�ׂȁA���ׂȁA�D���ȁA���a��
1756,stiff,�����A�Â��Ă���G ���ꂵ��
1757,rigid,�����G ���i�ȁA�Z�ʂ������Ȃ�
1758,flexible,�Ȃ���₷���A�_��̂���
1759,arrogant,������
1760,humble,�����ȁA�܂����G ���f��
1761,stubborn,��ł�
1762,obstinate,��ł�
1763,fierce,������
1764,harsh,������
1765,stern,���i�ȁA������
1766,brave,�E����
1767,bold,��_��
1768,timid,���a��
1769,deliberate,�Ӑ}�I�ȁA�̈ӂ́G �T�d��
1770,discreet,�T�d��
1771,prudent,�T�d��
1772,subtle,�����ȁA��������
1773,drastic,���I�ȁA�O��I��
1774,integral,�K�v�s���ȁG ���S��
1775,decent,�܂Ƃ�ȁA������Ƃ����A��i��
1776,neat,�����ꂢ�ȁA���΂炵��
1777,tidy,������Ƃ����A�����ꂢ��
1778,crude,���́A�V�R�́A�e���
1779,valid,�L���ȁA������
1780,initiative,�哱���A����
1781,security,���S��
1782,merit,�����A���_
1783,access,��ʂ̕ցA����A���p
1784,technique,(���I��)�Z�p
1785,horror,���|
1786,terror,���|
1787,symbol,�ے�
1788,barrier,��ǁA��Q
1789,gap,�u����A��
1790,dilemma,�W�����}�A�p�݁A���
1791,stretch,�``��L�΂��G �L�т�A�L����
1792,elite,�G���[�g�A���s�G �G���[�g��
1793,series,�A��
1794,serial,�A������
1795,cereal,�����A�������H�H�i
1796,irregular,�s�K����
1797,item,�i�ځA����
1798,relax,�``����낪����G ���낮
1799,mood,�C���A���͋C
1800,tight,����
1801,severe,������
1802,puzzle,�``��˘f�킹��
1803,pause,�ꎞ�x�~�G �ꎞ�x�~����
1804,reverse,�``��t�ɂ���A�ɋt�s����G �t�́G �t
1805,pose,�p�� �|�[�Y��Ƃ�G �``(���E����)���N����
1806,random,����ׂ́A�ł���߂�
1807,bitter,�ꂢ�A�炢
1808,float,(�����E�󒆂�)�����G �``�𕂂��ׂ�
1809,recipe,���V�s�A�����@�G �錍
1810,luxury,�ґ�A�ґ�i
1811,charity,���߁A���P
1812,athlete,�^���I��
1813,laundry,���
1814,label,�``��(�c�Ƃ���)���b�e����\��(as)
1815,loose,���񂾁A���炵�Ȃ�
1816,humor,���[���A�G �@��
1817,image,�C���[�W�A�摜�A�f��
1818,amateur,�A�}�``���A�A�f�l
1819,thrill,�``��킭�킭������G ����
1820,theme,�e�[�}�A���
1821,leisure,�]��
1822,alcohol,�A���R�[���A��
1823,vitamin,�r�^�~��
1824,liver,�̑�
1825,kidney,�t��
1826,chaos,���ׁA������
1827,connect,�``��q����
1828,appoint,�``��w������A�w�肷��
1829,guarantee,�``��ۏ�(�ۏ�)����
1830,aesthetic,���I�ȁA���w��
1831,celebrity,�L���l
1832,animate,�``����C�Â���A�ɐ�����^����
1833,department,�����A����A��
1834,depart,�o������
1835,casual,���C�Ȃ��A��R�́G ������
1836,challenge,(��肪���̂���)���A�ۑ�G ����G �``�ɒ��ށA���킷��G �``�Ɉًc�������
1837,naive,���Ԓm�炸�́A���Ԃ�
1838,alien,�َ��ȁA�O���� �O���l
1839,resort,(�``[��i]��)�i����(to�``) �s�y�n
1840,web,�N���̑��G (�C���^�[�l�b�g���)�l�b�g���[�N�A�E�F�u
1841,faint,�������ȁA�ڂ��肵�� ���_����
1842,interview,�C���^�r���[�A�ʐ�
1843,bond,���ÂȁA����
1844,tissue,(�זE��)�g�D �G (�K�[�[�Ȃǂ�)�z�A�@��
1845,campaign,�I�������A���������A�R���s���A���i�̔�
1846,boss,��i
1847,cafeteria,�Ј��H���A�w�H
1848,companion,���ԁA���̘A��
1849,mode,�l���A�����A�``��
1850,mineral,�z��
1851,foul,�i�L���Ȃǂ��j�s���ȁA�����G �����́G ����
1852,educate,�``����炷��
1853,discipline,�����A�K�� �``�������A�P������
1854,instruct,A�Ɂ``����悤�Ɏw������
1855,enlighten,�``��[�ցE�[������A�ɒm�点��
1856,illuminate,�``��Ƃ炷�G (���)�𖾂炩�ɂ���
1857,inspire,�``��i�c����悤�j���N������A�̑n��ӗ~��������Ă�(to do)
1858,incentive,���@�t���A���C��o��������
1859,enroll,�``��o�^����A���w�E�������G ���w����
1860,register,�``��o�^����A�L�^����G �����ɂ���G �o�^����
1861,sign up,�i�``�Ɂj�o�^����(for)
1862,tuition,���Ɨ�
1863,tutor,�ƒ닳�t�A�l�d�b�G �``��(�l�I��)������
1864,faculty,(��w��)�w���G (�g�́E���_��)�\��
1865,facility,�{�݁A�ݔ��G �\�́A�e�Ղ�
1866,sophomore,(���Z�E��w��)��N��
1867,semester,(��w������)�w��
1868,curriculum,�J���L�������A���ȉے�
1869,diploma,(��w��)�w��
1870,grade,�����A�w���G �]���A����
1871,mark,���сG ��A�w�W�G �``���
1872,rank,�����A�K�� �ʒu����G �``��ʒu�Â���
1873,profession,(�m�I�E���I��)�E��
1874,vocation,�V�E
1875,candidate,�u��ҁA����
1876,colleague,����
1877,technology,�Ȋw�Z�p
1878,innovation,�v�V�A�v�V�Z�p
1879,novel,���� �a�V�ȁA�V���
1880,patent,�����G �``�̓�����Ƃ�
1881,breakthrough,���i
1882,exploit,�``��J���E���p����G ��悷��
1883,tool,����A�H��
1884,implement,����A�p��G �``����s����
1885,instrument,���G �y��
1886,machinery,�@�B��
1887,appliance,�d�C���i
1888,apparatus,���u�E���(�ꎮ)
1889,gadget,�@�B���
1890,function,�@�\�A�����G �@�\����
1891,electric,�d�C��
1892,electronic,�d�q��
1893,vehicle,��蕨�G �``�B��i�A�}�́A������
1894,automobile,������
1895,wheel,�ԗցG (�Ԃ�)�n���h��
1896,pedestrian,��s��
1897,pave,�``��ܑ�����
1898,manual,�蓮�́A���Ƃ� �}�j���A���A�����
1899,automatic,������
1900,cover,�``�𕢂��G �``�͈̔͂ɂ킽��G �``��񓹂���
1901,fine,���΂炵���G �ׂ����G ����G �``�ɔ����Ȃ�
1902,leave,�``��o������G �``��c���G �x�ɁG ����
1903,meet,�``�ɉ�G �``(�v���E�K�v)�𖞂���
1904,strike,�``��łG �``��(�c�Ƃ���)��ۂ�^����(as)�G �X�g���C�L
1905,run,����G �``��o�c����
1906,coin,�d�݁G �``(�V��)����o��
1907,room,�����G ��ԁG �]�n�A�\��
1908,story,����G �``�K����
1909,manner,���@�A�����G (-s)��V��@�A�s�V
1910,address,�Z���G �``�ɍ���������G ���g�ށG �b��������
1911,check,�``��m���߂�G �``��}������G �����F�}���A�j�~�G ���؎�
1912,forward,�O���ցG �``(�莆�E���[��)��]������
1913,chance,�@��G �\���A�����݁G ��R
1914,air,��C�A��G �O���A�ԓx�A���͋C
1915,lot,��ʂ̂�́G ���A�p�n�G �����O�A�h��
1916,change,�``��ς���G �ω��G �ނ�K�A���K
1917,second,��Ԗڂ́A�b�A(-s)�������
1918,still,�܂��G ����ł�G �Î~����
1919,cross,�``����؂�G �@���̈���
1920,will,�ӎu�G �⌾
1921,sound,���A�``�̂悤�ɕ�������A�v����G ���S�ȁG ��������ƁA������
1922,fast,�����G �Œ肵���G �����G ��������ƁA��������ƁA�f�H�A�f�H����
1923,life,�l���G �����G �����A�l���G �i���p�ł́j�����A�{��
1924,art,�|�p�G �Z�p�G �l���w
1925,service,��d�A���d�A�ݔ��A�������ƁA�Ζ��A��q�A����
1926,order,���߁A�����G �����A�����G �``�𖽂���A��������
1927,practice,���K�A���H�G ���K�A���s
1928,minute,�ɂ߂ď������A���ׂ�
1929,excuse,������A���R
1930,wind,�``���������A����
1931,grind,�``��i���Ɂj�҂��A����Ԃ�
1932,command,���߁G (�����)���R�Ɏg���\�́G �``������炷
1933,charge,�``��(�c��)����G ��������(with�c)�G �``�ɗ����ۂ��G �``�ɐӔC��ۂ��G �``��[�d����G ���G ����G �ӔC
1934,history,��j�A��j�w�G �o��
1935,dinosaur,����
1936,ape,�T���A�ސl��
1937,primate,�쒷�ނ̓���
1938,mammal,�M����
1939,upright,�������� ��������
1940,archaeology,�l�Êw
1941,civilization,����
1942,civil,�s����
1943,medieval,������
1944,feudal,��������
1945,Renaissance,(the)���l�T���X
1946,revolution,�v���A���v
1947,empire,�鍑
1948,imperial,�鍑��
1949,colony,�A���n�A�W��
1950,slave,�z��G (�``��)�Ƃ���Ă���l(to�``)
1951,modern,�����
1952,metropolis,��s�s
1953,bustle,����
1954,skyscraper,�����w�r��
1955,military,�R����
1956,army,���R�A�R��
1957,arms,����A�R��
1958,navy,�C�R
1959,navigation,�q�C
1960,soldier,�R�l�A���m
1961,troop,�R��A���m
1962,hostage,�ߗ�
1963,weapon,����
1964,sword,��
1965,strategy,�헪�A����
1966,tactics,��p
1967,neutral,�����́A�ǂ���������
1968,ally,�������A�����G ��������
1969,rally,�W��G �Č��W����
1970,assault,�``��P������G �P��
1971,raid,�}�P
1972,assassination,�ÎE
1973,thus,����̂ɁG ���̂悤��
1974,hence,����̂ɁG ���
1975,nevertheless,����ɂ������炸
1976,nonetheless,����ɂ������炸
1977,notwithstanding,����ɂ������炸
1978,all the same,����ł��͂�A����ɂ������炸
1979,despite,�``�ɂ������炸
1980,besides,����ɉ����āA����ɁG �``�ɉ�����
1981,moreover,�����
1982,furthermore,�����
1983,whereas,(�``�ł���)���̈����
1984,on the other hand,���̈����
1985,meanwhile,���̊Ԃ�
1986,in the meantime,���̊Ԃ�
1987,that is (to say),���Ȃ킿�A�܂�
1988,namely,���Ȃ킿�A�܂�
1989,in short,��Z�Ɍ����ƁA�܂��
1990,say,�Ⴆ��
1991,for instance,�Ⴆ��
1992,indeed,�m���ɁA�{����
1993,somewhat,�����Ԃ�A���
1994,somehow,�ǂ������킯���G ���炩�̕��@��
1995,otherwise,����Ȃ���΁G ���̑��̓_�ŁG ������ӂ��ɁA�ʂ̂�����
1996,given,�``���肷��ƁA������΁A��l������ƁG ����́A�C�ӂ�
1997,rightly,�����ɁA���R�̂��ƂȂ���
1998,justly,�����ɁA���R�̂��ƂȂ���
1999,mistakenly,�Ԉ����
2000,reportedly,�񂶂���Ƃ���ł�
2001,presumably,�����炭�A���Ԃ�
2002,seemingly,�����Ƃ���ł�
2003,as a matter of fact,����
2004,for that matter,����Ɍ�����
2005,thereby,����ɂ����
2006,whatsoever,�S���A�����ł�
2007,beneath,�``�̉���
2008,premise,�O��A����
2009,entity,���ݕ��A�����
2010,discourse,�_���A�u���A����
2011,transcend,�``��z����A���z����
2012,ascribe,(�c��)�``�̌�����A��(to�c)
2013,intrinsic,�{��������Ă���
2014,articulate,�``��(�͂�����)�����A��������G �``��Ȃ�
2015,formula,�����G ���܂�؂��������G ���@
2016,contend,�c�Ǝ咣����(that�c)�G (�``��)�����A(��)�Ώ�����(with�``)
2017,advocate,�``(��``�E���_)��񏥂���A�咣����G �񏥎�
2018,delegation,��\�h���A�g��
2019,sanction,���فG ���F�A����
2020,pledge,"�񑩁A����G �``��񑩂���A���񂷂�(to do, that�c)"
2021,agenda,���c�����A�c��
2022,amend,�``��C������A��������
2023,subsidy,�⏕��A������
2024,intuition,����
2025,discern,�``���������A���ʂ���
2026,skeptical,���^�I��
2027,benign,�ǐ��́A�Q�̂Ȃ��G �L�v��
2028,malicious,���ӓI��
2029,hypocrisy,�U�P
2030,undermine,�``��j�Q����A��̉�����
2031,impair,�``���߂�A���Ȃ�
2032,deteriorate,��������
2033,trigger,�``������N�����A������ƂȂ�G ������
2034,induce,�``��U������A��(�c)����C�ɂ�����(to do)
2035,deduce,�``(���_)�𓱂��o���A���_����
2036,intrigue,�``�̋����������G �A�d
2037,momentum,�́A�����A�^����
2038,velocity,���x
2039,chronic,�����I�ȁA�����I��
2040,lapse,(���Ԃ�)�o�߁G (������Ƃ���)���
2041,gravity,�d�́G �d�傳
2042,orbit,�O�� �``�̋O������
2043,axis,��
2044,fluid,�����́G ��������
2045,resilient,�e�͐��̂���G �񕜗͂̂���A��������̑���
2046,erode,���H����G �``�𕅐H����A�N�H����
2047,erupt,���΂���
2048,assimilate,�``�𓯉�����G �����E�z������G ��������
2049,adhere,(�``��)�������A(��)�Ŏ炷��(to�``)
2050,exile,(�c�������)�Ǖ��A�S���G �``��Ǖ�����
2051,probe,�T���G �T���@ �``������ɒ��ׂ�
2052,scrutinize,�``��Ȗ��ɒ��ׂ�
2053,verify,�``��(��������)�ؖ�����A�m���߂�
2054,census,��������
2055,censorship,���{
2056,index,�w�W�A�w�j�A�w���G ���o��
2057,defy,�``����ށA�ɔ��R����
2058,comply,�``(�K���E���߁E�)�ɏ]���A���v����(with �``)
2059,synthesize,�``�𑍍�����A��������A�������č��o��
2060,coordinate,�``�𓯒����ē������A��������
2061,subordinate,�]�����Ă���A���ʂ́G �񎟓I�� �]�������́A���ʂ̂�� �``��]��������
2062,incorporate,�``��(�c��)�g�ݍ���(into�c)
2063,comprise,�``��\������G �``����Ȃ�
2064,manipulate,�``�𑀍삷��A�����
2065,tangible,�G��邱�Ƃ��ł���G �����ȁA��̓I��
2066,designate,�``��w������A�w�肷��
2067,depict,�``��``��
2068,ingenious,�n�ӍH�v�ɕx��
2069,ingenuous,���^�ȁA���׋C��
2070,proximity,(�``��)�߂�����(to)
2071,dismay,�``�𓮗h������G ���h
2072,appall,�``�������Ƃ�����
2073,stun,�``��т����肳����A䩑R�Ƃ�����
2074,marvel,(�``��)�����A����(at�``)�G ����
2075,perplex,�``�𓖘f������
2076,bewilder,�``�𓖘f������
2077,astound,�``��т����肳����
2078,startle,�``��т����肳����
2079,anticipate,�``��\������
2080,apprehension,���O�A�s��
2081,deplore,�``��Q��
2082,agony,��Y�A���
2083,inflict,�``(��ɁE�Ō�)��^����
2084,afflict,�``��ꂵ�߂�
2085,ambivalent,��������A��������A�ǂ��炩���߂��˂�
2086,arbitrary,�C�ӂ́A�ƒf�I�ȁA���ӓI�ȁA�C�܂����
2087,unanimous,�����v��
2088,consensus,�ӌ��̈�v�A����
2089,ponder,�``���������l����
2090,reckon,�``�𐄒肷��A�ƍl����
2091,soar,�}�㏸����A���������オ��
2092,roar,�苿���A�i����
2093,peer,���ԁA�����̐l
2094,reap,�``����n����G (��V�E���v)���ɓ����
2095,curb,�``��}������A(�����)����
2096,carve,�``�𒤂�A���
2097,cue,���}�A�w�}
2098,queue,�s��
2099,slap,�``��҂����ƒ@��
2100,clap,�``(��)��@��
2101,hatch,(����)������A�z������
2102,wreck,�``���j������A��Ȃ��ɂ���G ��j�A�i�j�������j�c�[
2103,drain,�����A�r���G �``�̔r�������A����Ղ���
2104,sewage,����
2105,sew,�``��D��
2106,sober,����ӂ́G ����̂܂܂�
2107,kin,�����A�e��
2108,merge,��������
2109,riot,�\���A����
2110,galaxy,��́A���_
2111,cosmos,�F��
2112,cosmic,�F����
2113,celestial,�V�̂�
2114,comet,�a��
2115,particle,���q
2116,debris,�c�[�A�S�~
2117,psychiatric,���_��w��
2118,contaminate,�``���������
2119,specimen,�W�{�A���{
2120,indigenous,���Z���́A���̓y�n�ŗL��
2121,province,�B�A�ȁG (-s)�n��
2122,peril,�댯
2123,hazard,�댯�A�댯�v�f
2124,plausible,����Ƃ�炵���A�܂��Ƃ��₩��
2125,preliminary,�\���́A���O��
2126,anonymous,������
2127,obsolete,�����ꂽ�A����x���
2128,innate,���܂�������Ă���G �ŗL��
2129,subsequent,���̌��
2130,alleviate,�``��y������A�y������
2131,mandatory,�����I�ȁA�K�{��
2132,imperative,�K�{�́A�}����
2133,advent,�o���A����
2134,heredity,��``
2135,coherent,�����т���
2136,legitimate,�����ȁA���@�I��
2137,certificate,�ؖ����A�Ƌ�
2138,autonomy,�����A�����A���含
2139,withstand,�``�ɑς���
2140,supplement,�``��₤�G �₤��́A�h�{�⏕�H�i
2141,dispose,(�``����)�C�ɂ�����(to do)�G �``��z�u����
2142,humane,�v�����̂���A�l���I��
2143,personnel,(��Г���)�l�����G �S�E��
2144,maxim,�i���A����
2145,questionnaire,�A���P�[�g����
2146,manifest,�``��(������)���炩�Ɏ����G ������
2147,connotation,"���O�̈Ӗ�, �ܒ~"
2148,dogma,���``�A���G �ƒf
2149,prophet,�\����
2150,symmetry,���E�Ώ́A�Ώ�
2151,rectangular,�����``��
2152,diameter,���a
2153,soothe,�``��Ȃ��߂�A�a�炰��
2154,wither,�������A��܂�
2155,surge,�}���A�}�� �}������A�}������
2156,proliferate,�}������A�ɐB����
2157,fetch,"�``�����Ă���, �A��Ă���"
2158,immerse,�``��Z���G �v��������
2159,hamper,�``��W����
2160,forge,�``��U������
2161,token,���邵
2162,mock,�``������΂��G �͋[�́A�U��
2163,toll,���Q�A�����ҁG �ʍs���A�ʘb��
2164,doom,"�^��, �h���G �``��^���Â���"
2165,flaw,�ЂсA����
2166,cater,(�H���Ȃǂ�)�܂��Ȃ��A(�v����)������
2167,edible,�H�ׂ���
2168,delinquent,��s��
2169,gigantic,����ȁA�傫��
2170,static,�Î~�����A�����̂Ȃ�
2171,antique,�Â��A������
2172,transact,�``(�Ɩ��E���)���������A�s��
2173,ornament,����
2174,corridor,�L��
2175,warrant,�``��ۏ؂���G ����������
2176,mischief,��������A����
`
  }
];
