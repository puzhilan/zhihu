药品公司有一些数据
 六味地黄丸,泻立停, 999感冒灵,阿莫西林
 3月 15     4月 5  5月 5        6月 3[销售]
 3000       2000   2000        1002  [库存]
-依据数据创建表?
 药品:[六味地黄丸,泻立停, 999感冒灵,阿莫西林]
 销售:[3/4/5/6/7/8/..]
 库存:[3/4/5/6/7/8..]
 web1806
 药品yaopin       [id,name,price]
 库存kucun        [id,yid,bank]
 销售xiaoshou     [id,yid,sales]
 db.sql


-依据数据创建销售统计图;库存量图
 (1)app.js
 (2)public/sales.html bank.html
    jq.js


作业1:每一款药品销售额[一月,二月,...十二月]
作业2:修改表额售表[id,yid,sales,month,year]
ALTER TABLE xiaoshou ADD month INT;
ALTER TABLE xiaoshou ADD year INT;
DELETE FROM xiaoshou;             
INSERT INTO xiaoshou VALUES(null,1,1000,1,2017);
INSERT INTO xiaoshou VALUES(null,1,1200,2,2017);
INSERT INTO xiaoshou VALUES(null,1,1200,3,2017);
INSERT INTO xiaoshou VALUES(null,1,1300,4,2017);
INSERT INTO xiaoshou VALUES(null,1,1400,5,2017);
INSERT INTO xiaoshou VALUES(null,1,1500,6,2017);
INSERT INTO xiaoshou VALUES(null,1,1600,7,2017);
INSERT INTO xiaoshou VALUES(null,1,1100,8,2017);
INSERT INTO xiaoshou VALUES(null,1,1900,9,2017);
INSERT INTO xiaoshou VALUES(null,1,1900,10,2017);
INSERT INTO xiaoshou VALUES(null,1,900,11,2017);
INSERT INTO xiaoshou VALUES(null,1,200,12,2017);

药品id,药品名称,药品销售额,当前月份
yaopin xiaoshou

app.js  GET /salesmonth?id=1
SELECT y.id,y.name,x.sales,x.month
FROM yaopin y INNER JOIN xiaoshou x
ON y.id = x.yid
WHERE y.id = 1;



#某一种商品年销售额汇总
3000 100  100  900
2015 2016 2017 2018

INSERT INTO xiaoshou VALUES(null,1,300,1,2015);
INSERT INTO xiaoshou VALUES(null,1,600,2,2015);
INSERT INTO xiaoshou VALUES(null,1,1000,1,2016);
INSERT INTO xiaoshou VALUES(null,1,200,2,2016);
INSERT INTO xiaoshou VALUES(null,1,300,1,2018);
INSERT INTO xiaoshou VALUES(null,1,400,2,2018);

yaopin xiaoshou  按年份汇总统计

SELECT sum(sales),year   #sum求累加和函数 
FROM xiaoshou  
GROUP BY year            #GROUP BY 按列分组

#GROUP BY  按钮year分组 2015(2) 2016(2) 2017(12) 2018(2)
#在组中累加和统计sum()   900      1200    13000   500





























作业3:药品名称[十二月销售额]
