// スタイルデータ
const styleData = {
    "映像表現スタイル": {
        "写実系": {
            "フォトリアリスティック": "写真と見分けがつかないほどの写実性",
            "ハイパーリアル": "写真以上に細部まで詳細。誇張された現実感",
            "シネマティック": {
                "ハリウッドスタイル": "大作映画風。壮大、派手、ドラマチック",
                "インディーズ映画風": "独立系映画風。個性的、実験的、低予算",
                "B級映画風": "低予算映画風。ジャンル映画、チープさ",
                "フィルムノワール風": "犯罪映画。白黒、影、コントラスト、退廃的",
                "ネオノワール風": "現代版フィルムノワール。色彩、複雑なプロット",
                "サイバーパンク風": "近未来、テクノロジー、退廃、ネオン、アンダーグラウンド",
                "スチームパンク風": "蒸気機関、歯車、レトロフューチャー、冒険",
                "ディーゼルパンク風": "ディーゼル機関、1920~50年代風、レトロ",
                "アトミックパンク風": "原子力、冷戦時代"
            },
            "オールドフィルム風": {
                "サイレント映画風": "無声映画。字幕、誇張された演技、音楽伴奏",
                "モノクロ映画風": "白黒映画。光と影、コントラスト",
                "セピア調": "茶褐色。古びた写真、ノスタルジア",
                "グレイン": "フィルム粒子。ざらつき、質感",
                "スクラッチ": "フィルム傷。古さ、ダメージ",
                "ダスト": "フィルム埃。古さ、未加工感",
                "ヴィネット": "周辺光量落ち。中心強調、古さ"
            },
            "カメラ映像風": {
                "監視カメラ風": "固定カメラ、低画質、広角、時間表示",
                "防犯カメラ風": "監視カメラ風",
                "ドライブレコーダー風": "車載カメラ、広角、時間表示",
                "ホームビデオ風": {
                    "8mmフィルム風": "小型フィルム、粒状感、色あせ、揺れ",
                    "VHSテープ風": "ビデオテープ、ノイズ、走査線、色にじみ"
                },
                "POV": {
                    "一人称視点": "キャラクターの視点",
                    "ヘルメットカメラ風": "ヘルメット装着、アクション",
                    "ボディカメラ風": "身体装着、警察、兵士",
                    "ドローン視点": "空撮",
                    "ウェアラブルカメラ風": "身体装着カメラ"
                },
                "ニュース映像風": "報道、現実感、客観性"
            },
            "特殊効果": {
                "没入型": "視聴者を取り囲むような映像。VR、360度",
                "VR映像風": "VRヘッドセット、360度、インタラクティブ",
                "スローモーション": "時間の引き伸ばし。強調、感情、詳細",
                "早送り": "時間の短縮。コミカル、経過",
                "タイムラプス": "長時間変化の短縮。自然現象、都市風景",
                "ストップモーション": "静止画の連続。独特の動き、質感",
                "長回し": "長いカット。臨場感、緊張感、技術",
                "手持ち撮影風": "手持ちカメラ。揺れ、現実感、ドキュメンタリー"
            }
        },
        "非写実系": {
            "アニメーション": {
                "2Dアニメーション": {
                    "伝統的アニメーション": {
                        "フルアニメーション": "滑らかな動き、ディズニー",
                        "リミテッドアニメーション": "動きを簡略化、低予算"
                    },
                    "デジタル2Dアニメーション": {
                        "ベクターアニメーション": "数式で表現、拡大縮小に強い",
                        "フラッシュアニメーション": "Webアニメーション、軽量"
                    },
                    "モーショングラフィックス": "文字や図形の動き、情報伝達",
                    "ホワイトボードアニメーション": "手描き風、解説"
                },
                "3Dアニメーション": {
                    "CGI": "コンピューター生成画像",
                    "キャラクターアニメーション": "キャラクターの演技",
                    "モーションキャプチャ": {
                        "パフォーマンスキャプチャ": "表情も記録"
                    },
                    "プロシージャルアニメーション": "自動生成、物理法則",
                    "シェーディング": {
                        "セルルック": "2Dアニメ風、輪郭線、影",
                        "トゥーンシェーディング": "漫画風、セルルック",
                        "フラットシェーディング": "単色、ローポリゴン",
                        "グーローシェーディング": "頂点色補完、滑らか",
                        "フォンシェーディング": "法線補完、ハイライト"
                    }
                },
                "ストップモーション": {
                    "クレイアニメーション": "粘土",
                    "カットアウトアニメーション": "切り絵",
                    "シルエットアニメーション": "影絵",
                    "モデルアニメーション": "模型",
                    "ピクシレーション": "人間",
                    "レゴアニメーション": "レゴブロック"
                }
            },
            "イラストレーション": {
                "水彩画風": "透明感、にじみ、ぼかし",
                "油絵風": "重厚感、質感、光沢",
                "パステル画風": "柔らかい、淡い",
                "鉛筆画風": "線画、陰影",
                "インク画風": "濃淡、にじみ、筆致",
                "木版画風": "輪郭線、平坦な色面",
                "リトグラフ風": "滑らかな質感",
                "点描画風": "点の集合で描く"
            },
            "抽象表現": {
                "幾何学的": "図形、直線、曲線",
                "ミニマル": "最小限の要素",
                "サイケデリック": "幻覚的、極彩色",
                "フラクタル": "自己相似図形",
                "パーティクル": "粒子、エフェクト",
                "グリッチアート": "デジタルノイズ"
            }
        },
        "映像の色彩とカラースキーム": {
            "色調": {
                "暖色系": "赤、オレンジ、黄色",
                "寒色系": "青、緑、紫",
                "中性色系": "白、黒、グレー",
                "モノクロ": "白黒",
                "セピア調": "古びた感じ",
                "パステル調": "淡い色調",
                "ビビッド": "鮮やかな色調",
                "ダークトーン": "暗い色調",
                "ライトトーン": "明るい色調"
            },
            "鮮やかさ": {
                "鮮やか": "強い感情、活気",
                "落ち着いた": "控えめな感情",
                "くすんだ": "過去の記憶",
                "淡い": "繊細さ、儚さ"
            },
            "明るさ": {
                "明るい": "昼間、幸福",
                "暗い": "夜、恐怖",
                "ハイキー": "全体的に明るい",
                "ローキー": "全体的に暗い"
            }
        }
    }
};

