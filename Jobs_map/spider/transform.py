# -*- coding: utf-8 -*-
import xlrd
import json
import io

path = "../echart/src/asserts/data/"
arr = ['java','Php','python','web', 'Hadoop']
#  arr = ['javaMap','HadoopMap','PhpMap','pythonMap','webMap']
for name in arr:

    # 打开excel表单
    filename = u'./'+ name +'.xlsx'
    excel = xlrd.open_workbook(filename)
 
    # 得到第一张表单
    sheet1 = excel.sheets()[0]
    # 找到有几列几列
    nrows = sheet1.nrows  # 行数
    ncols = sheet1.ncols  # 列数

    totalArray = []
    title = []
    # 标题
    for i in range(0, ncols):
        title.append(sheet1.cell(0, i).value)
    # 数据
    for rowindex in range(1, nrows):
        dic = {}
        for colindex in range(0, ncols):
            s = sheet1.cell(rowindex, colindex).value
            dic[title[colindex]] = s
        totalArray.append(dic)
    jsonFile = io.open(path + name + '.json','w', encoding='utf8')
    jsonFile.write(json.dumps(totalArray, ensure_ascii=False))
    jsonFile.flush()
    jsonFile.close()