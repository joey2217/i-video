# i-video

## CMS api

https://jyzyapi.com/course

https://github.com/magicblack/maccms10/blob/master/%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3/API%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E.txt

https://swiperjs.com/

https://merakiui.com/components/#

```
列表接收参数：
ac=list
t=类别ID
pg=页码
limit=每页
wd=搜索关键字
h=几小时内的数据
例如： http://域名/api.php/provide/vod/?ac=list&t=1&pg=5   分类ID为1的列表数据第5页

内容接收参数：
参数 ids=数据ID，多个ID逗号分割。
     t=类型ID
     pg=页码
     h=几小时内的数据

例如:   http://域名/api.php/provide/vod/?ac=detail&ids=123,567     获取ID为123和567的数据信息
        http://域名/api.php/provide/vod/?ac=detail&h=24     获取24小时内更新数据信息

```