// 画角データ
const angleData = {
    "基本視点": {
        "一人称視点": {
            "description": "キャラクターの視点。没入感、主観性。",
            "没入型一人称視点": "VRゲームなど。完全な一体感。"
        },
        "三人称視点": {
            "description": "客観的な視点。状況説明、俯瞰。",
            "限定三人称視点": "特定の人物に焦点を当てた三人称。感情移入。",
            "全知視点": "全てを見通す視点。物語の全体像。",
            "肩越し視点": "会話シーン。臨場感、関係性。",
            "ツーショット": "二人の人物。関係性、対話。",
            "グループショット": "複数の人物。集団、関係性。",
            "ワイドショット": "全体像。状況、背景、スケール感。",
            "ミディアムショット": "腰から上。表情、動作、会話。",
            "クローズアップ": "顔など。感情、詳細、強調。",
            "エクストリームクローズアップ": "目など。細部、緊張感、象徴。"
        },
        "俯瞰視点": "真上からの視点。位置関係、客観性、象徴性。",
        "ハイアングル": "高い位置からの視点。被写体の矮小化、無力感。",
        "ローアングル": {
            "description": "低い位置からの視点。被写体の強調、威圧感、力強さ。",
            "ワームズアイビュー": "地面からの視点。極端なローアングル。"
        },
        "アイレベル": "目線の高さ。自然、共感、現実感。",
        "ダッチアングル": "傾いた視点。不安、混乱、異常。",
        "フロントアングル": "正面",
        "サイドアングル": "横",
        "リアアングル": "後ろ"
    },
    "特殊視点": {
        "POVショット": {
            "description": "特定のキャラクターが見ているもの。主観性、没入感。",
            "ヘルメットカメラ視点": "ヘルメット装着者の視点。",
            "ボディカメラ視点": "体につけたカメラ",
            "ドローン視点": "ドローン",
            "車載カメラ視点": "車",
            "動物視点": "動物",
            "昆虫視点": "昆虫",
            "モンスター視点": "モンスター",
            "ロボット視点": "ロボット",
            "武器視点": "武器",
            "道具視点": "道具"
        },
        "主観ショット": "キャラクターの感情や心理状態。",
        "客観ショット": "客観的な事実。",
        "覗き見視点": "盗み見。サスペンス、背徳感。",
        "監視カメラ視点": "監視、客観性、記録。",
        "魚眼レンズ視点": "広角、歪み、非現実感。",
        "望遠レンズ視点": "圧縮効果、遠距離、監視。",
        "マクロ視点": "接写、詳細、肉眼で見えない世界。",
        "空撮視点": "上空からの視点。広大さ、客観性。",
        "水中視点": "水中からの視点。非日常、浮遊感。",
        "X線視点": "透過。内部構造、秘密。",
        "サーモグラフィー視点": "熱分布。温度差、不可視。",
        "暗視カメラ視点": "暗闇。不可視、緊張感。",
        "多視点": "複数の視点。多角的、客観性。",
        "断片化された視点": "混乱、記憶喪失、不安定。",
        "歪んだ視点": "現実の歪み、異常、主観性。",
        "夢の中の視点": "幻想、非現実、潜在意識。",
        "幻覚視点": "幻覚、異常、精神状態。",
        "記憶の中の視点": "回想、過去、主観性。",
        "フラッシュバック視点": "過去",
        "幽体離脱視点": "浮遊感"
    }
};

