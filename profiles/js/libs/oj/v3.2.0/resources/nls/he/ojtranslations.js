define({"oj-message":{fatal:"מכריע",error:"שגיאה",warning:"אזהרה",info:"מידע",confirmation:"אישור","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"הערך אינו בתבנית הצפויה.",detail:"הזן ערך בתבנית הצפויה.","plural-separator":", ",hint:{summary:"לדוגמה: {exampleValue}",detail:"הזן ערך באותה התבנית כמו בדוגמה זו: '{exampleValue}'","detail-plural":"הזן ערך באותה התבנית כמו בדוגמאות אלו: '{exampleValue}'"},optionHint:{detail:"ערך קביל לאפשרות '{propertyName}' הוא '{propertyValueValid}'.","detail-plural":"ערכים קבילים לאפשרות '{propertyName}' הם '{propertyValueValid}'."},
optionTypesMismatch:{summary:"כאשר האפשרות '{propertyName}' מוגדרת '{propertyValue}', דרוש ערך לאפשרות '{requiredPropertyName}'."},optionTypeInvalid:{summary:"לא סופק ערך מהסוג הצפוי לאפשרות '{propertyName}'."},optionOutOfRange:{summary:"הערך {propertyValue} הוא מחוץ לטווח עבור האפשרות '{propertyName}'."},optionValueInvalid:{summary:"ערך לא תקף '{propertyValue}' צוין לאפשרות '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' אינו בתבנית המספר הצפויה."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'קצר' ו'ארוך' אינם נתמכים לפירוק ממיר.",
detail:"שנה רכיב ל-readOnly. שדות readOnly לא קוראים לפונקציית הפירוק של הממיר."},currencyFormatMismatch:{summary:"'{value}' אינו בתבנית המטבע הצפויה."},percentFormatMismatch:{summary:"'{value}' אינו בתבנית האחוז הצפויה."}},datetime:{datetimeOutOfRange:{summary:"הערך '{value}' הוא מחוץ לטווח עבור ה-'{propertyName}'.",detail:"הזן ערך בין '{minValue}' לבין '{maxValue}'.",hour:"שעה",minute:"דקה",second:"שנייה",millisec:"אלפיות השנייה",month:"חודש",day:"יום",year:"year","month name":"שם החודש",weekday:"יום בשבוע"},
dateFormatMismatch:{summary:"'{value}' אינו בתבנית התאריך הצפויה."},invalidTimeZoneID:{summary:"סופק מזהה אזור זמן {timeZoneID}שאינו תקף."},nonExistingTime:{summary:"שעת הקלט לא קיימת כיוון שהיא חלה במהלך המעבר לשעון קיץ."},missingTimeZoneData:{summary:"חסרים נתוני אזור זמן. קרא ל-'ojs/ojtimezonedata' הדרוש כדי לטעון את נתוני אזור הזמן."},timeFormatMismatch:{summary:"'{value}' אינו בתבנית הזמן הצפויה."},datetimeFormatMismatch:{summary:"'{value}' אינו בתבנית התאריך והשעה הצפויה."},dateToWeekdayMismatch:{summary:"היום '{date}' לא חל ב-'{weekday}'.",
detail:"הזן יום בשבוע שמתאים לתאריך."},invalidISOString:{summary:"'{isoStr}' שסופק אינו מחרוזת תקפה של ISO 8601.",detail:"ספק מחרוזת תקפה של ISO 8601."}}},"oj-validator":{length:{hint:{min:"הזן {min} תווים לכל הפחות.",max:"הזן {max} תווים לכל היותר",inRange:"הזן {min} תווים או יותר, עד למספר המרבי של {max}.",exact:"הזן {length} תווים."},messageDetail:{tooShort:"הזן{min} תווים או יותר, אך לא פחות.",tooLong:"הזן {max} תווים או פחות, אך לא יותר."},messageSummary:{tooShort:"מספר התווים קטן מדי.",tooLong:"מספר התווים גדול מדי."}},
range:{number:{hint:{min:"הזן מספר גדול או שווה ל-{min}.",max:"הזן מספר קטן או שווה ל-{max}.",inRange:"הזן מספר בין {min} לבין {max}.",exact:"הזן את המספר {num}."},messageDetail:{rangeUnderflow:"המספר חייב להיות {min} או מספר גדול ממנו.",rangeOverflow:"המספר חייב להיות {max} או מספר קטן ממנו.",exact:"המספר חייב להיות {num}."},messageSummary:{rangeUnderflow:"המספר קטן מדי.",rangeOverflow:"המספר גדול מדי."}},datetime:{hint:{min:"הזן תאריך ושעה מאוחרים או שווים ל: {min}.",max:"הזן תאריך ושעה מוקדמים או שווים ל: {max}.",
inRange:"הזן תאריך ושעה שחלים בין {min} לבין {max}."},messageDetail:{rangeUnderflow:"תאריך ושעה חייבים לחול ב: {min} או מאוחר יותר.",rangeOverflow:"תאריך ושעה חייבים לחול ב: {max} או מוקדם יותר."},messageSummary:{rangeUnderflow:"התאריךוהשעה מוקדמים מהתאריך והשעה המינימליים.",rangeOverflow:"התאריךוהשעה מאוחרים מהתאריך והשעה המקסימליים."}},date:{hint:{min:"הזן תאריך ב-{min} או מאוחר יותר.",max:"הזן תאריך ב-{max} או מוקדם יותר.",inRange:"הזן תאריך בין  {min} ל-{max}."},messageDetail:{rangeUnderflow:"התאריך חייב לחול ב-{min} או מאוחר יותר.",
rangeOverflow:"התאריך חייב לחול ב-{max} או מוקדם יותר."},messageSummary:{rangeUnderflow:"התאריך מוקדם מתאריך המינימום.",rangeOverflow:"התאריך מאוחר מתאריך המקסימום."}},time:{hint:{min:"הזן שעה ב-{min} או מאוחר יותר.",max:"הזן שעה ב-{max} או מוקדם יותר.",inRange:"הזן שעה בין {min} ל-{max}."},messageDetail:{rangeUnderflow:"השעה חייבת להיות {min} או מאוחר יותר.",rangeOverflow:"השעה חייבת להיות-{max} או מוקדם יותר."},messageSummary:{rangeUnderflow:"השעה מוקדמת משעת המינימום.",rangeOverflow:"השעה מאוחרת משעת המקסימום."}}},
restriction:{date:{messageSummary:"התאריך {value} הוא מרשומה חסומה.",messageDetail:"התאריך {value} אינו יכול להיות מרשומה חסומה."}},regExp:{summary:"התבנית שגויה.",detail:"הערך '{value}' חייב להתאים לתבנית זו: '{pattern}'"},required:{summary:"נדרש ערך.",detail:"עליך להזין ערך."}},"oj-ojInputDate":{done:"בוצע",cancel:"בטל",prevText:"הקודם",nextText:"הבא",currentText:"היום",weekHeader:"שבוע",tooltipCalendar:"בחר תאריך",tooltipCalendarTime:"בחר תאריך ושעה",tooltipCalendarDisabled:"'בחר תאריך' חסום",
tooltipCalendarTimeDisabled:"'בחר תאריך ושעה' חסום",picker:"בורר",weekText:"שבוע",datePicker:"בורר תאריכים",inputHelp:"לחץ על המקש למטה או על המקש למעלה כדי לגשת ללוח שנה",inputHelpBoth:"לחץ על המקש למטה או על המקש למעלה כדי לגשת ללוח שנה; לחץ על Shift + מקש למטה או על Shift + מקש למעלה כדי לגשת לרשימה הנפתחת של שעות",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",
messageDetail:""}},"oj-ojInputTime":{cancelText:"בטל",okText:"אוקיי",currentTimeText:"כעת",hourWheelLabel:"שעה",minuteWheelLabel:"דקה",ampmWheelLabel:"AMPM",tooltipTime:"בחר שעה",tooltipTimeDisabled:"'בחר שעה' חסום",inputHelp:"לחץ על המקש למטה או על המקש למעלה כדי לגשת לרשימה הנפתחת של שעות",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},
regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"הערך חייב להתאים לתבנית זו: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"הדף הבא",labelAccArrowPreviousPage:"הדף הקודם",tipArrowNextPage:"הבא",tipArrowPreviousPage:"הקודם"},"oj-ojDataGrid":{accessibleSortAscending:"{id} ממוין בסדר עולה",accessibleSortDescending:"{id} ממוין בסדר יורד",accessibleActionableMode:"הזן מצב ניתן לפעולה",accessibleNavigationMode:"הזן מצב ניווט, לחץ על F2 כדי להזין מצב עריכה או מצב ניתן לפעולה",
accessibleEditableMode:"הזן מצב ניתן לפעולה, לחץ על escape כדי לנווט אל מחוץ לרשת הנתונים.",accessibleSummaryExact:"זוהי רשת נתונים עם {rownum} שורות ועם {colnum} עמודות",accessibleSummaryEstimate:"זוהי רשת נתונים עם מספר לא ידוע של שורות ועמודות",accessibleSummaryExpanded:"כרגע יש {num} שורות מורחבות",accessibleRowExpanded:"שורה מורחבת",accessibleRowCollapsed:"שורה מכווצת",accessibleRowSelected:"נבחרה שורה {row}",accessibleColumnSelected:"נבחרה עמודה {column}",accessibleStateSelected:"נבחרו",accessibleMultiCellSelected:"{num} תאים נבחרו",
accessibleRowContext:"{index} של שורה",accessibleColumnContext:"{index} של עמודה",accessibleRowHeaderContext:"{index} של כותרת שורה",accessibleColumnHeaderContext:"{index} של כותרת עמודה",accessibleRowEndHeaderContext:"כותרת סוף שורה{index}",accessibleColumnEndHeaderContext:"כותרת סוף עמודה {index}",accessibleLevelContext:"רמה {level}",accessibleRangeSelectModeOn:"'הוסף טווח נבחר של תאים' במצב מופעל",accessibleRangeSelectModeOff:"'הוסף טווח נבחר של תאים' במצב מושבת",accessibleFirstRow:"הגעת לשורה הראשונה",
accessibleLastRow:"הגעת לשורה האחרונה",accessibleFirstColumn:"הגעת לעמודה הראשונה",accessibleLastColumn:"הגעת לעמודה האחרונה",accessibleSelectionAffordanceTop:"מצביע (handle) עליון של בחירה",accessibleSelectionAffordanceBottom:"מצביע (handle) תחתון של בחירה",msgFetchingData:"שולף נתונים...",msgNoData:"אין פריטים להצגה.",labelResize:"שינוי גודל",labelResizeWidth:"שינוי רוחב",labelResizeHeight:"שינוי גובה",labelSortRow:"מיין שורות",labelSortRowAsc:"מיין שורות בסדר עולה",labelSortRowDsc:"מיין שורות בסדר יורד",
labelSortCol:"מיין עמודה",labelSortColAsc:"מיין עמודות בסדר עולה",labelSortColDsc:"מיין עמודות בסדר יורד",labelCut:"גזור",labelPaste:"הדבק",labelEnableNonContiguous:"אפשר בחירה ללא המשך מיידי",labelDisableNonContiguous:"חסום בחירה ללא המשך מיידי",labelResizeDialogSubmit:"אוקיי"},"oj-ojRowExpander":{accessibleLevelDescription:"רמה {level}",accessibleRowDescription:"רמה {level}, שורה {num} מתוך {total}",accessibleRowExpanded:"שורה מורחבת",accessibleRowCollapsed:"שורה מכווצת",accessibleStateExpanded:"מורחב",
accessibleStateCollapsed:"מכווץ"},"oj-ojListView":{msgFetchingData:"שולף נתונים...",msgNoData:"אין פריטים להצגה.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"הקש פעמיים והחזק. המתן להופעת הצליל ואז גרור כדי לסדר מחדש.",accessibleReorderBeforeItem:"לפני {item}",accessibleReorderAfterItem:"אחרי {item}",accessibleReorderInsideItem:"ה&כנסה {item}",accessibleNavigateSkipItems:"מדלג על {numSkip} פריטים",labelCut:"גזור",labelCopy:"העתק",
labelPaste:"הדבק",labelPasteBefore:"הדבק לפני",labelPasteAfter:"הדבק אחרי"},"oj-_ojLabel":{tooltipHelp:"עזרה",tooltipRequired:"נדרש"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"הפחתה",tooltipIncrement:"תוספת"},"oj-ojTable":{labelAccSelectionAffordanceTop:"מצביע (handle) עליון של בחירה",
labelAccSelectionAffordanceBottom:"מצביע (handle) תחתון של בחירה",labelEnableNonContiguousSelection:"אפשר בחירה ללא המשך מיידי",labelDisableNonContiguousSelection:"חסום בחירה ללא המשך מיידי",labelSelectRow:"בחר שורה ",labelEditRow:"ערוך שורה",labelSelectAndEditRow:"בחר וערוך שורה",labelSelectColumn:"בחר עמודה",labelSort:"מיין",labelSortAsc:"מיין בסדר עולה",labelSortDsc:"מיין בסדר יורד",msgFetchingData:"שולף נתונים...",msgNoData:"אין נתונים להצגה.",msgInitializing:"מאתחל...",msgStatusSortAscending:"{0} ממוין בסדר עולה.",
msgStatusSortDescending:"{0} ממוין בסדר יורד."},"oj-ojTabs":{labelCut:"גזור",labelPasteBefore:"הדבק לפני",labelPasteAfter:"הדבק אחרי",labelRemove:"הסר ",labelReorder:"סדר מחדש",removeCueText:"ניתן להסרה"},"oj-ojCheckboxset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"שדה חיפוש",noMatchesFound:"לא נמצאו התאמות",oneMatchesFound:"נמצאה התאמה אחת",
moreMatchesFound:"{num} התאמות נמצאו"},"oj-ojSwitch":{SwitchON:"מופעל",SwitchOFF:"כבוי"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"לא נמצאו התאמות"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"לא נמצאו התאמות",oneMatchesFound:"נמצאה התאמה אחת",moreMatchesFound:"{num} התאמות נמצאו"},"oj-ojTree":{stateLoading:"טוען...",labelNewNode:"צומת חדש",labelMultiSelection:"בחירות מרובות",labelEdit:"ערוך",labelCreate:"צור",
labelCut:"גזור",labelCopy:"העתק",labelPaste:"הדבק",labelPasteAfter:"הדבק אחרי",labelPasteBefore:"הדבק לפני",labelRemove:"הסר ",labelRename:"שנה שם",labelNoData:"אין נתונים"},"oj-ojPagingControl":{labelAccPaging:"עימוד",labelAccNavFirstPage:"דף ראשון",labelAccNavLastPage:"דף אחרון",labelAccNavNextPage:"הדף הבא",labelAccNavPreviousPage:"הדף הקודם",labelAccNavPage:"דף",labelLoadMore:"הצג עוד...",labelLoadMoreMaxRows:"הגיע לגבול המרבי של {maxRows} שורות",labelNavInputPage:"דף",labelNavInputPageMax:"מתוך {pageMax}",
msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"מתוך",msgItemRangeOfAtLeast:"מתוך לפחות",msgItemRangeOfApprox:"מתוך בערך",msgItemRangeItems:"פריטים",tipNavInputPage:"עבור אל דף",tipNavPageLink:"עבור אל דף {pageNum}",tipNavNextPage:"הבא",tipNavPreviousPage:"הקודם",tipNavFirstPage:"ראשון",tipNavLastPage:"אחרון",pageInvalid:{summary:"ערך הדף שצוין אינו תקף.",detail:"הזן ערך גדול מ-0."},maxPageLinksInvalid:{summary:"הערך עבור maxPageLinks אינו תקף.",detail:"הזן ערך גדול מ-4."}},
"oj-ojMasonryLayout":{labelCut:"גזור",labelPasteBefore:"הדבק לפני",labelPasteAfter:"הדבק אחרי"},"oj-panel":{labelAccButtonExpand:"הרחב",labelAccButtonCollapse:"כווץ ",labelAccButtonRemove:"הסר "},"oj-ojChart":{labelDefaultGroupName:"קבוצה {0}",labelSeries:"סדרה",labelGroup:"קבוצה",labelDate:"תאריך",labelValue:"ערך",labelTargetValue:"מטרה",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"אחוז",labelLow:"נמוך  ",labelHigh:"גבוה",labelOpen:"פתח",labelClose:"סגור",labelVolume:"נפח",labelQ1:"Q1",labelQ2:"Q2",
labelQ3:"Q3",labelMin:"מינימום",labelMax:"מקסימום",labelOther:"אחר",tooltipPan:"הזז",tooltipSelect:"בחירת ריבוע",tooltipZoom:"זום בריבוע",componentName:"תרשים"},"oj-dvtBaseGauge":{componentName:"שעון"},"oj-ojDiagram":{promotedLink:"{0} קישור",promotedLinks:"{0} קישורים",promotedLinkAriaDesc:"עקיף",componentName:"דיאגרמה"},"oj-ojGantt":{componentName:"תרשים גאנט",accessibleDurationDays:"{0} ימים",accessibleDurationHours:"{0} שעות",accessibleTaskInfo:"שעת ההתחלה היא {0}, שעת הסיום היא {1}, משך הזמן הוא {2}",
accessibleMilestoneInfo:"השעה היא {0}",accessibleRowInfo:"{0} של שורה",accessiblePredecessorInfo:"{0} קודמים",accessibleSuccessorInfo:"{0} עוקבים",accessibleDependencyInfo:"סוג תלות {0}, מקשר את {1} אל {2}",startStartDependencyAriaDesc:"מהתחלה להתחלה",startFinishDependencyAriaDesc:"מהתחלה לסיום",finishStartDependencyAriaDesc:"מסיום להתחלה",finishFinishDependencyAriaDesc:"סיום לסיום",tooltipZoomIn:"התקרבות",tooltipZoomOut:"התרחקות",labelRow:"שורה",labelStart:"התחלה",labelEnd:"סיום",labelLabel:"תווית"},
"oj-ojLegend":{componentName:"מקרא"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"אחר",labelGroup:"קבוצה",labelSize:"גודל",labelAdditionalData:"נתונים נוספים",componentName:"N-תיבות"},"oj-ojPictoChart":{componentName:"תרשים תמונה"},"oj-ojSparkChart":{componentName:"תרשים"},"oj-ojSunburst":{labelColor:"צבע",labelSize:"גודל",tooltipExpand:"הרחב",tooltipCollapse:"כווץ ",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"ענן תגיות"},"oj-ojThematicMap":{componentName:"מפה נושאית"},"oj-ojTimeAxis":{componentName:"ציר זמן"},
"oj-ojTimeline":{componentName:"ציר זמן",accessibleItemDesc:"התיאור הוא {0}.",accessibleItemEnd:"שעת הסיום היא {0}.",accessibleItemStart:"שעת ההתחלה היא {0}.",accessibleItemTitle:"הכותרת היא {0}.",labelSeries:"סדרה",tooltipZoomIn:"התקרבות",tooltipZoomOut:"התרחקות"},"oj-ojTreemap":{labelColor:"צבע",labelSize:"גודל",tooltipIsolate:"בידוד",tooltipRestore:"שחזור",componentName:"מפת עץ"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",
labelScalingSuffixQuadrillion:"Q",labelInvalidData:"נתונים לא תקפים",labelNoData:"אין נתונים להצגה",labelClearSelection:"נקה בחירה",labelDataVisualization:"המחשה גרפית של נתונים",stateSelected:"נבחר",stateUnselected:"לא נבחר",stateMaximized:"מוגדל",stateMinimized:"ממוזער",stateExpanded:"מורחב",stateCollapsed:"מכווץ",stateIsolated:"מבודד",stateHidden:"נסתר",stateVisible:"גלוי",stateDrillable:"ניתן לגלילה",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} מתוך {1}"},"oj-ojNavigationList":{defaultRootLabel:"רשימת ניווט",
hierMenuBtnLabel:"לחצן תפריט היררכי",selectedLabel:"נבחרו",previousIcon:"הקודם",msgFetchingData:"שולף נתונים...",msgNoData:"אין פריטים להצגה.",overflowItemLabel:"עוד"},"oj-ojSlider":{noValue:"ל-ojSlider אין ערך",maxMin:"הסכום המרבי לא יכול להיות נמוך מהסכום המזערי",valueRange:"הערך חייב להיות בטווח מרבי/מזערי",optionNum:"{option} אפשרות אינה מספר",invalidStep:"שלב לא תקף; השלב חייב להיות > 0"},"oj-ojDialog":{labelCloseIcon:"סגור"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"מזין חלון צץ. לחץ על F6 כדי לנווט בין החלון הצץ והפקד המשויך.",
ariaLiveRegionInitialFocusNone:"חלון צץ נפתח. לחץ על F6 כדי לנווט בין החלון הצץ והפקד המשויך.",ariaLiveRegionInitialFocusFirstFocusableTouch:"מזין חלון צץ. ניתן לסגור חלון צץ על-ידי ניווט לקישור האחרון שבחלון.",ariaLiveRegionInitialFocusNoneTouch:"חלון צץ נפתח. נווט לקישור הבא כדי ליצור מיקוד בחלון הצץ.",ariaFocusSkipLink:"הקש פעמיים כדי לנווט לחלון הפתוח.",ariaCloseSkipLink:"הקש פעמיים כדי לסגור את החלון הפתוח."},"oj-pullToRefresh":{ariaRefreshLink:"הפעל קישור כדי לרענן תוכן",ariaRefreshingLink:"מרענן תוכן",
ariaRefreshCompleteLink:"הרענון הושלם"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"אין כותרת קבוצה מתאימה",ariaOthersLabel:"מספר",ariaInBetweenText:"בין {first} ל-{second}",ariaKeyboardInstructionText:"לחץ על Enter כדי לבחור ערך.",ariaTouchInstructionText:"הקש פעמיים והחזק כדי להיכנס למצב מחוות, ולאחר מכן גרור מעלה ומטה כדי להתאים את הערך."},"oj-ojMenu":{labelCancel:"בטל"},"oj-ojColorSpectrum":{labelHue:"גוון",labelOpacity:"אי שקיפות",
labelSatLum:"רוויה/זוהר",labelThumbDesc:"מחוון של ארבעה צדדים לספקטרום צבעים."},"oj-ojColorPalette":{labelNone:"אין"},"oj-ojColorPicker":{labelSwatches:"דוגמאות צבע",labelCustomColors:"צבעים מותאמים אישית",labelPrevColor:"צבע קודם",labelDefColor:"ברירת מחדל של צבע",labelDelete:"מחק",labelDeleteQ:"האם למחוק?",labelAdd:"הוסף",labelAddColor:"הוסף צבע",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"גוון",labelSliderSaturation:"רוויה",labelSliderSat:"Sat",labelSliderLightness:"בהירות",
labelSliderLum:"זוהר",labelSliderAlpha:"אלפא",labelOpacity:"אי שקיפות",labelSliderRed:"אדום",labelSliderGreen:"ירוק",labelSliderBlue:"כחול"},"oj-ojFilePicker":{dropzoneText:"שמוט את הקבצים כאן או לחץ לטעינה"}});