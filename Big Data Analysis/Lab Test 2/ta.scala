package TransformationActions

import org.apache.spark.SparkContext
import org.apache.spark.SparkConf


object ta {
  def main(args: Array[String]) {
    /* configure spark application */
    val conf = new SparkConf().setAppName("Spark Scala WordCount Example").setMaster("local[1]")
    
    /* spark context*/
    val sc = new SparkContext(conf)
    
    val input = sc.parallelize(List(1, 2, 3, 4));
    val result = input.map(x => x*x)
    println("Map : " + result.collect().mkString(", "))
    
    val input1 = sc.parallelize(List(1, 2, 3, 4));
    val input2 = sc.parallelize(List(3, 4, 5, 6));
    val result1 = input1.union(input2)
    println("Union : " + result1.collect().mkString(", "))
    
    val inp1 = sc.parallelize(List(1, 2, 3, 4));
    val inp2 = sc.parallelize(List(3, 4, 5, 6));
    val res2 = inp1.intersection(inp2)
    println("Intersection : " + res2.collect().mkString(", "))
    
    val i = sc.parallelize(List(1, 2, 3, 4, 3, 4));
    val r2 = i.distinct()
    println("Distinct : " + r2.collect().mkString(", "))
    
    println(sc.parallelize(1 to 20, 4).collect().mkString(", "))
    println(sc.parallelize(1 to 20, 4).count())
    println(sc.parallelize(1 to 20, 4).first())
    println(sc.parallelize(1 to 20, 4).take(5).mkString(", "))
  }
}