// カメラ制御データ
const cameraControlData = {
    "カメラ制御": {
        "複合視点": {
            "リバースショット": "会話シーン。交互に人物を映す",
            "リアクションショット": "出来事に対する人物の反応",
            "インサートショット": "詳細を挿入。強調、説明",
            "カットアウェイ": "メインシーンから別シーンへ補足説明",
            "スプリットスクリーン": "画面分割で同時進行比較",
            "ピクチャーインピクチャー": "子画面で補足情報表示",
            "マルチアングル": "複数角度からの撮影"
        },
        "カメラ運動": {
            "固定視点": "安定感と客観性を確保",
            "移動視点": {
                "パン": "水平方向の掃引",
                "ティルト": "垂直方向の移動",
                "ズーム": "レンズによる拡大縮小",
                "ドリー": "滑らかな前後移動",
                "トラック": "横方向の平行移動",
                "クレーン": "上下方向の移動"
            },
            "特殊運動": {
                "オービットショット": "被写体周回",
                "ズームイン/アウト": "注目の強調/状況説明",
                "全方位視点": "360度没入型体験"
            }
        },
        "高度な視点": {
            "メタ視点": "現実と虚構の境界を曖昧に",
            "第四の壁破壊": "観客への直接語りかけ"
        }
    }
};

