# Geri Yayılım Algoritması nedir?
Geri Yayılım Algoritması, yapay sinir ağları için özel bir öğrenme kuralıdır. Aynı katmanda bulunan nöronların birbirleri arasında bağlantısı yoktur. Bir katmandaki her nöron bir ileri katmandaki her nörona ayrı ayrı bağlıdır ve bu nöronların giriş değerlerini verir. Hem giriş hem de çıkış verilerinin mutlaka bilinmesi gerekir. Hedef çıktı değeri verilir, örnek veriler ağa öğretilir. Öğrenme sırasında, her örnek için ağın çıktı değeri ile verilen hedef çıktı değeri karşılaştırılır hata değeri bulunur. Bu hata değeri, ağa tekrar geri besleme şeklinde verilir. Hata değerini azaltmak amacı ile nöronlar arasındaki bağlantı ağırlıkları her öğrenme sonunda güncellenir.

Bu örnek aşağıda belirtilen örnek girdiler ve ilk ağırlıklar dahilinde; 3 adet giriş katmanı, 2 adet gizli katman ve 1 adet çıkış katmanı ele alınarak modellenmiştir.

**Not:** Momentum katsayısı "1" olarak kabul edilmiştir.

## Örnek veriler ve giriş ağırlıkları:

![GitHub Logo](https://github.com/sahindogukan/BackPropagationAlgorithm/blob/master/ysa-data.PNG)
![GitHub Logo](https://github.com/sahindogukan/BackPropagationAlgorithm/blob/master/ysamodel.PNG)

## Kullanım Web Arayüzü:
![GitHub Logo](https://github.com/sahindogukan/BackPropagationAlgorithm/blob/master/ysa.png)