// 映画スタイルデータ
const movieStyleData = {
    "マトリックス風": "緑がかったフィルター、デジタルグリッチ、ワイヤーアクション、バレットタイム（360度カメラ）、スローモーション、人工的な照明、ハイコントラスト",
    "アメリ風": "赤と緑の強調、温かみのあるイエロー、高彩度、ビビッド、独特の色調補正（カラーグレーディング）、早回し、クローズアップ、オフセンター構図、モンタージュ",
    "ムーンライズ・キングダム風": "パステルカラー、左右対称の構図、オフセンター構図、スローモーション、独特のカメラワーク（パン、ティルト）、平面感、ブロッキング",
    "マッドマックス 怒りのデス・ロード風": "オレンジと青（ティールアンドオレンジ）の強いコントラスト、砂漠の色調（黄土色、茶色）、激しいアクション、早回し、特殊効果、広角レンズ、高彩度、粒子感",
    "ブレードランナー2049風": "ネオン（ピンク、青、紫）、ダーク、サイバーパンク、雨、霧、スモーク、ローキー照明、スローモーション、広角レンズ、長回し、ボリューム感のある照明",
    "シン・シティ風": "モノクロベース、部分的に強い色（特に赤）、ハイコントラスト、グラフィックノベル風、シルエット、ハードボイルド、ネガポジ反転",
    "グランド・ブダペスト・ホテル風": "パステルカラー、左右対称の構図、独特のアスペクト比（4:3など）、コマ撮り風、ミニチュア、限定された色使い、ブロッキング",
    "時計じかけのオレンジ風": "奇抜な色彩（オレンジ、白）、広角レンズ、スローモーション、歪んだ映像、主観ショット、ローアングル、極端な構図",
    "ファイトクラブ風": "ダーク、グランジ、汚れた質感（緑、茶色）、ローキー照明、手持ちカメラ、フラッシュバック、高速編集、アンダーグラウンド感",
    "メメント風": "カラーとモノクロのシーンが交錯、断片的な編集、逆時系列、主観ショット、クローズアップ、記憶の断片化",
    "インセプション風": "現実と夢の区別が曖昧、重力を無視した映像、スローモーション、都市の歪み（CG）、特殊効果、広角レンズ、寒色系",
    "テネット風": "時間逆行、複雑なアクション、スローモーション、特殊効果、広角レンズ、冷色系、逆再生",
    "パルプ・フィクション風": "レトロ（70年代風）、高彩度、独特のカメラワーク（トラッキングショット、クローズアップ）、長回し、ジャンプカット、暖色系",
    "レザボア・ドッグス風": "狭い空間、長回し、スローモーション、オフセンター構図、会話シーン、クローズアップ、暖色系",
    "キル・ビル風": "バイオレンス、カンフー、日本刀、アニメーション挿入、スプリットスクリーン、カラーフィルター（赤、黄色）、モノクロ、スローモーション、トリビュート",
    "ヘイトフル・エイト風": "雪景色、70mmフィルム、ウルトラパナビジョン、ワイドスクリーン、スローモーション、室内、ローキー照明、限定空間",
    "ジャンゴ 繋がれざる者風": "西部劇、高彩度、スローモーション、ズーム、クラッシュズーム、赤、茶色、埃っぽい、広角",
    "イングロリアス・バスターズ風": "第二次世界大戦、長回し、スローモーション、独特のカメラアングル、クローズアップ、暖色系、緊張感",
    "2001年宇宙の旅風": "宇宙空間、静寂、スローモーション、クラシック音楽、長回し、特殊効果、広角、対称構図、ミニマル",
    "シャイニング風": "ホラー、不穏な雰囲気、左右対称の構図、ステディカム、赤い血、長い廊下、フラッシュバック、寒色系、広角",
    "フルメタル・ジャケット風": "戦争、ベトナム、訓練シーン、戦闘シーン、ドキュメンタリー風、手持ちカメラ、自然光、緑、茶色",
    "アイズ ワイド シャット風": "夢、現実、ローキー照明、赤い布、仮面、スローモーション、長回し、暖色系と寒色系、限定された色",
    "ロリータ風": "モノクロ、少女、クローズアップ、主観ショット、ハイキー照明、1960年代",
    "バードマン あるいは（無知がもたらす予期せぬ奇跡）風": "長回し、ワンカット風、手持ちカメラ、現実と虚構の曖昧さ、舞台裏、流れるようなカメラ",
    "レヴェナント: 蘇えりし者風": "自然光、寒色、雪景色、長回し、手持ちカメラ、広角レンズ、流れるようなカメラワーク、灰色",
    "ゼロ・グラビティ風": "宇宙、無重力、長回し、一人称視点、没入感、特殊効果、広角、青、黒",
    "インターステラー風": "宇宙、SF、ワームホール、相対性理論、IMAX、特殊効果、広角、実写、青、オレンジ",
    "ダークナイト風": "ダーク、リアル、ゴッサムシティ、ローキー照明、IMAX、夜景、広角、青、黒",
    "ジョーカー風": "ダーク、狂気、孤独、ローキー照明、スローモーション、ダンス、クローズアップ、70年代風、緑、紫",
    "バットマン vs スーパーマン ジャスティスの誕生風": "暗い色調、スローモーション、雨、広角、ローキー、青、グレー",
    "マン・オブ・スティール風": "手持ちカメラ、自然光、高速アクション、寒色系、粒子感、青、グレー",
    "ウォッチメン風": "スローモーション、音楽、独特の色調（青、黄色）、スーパーヒーロー、雨、ダーク",
    "スーサイド・スクワッド風": "ネオンカラー、音楽、アクション、早回し、カラフル、奇抜、緑、紫、ピンク",
    "ザ・バットマン風": "ダーク、雨、赤と黒、ローキー、フィルム・ノワール、探偵、影",
    "ゴッドファーザー風": "マフィア、家族、暗い色調、ローキー照明、セピア、長回し、暖色系、オレンジ",
    "スカーフェイス風": "ギャング、80年代、過剰な色彩（赤、ピンク、青）、スローモーション、ローアングル、ネオン",
    "カジノ風": "ギャンブル、ラスベガス、金、ローキー照明、長回し、ナレーション、赤、暖色系",
    "グッドフェローズ風": "マフィア、実話、長回し、ナレーション、ストップモーション、早回し、70-80年代、赤",
    "タクシードライバー風": "孤独、狂気、夜、ニューヨーク、ネオン、ローキー照明、主観ショット、雨、黄色",
    "セブン風": "ダーク、雨、猟奇殺人、フィルム・ノワール、ローキー照明、手持ちカメラ、緑、茶色、ブリーチバイパス",
    "羊たちの沈黙風": "サイコスリラー、クローズアップ、POVショット、暗い、地下室、緑、青",
    "ユージュアル・サスペクツ風": "どんでん返し、語り、フラッシュバック、モノクロ、カラー、入り組んだ構成、影",
    "ソーシャル・ネットワーク風": "デジタル、緑がかった色調、テンポの速い編集、会話、寒色系、アンバー",
    "ゴーン・ガール風": "ミステリー、冷たい色調、フラッシュバック、ナレーション、青、グレー、白",
    "ミッドサマー風": "白夜、明るい、花、原色、歪んだ映像、スローモーション、広角、白、黄色、緑",
    "ヘレディタリー/継承風": "暗い、不穏、ミニチュア、スローモーション、固定カメラ、ローキー照明、ロングショット、寒色、青",
    "パラサイト 半地下の家族風": "スローモーション、構図（上下）、照明（明暗）、象徴的、暖色と寒色、緑",
    "オールド・ボーイ風": "韓国映画、長回し、横スクロールアクション、ハンマー、紫、バイオレンス、暗い色調、緑",
    "スノーピアサー風": "列車、寒色、アクション、スローモーション、狭い空間、暗い、グレー、青",
    "渇き。風": "ヴァンパイア、暗い、赤、スローモーション、コントラスト、白、黒",
    "母なる証明風": "サスペンス、モノクロ、田舎、スローモーション、クローズアップ、ロングショット",
    "殺人の追憶風": "刑事、雨、田舎、未解決事件、ロングショット、茶色、灰色、緑、手持ち",
    "ジョーズ風": "サメ、海、POVショット、音楽、サスペンス、水中撮影、赤、青",
    "E.T.風": "月を背景にした自転車のシルエット、強い逆光、暖色系（オレンジ、アンバー）の色温度、広角レンズによる遠近感の強調、スローモーション",
    "ジュラシック・パーク風": "自然光を活かした撮影、広角レンズ、雨中のシーン、緑と茶色を基調とした色彩、手持ちカメラによるドキュメンタリータッチ、CG恐竜との合成、ティルトシフト",
    "レイダース/失われたアーク《聖櫃》風": "自然光、埃っぽさを強調する粒子感、茶色、黄土色、暖色系のフィルター、広角レンズ、ローアングル、アクションシーンでの手持ちカメラ",
    "バック・トゥ・ザ・フューチャー風": "80年代の明るい色調、光跡（ライトトレイル）などの特殊効果、早回し、スローモーション、ズームイン/アウトの多用、ダッチアングル",
    "スター・ウォーズ風": "宇宙空間の描写、ワイプトランジション、カラフルな光線、広角レンズ、特殊効果（爆発、ライトセーバー）、パンフォーカス",
    "タイタニック風": "暖色（夕焼け、船内）と寒色（夜の海、氷山）の対比、広角レンズ、ディゾルブ（オーバーラップ）、水中撮影、ステディカム",
    "アバター風": "3D撮影、モーションキャプチャ、CGキャラクター、青と緑を基調とした色彩設計、没入感を高めるカメラワーク、被写界深度の浅い映像",
    "ロード・オブ・ザ・リング風": "広大な風景のパンニングショット、特殊効果、緑と茶色を基調とした色彩、壮大なスケール感を出すためのミニチュア撮影、ロングショット、ハイアングル",
    "ハリー・ポッター風": "特殊効果（魔法の表現）、暖色（グリフィンドール寮）と寒色（スリザリン寮）の使い分け、浮遊感を出すためのクレーンショット、ワイヤーアクション",
    "トイ・ストーリー風": "CGアニメーション、明るい原色、キャラクター視点のカメラワーク、ダイナミックなカメラの動き、被写界深度の調整によるおもちゃ感の強調",
    "千と千尋の神隠し風": "手描きアニメーション、油屋の赤色、自然の緑色、日本の伝統色をベースにしたカラフルで独特の色彩設計、背景の細密な描き込み",
    "君の名は。風": "レンズフレア、逆光、青とオレンジのコントラスト、実写と見紛うほど美しい背景美術、時間の流れを表現するカット割り、空の色のグラデーション",
    "天気の子風": "光の表現（特に雨上がりの反射）、雨の描写、青を基調とした色彩、東京の風景のリアルな描写、雲の動きの表現",
    "AKIRA風": "ネオ東京の夜景、赤色のバイク、スローモーション、広角レンズ、破壊シーンの迫力、光跡（バイクのテールランプなど）、残像効果",
    "GHOST IN THE SHELL / 攻殻機動隊風": "光学迷彩の表現、緑がかった色調、サイバーパンクな都市風景、雨や濡れた路面の質感、ローキー（低照度）撮影、アンダー気味の露出",
    "もののけ姫風": "セル画、水彩背景、森(緑)、タタリ神(赤)、広角、深い被写界深度、パンフォーカス、ロングショット、動物(滑らか)",
    "となりのトトロ風": "セル画、水彩背景、自然光、緑、温色、猫バス(非現実的/生物的)、ロングショット、ローアングル",
    "魔女の宅急便風": "セル画、水彩背景、ヨーロッパ風、海/空(青)、パン屋(暖色)、パン/ティルト(飛行)、ロングショット",
    "天空の城ラピュタ風": "セル画(重ね)、緑/青、古代遺跡/飛行船(詳細)、ロボット兵(重厚感)、ロングショット、浮遊感",
    "風の谷のナウシカ風": "セル画、風/空気(線)、砂漠(暖色)、腐海(寒色)、マスク越し(POV)、ロングショット",
    "紅の豚風": "セル画、飛行艇(赤)、アドリア海/空(青)、飛行(プロペラ/排気/雲)、ロングショット、空中戦",
    "崖の上のポニョ風": "セル画、水彩、赤/青/緑(パステル)、海、波/泡(誇張)、ロングショット",
    "風立ちぬ風": "セル画、飛行機(金属質感/光反射)、青空/雲/風(淡い色彩/線)、夢(色彩設計変化)、ロングショット",
    "思い出のマーニー風": "セル画、湿地(水彩、青/緑、淡い)、回想(セピア/モノクロ)、ロングショット",
    "かぐや姫の物語風": "手描き、水墨画/日本画風、線描、淡い色彩、余白、竹(太い線)、柔らかい光、ロングショット",
    "ヱヴァンゲリヲン新劇場版風": "CG/手描き(メカ)、赤/オレンジ(警告色)、使徒(生物的/幾何学的)、CGカメラワーク、被写界深度変化、ロングショット、俯瞰",
    "秒速5センチメートル風": "写実的背景、桜/電車(詳細)、光(夕焼け/街灯)、浅い被写界深度、ロングショット、クローズアップ",
    "言の葉の庭風": "写実的背景、雨(水滴/水たまり/反射)、緑(新宿御苑)、被写界深度(雨粒)、ロングショット",
    "すずめの戸締まり風": "光(レンズフレア/逆光)、廃墟(質感/時間経過)、扉(神秘的)、ロングショット",
    "サマーウォーズ風": "仮想空間(原色、幾何学模様/エフェクト)、夏/田舎(温かみ)、アバター、ロングショット",
    "時をかける少女風": "残像/スローモーション/ブレ(タイムリープ)、夏空(爽やか)、電車/踏切、ロングショット",
    "おおかみこどもの雨と雪風": "手描き、水彩(自然、四季)、田舎(緑/青、温かみ)、雨/雪、ロングショット",
    "バケモノの子風": "異世界(色彩設計/建物)、渋谷(写実的)、クジラ(巨大感/神秘性)、赤/青(コントラスト)、ロングショット、群衆",
    "未来のミライ風": "庭(四季/光)、時間旅行(色彩/タッチ変化)、ロングショット",
    "竜とそばかすの姫風": "仮想空間(原色、流線型/幾何学)、歌唱(光エフェクト/カメラワーク)、ロングショット",
    "この世界の片隅に風": "手描き、水彩、淡い色調、戦時下、緑/茶色、温かみ、ロングショット",
    "火垂るの墓風": "手描き、赤/オレンジ(火/蛍)、暗い色調、夜、空襲(光/煙)、ロングショット",
    "レオン風": "ローアングル、サングラス越し(POV)、クローズアップ、スタイリッシュ構図",
    "フィフス・エレメント風": "原色(青/オレンジ)、未来、斬新、ダイナミック(クレーンショット/ドリーショット)",
    "ローマの休日風": "白黒、ハイキー、低コントラスト、グレイスケール豊か、自然光、ツーショット、ロングショット(ローマの風景)",
    "ティファニーで朝食を風": "ハイキー、ファッション、宝石、クローズアップ(オードリー・ヘップバーン)、ローキー(後半)、ロングショット(ニューヨークの街並み)",
    "カサブランカ風": "白黒、ローキー、高コントラスト、影、クローズアップ、ツーショット、スモーキー",
    "風と共に去りぬ風": "テクニカラー(3色法)、鮮やか、赤(炎、夕焼け)、シルエット、ロングショット、ワイドショット",
    "市民ケーン風": "白黒、ディープフォーカス、ローアングル、天井、ロングショット、長回し、フラッシュバック、クローズアップ(口元)",
    "めまい風": "緑/赤(対比)、ドリーズーム、螺旋階段、ローキー、クローズアップ、ロングショット",
    "北北西に進路を取れ風": "広大、追跡劇、飛行機、ロングショット、クロスカッティング",
    "裏窓風": "固定視点、望遠レンズ、雨、ローキー、サスペンス、ロングショット、POVショット",
    "サイコ風": "モノクロ、ローキー、モンタージュ(シャワーシーン)、クローズアップ、ジャンプカット",
    "鳥風": "特殊効果(鳥)、カラー、ロングショット、群衆、クロスカッティング",
    "素晴らしき哉、人生!風": "白黒、ハイキー、雪、天使、ロングショット、フラッシュバック",
    "第三の男風": "フィルム・ノワール、ダッチアングル、モノクロ、ローキー、影、地下水道、ロングショット、クローズアップ",
    "アラビアのロレンス風": "砂漠、70mm、暖色系、広角、ロングショット、パン",
    "サウンド・オブ・ミュージック風": "広角、明るい、緑、ミュージカル、ロングショット、パン、ティルト",
    "ウエスト・サイド物語風": "カラフル、赤/青(対立)、ストリートダンス、ミュージカル、ダイナミック、クレーンショット、ロングショット",
    "大脱走風": "グレー、緑、トンネル、ロングショット、クローズアップ",
    "七人の侍風": "モノクロ、ローキー、埃、雨、マルチカメラ、ロングショット、スローモーション",
    "羅生門風": "モノクロ、光/影、回想、マルチカメラ、ロングショット、クローズアップ"
};

// DOMが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', () => {
    // フォーム要素の取得
    const form = document.getElementById('promptForm');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    // スタイルセクションの生成
    generateCheckboxes('styleSection', styleData["映像表現スタイル"]);

    // 画角セクションの生成
    generateRadioButtons('angleSection', angleData);

    // カメラ制御セクションの生成
    generateCheckboxes('cameraSection', cameraControlData["カメラ制御"]);

    // 映画スタイルセクションの生成
    generateMovieStyleCheckboxes('compositionSection', movieStyleData);

    // フォーム送信時の処理
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generatePrompt();
    });

    // コピーボタンの処理
    copyButton.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });
});

// チェックボックスを生成する関数
function generateCheckboxes(sectionId, data, prefix = '', depth = 0) {
    const section = document.getElementById(sectionId);
    
    if (sectionId === 'styleSection') {
        // 映像表現スタイル用の特別な処理
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'object') {
                const category = document.createElement('div');
                category.className = `style-category depth-${depth}`;
                
                // カテゴリヘッダーを作成
                const header = document.createElement('div');
                header.className = 'category-header';
                header.innerHTML = `<h3>${key}</h3>`;
                category.appendChild(header);

                // カテゴリコンテンツを作成
                const content = document.createElement('div');
                content.className = 'category-content';
                category.appendChild(content);

                // 全てのアイテムを直接contentに追加
                if (key === 'アニメーション') {
                    generateFlatCheckboxItems(content, value, prefix);
                } else {
                    // 他のカテゴリは既存の処理を維持
                    for (const [childKey, childValue] of Object.entries(value)) {
                        if (typeof childValue === 'object') {
                            const subCategory = document.createElement('div');
                            subCategory.className = `style-subcategory depth-${depth + 1}`;
                            const subHeader = document.createElement('div');
                            subHeader.className = 'category-header';
                            subHeader.innerHTML = `<h4>${childKey}</h4>`;
                            subCategory.appendChild(subHeader);
                            
                            const subContent = document.createElement('div');
                            subContent.className = 'category-content';
                            subCategory.appendChild(subContent);
                            
                            generateCheckboxItems(subContent, childValue, `${prefix}${childKey}-`);
                            content.appendChild(subCategory);
                        } else {
                            const div = createCheckboxItem(childKey, childValue, prefix);
                            content.appendChild(div);
                        }
                    }
                }

                section.appendChild(category);
            }
        }
    } else if (sectionId === 'cameraSection') {
        // カメラ制御用の特別な処理
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'object') {
                const category = document.createElement('div');
                category.className = `camera-category depth-${depth}`;
                
                // カテゴリヘッダーを作成
                const header = document.createElement('div');
                header.className = 'category-header';
                header.innerHTML = `<h3>${key}</h3>`;
                category.appendChild(header);

                // カテゴリコンテンツを作成
                const content = document.createElement('div');
                content.className = 'category-content';
                category.appendChild(content);

                // サブカテゴリとアイテムを生成
                for (const [childKey, childValue] of Object.entries(value)) {
                    if (typeof childValue === 'object') {
                        const subCategory = document.createElement('div');
                        subCategory.className = `camera-subcategory depth-${depth + 1}`;
                        
                        const subHeader = document.createElement('div');
                        subHeader.className = 'category-header';
                        subHeader.innerHTML = `<h4>${childKey}</h4>`;
                        subCategory.appendChild(subHeader);
                        
                        const subContent = document.createElement('div');
                        subContent.className = 'category-content';
                        subCategory.appendChild(subContent);
                        
                        generateCameraItems(subContent, childValue, `${prefix}${childKey}-`);
                        content.appendChild(subCategory);
                    } else {
                        const div = createCameraItem(childKey, childValue, prefix);
                        content.appendChild(div);
                    }
                }

                section.appendChild(category);
            }
        }
    } else {
        // 他のセクション用の既存の処理を維持
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'object') {
                const category = document.createElement('div');
                category.className = `style-category depth-${depth}`;
                
                const header = document.createElement('div');
                header.className = 'category-header';
                header.innerHTML = `<h3>${key}</h3>`;
                category.appendChild(header);

                const content = document.createElement('div');
                content.className = 'category-content';
                category.appendChild(content);

                section.appendChild(category);
                generateCheckboxes(sectionId, value, `${prefix}${key}-`, depth + 1);
            } else {
                const div = createCheckboxItem(key, value, prefix);
                section.appendChild(div);
            }
        }
    }
}

// チェックボックスアイテムを生成するヘルパー関数
function createCheckboxItem(key, value, prefix) {
    const div = document.createElement('div');
    div.className = 'style-item';
    const id = `${prefix}${key}`.replace(/\s+/g, '-').toLowerCase();
    div.innerHTML = `
        <div class="tooltip">
            <input type="checkbox" id="${id}" name="style" value="${key}">
            <label for="${id}">${key}</label>
            <span class="tooltiptext">${value}</span>
        </div>
    `;
    return div;
}

// オブジェクトからチェックボックスアイテムを生成するヘルパー関数
function generateCheckboxItems(container, data, prefix) {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object') {
            generateCheckboxItems(container, value, `${prefix}${key}-`);
        } else {
            const div = createCheckboxItem(key, value, prefix);
            container.appendChild(div);
        }
    }
}

// ラジオボタンを生成する関数
function generateRadioButtons(sectionId, data, depth = 0) {
    const section = typeof sectionId === 'string' ? document.getElementById(sectionId) : sectionId;
    
    if (!section) return;
    
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object') {
            const category = document.createElement('div');
            category.className = `angle-category depth-${depth}`;
            
            // カテゴリヘッダーを作成
            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `<h3>${key}</h3>`;
            category.appendChild(header);

            // カテゴリコンテンツを作成
            const content = document.createElement('div');
            content.className = 'category-content';
            
            // 説明文がある場合は追加
            if (value.description) {
                const desc = document.createElement('div');
                desc.className = 'category-description';
                desc.textContent = value.description;
                content.appendChild(desc);
                
                // descriptionを除いた残りのオブジェクトで処理
                const restObj = Object.fromEntries(
                    Object.entries(value).filter(([k]) => k !== 'description')
                );
                generateAngleItems(content, restObj);
            } else {
                generateAngleItems(content, value);
            }
            
            category.appendChild(content);
            section.appendChild(category);
        } else {
            const div = document.createElement('div');
            div.className = 'angle-item';
            const id = `${key}`.replace(/\s+/g, '-').toLowerCase();
            div.innerHTML = `
                <div class="tooltip">
                    <input type="radio" id="${id}" name="angle" value="${key}">
                    <label for="${id}">${key}</label>
                    <span class="tooltiptext">${value}</span>
                </div>
            `;
            section.appendChild(div);
        }
    }
}

// 画角アイテムを生成するヘルパー関数
function generateAngleItems(container, data) {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' && !value.description) {
            generateAngleItems(container, value);
        } else {
            const div = document.createElement('div');
            div.className = 'angle-item';
            const id = `${key}`.replace(/\s+/g, '-').toLowerCase();
            div.innerHTML = `
                <div class="tooltip">
                    <input type="radio" id="${id}" name="angle" value="${key}">
                    <label for="${id}">${key}</label>
                    <span class="tooltiptext">${typeof value === 'string' ? value : value.description || ''}</span>
                </div>
            `;
            container.appendChild(div);
        }
    }
}

// 映画スタイルのチェックボックスを生成する関数
function generateMovieStyleCheckboxes(sectionId, data) {
    const section = document.getElementById(sectionId);
    
    const container = document.createElement('div');
    container.className = 'movie-style-container';
    section.appendChild(container);
    
    for (const [key, value] of Object.entries(data)) {
        const div = document.createElement('div');
        div.className = 'movie-style-item';
        const id = key.replace(/\s+/g, '-').toLowerCase();
        div.innerHTML = `
            <div class="tooltip">
                <input type="checkbox" id="${id}" name="movieStyle" value="${key}">
                <label for="${id}">${key}</label>
                <span class="tooltiptext">${value}</span>
            </div>
        `;
        container.appendChild(div);
    }
}

// プロンプトを生成する関数
function generatePrompt() {
    const who = document.getElementById('who').value;
    const what = document.getElementById('what').value;
    const where = document.getElementById('where').value;
    const how = document.getElementById('how').value;
    const when = document.getElementById('when').value;
    
    // 選択された要素を取得
    const styles = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(cb => cb.value);
    const emotions = Array.from(document.querySelectorAll('input[name="emotion"]:checked')).map(cb => cb.value);
    const angle = document.querySelector('input[name="angle"]:checked')?.value || '';
    const cameraControls = Array.from(document.querySelectorAll('input[name="cameraControl"]:checked')).map(cb => cb.value);
    const background = document.getElementById('background').value;
    const movieStyles = Array.from(document.querySelectorAll('input[name="movieStyle"]:checked')).map(cb => cb.value);

    // プロンプトを構築
    let prompt = '以下の動画を作成します';
    
    // スタイル
    if (styles.length > 0) {
        prompt += '[スタイル]\n' + styles.join(', ') + '\n\n';
    }

    // テーマ
    prompt += '[テーマ]\n';
    prompt += `誰が：${who}\n`;
    prompt += `何を：${what}\n`;
    if (where) prompt += `どこで：${where}\n`;
    if (how) prompt += `どうやって：${how}\n`;
    if (when) prompt += `いつ：${when}\n\n`;

    // 演技
    if (emotions.length > 0) {
        prompt += '[演技]\n' + emotions.join(', ') + '\n\n';
    }

    // 画角
    if (angle) {
        prompt += '[画角]\n' + angle + '\n\n';
    }

    // カメラ制御
    if (cameraControls.length > 0) {
        prompt += '[カメラ制御]\n' + cameraControls.join(', ') + '\n\n';
    }

    // 背景
    if (background) {
        prompt += '[背景]\n' + background + '\n\n';
    }

    // 構成
    if (movieStyles.length > 0) {
        prompt += '[構成]\n' + movieStyles.join(', ') + '\n';
    }

    // 出力
    document.getElementById('outputText').value = prompt.trim();
}

// カメラ制御アイテムを生成するヘルパー関数
function createCameraItem(key, value, prefix) {
    const div = document.createElement('div');
    div.className = 'camera-item';
    const id = `${prefix}${key}`.replace(/\s+/g, '-').toLowerCase();
    div.innerHTML = `
        <div class="tooltip">
            <input type="checkbox" id="${id}" name="cameraControl" value="${key}">
            <label for="${id}">${key}</label>
            <span class="tooltiptext">${value}</span>
        </div>
    `;
    return div;
}

// カメラ制御アイテムを生成するヘルパー関数
function generateCameraItems(container, data, prefix) {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object') {
            generateCameraItems(container, value, `${prefix}${key}-`);
        } else {
            const div = createCameraItem(key, value, prefix);
            container.appendChild(div);
        }
    }
}
